"use client";

import React, { useEffect, useRef } from "react";

interface Petal {
  x: number;
  y: number;
  size: number;
  speedY: number;
  speedX: number;
  rotation: number;
  rotationSpeed: number;
  opacity: number;
  petalType: "burgundy" | "rose" | "gold";
  oscillationSpeed: number;
  oscillationOffset: number;
}

export default function PetalsCanvas() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let animationFrameId: number;
    let width = (canvas.width = window.innerWidth);
    let height = (canvas.height = window.innerHeight);

    const handleResize = () => {
      if (!canvas) return;
      width = canvas.width = window.innerWidth;
      height = canvas.height = window.innerHeight;
    };

    window.addEventListener("resize", handleResize);

    const petalsCount = window.innerWidth < 768 ? 22 : 36;
    const petals: Petal[] = [];

    const types: ("burgundy" | "rose" | "gold")[] = [
      "burgundy",
      "burgundy",
      "rose",
      "gold",
    ];

    for (let i = 0; i < petalsCount; i++) {
      petals.push({
        x: Math.random() * width,
        y: Math.random() * height,
        size: Math.random() * 10 + 9,
        speedY: Math.random() * 0.9 + 0.4,
        speedX: Math.random() * 0.6 - 0.3,
        rotation: Math.random() * 360,
        rotationSpeed: (Math.random() - 0.5) * 1.5,
        opacity: Math.random() * 0.5 + 0.4,
        petalType: types[Math.floor(Math.random() * types.length)],
        oscillationSpeed: Math.random() * 0.02 + 0.01,
        oscillationOffset: Math.random() * Math.PI * 2,
      });
    }

    let tick = 0;

    const drawPetal = (p: Petal) => {
      ctx.save();
      ctx.translate(p.x, p.y);
      ctx.rotate((p.rotation * Math.PI) / 180);
      ctx.globalAlpha = p.opacity;

      if (p.petalType === "gold") {
        // Golden speck / star
        const grad = ctx.createRadialGradient(0, 0, 0, 0, 0, p.size * 0.6);
        grad.addColorStop(0, "#FFF9EF");
        grad.addColorStop(0.4, "#DFB76C");
        grad.addColorStop(1, "rgba(197, 160, 89, 0)");
        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.arc(0, 0, p.size * 0.4, 0, Math.PI * 2);
        ctx.fill();
      } else {
        // Luxury Rose Petal Curve
        const grad = ctx.createLinearGradient(
          -p.size / 2,
          -p.size,
          p.size / 2,
          p.size
        );
        if (p.petalType === "burgundy") {
          grad.addColorStop(0, "#800F2F");
          grad.addColorStop(0.6, "#590D22");
          grad.addColorStop(1, "#380514");
        } else {
          grad.addColorStop(0, "#C94263");
          grad.addColorStop(0.5, "#9E1C3F");
          grad.addColorStop(1, "#590D22");
        }

        ctx.fillStyle = grad;
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.9);
        ctx.bezierCurveTo(
          p.size * 0.8,
          -p.size * 0.6,
          p.size * 0.7,
          p.size * 0.8,
          0,
          p.size
        );
        ctx.bezierCurveTo(
          -p.size * 0.7,
          p.size * 0.8,
          -p.size * 0.8,
          -p.size * 0.6,
          0,
          -p.size * 0.9
        );
        ctx.fill();

        // Subtle petal spine highlight
        ctx.strokeStyle = "rgba(223, 183, 108, 0.25)";
        ctx.lineWidth = 0.75;
        ctx.beginPath();
        ctx.moveTo(0, -p.size * 0.7);
        ctx.quadraticCurveTo(p.size * 0.1, 0, 0, p.size * 0.8);
        ctx.stroke();
      }

      ctx.restore();
    };

    const animate = () => {
      tick++;
      ctx.clearRect(0, 0, width, height);

      petals.forEach((p) => {
        p.y += p.speedY;
        p.x += Math.sin(tick * p.oscillationSpeed + p.oscillationOffset) * 0.7 + p.speedX;
        p.rotation += p.rotationSpeed;

        if (p.y > height + 20) {
          p.y = -20;
          p.x = Math.random() * width;
        }
        if (p.x > width + 20) p.x = -20;
        if (p.x < -20) p.x = width + 20;

        drawPetal(p);
      });

      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener("resize", handleResize);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 z-20 h-full w-full opacity-80"
    />
  );
}

