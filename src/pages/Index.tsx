import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import {

  Sparkles,
  BookOpen,
  RefreshCw,
  Clock,
} from "lucide-react";
import { Mail, Youtube, Twitter, Instagram, Lock, Shield, Star, ArrowUp } from "lucide-react";

const Index = () => {
  const [email, setEmail] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email) {
      toast.error("Please enter your email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    // Simulate form submission
    setTimeout(() => {
      toast.success("Success! Check your email for your free guide.");
      setEmail("");
      setIsSubmitting(false);
    }, 1000);
  };
  const testimonials = [
    {
      quote:
        "The prompts alone paid for the Vault 20× on the first day. I finally have content that actually converts into real affiliate sales.",
      name: "Alex Moreno",
      handle: "@alexcreates",
      result: "+$19,200 in 60 days",
      avatar: "https://i.pravatar.cc/150?img=1",
    },
    {
      quote:
        "Best AI collection I’ve ever bought. Went from scattered tools to a complete system. My workflow is now unrecognizable — in the best way.",
      name: "Sarah Kim",
      handle: "@sarahhustles",
      result: "Daily posting + 4h/day saved",
      avatar: "https://i.pravatar.cc/150?img=5",
    },
    {
      quote:
        "I was drowning in AI options. The Vault gave me exactly what actually works. Added $12k affiliate revenue this quarter alone.",
      name: "Marcus J.",
      handle: "@marcusbuilds",
      result: "+$12k affiliate revenue",
      avatar: "https://i.pravatar.cc/150?img=12",
    },
    {
      quote:
        "Weekly updates are insane value. Every Monday I get new gold. Easily the highest-ROI purchase I made this year.",
      name: "Emma Rivers",
      handle: "@emmarivers_",
      result: "3→12 posts/week",
      avatar: "https://i.pravatar.cc/150?img=8",
    },
    {
      quote:
        "Lifetime access + constant new tools? Game changer. My content quality jumped overnight and I finally enjoy creating again.",
      name: "Liam Chen",
      handle: "@liamgrows",
      result: "From burnout → loving it",
      avatar: "https://i.pravatar.cc/150?img=3",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const nextSlide = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevSlide = () => {
    setCurrentIndex(
      (prev) => (prev - 1 + testimonials.length) % testimonials.length
    );
  };

  useEffect(() => {
    timeoutRef.current = setTimeout(() => {
      nextSlide();
    }, 5000);

    return () => {
      if (timeoutRef.current) clearTimeout(timeoutRef.current);
    };
  }, [currentIndex]);

  // Pause autoplay on hover
  const handleMouseEnter = () => {
    if (timeoutRef.current) clearTimeout(timeoutRef.current);
  };
  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(nextSlide, 5000);
  };

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section – Luxe Gold + Purple Dark Mode */}
      <section className="relative overflow-hidden hero-gradient py-24 lg:py-32 px-4 sm:px-6 lg:px-8">
        {/* Floating gradient blobs – makes it feel premium & alive */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-0 -left-4 w-96 h-96 bg-secondary/40 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob"></div>
          <div className="absolute top-32 right-0 w-96 h-96 bg-primary/50 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-2000"></div>
          <div className="absolute -bottom-32 left-60 w-96 h-96 bg-secondary/30 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
        </div>

        <div className="relative max-w-7xl mx-auto z-10">
          <div className="flex flex-col items-center justify-center text-center gap-12 xl:gap-20">
            {/* Copy + Form */}
            <div className="w-full flex flex-col items-center text-center space-y-12">
              {/* Headline */}
              <div className="space-y-4">
                <h1 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
                  <span className="text-primary">Smart Hustle Blueprint </span>
                  <br />
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                   Build Digital Income With Just Your Phone
                  </span>
                </h1>

                <p className="text-xl text-foreground/80 max-w-3xl mx-auto">
                 A beginner-friendly system showing how to turn content, affiliate marketing, and smart automation into consistent online income.

                </p>
              </div>

              {/* Social Proof */}
              <div className="text-center ">
                <p className="text-lg italic text-trust">
                  “Went from 2 posts/week to daily content + $8k extra affiliate
                  revenue in 47 days.” — @hustlerpro
                </p>
              </div>

              {/* Email Form + CTA */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 w-full max-w-2xl mx-auto"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-full flex flex-col sm:flex-row items-center gap-4">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 h-6 w-6 text-muted-foreground" />
                    <Input
                      type="text"
                      placeholder="Enter your First name..."
                      className="w-full pl-6 h-16 text-lg bg-background/50 backdrop-blur border border-primary/30 focus:border-primary focus:ring-primary rounded-2xl"
                      disabled={isSubmitting}
                      required
                    />
                     <Input
                      type="email"
                      placeholder="Enter your email... "
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-14 h-16 text-lg bg-background/50 backdrop-blur border border-primary/30 focus:border-primary focus:ring-primary rounded-2xl"
                      disabled={isSubmitting}
                      required
                    />
                  </div>
                 

                  <Button
                    type="submit"
                    size="lg"
                    className="h-16 w-full sm:w-auto px-10 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg rounded-2xl shadow-2xl shadow-primary/30 hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Get Free Guide" : " Get Free Guide"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* What’s Inside the Smart Hustle AI Vault – Luxe Benefits Grid */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Optional subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="text-primary">Exactly What You’ll Get</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                Inside the Smart Hustle AI Vault
              </span>
            </h2>
            <p className="mt-6 text-xl text-foreground/70 max-w-3xl mx-auto">
              Battle-tested tools, prompts, and playbooks used by top creators
              making 6–7 figures with AI
            </p>
          </div>

          {/* Benefits Grid – 6 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8 lg:gap-12">
            {[
              {
                icon: <Sparkles className="w-12 h-12" />,
                title: "Plug-and-Play Prompts",
                desc: "Turn one idea into 30 days of viral content, emails, and ads in minutes.",
              },
              {
                icon: <BookOpen className="w-12 h-12" />,
                title: "Step-by-Step Playbooks",
                desc: "Proven systems for content, affiliate marketing, and automation — copy, paste, profit.",
              },
              {
                icon: <RefreshCw className="w-12 h-12" />,
                title: "Weekly Updates",
                desc: "New tools, prompts, and strategies added every week — you’ll never fall behind.",
              },
              {
                icon: <Clock className="w-12 h-12" />,
                title: "Save 15+ Hours/Week",
                desc: "Automate repetitive tasks and reclaim your time while output explodes.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur border border-border/50 rounded-3xl p-8 hover:bg-card/80 hover:border-primary/50 transition-all duration-500 hover:-translate-y-3 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gold glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10">
                  <div className="mb-6 inline-flex p-4 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-2xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed">
                    {item.desc}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Real Testimonials Carousel – Luxe, Auto-Playing, Fully Responsive */}
      <section
        className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden"
        style={{ backgroundColor: "hsl(var(--testimonial-bg))" }}
      >
        {/* Subtle decorative blobs */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-10 left-10 w-96 h-96 bg-primary/10 rounded-full blur-3xl opacity-50"></div>
          <div className="absolute bottom-10 right-10 w-96 h-96 bg-secondary/10 rounded-full blur-3xl opacity-50"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight">
              <span className="text-primary">Real Results</span>
              <br />
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                From Smart Hustlers Like You
              </span>
            </h2>
            <p className="mt-6 text-xl text-foreground/70">
              Join 3,200+ creators already 10×-ing their output with the Vault
            </p>
          </div>

          {/* Carousel */}
          <div className="relative group">
            <div className="overflow-hidden rounded-3xl">
              <div
                className="flex transition-transform duration-700 ease-in-out"
                style={{ transform: `translateX(-${currentIndex * 100}%)` }}
              >
                {testimonials.map((t, i) => (
                  <div key={i} className="w-full flex-shrink-0 px-4">
                    <div className="bg-card/60 backdrop-blur border border-primary/20 rounded-3xl p-10 lg:p-12 shadow-2xl">
                      <div className="flex flex-col items-center text-center space-y-8">
                        {/* Quote */}
                        <p className="text-xl lg:text-2xl italic leading-relaxed text-foreground/90">
                          "{t.quote}"
                        </p>

                        {/* Stars */}
                        <div className="flex gap-1">
                          {[...Array(5)].map((_, i) => (
                            <Star
                              key={i}
                              className="w-7 h-7 fill-primary text-primary"
                            />
                          ))}
                        </div>

                        {/* Avatar + Name + Handle */}
                        <div className="flex items-center gap-6">
                          <img
                            src={t.avatar}
                            alt={t.name}
                            className="w-20 h-20 rounded-full ring-4 ring-primary/30 object-cover"
                          />
                          <div className="text-left">
                            <p className="text-lg font-bold text-foreground">
                              {t.name}
                            </p>
                            <p className="text-foreground/60">{t.handle}</p>
                            <p className="text-sm text-primary/80 mt-1">
                              {t.result}
                            </p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Left Arrow */}
            <button
              onClick={prevSlide}
              className="absolute left-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-background/80 backdrop-blur border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
              aria-label="Previous testimonial"
            >
              <ChevronLeft className="w-8 h-8" />
            </button>

            {/* Right Arrow */}
            <button
              onClick={nextSlide}
              className="absolute right-4 top-1/2 -translate-y-1/2 w-14 h-14 rounded-full bg-background/80 backdrop-blur border border-primary/30 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300 hover:bg-primary hover:text-primary-foreground hover:scale-110"
              aria-label="Next testimonial"
            >
              <ChevronRight className="w-8 h-8" />
            </button>

            {/* Dots */}
            <div className="flex justify-center gap-3 mt-10">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrentIndex(i)}
                  className={`transition-all duration-300 ${
                    i === currentIndex
                      ? "w-12 h-3 rounded-full bg-primary"
                      : "w-3 h-3 rounded-full bg-foreground/30 hover:bg-primary/60"
                  }`}
                  aria-label={`Go to testimonial ${i + 1}`}
                />
              ))}
            </div>
          </div>
        </div>
      </section>

    {/* Final CTA Section – High-Conversion Closer with Price, Urgency & Guarantee */}
<section className="relative hero-gradient py-28 lg:py-36 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Animated floating blobs for depth */}
  <div className="absolute inset-0 pointer-events-none">
    <div className="absolute top-10 -left-20 w-96 h-96 bg-secondary/30 rounded-full blur-3xl opacity-50 animate-blob"></div>
    <div className="absolute bottom-10 -right-20 w-96 h-96 bg-primary/30 rounded-full blur-3xl opacity-50 animate-blob animation-delay-2000"></div>
    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
  </div>

  <div className="relative max-w-5xl mx-auto text-center">
    {/* Headline */}
    <h2 className="text-5xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight">
      <span className="text-primary">Unlock Lifetime Access</span>
      <br />
      <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        For a One-Time $47
      </span>
    </h2>

    <p className="mt-6 text-xl lg:text-2xl text-foreground/80 max-w-3xl mx-auto">
      Instant delivery · All future updates free · 30-day money-back guarantee
    </p>

    {/* Urgency + Guarantee Badges */}
    <div className="mt-12 flex flex-wrap justify-center gap-6 text-lg">
      <div className="flex items-center gap-3 bg-primary/10 px-6 py-px py-3 rounded-full border border-primary/30">
        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="font-semibold text-primary">Founding Member Price – Ends Soon</span>
      </div>
      <div className="flex items-center gap-3 bg-primary/10 px-6 py-3 rounded-full border border-primary/30">
        <svg className="w-6 h-6 text-primary" fill="currentColor" viewBox="0 0 20 20">
          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
        </svg>
        <span className="font-semibold text-primary">3,200+ Members Already Inside</span>
      </div>
    </div>

    {/* Email Form + CTA */}
    <form onSubmit={handleSubmit} className="mt-16 max-w-2xl mx-auto">
      <div className="flex flex-col sm:flex-row gap-4 shadow-2xl shadow-primary/20 rounded-3xl bg-background/30 backdrop-blur-lg p-2 border border-primary/30">
        <div className="relative flex-1">
          <Mail className="absolute left-5 top-1/2 -translate-y-1/2 h-7 w-7 text-muted-foreground/70" />
          <Input
            type="email"
            placeholder="Enter your email to claim your access..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="h-20 pl-16 text-lg bg-transparent border-0 focus:ring-0 placeholder-foreground/50"
            required
            disabled={isSubmitting}
          />
        </div>

        <Button
          type="submit"
          className="h-20 px-12 bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-xl rounded-2xl shadow-2xl hover:shadow-primary/50 transform hover:scale-105 transition-all duration-300 relative overflow-hidden group"
          disabled={isSubmitting}
        >
          <span className="relative z-10">
            {isSubmitting ? "Processing..." : "Get Lifetime Access – $47"}
          </span>
          <div className="absolute inset-0 bg-gradient-to-r from-secondary to-primary opacity-0 group-hover:opacity-50 transition-opacity duration-500"></div>
        </Button>
      </div>

      <div className="mt-8 flex items-center justify-center gap-8 text-foreground/60">
        <p className="flex items-center gap-2">
          <Lock className="w-5 h-5 text-primary" />
          30-Day Money-Back Guarantee
        </p>
        <p className="flex items-center gap-2">
          <Shield className="w-5 h-5 text-primary" />
          Secure One-Time Payment
        </p>
      </div>

      <p className="mt-4 text-sm text-foreground/60">
        🔒 We respect your privacy · Instant access after payment · No subscription ever
      </p>
    </form>

    {/* Optional mini proof */}
    <p className="mt-12 text-lg italic text-trust">
      “Best $47 I ever spent on my business.” — Recent member
    </p>
  </div>
</section>

     {/* Luxe Footer – Matches Dark Gold + Purple Dark Theme */}
<footer className="relative bg-gradient-to-t from-background to-background/95 pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
  {/* Top gold accent line + subtle glow */}
  <div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent"></div>
  <div className="absolute top-0 left-1/2 -translate-x-1/2 w-96 h-32 bg-primary/10 rounded-full blur-3xl"></div>

  <div className="relative max-w-7xl mx-auto">
    {/* Brand + Tagline */}
    <div className="text-center mb-12">
      <h3 className="text-4xl font-extrabold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
        Smart Hustle AI Vault
      </h3>
      <p className="mt-3 text-foreground/60">
        Your private collection of AI tools, prompts & playbooks that top creators actually use.
      </p>
    </div>

    

    {/* Social Icons */}
    <div className="flex justify-center gap-8 mb-12">
      {[
        { Icon: Twitter, href: "https://x.com/yourhandle", label: "X / Twitter" },
        { Icon: Youtube, href: "https://youtube.com/@yourchannel", label: "YouTube" },
        { Icon: Instagram, href: "https://instagram.com/yourhandle", label: "Instagram" },
        { Icon: Mail, href: "mailto:support@smarthustlevaault.com", label: "Email" },
      ].map(({ Icon, href, label }) => (
        <a
          key={label}
          href={href}
          target="_blank"
          rel="noopener noreferrer"
          aria-label={label}
          className="group relative p-4 rounded-2xl bg-primary/10 backdrop-blur border border-primary/20 hover:bg-primary/20 hover:border-primary/50 transition-all duration-300 hover:scale-110 hover:-translate-y-1"
        >
          <Icon className="w-6 h-6 text-primary group-hover:text-secondary transition-colors duration-300" />
          <div className="absolute inset-0 rounded-2xl bg-primary/5 scale-0 group-hover:scale-100 transition-transform duration-500"></div>
        </a>
      ))}
    </div>

    {/* Copyright + Final Trust Line */}
    <div className="text-center text-foreground/50 text-sm">
      <p className="mb-2">
        © {new Date().getFullYear()} Smart Hustle AI Vault. All rights reserved.
      </p>
      <p className="text-xs">
        Made for hustlers who want to work smarter, not harder.
      </p>
    </div>

    
  </div>
</footer>
    </main>
  );
};

export default Index;
