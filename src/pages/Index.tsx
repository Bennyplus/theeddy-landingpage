import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { toast } from "sonner";
import heroImage from "@/assets/hero-image.jpg";
import { Mail, CheckCircle, Key, Lightbulb, Star } from "lucide-react";

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

  return (
    <main className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="hero-gradient py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            {/* Left Content */}
            <div className="text-center lg:text-left order-2 lg:order-1">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
                Unlock the Secrets to <span className="text-accent">[Your Niche]</span> & Start Earning Today
              </h1>
              
              <p className="text-lg sm:text-xl text-white/90 mb-8 leading-relaxed">
                Get our FREE 7-Step Beginner's Guide to <span className="font-semibold">[Your Niche]</span> and learn the exact strategies I used to generate over <span className="font-bold text-accent">$5,000</span> in affiliate commissions.
              </p>

              {/* Email Form */}
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto lg:mx-0">
                  <div className="relative flex-1">
                    <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                    <Input
                      type="email"
                      placeholder="Enter your best email address..."
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="pl-10 h-14 text-base bg-white border-white/20 focus:ring-accent"
                      disabled={isSubmitting}
                    />
                  </div>
                  <Button
                    type="submit"
                    size="lg"
                    className="h-14 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? "Sending..." : "Get My Free Guide!"}
                  </Button>
                </div>
                
                <p className="text-sm text-white/70 text-center lg:text-left">
                  🔒 We respect your privacy. Unsubscribe at any time.
                </p>
              </form>
            </div>

            {/* Right Image */}
            <div className="order-1 lg:order-2 animate-fade-in">
              <img
                src={heroImage}
                alt="Success illustration - person working on laptop"
                className="w-full h-auto rounded-2xl shadow-2xl"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-7xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-16">
            Here's Exactly What You'll Get In Your Free Guide
          </h2>
          
          <div className="grid md:grid-cols-3 gap-8 lg:gap-12">
            {/* Point 1 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <CheckCircle className="w-16 h-16 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground">The Foundation</h3>
              <p className="text-muted-foreground leading-relaxed">
                Learn how to pick the right, high-converting products in a niche you're passionate about.
              </p>
            </div>

            {/* Point 2 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Key className="w-16 h-16 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground">Traffic Secrets</h3>
              <p className="text-muted-foreground leading-relaxed">
                Discover the 3 most effective methods to drive free, targeted traffic to your links without a big budget.
              </p>
            </div>

            {/* Point 3 */}
            <div className="text-center space-y-4">
              <div className="flex justify-center">
                <Lightbulb className="w-16 h-16 text-accent" strokeWidth={1.5} />
              </div>
              <h3 className="text-xl font-bold text-foreground">Copywriting Hacks</h3>
              <p className="text-muted-foreground leading-relaxed">
                Get our proven email and post templates that convert curious visitors into paying customers.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Social Proof / Testimonial Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8" style={{ backgroundColor: 'hsl(var(--testimonial-bg))' }}>
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Join Thousands of Successful Marketers
          </h2>
          
          <div className="bg-white rounded-2xl shadow-lg p-8 sm:p-12 mx-auto max-w-3xl">
            <div className="text-center space-y-6">
              <p className="text-lg sm:text-xl italic text-foreground leading-relaxed">
                "This free guide was the push I needed. I went from zero to making my first $500 sale in just 3 weeks. The strategies actually work!"
              </p>
              
              <div className="space-y-3">
                <p className="font-semibold text-foreground">- Jamie R.</p>
                
                <div className="flex justify-center gap-1">
                  {[1, 2, 3, 4, 5].map((star) => (
                    <Star key={star} className="w-5 h-5 fill-accent text-accent" />
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Carousel Dots */}
          <div className="flex justify-center gap-2 mt-8">
            <div className="w-3 h-3 rounded-full bg-accent"></div>
            <div className="w-3 h-3 rounded-full bg-muted"></div>
            <div className="w-3 h-3 rounded-full bg-muted"></div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 px-4 sm:px-6 lg:px-8 bg-background">
        <div className="max-w-4xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-bold text-center text-foreground mb-12">
            Frequently Asked Questions
          </h2>
          
          <Accordion type="single" collapsible className="w-full space-y-4">
            <AccordionItem value="item-1" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-primary hover:no-underline">
                Is this guide really free?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Yes! This guide is 100% free. We provide it to you in exchange for joining our email list where we share more advanced tips and product recommendations.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-2" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-primary hover:no-underline">
                What will I be subscribed to?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                You'll be added to our [Affiliate Marketer's Name] newsletter. You'll receive the free guide immediately, followed by a short welcome series, and then 1-2 emails per week with valuable tips, insights, and affiliate offers we believe in.
              </AccordionContent>
            </AccordionItem>

            <AccordionItem value="item-3" className="border border-border rounded-lg px-6">
              <AccordionTrigger className="text-left font-bold text-primary hover:no-underline">
                I'm a complete beginner. Is this for me?
              </AccordionTrigger>
              <AccordionContent className="text-muted-foreground leading-relaxed">
                Absolutely! The guide is specifically designed for beginners. It breaks down complex topics into simple, actionable steps.
              </AccordionContent>
            </AccordionItem>
          </Accordion>
        </div>
      </section>

      {/* Final CTA Section */}
      <section className="hero-gradient py-16 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            Ready to Start Your Affiliate Marketing Journey?
          </h2>
          
          <p className="text-lg sm:text-xl text-white/90 mb-8">
            Grab your FREE guide and join our community now!
          </p>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex flex-col sm:flex-row gap-3 max-w-xl mx-auto">
              <div className="relative flex-1">
                <Mail className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="email"
                  placeholder="Enter your best email address..."
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  className="pl-10 h-14 text-base bg-white border-white/20 focus:ring-accent"
                  disabled={isSubmitting}
                />
              </div>
              <Button
                type="submit"
                size="lg"
                className="h-14 px-8 bg-accent hover:bg-accent/90 text-accent-foreground font-bold text-base shadow-lg hover:shadow-xl transition-all duration-200 hover:scale-105"
                disabled={isSubmitting}
              >
                {isSubmitting ? "Sending..." : "Send My Guide!"}
              </Button>
            </div>
            
            <p className="text-sm text-white/70">
              🔒 We respect your privacy. Unsubscribe at any time.
            </p>
          </form>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary py-8 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto text-center space-y-4">
          <p className="text-white text-sm">
            © {new Date().getFullYear()} [Affiliate Marketer's Brand Name]. All Rights Reserved.
          </p>
          <div className="flex justify-center gap-6">
            <a href="#" className="text-accent underline hover:text-accent/80 transition-colors text-sm">
              Privacy Policy
            </a>
            <a href="#" className="text-accent underline hover:text-accent/80 transition-colors text-sm">
              Terms of Service
            </a>
          </div>
        </div>
      </footer>
    </main>
  );
};

export default Index;
