# Amaidhi · Voice scripts (English + casual Tamil)

Three sets:
1. **SOS voice**: 14 short clips per language, played inside SOS mode.
2. **Start session**: about 3 minutes, the first workbook audio.
3. **Week 1, "Know your anger"**: about 4 minutes.

**How to deliver:** export each clip as MP3 (mono, 44.1 kHz) with the exact filename shown, and send them all. I'll level the volume, trim silence and wire them in. SOS clips go in `assets/audio/en/` and `assets/audio/ta/`. Until a clip exists, the site falls back to the phone's own voice.

---

## TTS prompts

Use the same voice for everything (for example Gemini TTS, voice **Sadaltager**, as in your reels), so Amaidhi has one consistent voice.

**Prompt A: SOS clips** (the listener is angry right now)
> Read the script word for word, exactly as written. Do not add, skip or change anything, and add no intro or outro.
> Style: a calm, warm young South-Indian man speaking to a friend who is very angry right now. Low, steady and slow, never dramatic, never preachy. For Tamil, natural spoken Chennai Tamil; English words like "send", "phone", "button", "round", "feeling" are said in natural Indian English.
> Pace: slower than normal conversation. Pause about one second at every "…" and after every sentence. Breathe-in and breathe-out lines are soft and stretched.
> No laughter, no background sound, no music.

**Prompt B: lessons** (the listener is calm, learning)
> Read the script word for word, exactly as written. Do not add, skip or change anything, and add no intro or outro.
> Style: a warm, friendly young South-Indian man explaining something important to a friend over tea. Conversational, kind, a little light where the script is light, serious where it is serious. Casual Chennai Tamil for the Tamil version; English words in natural Indian English.
> Pace: relaxed. Pause about half a second after every paragraph and at every "…".
> No laughter, no background sound, no music.

---

## 1. SOS voice clips

Each clip is played when its screen opens. Keep them short; in the moment of rage, fewer words help more.

| File | When it plays |
|---|---|
| `stop.mp3` | Step 1 opens |
| `away.mp3` | Step 2 opens |
| `body.mp3` | Step 3 opens |
| `breathe.mp3` | Step 4 opens (before the circle starts) |
| `in.mp3` | Every inhale (must be under 3 seconds) |
| `out.mp3` | Every exhale (must be under 5 seconds) |
| `write.mp3` | Step 5 opens |
| `check.mp3` | Step 6 opens |
| `hot.mp3` | Heat 7 or higher |
| `cooler.mp3` | Heat 6 or lower |
| `under.mp3` | "What's under the anger?" |
| `done.mp3` | Final screen |
| `timer.mp3` | When the 20-minute calm timer ends |

### English (`assets/audio/en/`)

**stop.mp3**
Stop. Don't say anything right now. Don't send anything. Just stand still… and let your hands go loose. This feeling will pass. Press and hold the button.

**away.mp3**
Now step away. Leave the room, or just turn away. Say this, calmly: I need ten minutes. I will come back. Walking away is not losing. It's choosing.

**body.mp3**
Anger is heat in your body. Let's cool it down. Splash cold water on your face. Or squeeze your fists tight for five seconds… and let go. Or walk fast for two minutes. Pick one. Do it now.

**breathe.mp3**
Now breathe with the circle. In for four… out for six. A long out-breath tells your body it is safe to slow down.

**in.mp3**
Breathe in…

**out.mp3**
And slowly… out.

**write.mp3**
If you want to say something, don't send it. Write it here instead. Write everything. Nobody will see it. It stays on your phone.

**check.mp3**
How hot is it now? Tap a number. One is calm. Ten is boiling.

**hot.mp3**
Still hot. That's okay. Anger takes time to settle. Let's do one more round.

**cooler.mp3**
It's cooler now. Well done. Let's look at what's underneath.

**under.mp3**
Anger often guards a softer feeling. Hurt. Fear. Feeling ignored… or treated unfairly. Which ones are true for you right now?

**done.mp3**
It passed. You felt the fire… and you didn't act on it. That is the whole skill. When you're ready to talk, start simple: I was angry earlier. I want to talk about it calmly.

**timer.mp3**
Twenty minutes are up. Check how hot it is now.

### தமிழ் (`assets/audio/ta/`)

**stop.mp3**
நில்லுங்க. இப்போ எதுவும் பேச வேண்டாம். எதுவும் send பண்ண வேண்டாம். அப்படியே நில்லுங்க… கைய loose-ஆ விடுங்க. இந்த feeling கடந்து போயிடும். அந்த button-ஐ அழுத்திப் புடிங்க.

**away.mp3**
இப்போ கொஞ்சம் விலகிப் போங்க. Room-ஐ விட்டு வெளிய போங்க, இல்லன்னா திரும்பி நில்லுங்க. அமைதியா இப்படிச் சொல்லுங்க: எனக்கு ஒரு பத்து நிமிஷம் வேணும். திரும்பி வர்றேன். விலகிப் போறது தோல்வி இல்ல. அது ஒரு choice.

**body.mp3**
கோபம்னா உடம்புக்குள்ள ஏறுற சூடு. அதைக் கொஞ்சம் குளிர வைப்போம். முகத்துல ஜில்லுன்னு தண்ணி அடிங்க. இல்லன்னா, அஞ்சு second கைய இறுக்கமா மடக்குங்க… அப்புறம் விட்டுடுங்க. இல்லன்னா, ரெண்டு நிமிஷம் வேகமா நடங்க. ஏதாவது ஒண்ணு. இப்பவே பண்ணுங்க.

**breathe.mp3**
இப்போ அந்த வட்டத்தோட சேர்ந்து மூச்சு விடுங்க. நாலு count உள்ள… ஆறு count வெளிய. வெளிய விடுற மூச்சு நீளமா இருந்தா, உடம்புக்கு "அமைதியாகலாம்"னு signal போகும்.

**in.mp3**
மூச்சை உள்ள இழுங்க…

**out.mp3**
மெதுவா… வெளிய விடுங்க.

**write.mp3**
ஏதாவது சொல்லணும்னு தோணுதா? Send பண்ணாதீங்க. இங்கயே எழுதுங்க. எல்லாத்தையும் கொட்டிடுங்க. யாரும் பார்க்க மாட்டாங்க. இது உங்க phone-லயே இருக்கும்.

**check.mp3**
இப்போ கோபம் எவ்வளவு சூடா இருக்கு? ஒரு number-ஐ தொடுங்க. ஒண்ணுன்னா அமைதி. பத்துன்னா கொதிக்குது.

**hot.mp3**
இன்னும் சூடா இருக்கு. பரவாயில்ல. கோபம் அடங்க கொஞ்சம் நேரம் ஆகும். இன்னொரு round பண்ணலாம்.

**cooler.mp3**
இப்போ கொஞ்சம் குளிர்ந்திருக்கு. Super. அடியில என்ன இருக்குன்னு பார்ப்போம்.

**under.mp3**
கோபத்துக்குப் பின்னாடி பெரும்பாலும் ஒரு மென்மையான feeling ஒளிஞ்சிருக்கும். வலி. பயம். யாரும் நம்மள மதிக்கலங்கிற feeling… இல்லன்னா அநியாயம் நடந்துச்சுங்கிற feeling. இப்போ உங்களுக்கு எது உண்மை?

**done.mp3**
கடந்து போயிடுச்சு. நெருப்பை உணர்ந்தீங்க… ஆனா அதுபடி நடந்துக்கல. இதுதான் முழு skill-உம். பேசத் தயாரானதும், simple-ஆ ஆரம்பிங்க: முன்னாடி எனக்கு கோபம் வந்துச்சு. அதப் பத்தி அமைதியா பேசணும்.

**timer.mp3**
இருபது நிமிஷம் ஆச்சு. இப்போ சூடு எவ்வளவுன்னு பாருங்க.

---

## 2. Start session (about 3 minutes)

Files: `assets/audio/en/start.mp3`, `assets/audio/ta/start.mp3`. Use prompt B.

### English

Hi. Welcome to Amaidhi.

If you're here, anger has probably cost you something. Maybe a relationship. Maybe a job. Maybe just a night of sleep… or your own peace of mind.

First, something important. You are not a bad person. Anger is a habit your body learned, usually a long time ago, to protect you. And anything that was learned… can be unlearned. That's what these eight weeks are for.

Here's how it works. Every week there's one short talk like this, one worksheet, and a few minutes of practice each day. And every week, a new tool gets added to your SOS button. So the more you practise on calm days, the stronger your SOS becomes on hard days.

Today, we'll do three things.

One. Your reason. Why do you want to change? Make it specific. Not "to be a better person." Something like: "I don't want my daughter to flinch when I raise my voice." Or: "I want my wife to feel safe telling me bad news." Write your reason down. When you open SOS in a hard moment, it will be right there, in your own words.

Two. Your exit line. This is one sentence you say before you walk away. Something like: "I need ten minutes. I will come back." Tell the people at home what it means, today, while you're calm. Then walking away won't feel like you're abandoning them. They'll know you're coming back.

Three. The twenty-four-hour promise. Notice, it's not a promise to *be* calm. Nobody can promise that. It's a promise to *act* calm, for just one day. No shouting. No insults. No slamming doors. No hitting. If anger comes, and it will, you open SOS and follow the steps. Just one day. Tomorrow, you can promise one more.

One last thing. If you have ever hurt someone when you were angry, or you're afraid you might, please talk to a professional as well. In India, you can call Tele-MANAS on one four four one six, any time, for free. This workbook will help. But you deserve real support too.

That's it for today. Write your reason. Write your exit line. Make your promise.

Let's begin.

### தமிழ்

வணக்கம். அமைதிக்கு உங்களை வரவேற்கிறோம்.

நீங்க இங்க வந்திருக்கீங்கன்னா, கோபம் உங்ககிட்ட இருந்து ஏதாவது ஒண்ண எடுத்திருக்கும். ஒரு உறவா இருக்கலாம். ஒரு வேலையா இருக்கலாம். இல்லன்னா ஒரு ராத்திரி தூக்கம்… இல்ல உங்க மன நிம்மதி.

முதல்ல ஒரு முக்கியமான விஷயம். நீங்க கெட்டவங்க இல்ல. கோபம்ங்கிறது உங்க உடம்பு கத்துக்கிட்ட ஒரு பழக்கம். பெரும்பாலும் ரொம்ப நாளைக்கு முன்னாடி, உங்கள காப்பாத்துறதுக்காக கத்துக்கிட்டது. கத்துக்கிட்ட எதையும்… மாத்திக்க முடியும். அதுக்குத்தான் இந்த எட்டு வாரம்.

இது எப்படி வேலை செய்யும்னா, ஒவ்வொரு வாரமும் இது மாதிரி ஒரு சின்ன பேச்சு, ஒரு worksheet, தினமும் கொஞ்சம் நிமிஷம் practice. ஒவ்வொரு வாரமும் உங்க SOS button-ல ஒரு புது tool சேரும். அமைதியான நாட்கள்ல எவ்வளவு practice பண்றீங்களோ, கஷ்டமான நாட்கள்ல உங்க SOS அவ்வளவு strong-ஆ இருக்கும்.

இன்னைக்கு மூணு விஷயம் பண்ணப் போறோம்.

ஒண்ணு. உங்க காரணம். ஏன் மாறணும்னு நினைக்கிறீங்க? அதை specific-ஆ சொல்லுங்க. "நல்ல மனுஷனா இருக்கணும்"னு இல்ல. இப்படி: "நான் குரலை உயர்த்தும்போது என் பொண்ணு பயந்து நடுங்கக் கூடாது." இல்லன்னா: "கெட்ட செய்தியக் கூட என் மனைவி தைரியமா என்கிட்ட சொல்லணும்." உங்க காரணத்த எழுதி வைங்க. கஷ்டமான நேரத்துல SOS-ஐ திறக்கும்போது, அது உங்க வார்த்தையிலேயே அங்க இருக்கும்.

ரெண்டு. உங்க exit line. விலகிப் போறதுக்கு முன்னாடி நீங்க சொல்ற ஒரே ஒரு வாக்கியம். இப்படி: "எனக்கு ஒரு பத்து நிமிஷம் வேணும். திரும்பி வர்றேன்." இதோட அர்த்தத்த வீட்டுல இருக்கவங்ககிட்ட இன்னைக்கே சொல்லிடுங்க, நீங்க அமைதியா இருக்கும்போதே. அப்போ நீங்க விலகிப் போனா, அவங்கள விட்டுட்டுப் போறீங்கன்னு தோணாது. நீங்க திரும்பி வருவீங்கன்னு அவங்களுக்குத் தெரியும்.

மூணு. இருபத்தி நாலு மணி நேர promise. கவனிங்க, இது அமைதியா *இருப்பேன்*னு promise இல்ல. அத யாராலயும் promise பண்ண முடியாது. இது அமைதியா *நடந்துக்குவேன்*னு promise, ஒரே ஒரு நாளைக்கு. கத்தக் கூடாது. திட்டக் கூடாது. கதவை அடிச்சு சாத்தக் கூடாது. அடிக்கக் கூடாது. கோபம் வந்தா, கண்டிப்பா வரும், SOS-ஐ திறந்து அந்த steps-ஐ follow பண்ணுங்க. ஒரே ஒரு நாள். நாளைக்கு, இன்னொரு நாளுக்கு promise பண்ணலாம்.

கடைசியா ஒண்ணு. கோபத்துல எப்பவாவது யாரையாவது காயப்படுத்தியிருந்தா, இல்ல காயப்படுத்திடுவோமோன்னு பயமா இருந்தா, ஒரு professional-கிட்டயும் பேசுங்க. இந்தியால, Tele-MANAS-ஐ ஒண்ணு நாலு நாலு ஒண்ணு ஆறுக்கு, எப்ப வேணும்னாலும், free-ஆ கூப்பிடலாம். இந்த workbook உதவும். ஆனா உங்களுக்கு உண்மையான support-உம் கிடைக்கணும்.

இன்னைக்கு இவ்வளவுதான். உங்க காரணத்த எழுதுங்க. உங்க exit line-ஐ எழுதுங்க. உங்க promise-ஐ பண்ணுங்க.

ஆரம்பிக்கலாம்.

---

## 3. Week 1: Know your anger (about 4 minutes)

Files: `assets/audio/en/week1.mp3`, `assets/audio/ta/week1.mp3`. Use prompt B.

### English

Welcome to week one. This week is about one thing: getting to know your anger.

Let's start with something that surprises most people. Anger itself is not the problem. Anger is a signal. It tells you something feels wrong… unfair… or threatening. That signal is useful.

The problem is what we *do* with it. Shouting. Insulting. Breaking things. Hitting. That's not anger. That's aggression. Anger is a feeling. Aggression is a behaviour. You can't always choose your feelings. But you can learn to choose your behaviour. That's the whole game.

Now, anger doesn't come out of nowhere. It moves in a cycle. Five steps.

Trigger. Something happens.
Thought. You tell yourself a story about it.
Body. Your body heats up.
Action. You do something.
Result. Something happens because of what you did.

Let me give you an example. You're stuck in traffic. A bike cuts right in front of you. That's the trigger.
Your thought: "He did that on purpose. He thinks I'm nothing."
Your body: your face gets hot, your grip tightens, your heart races.
Your action: you lean on the horn and shout.
The result? You reach office shaking. Your whole morning is gone. And that bike rider? He forgot about you ten seconds later.

Here's the good news. Every one of those five steps is a place where you can step in. You don't have to wait till the end.

Now, the heat scale. One to ten.
One to three: irritated. Annoyed, but you're fine.
Four to six: angry. You feel it, but you can still think clearly.
Seven to eight: very angry. Your thinking starts to narrow. You only see what's wrong.
Nine to ten: losing control. This is where people say things they regret for years.

Here's the important part. Around seven, the thinking part of your brain starts going offline. That's why we don't wait for nine. We act at five or six, while you can still think.

This week, make your own scale. What does a three look like for you? What does a six look like? And a nine? Write real examples from your life. Then, when you open SOS, your scale will be there, in your words.

And your daily practice is simple. Three times a day: morning, afternoon, and night. Just ask yourself: "What's my number right now?" That's it. No fixing. Just noticing.

Because anger you can notice… is anger you can manage.

See you next week.

### தமிழ்

முதல் வாரத்துக்கு வரவேற்கிறோம். இந்த வாரம் ஒரே ஒரு விஷயம்தான்: உங்க கோபத்தத் தெரிஞ்சுக்கிறது.

பல பேருக்கு ஆச்சரியமா இருக்கிற ஒரு விஷயத்துல இருந்து ஆரம்பிக்கலாம். கோபமே பிரச்சனை இல்ல. கோபம் ஒரு signal. ஏதோ தப்பா இருக்கு… அநியாயமா இருக்கு… இல்ல ஆபத்தா இருக்குன்னு அது சொல்லுது. அந்த signal-ல பயன் இருக்கு.

பிரச்சனை, அதை வச்சு நாம என்ன *பண்றோம்*ங்கிறதுதான். கத்துறது. திட்டுறது. பொருள உடைக்கிறது. அடிக்கிறது. அது கோபம் இல்ல. அது aggression. கோபம் ஒரு feeling. Aggression ஒரு செயல். என்ன feel பண்ணணும்னு நம்மால எப்பவும் தேர்ந்தெடுக்க முடியாது. ஆனா என்ன பண்ணணும்னு தேர்ந்தெடுக்கக் கத்துக்கலாம். அவ்வளவுதான் விஷயமே.

கோபம் சும்மா திடீர்னு வர்றதில்ல. அது ஒரு சுழற்சியா வரும். அஞ்சு படி.

Trigger. ஏதோ ஒண்ணு நடக்குது.
எண்ணம். அதைப் பத்தி உங்களுக்குள்ள ஒரு கதை சொல்லிக்கிறீங்க.
உடம்பு. உடம்பு சூடாகுது.
செயல். நீங்க ஏதோ பண்றீங்க.
விளைவு. நீங்க பண்ணதால ஏதோ நடக்குது.

ஒரு example சொல்றேன். நீங்க traffic-ல மாட்டிக்கிட்டு இருக்கீங்க. ஒரு bike உங்க முன்னாடி சட்டுன்னு cut பண்ணிட்டுப் போகுது. அது trigger.
உங்க எண்ணம்: "வேணும்னே பண்றான். என்னை ஒரு ஆளாவே மதிக்கல."
உங்க உடம்பு: முகம் சூடாகுது, கை இறுகுது, நெஞ்சு படபடக்குது.
உங்க செயல்: horn-ஐ அடிச்சுக்கிட்டே கத்துறீங்க.
விளைவு? Office போய் சேரும்போது கை நடுங்குது. காலை முழுசும் போச்சு. அந்த bike காரன்? பத்து second-ல உங்கள மறந்துட்டான்.

நல்ல செய்தி என்னன்னா, இந்த அஞ்சு படில ஒவ்வொண்ணுலயும் நீங்க குறுக்கிடலாம். கடைசி வரைக்கும் காத்திருக்க வேண்டியதில்ல.

இப்போ சூடு அளவுகோல். ஒண்ணுல இருந்து பத்து வரை.
ஒண்ணு முதல் மூணு: எரிச்சல். கடுப்பா இருக்கும், ஆனா பரவாயில்ல.
நாலு முதல் ஆறு: கோபம். உணருவீங்க, ஆனா இன்னும் தெளிவா யோசிக்க முடியும்.
ஏழு, எட்டு: கடுங்கோபம். யோசனை சுருங்க ஆரம்பிக்கும். தப்பு மட்டும்தான் கண்ணுக்குத் தெரியும்.
ஒன்பது, பத்து: கட்டுப்பாடு போயிடும். வருஷக்கணக்கா வருத்தப்படுற வார்த்தைகள் இங்கதான் வெளிய வரும்.

முக்கியமான விஷயம் இதுதான். ஏழு கிட்ட வரும்போது, மூளையில யோசிக்கிற பகுதி off ஆக ஆரம்பிக்கும். அதனாலதான் ஒன்பது வரைக்கும் காத்திருக்கக் கூடாது. அஞ்சு, ஆறுலயே செயல்படணும், இன்னும் யோசிக்க முடியும்போதே.

இந்த வாரம், உங்களுக்கான அளவுகோல உருவாக்குங்க. உங்களுக்கு மூணுன்னா எப்படி இருக்கும்? ஆறுன்னா? ஒன்பதுன்னா? உங்க வாழ்க்கையில நடந்த உண்மையான example-ஐ எழுதுங்க. அப்புறம் SOS-ஐ திறக்கும்போது, உங்க அளவுகோல் உங்க வார்த்தையிலேயே அங்க இருக்கும்.

தினசரி practice ரொம்ப simple. ஒரு நாளைக்கு மூணு தடவை: காலையில, மதியம், ராத்திரி. உங்களையே கேட்டுக்குங்க: "இப்போ என் number என்ன?" அவ்வளவுதான். சரி பண்ண வேண்டாம். கவனிச்சா போதும்.

ஏன்னா, கவனிக்க முடிஞ்ச கோபத்த… கையாளவும் முடியும்.

அடுத்த வாரம் பார்க்கலாம்.
