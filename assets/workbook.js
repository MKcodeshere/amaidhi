/* Amaidhi · the 8-week workbook (Start + Weeks 1–8), journal and personal SOS kit.
   Everything is stored only in this browser (localStorage). Loaded before app.js; it reads
   shared helpers from window.AMAIDHI at render time. */
(() => {
'use strict';

/* ============================== content ============================== */
const C = {
  en: {
    navWorkbook: 'Workbook', wbTitle: 'Your 8 weeks',
    wbLede: 'Ten minutes a day, on calm days. Every week adds a tool to your SOS. Go in order, at your own pace. Everything you write stays on this phone.',
    weekN: (n) => (n === 0 ? 'Start' : `Week ${n}`), mins: (n) => `${n} min`,
    progress: (n) => `${n} of 9 done`, cont: (w) => `Continue: ${w}`, begin: 'Begin with Start',
    listen: 'Listen', learn: 'Learn', do: 'Do', practise: 'Practise this week', adds: 'Added to your SOS',
    saved: 'Saved on this phone', markDone: 'Mark this week done', doneOn: (d) => `Done on ${d}`, next: 'Next',
    toWorkbook: 'All weeks', kitTitle: 'Your SOS kit', kitLede: 'What SOS already knows about you.',
    kitEmpty: 'Not yet', journal: 'Journal', openJournal: 'Open my journal',
    backupTitle: 'Keep a backup', backupLede: 'Your data lives only in this browser. If you change phones or clear your browser, it is gone, so keep a backup file somewhere safe.',
    backup: 'Download backup', restore: 'Restore from backup', restored: 'Restored from backup.', badFile: 'That file is not an Amaidhi backup.',
    dayHint: 'Tap a day when you practised.',
    play: 'Play', pause: 'Pause',
    // check-in
    ciTitle: 'How was the last week?', ciLede: 'Six quick questions. Not a diagnosis, just a way to see your own change by week 8.',
    ciQ: ['How often did you feel angry?', 'How often did anger feel too strong to control?', 'How often did you shout, insult or slam things?', 'How often did your anger hurt someone close to you?', 'How often did you stay angry for hours?', 'How often did you regret something you said or did in anger?'],
    ciA: ['Never', 'Rarely', 'Sometimes', 'Often', 'Almost always'],
    ciScore: (s) => `Your score: ${s} out of 24`, ciCompare: (a, b) => `Start: ${a} → now: ${b}`,
    ciBetter: 'Lower is better. That drop is your own work.', ciSame: 'No drop yet. Keep practising; change often shows after week 4.',
    // safety
    safeTitle: 'Safety first',
    safeQ: ['Have you ever hurt someone physically when angry, or are you afraid you might?', 'Is someone at home hurting you or making you afraid?'],
    yes: 'Yes', no: 'No',
    safeHelp: ['Thank you for being honest. Please also talk to a professional. This workbook helps, but you deserve real support. Call Tele-MANAS on 14416, free, any time.', 'Your safety comes first. In an emergency call 112, or the Women Helpline 181. Use Quick exit if someone might see this screen.'],
    // SOS kit labels (also used by the plan)
    k: { reason: 'Why I am changing', signs: 'My warning signs', exit: 'My exit line', scale: 'My heat scale', tools: 'What calms my body', coping: 'My coping cards', repair: 'How I repair', fuels: 'Fuels to watch', risks: 'High-risk situations', people: 'People I can call', timeout: 'Our time-out agreement' },
    // journal
    jTitle: 'Journal', jLede: 'Your SOS sessions, anger log, heat checks and locked notes. Only on this phone.',
    jSos: 'SOS sessions', jLog: 'Anger log', jChecks: 'Heat checks', jSealed: 'Locked notes', jRecords: 'Thought records',
    jEmpty: 'Nothing here yet.', sealedWait: (m) => `Locked. Opens in ${m} min.`, read: 'Read', del: 'Delete',
    sosRow: (min, heat) => `${min} min · ended at ${heat ?? '–'}`,
    avg7: 'Last 7 days, average heat', checksToday: (n) => `${n} of 3 today`,
    weeks: [
      { title: 'Start here', goal: 'Your reason, your exit line and a 24-hour promise.', mins: 15,
        learn: [
          ['You are not a bad person', 'Anger is a habit your body learned, usually long ago, to protect you. Anything learned can be unlearned. That is what these eight weeks are for.'],
          ['How it works', 'Each week: one short talk, one worksheet, a few minutes of practice a day. Each week adds a tool to SOS, so calm days make hard days easier.'],
          ['Act calm, not be calm', 'Nobody can promise to feel calm. You can promise to act calm: no shouting, no insults, no slamming, no hitting. One day at a time.']
        ],
        reasonL: 'My reason for changing', reasonPh: 'Make it specific. “I don’t want my daughter to flinch when I raise my voice.”',
        exitL: 'My exit line', exitPh: 'I need ten minutes. I will come back.', exitNote: 'Tell the people at home what it means today, while you are calm.',
        signalL: 'Our stop signal (optional)', signalPh: 'A hand sign your family can show when you start to sound angry. Example: a “T” with both hands.',
        promiseL: 'The 24-hour promise', promiseText: 'For the next 24 hours, I will act calm. No shouting, no insults, no slamming, no hitting. If anger comes, I will open SOS.',
        promiseBtn: 'I promise', promiseUntil: (t) => `Promise active until ${t}`, renew: 'Promise another day', promiseDone: 'Your last promise has ended. Ready for another day?',
        practice: 'Keep the promise for one day. Tomorrow, promise one more.',
        adds: 'Your reason and your exit line now appear inside SOS.' },
      { title: 'Know your anger', goal: 'Anger is a signal. Learn the cycle and your own heat scale.', mins: 10,
        learn: [
          ['Anger is a feeling. Aggression is a choice.', 'Anger tells you something feels wrong, unfair or threatening. That signal is useful. Shouting, insulting and hitting are behaviour, and behaviour can be unlearned.'],
          ['The anger cycle', 'Every step is a place where you can step in.'],
          ['The heat scale', '1 to 3: irritated. 4 to 6: angry, but you can still think. 7 to 8: thinking narrows. 9 to 10: losing control. Around 7 the thinking brain goes offline, so act at 5 or 6.']
        ],
        cycle: [['Trigger', 'A bike cuts in front of you.'], ['Thought', '“He did it on purpose. He thinks I am nothing.”'], ['Body', 'Hot face, tight grip, racing heart.'], ['Action', 'Horn and shouting.'], ['Result', 'You reach office shaking. He forgot you in ten seconds.']],
        scaleTitle: 'My own heat scale', scaleLede: 'Write a real example from your life for each.',
        scaleL: (n) => `My ${n} looks like…`, scalePh: { 3: 'Someone is late and does not call.', 6: 'My son ignores me for the third time.', 9: 'Someone insults my mother.' },
        practice: 'Three times a day, ask yourself: “What is my number right now?” Tap it here. No fixing, just noticing.',
        adds: 'Your own examples now appear on the SOS heat check.' },
      { title: 'Triggers and warning signs', goal: 'Spot what sets you off, and what your body does first.', mins: 10,
        learn: [
          ['Triggers are rarely the real reason', 'Traffic, a late reply or a messy room can start it. Underneath there is usually a feeling: disrespected, ignored, treated unfairly or helpless.'],
          ['Your early warning signs', 'Your body warns you before you explode: a tight jaw, a hot face, fists, a fast heartbeat, a louder voice. The earlier you notice, the easier it is to stop.'],
          ['Hidden anger', 'Ask yourself: Is my reaction bigger than this moment? Am I angry at the right person? Am I taking it personally? Is this an old habit from how I grew up?']
        ],
        trigTitle: 'What sets me off', signsTitle: 'My warning signs', otherPh: 'Something else? Type it here.',
        practice: 'Write one anger log entry a day, even for small anger.',
        logWhat: 'What happened?', logHeat: 'How hot?', logDid: 'What did I do?', logAfter: 'What happened after?', logSave: 'Add to my log',
        adds: 'Your warning signs now appear on the SOS Stop screen.' },
      { title: 'Calm the body', goal: 'Find the three body tools that work best for you.', mins: 10,
        learn: [
          ['Body first, words later', 'Anger floods your body with adrenaline. Until the body cools, words and thinking do not work well. That is why SOS starts with the body.'],
          ['The long out-breath', 'Breathing out longer than you breathe in (4 in, 6 out) tells your nervous system it is safe to slow down. It works in about a minute.'],
          ['A calm word', 'Each time you relax, say one word slowly in your head: “அமைதி”. After a week of practice, that word alone starts to calm your body.'],
          ['Sleep, food and movement', 'Tired, hungry, inactive bodies anger faster. A walk, meals on time and a decent night of sleep lower your starting heat.']
        ],
        toolsTitle: 'Pick your top three', toolsLede: 'Try each one this week. Then tap your favourites in order: your first tap is number 1.',
        practice: 'Once a day, while calm: breathe 4 in, 6 out for two minutes, saying your calm word on every out-breath.',
        adds: 'SOS now shows your top three body tools first.' },
      { title: 'Thinking traps', goal: 'Catch the thoughts that pour fuel on anger.', mins: 12,
        learn: [
          ['It is the story, not just the event', 'Two people get cut off in traffic. One shrugs, one explodes. The difference is the story each one tells himself in that second.'],
          ['Six common traps', ''],
          ['Catch, check, change', 'Catch the hot thought. Check it: is it fully true, is there another explanation? Change it to a cooler, truer thought.']
        ],
        traps: [['Should rules', '“He should know better.”'], ['Mind reading', '“She did it on purpose.”'], ['Always and never', '“You never listen to me.”'], ['Blaming', '“It is all their fault.”'], ['Name-calling', '“What an idiot.”'], ['Taking it personally', '“They do not respect me.”']],
        recTitle: 'Thought record', recSit: 'What happened?', recHot: 'My hot thought', recTrap: 'Which trap?', recCheck: 'Is it fully true? Another explanation?', recCool: 'A cooler, truer thought', recSave: 'Save this record',
        recPh: ['My manager changed my plan in front of everyone.', 'He did it to insult me.', 'He was under pressure from his own boss.', 'It was not about me. I can talk to him about it later.'],
        practice: 'One thought record a day, about any anger, big or small.',
        adds: 'Nothing new in SOS this week. Week 5 turns this into coping cards.' },
      { title: 'Coping thoughts', goal: 'Write the calm lines your future self will read in SOS.', mins: 10,
        learn: [
          ['Prepare the words before the fire', 'In a rage you cannot think of wise words. So write them now, while calm, in your own voice. SOS will hand them back to you.'],
          ['Act the opposite', 'Anger wants you loud, tense and close. Do the opposite: speak softly, loosen your shoulders, step back, say something kind even if you do not feel it yet.']
        ],
        copeTitle: 'My coping cards', copeLede: 'Write up to five. Tap a suggestion to use it, then make it yours.', cardPh: (n) => `Card ${n}`,
        suggest: ['I can be angry and still choose what I do.', 'This feeling will pass. My relationship should not.', 'I do not have to win this right now.', 'Slow down. Breathe out. Then speak.', 'They might be having a bad day too.', 'I will talk about this when I am below 4.'],
        practice: 'Read your cards every morning. Use one the moment you notice a warning sign.',
        adds: 'Your cards now appear in SOS while you breathe.' },
      { title: 'Rehearse while calm', goal: 'Practise anger safely, like a vaccine: small doses while calm.', mins: 12,
        learn: [
          ['Why rehearse', 'Athletes practise the hard moment before the match. You can too. Imagining a real trigger while relaxed teaches your body a new response.'],
          ['Start small', 'Begin with a scene that makes you a 3. Move up only when a scene drops below 3 within a few minutes. Never start with your worst memory.']
        ],
        ladderTitle: 'My anger ladder', ladderLede: 'Five real scenes, from mild (top) to strong (bottom).',
        scenePh: ['Someone pushes ahead of me in a queue.', 'My child spills milk again.', 'A colleague takes credit for my work.', 'My partner checks my phone.', 'A relative insults me at a function.'],
        rehSteps: ['Breathe 4 in, 6 out, five times. Say your calm word.', 'Close your eyes. Picture the scene in detail: where, who, what they say.', 'Notice your warning signs rising. Name your number.', 'Use your tools: a long out-breath, a coping card, see yourself stepping back.', 'See yourself handling it calmly to the end. How hot are you now?'],
        rehBtn: 'Rehearse', rehStep: (i) => `Step ${i} of 5`, rehDone: (n) => `Rehearsed. You ended at ${n}.`, rehCount: (n) => `${n}× rehearsed`, rehPick: 'Write a scene first.',
        practice: 'One rehearsal a day, about ten minutes. Start from the top of your ladder.',
        adds: 'Nothing new in SOS. Your tools get stronger and faster.' },
      { title: 'Speak up and repair', goal: 'Say what you need without shouting, and repair after a blow-up.', mins: 12,
        learn: [
          ['Three ways to respond', ''],
          ['Fair-fight rules', 'One topic at a time. No name-calling. No “always” or “never”. Either person can call a time-out. Listen, then repeat back what you heard before you reply.'],
          ['A real apology has four parts', 'Name what you did. Own the impact, with no “but”. Say what you will do differently. Ask what would help.']
        ],
        styles: [['Aggressive', 'Shouting, blaming, threats. You win the fight and lose the person.'], ['Passive', 'Swallowing it, saying “it is fine” when it is not. It builds up and explodes later.'], ['Assertive', 'Clear, calm and respectful: “I feel… when… I need…”. Both people matter.']],
        iTitle: 'Build an “I” sentence', iL: ['I feel…', 'when…', 'I need…'], iPh: ['hurt', 'plans change without telling me', 'a message if things change'],
        iBuild: (a, b, c) => `I feel ${a || '…'} when ${b || '…'}. I need ${c || '…'}.`,
        toTitle: 'Our time-out agreement', toDefault: 'When either of us says “I need ten minutes”, the other lets them go. We come back within an hour and talk calmly.',
        apTitle: 'My repair message', apL: ['What I did', 'How it affected you', 'What I will do differently', 'What would help?'],
        apPh: ['I shouted at you in front of the kids.', 'It must have felt humiliating and scary.', 'Next time I will say my exit line and walk away.', 'Is there anything you need from me now?'],
        sorry: 'I’m sorry.', preview: 'Preview',
        practice: 'This week: one calm “I” request, and one repair with someone you hurt.',
        adds: 'Your repair message now appears at the end of SOS.' },
      { title: 'Your anger plan', goal: 'Know your fuels, plan for slips, and keep everything on one page.', mins: 15,
        learn: [
          ['What fuels the fire', 'Poor sleep, alcohol, hunger, stress, pain and late-night scrolling all raise your starting heat. On those days, use SOS earlier.'],
          ['A slip is not a failure', 'You will lose it again someday. That is a slip, not a relapse. Repair it, write down what happened, and go back to your plan the same day.'],
          ['Keep it alive', 'Come back in two weeks and in a month for a short check-in. Skills fade if they are not used.']
        ],
        fuelsTitle: 'My fuels', riskTitle: 'My high-risk situations', riskPh: ['Sunday evenings with my in-laws', 'Driving to office in peak traffic', 'When money is late at month-end'],
        peopleTitle: 'People I can call', personPh: 'Name and number',
        planTitle: 'My one-page plan', planLede: 'Built from everything you wrote. It updates as you change things.',
        endCheck: 'Check in again',
        practice: 'Read your plan once a week. Come back for a check-in after 2 weeks and after 1 month.',
        adds: 'SOS now ends with a link to your full plan.' }
    ],
    triggers: ['Being ignored', 'Being criticised', 'Being disrespected', 'Unfair treatment', 'People being late', 'Traffic', 'Kids not listening', 'Money worries', 'Work pressure', 'Family arguments', 'Being told what to do', 'Mess and noise', 'Phone and social media', 'Feeling helpless'],
    signs: ['Tight jaw', 'Clenched fists', 'Hot face', 'Racing heart', 'Fast breathing', 'Shaking', 'Upset stomach', 'Louder voice', 'Pacing', 'Pointing', 'Interrupting', 'Sarcasm', 'Replaying the fight', '“It is not fair”'],
    fuels: ['Poor sleep', 'Alcohol', 'Hunger', 'Work stress', 'Money stress', 'Pain or illness', 'Late-night phone', 'Too much caffeine']
  },
  ta: {
    navWorkbook: 'பயிற்சி', wbTitle: 'உங்க 8 வாரம்',
    wbLede: 'அமைதியான நாட்கள்ல தினமும் பத்து நிமிஷம். ஒவ்வொரு வாரமும் உங்க SOS-ல ஒரு tool சேரும். வரிசையா, உங்க வேகத்துல போங்க. நீங்க எழுதுறது எல்லாம் இந்த phone-லயே இருக்கும்.',
    weekN: (n) => (n === 0 ? 'தொடக்கம்' : `வாரம் ${n}`), mins: (n) => `${n} நிமிஷம்`,
    progress: (n) => `9-ல ${n} முடிஞ்சுது`, cont: (w) => `தொடருங்க: ${w}`, begin: 'தொடக்கத்துல இருந்து ஆரம்பிங்க',
    listen: 'கேளுங்க', learn: 'தெரிஞ்சுக்குங்க', do: 'செய்யுங்க', practise: 'இந்த வாரப் பயிற்சி', adds: 'உங்க SOS-ல சேர்ந்தது',
    saved: 'இந்த phone-ல சேமிச்சாச்சு', markDone: 'இந்த வாரம் முடிஞ்சுது', doneOn: (d) => `${d} அன்னைக்கு முடிஞ்சுது`, next: 'அடுத்து',
    toWorkbook: 'எல்லா வாரமும்', kitTitle: 'உங்க SOS பெட்டி', kitLede: 'உங்களைப் பத்தி SOS-க்கு ஏற்கனவே தெரிஞ்சது.',
    kitEmpty: 'இன்னும் இல்ல', journal: 'குறிப்பேடு', openJournal: 'என் குறிப்பேட்டைத் திற',
    backupTitle: 'ஒரு backup வச்சுக்குங்க', backupLede: 'உங்க data இந்த browser-ல மட்டும்தான் இருக்கு. Phone மாத்தினாலோ browser-ஐ clear பண்ணாலோ போயிடும். அதனால ஒரு backup file-ஐ பத்திரமா வச்சுக்குங்க.',
    backup: 'Backup download பண்ணு', restore: 'Backup-ல இருந்து மீட்டெடு', restored: 'Backup-ல இருந்து மீட்டெடுத்தாச்சு.', badFile: 'இது அமைதி backup file இல்ல.',
    dayHint: 'பயிற்சி செஞ்ச நாளைத் தொடுங்க.',
    play: 'கேளுங்க', pause: 'நிறுத்து',
    ciTitle: 'கடந்த ஒரு வாரம் எப்படி இருந்துச்சு?', ciLede: 'ஆறு சின்ன கேள்விகள். இது diagnosis இல்ல. 8-வது வாரத்துல உங்க மாற்றத்தை நீங்களே பார்க்க ஒரு வழி.',
    ciQ: ['எவ்வளவு அடிக்கடி கோபம் வந்துச்சு?', 'கட்டுப்படுத்த முடியாத அளவுக்கு எவ்வளவு அடிக்கடி கோபம் வந்துச்சு?', 'எவ்வளவு அடிக்கடி கத்துனீங்க, திட்டுனீங்க, இல்ல பொருளை அடிச்சீங்க?', 'உங்க கோபம் நெருக்கமான ஒருத்தரை எவ்வளவு அடிக்கடி காயப்படுத்துச்சு?', 'எவ்வளவு அடிக்கடி மணிக்கணக்கா கோபத்துலயே இருந்தீங்க?', 'கோபத்துல சொன்னதையோ செஞ்சதையோ நினைச்சு எவ்வளவு அடிக்கடி வருத்தப்பட்டீங்க?'],
    ciA: ['இல்லவே இல்ல', 'அரிதா', 'சில நேரம்', 'அடிக்கடி', 'எப்பவுமே'],
    ciScore: (s) => `உங்க score: 24-க்கு ${s}`, ciCompare: (a, b) => `ஆரம்பம்: ${a} → இப்போ: ${b}`,
    ciBetter: 'குறைஞ்சா நல்லது. அந்த மாற்றம் உங்க சொந்த உழைப்பு.', ciSame: 'இன்னும் குறையல. பயிற்சியைத் தொடருங்க; பெரும்பாலும் 4-வது வாரத்துக்கு அப்புறம்தான் மாற்றம் தெரியும்.',
    safeTitle: 'முதல்ல பாதுகாப்பு',
    safeQ: ['கோபத்துல யாரையாவது அடிச்சுக் காயப்படுத்தியிருக்கீங்களா, இல்ல அப்படி ஆயிடுமோன்னு பயமா இருக்கா?', 'வீட்டுல யாராவது உங்களைக் காயப்படுத்துறாங்களா, இல்ல பயமுறுத்துறாங்களா?'],
    yes: 'ஆமா', no: 'இல்ல',
    safeHelp: ['உண்மையைச் சொன்னதுக்கு நன்றி. ஒரு professional-கிட்டயும் பேசுங்க. இந்த workbook உதவும், ஆனா உங்களுக்கு உண்மையான support-உம் வேணும். Tele-MANAS 14416-க்கு free-ஆ, எப்ப வேணும்னாலும் கூப்பிடுங்க.', 'உங்க பாதுகாப்புதான் முதல்ல. அவசரம்னா 112, இல்லன்னா Women Helpline 181-க்கு கூப்பிடுங்க. யாராவது இந்த screen-ஐ பார்க்கலாம்னா, வெளியேறு பொத்தானை use பண்ணுங்க.'],
    k: { reason: 'நான் ஏன் மாறுறேன்', signs: 'என் எச்சரிக்கை அறிகுறிகள்', exit: 'என் exit line', scale: 'என் சூடு அளவு', tools: 'என் உடம்பை அமைதிப்படுத்துறது', coping: 'என் அட்டைகள்', repair: 'நான் எப்படி சரிசெய்வேன்', fuels: 'கவனிக்க வேண்டிய எரிபொருள்', risks: 'ஆபத்தான சூழ்நிலைகள்', people: 'கூப்பிடக்கூடிய ஆட்கள்', timeout: 'எங்க time-out ஒப்பந்தம்' },
    jTitle: 'குறிப்பேடு', jLede: 'உங்க SOS நேரங்கள், கோபக் குறிப்புகள், சூடு அளவீடுகள், பூட்டிய குறிப்புகள். இந்த phone-ல மட்டும்.',
    jSos: 'SOS நேரங்கள்', jLog: 'கோபக் குறிப்புகள்', jChecks: 'சூடு அளவீடுகள்', jSealed: 'பூட்டிய குறிப்புகள்', jRecords: 'எண்ணக் குறிப்புகள்',
    jEmpty: 'இன்னும் எதுவும் இல்ல.', sealedWait: (m) => `பூட்டியிருக்கு. இன்னும் ${m} நிமிஷத்துல திறக்கும்.`, read: 'படி', del: 'அழி',
    sosRow: (min, heat) => `${min} நிமிஷம் · ${heat ?? '–'}-ல முடிஞ்சுது`,
    avg7: 'கடந்த 7 நாள், சராசரி சூடு', checksToday: (n) => `இன்னைக்கு 3-ல ${n}`,
    weeks: [
      { title: 'இங்கே தொடங்குங்க', goal: 'உங்க காரணம், உங்க exit line, ஒரு 24 மணி நேர promise.', mins: 15,
        learn: [
          ['நீங்க கெட்டவங்க இல்ல', 'கோபம்ங்கிறது உங்க உடம்பு கத்துக்கிட்ட ஒரு பழக்கம். பெரும்பாலும் ரொம்ப நாளைக்கு முன்னாடி, உங்களைக் காப்பாத்துறதுக்காக. கத்துக்கிட்ட எதையும் மாத்திக்க முடியும். அதுக்குத்தான் இந்த எட்டு வாரம்.'],
          ['இது எப்படி வேலை செய்யும்', 'ஒவ்வொரு வாரமும்: ஒரு சின்ன பேச்சு, ஒரு worksheet, தினமும் கொஞ்சம் நிமிஷம் பயிற்சி. ஒவ்வொரு வாரமும் SOS-ல ஒரு tool சேரும். அமைதியான நாட்கள், கஷ்டமான நாட்களை எளிதாக்கும்.'],
          ['அமைதியா இருக்கணும்னு இல்ல, அமைதியா நடந்துக்கணும்', 'அமைதியா feel பண்ணுவேன்னு யாராலயும் promise பண்ண முடியாது. அமைதியா நடந்துக்குவேன்னு promise பண்ணலாம்: கத்தக் கூடாது, திட்டக் கூடாது, கதவை அடிச்சு சாத்தக் கூடாது, அடிக்கக் கூடாது. ஒரு நாளைக்கு ஒரு நாள்.']
        ],
        reasonL: 'நான் மாற நினைக்கிற காரணம்', reasonPh: 'Specific-ஆ எழுதுங்க. “நான் குரலை உயர்த்தும்போது என் பொண்ணு பயப்படக் கூடாது.”',
        exitL: 'என் exit line', exitPh: 'எனக்கு ஒரு பத்து நிமிஷம் வேணும். திரும்பி வர்றேன்.', exitNote: 'இதோட அர்த்தத்தை வீட்டுல இருக்கவங்ககிட்ட இன்னைக்கே, அமைதியா இருக்கும்போதே சொல்லுங்க.',
        signalL: 'எங்க stop signal (விருப்பம்)', signalPh: 'நீங்க கோபமா பேச ஆரம்பிக்கும்போது குடும்பம் காட்டக்கூடிய ஒரு கை சைகை. உதாரணம்: ரெண்டு கையால “T”.',
        promiseL: '24 மணி நேர promise', promiseText: 'அடுத்த 24 மணி நேரத்துக்கு, நான் அமைதியா நடந்துக்குவேன். கத்த மாட்டேன், திட்ட மாட்டேன், அடிச்சு சாத்த மாட்டேன், அடிக்க மாட்டேன். கோபம் வந்தா, SOS-ஐ திறப்பேன்.',
        promiseBtn: 'Promise பண்றேன்', promiseUntil: (t) => `${t} வரை promise இருக்கு`, renew: 'இன்னொரு நாளுக்கு promise', promiseDone: 'உங்க போன promise முடிஞ்சுது. இன்னொரு நாளுக்குத் தயாரா?',
        practice: 'ஒரு நாள் promise-ஐ காப்பாத்துங்க. நாளைக்கு, இன்னொரு நாளுக்கு promise பண்ணுங்க.',
        adds: 'உங்க காரணமும் exit line-உம் இப்போ SOS-க்குள்ள வரும்.' },
      { title: 'உங்க கோபத்தைத் தெரிஞ்சுக்குங்க', goal: 'கோபம் ஒரு signal. அதோட சுழற்சியையும் உங்க சூடு அளவையும் தெரிஞ்சுக்குங்க.', mins: 10,
        learn: [
          ['கோபம் ஒரு feeling. Aggression ஒரு தேர்வு.', 'ஏதோ தப்பா, அநியாயமா, இல்ல ஆபத்தா இருக்குன்னு கோபம் சொல்லுது. அந்த signal-ல பயன் இருக்கு. கத்துறது, திட்டுறது, அடிக்கிறது எல்லாம் செயல். செயலை மாத்திக்க முடியும்.'],
          ['கோபச் சுழற்சி', 'ஒவ்வொரு படியிலும் நீங்க குறுக்கிடலாம்.'],
          ['சூடு அளவு', '1 முதல் 3: எரிச்சல். 4 முதல் 6: கோபம், ஆனா இன்னும் யோசிக்க முடியும். 7, 8: யோசனை சுருங்கும். 9, 10: கட்டுப்பாடு போயிடும். 7 கிட்ட வரும்போது யோசிக்கிற மூளை off ஆகும். அதனால 5, 6-லயே செயல்படுங்க.']
        ],
        cycle: [['Trigger', 'ஒரு bike உங்க முன்னாடி cut பண்ணுது.'], ['எண்ணம்', '“வேணும்னே பண்றான். என்னை ஒரு ஆளாவே மதிக்கல.”'], ['உடம்பு', 'முகம் சூடு, கை இறுக்கம், படபடப்பு.'], ['செயல்', 'Horn, கத்தல்.'], ['விளைவு', 'Office போய் சேரும்போது கை நடுங்குது. அவன் பத்து second-ல உங்களை மறந்துட்டான்.']],
        scaleTitle: 'என் சொந்த சூடு அளவு', scaleLede: 'ஒவ்வொண்ணுக்கும் உங்க வாழ்க்கையில நடந்த ஒரு உண்மையான example எழுதுங்க.',
        scaleL: (n) => `என் ${n}-ன்னா…`, scalePh: { 3: 'யாராவது late-ஆ வந்து, call கூட பண்ணாம இருந்தா.', 6: 'என் பையன் மூணாவது தடவையும் நான் சொல்றதைக் கண்டுக்காம இருந்தா.', 9: 'யாராவது என் அம்மாவைத் திட்டினா.' },
        practice: 'தினமும் மூணு தடவை கேட்டுக்குங்க: “இப்போ என் number என்ன?” இங்க தொட்டுப் பதிவு பண்ணுங்க. சரி பண்ண வேண்டாம், கவனிச்சா போதும்.',
        adds: 'உங்க examples இப்போ SOS சூடு அளவீட்டுல வரும்.' },
      { title: 'Trigger-களும் எச்சரிக்கை அறிகுறிகளும்', goal: 'எது உங்களைத் தூண்டுது, உடம்பு முதல்ல என்ன பண்ணுதுன்னு கண்டுபிடிங்க.', mins: 10,
        learn: [
          ['Trigger பெரும்பாலும் உண்மையான காரணம் இல்ல', 'Traffic, late reply, குப்பையா கிடக்கிற room, இதெல்லாம் ஆரம்பிச்சு வைக்கும். அடியில பெரும்பாலும் ஒரு feeling இருக்கும்: மதிக்கல, கண்டுக்கல, அநியாயம், இல்ல இயலாமை.'],
          ['உங்க முன் எச்சரிக்கை அறிகுறிகள்', 'வெடிக்கிறதுக்கு முன்னாடியே உடம்பு எச்சரிக்கும்: தாடை இறுக்கம், முகம் சூடு, கைமுஷ்டி, வேகமான இதயத் துடிப்பு, குரல் உயர்தல். எவ்வளவு சீக்கிரம் கவனிக்கிறீங்களோ, நிறுத்துறது அவ்வளவு சுலபம்.'],
          ['மறைஞ்சிருக்கிற கோபம்', 'உங்களையே கேட்டுக்குங்க: இந்த விஷயத்துக்கு என் reaction ரொம்ப பெருசா? சரியான ஆள் மேலதான் கோபப்படுறேனா? இதை personal-ஆ எடுத்துக்கிறேனா? நான் வளர்ந்த விதத்துல இருந்து வந்த பழைய பழக்கமா இது?']
        ],
        trigTitle: 'என்னைத் தூண்டுறது', signsTitle: 'என் எச்சரிக்கை அறிகுறிகள்', otherPh: 'வேற ஏதாவது? இங்க type பண்ணுங்க.',
        practice: 'சின்ன கோபமா இருந்தாலும், தினமும் ஒரு கோபக் குறிப்பு எழுதுங்க.',
        logWhat: 'என்ன நடந்துச்சு?', logHeat: 'எவ்வளவு சூடு?', logDid: 'நான் என்ன பண்ணேன்?', logAfter: 'அப்புறம் என்ன ஆச்சு?', logSave: 'குறிப்பேட்டுல சேர்',
        adds: 'உங்க எச்சரிக்கை அறிகுறிகள் இப்போ SOS “நில்லுங்க” screen-ல வரும்.' },
      { title: 'உடம்பை அமைதிப்படுத்துங்க', goal: 'உங்களுக்குச் சிறப்பா வேலை செய்யுற மூணு உடல் tools-ஐ கண்டுபிடிங்க.', mins: 10,
        learn: [
          ['முதல்ல உடம்பு, அப்புறம்தான் வார்த்தை', 'கோபம் உடம்பு முழுக்க adrenaline-ஐ நிரப்புது. உடம்பு குளிராத வரை, வார்த்தையும் யோசனையும் சரியா வேலை செய்யாது. அதனாலதான் SOS உடம்புல இருந்து ஆரம்பிக்குது.'],
          ['நீளமான வெளிமூச்சு', 'உள்ள இழுக்கிறதை விட வெளிய விடுறது நீளமா இருந்தா (4 உள்ள, 6 வெளிய), “மெதுவாகலாம்”னு நரம்பு மண்டலத்துக்கு signal போகும். ஒரு நிமிஷத்துல வேலை செய்யும்.'],
          ['ஒரு அமைதி வார்த்தை', 'ஒவ்வொரு தடவை relax பண்ணும்போதும், மனசுக்குள்ள மெதுவா ஒரு வார்த்தை சொல்லுங்க: “அமைதி”. ஒரு வாரம் practice பண்ணா, அந்த வார்த்தையே உடம்பை அமைதிப்படுத்த ஆரம்பிக்கும்.'],
          ['தூக்கம், சாப்பாடு, உடற்பயிற்சி', 'களைப்பான, பசியான, அசையாத உடம்பு சீக்கிரம் கோபப்படும். ஒரு நடை, நேரத்துக்குச் சாப்பாடு, நல்ல தூக்கம், இதெல்லாம் உங்க ஆரம்பச் சூட்டைக் குறைக்கும்.']
        ],
        toolsTitle: 'உங்க top மூணைத் தேர்ந்தெடுங்க', toolsLede: 'இந்த வாரம் ஒவ்வொண்ணையும் try பண்ணுங்க. அப்புறம் பிடிச்சதை வரிசையா தொடுங்க: முதல்ல தொடுறது number 1.',
        practice: 'தினமும் ஒரு தடவை, அமைதியா இருக்கும்போது: ரெண்டு நிமிஷம் 4 உள்ள, 6 வெளிய மூச்சு விடுங்க, ஒவ்வொரு வெளிமூச்சுக்கும் அமைதி வார்த்தையைச் சொல்லுங்க.',
        adds: 'SOS இப்போ உங்க top மூணு உடல் tools-ஐ முதல்ல காட்டும்.' },
      { title: 'சிந்தனைப் பொறிகள்', goal: 'கோபத்துக்கு எண்ணெய் ஊத்துற எண்ணங்களைப் பிடிங்க.', mins: 12,
        learn: [
          ['நடந்தது இல்ல, நாம சொல்லிக்கிற கதைதான்', 'ரெண்டு பேரை traffic-ல ஒருத்தன் cut பண்றான். ஒருத்தர் தோளைக் குலுக்கிட்டுப் போறார், இன்னொருத்தர் வெடிக்கிறார். வித்தியாசம், அந்த ஒரு second-ல ஒவ்வொருத்தரும் தனக்குத் தானே சொல்லிக்கிற கதை.'],
          ['ஆறு பொதுவான பொறிகள்', ''],
          ['பிடி, சரிபார், மாத்து', 'சூடான எண்ணத்தைப் பிடிங்க. சரிபாருங்க: இது முழுசா உண்மையா, வேற காரணம் இருக்க முடியுமா? அதை ஒரு குளிர்ந்த, உண்மையான எண்ணமா மாத்துங்க.']
        ],
        traps: [['“இப்படித்தான் இருக்கணும்”', '“இது கூடத் தெரியாதா அவனுக்கு.”'], ['மனசைப் படிக்கிறது', '“வேணும்னேதான் பண்ணா.”'], ['எப்பவுமே, ஒருநாளும்', '“நீ ஒருநாளும் நான் சொல்றதைக் கேக்க மாட்ட.”'], ['பழி போடுறது', '“எல்லாம் அவங்க தப்புதான்.”'], ['பட்டப் பெயர்', '“சரியான முட்டாள்.”'], ['Personal-ஆ எடுத்துக்கிறது', '“என்னை யாரும் மதிக்கல.”']],
        recTitle: 'எண்ணக் குறிப்பு', recSit: 'என்ன நடந்துச்சு?', recHot: 'என் சூடான எண்ணம்', recTrap: 'எந்தப் பொறி?', recCheck: 'இது முழுசா உண்மையா? வேற காரணம் இருக்குமா?', recCool: 'ஒரு குளிர்ந்த, உண்மையான எண்ணம்', recSave: 'இதைச் சேமி',
        recPh: ['எல்லார் முன்னாடியும் manager என் plan-ஐ மாத்திட்டார்.', 'என்னை அவமானப்படுத்தத்தான் பண்ணார்.', 'அவருக்கும் அவரோட boss-கிட்ட இருந்து pressure இருந்துச்சு.', 'இது என்னைப் பத்தி இல்ல. அப்புறம் அவர்கிட்ட இதைப் பத்திப் பேசலாம்.'],
        practice: 'பெருசோ சின்னதோ, தினமும் ஒரு எண்ணக் குறிப்பு.',
        adds: 'இந்த வாரம் SOS-ல புதுசா எதுவும் இல்ல. 5-வது வாரம் இதை அட்டைகளா மாத்தும்.' },
      { title: 'சமாளிக்கும் எண்ணங்கள்', goal: 'SOS-ல எதிர்காலத்துல நீங்க படிக்கப் போற அமைதி வரிகளை இப்போவே எழுதுங்க.', mins: 10,
        learn: [
          ['நெருப்புக்கு முன்னாடியே வார்த்தைகளைத் தயார் பண்ணுங்க', 'கோபத்தோட உச்சத்துல நல்ல வார்த்தைகள் தோணாது. அதனால இப்போவே, அமைதியா இருக்கும்போது, உங்க சொந்த வார்த்தையில எழுதுங்க. SOS அதை உங்ககிட்டயே திருப்பித் தரும்.'],
          ['எதிர்மாறா நடந்துக்குங்க', 'கோபம் உங்களைச் சத்தமா, இறுக்கமா, நெருக்கமா இருக்கச் சொல்லும். எதிர்மாறா பண்ணுங்க: மெதுவா பேசுங்க, தோளைத் தளர விடுங்க, ஒரு அடி பின்னாடி போங்க, இன்னும் feel பண்ணலைன்னாலும் ஒரு நல்ல வார்த்தை சொல்லுங்க.']
        ],
        copeTitle: 'என் சமாளிப்பு அட்டைகள்', copeLede: 'அஞ்சு வரை எழுதுங்க. ஒரு suggestion-ஐ தொட்டு எடுத்து, உங்க வார்த்தையா மாத்துங்க.', cardPh: (n) => `அட்டை ${n}`,
        suggest: ['கோபம் வந்தாலும், என்ன பண்ணணும்னு நான்தான் முடிவு பண்றேன்.', 'இந்த feeling கடந்து போகும். என் உறவு போகக் கூடாது.', 'இப்போ இதுல ஜெயிக்கணும்னு அவசியம் இல்ல.', 'மெதுவா. மூச்சை விடு. அப்புறம் பேசு.', 'அவங்களுக்கும் இன்னைக்கு கஷ்டமான நாளா இருக்கலாம்.', 'கோபம் 4-க்குக் கீழ வந்ததும் இதைப் பத்திப் பேசுவேன்.'],
        practice: 'தினமும் காலையில உங்க அட்டைகளைப் படிங்க. எச்சரிக்கை அறிகுறி தெரிஞ்ச உடனே ஒண்ணை use பண்ணுங்க.',
        adds: 'நீங்க மூச்சு விடும்போது இப்போ SOS-ல உங்க அட்டைகள் வரும்.' },
      { title: 'அமைதியா இருக்கும்போது ஒத்திகை', goal: 'Vaccine மாதிரி, கோபத்தைப் பாதுகாப்பா practice பண்ணுங்க: அமைதியா இருக்கும்போது சின்ன அளவுல.', mins: 12,
        learn: [
          ['ஏன் ஒத்திகை', 'விளையாட்டு வீரர்கள் போட்டிக்கு முன்னாடியே கஷ்டமான நொடியைப் practice பண்றாங்க. நீங்களும் பண்ணலாம். Relax-ஆ இருக்கும்போது ஒரு உண்மையான trigger-ஐ கற்பனை பண்ணா, உடம்பு ஒரு புது reaction-ஐ கத்துக்கும்.'],
          ['சின்னதா ஆரம்பிங்க', 'உங்களை 3 அளவுக்குக் கோபப்படுத்துற ஒரு காட்சியில இருந்து ஆரம்பிங்க. ஒரு காட்சி சில நிமிஷத்துல 3-க்குக் கீழ வந்தா மட்டும் அடுத்ததுக்குப் போங்க. உங்க மோசமான நினைவுல இருந்து ஒருநாளும் ஆரம்பிக்காதீங்க.']
        ],
        ladderTitle: 'என் கோப ஏணி', ladderLede: 'அஞ்சு உண்மையான காட்சிகள், லேசானது (மேல) முதல் கடுமையானது (கீழ) வரை.',
        scenePh: ['Queue-ல ஒருத்தர் என்னை முந்திக்கிட்டுப் போறார்.', 'பையன் திரும்பவும் பாலைக் கொட்டிட்டான்.', 'என் வேலைக்கு colleague credit எடுத்துக்கிறார்.', 'என் partner என் phone-ஐ check பண்றாங்க.', 'ஒரு function-ல சொந்தக்காரர் என்னை அவமானப்படுத்துறார்.'],
        rehSteps: ['4 உள்ள, 6 வெளிய, அஞ்சு தடவை மூச்சு விடுங்க. அமைதி வார்த்தையைச் சொல்லுங்க.', 'கண்ணை மூடுங்க. அந்தக் காட்சியை விவரமா கற்பனை பண்ணுங்க: எங்க, யாரு, என்ன சொல்றாங்க.', 'எச்சரிக்கை அறிகுறிகள் ஏறுறதைக் கவனிங்க. உங்க number என்னன்னு சொல்லுங்க.', 'உங்க tools-ஐ use பண்ணுங்க: நீளமா மூச்சை விடுங்க, ஒரு அட்டையைப் படிங்க, நீங்க ஒரு அடி பின்னாடி போறதைப் பாருங்க.', 'கடைசி வரை அமைதியா கையாளுறதா உங்களைப் பாருங்க. இப்போ எவ்வளவு சூடு?'],
        rehBtn: 'ஒத்திகை பண்ணு', rehStep: (i) => `5-ல ${i}-வது படி`, rehDone: (n) => `ஒத்திகை முடிஞ்சுது. ${n}-ல முடிச்சீங்க.`, rehCount: (n) => `${n} தடவை ஒத்திகை`, rehPick: 'முதல்ல ஒரு காட்சியை எழுதுங்க.',
        practice: 'தினமும் ஒரு ஒத்திகை, சுமார் பத்து நிமிஷம். ஏணியோட மேல் படியில இருந்து ஆரம்பிங்க.',
        adds: 'SOS-ல புதுசா எதுவும் இல்ல. உங்க tools இன்னும் வலுவாகும், வேகமாகும்.' },
      { title: 'பேசுங்க, சரிசெய்யுங்க', goal: 'கத்தாம உங்க தேவையைச் சொல்லுங்க. வெடிச்ச பிறகு உறவைச் சரிசெய்யுங்க.', mins: 12,
        learn: [
          ['பதில் சொல்ல மூணு வழி', ''],
          ['நியாயமான சண்டை விதிகள்', 'ஒரு நேரத்துல ஒரு விஷயம். பட்டப் பெயர் கூடாது. “எப்பவுமே”, “ஒருநாளும்” கூடாது. யார் வேணும்னாலும் time-out கேக்கலாம். கேளுங்க, பதில் சொல்றதுக்கு முன்னாடி கேட்டதைத் திருப்பிச் சொல்லுங்க.'],
          ['உண்மையான மன்னிப்புக்கு நாலு பகுதி', 'என்ன பண்ணீங்கன்னு சொல்லுங்க. அதோட பாதிப்பை ஏத்துக்குங்க, “ஆனா” இல்லாம. இனிமே என்ன மாத்திப் பண்ணுவீங்கன்னு சொல்லுங்க. எது உதவும்னு கேளுங்க.']
        ],
        styles: [['ஆக்ரோஷம்', 'கத்துறது, பழி போடுறது, மிரட்டுறது. சண்டையில ஜெயிப்பீங்க, ஆளைத் தோப்பீங்க.'], ['அடக்கம்', 'விழுங்கிக்கிறது, சரியில்லாதப்போ “பரவாயில்ல”ன்னு சொல்றது. உள்ள சேர்ந்து, அப்புறம் வெடிக்கும்.'], ['உறுதியான பேச்சு', 'தெளிவா, அமைதியா, மரியாதையா: “நான் … feel பண்றேன், எப்போன்னா …, எனக்கு … வேணும்.” ரெண்டு பேருமே முக்கியம்.']],
        iTitle: 'ஒரு “நான்” வாக்கியம் உருவாக்குங்க', iL: ['நான் … feel பண்றேன்', 'எப்போன்னா…', 'எனக்கு … வேணும்'], iPh: ['வருத்தமா', 'சொல்லாமலே plan மாறும்போது', 'ஏதாவது மாறினா ஒரு message'],
        iBuild: (a, b, c) => `${b || '…'}, நான் ${a || '…'} feel பண்றேன். எனக்கு ${c || '…'} வேணும்.`,
        toTitle: 'எங்க time-out ஒப்பந்தம்', toDefault: 'எங்கள்ல யாராவது “எனக்கு பத்து நிமிஷம் வேணும்”னு சொன்னா, மத்தவங்க போக விடணும். ஒரு மணி நேரத்துக்குள்ள திரும்பி வந்து அமைதியா பேசுவோம்.',
        apTitle: 'என் சமாதானச் செய்தி', apL: ['நான் என்ன பண்ணேன்', 'அது உங்களை எப்படி பாதிச்சிருக்கும்', 'இனிமே என்ன மாத்திப் பண்ணுவேன்', 'எது உதவும்?'],
        apPh: ['பசங்க முன்னாடி உன்னைப் பார்த்துக் கத்திட்டேன்.', 'உனக்கு அவமானமாவும் பயமாவும் இருந்திருக்கும்.', 'அடுத்த தடவை என் exit line-ஐ சொல்லிட்டு விலகிப் போவேன்.', 'இப்போ என்கிட்ட இருந்து உனக்கு ஏதாவது வேணுமா?'],
        sorry: 'மன்னிச்சுக்கோ.', preview: 'முன்னோட்டம்',
        practice: 'இந்த வாரம்: அமைதியா ஒரு “நான்” வாக்கியக் கோரிக்கை, காயப்படுத்தின ஒருத்தர்கிட்ட ஒரு சமாதானம்.',
        adds: 'உங்க சமாதானச் செய்தி இப்போ SOS கடைசியில வரும்.' },
      { title: 'உங்க கோபத் திட்டம்', goal: 'உங்க எரிபொருளைத் தெரிஞ்சுக்குங்க, தடுமாற்றத்துக்குத் திட்டமிடுங்க, எல்லாத்தையும் ஒரே பக்கத்துல வச்சுக்குங்க.', mins: 15,
        learn: [
          ['நெருப்புக்கு எரிபொருள் எது', 'தூக்கமின்மை, மது, பசி, மன அழுத்தம், வலி, ராத்திரி லேட் வரை scroll பண்றது, இதெல்லாம் உங்க ஆரம்பச் சூட்டை ஏத்தும். அந்த நாட்கள்ல, SOS-ஐ சீக்கிரமே use பண்ணுங்க.'],
          ['தடுமாற்றம் தோல்வி இல்ல', 'எப்பவாவது திரும்பவும் கோபத்துல வெடிப்பீங்க. அது ஒரு தடுமாற்றம், தோல்வி இல்ல. சரிசெய்யுங்க, என்ன நடந்துச்சுன்னு எழுதுங்க, அதே நாள் திட்டத்துக்குத் திரும்புங்க.'],
          ['தொடர்ந்து வச்சுக்குங்க', 'ரெண்டு வாரம் கழிச்சும், ஒரு மாசம் கழிச்சும் ஒரு சின்ன check-in-க்கு வாங்க. Use பண்ணலைன்னா திறமைகள் மங்கிடும்.']
        ],
        fuelsTitle: 'என் எரிபொருள்', riskTitle: 'என் ஆபத்தான சூழ்நிலைகள்', riskPh: ['ஞாயிறு சாயங்காலம் மாமியார் வீட்டுல', 'Peak traffic-ல office-க்கு drive பண்றது', 'மாசக் கடைசியில பணம் லேட் ஆகும்போது'],
        peopleTitle: 'நான் கூப்பிடக்கூடிய ஆட்கள்', personPh: 'பேரும் number-உம்',
        planTitle: 'என் ஒரு பக்கத் திட்டம்', planLede: 'நீங்க எழுதின எல்லாத்துல இருந்தும் உருவானது. நீங்க மாத்தும்போது இதுவும் மாறும்.',
        endCheck: 'திரும்ப check-in பண்ணுங்க',
        practice: 'வாரத்துக்கு ஒரு தடவை உங்க திட்டத்தைப் படிங்க. 2 வாரம், 1 மாசம் கழிச்சு check-in-க்கு வாங்க.',
        adds: 'SOS இப்போ உங்க முழுத் திட்டத்துக்கு ஒரு link-ஓட முடியும்.' }
    ],
    triggers: ['கண்டுக்காம விடுறது', 'குறை சொல்றது', 'மதிக்காம இருக்கிறது', 'அநியாயம்', 'Late-ஆ வர்றது', 'Traffic', 'பசங்க சொல்பேச்சு கேக்காதது', 'பணக் கவலை', 'வேலை pressure', 'குடும்பச் சண்டை', 'என்ன பண்ணணும்னு சொல்றது', 'குப்பை, சத்தம்', 'Phone, social media', 'இயலாமை'],
    signs: ['தாடை இறுக்கம்', 'கைமுஷ்டி', 'முகம் சூடு', 'படபடப்பு', 'வேக மூச்சு', 'நடுக்கம்', 'வயித்துல கலக்கம்', 'குரல் உயர்தல்', 'அங்கேயும் இங்கேயும் நடக்கிறது', 'விரல் நீட்டுறது', 'இடைமறிச்சுப் பேசுறது', 'நக்கல்', 'சண்டையைத் திரும்பத் திரும்ப நினைக்கிறது', '“இது அநியாயம்”'],
    fuels: ['தூக்கமின்மை', 'மது', 'பசி', 'வேலை டென்ஷன்', 'பணக் கஷ்டம்', 'வலி, உடம்பு சரியில்லாதது', 'ராத்திரி phone', 'அளவுக்கு மீறின காபி, டீ']
  }
};

/* ============================== data ============================== */
const A = () => window.AMAIDHI;
const L = () => C[A().lang()];
const KEY = 'amaidhi-wb';
const data = () => A().store.get(KEY, {});
const save = (d) => A().store.set(KEY, d);
const get = (path) => path.split('.').reduce((o, k) => (o == null ? undefined : o[k]), data());
function set(path, val) {
  const d = data(); const ks = path.split('.'); let o = d;
  // numbered fields (coping.0, apology.2 …) are lists; the heat scale (scale.3/6/9) stays an object
  ks.slice(0, -1).forEach((k, i) => { if (typeof o[k] !== 'object' || o[k] === null) o[k] = /^\d+$/.test(ks[i + 1]) && k !== 'scale' ? [] : {}; o = o[k]; });
  o[ks[ks.length - 1]] = val; save(d); flashSaved();
}
const list = (k) => A().store.get(k, []);
const esc = (s) => A().esc(s ?? '');
const dayKey = (t = Date.now()) => { const d = new Date(t); return `${d.getFullYear()}-${String(d.getMonth() + 1).padStart(2, '0')}-${String(d.getDate()).padStart(2, '0')}`; };
const locale = () => (A().lang() === 'ta' ? 'ta-IN' : 'en-IN');
const fmtDate = (t) => new Date(t).toLocaleDateString(locale(), { day: 'numeric', month: 'short' });
const fmtTime = (t) => new Date(t).toLocaleString(locale(), { weekday: 'short', hour: 'numeric', minute: '2-digit' });
const last7 = () => Array.from({ length: 7 }, (_, i) => { const t = Date.now() - (6 - i) * 86400000; return { key: dayKey(t), label: new Date(t).toLocaleDateString(locale(), { weekday: 'narrow' }) }; });

/* ============================== SOS kit (read by app.js) ============================== */
function repairText(d, x = L()) {
  const parts = (d.apology || []).map((s) => (s || '').trim()).filter(Boolean);
  return parts.length ? `${x.weeks[7].sorry} ${parts.join(' ')}` : '';
}
function signsList(d, x = L()) {
  const s = (d.signs || []).map((i) => x.signs[i]).filter(Boolean);
  return d.signsOther?.trim() ? s.concat(d.signsOther.trim()) : s;
}
function sosKit() {
  const d = data(), x = L();
  return {
    reason: (d.reason || '').trim(),
    exitLine: (d.exit || '').trim(),
    signs: signsList(d, x),
    tools: (d.tools || []).slice(0, 3),
    coping: (d.coping || []).map((s) => (s || '').trim()).filter(Boolean),
    anchors: d.scale || {},
    repair: repairText(d, x),
    hasPlan: Object.keys(d.done || {}).length > 0
  };
}

/* ============================== shared bits ============================== */
let savedTimer;
function flashSaved() {
  document.querySelectorAll('.saved-flag').forEach((el) => { el.setAttribute('data-on', ''); });
  clearTimeout(savedTimer); savedTimer = setTimeout(() => document.querySelectorAll('.saved-flag').forEach((el) => el.removeAttribute('data-on')), 1600);
}
const savedFlag = () => `<span class="saved-flag" aria-live="polite">${L().saved}</span>`;
const section = (kick, inner, extra = '') => `<section class="wb-sec reveal" ${extra}><h2 class="wb-kick"><span>${kick}</span>${savedFlag()}</h2>${inner}</section>`;
const field = (bind, label, ph, rows = 2, val) => `<label class="wb-field"><span>${label}</span><textarea rows="${rows}" data-bind="${bind}" placeholder="${esc(ph)}">${esc(val ?? get(bind) ?? '')}</textarea></label>`;
const chips = (key, items, multi = true) => { const sel = get(key) || []; return `<div class="chips">${items.map((it, i) => `<button class="chip" data-toggle="${key}" data-v="${i}" aria-pressed="${sel.includes(i)}">${esc(it)}</button>`).join('')}</div>`; };

function dayTracker(key) {
  const done = get(`days.${key}`) || [];
  return `<div class="days" role="group" aria-label="${esc(L().dayHint)}">${last7().map((d) => `<button class="day" data-day="${key}" data-v="${d.key}" aria-pressed="${done.includes(d.key)}"><span>${d.label}</span></button>`).join('')}</div><p class="hint">${L().dayHint}</p>`;
}

function audioBlock(n) {
  const id = n === 0 ? 'start' : `week${n}`;
  return `<div class="wb-audio" data-audio="assets/audio/${A().lang()}/${id}.mp3" hidden>
    <button class="play" data-act="audio" aria-label="${esc(L().play)}"><svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg></button>
    <div class="bar"><i></i></div><span class="time">0:00</span></div>`;
}
function wireAudio(root) {
  const box = root.querySelector('.wb-audio'); if (!box) return;
  const a = new Audio(); a.preload = 'metadata';
  const bar = box.querySelector('.bar i'), time = box.querySelector('.time'), btn = box.querySelector('.play');
  const fmt = (s) => `${Math.floor(s / 60)}:${String(Math.floor(s % 60)).padStart(2, '0')}`;
  a.addEventListener('loadedmetadata', () => { box.hidden = false; time.textContent = fmt(a.duration); });
  a.addEventListener('timeupdate', () => { bar.style.transform = `scaleX(${a.currentTime / (a.duration || 1)})`; time.textContent = fmt(a.duration - a.currentTime); });
  a.addEventListener('play', () => { btn.setAttribute('data-playing', ''); btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M7 5h4v14H7zM13 5h4v14h-4z"/></svg>'; });
  a.addEventListener('pause', () => { btn.removeAttribute('data-playing'); btn.innerHTML = '<svg viewBox="0 0 24 24" fill="currentColor"><path d="M8 5v14l11-7z"/></svg>'; });
  box.querySelector('.bar').addEventListener('click', (e) => { const r = e.currentTarget.getBoundingClientRect(); if (a.duration) a.currentTime = ((e.clientX - r.left) / r.width) * a.duration; });
  btn.addEventListener('click', () => (a.paused ? a.play().catch(() => {}) : a.pause()));
  a.src = box.dataset.audio;
  box._audio = a;
}

function checkin(which) {
  const x = L(); const ans = get(`checkin.${which}.a`) || [];
  const done = ans.length === 6 && ans.every((v) => v != null);
  const score = done ? ans.reduce((s, v) => s + v, 0) : null;
  const start = get('checkin.start.a');
  const startScore = start && start.length === 6 && start.every((v) => v != null) ? start.reduce((s, v) => s + v, 0) : null;
  return `<div class="ci">
    <p class="lede">${x.ciLede}</p>
    ${x.ciQ.map((q, qi) => `<fieldset class="ci-q"><legend>${qi + 1}. ${q}</legend><div class="seg">${x.ciA.map((a, ai) => `<button data-ci="${which}" data-q="${qi}" data-v="${ai}" aria-pressed="${ans[qi] === ai}">${a}</button>`).join('')}</div></fieldset>`).join('')}
    ${done ? `<p class="ci-score">${x.ciScore(score)}</p>` : ''}
    ${done && which === 'end' && startScore != null ? `<p class="ci-compare"><b>${x.ciCompare(startScore, score)}</b> ${score < startScore ? x.ciBetter : x.ciSame}</p>` : ''}
  </div>`;
}

function heatChart() {
  const checks = list('amaidhi-checks');
  const days = last7().map((d) => { const v = checks.filter((c) => dayKey(c.at) === d.key).map((c) => c.n); return { ...d, avg: v.length ? v.reduce((a, b) => a + b, 0) / v.length : null }; });
  return `<figure class="chart"><figcaption>${L().avg7}</figcaption><div class="bars">${days.map((d) => `<div class="col"><i style="height:${d.avg ? d.avg * 10 : 2}%;background:${d.avg ? A().heatColor(Math.round(d.avg)) : 'var(--line)'}"></i><span>${d.label}</span><b>${d.avg ? d.avg.toFixed(1) : ''}</b></div>`).join('')}</div></figure>`;
}

/* ============================== week pages ============================== */
function stepper(cur) {
  const done = get('done') || {};
  return `<nav class="wb-steps" aria-label="${esc(L().wbTitle)}">${L().weeks.map((w, i) => `<a href="#week-${i}" class="wb-step" ${i === cur ? 'aria-current="page"' : ''} ${done[i] ? 'data-done' : ''}><span>${i === 0 ? '·' : i}</span></a>`).join('')}</nav>`;
}
function learnBlock(n, w) {
  return `<div class="learn">${w.learn.map(([h, p], i) => {
    let extra = '';
    if (n === 1 && i === 1) extra = `<ol class="cycle">${w.cycle.map(([k, v], j) => `<li style="--h:${A().heatColor(3 + j * 1.6 | 0)}"><b>${k}</b><span>${v}</span></li>`).join('')}</ol>`;
    if (n === 1 && i === 2) extra = `<div class="scale">${Array.from({ length: 10 }, (_, k) => `<i style="background:${A().heatColor(k + 1)}">${k + 1}</i>`).join('')}</div>`;
    if (n === 4 && i === 1) extra = `<ul class="traps">${w.traps.map(([k, v]) => `<li><b>${k}</b><span>${v}</span></li>`).join('')}</ul>`;
    if (n === 7 && i === 0) extra = `<ul class="styles">${w.styles.map(([k, v], j) => `<li data-k="${j}"><b>${k}</b><span>${v}</span></li>`).join('')}</ul>`;
    return `<article class="lesson"><h3>${h}</h3>${p ? `<p>${p}</p>` : ''}${extra}</article>`;
  }).join('')}</div>`;
}

function doBlock(n, w) {
  const x = L(), d = data();
  switch (n) {
    case 0: {
      const safe = d.safety || {};
      const until = d.promiseAt ? d.promiseAt + 86400000 : 0;
      const active = until > Date.now();
      return `
        <div class="wb-block"><h3>${x.safeTitle}</h3>
          ${x.safeQ.map((q, i) => `<div class="yn"><p>${q}</p><div class="seg two"><button data-safe="${i}" data-v="1" aria-pressed="${safe[i] === 1}">${x.yes}</button><button data-safe="${i}" data-v="0" aria-pressed="${safe[i] === 0}">${x.no}</button></div>${safe[i] === 1 ? `<p class="help-card">${x.safeHelp[i]}</p>` : ''}</div>`).join('')}
        </div>
        <div class="wb-block"><h3>${x.ciTitle}</h3>${checkin('start')}</div>
        <div class="wb-block">${field('reason', w.reasonL, w.reasonPh, 3)}</div>
        <div class="wb-block">${field('exit', w.exitL, w.exitPh, 2)}<p class="hint">${w.exitNote}</p></div>
        <div class="wb-block">${field('signal', w.signalL, w.signalPh, 2)}</div>
        <div class="wb-block promise"><h3>${w.promiseL}</h3><blockquote>${w.promiseText}</blockquote>
          ${active ? `<p class="ok">✓ ${w.promiseUntil(new Date(until).toLocaleString(locale(), { weekday: 'short', hour: 'numeric', minute: '2-digit' }))}</p>`
            : `${d.promiseAt ? `<p class="hint">${w.promiseDone}</p>` : ''}<button class="btn btn-water" data-act="promise">${d.promiseAt ? w.renew : w.promiseBtn}</button>`}
        </div>`;
    }
    case 1: return `<div class="wb-block"><h3>${w.scaleTitle}</h3><p class="hint">${w.scaleLede}</p>
        ${[3, 6, 9].map((k) => `<div class="anchor-row"><span class="num" style="background:${A().heatColor(k)}">${k}</span>${field(`scale.${k}`, w.scaleL(k), w.scalePh[k], 2)}</div>`).join('')}</div>`;
    case 2: return `<div class="wb-block"><h3>${w.trigTitle}</h3>${chips('triggers', x.triggers)}<input class="wb-input" data-bind="triggersOther" placeholder="${esc(w.otherPh)}" value="${esc(d.triggersOther || '')}"></div>
        <div class="wb-block"><h3>${w.signsTitle}</h3>${chips('signs', x.signs)}<input class="wb-input" data-bind="signsOther" placeholder="${esc(w.otherPh)}" value="${esc(d.signsOther || '')}"></div>`;
    case 3: {
      const sel = d.tools || []; const tools = A().t().tools;
      return `<div class="wb-block"><h3>${w.toolsTitle}</h3><p class="hint">${w.toolsLede}</p>
        <div class="tool-grid">${Object.keys(tools).map((id) => { const r = sel.indexOf(id); return `<button class="tool" data-rank="${id}" aria-pressed="${r >= 0}">${r >= 0 ? `<span class="rank">${r + 1}</span>` : ''}<span class="ic">${A().ICONS[tools[id][2]] || ''}</span><b>${tools[id][0]}</b><span class="d">${tools[id][1]}</span></button>`; }).join('')}</div></div>`;
    }
    case 4: {
      const recs = list('amaidhi-records');
      return `<div class="wb-block"><h3>${w.recTitle}</h3>
        <form class="rec" data-form="record">
          ${[['sit', w.recSit], ['hot', w.recHot]].map(([k, l], i) => `<label class="wb-field"><span>${l}</span><textarea rows="2" name="${k}" placeholder="${esc(w.recPh[i])}"></textarea></label>`).join('')}
          <label class="wb-field"><span>${w.recTrap}</span><select name="trap" class="wb-input">${w.traps.map(([k], i) => `<option value="${i}">${esc(k.replace(/[“”]/g, ''))}</option>`).join('')}</select></label>
          ${[['check', w.recCheck, 2], ['cool', w.recCool, 3]].map(([k, l, i]) => `<label class="wb-field"><span>${l}</span><textarea rows="2" name="${k}" placeholder="${esc(w.recPh[i])}"></textarea></label>`).join('')}
          <button class="btn btn-water" type="submit">${w.recSave}</button>
        </form>
        ${recs.length ? `<ul class="entries">${recs.slice().reverse().slice(0, 5).map((r) => `<li><time>${fmtTime(r.at)}</time><p class="hot">“${esc(r.hot)}”</p><p class="cool">→ ${esc(r.cool)}</p></li>`).join('')}</ul>` : ''}
      </div>`;
    }
    case 5: {
      const cards = d.coping || [];
      return `<div class="wb-block"><h3>${w.copeTitle}</h3><p class="hint">${w.copeLede}</p>
        <div class="chips suggest">${w.suggest.map((s, i) => `<button class="chip" data-act="suggest" data-v="${i}">+ ${esc(s)}</button>`).join('')}</div>
        <div class="cope-cards">${Array.from({ length: 5 }, (_, i) => `<label class="cope-card"><span>${w.cardPh(i + 1)}</span><textarea rows="2" data-bind="coping.${i}" placeholder="…">${esc(cards[i] || '')}</textarea></label>`).join('')}</div></div>`;
    }
    case 6: {
      const ladder = d.ladder || []; const counts = d.rehearsed || {};
      return `<div class="wb-block"><h3>${w.ladderTitle}</h3><p class="hint">${w.ladderLede}</p>
        <ol class="ladder">${Array.from({ length: 5 }, (_, i) => `<li style="--h:${A().heatColor(3 + i + (i > 2 ? 1 : 0))}">
          <span class="num">${3 + i + (i > 2 ? 1 : 0)}</span>
          <textarea rows="2" data-bind="ladder.${i}" placeholder="${esc(w.scenePh[i])}">${esc(ladder[i] || '')}</textarea>
          <div class="rung-act"><button class="btn btn-ghost small" data-act="rehearse" data-v="${i}">${w.rehBtn}</button>${counts[i] ? `<span class="hint">${w.rehCount(counts[i])}</span>` : ''}</div>
        </li>`).join('')}</ol>
        <div class="reh" id="reh" hidden></div></div>`;
    }
    case 7: {
      const iv = d.ivoice || []; const ap = d.apology || [];
      return `<div class="wb-block"><h3>${w.iTitle}</h3><div class="triple">${w.iL.map((l, i) => `<label class="wb-field"><span>${l}</span><input class="wb-input" data-bind="ivoice.${i}" placeholder="${esc(w.iPh[i])}" value="${esc(iv[i] || '')}"></label>`).join('')}</div>
          <p class="preview" data-preview="ivoice"><span>${w.preview}</span>“${esc(w.iBuild(iv[0], iv[1], iv[2]))}”</p></div>
        <div class="wb-block">${field('timeout', w.toTitle, w.toDefault, 3, d.timeout ?? w.toDefault)}</div>
        <div class="wb-block"><h3>${w.apTitle}</h3>${w.apL.map((l, i) => `<label class="wb-field"><span>${l}</span><textarea rows="2" data-bind="apology.${i}" placeholder="${esc(w.apPh[i])}">${esc(ap[i] || '')}</textarea></label>`).join('')}
          <p class="preview" data-preview="apology"><span>${w.preview}</span>${esc(repairText(d) || '…')}</p></div>`;
    }
    case 8: {
      const risks = d.risks || []; const people = d.people || [];
      return `<div class="wb-block"><h3>${w.fuelsTitle}</h3>${chips('fuels', x.fuels)}</div>
        <div class="wb-block"><h3>${w.riskTitle}</h3>${Array.from({ length: 3 }, (_, i) => `<input class="wb-input" data-bind="risks.${i}" placeholder="${esc(w.riskPh[i])}" value="${esc(risks[i] || '')}">`).join('')}</div>
        <div class="wb-block"><h3>${w.peopleTitle}</h3>${Array.from({ length: 3 }, (_, i) => `<input class="wb-input" data-bind="people.${i}" placeholder="${esc(w.personPh)}" value="${esc(people[i] || '')}">`).join('')}</div>
        <div class="wb-block plan" id="plan"><h3>${w.planTitle}</h3><p class="hint">${w.planLede}</p>${planHtml()}</div>
        <div class="wb-block"><h3>${w.endCheck}</h3>${checkin('end')}</div>`;
    }
  }
  return '';
}

function practiceBlock(n, w) {
  const x = L();
  let widget = '';
  if (n === 1) {
    const today = list('amaidhi-checks').filter((c) => dayKey(c.at) === dayKey()).length;
    widget = `<div class="hc"><div class="hc-row">${Array.from({ length: 10 }, (_, k) => `<button style="--h:${A().heatColor(k + 1)}" data-act="hc" data-v="${k + 1}">${k + 1}</button>`).join('')}</div><p class="hint">${x.checksToday(Math.min(3, today))}</p>${heatChart()}</div>`;
  } else if (n === 2) {
    const log = list('amaidhi-log');
    widget = `<form class="rec" data-form="log">
      <label class="wb-field"><span>${w.logWhat}</span><textarea rows="2" name="what"></textarea></label>
      <div class="wb-field"><span>${w.logHeat}</span><div class="hc-row" data-pick="heat">${Array.from({ length: 10 }, (_, k) => `<button type="button" style="--h:${A().heatColor(k + 1)}" data-pickv="${k + 1}">${k + 1}</button>`).join('')}</div></div>
      <label class="wb-field"><span>${w.logDid}</span><textarea rows="2" name="did"></textarea></label>
      <label class="wb-field"><span>${w.logAfter}</span><textarea rows="2" name="after"></textarea></label>
      <button class="btn btn-water" type="submit">${w.logSave}</button></form>
      ${log.length ? `<ul class="entries">${log.slice().reverse().slice(0, 5).map((e) => `<li><time>${fmtTime(e.at)}</time>${e.heat ? `<span class="lvl" style="--h:${A().heatColor(e.heat)}">${e.heat}</span>` : ''}<p>${esc(e.what)}</p>${e.did ? `<p class="dim">${esc(e.did)}</p>` : ''}</li>`).join('')}</ul>` : ''}`;
  } else if (n === 0 || n === 8) {
    widget = '';
  } else {
    widget = dayTracker(`w${n}`);
  }
  return `<p class="practice">${w.practice}</p>${widget}`;
}

function addsBlock(n, w) {
  const k = sosKit(); const x = L();
  const preview = {
    0: [k.reason && `“${esc(k.reason)}”`, k.exitLine && `“${esc(k.exitLine)}”`],
    1: [3, 6, 9].map((v) => k.anchors[v] && `${v}: ${esc(k.anchors[v])}`),
    2: [k.signs.length && esc(k.signs.join(' · '))],
    3: [k.tools.length && k.tools.map((id, i) => `${i + 1}. ${esc(A().t().tools[id][0])}`).join('  ')],
    5: [k.coping[0] && `“${esc(k.coping[0])}”`],
    7: [k.repair && esc(k.repair)]
  }[n] || [];
  const filled = preview.filter(Boolean);
  return `<div class="sos-adds"><span class="adds-ic">${A().ICONS.check}</span><div><p>${w.adds}</p>${filled.length ? `<p class="adds-val">${filled.join('<br>')}</p>` : ''}<a class="link" href="#sos">SOS →</a></div></div>`;
}

function renderWeek(n) {
  const x = L(), w = x.weeks[n], done = (get('done') || {})[n];
  return `${stepper(n)}
  <header class="wb-hero">
    <p class="kicker">${x.weekN(n)} · ${x.mins(w.mins)}</p>
    <h1>${w.title}</h1>
    <p class="lede">${w.goal}</p>
    ${audioBlock(n)}
  </header>
  ${section(x.learn, learnBlock(n, w))}
  ${section(x.do, doBlock(n, w))}
  ${section(x.practise, practiceBlock(n, w))}
  ${section(x.adds, addsBlock(n, w))}
  <div class="wb-end reveal">
    ${done ? `<p class="ok">✓ ${x.doneOn(fmtDate(done))}</p>` : `<button class="btn btn-water" data-act="weekdone" data-v="${n}">${x.markDone}</button>`}
    ${n < 8 ? `<a class="btn btn-ghost" href="#week-${n + 1}">${x.next}: ${x.weeks[n + 1].title} →</a>` : `<a class="btn btn-ghost" href="#workbook">${x.toWorkbook}</a>`}
  </div>`;
}

/* ============================== plan, overview, journal ============================== */
function planHtml() {
  const d = data(), x = L(), k = sosKit();
  const row = (label, val) => `<div class="plan-row"><dt>${label}</dt><dd>${val || `<span class="empty">${x.kitEmpty}</span>`}</dd></div>`;
  const join = (arr) => arr.filter((s) => (s || '').trim()).map(esc).join('<br>');
  return `<dl class="plan-list">
    ${row(x.k.reason, esc(k.reason))}
    ${row(x.k.signs, esc(k.signs.join(' · ')))}
    ${row(x.k.exit, esc(k.exitLine))}
    ${row(x.k.tools, k.tools.map((id) => esc(A().t().tools[id][0])).join(' · '))}
    ${row(x.k.coping, join(k.coping))}
    ${row(x.k.repair, esc(k.repair))}
    ${row(x.k.timeout, esc(d.timeout || ''))}
    ${row(x.k.fuels, esc((d.fuels || []).map((i) => x.fuels[i]).join(' · ')))}
    ${row(x.k.risks, join(d.risks || []))}
    ${row(x.k.people, join(d.people || []))}
  </dl>`;
}

function renderOverview() {
  const x = L(), done = get('done') || {}, k = sosKit();
  const count = Object.keys(done).length;
  const nextIdx = x.weeks.findIndex((_, i) => !done[i]);
  const kitRows = [[x.k.reason, k.reason], [x.k.exit, k.exitLine], [x.k.scale, Object.values(k.anchors).some(Boolean)], [x.k.signs, k.signs.length], [x.k.tools, k.tools.length], [x.k.coping, k.coping.length], [x.k.repair, k.repair]];
  return `<header class="wb-hero">
    <p class="kicker">${x.navWorkbook}</p><h1>${x.wbTitle}</h1><p class="lede">${x.wbLede}</p>
    <div class="prog" aria-label="${esc(x.progress(count))}">${x.weeks.map((_, i) => `<i ${done[i] ? 'data-on' : ''}></i>`).join('')}</div>
    <p class="hint">${x.progress(count)}</p>
    ${nextIdx >= 0 ? `<a class="btn btn-water" href="#week-${nextIdx}">${count ? x.cont(`${x.weekN(nextIdx)}: ${x.weeks[nextIdx].title}`) : x.begin} →</a>` : ''}
  </header>
  <section class="wb-sec reveal"><ol class="weeks big" role="list">${x.weeks.map((w, i) => `<li><a class="week" href="#week-${i}"><span class="wn">${i === 0 ? '·' : String(i).padStart(2, '0')}</span><h3>${w.title}</h3><span class="adds">${done[i] ? '✓ ' : ''}${esc(w.goal)}</span></a></li>`).join('')}</ol></section>
  <section class="wb-sec reveal two-col">
    <div class="kit"><h2 class="wb-kick"><span>${x.kitTitle}</span></h2><p class="hint">${x.kitLede}</p>
      <ul>${kitRows.map(([l, v]) => `<li ${v ? 'data-on' : ''}><span class="dot"></span>${l}<em>${v ? '✓' : x.kitEmpty}</em></li>`).join('')}</ul></div>
    <div class="kit"><h2 class="wb-kick"><span>${x.backupTitle}</span></h2><p class="hint">${x.backupLede}</p>
      <div class="actions"><button class="btn btn-ghost" data-act="backup">${x.backup}</button><label class="btn btn-quiet file">${x.restore}<input type="file" accept="application/json,.json" data-act="restore" hidden></label></div>
      <a class="btn btn-ghost" href="#journal">${x.openJournal} →</a></div>
  </section>`;
}

function renderJournal() {
  const x = L();
  const sos = A().store.get('amaidhi-journal', []).slice().reverse();
  const log = list('amaidhi-log').slice().reverse();
  const sealed = A().store.get('amaidhi-sealed', []);
  const recs = list('amaidhi-records').slice().reverse();
  const empty = `<p class="hint">${x.jEmpty}</p>`;
  return `<header class="wb-hero"><p class="kicker">${x.journal}</p><h1>${x.jTitle}</h1><p class="lede">${x.jLede}</p></header>
  ${section(x.jSos, sos.length ? `<ul class="entries">${sos.map((s) => `<li><time>${fmtTime(s.at)}</time>${s.heat ? `<span class="lvl" style="--h:${A().heatColor(s.heat)}">${s.heat}</span>` : ''}<p>${x.sosRow(Math.max(1, Math.round((s.endedAt - s.at) / 60000)), s.heat)}</p>${(s.feelings || []).length ? `<p class="dim">${esc(s.feelings.map((f) => { const i = A().T.en.feels.indexOf(f); return i >= 0 ? A().t().feels[i] : f; }).join(' · '))}</p>` : ''}</li>`).join('')}</ul>` : empty)}
  ${section(x.jSealed, sealed.length ? `<ul class="entries">${sealed.map((s, i) => { const left = Math.ceil((s.at + 20 * 60000 - Date.now()) / 60000); return `<li><time>${fmtTime(s.at)}</time>${left > 0 ? `<p class="dim">🔒 ${x.sealedWait(left)}</p>` : `<details><summary>${x.read}</summary><p class="sealed-text">${esc(s.text)}</p></details>`}<button class="btn btn-quiet small" data-act="sealdel" data-v="${i}">${x.del}</button></li>`; }).join('')}</ul>` : empty)}
  ${section(x.jLog, log.length ? `<ul class="entries">${log.map((e) => `<li><time>${fmtTime(e.at)}</time>${e.heat ? `<span class="lvl" style="--h:${A().heatColor(e.heat)}">${e.heat}</span>` : ''}<p>${esc(e.what)}</p>${e.did ? `<p class="dim">${esc(e.did)}</p>` : ''}${e.after ? `<p class="dim">${esc(e.after)}</p>` : ''}</li>`).join('')}</ul>` : empty)}
  ${section(x.jRecords, recs.length ? `<ul class="entries">${recs.map((r) => `<li><time>${fmtTime(r.at)}</time><p class="hot">“${esc(r.hot)}”</p><p class="cool">→ ${esc(r.cool)}</p></li>`).join('')}</ul>` : empty)}
  ${section(x.jChecks, heatChart())}
  <div class="wb-end"><a class="btn btn-ghost" href="#workbook">${x.toWorkbook}</a></div>`;
}

/* ============================== render + events ============================== */
let root = null, view = null, reh = null;
function render(v, el) {
  root = el; view = v; reh = null;
  const x = L();
  let html;
  if (v === 'workbook') html = renderOverview();
  else if (v === 'journal') html = renderJournal();
  else html = renderWeek(+v.split('-')[1]);
  el.innerHTML = `<div class="wb-wrap">${html}</div><a class="fab" href="#sos" aria-label="SOS"><span class="dot" aria-hidden="true"></span>SOS</a>`;
  wireAudio(el);
  window.AMAIDHI.observeReveals();
}
function rerender() { const y = scrollY; render(view, root); scrollTo(0, y); }

const bindTimers = new Map(); // one debounce per field, so quick edits to two fields both save
function onInput(e) {
  const b = e.target.closest('[data-bind]'); if (!b || !root?.contains(b)) return;
  const path = b.dataset.bind, val = b.value;
  clearTimeout(bindTimers.get(path));
  bindTimers.set(path, setTimeout(() => {
    bindTimers.delete(path);
    set(path, val);
    if (path.startsWith('ivoice.') || path.startsWith('apology.')) {
      const w = L().weeks[7], d = data();
      const iv = d.ivoice || [];
      const pi = root.querySelector('[data-preview="ivoice"]'); if (pi) pi.innerHTML = `<span>${w.preview}</span>“${esc(w.iBuild(iv[0], iv[1], iv[2]))}”`;
      const pa = root.querySelector('[data-preview="apology"]'); if (pa) pa.innerHTML = `<span>${w.preview}</span>${esc(repairText(d) || '…')}`;
    }
    const plan = root.querySelector('#plan .plan-list'); if (plan) plan.outerHTML = planHtml();
  }, 250));
}

function rehearseUI(i) {
  const w = L().weeks[6]; const box = root.querySelector('#reh'); if (!box) return;
  const scene = (data().ladder || [])[i];
  if (!scene || !scene.trim()) { A().toast(w.rehPick); return; }
  reh = { i, step: 0 };
  const draw = () => {
    if (reh.step < 5) {
      box.innerHTML = `<p class="kick">${w.rehStep(reh.step + 1)}</p><p class="reh-scene">“${esc(scene)}”</p><p class="reh-text">${w.rehSteps[reh.step]}</p>
        ${reh.step === 4 ? `<div class="hc-row">${Array.from({ length: 10 }, (_, k) => `<button style="--h:${A().heatColor(k + 1)}" data-act="rehend" data-v="${k + 1}">${k + 1}</button>`).join('')}</div>` : `<button class="btn btn-water" data-act="rehnext">${L().next} →</button>`}`;
    }
  };
  box.hidden = false; draw(); box.scrollIntoView({ behavior: 'smooth', block: 'center' });
  reh.draw = draw;
}

function onClick(e) {
  if (!root || !root.contains(e.target)) return;
  const el = e.target.closest('[data-toggle],[data-rank],[data-day],[data-ci],[data-safe],[data-act],[data-pickv]'); if (!el) return;
  const d = data();
  if (el.dataset.toggle) {
    const k = el.dataset.toggle, v = +el.dataset.v; const arr = d[k] || [];
    set(k, arr.includes(v) ? arr.filter((a) => a !== v) : [...arr, v]);
    el.setAttribute('aria-pressed', !arr.includes(v));
  } else if (el.dataset.rank) {
    const id = el.dataset.rank; let arr = d.tools || [];
    arr = arr.includes(id) ? arr.filter((a) => a !== id) : arr.length >= 3 ? arr : [...arr, id];
    set('tools', arr); rerender();
  } else if (el.dataset.day) {
    const k = `days.${el.dataset.day}`; const arr = get(k) || []; const v = el.dataset.v;
    set(k, arr.includes(v) ? arr.filter((a) => a !== v) : [...arr, v]);
    el.setAttribute('aria-pressed', !arr.includes(v));
  } else if (el.dataset.ci) {
    const which = el.dataset.ci; const a = get(`checkin.${which}.a`) || [];
    a[+el.dataset.q] = +el.dataset.v; set(`checkin.${which}.a`, a); set(`checkin.${which}.at`, Date.now()); rerender();
  } else if (el.dataset.safe) {
    set(`safety.${el.dataset.safe}`, +el.dataset.v); rerender();
  } else if (el.dataset.pickv) {
    el.parentElement.querySelectorAll('button').forEach((b) => b.removeAttribute('aria-pressed'));
    el.setAttribute('aria-pressed', 'true'); el.closest('form').dataset.heat = el.dataset.pickv;
  } else {
    const act = el.dataset.act;
    if (act === 'promise') { set('promiseAt', Date.now()); rerender(); }
    else if (act === 'weekdone') { set(`done.${el.dataset.v}`, Date.now()); const n = +el.dataset.v; location.hash = n < 8 ? `week-${n + 1}` : 'workbook'; }
    else if (act === 'hc') { const c = list('amaidhi-checks'); c.push({ at: Date.now(), n: +el.dataset.v }); A().store.set('amaidhi-checks', c); flashSaved(); rerender(); }
    else if (act === 'suggest') {
      const s = L().weeks[5].suggest[+el.dataset.v]; const cards = d.coping || [];
      const slot = [0, 1, 2, 3, 4].find((i) => !(cards[i] || '').trim());
      if (slot == null) return; cards[slot] = s; set('coping', cards); rerender();
    }
    else if (act === 'rehearse') rehearseUI(+el.dataset.v);
    else if (act === 'rehnext' && reh) { reh.step++; reh.draw(); }
    else if (act === 'rehend' && reh) {
      const counts = d.rehearsed || {}; counts[reh.i] = (counts[reh.i] || 0) + 1; set('rehearsed', counts);
      A().toast(L().weeks[6].rehDone(el.dataset.v)); rerender();
    }
    else if (act === 'sealdel') { const s = A().store.get('amaidhi-sealed', []); s.splice(+el.dataset.v, 1); A().store.set('amaidhi-sealed', s); rerender(); }
    else if (act === 'backup') {
      const keys = ['amaidhi-wb', 'amaidhi-checks', 'amaidhi-log', 'amaidhi-records', 'amaidhi-journal', 'amaidhi-sealed'];
      const out = { app: 'amaidhi', v: 1, at: new Date().toISOString() }; keys.forEach((k) => { out[k] = A().store.get(k, null); });
      const url = URL.createObjectURL(new Blob([JSON.stringify(out, null, 1)], { type: 'application/json' }));
      const a = document.createElement('a'); a.href = url; a.download = `amaidhi-backup-${dayKey()}.json`; document.body.appendChild(a); a.click(); a.remove();
      setTimeout(() => URL.revokeObjectURL(url), 2000);
    }
  }
}

function onChange(e) {
  const inp = e.target.closest('[data-act="restore"]'); if (!inp || !inp.files?.[0]) return;
  const r = new FileReader();
  r.onload = () => {
    try {
      const o = JSON.parse(r.result); if (o.app !== 'amaidhi') throw new Error('x');
      Object.keys(o).filter((k) => k.startsWith('amaidhi-') && o[k] != null).forEach((k) => A().store.set(k, o[k]));
      A().toast(L().restored); rerender();
    } catch (err) { A().toast(L().badFile); }
  };
  r.readAsText(inp.files[0]);
}

function onSubmit(e) {
  const f = e.target.closest('form[data-form]'); if (!f || !root?.contains(f)) return;
  e.preventDefault();
  const fd = Object.fromEntries(new FormData(f));
  if (f.dataset.form === 'log') {
    if (!(fd.what || '').trim()) { f.querySelector('textarea').focus(); return; }
    const log = list('amaidhi-log'); log.push({ at: Date.now(), what: fd.what.trim(), heat: f.dataset.heat ? +f.dataset.heat : null, did: (fd.did || '').trim(), after: (fd.after || '').trim() });
    A().store.set('amaidhi-log', log);
  } else if (f.dataset.form === 'record') {
    if (!(fd.hot || '').trim()) { f.querySelector('[name=hot]').focus(); return; }
    const recs = list('amaidhi-records'); recs.push({ at: Date.now(), sit: (fd.sit || '').trim(), hot: fd.hot.trim(), trap: +fd.trap, check: (fd.check || '').trim(), cool: (fd.cool || '').trim() });
    A().store.set('amaidhi-records', recs);
  }
  A().toast(L().saved); rerender();
}

document.addEventListener('input', onInput);
document.addEventListener('click', onClick);
document.addEventListener('change', onChange);
document.addEventListener('submit', onSubmit);

window.AMAIDHI_WB = { render, sos: sosKit, nav: () => L().navWorkbook, weekTitle: (n) => L().weeks[n].title, STORE_KEYS: ['amaidhi-wb', 'amaidhi-checks', 'amaidhi-log', 'amaidhi-records'] };
})();
