import type { BlockType } from '@/lib/types';

import Link from 'next/link';

type HomeHeroProps = BlockType<'hero'>;

export default function HomeHero({ cta, title, subtitle }: HomeHeroProps) {
  return (
    <section className="relative flex min-h-screen items-center justify-center overflow-hidden bg-zinc-950 px-6">
      {/* Warm gradient orbs — editorial feel */}
      <div className="pointer-events-none absolute -top-40 -left-40 h-[600px] w-[600px] rounded-full bg-amber-500/8 blur-[140px]" />
      <div className="pointer-events-none absolute -right-40 -bottom-40 h-[500px] w-[500px] rounded-full bg-rose-500/8 blur-[120px]" />

      {/* Subtle dot pattern */}
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.04]"
        style={{
          backgroundSize: '24px 24px',
          backgroundImage: 'radial-gradient(rgba(255,255,255,0.4) 1px, transparent 1px)',
        }}
      />

      {/* Content */}
      <div className="relative z-10 mx-auto max-w-4xl text-center">
        {/* Blog badge */}
        <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium tracking-widest text-zinc-400 uppercase backdrop-blur-sm">
          <span className="inline-block h-1.5 w-1.5 animate-pulse rounded-full bg-amber-400" />
          Blog
        </div>

        {/* Title — editorial typography */}
        <h1 className="font-serif text-5xl leading-[1.1] font-bold tracking-tight text-white sm:text-6xl md:text-7xl lg:text-8xl">
          {title}
        </h1>

        {/* Decorative line */}
        <div className="mx-auto mt-8 h-px w-24 bg-linear-to-r from-transparent via-amber-400/60 to-transparent" />

        {/* Subtitle */}
        <p className="mx-auto mt-8 max-w-xl text-lg leading-relaxed text-zinc-400 sm:text-xl">
          {subtitle}
        </p>

        {/* CTA Buttons */}
        {cta && cta.length > 0 && (
          <div className="mt-10 flex flex-col items-center justify-center gap-4 sm:flex-row">
            {cta.map((item, index) => (
              <Link
                href={item.ctaLink}
                key={item.id || index}
                className={
                  index === 0
                    ? 'group relative rounded-full bg-white px-8 py-3.5 text-sm font-semibold text-zinc-900 transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.2)]'
                    : 'rounded-full border border-white/15 px-8 py-3.5 text-sm font-semibold text-white backdrop-blur-sm transition-all hover:border-white/30 hover:bg-white/5'
                }
              >
                {item.cta}
                {index === 0 && (
                  <span className="ml-2 inline-block transition-transform group-hover:translate-x-1">
                    →
                  </span>
                )}
              </Link>
            ))}
          </div>
        )}

        {/* Stats row */}
        <div className="mt-16 flex items-center justify-center gap-8 text-sm text-zinc-500 sm:gap-12">
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-white">50+</span>
            <span>Articles</span>
          </div>
          <div className="h-8 w-px bg-zinc-800" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-white">10k+</span>
            <span>Readers</span>
          </div>
          <div className="h-8 w-px bg-zinc-800" />
          <div className="flex flex-col items-center gap-1">
            <span className="text-2xl font-bold text-white">12</span>
            <span>Topics</span>
          </div>
        </div>
      </div>

      {/* Bottom fade */}
      <div className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-linear-to-t from-zinc-950 to-transparent" />
    </section>
  );
}
