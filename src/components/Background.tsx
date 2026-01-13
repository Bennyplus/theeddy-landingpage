import { useEffect, useRef, useState } from "react";

const Background = () => {
  const [mounted, setMounted] = useState(false);
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    setMounted(true);
  }, []);

  useEffect(() => {
    if (!mounted || !canvasRef.current) return;

    const canvas = canvasRef.current;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let particles: Particle[] = [];
    const mouse = { x: -1000, y: -1000 };

    // Resize handling
    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    // Particle Class
    class Particle {
      x: number;
      y: number;
      size: number;
      baseX: number;
      baseY: number;
      density: number;
      color: string;

      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.baseX = this.x;
        this.baseY = this.y;
        this.size = Math.random() * 2 + 0.5; // Random size between 0.5 and 2.5
        this.density = Math.random() * 20 + 5; // How much it reacts to mouse

        // Randomly pick colors from our theme
        const colors = [
          "rgba(255, 255, 255, 0.3)", // White
          "rgba(168, 85, 247, 0.3)", // Primary (Purple)
          "rgba(224, 204, 255, 0.3)", // Secondary (Lavender)
        ];
        this.color = colors[Math.floor(Math.random() * colors.length)];
      }

      draw() {
        if (!ctx) return;
        ctx.fillStyle = this.color;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.closePath();
        ctx.fill();
      }

      update() {
        // Mouse Interaction
        const dx = mouse.x - this.x;
        const dy = mouse.y - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        const forceDirectionX = dx / distance;
        const forceDirectionY = dy / distance;
        const maxDistance = 150;

        // Repulsion effect (Antigravity style)
        if (distance < maxDistance) {
          const force = (maxDistance - distance) / maxDistance;
          const directionX = forceDirectionX * force * this.density;
          const directionY = forceDirectionY * force * this.density;
          this.x -= directionX;
          this.y -= directionY;
        } else {
          // Return to original position (Rubber band effect)
          if (this.x !== this.baseX) {
            const dx = this.x - this.baseX;
            this.x -= dx / 20;
          }
          if (this.y !== this.baseY) {
            const dy = this.y - this.baseY;
            this.y -= dy / 20;
          }
        }

        // Drift effect for "alive" feel
        this.baseX += Math.sin(Date.now() * 0.001 + this.density) * 0.2;
        this.baseY += Math.cos(Date.now() * 0.001 + this.density) * 0.2;

        this.draw();
      }
    }

    const initParticles = () => {
      particles = [];
      const particleCount = window.innerWidth < 768 ? 40 : 100; // Fewer on mobile
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    // Event Listeners
    window.addEventListener("resize", resize);
    window.addEventListener("mousemove", (e) => {
      mouse.x = e.x;
      mouse.y = e.y;
    });

    // Init
    resize();
    animate();

    return () => {
      window.removeEventListener("resize", resize);
      cancelAnimationFrame(animationFrameId);
    };
  }, [mounted]);

  if (!mounted) return null;

  return (
    <div className="fixed inset-0 z-[-1] overflow-hidden pointer-events-none">
      {/* Interactive Particles Layer */}
      <canvas ref={canvasRef} className="absolute inset-0 z-10" />

      {/* Noise Texture Overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] mix-blend-overlay z-20"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E")`,
        }}
      />

      {/* Gradient Blob 1 - Top Left (Primary/Purple) */}
      <div className="absolute -top-[20%] -left-[10%] w-[70vw] h-[70vw] bg-primary/20 rounded-full blur-[100px] mix-blend-screen animate-blob opacity-50" />

      {/* Gradient Blob 2 - Top Right (Secondary/Lavender) */}
      <div className="absolute top-[10%] -right-[20%] w-[60vw] h-[60vw] bg-secondary/10 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-2000 opacity-40" />

      {/* Gradient Blob 3 - Bottom Left (Accent/Indigo) */}
      <div className="absolute -bottom-[20%] -left-[10%] w-[60vw] h-[60vw] bg-accent/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-4000 opacity-50" />

      {/* Gradient Blob 4 - Bottom Center (Muted) */}
      <div className="absolute bottom-[10%] left-[20%] w-[50vw] h-[50vw] bg-purple-900/20 rounded-full blur-[100px] mix-blend-screen animate-blob animation-delay-5000 opacity-30" />
    </div>
  );
};

export default Background;
