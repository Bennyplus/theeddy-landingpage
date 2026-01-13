import { ChevronLeft, ChevronRight } from "lucide-react";
import { useState, useEffect, useRef } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

import { toast } from "sonner";
import {
  Compass,
  Layers,
  TrendingDown,
  Battery,
  AlertCircle,
  Smartphone,
  Brain,
  Target,
  Globe,
  Wallet,
  Zap,
} from "lucide-react";
import { Mail, Youtube, Twitter, Instagram, Star } from "lucide-react";
import Background from "@/components/Background";
import { subscribeToConvertKit } from "@/lib/convertkit";

const Index = () => {
  const [email, setEmail] = useState("");
  const [firstName, setFirstName] = useState("");
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!email || !firstName) {
      toast.error("Please enter both your name and email address");
      return;
    }

    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      toast.error("Please enter a valid email address");
      return;
    }

    setIsSubmitting(true);

    try {
      // Import the function dynamically or assume it's imported at the top
      // We'll rely on the import we're about to add, but for this block:
      await subscribeToConvertKit(email, firstName);

      toast.success("Success! Check your email for your free guide.");
      setEmail("");
      setFirstName("");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };
  const testimonials = [
    {
      quote:
        "I spent 6 months posting with zero sales. The Blueprint showed me exactly how to structure my content. Landed my first $1k commission in week 3.",
      name: "Oluwaseun Adeyemi",
      handle: "@seunadeyemi",
      result: "First $1k month",
      avatar:
        "https://images.unsplash.com/photo-1627461008400-a3e5e3b4cc7f?w=600&auto=format&fit=crop&q=60&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MTIyfHxuaWdlcmlhbnxlbnwwfHwwfHx8MA%3D%3D",
    },
    {
      quote:
        "Finally a system that simplifies digital marketing. I’m not guessing anymore. I just follow the daily plan and the leads actually come in.",
      name: "Chinedu Okafor",
      handle: "@chineduokafor",
      result: "Consistent daily leads",
      avatar:
        "https://images.unsplash.com/photo-1598803784715-34ae74c751a3?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "I thought affiliate marketing was oversaturated until I saw this strategy. It’s not about luck, it’s about a specific structure. Total game changer.",
      name: "Amina Bello",
      handle: "@aminabello",
      result: "Scaled to $3k/mo",
      avatar:
        "https://images.unsplash.com/photo-1757899524912-9618cd9936f2?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "Went from posting random videos to building an actual funnel. The difference is night and day. My audience is finally clicking my link.",
      name: "Ben Iwara",
      handle: "@beniwara",
      result: "20% conv. rate increase",
      avatar:
        "https://plus.unsplash.com/premium_photo-1690359589674-b85931ae8d28?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      quote:
        "The module on 'Digital Income' clicked for me. I stopped trying to be an influencer and started acting like a marketer. Results followed immediately.",
      name: "Joy Uzoanya",
      handle: "@joyuzoanya",
      result: "Monetized in 14 days",
      avatar:
        "https://images.unsplash.com/photo-1602342323893-b11f757957c9?q=80&w=687&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
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
    <main className="min-h-screen bg-transparent relative">
      <Background />
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
                  A beginner-friendly system showing how to turn content,
                  affiliate marketing, and smart automation into consistent
                  online income.
                </p>
              </div>

              <div>
                <p className="text-lg italic text-foreground/80 max-w-3xl mx-auto">
                  Designed for students, 9–5 workers & hustlers
                </p>
              </div>

              {/* Email Form + CTA */}
              <form
                onSubmit={handleSubmit}
                className="space-y-6 w-full max-w-2xl mx-auto"
              >
                <div className="flex flex-col items-center gap-4">
                  <div className="relative w-full flex flex-col sm:flex-row items-center gap-4">
                    <Input
                      type="text"
                      placeholder="Enter your First name..."
                      value={firstName}
                      onChange={(e) => setFirstName(e.target.value)}
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
                    {isSubmitting
                      ? "Get the Free Blueprint"
                      : " Get the Free Blueprint"}
                  </Button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Problem Awareness Section */}
      <section className="relative py-24 px-4 sm:px-6 lg:px-8 overflow-hidden bg-background/50">
        <div className="relative max-w-7xl mx-auto">
          <div className="text-center mb-20 space-y-4">
            <h2 className="text-4xl sm:text-5xl font-extrabold tracking-tight">
              You’re Hustling… <br />
              <span className="text-muted-foreground">
                But The Money Isn’t Flowing
              </span>
            </h2>
          </div>

          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8 max-w-5xl mx-auto mb-16">
            {[
              {
                text: "Posting content with no direction",
                icon: <Compass className="w-8 h-8 text-primary" />,
              },
              {
                text: "Learning many skills but mastering none",
                icon: <Layers className="w-8 h-8 text-primary" />,
              },
              {
                text: "No clear income system",
                icon: <TrendingDown className="w-8 h-8 text-primary" />,
              },
              {
                text: "Motivation comes and goes",
                icon: <Battery className="w-8 h-8 text-primary" />,
              },
              {
                text: "Too much information, no structure",
                icon: <AlertCircle className="w-8 h-8 text-primary" />,
              },
            ].map((item, i) => (
              <div
                key={i}
                className={`p-8 rounded-3xl bg-card/30 border border-white/5 hover:border-primary/30 transition-all duration-300 flex flex-col items-center text-center gap-6 group hover:-translate-y-1 ${
                  i === 4 ? "sm:col-span-2 lg:col-span-1" : ""
                }`}
              >
                <div className="p-4 rounded-full bg-primary/10 group-hover:bg-primary/20 transition-colors text-primary">
                  {item.icon}
                </div>
                <p className="font-medium text-lg text-foreground/80 group-hover:text-foreground transition-colors">
                  {item.text}
                </p>
              </div>
            ))}
          </div>

          <div className="text-center">
            <div className="inline-block p-1 rounded-2xl bg-gradient-to-r from-primary/20 to-secondary/20 backdrop-blur">
              <div className="px-8 py-6 rounded-xl border border-primary/20 bg-background/60">
                <p className="text-xl sm:text-2xl font-semibold bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary max-w-3xl mx-auto leading-relaxed">
                  Hard work without a system leads to burnout — not income.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* What’s Inside the Smart Hustle AI Vault – Value Stack */}
      <section className="relative py-24 lg:py-32 px-4 sm:px-6 lg:px-8 overflow-hidden">
        {/* Optional subtle background decoration */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-20 left-0 w-96 h-96 bg-secondary/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute bottom-20 right-0 w-96 h-96 bg-primary/20 rounded-full blur-3xl opacity-30"></div>
        </div>

        <div className="relative max-w-7xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-20">
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight mb-6">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-primary to-secondary">
                What’s Inside The Smart Hustle Blueprint
              </span>
            </h2>
            <p className="text-xl text-foreground/70 font-medium">
              Straightforward. Practical. Actionable.
            </p>
          </div>

          {/* Value Stack Grid – 6 cards */}
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
            {[
              {
                icon: <Globe className="w-10 h-10" />,
                title: "How digital income really works",
                desc: "Simplified breakdown of the online money game.",
              },
              {
                icon: <Target className="w-10 h-10" />,
                title: "Content strategy that attracts buyers",
                desc: "Stop chasing views. Start getting paid.",
              },
              {
                icon: <Zap className="w-10 h-10" />,
                title: "Affiliate marketing for beginners",
                desc: "The easiest way to start earning without a product.",
              },
              {
                icon: <Wallet className="w-10 h-10" />,
                title: "How to start with zero capital",
                desc: "You don't need money to make money anymore.",
              },
              {
                icon: <Smartphone className="w-10 h-10" />,
                title: "Turn your phone into an income tool",
                desc: "Your screen time could be your pay time.",
              },
              {
                icon: <Brain className="w-10 h-10" />,
                title: "The mindset shift most hustlers miss",
                desc: "Unlock the psychological edge for success.",
              },
            ].map((item, index) => (
              <div
                key={index}
                className="group relative bg-card/50 backdrop-blur border border-border/50 rounded-3xl p-8 hover:bg-card/80 hover:border-primary/50 transition-all duration-500 hover:-translate-y-2 animate-fade-up"
                style={{ animationDelay: `${index * 100}ms` }}
              >
                {/* Gold glow on hover */}
                <div className="absolute inset-0 rounded-3xl bg-primary/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>

                <div className="relative z-10 flex flex-col items-start text-left">
                  <div className="mb-6 inline-flex p-3 bg-primary/10 rounded-2xl text-primary group-hover:scale-110 transition-transform duration-300">
                    {item.icon}
                  </div>
                  <h3 className="text-xl font-bold text-foreground mb-3 group-hover:text-primary transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-foreground/70 leading-relaxed text-sm">
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

      {/* Luxe Footer – Matches Dark Gold + Purple Dark Theme */}
      <footer className="relative  bg-background/50 pt-20 pb-12 px-4 sm:px-6 lg:px-8 overflow-hidden">
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
              Your private collection of AI tools, prompts & playbooks that top
              creators actually use.
            </p>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center gap-8 mb-12">
            {[
              {
                Icon: Twitter,
                href: "https://x.com/yourhandle",
                label: "X / Twitter",
              },
              {
                Icon: Youtube,
                href: "https://youtube.com/@yourchannel",
                label: "YouTube",
              },
              {
                Icon: Instagram,
                href: "https://instagram.com/yourhandle",
                label: "Instagram",
              },
              {
                Icon: Mail,
                href: "mailto:support@smarthustlevaault.com",
                label: "Email",
              },
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
              © {new Date().getFullYear()} Smart Hustle AI Vault. All rights
              reserved.
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
