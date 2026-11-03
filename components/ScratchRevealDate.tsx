"use client";

import React, { useRef, useState, useEffect, useCallback } from "react";
import { motion } from "framer-motion";
import confetti from "canvas-confetti";
import { Sparkles, Calendar, CheckCircle2 } from "lucide-react";
import { FloralDivider, RoyalCornerOrnament } from "./DecorativeSVGs";

export default function ScratchRevealDate() {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [isRevealed, setIsRevealed] = useState(false);
  const [percentScratched, setPercentScratched] = useState(0);
  const [isScratching, setIsScratching] = useState(false);

  // Trigger celebration confetti
  const celebrateReveal = useCallback(() => {
    setIsRevealed(true);
    setPercentScratched(100);

    confetti({
      particleCount: 80,
      spread: 90,
      origin: { y: 0.6 },
      colors: ["#C5A059", "#DFB76C", "#FFF2B2", "#800F2F", "#590D22"],
    });

    // Clear canvas completely
    const canvas = canvasRef.current;
    if (canvas) {
      const ctx = canvas.getContext("2d");
      if (ctx) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
      }
    }
  }, []);

  // Initialize Canvas Scratch Surface
  const initCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = containerRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const width = (canvas.width = rect.width);
    const height = (canvas.height = rect.height);
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    // Reset composite operation
    ctx.globalCompositeOperation = "source-over";

    // 1. Luxury Gold Foil Metallic Gradient
    const grad = ctx.createLinearGradient(0, 0, width, height);
    grad.addColorStop(0, "#8C6A28");
    grad.addColorStop(0.25, "#DFB76C");
    grad.addColorStop(0.5, "#FFF2B2");
    grad.addColorStop(0.75, "#C5A059");
    grad.addColorStop(1, "#6B4F1A");

    ctx.fillStyle = grad;
    ctx.fillRect(0, 0, width, height);

    // 2. Texture & Sparkle Grid
    ctx.fillStyle = "rgba(255, 255, 255, 0.15)";
    for (let x = 12; x < width; x += 24) {
      for (let y = 12; y < height; y += 24) {
        ctx.beginPath();
        ctx.arc(x, y, 1.2, 0, Math.PI * 2);
        ctx.fill();
      }
    }

    // 3. Ornate Double Border on Scratch Layer
    ctx.strokeStyle = "rgba(75, 12, 28, 0.5)";
    ctx.lineWidth = 3;
    ctx.strokeRect(6, 6, width - 12, height - 12);

    ctx.strokeStyle = "rgba(255, 255, 255, 0.4)";
    ctx.lineWidth = 1;
    ctx.strokeRect(10, 10, width - 20, height - 20);

    // 4. Scratch Text Prompts
    ctx.fillStyle = "#380514";
    ctx.font = "bold 13px 'Cinzel', serif";
    ctx.textAlign = "center";
    ctx.letterSpacing = "3px";
    ctx.fillText("A DATE TO REMEMBER", width / 2, height / 2 - 14);

    ctx.fillStyle = "#590D22";
    ctx.font = "600 11px 'Montserrat', sans-serif";
    ctx.fillText("✦ Scratch with Finger or Mouse to Reveal ✦", width / 2, height / 2 + 15);
  }, []);

  useEffect(() => {
    initCanvas();
    const handleResize = () => {
      if (!isRevealed) {
        initCanvas();
      }
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, [initCanvas, isRevealed]);

  // Scratch Drawing Handler
  const handleScratch = (clientX: number, clientY: number) => {
    if (isRevealed) return;
    const canvas = canvasRef.current;
    if (!canvas) return;

    const rect = canvas.getBoundingClientRect();
    const x = clientX - rect.left;
    const y = clientY - rect.top;

    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    ctx.globalCompositeOperation = "destination-out";
    ctx.beginPath();
    ctx.arc(x, y, 24, 0, Math.PI * 2);
    ctx.fill();

    // Check scratched percentage every ~8 strokes
    checkPercentage();
  };

  const checkPercentage = () => {
    const canvas = canvasRef.current;
    if (!canvas || isRevealed) return;
    const ctx = canvas.getContext("2d", { willReadFrequently: true });
    if (!ctx) return;

    try {
      const imageData = ctx.getImageData(0, 0, canvas.width, canvas.height);
      const data = imageData.data;
      let transparentPixels = 0;
      const totalPixels = data.length / 4;

      // Sample every 16th pixel for high performance
      for (let i = 3; i < data.length; i += 64) {
        if (data[i] === 0) {
          transparentPixels++;
        }
      }

      const ratio = Math.round((transparentPixels / (totalPixels / 16)) * 100);
      setPercentScratched(Math.min(ratio, 100));

      // Reveal if > 40% cleared
      if (ratio > 40) {
        celebrateReveal();
      }
    } catch {
      // Fallback
    }
  };

  // Pointer / Mouse / Touch Events
  const onPointerDown = (e: React.PointerEvent<HTMLCanvasElement>) => {
    setIsScratching(true);
    handleScratch(e.clientX, e.clientY);
  };

  const onPointerMove = (e: React.PointerEvent<HTMLCanvasElement>) => {
    if (!isScratching) return;
    handleScratch(e.clientX, e.clientY);
  };

  const onPointerUp = () => {
    setIsScratching(false);
  };

  return (
    <section className="relative w-full py-20 px-4 flex flex-col items-center justify-center overflow-hidden bg-gradient-to-b from-[#20040c] via-[#2d0613] to-[#1c040c]">
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.3 }}
        transition={{ duration: 0.9 }}
        className="relative z-10 w-full max-w-[440px] rounded-3xl bg-[#FFF9EF] text-[#38251F] p-6 sm:p-8 shadow-[0_25px_60px_-15px_rgba(0,0,0,0.85)] border-2 border-[#C5A059] overflow-hidden text-center"
      >
        {/* Subtle background paper pattern */}
        <div className="absolute inset-0 opacity-10 bg-[radial-gradient(#800F2F_1px,transparent_1px)] [background-size:12px_12px] pointer-events-none" />

        {/* Four Royal Corners */}
        <div className="absolute top-2 left-2 pointer-events-none opacity-80">
          <RoyalCornerOrnament className="w-10 h-10" />
        </div>
        <div className="absolute top-2 right-2 pointer-events-none opacity-80 rotate-90">
          <RoyalCornerOrnament className="w-10 h-10" />
        </div>
        <div className="absolute bottom-2 left-2 pointer-events-none opacity-80 -rotate-90">
          <RoyalCornerOrnament className="w-10 h-10" />
        </div>
        <div className="absolute bottom-2 right-2 pointer-events-none opacity-80 rotate-180">
          <RoyalCornerOrnament className="w-10 h-10" />
        </div>

        {/* Section Tag */}
        <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-[#C5A059]/40 bg-[#800F2F]/10 mb-3">
          <Sparkles className="w-3.5 h-3.5 text-[#800F2F]" />
          <span className="text-[10px] font-cinzel tracking-[0.25em] text-[#800F2F] font-bold uppercase">
            Save The Date
          </span>
          <Sparkles className="w-3.5 h-3.5 text-[#800F2F]" />
        </div>

        {/* Section Heading */}
        <h2 className="font-royal text-2xl sm:text-3xl font-bold tracking-[0.16em] text-[#590D22] uppercase">
          A DATE TO REMEMBER
        </h2>
        <p className="text-xs font-cinzel tracking-[0.2em] text-[#8C6A28] uppercase mt-1">
          Scratch to Reveal
        </p>

        <FloralDivider className="my-4" />

        {/* ============================================================== */}
        {/* SCRATCH CARD CONTAINER */}
        {/* ============================================================== */}
        <div
          ref={containerRef}
          className="relative w-full h-[180px] sm:h-[195px] rounded-2xl overflow-hidden border-2 border-[#C5A059] shadow-xl my-3 bg-[#590D22] touch-none select-none"
        >
          {/* UNDERNEATH LAYER: The Revealed Wedding Date */}
          <div className="absolute inset-0 flex flex-col items-center justify-center p-4 bg-gradient-to-br from-[#800F2F] via-[#590D22] to-[#380514] text-[#FFF9EF]">
            {/* Background filigree subtle pattern */}
            <div className="absolute inset-0 bg-[radial-gradient(#DFB76C_0.8px,transparent_0.8px)] [background-size:14px_14px] opacity-15" />
            <div className="absolute inset-2 rounded-xl border border-dashed border-[#DFB76C]/40 pointer-events-none" />

            <div className="relative z-10 flex flex-col items-center">
              <span className="text-[11px] font-cinzel tracking-[0.3em] text-[#FFF2B2] uppercase font-bold flex items-center gap-1.5 mb-1">
                <Calendar className="w-3.5 h-3.5 text-[#DFB76C]" />
                The Auspicious Date
              </span>

              <h3 className="font-royal text-3xl sm:text-4xl font-extrabold tracking-wider text-[#FFF9EF] drop-shadow-[0_2px_10px_rgba(0,0,0,0.6)] my-0.5">
                1 DECEMBER 2026
              </h3>

              <div className="h-[1px] w-28 bg-gradient-to-r from-transparent via-[#DFB76C] to-transparent my-1.5" />

              <p className="font-cinzel text-xs sm:text-sm tracking-[0.26em] text-[#DFB76C] font-semibold uppercase">
                WEDDING CELEBRATIONS
              </p>

              <span className="text-[9.5px] font-body text-[#FFF9EF]/80 tracking-widest mt-1">
                ATM FARM HOUSE • GUJARAT
              </span>
            </div>
          </div>

          {/* OVERLAY CANVAS: Scratchable Golden Layer */}
          <canvas
            ref={canvasRef}
            onPointerDown={onPointerDown}
            onPointerMove={onPointerMove}
            onPointerUp={onPointerUp}
            className={`absolute inset-0 z-20 w-full h-full cursor-grab active:cursor-grabbing transition-opacity duration-700 ${
              isRevealed ? "opacity-0 pointer-events-none" : "opacity-100"
            }`}
          />
        </div>

        {/* Scratch Interaction Status & Helper */}
        <div className="mt-3 flex items-center justify-between text-xs font-cinzel text-[#8C6A28]">
          <span className="text-[11px] tracking-wider">
            {isRevealed
              ? "✓ Date Revealed!"
              : percentScratched > 0
              ? `Scratching: ${percentScratched}%`
              : "Use finger/mouse to scratch"}
          </span>

          {!isRevealed ? (
            <button
              onClick={celebrateReveal}
              className="text-[11px] font-semibold tracking-wider text-[#800F2F] hover:text-[#590D22] underline underline-offset-4 active:scale-95 transition-all"
            >
              Reveal Instantly
            </button>
          ) : (
            <span className="inline-flex items-center gap-1 text-[11px] text-[#590D22] font-semibold tracking-wider">
              <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600" />
              Revealed
            </span>
          )}
        </div>

      </motion.div>
    </section>
  );
}

