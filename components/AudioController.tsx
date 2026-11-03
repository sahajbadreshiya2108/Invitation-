"use client";

import React, { useState, useEffect, useRef } from "react";
import { Volume2, VolumeX, Music } from "lucide-react";

interface AudioControllerProps {
  autoStartTrigger?: boolean;
}

export default function AudioController({ autoStartTrigger = false }: AudioControllerProps) {
  const [isPlaying, setIsPlaying] = useState(false);
  const audioCtxRef = useRef<AudioContext | null>(null);
  const isPlayingRef = useRef(false);
  const loopTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  // Auspicious Indian Wedding Notes (Raag Yaman / Bilawal Pentatonic Scale in Hz)
  // Sa, Re, Ga, Ma, Pa, Dha, Ni, Sa'
  const baseFreq = 220; // A3 root
  const notes = [
    baseFreq * (1 / 1),      // Sa (220 Hz)
    baseFreq * (9 / 8),      // Re (247.5 Hz)
    baseFreq * (5 / 4),      // Ga (275 Hz)
    baseFreq * (4 / 3),      // Ma (293.3 Hz)
    baseFreq * (3 / 2),      // Pa (330 Hz)
    baseFreq * (5 / 3),      // Dha (366.6 Hz)
    baseFreq * (15 / 8),     // Ni (412.5 Hz)
    baseFreq * 2,            // High Sa (440 Hz)
    baseFreq * 2 * (9 / 8),  // High Re (495 Hz)
  ];

  // Traditional Shehnai / Sitar melodic sequence
  const melodyPattern = [
    { noteIdx: 0, duration: 1.2 },
    { noteIdx: 2, duration: 0.8 },
    { noteIdx: 4, duration: 1.4 },
    { noteIdx: 5, duration: 0.9 },
    { noteIdx: 7, duration: 1.8 },
    { noteIdx: 6, duration: 0.8 },
    { noteIdx: 4, duration: 1.0 },
    { noteIdx: 2, duration: 1.4 },
    { noteIdx: 1, duration: 0.9 },
    { noteIdx: 0, duration: 2.2 },
    { noteIdx: 4, duration: 1.2 },
    { noteIdx: 7, duration: 1.5 },
    { noteIdx: 8, duration: 2.0 },
    { noteIdx: 7, duration: 1.4 },
    { noteIdx: 4, duration: 1.6 },
  ];

  const initAudio = () => {
    if (!audioCtxRef.current) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      audioCtxRef.current = new AudioCtx();
    }
    if (audioCtxRef.current.state === "suspended") {
      audioCtxRef.current.resume();
    }
  };

  const playTanpuraDrone = (ctx: AudioContext) => {
    // Continuous Tanpura drone (Sa + Pa)
    const droneFreqs = [baseFreq / 2, (baseFreq / 2) * (3 / 2)];
    droneFreqs.forEach((freq) => {
      const osc = ctx.createOscillator();
      const gain = ctx.createGain();
      osc.type = "sawtooth";
      osc.frequency.setValueAtTime(freq, ctx.currentTime);

      const filter = ctx.createBiquadFilter();
      filter.type = "lowpass";
      filter.frequency.setValueAtTime(320, ctx.currentTime);

      gain.gain.setValueAtTime(0.015, ctx.currentTime);

      osc.connect(filter);
      filter.connect(gain);
      gain.connect(ctx.destination);
      osc.start();

      // Stop drone when music stops
      const checkStop = setInterval(() => {
        if (!isPlayingRef.current) {
          gain.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 1.2);
          setTimeout(() => {
            try {
              osc.stop();
              osc.disconnect();
            } catch {}
          }, 1500);
          clearInterval(checkStop);
        }
      }, 300);
    });
  };

  const playMelodyNote = (ctx: AudioContext, freq: number, duration: number) => {
    if (!isPlayingRef.current) return;

    // Harmonic Shehnai style synthesis: fundamental + overtones
    const osc1 = ctx.createOscillator();
    const osc2 = ctx.createOscillator();
    const gain = ctx.createGain();

    osc1.type = "triangle";
    osc2.type = "sine";

    osc1.frequency.setValueAtTime(freq, ctx.currentTime);
    osc2.frequency.setValueAtTime(freq * 2, ctx.currentTime);

    // Warm envelope
    const now = ctx.currentTime;
    gain.gain.setValueAtTime(0, now);
    gain.gain.linearRampToValueAtTime(0.06, now + 0.15);
    gain.gain.exponentialRampToValueAtTime(0.001, now + duration);

    const filter = ctx.createBiquadFilter();
    filter.type = "lowpass";
    filter.frequency.setValueAtTime(1400, now);

    osc1.connect(gain);
    osc2.connect(gain);
    gain.connect(filter);
    filter.connect(ctx.destination);

    osc1.start(now);
    osc2.start(now);
    osc1.stop(now + duration + 0.1);
    osc2.stop(now + duration + 0.1);
  };

  const startMusicLoop = () => {
    initAudio();
    const ctx = audioCtxRef.current;
    if (!ctx) return;

    isPlayingRef.current = true;
    setIsPlaying(true);

    playTanpuraDrone(ctx);

    let step = 0;
    const playNext = () => {
      if (!isPlayingRef.current) return;

      const item = melodyPattern[step % melodyPattern.length];
      const freq = notes[item.noteIdx];
      playMelodyNote(ctx, freq, item.duration);

      step++;
      loopTimeoutRef.current = setTimeout(playNext, item.duration * 1000 * 0.95);
    };

    playNext();
  };

  const stopMusic = () => {
    isPlayingRef.current = false;
    setIsPlaying(false);
    if (loopTimeoutRef.current) {
      clearTimeout(loopTimeoutRef.current);
    }
  };

  const toggleMusic = () => {
    if (isPlaying) {
      stopMusic();
    } else {
      startMusicLoop();
    }
  };

  useEffect(() => {
    if (autoStartTrigger && !isPlayingRef.current) {
      startMusicLoop();
    }
  }, [autoStartTrigger]);

  useEffect(() => {
    return () => {
      isPlayingRef.current = false;
      if (loopTimeoutRef.current) clearTimeout(loopTimeoutRef.current);
      if (audioCtxRef.current) {
        try {
          audioCtxRef.current.close();
        } catch {}
      }
    };
  }, []);

  return (
    <div className="fixed top-5 right-5 z-50">
      <button
        onClick={toggleMusic}
        className="group relative flex items-center gap-2 rounded-full border border-[#C5A059]/60 bg-[#590D22]/85 px-3.5 py-2 text-xs font-cinzel tracking-wider text-[#F8F0E3] shadow-lg backdrop-blur-md transition-all duration-300 hover:border-[#DFB76C] hover:bg-[#800F2F] hover:shadow-[0_0_20px_rgba(197,160,89,0.4)] active:scale-95"
        aria-label="Toggle Royal Music"
      >
        <span className="relative flex h-3 w-3 items-center justify-center">
          {isPlaying ? (
            <span className="flex items-end gap-[2px] h-3">
              <span className="w-[2px] h-3 bg-[#DFB76C] animate-pulse" />
              <span className="w-[2px] h-2 bg-[#DFB76C] animate-bounce" />
              <span className="w-[2px] h-3.5 bg-[#DFB76C] animate-pulse" />
            </span>
          ) : (
            <Music className="h-3.5 w-3.5 text-[#DFB76C]" />
          )}
        </span>

        <span className="hidden sm:inline">
          {isPlaying ? "Music Playing" : "Wedding Music"}
        </span>

        {isPlaying ? (
          <Volume2 className="h-4 w-4 text-[#DFB76C]" />
        ) : (
          <VolumeX className="h-4 w-4 text-[#DFB76C]/70" />
        )}

        {/* Ambient Ring Glow */}
        {isPlaying && (
          <span className="absolute -inset-1 -z-10 rounded-full bg-[#C5A059]/20 blur-sm animate-pulse" />
        )}
      </button>
    </div>
  );
}

