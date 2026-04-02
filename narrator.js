/* ═══════════════════════════════════════════════════════════
   NARRATOR.JS — Audiobook narrator for Miat Sual (100 Questions)
   Features: section-by-section, book mode, karaoke,
   voice/speed/pitch, loop, lock screen, sleep timer
   ═══════════════════════════════════════════════════════════ */

(function() {
  'use strict';

  // ═══ AVAILABILITY CHECK ═══
  if (!('speechSynthesis' in window)) {
    window.narratorTogglePanel = function() {
      if (typeof showToast === 'function') {
        var l = (typeof lang !== 'undefined') ? lang : 'en';
        var msg = l === 'ar' ? 'الراوي غير مدعوم في هذا المتصفح' : l === 'fr' ? 'Narrateur non supporté dans ce navigateur' : 'Narrator not supported in this browser';
        showToast(msg);
      }
    };
    window.narratorPlayPage = window.narratorPlayBook = window.narratorPause = function() {};
    window.narratorStop = window.narratorNext = window.narratorPrev = function() {};
    window.narratorSpeedChange = window.narratorPitchChange = function() {};
    window.narratorLoopChange = window.narratorSleepChange = function() {};
    window.narratorKaraokeToggle = window.narratorAutoScrollToggle = function() {};
    window.narratorDuoToggle = window.narratorVoiceChange = function() {};
    window.narratorPopulateVoices = function() {};
    return;
  }

  // ═══ I18N ═══
  const NR_T = {
    ar: {
      title: '🎧 الراوي',
      page: 'اقرأ هذه الصفحة',
      book: 'اقرأ ككتاب',
      voice: 'الصوت',
      speed: 'السرعة',
      pitch: 'النبرة',
      loop: 'تكرار البطاقة',
      sleep: 'مؤقت النوم',
      karaoke: 'كاريوكي',
      autoScroll: 'تمرير تلقائي',
      duo: 'ثنائي (عربي+فرنسي)',
      off: 'إيقاف',
      min: 'دقيقة',
      bookDone: 'تم الانتهاء من الكتاب',
      sleepDone: 'انتهى مؤقت النوم',
      sleepSet: 'مؤقت النوم:',
    },
    en: {
      title: '🎧 Narrator',
      page: 'Read this page',
      book: 'Read as a book',
      voice: 'Voice',
      speed: 'Speed',
      pitch: 'Pitch',
      loop: 'Loop card',
      sleep: 'Sleep timer',
      karaoke: 'Karaoke',
      autoScroll: 'Auto-scroll',
      duo: 'Duo (AR+FR)',
      off: 'Off',
      min: 'min',
      bookDone: 'Book finished',
      sleepDone: 'Sleep timer ended',
      sleepSet: 'Sleep:',
    },
    fr: {
      title: '🎧 Narrateur',
      page: 'Lire cette page',
      book: 'Lire comme un livre',
      voice: 'Voix',
      speed: 'Vitesse',
      pitch: 'Tonalité',
      loop: 'Répéter la carte',
      sleep: 'Minuterie',
      karaoke: 'Karaoké',
      autoScroll: 'Défilement auto',
      duo: 'Duo (AR+FR)',
      off: 'Désactivé',
      min: 'min',
      bookDone: 'Livre terminé',
      sleepDone: 'Minuterie terminée',
      sleepSet: 'Minuterie:',
    }
  };

  function nrT() { return NR_T[getLang()] || NR_T.en; }

  // ═══ STATE ═══
  const STATE = {
    playing: false,
    paused: false,
    mode: 'page',
    cardIndex: 0,
    cards: [],
    tabOrder: ['about','questions','search','favorites'],
    tabIndex: 0,
    loopCount: 0,
    loopCurrent: 0,
    sleepTimer: null,
    sleepMinutes: 0,
    duoTimeout: null,
    karaokeEnabled: true,
    autoScroll: true,
    duoReading: false,
    speed: 1,
    pitch: 1,
    voiceAR: null,
    voiceEN: null,
    voiceFR: null,
  };

  // ═══ VOICE SELECTION ═══
  function getLang() {
    return document.documentElement.lang || 'ar';
  }

  function loadVoices() {
    const voices = speechSynthesis.getVoices();
    if (!voices.length) return;
    const arPriority = ['Majed','Maged','Google Arabic','Tarik','Lila'];
    const enPriority = ['Samantha','Daniel','Google UK English','Google US English'];
    const frPriority = ['Thomas','Amelie','Google French'];
    STATE.voiceAR = findBestVoice(voices, arPriority, 'ar');
    STATE.voiceEN = findBestVoice(voices, enPriority, 'en');
    STATE.voiceFR = findBestVoice(voices, frPriority, 'fr');
  }

  function findBestVoice(voices, priority, langCode) {
    const langVoices = voices.filter(v => v.lang.startsWith(langCode));
    for (const pref of priority) {
      const match = langVoices.find(v => v.name.includes(pref));
      if (match) return match;
    }
    return langVoices[0] || null;
  }

  function getVoiceForLang(l) {
    if (l === 'ar') return STATE.voiceAR;
    if (l === 'fr') return STATE.voiceFR;
    return STATE.voiceEN;
  }

  speechSynthesis.addEventListener('voiceschanged', loadVoices);
  loadVoices();

  // ═══ CARD EXTRACTION ═══
  function getActivePanel() {
    return document.querySelector('.panel.active');
  }

  function getActiveTabName() {
    const btn = document.querySelector('.tab.active');
    return btn ? btn.dataset.tab : 'about';
  }

  function extractCards(panel) {
    if (!panel) return [];
    const cards = [];
    const tabName = panel.id.replace('panel-', '');

    if (tabName !== 'about') {
      const title = panel.querySelector('.section-title');
      const desc = panel.querySelector('.section-desc');
      if (title) {
        cards.push({
          el: title.closest('.panel') || title,
          text: (title.textContent || '') + '. ' + (desc ? desc.textContent : ''),
          type: 'title'
        });
      }
    }

    if (tabName === 'about') {
      panel.querySelectorAll('.about-disclaimer, .about-author, .about-section').forEach(el => {
        const text = cleanText(el.textContent);
        if (text) cards.push({ el, text, type: 'about' });
      });
    } else if (tabName === 'questions' || tabName === 'favorites') {
      panel.querySelectorAll('.qa-card').forEach(el => {
        if (el.style.display === 'none') return;
        const q = el.querySelector('.qa-title');
        const a = el.querySelector('.qa-answer');
        const v = el.querySelector('.verse-arabic');
        let text = '';
        if (q) text += q.textContent + '. ';
        if (a) text += a.textContent + '. ';
        if (v) text += v.textContent;
        cards.push({ el, text: cleanText(text), type: 'qa' });
      });
    } else if (tabName === 'search') {
      panel.querySelectorAll('.search-result, .search-answer-card').forEach(el => {
        const text = cleanText(el.textContent);
        if (text) cards.push({ el, text, type: 'search' });
      });
    } else if (tabName === 'home') {
      const daily = panel.querySelector('.daily-card');
      if (daily) cards.push({ el: daily, text: cleanText(daily.textContent), type: 'daily' });
    }
    return cards;
  }

  function cleanText(text) {
    var clean = text.replace(/\s+/g, ' ').replace(/[\u{1F000}-\u{1FFFF}\u{2600}-\u{27BF}\u{FE00}-\u{FEFF}\u{1F900}-\u{1F9FF}\u{200D}\u{20E3}\u{E0020}-\u{E007F}\u{2190}-\u{21FF}↑↓←→✓]/gu, '').trim();
    clean = clean.replace(/[«»""()[\]{}—–•●◆■▪]/g, ' ').replace(/\s+/g, ' ');
    clean = clean
      .replace(/:\s/g, ':, ')
      .replace(/;\s/g, ';, ')
      .replace(/\s—\s/g, ', ')
      .replace(/\.\.\./g, ', ')
      .replace(/\s*\n\s*/g, '. ');

    var l = getLang();

    if (l === 'fr') {
      clean = clean
        .replace(/al-Ghazali/gi, 'al Razali')
        .replace(/Ghazali/gi, 'Razali')
        .replace(/Sheikh/gi, 'Cheikh')
        .replace(/Mohammed/gi, 'Mohamèd')
        .replace(/Khalid Muhammad Khalid/gi, 'Kalid Mohamèd Kalid')
        .replace(/Khalid/gi, 'Kalid')
        .replace(/Al-Azhar/gi, 'al Azar')
        .replace(/Miat Su'al/gi, 'Miat Soual')
        .replace(/\bet\b/g, ', et')
        .replace(/\bmais\b/g, ', mais')
        .replace(/\bou\b/g, ', ou')
        .replace(/\bcar\b/g, ', car')
        .replace(/\bdonc\b/g, ', donc');
    }

    if (l === 'en') {
      clean = clean
        .replace(/al-Ghazali/gi, 'al Gah-zah-lee')
        .replace(/Ghazali/gi, 'Gah-zah-lee')
        .replace(/Khalid Muhammad Khalid/gi, 'Kha-lid Muhammad Kha-lid')
        .replace(/Miat Su'al/gi, 'Mee-at Soo-al')
        .replace(/\band\b/g, ', and')
        .replace(/\bbut\b/g, ', but')
        .replace(/\bor\b/g, ', or')
        .replace(/\bhowever\b/gi, ', however,');
    }

    if (l === 'ar') {
      clean = clean
        .replace(/GitHub/gi, 'غيت هاب')
        .replace(/https?:\/\/[^\s]+/g, '')
        .replace(/[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}/g, '')
        .replace(/workshop-diy\.org/gi, '')
        .replace(/[a-zA-Z]{4,}/g, '')
        .replace(/\bو\b/g, '، و')
        .replace(/\bلكن\b/g, '، لكن')
        .replace(/\bأو\b/g, '، أو')
        .replace(/\bثم\b/g, '، ثم')
        .replace(/\bبل\b/g, '، بل');
    }

    return clean.replace(/,\s*,/g, ',').replace(/\s+/g, ' ').trim();
  }

  // ═══ SPEECH ENGINE ═══
  let speakGen = 0;

  function speak(text, onEnd) {
    speakGen++;
    var myGen = speakGen;
    speechSynthesis.cancel();

    if (!text || !text.trim()) {
      if (onEnd) onEnd();
      return;
    }

    var l = getLang();
    var utt = new SpeechSynthesisUtterance(text);
    var selectedVoice = getVoiceForLang(l); if (selectedVoice) utt.voice = selectedVoice;
    utt.lang = l === 'ar' ? 'ar-SA' : l === 'fr' ? 'fr-FR' : 'en-US';
    utt.rate = (l === 'ar') ? STATE.speed * 0.9 : STATE.speed;
    utt.pitch = STATE.pitch;

    if (STATE.karaokeEnabled) {
      utt.onboundary = function(e) {
        if (myGen !== speakGen) return;
        if (e.name === 'word' && e.charLength > 0 && STATE.cards[STATE.cardIndex]) {
          highlightWord(STATE.cards[STATE.cardIndex].el, e.charIndex, e.charLength, text);
        }
      };
    }

    var done = false;
    function finish() {
      if (done) return;
      done = true;
      clearHighlights();
      if (myGen !== speakGen) return;
      if (onEnd) onEnd();
    }

    utt.onend = finish;
    utt.onerror = finish;
    speechSynthesis.speak(utt);

    var pollStarted = false;
    var pollInterval = setInterval(function() {
      if (done || myGen !== speakGen) { clearInterval(pollInterval); return; }
      if (speechSynthesis.speaking) { pollStarted = true; }
      if (pollStarted && speechSynthesis.paused && !STATE.paused) { speechSynthesis.resume(); }
      if (pollStarted && !speechSynthesis.speaking && !speechSynthesis.pending) {
        clearInterval(pollInterval);
        finish();
      }
    }, 500);

    var maxWait = Math.max(5000, (text.length / 3) * (1000 / STATE.speed)) + 3000;
    setTimeout(function() {
      if (!done && myGen === speakGen) { clearInterval(pollInterval); finish(); }
    }, maxWait);
  }

  // ═══ KARAOKE HIGHLIGHT ═══
  function highlightWord(el, charIndex, charLength, fullText) {
    if (!el || !charLength) return;
    const word = fullText.slice(charIndex, charIndex + charLength);
    const walker = document.createTreeWalker(el, NodeFilter.SHOW_TEXT);
    let node;
    while (node = walker.nextNode()) {
      const idx = node.textContent.indexOf(word);
      if (idx !== -1) {
        clearHighlights();
        const range = document.createRange();
        range.setStart(node, idx);
        range.setEnd(node, Math.min(idx + word.length, node.textContent.length));
        const span = document.createElement('span');
        span.className = 'narrator-word-highlight';
        try { range.surroundContents(span); } catch(e) {}
        return;
      }
    }
  }

  function clearHighlights() {
    document.querySelectorAll('.narrator-word-highlight').forEach(el => {
      const parent = el.parentNode;
      parent.replaceChild(document.createTextNode(el.textContent), el);
      parent.normalize();
    });
  }

  function highlightCard(el) {
    document.querySelectorAll('.narrator-active-card').forEach(e => e.classList.remove('narrator-active-card'));
    if (el) {
      el.classList.add('narrator-active-card');
      if (STATE.autoScroll) el.scrollIntoView({ behavior: 'smooth', block: 'center' });
    }
  }

  // ═══ PLAYBACK CONTROL ═══
  function readCurrentCard() {
    if (STATE.cardIndex >= STATE.cards.length) {
      if (STATE.mode === 'book') nextTab();
      else stopNarrator();
      return;
    }
    const card = STATE.cards[STATE.cardIndex];
    highlightCard(card.el);
    if (card.type === 'qa' && card.el && !card.el.classList.contains('open')) card.el.classList.add('open');
    updateProgress();
    speak(card.text, function() {
      if (!STATE.playing) return;
      if (STATE.duoReading && getLang() === 'ar') {
        readDuoTranslation(card, function() { afterCardDone(); });
        return;
      }
      afterCardDone();
    });
  }

  function afterCardDone() {
    if (!STATE.playing) return;
    if (STATE.loopCount > 0) {
      STATE.loopCurrent++;
      if (STATE.loopCurrent < STATE.loopCount) {
        setTimeout(function() { if (STATE.playing) readCurrentCard(); }, 300);
        return;
      }
      STATE.loopCurrent = 0;
    }
    var justRead = STATE.cards[STATE.cardIndex];
    var delay = 1200;
    if (justRead) {
      if (justRead.type === 'title') delay = 2500;
      else if (justRead.text && justRead.text.length > 150) delay = 2000;
    }
    STATE.cardIndex++;
    if (!STATE.playing) return;
    document.querySelectorAll('.narrator-active-card').forEach(function(e) { e.classList.remove('narrator-active-card'); });
    setTimeout(function() { if (STATE.playing) readCurrentCard(); }, delay);
  }

  function readDuoTranslation(card, onEnd) {
    const duoLang = 'fr';
    const duoVoice = getVoiceForLang(duoLang);
    let duoText = '';

    // Try to get structured data for Q&A cards
    if (card.type === 'qa' && card.el && typeof QA_DATA !== 'undefined') {
      const qaId = card.el.id.replace('qa-','').replace('fav-','');
      const qa = QA_DATA.find(function(q) { return q.id === parseInt(qaId); });
      if (qa && qa[duoLang]) {
        duoText = qa[duoLang].q + '. ' + qa[duoLang].a;
      }
    }

    if (!duoText) { if (onEnd) onEnd(); return; }

    let duoCalled = false;
    function duoDone() { if (!duoCalled) { duoCalled = true; STATE.duoTimeout = null; if (onEnd) onEnd(); } }
    const utt = new SpeechSynthesisUtterance(cleanText(duoText));
    utt.voice = duoVoice;
    utt.lang = 'fr-FR';
    utt.rate = STATE.speed;
    utt.pitch = STATE.pitch;
    utt.onend = duoDone;
    utt.onerror = duoDone;
    STATE.duoTimeout = setTimeout(function() { if (STATE.playing) speechSynthesis.speak(utt); else duoDone(); }, 300);
  }

  // ═══ BOOK MODE — TAB NAVIGATION ═══
  function nextTab() {
    STATE.tabIndex++;
    if (STATE.tabIndex >= STATE.tabOrder.length) {
      stopNarrator();
      showToast(nrT().bookDone);
      return;
    }
    switchToTab(STATE.tabOrder[STATE.tabIndex]);
  }

  function switchToTab(tabName) {
    const tabBtn = document.querySelector('.tab[data-tab="' + tabName + '"]');
    if (tabBtn) {
      tabBtn.click();
      setTimeout(function() {
        if (!STATE.playing) return;
        STATE.cards = extractCards(getActivePanel());
        STATE.cardIndex = 0;
        var title = getActivePanel().querySelector('.section-title');
        if (title) {
          speak(title.textContent, function() {
            if (!STATE.playing) return;
            setTimeout(function() { if (STATE.playing) readCurrentCard(); }, 300);
          });
        } else { readCurrentCard(); }
      }, 400);
    }
  }

  // ═══ PUBLIC CONTROLS ═══
  function playPage() {
    STATE.mode = 'page';
    STATE.cards = extractCards(getActivePanel());
    STATE.cardIndex = 0;
    STATE.playing = true;
    STATE.paused = false;
    closePanel();
    updateUI();
    setupMediaSession();
    if (typeof showToast === 'function') showToast(nrT().page);
    readCurrentCard();
  }

  function playBook() {
    STATE.mode = 'book';
    STATE.tabIndex = 0;
    STATE.playing = true;
    STATE.paused = false;
    closePanel();
    updateUI();
    setupMediaSession();
    if (typeof showToast === 'function') showToast(nrT().book);
    switchToTab(STATE.tabOrder[0]);
  }

  function closePanel() {
    var panel = document.getElementById('narratorPanel');
    if (panel && !panel.classList.contains('hidden')) panel.classList.add('hidden');
  }

  function pauseNarrator() {
    if (STATE.playing && !STATE.paused) {
      speechSynthesis.pause();
      STATE.paused = true;
      if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'paused';
      updateUI();
    } else if (STATE.paused) {
      speechSynthesis.resume();
      STATE.paused = false;
      if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'playing';
      updateUI();
    }
  }

  function cancelDuo() {
    if (STATE.duoTimeout) { clearTimeout(STATE.duoTimeout); STATE.duoTimeout = null; }
  }

  function stopNarrator() {
    speakGen++;
    cancelDuo();
    speechSynthesis.cancel();
    STATE.playing = false;
    STATE.paused = false;
    STATE.cardIndex = 0;
    clearHighlights();
    document.querySelectorAll('.narrator-active-card').forEach(e => e.classList.remove('narrator-active-card'));
    if (STATE.sleepTimer) { clearTimeout(STATE.sleepTimer); STATE.sleepTimer = null; }
    if ('mediaSession' in navigator) navigator.mediaSession.playbackState = 'none';
    updateUI();
  }

  function nextCard() {
    if (!STATE.playing) return;
    speakGen++; cancelDuo(); speechSynthesis.cancel(); clearHighlights();
    STATE.loopCurrent = 0;
    STATE.cardIndex++;
    if (STATE.cardIndex >= STATE.cards.length) {
      if (STATE.mode === 'book') nextTab(); else stopNarrator();
      return;
    }
    readCurrentCard();
  }

  function prevCard() {
    if (!STATE.playing) return;
    speakGen++; cancelDuo(); speechSynthesis.cancel(); clearHighlights();
    STATE.loopCurrent = 0;
    STATE.cardIndex = Math.max(0, STATE.cardIndex - 1);
    readCurrentCard();
  }

  // ═══ SLEEP TIMER ═══
  function setSleepTimer(minutes) {
    if (STATE.sleepTimer) clearTimeout(STATE.sleepTimer);
    STATE.sleepMinutes = minutes;
    if (minutes > 0) {
      STATE.sleepTimer = setTimeout(() => { stopNarrator(); showToast(nrT().sleepDone); }, minutes * 60000);
    }
  }

  // ═══ LOCK SCREEN CONTROLS ═══
  function setupMediaSession() {
    if (!('mediaSession' in navigator)) return;
    var l = getLang();
    navigator.mediaSession.metadata = new MediaMetadata({
      title: l === 'ar' ? 'مائة سؤال عن الإسلام' : l === 'fr' ? '100 Questions sur l\'Islam' : '100 Questions About Islam',
      artist: l === 'ar' ? 'الشيخ محمد الغزالي' : 'Sheikh Mohammed al-Ghazali',
      album: STATE.mode === 'book' ? (l === 'ar' ? 'الكتاب كاملاً' : l === 'fr' ? 'Livre complet' : 'Full Book') : getActiveTabName(),
    });
    navigator.mediaSession.playbackState = 'playing';
    navigator.mediaSession.setActionHandler('play', pauseNarrator);
    navigator.mediaSession.setActionHandler('pause', pauseNarrator);
    navigator.mediaSession.setActionHandler('nexttrack', nextCard);
    navigator.mediaSession.setActionHandler('previoustrack', prevCard);
    navigator.mediaSession.setActionHandler('stop', stopNarrator);
  }

  // ═══ PROGRESS ═══
  function updateProgress() {
    var total = STATE.cards.length;
    var current = STATE.cardIndex + 1;
    var el = document.getElementById('narratorProgress');
    if (el) el.textContent = current + '/' + total;
    var bar = document.getElementById('narratorBar');
    if (bar) bar.style.width = (current / total * 100) + '%';
  }

  // ═══ UI UPDATE ═══
  function updateUI() {
    var btn = document.getElementById('narratorMainBtn');
    var playBtn = document.getElementById('narratorPlayPause');
    if (btn) btn.classList.toggle('active', STATE.playing);
    if (playBtn) playBtn.textContent = STATE.playing && !STATE.paused ? '⏸️' : '▶️';
    var speedEl = document.getElementById('narratorSpeed');
    if (speedEl) speedEl.value = STATE.speed;
    var speedLabel = document.getElementById('narratorSpeedLabel');
    if (speedLabel) speedLabel.textContent = STATE.speed + 'x';
  }

  // ═══ UPDATE LABELS ═══
  function updateLabels() {
    var t = nrT();
    var set = function(id, val) { var el = document.getElementById(id); if (el) el.textContent = val; };
    set('narratorTitle', t.title);
    document.querySelectorAll('[data-nr="page"]').forEach(function(el) { el.textContent = t.page; });
    document.querySelectorAll('[data-nr="book"]').forEach(function(el) { el.textContent = t.book; });
    document.querySelectorAll('[data-nr="voice"]').forEach(function(el) { el.textContent = t.voice; });
    document.querySelectorAll('[data-nr="speed"]').forEach(function(el) { el.textContent = t.speed; });
    document.querySelectorAll('[data-nr="pitch"]').forEach(function(el) { el.textContent = t.pitch; });
    document.querySelectorAll('[data-nr="loop"]').forEach(function(el) { el.textContent = t.loop; });
    document.querySelectorAll('[data-nr="sleep"]').forEach(function(el) { el.textContent = t.sleep; });
    document.querySelectorAll('[data-nr="karaoke"]').forEach(function(el) { el.textContent = t.karaoke; });
    document.querySelectorAll('[data-nr="autoscroll"]').forEach(function(el) { el.textContent = t.autoScroll; });
    document.querySelectorAll('[data-nr="duo"]').forEach(function(el) { el.textContent = t.duo; });
    document.querySelectorAll('[data-nr="off"]').forEach(function(el) { el.textContent = t.off; });
  }

  // ═══ PANEL TOGGLE ═══
  function toggleNarratorPanel() {
    var panel = document.getElementById('narratorPanel');
    if (!panel) return;
    panel.classList.toggle('hidden');
    if (!panel.classList.contains('hidden')) { updateLabels(); populateVoiceSelect(); syncCheckboxes(); }
    if (typeof playSound === 'function') playSound('click');
  }

  function syncCheckboxes() {
    var panel = document.getElementById('narratorPanel');
    if (!panel) return;
    var toggles = panel.querySelectorAll('.narrator-toggle input[type=checkbox]');
    if (toggles[0]) toggles[0].checked = STATE.karaokeEnabled;
    if (toggles[1]) toggles[1].checked = STATE.autoScroll;
    if (toggles[2]) toggles[2].checked = STATE.duoReading;
    var speedEl = document.getElementById('narratorSpeed');
    if (speedEl) speedEl.value = STATE.speed;
    var speedLabel = document.getElementById('narratorSpeedLabel');
    if (speedLabel) speedLabel.textContent = STATE.speed + 'x';
    var pitchEl = document.getElementById('narratorPitch');
    if (pitchEl) pitchEl.value = STATE.pitch;
    var pitchLabel = document.getElementById('narratorPitchLabel');
    if (pitchLabel) pitchLabel.textContent = STATE.pitch.toFixed(1);
  }

  // ═══ SETTINGS HANDLERS ═══
  function onSpeedChange(val) { STATE.speed = parseFloat(val); var l = document.getElementById('narratorSpeedLabel'); if (l) l.textContent = STATE.speed+'x'; localStorage.setItem('ms-narrator-speed', STATE.speed); }
  function onPitchChange(val) { STATE.pitch = parseFloat(val); var l = document.getElementById('narratorPitchLabel'); if (l) l.textContent = STATE.pitch.toFixed(1); localStorage.setItem('ms-narrator-pitch', STATE.pitch); }
  function onLoopChange(val) { STATE.loopCount = parseInt(val); }
  function onSleepChange(val) { setSleepTimer(parseInt(val)); if (parseInt(val) > 0) { if (typeof showToast === 'function') showToast(nrT().sleepSet + ' ' + val + ' ' + nrT().min); } }
  function onKaraokeToggle(checked) { STATE.karaokeEnabled = checked; localStorage.setItem('ms-narrator-karaoke', checked); }
  function onAutoScrollToggle(checked) { STATE.autoScroll = checked; localStorage.setItem('ms-narrator-autoscroll', checked); }
  function onDuoToggle(checked) { STATE.duoReading = checked; localStorage.setItem('ms-narrator-duo', checked); }

  // ═══ VOICE PICKER ═══
  function populateVoiceSelect() {
    var select = document.getElementById('narratorVoice');
    if (!select) return;
    var voices = speechSynthesis.getVoices();
    var l = getLang();
    var langCode = l === 'ar' ? 'ar' : l === 'fr' ? 'fr' : 'en';
    select.innerHTML = '';
    var filtered = [];
    voices.forEach(function(v, realIdx) { if (v.lang.startsWith(langCode)) filtered.push({ voice: v, idx: realIdx }); });
    if (filtered.length === 0) voices.forEach(function(v, realIdx) { filtered.push({ voice: v, idx: realIdx }); });
    var currentVoice = getVoiceForLang(l);
    filtered.forEach(function(item) {
      var opt = document.createElement('option');
      opt.value = item.idx;
      opt.textContent = item.voice.name + ' (' + item.voice.lang + ')';
      if (currentVoice && item.voice.name === currentVoice.name) opt.selected = true;
      select.appendChild(opt);
    });
  }

  function onVoiceChange(val) {
    var voices = speechSynthesis.getVoices();
    var voice = voices[parseInt(val)];
    if (!voice) return;
    var l = getLang();
    if (l === 'ar') STATE.voiceAR = voice;
    else if (l === 'fr') STATE.voiceFR = voice;
    else STATE.voiceEN = voice;
  }

  // ═══ LOAD SAVED SETTINGS ═══
  function loadSettings() {
    STATE.speed = parseFloat(localStorage.getItem('ms-narrator-speed')) || 1;
    STATE.pitch = parseFloat(localStorage.getItem('ms-narrator-pitch')) || 1;
    STATE.karaokeEnabled = localStorage.getItem('ms-narrator-karaoke') !== 'false';
    STATE.autoScroll = localStorage.getItem('ms-narrator-autoscroll') !== 'false';
    STATE.duoReading = localStorage.getItem('ms-narrator-duo') === 'true';
  }

  // ═══ ESCAPE KEY ═══
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape') {
      var panel = document.getElementById('narratorPanel');
      if (panel && !panel.classList.contains('hidden')) { panel.classList.add('hidden'); e.stopPropagation(); }
    }
  });

  window.addEventListener('beforeunload', function() { speechSynthesis.cancel(); });

  // ═══ INJECT 🔊 BUTTONS ═══
  function injectSpeakButtons() {
    document.querySelectorAll('.narrator-speak-btn').forEach(function(b) { b.remove(); });
    var selectors = [
      '.about-disclaimer', '.about-author', '.about-section',
      '.qa-card', '.search-result', '.search-answer-card', '.daily-card'
    ];
    selectors.forEach(function(sel) {
      document.querySelectorAll(sel).forEach(function(card) {
        if (card.querySelector('.narrator-speak-btn')) return;
        var btn = document.createElement('button');
        btn.className = 'narrator-speak-btn';
        btn.textContent = '🔊';
        btn.title = nrT().page;
        btn.onclick = function(e) {
          e.stopPropagation();
          if (sectionSpeaking) stopSection();
          else speakSection(card);
        };
        card.style.position = 'relative';
        card.appendChild(btn);
      });
    });
  }

  // ═══ READ SINGLE SECTION ═══
  var sectionSpeaking = false;

  function speakSection(el) {
    if (STATE.playing) stopNarrator();
    speakGen++;
    speechSynthesis.cancel();
    var text = cleanText(el.textContent || '');
    if (!text) return;
    sectionSpeaking = true;
    el.classList.add('narrator-active-card');
    var l = getLang();
    var utt = new SpeechSynthesisUtterance(text);
    var selectedVoice = getVoiceForLang(l); if (selectedVoice) utt.voice = selectedVoice;
    utt.lang = l === 'ar' ? 'ar-SA' : l === 'fr' ? 'fr-FR' : 'en-US';
    utt.rate = (l === 'ar') ? STATE.speed * 0.9 : STATE.speed;
    utt.pitch = STATE.pitch;
    var done = false;
    function finish() { if (done) return; done = true; sectionSpeaking = false; el.classList.remove('narrator-active-card'); clearHighlights(); }
    utt.onend = finish; utt.onerror = finish;
    if (STATE.karaokeEnabled) {
      utt.onboundary = function(e) { if (e.name === 'word' && e.charLength > 0) highlightWord(el, e.charIndex, e.charLength, text); };
    }
    speechSynthesis.speak(utt);
    var pollStarted = false;
    var pollInterval = setInterval(function() {
      if (done) { clearInterval(pollInterval); return; }
      if (speechSynthesis.speaking) pollStarted = true;
      if (pollStarted && speechSynthesis.paused) speechSynthesis.resume();
      if (pollStarted && !speechSynthesis.speaking && !speechSynthesis.pending) { clearInterval(pollInterval); finish(); }
    }, 500);
    setTimeout(function() { if (!done) { clearInterval(pollInterval); finish(); } }, Math.max(5000, (text.length / 3) * (1000 / STATE.speed)) + 3000);
  }

  function stopSection() {
    if (sectionSpeaking) {
      speechSynthesis.cancel(); sectionSpeaking = false;
      document.querySelectorAll('.narrator-active-card').forEach(function(e) { e.classList.remove('narrator-active-card'); });
      clearHighlights();
    }
  }

  // ═══ RE-INJECT AFTER RENDERS ═══
  var origRenderAbout = window.renderAbout;
  if (origRenderAbout) { window.renderAbout = function() { origRenderAbout(); setTimeout(injectSpeakButtons, 100); }; }
  var origRenderQuestions = window.renderQuestions;
  if (origRenderQuestions) { window.renderQuestions = function() { origRenderQuestions(); setTimeout(injectSpeakButtons, 100); }; }
  var origRenderFavorites = window.renderFavorites;
  if (origRenderFavorites) { window.renderFavorites = function() { origRenderFavorites(); setTimeout(injectSpeakButtons, 100); }; }
  var origRenderHome = window.renderHome;
  if (origRenderHome) { window.renderHome = function() { origRenderHome(); setTimeout(injectSpeakButtons, 100); }; }

  // ═══ INIT ═══
  function initNarrator() {
    loadSettings();
    updateLabels();
    setTimeout(injectSpeakButtons, 500);
    var lastLang = document.documentElement.lang || 'ar';
    new MutationObserver(function() {
      var newLang = document.documentElement.lang || 'ar';
      if (newLang !== lastLang) {
        lastLang = newLang;
        setTimeout(function() { populateVoiceSelect(); updateLabels(); injectSpeakButtons(); }, 100);
        if (STATE.playing) stopNarrator();
      }
    }).observe(document.documentElement, { attributes: true, attributeFilter: ['lang'] });
  }

  // ═══ EXPOSE GLOBALS ═══
  window.narratorPlayPage = playPage;
  window.narratorPlayBook = playBook;
  window.narratorPause = pauseNarrator;
  window.narratorStop = stopNarrator;
  window.narratorNext = nextCard;
  window.narratorPrev = prevCard;
  window.narratorTogglePanel = toggleNarratorPanel;
  window.narratorSpeedChange = onSpeedChange;
  window.narratorPitchChange = onPitchChange;
  window.narratorLoopChange = onLoopChange;
  window.narratorSleepChange = onSleepChange;
  window.narratorKaraokeToggle = onKaraokeToggle;
  window.narratorAutoScrollToggle = onAutoScrollToggle;
  window.narratorDuoToggle = onDuoToggle;
  window.narratorVoiceChange = onVoiceChange;
  window.narratorPopulateVoices = populateVoiceSelect;

  document.addEventListener('DOMContentLoaded', initNarrator);

})();
