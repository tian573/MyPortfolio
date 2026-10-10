"use client";

import { useEffect, useRef } from "react";

const DESIGN_WIDTH = 1440;

export default function Scaler({ children }: { children: React.ReactNode }) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const apply = () => {
      const el = ref.current;
      if (!el) return;
      const scale = document.documentElement.clientWidth / DESIGN_WIDTH;
      el.style.zoom = String(scale);
    };
    apply();
    window.addEventListener("resize", apply);

    const GAIN = 4;
    let ctx: AudioContext | null = null;
    let buffer: AudioBuffer | null = null;

    const load = async () => {
      ctx = new AudioContext();
      const res = await fetch("/sfx/catsound.mp3");
      buffer = await ctx.decodeAudioData(await res.arrayBuffer());
    };
    const ready = load().catch(() => {});

    const onClick = async (e: MouseEvent) => {
      if (!(e.target as HTMLElement).closest?.(".cat")) return;
      await ready;
      if (!ctx || !buffer) return;
      if (ctx.state === "suspended") await ctx.resume();
      const source = ctx.createBufferSource();
      const gain = ctx.createGain();
      const limiter = ctx.createDynamicsCompressor();
      gain.gain.value = GAIN;
      source.buffer = buffer;
      source.connect(gain).connect(limiter).connect(ctx.destination);
      source.start();
    };
    document.addEventListener("click", onClick);

    return () => {
      window.removeEventListener("resize", apply);
      document.removeEventListener("click", onClick);
      ctx?.close();
    };
  }, []);

  return <div ref={ref}>{children}</div>;
}
