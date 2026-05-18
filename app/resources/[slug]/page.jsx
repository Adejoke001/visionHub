"use client";
import React from "react";
import { useParams, useRouter } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { assets } from "@/assets/assets";
import styles from "./article.module.css";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const ArticlePage = () => {
  const params = useParams();
  const router = useRouter();
  const slug = params.slug;

  // Article database
  const articles = {
    "7-gentle-habits": {
      title: "7 Gentle Habits to Lift Your Mood",
      category: "Understanding Depression",
      readTime: "6 min read",
      date: "May 18, 2026",
      author: "VisionH Counseling Team",
      image: assets.shadow,
      content: `
        <p>Some days, getting out of bed feels like climbing a mountain. The weight on your chest makes every small task feel impossible. If this sounds familiar, please know — you are not alone, and you are not broken.</p>
        
        <p>Depression doesn't announce itself with a warning sign. It creeps in quietly, stealing joy from things you once loved, making you feel disconnected from yourself and others. But here's what I want you to know: small, gentle steps can make a difference. Not because they "fix" everything, but because they remind you that you still have the strength to try.</p>
        
        <h2>1. Start with One Tiny Thing</h2>
        <p>Not a whole morning routine. Not a workout. Just one thing. Maybe it's sitting up in bed. Maybe it's drinking a glass of water. Maybe it's opening the curtains to let in light. That's it. That's enough. Tomorrow, try one more tiny thing.</p>
        <p><strong>Why this works:</strong> Depression makes everything feel overwhelming. Breaking tasks into micro-actions reduces the mental resistance, making it easier to start. Momentum builds from there.</p>
        
        <h2>2. Name What You're Feeling — Without Judgment</h2>
        <p>Instead of saying "I'm so lazy" or "Why can't I just be normal?", try: "I'm feeling really heavy today." Or "My mind feels foggy." Naming your emotions without criticizing yourself creates space between who you are and what you're feeling.</p>
        <p><strong>Try this:</strong> Write down one emotion you feel right now, without explaining it. Just name it. Then put the paper away.</p>
        
        <h2>3. Move Your Body (Gently)</h2>
        <p>I'm not asking you to run a marathon. Stretch your arms over your head. Shake out your hands. Walk to your front door and back. Put on one song and sway. Movement reminds your body that it's alive, that energy still flows through you — even if it doesn't feel that way.</p>
        
        <h2>4. Reach Out — Even If You Have Nothing to Say</h2>
        <p>Depression lies to us. It says "They don't want to hear from you" or "You're a burden." Those are not facts; they are symptoms. Send a text that says "Thinking of you." Or "No need to respond, just wanted to say hi." Connection, even small, fights isolation.</p>
        
        <h2>5. Eat Something — Anything</h2>
        <p>Nutrition doesn't have to be perfect. If all you can manage is toast or a banana or a handful of crackers, that's a win. Your brain needs fuel to heal. Give yourself permission to eat "easy" foods without guilt.</p>
        
        <h2>6. Create a 5-Minute "Safe Space"</h2>
        <p>Pick one corner of your room, one chair, one spot on your sofa. Make it yours. A soft blanket, a candle, a favorite photo. When everything feels chaotic, go there. Breathe for five minutes. No phone, no pressure. Just existence.</p>
        
        <h2>7. Remind Yourself: This Will Shift</h2>
        <p>Depression convinces you that the way you feel right now is permanent. It's not. Feelings are visitors — even the painful ones. They arrive, they stay for a while, and eventually, they leave. You've survived every difficult day you've ever had. That's not weakness; that's evidence of your strength.</p>
        
        <div class="${styles.callout}">
          <p><strong>A gentle reminder from someone who cares:</strong> These habits are not substitutes for professional help. If you're having thoughts of harming yourself, please reach out to a crisis line or mental health professional immediately. You deserve support.</p>
        </div>
        
        <p>Healing isn't linear. Some days you'll feel progress; other days you'll feel stuck. Both are part of the journey. Be as kind to yourself as you would be to a friend going through the same thing.</p>
        
        <p>You're still here. That matters more than you know.</p>
      `
    },
    "building-mental-wellness": {
      title: "Building a Foundation for Good Mental Health",
      category: "Mental Wellness",
      readTime: "8 min read",
      date: "May 15, 2026",
      author: "VisionH Counseling Team",
      image: assets.lonely,
      content: `
        <p>Mental health isn't just about the absence of illness — it's about feeling alive, connected, and capable. But let's be real: maintaining it takes intention. Life gets busy, stress piles up, and before we know it, we've forgotten to check in with ourselves.</p>
        
        <p>The good news? You don't need a complete life overhaul. Small, consistent practices create the foundation for lasting emotional wellness. Here's what actually helps.</p>
        
        <h2>The Pillars of Mental Wellness</h2>
        
        <h3>Sleep: Your Non-Negotiable Reset Button</h3>
        <p>When sleep suffers, everything suffers — mood, focus, patience, even physical health. Aim for consistency: same bedtime, same wake time, even on weekends. Your brain cleans itself during deep sleep. Don't rob yourself of that restoration.</p>
        
        <h3>Connection Over Perfection</h3>
        <p>You don't need a huge social circle. You need a few people who see you, hear you, and accept you as you are. Nurture those relationships. Send the message. Make the call. Show up imperfectly.</p>
        
        <h3>Boundaries Protect Your Peace</h3>
        <p>"No" is a complete sentence. You can love someone and still say no to their request. You can care deeply and still protect your energy. Boundaries aren't walls; they're gates — you decide who and what enters your space.</p>
        
        <div class="${styles.quote}">
          "Self-care is not selfish. You cannot pour from an empty cup."
        </div>
        
        <h2>Daily Practices That Actually Stick</h2>
        
        <p><strong>Morning Check-In:</strong> Before checking your phone, take 60 seconds to notice: How does my body feel? What emotion is present? What do I need today?</p>
        
        <p><strong>Movement Breaks:</strong> Not for weight loss, but for energy. A 10-minute walk, some stretches, dancing while cooking — movement shifts your state.</p>
        
        <p><strong>Digital Boundaries:</strong> Social media is designed to keep you scrolling. Set timers. Take breaks. Unfollow accounts that make you feel less than.</p>
        
        <p><strong>Gratitude (But Make It Real):</strong> You don't have to pretend everything is wonderful. Try: "I'm struggling today, and also, I'm grateful for my warm tea." Both things can be true.</p>
        
        <div class="${styles.callout}">
          <p><strong>Remember:</strong> Building mental wellness is like tending a garden. Some days you'll water it. Some days weeds will grow. Some seasons will be abundant, others bare. Keep showing up. Growth happens beneath the surface.</p>
        </div>
      `
    },
    "quieting-unwanted-voices": {
      title: "Quieting the Unwanted Voices Within",
      category: "Stress & Intrusive Thoughts",
      readTime: "7 min read",
      date: "May 12, 2026",
      author: "VisionH Counseling Team",
      image: assets.voices,
      content: `
        <p>That voice in your head that says you're not good enough. The one that replays embarrassing moments from years ago. The sudden, disturbing thought that pops up out of nowhere and leaves you feeling ashamed.</p>
        
        <p>First: you're not crazy. You're not bad. And you're definitely not alone.</p>
        
        <p>Intrusive thoughts are unwanted, involuntary thoughts, images, or ideas that can be distressing. Almost everyone experiences them. The difference is how we respond.</p>
        
        <h2>What Intrusive Thoughts Actually Are</h2>
        <p>Think of your brain as a storyteller that sometimes gets stuck on repeat. It throws out random, scary, or embarrassing content — not because it's true, but because it's trying to protect you from perceived threats. The problem? Your brain can't always distinguish between real threats and imagined ones.</p>
        
        <h2>Why Fighting Them Makes Them Louder</h2>
        <p>Here's the paradox: trying to suppress a thought makes it stronger. Tell yourself "Don't think about a pink elephant," and what happens? Exactly. The same applies to intrusive thoughts. The more you fight, the more they persist.</p>
        
        <h2>Gentle Strategies That Actually Work</h2>
        
        <h3>1. Label It — Don't Fight It</h3>
        <p>When an unwanted thought appears, simply say to yourself: "That's an intrusive thought." Not "I'm terrible for thinking this." Not "Why can't I stop?" Just acknowledge it as a mental event, not a fact.</p>
        
        <h3>2. Imagine It on a Cloud</h3>
        <p>Visualize placing the thought on a cloud and watching it float away. Or write it on a leaf and see it drift down a stream. The goal isn't elimination — it's distance.</p>
        
        <h3>3. Name the Story, Then Shift Focus</h3>
        <p>"Ah, there's the 'I'm not good enough' story again. Thanks for trying to protect me, brain. I'm going to focus on making breakfast now."</p>
        <p>This approach acknowledges the thought without engaging with it.</p>
        
        <h3>4. Ground Yourself in the Present</h3>
        <p>Name 5 things you can see. 4 things you can touch. 3 things you can hear. 2 things you can smell. 1 thing you can taste. Anxiety and intrusive thoughts live in the future or past. Your body exists right now.</p>
        
        <h3>5. Give the Voice a Silly Character</h3>
        <p>Imagine the critical voice sounding like a cartoon villain or a whiny toddler. It's hard to take seriously when it sounds ridiculous.</p>
        
        <div class="${styles.callout}">
          <p><strong>When to Seek Help:</strong> If intrusive thoughts are causing significant distress, taking up more than an hour of your day, or leading you to avoid important situations, please reach out to a mental health professional. You don't have to navigate this alone.</p>
        </div>
        
        <p>You are not your thoughts. Thoughts come and go like weather. Some days are stormy; other days are clear. But beneath the weather, you remain — whole, worthy, and capable of finding calm again.</p>
      `
    }
  };

  const article = articles[slug];

  // Handle case where article doesn't exist
  if (!article) {
    return (
      <div className={styles.notFound}>
        <div className={styles.notFoundContent}>
          <Icon.WarningCircle className={styles.notFoundIcon} />
          <h1>Article Not Found</h1>
          <p>Sorry, the article you're looking for doesn't exist.</p>
          <Link href="/resources" className={styles.backButton}>
            ← Back to Resources
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className={styles.container}>
      {/* Hero Section */}
      <div className={styles.hero}>
        <div className={styles.heroContent}>
          <Link href="/resources" className={styles.backLink}>
            ← Back to Resources
          </Link>
          <span className={styles.category}>{article.category}</span>
          <h1 className={styles.articleTitle}>{article.title}</h1>
          <div className={styles.meta}>
            <span className={styles.author}>{article.author}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.date}>{article.date}</span>
            <span className={styles.separator}>•</span>
            <span className={styles.readTime}>{article.readTime}</span>
          </div>
        </div>
        <div className={styles.heroImage}>
          <Image 
            src={article.image} 
            alt={article.title}
            width={800}
            height={500}
            className={styles.featuredImage}
          />
        </div>
      </div>

      {/* Article Content */}
      <div className={styles.contentWrapper}>
        <div className={styles.contentInner}>
          <div 
            className={styles.articleContent}
            dangerouslySetInnerHTML={{ __html: article.content }}
          />
          
          {/* Share Section */}
          <div className={styles.shareSection}>
            <p className={styles.shareText}>Was this helpful? Share with someone who might need it:</p>
            <div className={styles.shareButtons}>
              <button 
                onClick={() => window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(article.title)}&url=${encodeURIComponent(window.location.href)}`, '_blank')}
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
                onClick={() => navigator.clipboard.writeText(window.location.href) && alert('Link copied!')}
                className={styles.shareButton}
              >
                <Icon.Link className={styles.shareIcon} />
                Copy Link
              </button>
            </div>
          </div>

          {/* Related Articles / Navigation */}
          <div className={styles.navigationSection}>
            <Link href="/resources" className={styles.browseButton}>
              Browse All Resources →
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArticlePage;