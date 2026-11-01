/* Amaidhi · அமைதி — landing page + SOS mode. No accounts, no server, no tracking.
   Everything a person writes is kept in this browser's localStorage only. */
(() => {
'use strict';

/* ================= content ================= */
const T = {
  en: {
    exit: 'Quick exit', sosClose: 'Close SOS', voice: 'Read steps aloud',
    eyebrow: 'Free · Private · English & தமிழ்',
    heroTitle: ['Anger is', '<span class="fire">fire.</span>', '<br>', '<em>Calm</em>', '<em>is</em>', '<em>water.</em>'],
    heroSub: 'When anger takes over, Amaidhi walks you from boiling to calm in about twenty minutes. On calm days, it trains you so the next fire is smaller.',
    ctaSos: "I'm angry right now", ctaHow: 'See how it works', scrollCue: 'Scroll to cool down',
    momentsKick: 'How it works', momentsTitle: 'Built for the three moments of anger.',
    moments: [
      ['before', 'Before', 'Train on calm days', 'Eight short weeks, ten minutes a day. Every week adds a new tool to your SOS kit.'],
      ['during', 'During', 'SOS mode', 'One tap. Big words, almost no reading. Six steps that take your body from boiling to calm.'],
      ['after', 'After', 'Reflect and repair', 'Find the hurt or fear under the anger, and the words to make things right.']
    ],
    openSos: 'Open SOS',
    stepsKick: 'SOS mode', stepsTitle: 'Six steps from boiling to calm.',
    stepsLede: 'Each step is one instruction, read aloud if you want. The screen cools as you do.',
    steps: [
      ['Stop', "Don't speak. Don't send. Hold still for three seconds.", 9],
      ['Step away', 'Say your exit line and leave the room. A 20-minute calm timer starts.', 8],
      ['Cool your body', 'Cold water, squeeze and release, or a fast walk.', 7],
      ['Breathe', 'In for 4, out for 6, with a slow glowing circle.', 5],
      ["Don't send it", 'Write the angry message here instead. It stays locked on your phone.', 4],
      ['Check the heat', 'Still above 6? One more round. Lower? Find what is underneath.', 3]
    ],
    tryNow: 'Try SOS now', tryNote: 'It works even when you are calm. Practise it once, so you know it when you need it.',
    weeksKick: 'The workbook', weeksTitle: 'Train on calm days.',
    weeksLede: 'Built on cognitive behavioural therapy, the most studied treatment for anger. Every week adds a tool to your SOS kit.',
    soon: 'Opening soon', startWk: 'Start',
    weeks: [
      ['The 24-hour calm promise', 'Your exit line and family signal'],
      ['Know your anger', 'Heat check'],
      ['Triggers and warning signs', 'Your early warnings'],
      ['Calm the body', 'Your best three body tools'],
      ['Thinking traps', null],
      ['Coping thoughts', 'Your coping cards'],
      ['Rehearse while calm', null],
      ['Speak up and repair', 'Repair scripts'],
      ['Your anger plan', 'Your full plan']
    ],
    privKick: 'Privacy', privTitle: 'We will never know your name.',
    promises: ['No sign-up. No email. No password.', 'What you write stays on your phone. We cannot read it.', 'Quick exit on every screen jumps straight to a weather page.', 'Erase everything with one button.'],
    erase: 'Erase everything on this phone', eraseSure: 'Tap again to erase', erased: 'Erased. Nothing is left on this phone.',
    eraseNote: 'Removes your journal and locked notes.',
    helpStrong: 'If you might hurt someone or yourself, get help now.',
    lines: 'India · Tele-MANAS 14416 · Emergency 112',
    fine: 'Amaidhi is a self-help tool. It is not therapy and not emergency care. Free, with no ads.',
    // SOS
    stepOf: (n) => `Step ${n} of 6`,
    s1: 'Stop.', s1say: "Don't say anything. Don't send anything. Stand still and let your hands go loose.",
    hold: 'Press and hold', holding: 'Keep holding…',
    s2: 'Step away.', s2say: 'Leave the room, or turn away from the screen. Say this, calmly:',
    exitLine: '“I need ten minutes. I will come back.”', s2btn: "I've stepped away",
    s3: 'Cool your body.', s3say: 'Anger is heat in the body. Pick one and do it now.',
    tools: [
      ['drop', 'Cold water', 'Splash cold water on your face, or hold something cold for 30 seconds.'],
      ['fist', 'Squeeze and let go', 'Make tight fists for five seconds. Let go. Feel the difference. Three times.'],
      ['walk', 'Walk it off', 'Walk fast for two minutes. Let your body burn the energy.']
    ],
    s3btn: 'Done. Now breathe',
    s4: 'Breathe with the circle.', in: 'Breathe in', out: 'Breathe out, slowly', s4btn: 'Next',
    s5: "Don't send it.", s5say: 'Write everything you want to say here instead. Nobody will see it. It never leaves this phone.',
    padPh: 'Say it all here…', s5lock: 'Lock it away', s5skip: 'Nothing to write',
    locked: 'Locked away. Read it again in 20 minutes.',
    s6: 'How hot is it now?', calm: 'Calm', boiling: 'Boiling',
    hotStill: 'Still hot. That is okay. One more round will help.', again: 'One more round',
    cooler: 'Cooler. Let us look at what is underneath.', next: 'Next',
    s7: 'What is under the anger?', s7say: 'Anger often guards a softer feeling. Pick any that fit.',
    feels: ['Hurt', 'Disrespected', 'Ignored', 'Scared', 'Ashamed', 'Tired', 'Treated unfairly', 'Helpless'],
    finish: 'Finish',
    done: 'It passed.', doneSay: 'You felt the fire and did not act on it. That is the whole skill.',
    mins: 'minutes', breaths: 'breaths', heatNow: 'heat now',
    repairH: 'When you are ready to talk, start with:',
    repair: '“I was angry earlier. I want to talk about it calmly.”',
    save: 'Save to my journal', saved: 'Saved on this phone only.', home: 'Back to home',
    timerDone: '20 minutes are up. Check how hot it is now.',
    voiceOff: 'No voice for this language on this phone.'
  },
  ta: {
    exit: 'வெளியேறு', sosClose: 'SOS-ஐ மூடு', voice: 'படிகளைக் குரலில் படி',
    eyebrow: 'இலவசம் · தனிப்பட்டது · தமிழ் & English',
    heroTitle: ['கோபம்', '<span class="fire">நெருப்பு.</span>', '<br>', '<em>அமைதி</em>', '<em>தண்ணீர்.</em>'],
    heroSub: 'கோபம் தலைக்கேறும் போது, கொதிப்பிலிருந்து அமைதி வரை சுமார் இருபது நிமிடங்களில் படிப்படியாக உங்களை வழிநடத்தும். அமைதியான நாட்களில் பயிற்சி தரும், அடுத்த முறை நெருப்பு சிறியதாக இருக்கும்.',
    ctaSos: 'எனக்கு இப்போது கோபம்', ctaHow: 'எப்படி வேலை செய்கிறது', scrollCue: 'குளிர, கீழே நகர்த்துங்கள்',
    momentsKick: 'எப்படி வேலை செய்கிறது', momentsTitle: 'கோபத்தின் மூன்று தருணங்களுக்காக.',
    moments: [
      ['before', 'முன்பு', 'அமைதியான நாட்களில் பயிற்சி', 'எட்டு சிறிய வாரங்கள், நாளுக்குப் பத்து நிமிடம். ஒவ்வொரு வாரமும் உங்கள் SOS பெட்டியில் ஒரு புதிய கருவி சேரும்.'],
      ['during', 'அந்த நொடியில்', 'SOS முறை', 'ஒரே தொடுதல். பெரிய எழுத்துகள், படிக்க அதிகம் இல்லை. கொதிக்கும் உடலை அமைதிக்குக் கொண்டு வரும் ஆறு படிகள்.'],
      ['after', 'பின்பு', 'யோசித்து, சரிசெய்யுங்கள்', 'கோபத்துக்கு அடியில் இருக்கும் காயத்தையோ பயத்தையோ கண்டறியுங்கள்; உறவைச் சரிசெய்யும் வார்த்தைகளையும்.']
    ],
    openSos: 'SOS-ஐத் திற',
    stepsKick: 'SOS முறை', stepsTitle: 'கொதிப்பிலிருந்து அமைதிக்கு ஆறு படிகள்.',
    stepsLede: 'ஒவ்வொரு படியிலும் ஒரே ஒரு அறிவுரை, வேண்டுமானால் குரலில் கேட்கலாம். நீங்கள் குளிர, திரையும் குளிரும்.',
    steps: [
      ['நில்லுங்கள்', 'பேசாதீர்கள். அனுப்பாதீர்கள். மூன்று விநாடிகள் அசையாமல் இருங்கள்.', 9],
      ['விலகுங்கள்', 'உங்கள் விலகல் வாக்கியத்தைச் சொல்லி அறையை விட்டு வெளியேறுங்கள். 20 நிமிட அமைதி நேரம் தொடங்கும்.', 8],
      ['உடலைக் குளிர்வியுங்கள்', 'குளிர்ந்த நீர், இறுக்கி விடுதல், அல்லது வேக நடை.', 7],
      ['மூச்சு', '4 எண்ணிக்கை உள்ளே, 6 எண்ணிக்கை வெளியே, மெதுவாக ஒளிரும் வட்டத்தோடு.', 5],
      ['அனுப்பாதீர்கள்', 'கோபச் செய்தியை இங்கே எழுதுங்கள். அது உங்கள் கைபேசியிலேயே பூட்டி இருக்கும்.', 4],
      ['சூட்டைப் பாருங்கள்', 'இன்னும் 6-க்கு மேலா? இன்னொரு சுற்று. குறைவா? அடியில் என்ன என்று பாருங்கள்.', 3]
    ],
    tryNow: 'SOS-ஐ இப்போதே முயலுங்கள்', tryNote: 'அமைதியாக இருக்கும் போதும் இது வேலை செய்யும். தேவைப்படும் முன் ஒரு முறை பழகிக்கொள்ளுங்கள்.',
    weeksKick: 'பயிற்சி நூல்', weeksTitle: 'அமைதியான நாட்களில் பயிற்சி.',
    weeksLede: 'கோபத்துக்கு அதிகம் ஆய்வு செய்யப்பட்ட சிகிச்சையான அறிவாற்றல் நடத்தை சிகிச்சையை (CBT) அடிப்படையாகக் கொண்டது. ஒவ்வொரு வாரமும் உங்கள் SOS பெட்டியில் ஒரு கருவி சேரும்.',
    soon: 'விரைவில்', startWk: 'தொடக்கம்',
    weeks: [
      ['24 மணி நேர அமைதி வாக்குறுதி', 'விலகல் வாக்கியம், குடும்பக் குறியீடு'],
      ['உங்கள் கோபத்தை அறிந்துகொள்ளுங்கள்', 'சூடு அளவீடு'],
      ['தூண்டுதல்களும் எச்சரிக்கை அறிகுறிகளும்', 'உங்கள் முன் எச்சரிக்கைகள்'],
      ['உடலை அமைதிப்படுத்துங்கள்', 'உங்கள் சிறந்த மூன்று உடல் கருவிகள்'],
      ['சிந்தனைப் பொறிகள்', null],
      ['சமாளிக்கும் எண்ணங்கள்', 'உங்கள் சமாளிப்பு அட்டைகள்'],
      ['அமைதியாக இருக்கும் போது ஒத்திகை', null],
      ['பேசுங்கள், சரிசெய்யுங்கள்', 'சமாதான வார்த்தைகள்'],
      ['உங்கள் கோபத் திட்டம்', 'முழுத் திட்டம்']
    ],
    privKick: 'தனியுரிமை', privTitle: 'உங்கள் பெயர் கூட எங்களுக்குத் தெரியாது.',
    promises: ['பதிவு இல்லை. மின்னஞ்சல் இல்லை. கடவுச்சொல் இல்லை.', 'நீங்கள் எழுதுவது உங்கள் கைபேசியிலேயே இருக்கும். நாங்கள் படிக்க முடியாது.', 'ஒவ்வொரு திரையிலும் உள்ள "வெளியேறு" பொத்தான் உடனே வானிலைப் பக்கத்துக்குச் செல்லும்.', 'ஒரே பொத்தானில் அனைத்தையும் அழிக்கலாம்.'],
    erase: 'இந்தக் கைபேசியில் உள்ள அனைத்தையும் அழி', eraseSure: 'அழிக்க மீண்டும் தொடுங்கள்', erased: 'அழிக்கப்பட்டது. இந்தக் கைபேசியில் எதுவும் இல்லை.',
    eraseNote: 'உங்கள் குறிப்பேடும் பூட்டிய குறிப்புகளும் நீக்கப்படும்.',
    helpStrong: 'யாரையாவது அல்லது உங்களையே காயப்படுத்தும் நிலையில் இருந்தால், உடனே உதவி பெறுங்கள்.',
    lines: 'இந்தியா · டெலி-மனஸ் 14416 · அவசரம் 112',
    fine: 'அமைதி ஒரு சுய உதவிக் கருவி. இது சிகிச்சையோ அவசர உதவியோ அல்ல. இலவசம், விளம்பரங்கள் இல்லை.',
    stepOf: (n) => `6-இல் ${n}-ஆம் படி`,
    s1: 'நில்லுங்கள்.', s1say: 'எதுவும் பேசாதீர்கள். எதையும் அனுப்பாதீர்கள். அசையாமல் நின்று, கைகளைத் தளர விடுங்கள்.',
    hold: 'அழுத்திப் பிடியுங்கள்', holding: 'பிடித்தபடியே இருங்கள்…',
    s2: 'விலகுங்கள்.', s2say: 'அறையை விட்டு வெளியே செல்லுங்கள், அல்லது திரையிலிருந்து கண்ணை எடுங்கள். அமைதியாக இதைச் சொல்லுங்கள்:',
    exitLine: '“எனக்குப் பத்து நிமிடம் வேண்டும். திரும்பி வருவேன்.”', s2btn: 'விலகி வந்துவிட்டேன்',
    s3: 'உடலைக் குளிர்வியுங்கள்.', s3say: 'கோபம் உடலில் ஏறும் சூடு. ஒன்றைத் தேர்ந்தெடுத்து இப்போதே செய்யுங்கள்.',
    tools: [
      ['drop', 'குளிர்ந்த நீர்', 'முகத்தில் குளிர்ந்த நீரைத் தெளியுங்கள், அல்லது குளிர்ந்த ஒன்றை 30 விநாடிகள் பிடித்திருங்கள்.'],
      ['fist', 'இறுக்கி, விடுங்கள்', 'ஐந்து விநாடிகள் கைமுஷ்டியை இறுக்குங்கள். விடுங்கள். வித்தியாசத்தை உணருங்கள். மூன்று முறை.'],
      ['walk', 'நடந்து விடுங்கள்', 'இரண்டு நிமிடம் வேகமாக நடங்கள். உடல் அந்த ஆற்றலை எரிக்கட்டும்.']
    ],
    s3btn: 'முடிந்தது. இப்போது மூச்சு',
    s4: 'வட்டத்தோடு மூச்சு விடுங்கள்.', in: 'மூச்சை உள்ளிழுங்கள்', out: 'மெதுவாக வெளியே விடுங்கள்', s4btn: 'அடுத்து',
    s5: 'அனுப்பாதீர்கள்.', s5say: 'சொல்ல நினைப்பதை எல்லாம் இங்கே எழுதுங்கள். யாரும் பார்க்க மாட்டார்கள். இது இந்தக் கைபேசியை விட்டு வெளியே போகாது.',
    padPh: 'எல்லாவற்றையும் இங்கே சொல்லுங்கள்…', s5lock: 'பூட்டி வை', s5skip: 'எழுத எதுவும் இல்லை',
    locked: 'பூட்டப்பட்டது. 20 நிமிடம் கழித்து மீண்டும் படியுங்கள்.',
    s6: 'இப்போது எவ்வளவு சூடாக இருக்கிறது?', calm: 'அமைதி', boiling: 'கொதிப்பு',
    hotStill: 'இன்னும் சூடாக இருக்கிறது. பரவாயில்லை. இன்னொரு சுற்று உதவும்.', again: 'இன்னொரு சுற்று',
    cooler: 'குளிர்ந்திருக்கிறது. அடியில் என்ன இருக்கிறது என்று பார்ப்போம்.', next: 'அடுத்து',
    s7: 'கோபத்துக்கு அடியில் என்ன?', s7say: 'கோபம் பெரும்பாலும் ஒரு மென்மையான உணர்வைக் காக்கிறது. பொருந்துவதைத் தேர்ந்தெடுங்கள்.',
    feels: ['காயம்', 'அவமதிப்பு', 'புறக்கணிப்பு', 'பயம்', 'அவமானம்', 'களைப்பு', 'அநியாயம்', 'இயலாமை'],
    finish: 'முடி',
    done: 'கடந்து போனது.', doneSay: 'நெருப்பை உணர்ந்தீர்கள், ஆனால் அதன்படி நடக்கவில்லை. இதுதான் முழுத் திறமையும்.',
    mins: 'நிமிடங்கள்', breaths: 'மூச்சுகள்', heatNow: 'இப்போதைய சூடு',
    repairH: 'பேசத் தயாரானதும், இப்படித் தொடங்குங்கள்:',
    repair: '“நான் முன்பு கோபமாக இருந்தேன். அதைப் பற்றி அமைதியாகப் பேச விரும்புகிறேன்.”',
    save: 'என் குறிப்பேட்டில் சேமி', saved: 'இந்தக் கைபேசியில் மட்டும் சேமிக்கப்பட்டது.', home: 'முகப்புக்குத் திரும்பு',
    timerDone: '20 நிமிடம் முடிந்தது. இப்போது சூடு எவ்வளவு என்று பாருங்கள்.',
    voiceOff: 'இந்தக் கைபேசியில் தமிழ்க் குரல் இல்லை.'
  }
};

const IMG = {
  hero: 'assets/img/hero.jpg', stop: 'assets/img/stop.jpg', away: 'assets/img/away.jpg',
  body: 'assets/img/body.jpg', breathe: 'assets/img/breathe.jpg', after: 'assets/img/after.jpg'
};
const HERO_VIDEO = 'assets/video/hero.mp4';      // 6s: embers cool into water (plays once, holds on calm)
const BREATHE_VIDEO = 'assets/video/breathe.mp4'; // 6s seamless loop: slow ripple on dark water
const QUICK_EXIT_URL = 'https://www.google.com/search?q=weather+today';

/* ================= helpers ================= */
const $ = (s, r = document) => r.querySelector(s);
const store = {
  get(k, d) { try { const v = localStorage.getItem(k); return v == null ? d : JSON.parse(v); } catch (e) { return d; } },
  set(k, v) { try { localStorage.setItem(k, JSON.stringify(v)); return true; } catch (e) { return false; } },
  del(k) { try { localStorage.removeItem(k); } catch (e) {} }
};
const reduce = matchMedia('(prefers-reduced-motion: reduce)');
let lang = store.get('amaidhi-lang', (navigator.language || '').startsWith('ta') ? 'ta' : 'en');
const t = () => T[lang];
const esc = (s) => String(s).replace(/[&<>"]/g, (c) => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;' }[c]));
const heatColor = (n) => {
  const k = (n - 1) / 9; // 0 water → 1 ember
  const a = [103, 212, 196], b = [255, 107, 44];
  return `rgb(${a.map((v, i) => Math.round(v + (b[i] - v) * k)).join(',')})`;
};
const ICONS = {
  exit: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 6 6 18M6 6l12 12"/></svg>',
  back: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M15 18l-6-6 6-6"/></svg>',
  voice: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M11 5 6 9H2v6h4l5 4V5z"/><path d="M15.5 8.5a5 5 0 0 1 0 7M19 5a10 10 0 0 1 0 14"/></svg>',
  check: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.2" stroke-linecap="round" stroke-linejoin="round"><path d="M20 6 9 17l-5-5"/></svg>',
  drop: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 3s6 6.5 6 11a6 6 0 0 1-12 0c0-4.5 6-11 6-11z"/></svg>',
  fist: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M7 11V8a2 2 0 0 1 4 0v3M11 10V7a2 2 0 0 1 4 0v4M15 10a2 2 0 0 1 4 0v3a7 7 0 0 1-7 7h-1a6 6 0 0 1-6-6v-2a2 2 0 0 1 2-2h3"/></svg>',
  walk: '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="13" cy="4" r="2"/><path d="M9 21l2-6 3 3v3M7 12l3-4 4 1 2 4 3 1M10 8l-1 5"/></svg>'
};

function preload(src) {
  return new Promise((res) => { const i = new Image(); i.onload = () => res(src); i.onerror = () => res(null); i.src = src; });
}
let toastTimer;
function toast(msg) {
  const el = $('#toast'); el.textContent = msg; el.setAttribute('data-show', '');
  clearTimeout(toastTimer); toastTimer = setTimeout(() => el.removeAttribute('data-show'), 2600);
}
function quickExit(e) {
  // Replace this page in history so the back button does not return here.
  if (window.top === window) { e.preventDefault(); try { location.replace(QUICK_EXIT_URL); } catch (err) { location.href = QUICK_EXIT_URL; } }
}

/* ================= embers: fire that cools into water ================= */
const Embers = (() => {
  const cv = $('#embers'), ctx = cv.getContext('2d');
  let w = 0, h = 0, parts = [], cool = 0, target = 0, raf = 0, last = 0;
  const HOT = [255, 120, 50], HOT2 = [255, 200, 120], COLD = [110, 220, 205], COLD2 = [200, 245, 238];
  function resize() {
    const dpr = Math.min(2, window.devicePixelRatio || 1);
    w = innerWidth; h = innerHeight;
    cv.width = Math.round(w * dpr); cv.height = Math.round(h * dpr);
    ctx.setTransform(dpr, 0, 0, dpr, 0, 0);
    const n = Math.round(Math.min(110, Math.max(36, (w * h) / 14000)));
    parts = Array.from({ length: n }, () => spawn({}, true));
  }
  function spawn(p, anywhere) {
    p.x = Math.random() * w;
    p.y = anywhere ? Math.random() * h : h + 10 + Math.random() * 40;
    p.r = 0.5 + Math.random() * Math.random() * 2.6;
    p.v = 0.25 + Math.random() * 1.15;
    p.ph = Math.random() * Math.PI * 2;
    p.sw = 0.2 + Math.random() * 0.8;
    p.a = 0.35 + Math.random() * 0.65;
    p.f = Math.random() * 10;
    return p;
  }
  const mix = (a, b, k) => a.map((v, i) => Math.round(v + (b[i] - v) * k));
  function draw(dt) {
    cool += (target - cool) * Math.min(1, dt * 0.0022);
    ctx.clearRect(0, 0, w, h);
    ctx.globalCompositeOperation = 'lighter';
    const speed = 1 - cool * 0.72, sway = 1 - cool * 0.4;
    const core = mix(HOT2, COLD2, cool), glow = mix(HOT, COLD, cool);
    for (const p of parts) {
      p.y -= p.v * speed * dt * 0.06;
      p.ph += dt * 0.0016 * (0.6 + p.sw);
      p.x += Math.sin(p.ph) * p.sw * sway * dt * 0.02;
      if (p.y < -20) spawn(p, false);
      const life = Math.min(1, Math.max(0, p.y / h) * 1.6);
      const flick = cool > 0.6 ? 1 : 0.75 + 0.25 * Math.sin((p.f += dt * 0.012));
      const a = p.a * life * flick;
      ctx.fillStyle = `rgba(${glow[0]},${glow[1]},${glow[2]},${(a * 0.16).toFixed(3)})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r * (4 + cool * 3), 0, 6.283); ctx.fill();
      ctx.fillStyle = `rgba(${core[0]},${core[1]},${core[2]},${a.toFixed(3)})`;
      ctx.beginPath(); ctx.arc(p.x, p.y, p.r, 0, 6.283); ctx.fill();
    }
    ctx.globalCompositeOperation = 'source-over';
  }
  function loop(now) {
    const dt = Math.min(48, now - (last || now)); last = now;
    draw(dt); raf = requestAnimationFrame(loop);
  }
  function start() {
    cancelAnimationFrame(raf); last = 0;
    if (reduce.matches) { cool = target; draw(0); return; }
    raf = requestAnimationFrame(loop);
  }
  addEventListener('resize', () => { resize(); if (reduce.matches) draw(0); });
  document.addEventListener('visibilitychange', () => { if (document.hidden) cancelAnimationFrame(raf); else start(); });
  reduce.addEventListener?.('change', start);
  resize(); start();
  return { set(v) { target = Math.max(0, Math.min(1, v)); if (reduce.matches) { cool = target; draw(0); } }, snap(v) { cool = target = v; } };
})();

/* ================= landing ================= */
function renderTop() {
  $('#top').innerHTML = `
    <a class="brand" href="#" aria-label="Amaidhi home"><b>Amaidhi</b><span lang="ta">அமைதி</span></a>
    <div class="lang" role="group" aria-label="Language">
      <button data-lang="en" aria-pressed="${lang === 'en'}">EN</button>
      <button data-lang="ta" aria-pressed="${lang === 'ta'}" lang="ta">தமிழ்</button>
    </div>
    <a class="qexit" href="${QUICK_EXIT_URL}" rel="noreferrer" target="_blank" data-qexit>${ICONS.exit}${t().exit}</a>`;
}

function renderHome(intro) {
  const x = t();
  let i = 0;
  const title = x.heroTitle.map((w) => w === '<br>' ? '<br>' : `<span class="w rise" style="--i:${i++}">${w}</span>`).join(' ');
  const heat = (n) => Array.from({ length: 10 }, (_, k) => `<i class="${k < n ? 'on' : ''}" style="height:${30 + k * 7}%"></i>`).join('');
  $('#home').innerHTML = `
  <section class="hero" ${intro ? 'data-intro' : ''}>
    <div class="hero-media" aria-hidden="true">
      <img id="hero-img" alt="">
      <video id="hero-video" muted playsinline preload="none"></video>
    </div>
    <div class="hero-copy">
      <p class="eyebrow rise" style="--i:0">${x.eyebrow}</p>
      <h1 class="hero-title">${title}</h1>
      <div class="hero-row">
        <p class="hero-sub rise" style="--i:${i++}">${x.heroSub}</p>
        <div class="hero-cta rise" style="--i:${i++}">
          <a class="btn btn-ember" href="#sos"><span class="dot" aria-hidden="true"></span>${x.ctaSos}</a>
          <a class="btn btn-ghost" href="#how">${x.ctaHow}</a>
        </div>
      </div>
    </div>
    <div class="scroll-cue" aria-hidden="true"><span>${x.scrollCue}</span><i></i></div>
  </section>

  <section class="section" id="how">
    <div class="wrap">
      <div class="head reveal"><p class="kicker">${x.momentsKick}</p><h2 class="h2">${x.momentsTitle}</h2></div>
      <div class="moments">
        ${x.moments.map(([k, tag, h, p]) => `
          <article class="moment ${k} reveal" data-img="${k === 'before' ? 'breathe' : k === 'during' ? 'stop' : 'after'}">
            <span class="tag">${tag}</span><h3>${h}</h3><p>${p}</p>
            ${k === 'during' ? `<a class="btn btn-ember go" href="#sos"><span class="dot" aria-hidden="true"></span>${x.openSos}</a>` : ''}
          </article>`).join('')}
      </div>
    </div>
  </section>

  <section class="section" id="sos-steps">
    <div class="wrap">
      <div class="head reveal"><p class="kicker">${x.stepsKick}</p><h2 class="h2">${x.stepsTitle}</h2><p class="lede">${x.stepsLede}</p></div>
      <ol class="steps" role="list">
        ${x.steps.map(([h, p, n], k) => `
          <li class="step reveal" style="--h:${heatColor(n)};transition-delay:${k * 60}ms">
            <span class="n">${k + 1}</span>
            <div><h3>${h}</h3><p>${p}</p></div>
            <div class="heat" aria-hidden="true">${heat(n)}</div>
          </li>`).join('')}
      </ol>
      <div class="steps-cta reveal"><a class="btn btn-water" href="#sos">${x.tryNow}</a><p>${x.tryNote}</p></div>
    </div>
  </section>

  <section class="section" id="weeks">
    <div class="wrap weeks-grid">
      <div class="head"><p class="kicker">${x.weeksKick}</p><h2 class="h2">${x.weeksTitle}</h2><p class="lede">${x.weeksLede}</p><span class="badge">${x.soon}</span></div>
      <ol class="weeks" role="list">
        ${x.weeks.map(([h, adds], k) => `
          <li class="week reveal"><span class="wn">${k === 0 ? '·' : String(k).padStart(2, '0')}</span>
            <h3>${k === 0 ? `<span class="sr">${x.startWk}: </span>` : ''}${h}</h3>
            ${adds ? `<span class="adds">${adds}</span>` : '<span></span>'}</li>`).join('')}
      </ol>
    </div>
  </section>

  <section class="section">
    <div class="wrap privacy">
      <div class="head reveal" style="margin:0"><p class="kicker">${x.privKick}</p><h2 class="h2">${x.privTitle}</h2></div>
      <div class="reveal">
        <ul class="promises">${x.promises.map((p) => `<li>${ICONS.check}<span>${p}</span></li>`).join('')}</ul>
        <div class="erase"><button class="btn btn-ghost" id="erase">${x.erase}</button><span class="note">${x.eraseNote}</span></div>
      </div>
    </div>
  </section>`;

  $('#foot').innerHTML = `
    <div class="wrap">
      <div class="help"><strong>${x.helpStrong}</strong><span class="lines">${x.lines}</span><p class="fine">${x.fine}</p></div>
      <a class="brand" href="#"><b>Amaidhi</b><span lang="ta">அமைதி</span></a>
    </div>`;

  hydrateMedia();
  observeReveals();
}

async function hydrateMedia() {
  const img = $('#hero-img');
  if (img && await preload(IMG.hero)) { img.src = IMG.hero; img.setAttribute('data-ready', ''); }
  const v = $('#hero-video');
  if (v && !reduce.matches) {
    v.addEventListener('loadeddata', () => { v.setAttribute('data-ready', ''); v.play().catch(() => {}); }, { once: true });
    v.addEventListener('error', () => v.remove(), { once: true });
    v.src = HERO_VIDEO; v.load();
  }
  document.querySelectorAll('.moment[data-img]').forEach(async (m) => {
    const src = IMG[m.dataset.img];
    if (await preload(src)) m.style.setProperty('--img', `url("${new URL(src, location.href).href}")`);
  });
}

let io;
function observeReveals() {
  io?.disconnect();
  if (!('IntersectionObserver' in window)) { document.querySelectorAll('.reveal').forEach((e) => e.setAttribute('data-seen', '')); return; }
  io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.setAttribute('data-seen', ''); io.unobserve(e.target); } }), { rootMargin: '0px 0px -8% 0px' });
  document.querySelectorAll('.reveal').forEach((e) => io.observe(e));
}

/* scroll: the page cools as you go down */
let ticking = false;
function onScroll() {
  if (ticking) return; ticking = true;
  requestAnimationFrame(() => {
    ticking = false;
    if (document.body.hasAttribute('data-sos')) return;
    const max = Math.max(1, document.documentElement.scrollHeight - innerHeight);
    const k = Math.min(1, scrollY / (max * 0.7));
    document.documentElement.style.setProperty('--cool', k.toFixed(3));
    Embers.set(k);
    $('#top').toggleAttribute('data-solid', scrollY > 40);
  });
}
addEventListener('scroll', onScroll, { passive: true });

/* ================= SOS ================= */
const sos = $('#sos'), stage = $('#sos-stage'), sosTop = $('#sos-top');
const ORDER = ['stop', 'away', 'body', 'breathe', 'write', 'check', 'under', 'done'];
const COOL = { stop: 0, away: 0.15, body: 0.32, breathe: 0.5, write: 0.62, check: 0.7, under: 0.82, done: 1 };
const PHOTO = { stop: 'stop', away: 'away', body: 'body', breathe: 'breathe', write: 'breathe', check: null, under: 'after', done: 'after' };
const S = { step: 'stop', startedAt: 0, timerEnd: 0, breaths: 0, heat: null, feels: [], voice: store.get('amaidhi-voice', false), rounds: 0 };
let timerInt = 0, breathT = 0, holdT = 0, lastFocus = null, photosReady = {};

function sosTopHtml() {
  const idx = Math.min(6, ORDER.indexOf(S.step) + 1);
  return `
    <button class="icon-btn" data-act="close" aria-label="${esc(t().sosClose)}">${ICONS.back}</button>
    <div class="dots" aria-hidden="true">${Array.from({ length: 6 }, (_, k) => `<i ${k < idx ? 'data-on' : ''}></i>`).join('')}</div>
    <span class="timer" id="timer" ${S.timerEnd ? '' : 'hidden'}></span>
    <button class="icon-btn" data-act="voice" aria-pressed="${S.voice}" aria-label="${esc(t().voice)}">${ICONS.voice}</button>
    <a class="icon-btn" href="${QUICK_EXIT_URL}" rel="noreferrer" target="_blank" data-qexit aria-label="${esc(t().exit)}">${ICONS.exit}</a>`;
}

function scene(step) {
  const x = t(), n = ORDER.indexOf(step) + 1;
  const kick = n <= 6 ? `<p class="kick">${x.stepOf(n)}</p>` : '';
  switch (step) {
    case 'stop': return `${kick}<h2 id="sos-title">${x.s1}</h2><p class="say">${x.s1say}</p>
      <button class="hold" id="hold"><span class="fill" aria-hidden="true"></span><span class="lbl">${x.hold}</span></button>`;
    case 'away': return `${kick}<h2 id="sos-title">${x.s2}</h2><p class="say">${x.s2say}</p><blockquote>${x.exitLine}</blockquote>
      <div class="actions"><button class="btn btn-ghost" data-act="go" data-to="body">${x.s2btn}</button></div>`;
    case 'body': return `${kick}<h2 id="sos-title">${x.s3}</h2><p class="say">${x.s3say}</p>
      <div class="cards">${x.tools.map(([ic, h, p]) => `<div class="card"><span class="ic">${ICONS[ic]}</span><h3>${h}</h3><p>${p}</p></div>`).join('')}</div>
      <div class="actions"><button class="btn btn-water" data-act="go" data-to="breathe">${x.s3btn}</button></div>`;
    case 'breathe': return `${kick}<h2 id="sos-title" class="sr">${x.s4}</h2>
      <div class="breath"><div class="orb-wrap"><span class="orb-ring"></span><div class="orb" id="orb"></div></div>
      <p class="phase" id="phase" aria-live="polite">${x.s4}</p>
      <div class="count" id="count">${Array.from({ length: 6 }, () => '<i></i>').join('')}</div></div>
      <div class="actions later" id="later"><button class="btn btn-water" data-act="go" data-to="write">${x.s4btn}</button></div>`;
    case 'write': return `${kick}<h2 id="sos-title">${x.s5}</h2><p class="say">${x.s5say}</p>
      <label class="sr" for="pad">${x.padPh}</label><textarea class="pad" id="pad" placeholder="${esc(x.padPh)}"></textarea>
      <div class="actions"><button class="btn btn-water" data-act="seal">${x.s5lock}</button><button class="btn btn-quiet" data-act="go" data-to="check">${x.s5skip}</button></div>`;
    case 'check': {
      const h = S.heat;
      const verdict = h == null ? '' : h >= 7 ? x.hotStill : x.cooler;
      return `${kick}<h2 id="sos-title">${x.s6}</h2>
      <div class="therm" role="group" aria-label="${esc(x.s6)}">${Array.from({ length: 10 }, (_, k) => {
        const v = k + 1; return `<button style="--h:${heatColor(v)};--ht:${34 + v * 6.6}%" data-act="heat" data-v="${v}" ${h && v <= h ? 'data-fill' : ''} aria-pressed="${h === v}">${v}</button>`; }).join('')}</div>
      <div class="therm-scale"><span>${x.calm}</span><span>${x.boiling}</span></div>
      <p class="verdict">${verdict}</p>
      <div class="actions">${h == null ? '' : h >= 7
        ? `<button class="btn btn-ember" data-act="again">${x.again}</button>`
        : `<button class="btn btn-water" data-act="go" data-to="under">${x.next}</button>`}</div>`;
    }
    case 'under': return `<h2 id="sos-title">${x.s7}</h2><p class="say">${x.s7say}</p>
      <div class="chips">${x.feels.map((f, k) => `<button class="chip" data-act="feel" data-v="${k}" aria-pressed="${S.feels.includes(k)}">${f}</button>`).join('')}</div>
      <div class="actions"><button class="btn btn-water" data-act="go" data-to="done">${x.finish}</button></div>`;
    case 'done': {
      const mins = Math.max(1, Math.round((Date.now() - S.startedAt) / 60000));
      return `<h2 id="sos-title">${x.done}</h2><p class="say">${x.doneSay}</p>
      <div class="stats"><div class="stat"><b>${mins}</b><span>${x.mins}</span></div><div class="stat"><b>${S.breaths}</b><span>${x.breaths}</span></div><div class="stat"><b>${S.heat ?? '–'}</b><span>${x.heatNow}</span></div></div>
      <p class="say">${x.repairH}</p><blockquote>${x.repair}</blockquote>
      <div class="actions"><button class="btn btn-water" data-act="save">${x.save}</button><button class="btn btn-ghost" data-act="close">${x.home}</button></div>`;
    }
  }
  return '';
}

function setAtmosphere(step) {
  const c = step === 'check' && S.heat ? Math.min(1, Math.max(COOL.check, 1 - (S.heat - 1) / 9)) : COOL[step];
  sos.style.setProperty('--cool', c.toFixed(2));
  Embers.set(c);
  let want = PHOTO[step];
  if (want === 'breathe' && photosReady['breathe-video']) want = 'breathe-video';
  sos.querySelectorAll('.photo').forEach((l) => l.toggleAttribute('data-on', l.dataset.photo === want && !!photosReady[want]));
  const bv = sos.querySelector('video.photo');
  if (bv && photosReady['breathe-video']) { if (want === 'breathe-video') bv.play().catch(() => {}); else bv.pause(); }
}

function speak(text) {
  if (!S.voice || !('speechSynthesis' in window)) return;
  try {
    speechSynthesis.cancel();
    const u = new SpeechSynthesisUtterance(text.replace(/[“”"]/g, ''));
    const code = lang === 'ta' ? 'ta' : 'en';
    const v = speechSynthesis.getVoices().find((vv) => vv.lang && vv.lang.toLowerCase().startsWith(code));
    if (!v && lang === 'ta') return;
    if (v) u.voice = v;
    u.lang = lang === 'ta' ? 'ta-IN' : 'en-IN'; u.rate = 0.88; u.pitch = 0.95;
    speechSynthesis.speak(u);
  } catch (e) {}
}
function speakScene(step) {
  const x = t();
  const map = { stop: `${x.s1} ${x.s1say}`, away: `${x.s2} ${x.s2say} ${x.exitLine}`, body: `${x.s3} ${x.s3say}`, write: `${x.s5} ${x.s5say}`, check: x.s6, under: `${x.s7} ${x.s7say}`, done: `${x.done} ${x.doneSay}` };
  if (map[step]) speak(map[step]);
}

function animateIn(nodes) {
  if (reduce.matches) { nodes.forEach((n) => n.animate([{ opacity: 0 }, { opacity: 1 }], { duration: 250, easing: 'ease' })); return; }
  nodes.forEach((n, k) => n.animate(
    [{ opacity: 0, transform: 'translateY(18px)', filter: 'blur(6px)' }, { opacity: 1, transform: 'none', filter: 'blur(0)' }],
    { duration: 520, delay: 60 + k * 60, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', fill: 'backwards' }));
}

let swapping = false;
async function go(step, { instant = false } = {}) {
  if (swapping) return; swapping = true;
  stopBreath(); clearTimeout(holdT);
  const old = stage.firstElementChild;
  if (old && !instant && !reduce.matches) {
    await old.animate([{ opacity: 1, transform: 'none', filter: 'blur(0)' }, { opacity: 0, transform: 'translateY(-10px)', filter: 'blur(6px)' }],
      { duration: 200, easing: 'cubic-bezier(0.23, 1, 0.32, 1)', fill: 'forwards' }).finished.catch(() => {});
  }
  S.step = step;
  stage.innerHTML = `<div class="scene" data-step="${step}">${scene(step)}</div>`;
  sosTop.innerHTML = sosTopHtml(); tickTimer();
  setAtmosphere(step);
  animateIn([...stage.firstElementChild.children]);
  stage.scrollTop = 0;
  if (step === 'stop') wireHold();
  if (step === 'breathe') startBreath();
  speakScene(step);
  const focusable = stage.querySelector('h2');
  if (focusable) { focusable.setAttribute('tabindex', '-1'); focusable.focus({ preventScroll: true }); }
  swapping = false;
}

/* hold-to-continue: the pause itself is the intervention (slow 3s press, snappy release) */
function wireHold() {
  const b = $('#hold'); if (!b) return;
  const lbl = b.querySelector('.lbl');
  const start = (e) => {
    if (e && e.type === 'pointerdown') { b.setPointerCapture?.(e.pointerId); }
    if (b.hasAttribute('data-holding')) return;
    b.setAttribute('data-holding', ''); lbl.textContent = t().holding;
    holdT = setTimeout(() => { navigator.vibrate?.(30); go('away'); }, 3000);
  };
  const cancel = () => { if (!b.isConnected) return; clearTimeout(holdT); b.removeAttribute('data-holding'); lbl.textContent = t().hold; };
  b.addEventListener('pointerdown', start);
  ['pointerup', 'pointercancel', 'lostpointercapture'].forEach((ev) => b.addEventListener(ev, cancel));
  b.addEventListener('keydown', (e) => { if ((e.key === ' ' || e.key === 'Enter') && !e.repeat) { e.preventDefault(); start(); } });
  b.addEventListener('keyup', (e) => { if (e.key === ' ' || e.key === 'Enter') cancel(); });
  b.addEventListener('contextmenu', (e) => e.preventDefault());
}

/* breathing: in 4s, out 6s; next unlocks after 3 breaths */
function startBreath() {
  const orb = $('#orb'), phase = $('#phase'), count = $('#count'), later = $('#later');
  let n = 0;
  const say = (txt) => { phase.setAttribute('data-swap', ''); setTimeout(() => { phase.textContent = txt; phase.removeAttribute('data-swap'); }, 220); };
  const cycle = (inhale) => {
    if (!orb.isConnected) return;
    const dur = inhale ? 4000 : 6000;
    orb.style.transition = `transform ${dur}ms cubic-bezier(0.37, 0, 0.63, 1)`;
    orb.style.transform = inhale ? 'scale(1)' : 'scale(0.55)';
    say(inhale ? t().in : t().out); speak(inhale ? t().in : t().out);
    navigator.vibrate?.(inhale ? 18 : 10);
    breathT = setTimeout(() => {
      if (!inhale) {
        n++; S.breaths++;
        count.children[Math.min(5, n - 1)]?.setAttribute('data-on', '');
        if (n >= 3) later.setAttribute('data-show', '');
      }
      cycle(!inhale);
    }, dur);
  };
  breathT = setTimeout(() => cycle(true), 700);
}
function stopBreath() { clearTimeout(breathT); }

function tickTimer() {
  const el = $('#timer'); if (!el || !S.timerEnd) return;
  const left = Math.max(0, S.timerEnd - Date.now());
  const m = Math.floor(left / 60000), s = Math.floor((left % 60000) / 1000);
  el.textContent = `${m}:${String(s).padStart(2, '0')}`;
  if (left === 0 && !S.timerToasted) { S.timerToasted = true; toast(t().timerDone); }
}

function openSos() {
  if (!sos.hidden) return;
  lastFocus = document.activeElement;
  Object.assign(S, { step: 'stop', startedAt: Date.now(), timerEnd: 0, breaths: 0, heat: null, feels: [], rounds: 0, timerToasted: false });
  document.body.setAttribute('data-sos', '');
  sos.hidden = false;
  Embers.snap(0);
  go('stop', { instant: true });
  requestAnimationFrame(() => requestAnimationFrame(() => sos.setAttribute('data-open', '')));
  clearInterval(timerInt); timerInt = setInterval(tickTimer, 1000);
}
function closeSos() {
  if (sos.hidden) return;
  stopBreath(); clearTimeout(holdT); clearInterval(timerInt);
  try { speechSynthesis.cancel(); } catch (e) {}
  sos.removeAttribute('data-open');
  setTimeout(() => { sos.hidden = true; stage.innerHTML = ''; document.body.removeAttribute('data-sos'); onScroll(); }, 280);
  if (location.hash === '#sos') history.replaceState(null, '', location.pathname + location.search);
  lastFocus?.focus?.({ preventScroll: true });
}

function route() { if (location.hash === '#sos') openSos(); else closeSos(); }
addEventListener('hashchange', route);

/* ================= events ================= */
document.addEventListener('click', (e) => {
  const q = e.target.closest('[data-qexit]'); if (q) { quickExit(e); return; }
  const l = e.target.closest('[data-lang]');
  if (l) {
    lang = l.dataset.lang; store.set('amaidhi-lang', lang); document.documentElement.lang = lang;
    renderTop(); renderHome(false); onScroll();
    if (!sos.hidden) { sosTop.innerHTML = sosTopHtml(); go(S.step, { instant: true }); }
    return;
  }
  const sosLink = e.target.closest('a[href="#sos"]');
  if (sosLink) { e.preventDefault(); if (location.hash !== '#sos') location.hash = 'sos'; else openSos(); return; }
  if (e.target.closest('#erase')) {
    const b = $('#erase');
    if (b.dataset.armed) { ['amaidhi-journal', 'amaidhi-sealed', 'amaidhi-voice'].forEach(store.del); delete b.dataset.armed; b.textContent = t().erase; toast(t().erased); }
    else { b.dataset.armed = '1'; b.textContent = t().eraseSure; setTimeout(() => { if (b.isConnected) { delete b.dataset.armed; b.textContent = t().erase; } }, 4000); }
    return;
  }
  const a = e.target.closest('[data-act]'); if (!a) return;
  const act = a.dataset.act;
  if (act === 'close') { closeSos(); }
  else if (act === 'voice') {
    S.voice = !S.voice; store.set('amaidhi-voice', S.voice); a.setAttribute('aria-pressed', S.voice);
    if (S.voice) {
      const has = ('speechSynthesis' in window) && speechSynthesis.getVoices().some((v) => v.lang?.toLowerCase().startsWith(lang === 'ta' ? 'ta' : 'en'));
      if (!has && lang === 'ta') toast(t().voiceOff); else speakScene(S.step);
    } else { try { speechSynthesis.cancel(); } catch (err) {} }
  }
  else if (act === 'go') {
    if (a.dataset.to === 'body' && !S.timerEnd) { S.timerEnd = Date.now() + 20 * 60000; }
    go(a.dataset.to);
  }
  else if (act === 'seal') {
    const pad = $('#pad'); const txt = pad.value.trim();
    if (txt) {
      const sealed = store.get('amaidhi-sealed', []); sealed.push({ at: Date.now(), text: txt }); store.set('amaidhi-sealed', sealed);
      pad.setAttribute('data-sealed', ''); toast(t().locked); setTimeout(() => go('check'), 520);
    } else go('check');
  }
  else if (act === 'heat') { S.heat = +a.dataset.v; go('check', { instant: true }); }
  else if (act === 'again') { S.rounds++; S.heat = null; go('body'); }
  else if (act === 'feel') {
    const k = +a.dataset.v; S.feels = S.feels.includes(k) ? S.feels.filter((f) => f !== k) : [...S.feels, k];
    a.setAttribute('aria-pressed', S.feels.includes(k));
  }
  else if (act === 'save') {
    const j = store.get('amaidhi-journal', []);
    j.push({ at: S.startedAt, endedAt: Date.now(), heat: S.heat, breaths: S.breaths, rounds: S.rounds, feelings: S.feels.map((k) => T.en.feels[k]) });
    const ok = store.set('amaidhi-journal', j);
    toast(ok ? t().saved : t().saved); a.disabled = true;
  }
});
document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !sos.hidden) closeSos(); });

/* ================= boot ================= */
document.documentElement.lang = lang;
renderTop();
renderHome(true);
onScroll();
Object.entries(PHOTO).forEach(([, k]) => {
  if (!k || photosReady[k] !== undefined) return;
  photosReady[k] = false;
  preload(IMG[k]).then((ok) => {
    if (!ok) return; photosReady[k] = true;
    sos.querySelector(`.photo[data-photo="${k}"]`).style.backgroundImage = `url("${IMG[k]}")`;
    if (!sos.hidden) setAtmosphere(S.step);
  });
});
(() => {
  const bv = sos.querySelector('video.photo');
  if (!bv || reduce.matches) return;
  bv.addEventListener('loadeddata', () => { photosReady['breathe-video'] = true; if (!sos.hidden) setAtmosphere(S.step); }, { once: true });
  bv.addEventListener('error', () => bv.remove(), { once: true });
  bv.src = BREATHE_VIDEO; bv.load();
})();
if ('speechSynthesis' in window) speechSynthesis.getVoices();
route();
})();
