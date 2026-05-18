'use client'
import React from "react";
import { assets } from "@/assets/assets";
import Image from "next/image";
import Link from "next/link";
import styles from "./blog.module.css";
import * as Icon from "@phosphor-icons/react/dist/ssr";

const Blogs = () => {
  const blogs = [
    {
      slug: "self-love-motivation",
      title: "Self-Love & Motivation",
      subtitle: "You Can't Pour From an Empty Cup",
      image: assets.blogs,
      excerpt: "Self-love is the foundation of a healthy relationship with oneself. It's about recognizing your worth, embracing your flaws, and treating yourself with kindness and respect. When you nurture yourself first, everything else falls into place.",
      content: `
        <p>Have you ever noticed how easy it is to give advice to a friend, yet so hard to apply that same kindness to yourself? You'd never tell a loved one they're not good enough, but somehow, that voice inside your head says it to you daily.</p>
        
        <p>Self-love isn't about bubble baths and face masks (though those are nice). It's about showing up for yourself when it's hard. It's about keeping promises you make to yourself. It's about setting boundaries even when it feels uncomfortable.</p>
        
        <h2>What Self-Love Really Looks Like</h2>
        <p>Self-love is choosing rest over burnout. It's saying no when your soul needs space. It's forgiving yourself for past mistakes. It's celebrating small wins. It's speaking to yourself like someone you love.</p>
        
        <h2>Practical Steps to Cultivate Self-Love</h2>
        <p><strong>Start with awareness:</strong> Notice your inner dialogue. Would you speak to a friend that way? If not, it's time to change the script.</p>
        <p><strong>Set gentle boundaries:</strong> Protect your energy. You don't have to be available to everyone all the time.</p>
        <p><strong>Celebrate progress, not perfection:</strong> You don't have to have it all figured out. Small steps count.</p>
        
        <div class="${styles.callout}">
          <p><strong>Remember:</strong> You cannot pour from an empty cup. Taking care of yourself isn't selfish — it's necessary. When you fill your own cup first, you have more to give to others.</p>
        </div>
      `
    },
    {
      slug: "relationship-healing",
      title: "Relationship Healing",
      subtitle: "Fights Don't Mean Failure",
      image: assets.blogs5,
      excerpt: "Arguments happen. Hurt feelings flare. But conflict isn't the end—it's a chance to understand deeper. Pause. Breathe. Ask: 'What do we both need right now?' Healing starts when listening begins.",
      content: `
        <p>Every relationship has storms. The healthiest couples aren't the ones who never fight — they're the ones who know how to repair after conflict. Disagreements don't mean you're failing; they mean you're human.</p>
        
        <h2>The Art of Repair</h2>
        <p>After an argument, the most important question isn't "Who was right?" It's "How do we reconnect?" Apologies matter, but changed behavior matters more.</p>
        
        <h2>Tools for Healing</h2>
        <p><strong>Take a pause:</strong> When emotions run high, step away. Agree to revisit the conversation when both are calm.</p>
        <p><strong>Listen to understand, not to respond:</strong> Really hear what your partner is saying before planning your rebuttal.</p>
        <p><strong>Use 'I' statements:</strong> Instead of "You always..." try "I feel hurt when..."</p>
        
        <div class="${styles.callout}">
          <p>Conflict is inevitable, but disconnection is optional. Every disagreement is an opportunity to understand each other more deeply.</p>
        </div>
      `
    },
    {
      slug: "marriage-commitment",
      title: "Marriage & Commitment",
      subtitle: "Small Gestures, Big Love",
      image: assets.blogs2,
      excerpt: "Love grows in little moments. A morning coffee made just right. A hand held during tough days. These small acts keep connection alive. Busy lives? Prioritize 10 minutes of real talk daily.",
      content: `
        <p>We're often sold the idea that love is about grand gestures — surprise vacations, expensive gifts, dramatic declarations. But real love? It lives in the small, quiet moments no one else sees.</p>
        
        <h2>The Power of Small Gestures</h2>
        <p>A text that says "Thinking of you." Making their coffee just how they like it. Noticing when they're tired and taking something off their plate. These tiny acts, repeated daily, build a fortress of connection.</p>
        
        <h2>Staying Connected in Busy Seasons</h2>
        <p>Life gets loud. Work, kids, responsibilities. But connection doesn't require hours. It requires intention. Ten minutes of undistracted conversation before bed. A Saturday morning walk together. Passing each other with a gentle touch.</p>
        
        <div class="${styles.callout}">
          <p>Commitment isn't about never feeling lost — it's about choosing each other even on the hard days. Small gestures remind your partner: "I see you. I choose you. You matter."</p>
        </div>
      `
    },
    {
      slug: "emotional-resilience",
      title: "Emotional Resilience",
      subtitle: "Bad Days Don't Mean Weakness",
      image: assets.blogs3,
      excerpt: "Feeling overwhelmed? Good. You're human. Strength isn't ignoring pain—it's facing it. Tomorrow's a new page. For now? Just breathe. You've survived 100% of your worst days.",
      content: `
        <p>Some days, getting out of bed feels like climbing a mountain. Everything feels heavier than it should. Here's what you need to know: that doesn't make you weak. It makes you human.</p>
        
        <h2>What Resilience Actually Means</h2>
        <p>Resilience isn't about being unshakeable. It's about feeling the weight and still standing. It's about falling apart and putting yourself back together. It's about asking for help when you need it.</p>
        
        <h2>Building Your Resilience Toolkit</h2>
        <p><strong>Name your feelings:</strong> "I'm not lazy, I'm exhausted." "I'm not broken, I'm healing." Naming takes away shame.</p>
        <p><strong>Find your people:</strong> You don't have to carry this alone. Let others in.</p>
        <p><strong>Celebrate small wins:</strong> You got out of bed? Win. You ate something? Win. You reached out? Big win.</p>
        
        <div class="${styles.callout}">
          <p>Your bad days don't define you. They're just visitors, not permanent residents. You've survived every difficult day you've ever had. That's not weakness — that's evidence of your strength.</p>
        </div>
      `
    },
    {
      slug: "anxiety-relief",
      title: "Anxiety & Relief",
      subtitle: "Calming the Storm Within",
      image: assets.blogs4 || assets.shadow,
      excerpt: "Anxiety whispers lies about the future. It tells you something terrible is about to happen. But here's the truth: right now, in this moment, you're okay. Ground yourself in the present.",
      content: `
        <p>Anxiety is exhausting. It's your brain trying to protect you from threats that may never come. Your heart races, your mind spirals, and you feel stuck. But you're not powerless against it.</p>
        
        <h2>Simple Grounding Techniques</h2>
        <p>When anxiety spikes, anchor yourself to the present. Name five things you can see. Four things you can touch. Three things you can hear. Two things you can smell. One thing you can taste.</p>
        
        <h2>Breathing Through the Panic</h2>
        <p>Inhale for four counts. Hold for four. Exhale for six. The longer exhale activates your parasympathetic nervous system, telling your body it's safe.</p>
        
        <div class="${styles.callout}">
          <p>Anxiety is a liar. It tells you you're not safe. It tells you something bad will happen. But you've survived every anxious moment you've ever had. That's proof of your strength.</p>
        </div>
      `
    },
    {
      slug: "gratitude-practice",
      title: "Gratitude & Mindfulness",
      subtitle: "Finding Joy in Ordinary Moments",
      image: assets.blogs6 || assets.lonely,
      excerpt: "Gratitude isn't about pretending everything is perfect. It's about noticing the good that exists alongside the hard. Both can be true at the same time.",
      content: `
        <p>You don't have to feel grateful every moment. You don't have to pretend your struggles don't exist. Gratitude isn't toxic positivity — it's about holding space for both the hard and the beautiful.</p>
        
        <h2>Simple Gratitude Practices</h2>
        <p>Each night, name three small things that went well. Not big wins — small ones. "My tea was warm." "I saw a pretty sunset." "A friend texted back."</p>
        
        <h2>Mindfulness in Daily Life</h2>
        <p>Mindfulness isn't meditating for an hour. It's tasting your food. Feeling the water on your hands as you wash dishes. Noticing the sound of rain. Being present, right here, right now.</p>
        
        <div class="${styles.callout}">
          <p>Joy doesn't have to be loud. It can be quiet and gentle. It can coexist with your struggles. Give yourself permission to notice it.</p>
        </div>
      `
    }
  ];

  return (
    <>
      <div className={styles.header}>
        <h1 className={styles.title}>Our Blogs</h1>
        <p className={styles.subtitle}>
          Explore our latest insights and tips on emotional well-being,
          <br /> relationships, and personal growth.
        </p>
      </div>

      <div className={styles.gridContainer}>
        <div className={styles.grid}>
          {blogs.map((blog) => (
            <div key={blog.slug} className={styles.blogCard}>
              <div className={styles.imageWrapper}>
                <Image
                  src={blog.image}
                  alt={blog.title}
                  width={400}
                  height={250}
                  className={styles.blogImage}
                />
              </div>
              <div className={styles.cardContent}>
                <h3 className={styles.blogTitle}>{blog.title}</h3>
                <p className={styles.blogSubtitle}>
                  <i>"{blog.subtitle}"</i>
                </p>
                <p className={styles.blogExcerpt}>{blog.excerpt}</p>
                <Link 
  href={`/blogs/${blog.slug}`} 
  className={styles.readMore}
  onClick={() => console.log('Navigating to:', `/blogs/${blog.slug}`)}
>
  Read Article →
</Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </>
  );
};

export default Blogs;