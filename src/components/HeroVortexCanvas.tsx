import { useEffect, useRef } from "react";

import { cn } from "@/lib/utils";

type HeroVortexCanvasProps = {
  className?: string;
};

type Particle = {
  angle: number;
  armOffset: number;
  color: string;
  drift: number;
  radius: number;
  size: number;
  speed: number;
  stretch: number;
  trailAlpha: number;
};

const ARM_COUNT = 4;
const TARGET_FPS = 30;
const FRAME_TIME = 1000 / TARGET_FPS;

const createParticle = (maxRadius: number): Particle => {
  const radius = Math.pow(Math.random(), 0.78) * maxRadius;
  const arm = Math.floor(Math.random() * ARM_COUNT);
  const hue = 186 + Math.random() * 22;
  const lightness = 66 + Math.random() * 18;

  return {
    angle: Math.random() * Math.PI * 2,
    armOffset: (arm / ARM_COUNT) * Math.PI * 2 + (Math.random() - 0.5) * 0.72,
    color: `hsl(${hue} 100% ${lightness}%)`,
    drift: 0.16 + Math.random() * 0.54,
    radius,
    size: 0.7 + Math.random() * 2.1,
    speed: 0.14 + (1 - radius / maxRadius) * 0.28 + Math.random() * 0.08,
    stretch: 3 + Math.random() * 8 + (radius / maxRadius) * 8,
    trailAlpha: 0.12 + Math.random() * 0.38,
  };
};

const HeroVortexCanvas = ({ className }: HeroVortexCanvasProps) => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) {
      return;
    }

    const context = canvas.getContext("2d", {
      alpha: true,
      desynchronized: true,
    });
    if (!context) {
      return;
    }

    const motionQuery = window.matchMedia("(prefers-reduced-motion: reduce)");
    let reducedMotion = motionQuery.matches;
    let animationFrame = 0;
    let lastTimestamp = 0;
    let width = 0;
    let height = 0;
    let maxRadius = 0;
    let particles: Particle[] = [];
    let devicePixelRatio = 1;
    let isVisible = true;

    const buildParticles = () => {
      const particleCount = Math.max(
        120,
        Math.min(260, Math.floor((width + height) * 0.16)),
      );

      particles = Array.from({ length: particleCount }, () =>
        createParticle(maxRadius),
      );
    };

    const resizeCanvas = () => {
      const bounds = canvas.getBoundingClientRect();
      width = bounds.width;
      height = bounds.height;
      maxRadius = Math.min(width, height) * 0.44;
      devicePixelRatio = Math.min(window.devicePixelRatio || 1, 1.5);

      canvas.width = Math.max(1, Math.floor(width * devicePixelRatio));
      canvas.height = Math.max(1, Math.floor(height * devicePixelRatio));
      context.setTransform(devicePixelRatio, 0, 0, devicePixelRatio, 0, 0);

      buildParticles();
    };

    const drawBackgroundGlow = () => {
      const centerX = width * 0.5;
      const centerY = height * 0.5;

      const outerGlow = context.createRadialGradient(
        centerX,
        centerY,
        maxRadius * 0.12,
        centerX,
        centerY,
        maxRadius * 1.04,
      );
      outerGlow.addColorStop(0, "rgba(177, 246, 255, 0.16)");
      outerGlow.addColorStop(0.28, "rgba(54, 205, 255, 0.13)");
      outerGlow.addColorStop(0.6, "rgba(23, 92, 154, 0.08)");
      outerGlow.addColorStop(1, "rgba(5, 12, 24, 0)");

      context.fillStyle = outerGlow;
      context.beginPath();
      context.arc(centerX, centerY, maxRadius * 1.04, 0, Math.PI * 2);
      context.fill();
    };

    const drawParticle = (particle: Particle, time: number) => {
      const swirl =
        particle.angle +
        particle.armOffset +
        time * particle.speed +
        particle.radius * 0.03;

      const x = Math.cos(swirl) * particle.radius;
      const y = Math.sin(swirl) * particle.radius * 0.66;
      const tangent = swirl + Math.PI / 2;
      const innerFade = Math.max(0.18, 1 - particle.radius / maxRadius);

      context.save();
      context.translate(x, y);
      context.rotate(tangent);
      context.globalAlpha = particle.trailAlpha * (0.66 + innerFade * 0.5);
      context.strokeStyle = particle.color;
      context.lineWidth = particle.size;
      context.lineCap = "round";
      context.shadowBlur = 8 + particle.radius * 0.024;
      context.shadowColor = particle.color;
      context.beginPath();
      context.moveTo(-particle.stretch, 0);
      context.lineTo(particle.stretch, particle.drift);
      context.stroke();
      context.restore();
    };

    const drawCenter = () => {
      const centerRadius = maxRadius * 0.16;

      const ringGlow = context.createRadialGradient(
        0,
        0,
        centerRadius * 0.74,
        0,
        0,
        centerRadius * 1.24,
      );
      ringGlow.addColorStop(0, "rgba(255,255,255,0.95)");
      ringGlow.addColorStop(0.35, "rgba(178,248,255,0.92)");
      ringGlow.addColorStop(0.58, "rgba(70,221,255,0.76)");
      ringGlow.addColorStop(0.74, "rgba(70,221,255,0.1)");
      ringGlow.addColorStop(1, "rgba(70,221,255,0)");

      context.fillStyle = ringGlow;
      context.beginPath();
      context.arc(0, 0, centerRadius * 1.24, 0, Math.PI * 2);
      context.fill();

      context.strokeStyle = "rgba(217, 253, 255, 0.9)";
      context.lineWidth = Math.max(4, centerRadius * 0.1);
      context.shadowBlur = 20;
      context.shadowColor = "rgba(110, 235, 255, 0.56)";
      context.beginPath();
      context.arc(0, 0, centerRadius, 0, Math.PI * 2);
      context.stroke();

      context.shadowBlur = 0;
      const core = context.createRadialGradient(
        0,
        0,
        centerRadius * 0.08,
        0,
        0,
        centerRadius * 0.98,
      );
      core.addColorStop(0, "rgba(3, 10, 18, 0.92)");
      core.addColorStop(0.7, "rgba(2, 8, 16, 0.98)");
      core.addColorStop(1, "rgba(0, 0, 0, 1)");

      context.fillStyle = core;
      context.beginPath();
      context.arc(0, 0, centerRadius * 0.9, 0, Math.PI * 2);
      context.fill();
    };

    const renderFrame = (timestamp: number) => {
      const time = reducedMotion ? 0 : timestamp * 0.001;

      context.clearRect(0, 0, width, height);
      drawBackgroundGlow();

      context.save();
      context.translate(width * 0.5, height * 0.5);
      context.rotate(-0.45);
      context.scale(1, 0.72);

      for (const particle of particles) {
        drawParticle(particle, time);
      }

      drawCenter();
      context.restore();
    };

    const render = (timestamp: number) => {
      if (!isVisible) {
        return;
      }

      if (reducedMotion) {
        renderFrame(0);
        return;
      }

      if (timestamp - lastTimestamp >= FRAME_TIME) {
        lastTimestamp = timestamp;
        renderFrame(timestamp);
      }

      animationFrame = window.requestAnimationFrame(render);
    };

    const stopAnimation = () => {
      window.cancelAnimationFrame(animationFrame);
      animationFrame = 0;
    };

    const startAnimation = () => {
      stopAnimation();
      lastTimestamp = 0;
      animationFrame = window.requestAnimationFrame(render);
    };

    const handleMotionChange = (event: MediaQueryListEvent) => {
      reducedMotion = event.matches;

      if (reducedMotion) {
        stopAnimation();
        renderFrame(0);
        return;
      }

      if (isVisible) {
        startAnimation();
      }
    };

    const handleVisibilityChange = () => {
      isVisible = document.visibilityState === "visible";

      if (!isVisible) {
        stopAnimation();
        return;
      }

      if (reducedMotion) {
        renderFrame(0);
      } else {
        startAnimation();
      }
    };

    const intersectionObserver = new IntersectionObserver(
      ([entry]) => {
        isVisible = Boolean(entry?.isIntersecting);

        if (!isVisible) {
          stopAnimation();
          return;
        }

        if (reducedMotion) {
          renderFrame(0);
        } else {
          startAnimation();
        }
      },
      { threshold: 0.02 },
    );

    resizeCanvas();
    intersectionObserver.observe(canvas);
    document.addEventListener("visibilitychange", handleVisibilityChange);
    window.addEventListener("resize", resizeCanvas);
    motionQuery.addEventListener("change", handleMotionChange);

    if (reducedMotion) {
      renderFrame(0);
    } else {
      startAnimation();
    }

    return () => {
      stopAnimation();
      intersectionObserver.disconnect();
      document.removeEventListener("visibilitychange", handleVisibilityChange);
      window.removeEventListener("resize", resizeCanvas);
      motionQuery.removeEventListener("change", handleMotionChange);
    };
  }, []);

  return (
    <div className={cn("pointer-events-none", className)} aria-hidden="true">
      <div className="hero-vortex-aura absolute inset-[-8%] rounded-full" />
      <canvas
        ref={canvasRef}
        className="hero-vortex-canvas absolute inset-0 h-full w-full"
      />
    </div>
  );
};

export default HeroVortexCanvas;
