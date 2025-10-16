import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { toast } from "sonner";
import heroImage from "@/assets/hero-image.jpg";
import { Mail } from "lucide-react";

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
    </main>
  );
};

export default Index;
