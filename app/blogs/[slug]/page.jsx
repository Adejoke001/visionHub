'use client';
import React from 'react';
import { useParams } from 'next/navigation';
import Link from 'next/link';
import Image from 'next/image';
import { assets } from '@/assets/assets';
import styles from './blogPost.module.css';
import * as Icon from '@phosphor-icons/react/dist/ssr';

const BlogPost = () => {
  const params = useParams();
  const slug = params.slug;

  const blogPosts = {
    'self-love-motivation': {
      title: 'Self-Love & Motivation',
      subtitle: 'You Can\'t Pour From an Empty Cup',
      image: assets.blogs,
      date: 'May 20, 2026',
      readTime: '8 min read',
      author: 'VisionHub Team',
      content: `
        <p>There is a voice inside you that has been speaking for years. Sometimes it whispers. Sometimes it shouts. But its message is always the same: "You are not enough."</p>
        
        <p>You've heard it when you looked in the mirror. You've felt it when you made a mistake. It follows you to bed at night and greets you in the morning. And somewhere along the way, you started believing it.</p>
        
        <p>But here is what I need you to hear, dear one: <strong>that voice is a liar.</strong></p>
        
        <p>Not because you're perfect. Not because you never fail. But because your worth was never meant to be earned. It was given to you the moment you took your first breath. And no failure, no flaw, no fear can ever take it away.</p>
        
        <div class="${styles.quote}">
          "You have been criticizing yourself for years, and it hasn't worked. Try approving of yourself and see what happens." — Louise Hay
        </div>
        
        <h2>The Heavy Weight of Not Feeling Enough</h2>
        
        <p>Let's be honest with each other for a moment. You've been carrying something heavy. Maybe it's a mistake from your past that you can't seem to forgive yourself for. Maybe it's a voice from childhood that told you to try harder, be better, do more. Maybe it's the exhausting race of comparison — looking at everyone else's highlight reels and wondering why your life doesn't look like that.</p>
        
        <p>Whatever it is, you've been carrying it alone. And it's exhausting, isn't it?</p>
        
        <p>I want you to pause for a moment. Take a breath. And imagine what it would feel like to set that weight down. Just for a moment. What if you didn't have to prove anything today? What if you could just... be?</p>
        
        <h2>What Self-Love Actually Looks Like (Not What Instagram Tells You)</h2>
        
        <p>We've been sold a version of self-love that looks like bubble baths, face masks, and expensive smoothie bowls. And listen, I love a good bubble bath as much as anyone. But real self-love? It looks different.</p>
        
        <p><strong>Real self-love looks like choosing rest when your body is screaming for it, even when there's more work to do.</strong> It's saying no to plans when your social battery is empty, even if people are disappointed. It's setting boundaries with people you love, because you finally understand that you can't keep setting yourself on fire to keep others warm.</p>
        
        <p>Real self-love is forgiving yourself for the mistakes you made when you were doing the best you could with what you knew at the time. It's looking in the mirror and saying, "I'm still learning, and that's okay." It's giving yourself the same grace you so freely give to everyone else.</p>
        
        <h2>The lie that keeps you stuck</h2>
        
        <p>There's a lie that has kept so many of us trapped for years. It sounds like this: "I'll love myself when I achieve more. When I lose the weight. When I get the promotion. When I fix everything that's wrong with me."</p>
        
        <p>But here's the truth: <strong>self-love is not the reward. It is the foundation.</strong> You don't earn your way into worthiness. You were born worthy. The work isn't becoming enough — it's remembering that you already are.</p>
        
        <div class="${styles.callout}">
          <p><strong>Pause and breathe:</strong> Right now, in this moment, you are enough. Not because of what you've done. Not because of what you will do. But because you exist. You are a human being with a beating heart and a soul that matters. That is enough.</p>
        </div>
        
        <h2>Gentle Practices to Welcome Self-Love Home</h2>
        
        <p>This isn't about overnight transformation. This is about small, gentle steps that invite self-love to take up space in your life. Try one. Just one. See how it feels.</p>
        
        <p><strong>1. Change the conversation.</strong> Notice the way you speak to yourself. Would you speak to a friend that way? If not, it's time to change the script. When you catch yourself saying something cruel, pause. Take a breath. And say, "I'm choosing a different word now." Then say something kind instead.</p>
        
        <p><strong>2. Claim your morning.</strong> Before you reach for your phone, before the demands of the world rush in, take two minutes. Place your hand on your heart. Breathe. And say: "I am here. I am enough. I am worthy of a good day."</p>
        
        <p><strong>3. Celebrate small wins.</strong> You got out of bed? Win. You ate something? Win. You took a shower? Big win. Life is hard. Don't minimize the effort it takes just to show up. Celebrate yourself. You're doing better than you think.</p>
        
        <p><strong>4. Create a boundary that protects your peace.</strong> Is there a person, a commitment, a habit that drains you? Give yourself permission to step back. You don't need to explain. You don't need to justify. Your peace is worth protecting.</p>
        
        <p><strong>5. Forgive yourself. Really.</strong> Write down one thing you've been holding against yourself. Read it. Then say, "I did the best I could with what I knew at the time. I forgive myself. I am ready to move forward." Then get rid of the paper. Burn it. Tear it up. Let it go.</p>
        
        <h2>A Letter to the One Who Is Trying So Hard</h2>
        
        <p>I see you. The one who shows up for everyone else. The one who says "I'm fine" when you're falling apart. The one who gives and gives until there's nothing left.</p>
        
        <p>You have been so strong for so long. But strength was never meant to be a solo journey. You were never meant to carry all of this alone. And it's okay to admit that you're tired. It's okay to ask for help. It's okay to let someone hold you up for a while.</p>
        
        <p>The love you so freely give to others? You deserve that same love. Not someday. Not when you're more together. Right now. Today. In this messy, beautiful, imperfect moment.</p>
        
        <p>So take a breath. Place your hand on your heart. And let these words sink in: <strong>You matter. You are enough. And you are so much more loved than you will ever know.</strong></p>
        
        <p>With love,<br />The VisionHub Team</p>
      `
    },
    'relationship-healing': {
      title: 'Relationship Healing',
      subtitle: 'Fights Don\'t Mean Failure',
      image: assets.blogs5,
      date: 'May 18, 2026',
      readTime: '9 min read',
      author: 'VisionHub Team',
      content: `
        <p>You had another fight. The words were sharp. Voices were raised. And now you're sitting in the silence, wondering if this is the beginning of the end.</p>
        
        <p>Let me stop you right there, dear one. <strong>A fight is not a funeral.</strong> Disagreements are not disasters. And the healthiest relationships in the world? They have conflict. They just know how to repair.</p>
        
        <p>So take a breath. Let's talk about what's really happening beneath the surface.</p>
        
        <div class="${styles.quote}">
          "The goal in marriage is not to think alike, but to think together." — Robert Dobbs
        </div>
        
        <h2>What Your Fight is Really Trying to Tell You</h2>
        
        <p>Most fights aren't about what they seem to be about. The dishes in the sink aren't really about the dishes. The lateness isn't really about the time. Underneath every argument is a deeper question: <strong>"Do you still see me? Do I still matter to you? Are we going to be okay?"</strong></p>
        
        <p>Your anger is often just hurt wearing a mask. Your defensiveness is often fear pretending to be strong. And the loudest fights are usually between two people who are both silently whispering, "Please don't leave me."</p>
        
        <p>When you understand this, everything shifts. The person across from you isn't your enemy. They're your teammate, and you're both trying to protect something precious. The fight isn't the problem — it's a symptom. And symptoms? They point to something deeper that needs attention.</p>
        
        <h2>The Myth of the Perfect Relationship</h2>
        
        <p>We've been sold a dangerous story. The story says that if you're with the right person, everything will be easy. You'll finish each other's sentences. You'll never fight. You'll just float through life in perfect harmony.</p>
        
        <p>That story is a lie. And believing it has broken more relationships than any fight ever could.</p>
        
        <p>The truth is this: <strong>love is not about finding someone you never fight with. Love is about finding someone worth fighting for.</strong> It's about two imperfect people choosing each other, over and over again, even when it's hard. Especially when it's hard.</p>
        
        <h2>How to Repair After a Rupture</h2>
        
        <p>Every relationship experiences ruptures. Moments of disconnection. Words you wish you could take back. The magic isn't in avoiding these moments — it's in how you come back together.</p>
        
        <p><strong>1. Pause before you react.</strong> When emotions are high, wisdom is low. Give yourself time to calm down before trying to resolve anything. It's okay to say, "I need some time to process. Can we come back to this in an hour?" That's not avoidance. That's wisdom.</p>
        
        <p><strong>2. Listen to understand, not to respond.</strong> Most of us listen with one ear while planning our rebuttal with the other. Try something different. Listen to really hear what your partner is feeling. Don't interrupt. Don't defend. Just listen. Then say, "I hear you. Tell me more."</p>
        
        <p><strong>3. Apologize without a "but."</strong> "I'm sorry, but you started it" is not an apology. A real apology takes ownership. "I'm sorry for raising my voice. That wasn't fair to you. I'll work on that." No buts. Just responsibility.</p>
        
        <p><strong>4. Get curious, not defensive.</strong> When your partner shares a hurt, your instinct might be to defend yourself. Instead, get curious. "Help me understand what that felt like for you." Curiosity softens walls. Defensiveness builds them higher.</p>
        
        <p><strong>5. Reconnect physically.</strong> After the words are spoken, after the apology is given, find a way to physically reconnect. A hug. Holding hands. A gentle touch on the arm. Physical touch releases oxytocin — the bonding hormone. It reminds your bodies that you're still safe with each other.</p>
        
        <div class="${styles.callout}">
          <p><strong>A gentle reminder:</strong> Repair doesn't mean pretending the hurt didn't happen. It means acknowledging it, learning from it, and choosing to move forward together. Some conversations need to happen multiple times. That's not failure. That's healing.</p>
        </div>
        
        <h2>When You Feel Like Giving Up</h2>
        
        <p>There will be days when the distance feels too wide. When you wonder if it's worth it. When the couch feels more comfortable than the conversation.</p>
        
        <p>On those days, remember why you started. Remember the person you fell in love with — not the idealized version, but the real, flawed, beautiful human being. They're still in there. And so are you.</p>
        
        <p>Love is not a feeling that just happens to you. Love is a choice you make. Every day. Even on the hard days. Especially on the hard days.</p>
        
        <p>You are not failing because you're struggling. You're human. And humans who love each other will sometimes hurt each other. The question isn't whether you'll ever hurt again. The question is: <strong>Are you both willing to keep showing up, keep repairing, keep choosing each other?</strong></p>
        
        <p>If the answer is yes, then there is hope. There is always hope.</p>
        
        <p>With hope,<br />The VisionHub Team</p>
      `
    },
    'marriage-commitment': {
      title: 'Marriage & Commitment',
      subtitle: 'Small Gestures, Big Love',
      image: assets.blogs2,
      date: 'May 15, 2026',
      readTime: '7 min read',
      author: 'VisionHub Team',
      content: `
        <p>When was the last time you felt truly seen by your partner? Not celebrated on a birthday or anniversary. Not acknowledged for a big achievement. Just... seen. In the ordinary, mundane, nothing-special moments of an ordinary Tuesday.</p>
        
        <p>That moment when they notice you're tired and make you a cup of tea. When they reach for your hand without saying a word. When they remember something you mentioned weeks ago. Those small moments? <strong>That's where love lives.</strong></p>
        
        <div class="${styles.quote}">
          "The little things? The little things are the big things." — Anonymous
        </div>
        
        <h2>The Myth of Grand Gestures</h2>
        
        <p>We've been conditioned to believe that love is proven through grand gestures. Surprise vacations. Expensive gifts. Elaborate date nights. And those things are beautiful. But they're not the foundation of a lasting relationship.</p>
        
        <p>The foundation is built in the small, quiet moments that no one else sees. The morning coffee made just the way they like it. The text message that says "Thinking of you" for no reason. The gentle touch on the back as you pass each other in the kitchen. The decision to put down your phone and really listen.</p>
        
        <p>These moments cost nothing. They take almost no time. But they are the bricks that build a fortress of connection that can withstand any storm.</p>
        
        <h2>Why Small Gestures Matter More Than You Think</h2>
        
        <p>Psychologists have studied what makes relationships thrive. The answer might surprise you. It's not about the big romantic gestures. It's about something called "bids for connection" — small moments where one partner reaches out to the other. A question. A touch. A glance. A comment about something they noticed.</p>
        
        <p>The couples who stay together aren't the ones who never have problems. They're the ones who turn toward each other's bids, again and again, day after day.</p>
        
        <p>You smiled at something on your phone? Your partner asks, "What's funny?" That's a bid. You had a hard day? They say, "Tell me about it." That's a bid. You're exhausted? They say, "I'll handle dinner tonight." That's a bid.</p>
        
        <p>Every time you turn toward your partner's bid — even with a small response — you're depositing money into your relationship bank account. And when hard times come (because they will), those deposits are what get you through.</p>
        
        <h2>Practical Small Gestures That Change Everything</h2>
        
        <p><strong>1. Greet each other like you mean it.</strong> When one of you walks through the door, pause what you're doing. Make eye contact. Smile. Say something that shows you're genuinely happy to see them. This takes ten seconds. It changes everything.</p>
        
        <p><strong>2. Leave love notes in unexpected places.</strong> A sticky note on the bathroom mirror. A text message in the middle of the day. A little "I'm proud of you" slipped into their bag. These tiny surprises keep the heart soft.</p>
        
        <p><strong>3. Touch more.</strong> Not just sexually. Hand on the shoulder as you walk by. A hug that lasts longer than two seconds. Holding hands in the car. Physical touch releases oxytocin, the bonding hormone. It reminds your bodies that you belong to each other.</p>
        
        <p><strong>4. Show interest in their world.</strong> Ask about their day. Remember the names of their coworkers. Listen to their stories — even the ones you've heard before. When you show interest in what matters to them, you're saying, "You matter to me."</p>
        
        <p><strong>5. Say thank you. Often.</strong> Thank you for taking out the trash. Thank you for listening. Thank you for being patient with me. Gratitude is the glue that keeps love from growing brittle.</p>
        
        <div class="${styles.callout}">
          <p><strong>Try this today:</strong> Do one small thing for your partner that they'll notice. Not because you want anything in return. Just because you love them. Watch what happens to the atmosphere between you.</p>
        </div>
        
        <h2>For the Busy Couple (And Aren't We All?)</h2>
        
        <p>Life is loud. Work is demanding. Kids need attention. The to-do list never ends. And somewhere in the chaos, your relationship can start to feel like one more item on the list rather than the sanctuary it was meant to be.</p>
        
        <p>Here's what I want you to hear: <strong>Your relationship doesn't need hours. It needs minutes. With intention.</strong></p>
        
        <p>Ten minutes of undistracted conversation before bed. A five-minute check-in during lunch. A Saturday morning coffee together before the chaos begins. These small pockets of presence add up. They tell your partner: "Even in the busy, I see you. You are not lost in the noise."</p>
        
        <p>You don't need a date night every week. You need to remember that the person sleeping next to you is the one you chose. And that choice is worth protecting, even when life gets loud.</p>
        
        <h2>A Prayer for Your Marriage (In Whatever Form That Takes for You)</h2>
        
        <p>May you keep choosing each other. May you keep laughing together. May you remember that you're on the same team, even when you disagree. May small gestures remind you of big love. And may you never forget that the best things in life aren't things at all — they're the moments of connection with the one who knows you best and loves you still.</p>
        
        <p>With love,<br />The VisionHub Team</p>
      `
    },
    'emotional-resilience': {
      title: 'Emotional Resilience',
      subtitle: 'Bad Days Don\'t Mean Weakness',
      image: assets.blogs3,
      date: 'May 12, 2026',
      readTime: '8 min read',
      author: 'VisionHub Team',
      content: `
        <p>You woke up this morning and the weight was already there. Before your feet touched the floor. Before the first thought formed. Just... heaviness. The kind that makes everything feel like too much.</p>
        
        <p>And then the voice started: "What's wrong with you? Other people can handle this. Why can't you?"</p>
        
        <p>Stop. Right there. That voice? It doesn't know what it's talking about.</p>
        
        <div class="${styles.quote}">
          "You have survived 100% of your hardest days. That's not weakness. That's evidence of your strength."
        </div>
        
        <h2>Let's Redefine Resilience</h2>
        
        <p>We've been taught that resilience means being unshakeable. That strong people don't cry. That if you're struggling, you're failing. That you should be able to handle everything on your own without asking for help.</p>
        
        <p>That definition is not just wrong. It's dangerous.</p>
        
        <p><strong>Real resilience isn't about never falling. It's about learning how to get back up.</strong> It's about feeling the pain and staying. It's about crying and then wiping your tears and taking the next small step. It's about saying, "I'm not okay right now" and letting someone hold you until you are.</p>
        
        <p>You are not weak because you struggle. You are human. And humans were never meant to be unbreakable. We were meant to bend, to break, to heal, and to grow stronger at the broken places.</p>
        
        <h2>The Truth About Hard Seasons</h2>
        
        <p>Here's something no one told you: <strong>hard seasons are not punishments. They are part of the human experience.</strong> Every person you admire? They have walked through fire. Every leader you respect? They have known failure. Every couple you envy? They have fought battles you know nothing about.</p>
        
        <p>The difference isn't that they never struggled. The difference is that they kept going. One small step at a time. Even when they didn't feel like it. Especially when they didn't feel like it.</p>
        
        <p>You are in good company, dear one. The most beautiful trees grow in rocky soil. The strongest foundations are built through storms. And the most resilient people? They're the ones who have learned to dance in the rain.</p>
        
        <h2>Building Your Resilience Toolkit (One Small Tool at a Time)</h2>
        
        <p>Resilience isn't something you either have or don't have. It's a muscle you can build. And like any muscle, it grows through exercise — small, consistent practices that strengthen your ability to weather storms.</p>
        
        <p><strong>Tool #1: Name it to tame it.</strong> When emotions feel overwhelming, name them. "I'm not lazy. I'm exhausted." "I'm not broken. I'm grieving." "I'm not failing. I'm learning." Naming your emotions takes away some of their power. It moves them from something overwhelming to something you can work with.</p>
        
        <p><strong>Tool #2: Find your anchors.</strong> What grounds you when everything feels unsteady? A song that comforts you. A person who reminds you who you are. A walk outside. A prayer or meditation. A journal where you dump all the chaos. Identify your anchors before the storm hits. Then use them when it does.</p>
        
        <p><strong>Tool #3: Change the question.</strong> Instead of asking, "Why is this happening to me?" try asking, "What is this trying to teach me?" or "What do I need right now?" or "Who can I reach out to?" The questions you ask shape the answers you find.</p>
        
        <p><strong>Tool #4: Let yourself rest without guilt.</strong> Rest is not laziness. Rest is how you recharge so you can keep going. Your body needs it. Your mind needs it. Your soul needs it. Give yourself permission to stop. To breathe. To do nothing without feeling guilty about it.</p>
        
        <p><strong>Tool #5: Reach out before you're desperate.</strong> We have a tendency to isolate when we're struggling. We tell ourselves we don't want to burden anyone. But here's the truth: the people who love you want to show up for you. Let them. Send the text. Make the call. Say, "I'm having a hard time. Can you sit with me for a while?" You don't have to carry this alone.</p>
        
        <div class="${styles.callout}">
          <p><strong>A gentle practice for today:</strong> Place your hand on your heart. Take three deep breaths. And say these words: "I am stronger than I know. I have survived every hard day I've ever had. And I will survive this one too."</p>
        </div>
        
        <h2>When You Feel Like Giving Up</h2>
        
        <p>There may come a moment when the weight feels unbearable. When you wonder if it's worth it. When the idea of taking one more step feels impossible.</p>
        
        <p>In that moment, I want you to remember something: <strong>You don't have to see the whole staircase. You just have to take the next step.</strong></p>
        
        <p>One breath. One minute. One hour. One day. That's all you need to focus on right now. Not next week. Not next month. Just right now. You can survive right now. You've done it before. You'll do it again.</p>
        
        <p>And in the meantime, you are not alone. There are people who care. There is help available. There is hope — even when you can't feel it. Hope is not a feeling. It's a choice. And you can choose it, even on the hard days.</p>
        
        <p>You are still here. That matters more than you know.</p>
        
        <p>With you in the hard moments,<br />The VisionHub Team</p>
      `
    },
    'anxiety-relief': {
      title: 'Anxiety & Relief',
      subtitle: 'Calming the Storm Within',
      image: assets.blogs4 || assets.shadow,
      date: 'May 10, 2026',
      readTime: '7 min read',
      author: 'VisionHub Team',
      content: `
        <p>Your heart is racing. Your thoughts are spiraling. Your chest feels tight. Your mind is screaming that something terrible is about to happen — even though you can't quite name what.</p>
        
        <p>Welcome to anxiety. An unwelcome visitor that shows up uninvited, overstays its welcome, and leaves you exhausted in its wake.</p>
        
        <p>If you're reading this in the middle of a panic attack, let me tell you something important: <strong>You are safe. Right now. In this moment. This will pass.</strong></p>
        
        <div class="${styles.quote}">
          "Anxiety is not a life sentence. It's a signal that something in your life needs attention. And signals? They can be responded to."
        </div>
        
        <h2>What Anxiety Actually Is (And What It Isn't)</h2>
        
        <p>Anxiety is your brain's alarm system. It's designed to protect you from danger. The problem? Sometimes the alarm system gets stuck. It starts going off when there's no real threat. The smoke detector beeps because the battery is low, not because there's a fire.</p>
        
        <p>When this happens, it's not your fault. It's not a character flaw. It's not a sign that you're weak or broken. It's a sign that your nervous system needs some support. That's all.</p>
        
        <p>And the good news? <strong>There are things you can do to calm that alarm system.</strong> Not perfectly. Not overnight. But little by little, you can learn to respond to anxiety differently.</p>
        
        <h2>Grounding Techniques for When You're Spiraling</h2>
        
        <p>When anxiety hits, your mind is in the future — catastrophizing about things that haven't happened yet. The fastest way to calm down is to bring yourself back to the present moment. Your body is always in the present. Your mind? Not so much. These techniques anchor your mind to your body, right here, right now.</p>
        
        <p><strong>The 5-4-3-2-1 Technique</strong></p>
        <p>Name 5 things you can see. Look around. Notice details you haven't seen before. The texture of the wall. The way the light falls. 5 things.</p>
        <p>Name 4 things you can touch. Feel the fabric of your shirt. The coolness of the table. The ground beneath your feet. 4 things.</p>
        <p>Name 3 things you can hear. The hum of the refrigerator. Birds outside. Your own breathing. 3 things.</p>
        <p>Name 2 things you can smell. Coffee? Fresh air? Your own skin? 2 things.</p>
        <p>Name 1 thing you can taste. Take a sip of water. Notice the taste. 1 thing.</p>
        
        <p>By the time you finish, your nervous system will have calmed. Your mind will be back in your body. The panic will have less power.</p>
        
        <p><strong>Box Breathing</strong></p>
        <p>Inhale for 4 counts. Hold for 4 counts. Exhale for 4 counts. Hold for 4 counts. Repeat. Box breathing activates your parasympathetic nervous system — the part of your body that tells you you're safe. Do this for 2 minutes. Notice what changes.</p>
        
        <p><strong>Temperature Change</strong></p>
        <p>Splash cold water on your face. Hold an ice cube in your hand. Step outside into cool air. Temperature change shocks your nervous system out of panic mode. It's a biological reset button.</p>
        
        <h2>Long-Term Strategies for Managing Anxiety</h2>
        
        <p>Grounding techniques help in the moment. But what about the bigger picture? How do you reduce anxiety over time?</p>
        
        <p><strong>1. Name your worry monsters.</strong> Anxiety thrives in the shadows. When worries are vague and unnamed, they feel enormous. Write them down. Give them names. "The fear of being rejected." "The worry about my health." "The anxiety about finances." Once you name them, they become smaller. More manageable. Things you can actually address.</p>
        
        <p><strong>2. Create a worry window.</strong> Set aside 10 minutes each day to worry. Yes, intentionally. When anxious thoughts come up outside that window, tell yourself, "I'll think about that during my worry time." Then, during your worry window, let yourself worry. Write down every fear. By confining worry to a specific time, you train your brain that it doesn't need to sound the alarm all day.</p>
        
        <p><strong>3. Move your body.</strong> Anxiety is energy. Stuck energy. Moving your body helps release it. You don't need an intense workout. A walk around the block. Stretching for 5 minutes. Dancing to one song in your living room. Movement shifts energy. It tells your body it's safe to let go.</p>
        
        <p><strong>4. Limit the fuel.</strong> Caffeine fuels anxiety. Lack of sleep fuels anxiety. Constant news consumption fuels anxiety. Skipping meals fuels anxiety. You don't have to be perfect. But notice what makes your anxiety worse and consider whether you can reduce those triggers.</p>
        
        <p><strong>5. Talk to someone who gets it.</strong> Anxiety can feel incredibly lonely. Like you're the only one who feels this way. You're not. Millions of people struggle with anxiety. Find someone who understands. A friend. A support group. A therapist. You don't have to navigate this alone.</p>
        
        <div class="${styles.callout}">
          <p><strong>When to seek professional help:</strong> If anxiety is interfering with your daily life — if you're avoiding things you used to enjoy, if you're struggling to work or maintain relationships, if you're having panic attacks regularly — please reach out to a mental health professional. You deserve support. And help is available.</p>
        </div>
        
        <h2>For the One Who Feels Trapped</h2>
        
        <p>I know it feels like this will never end. I know you're exhausted from fighting your own mind. I know you just want to feel normal again.</p>
        
        <p>Here's what I need you to hear: <strong>This is not forever. Your brain is not broken. You can learn to befriend your anxiety, to respond to it differently, to reduce its power over time.</strong></p>
        
        <p>It won't happen overnight. There will be setbacks. There will be days when the old patterns return. That's not failure. That's healing. Healing is not linear. It's messy and full of two steps forward, one step back.</p>
        
        <p>But you are moving forward. Even on the days when it doesn't feel like it. You're reading this. You're seeking help. You're trying. And trying? That's everything.</p>
        
        <p>You are braver than you believe. Stronger than you seem. And so much more loved than you will ever know.</p>
        
        <p>Keep breathing. Keep going. You've got this.</p>
        
        <p>With you in the storm,<br />The VisionHub Team</p>
      `
    },
    'gratitude-practice': {
      title: 'Gratitude & Mindfulness',
      subtitle: 'Finding Joy in Ordinary Moments',
      image: assets.blogs6 || assets.lonely,
      date: 'May 8, 2026',
      readTime: '6 min read',
      author: 'VisionHub Team',
      content: `
        <p>Let me ask you something honest: When's the last time you actually tasted your food? Not just ate it while scrolling on your phone. Not just rushed through it because you had ten minutes before the next thing. Actually tasted it. Noticed the flavors. Felt grateful for the hands that prepared it.</p>
        
        <p>If you can't remember, you're not alone. We're living in an age of distraction. Our minds are always somewhere else. The past. The future. Anywhere but here. And in the process, we're missing the only moment we actually have: <strong>this one. Right now.</strong></p>
        
        <div class="${styles.quote}">
          "The present moment is the only moment where life actually happens. Everything else is memory or imagination."
        </div>
        
        <h2>What Mindfulness Actually Is (Spoiler: It's Not Sitting Cross-Legged for an Hour)</h2>
        
        <p>When people hear "mindfulness," they often imagine someone sitting in perfect silence for an hour, completely free of thoughts. And then they think, "I could never do that," and give up before they start.</p>
        
        <p>Here's the truth: <strong>mindfulness is just paying attention — on purpose, in the present moment, without judgment.</strong> That's it. It doesn't require a meditation cushion. It doesn't require hours of practice. It just requires you to notice what's happening right now.</p>
        
        <p>You can practice mindfulness while washing dishes (notice the warmth of the water). While walking (feel your feet on the ground). While brushing your teeth (taste the toothpaste). Mindfulness isn't about clearing your mind. It's about coming home to your body, again and again.</p>
        
        <h2>The Gratitude Misunderstanding</h2>
        
        <p>Let me clear something up: gratitude is not pretending everything is wonderful when it's not. It's not ignoring your pain. It's not toxic positivity.</p>
        
        <p><strong>Real gratitude is the ability to notice what's good while acknowledging what's hard.</strong> Both things can be true. "I'm really struggling today. And also, I'm grateful for this warm cup of tea." The struggle doesn't cancel the gratitude. And the gratitude doesn't erase the struggle. They can coexist.</p>
        
        <p>This is so important because many people resist gratitude practices because they feel fake. And forced gratitude is fake. But genuine gratitude — the kind that notices small good things without pretending the bad things don't exist — that's different. That's grounding. That's healing.</p>
        
        <h2>Simple Ways to Practice Mindfulness and Gratitude Today</h2>
        
        <p><strong>1. One mindful minute each morning.</strong> Before you check your phone, take 60 seconds. Feel your breath. Notice your body. Ask yourself: "How am I feeling right now?" Not good or bad. Just notice. That's enough.</p>
        
        <p><strong>2. Three good things before bed.</strong> Each night, name three small things that went well. Not big wins. Small ones. "My tea was warm." "I saw a pretty sunset." "A friend texted me back." Doing this rewires your brain to notice good things more easily over time.</p>
        
        <p><strong>3. Eat one meal without distraction.</strong> Just one. Put away your phone. Turn off the TV. Taste your food. Notice the textures, the flavors, the temperature. Eating mindfully isn't just meditative — it's also better for your digestion and helps you recognize when you're full.</p>
        
        <p><strong>4. Take a gratitude walk.</strong> Go outside. As you walk, notice things you're grateful for. The warmth of the sun. The sound of birds. The fact that you have legs that can walk. Your breath. Keep going. See how many things you can notice.</p>
        
        <p><strong>5. Write a gratitude letter to someone who made a difference.</strong> Think of someone who impacted your life — a teacher, a friend, a family member. Write them a letter expressing your gratitude. You don't even have to send it. The act of writing shifts something inside you.</p>
        
        <div class="${styles.callout}">
          <p><strong>Try this right now:</strong> Take three slow breaths. Look around and find three things you're grateful for in this room. The light. The roof over your head. The device that let you read these words. Notice how this small shift changes your state.</p>
        </div>
        
        <h2>For the One Who's Struggling to Find Anything to Be Grateful For</h2>
        
        <p>I see you. The one in the midst of grief. The one whose life has fallen apart. The one who's wondering if things will ever get better. And you're reading about gratitude and thinking, "You don't understand. There's nothing good in my life right now."</p>
        
        <p>You're right. I don't fully understand your pain. And I'm not asking you to pretend it's not there. But here's what I want you to try: <strong>Start with the smallest possible thing.</strong> I'm grateful that my heart is still beating. I'm grateful that I'm still breathing. I'm grateful that I have the capacity to feel, even if what I feel is pain.</p>
        
        <p>Sometimes gratitude in hard seasons looks less like "I'm so happy" and more like "I'm still here. That matters." And that is enough. That is more than enough.</p>
        
        <p>Joy doesn't have to be loud. It can be quiet and gentle. It can coexist with your grief. And sometimes, the smallest glimmer of gratitude is the first ray of light after a long, dark night.</p>
        
        <p>Keep going. Keep noticing. Keep breathing. The light will find you again.</p>
        
        <p>With gentle hope,<br />The VisionHub Team</p>
      `
    }
  };

  const post = blogPosts[slug];

  if (!post) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <Icon.WarningCircle className={styles.notFoundIcon} />
          <h1>Page Not Found</h1>
          <p>The article you're looking for doesn't exist or has been moved.</p>
          <Link href="/blogs" className={styles.backButton}>
            ← Back to Blogs
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <Link href="/blogs" className={styles.backLink}>
            ← Back to Blogs
          </Link>
          <span className={styles.category}>{post.title}</span>
          <h1 className={styles.articleTitle}>{post.title}</h1>
          <p className={styles.articleSubtitle}>"{post.subtitle}"</p>
          <div className={styles.meta}>
            <span className={styles.author}>{post.author}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.date}>{post.date}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.readTime}>{post.readTime}</span>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src={post.image} 
            alt={post.title}
            width={800}
            height={500}
            className={styles.featuredImage}
          />
        </div>
      </div>

      <div className={styles.contentWrapper}>
        <div className={styles.contentInner}>
          <div 
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
          
          <div className={styles.shareSection}>
            <p className={styles.shareText}>Was this article helpful? Share with someone who needs to hear this:</p>
            <div className={styles.shareButtons}>
              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(post.title)} - A beautiful read from VisionHub&url=${encodeURIComponent(window.location.href)}`, '_blank')}
                className={styles.shareButton}
              >
                <Icon.TwitterLogo className={styles.shareIcon} />
                Twitter
              </button>
              <button 
                onClick={() => window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`, '_blank')}
                className={styles.shareButton}
              >
                <Icon.FacebookLogo className={styles.shareIcon} />
                Facebook
              </button>
              <button 
                onClick={() => { navigator.clipboard.writeText(window.location.href); alert('Link copied to clipboard!'); }}
                className={styles.shareButton}
              >
                <Icon.Link className={styles.shareIcon} />
                Copy Link
              </button>
            </div>
          </div>

          <div className={styles.navigationSection}>
            <Link href="/blogs" className={styles.browseButton}>
              Browse All Articles →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;