export default function Hero() {
  return (
    <section className="relative min-h-[92vh] flex flex-col justify-center px-6 md:px-16 pitch-texture overflow-hidden">
      {/* Large ghosted squad number in the background — a quiet nod to the
          football motif, subtle enough not to compete with the content. */}
      <span
        aria-hidden="true"
        className="pointer-events-none select-none absolute -right-10 top-1/2 -translate-y-1/2 text-[38rem] leading-none font-[var(--font-display)] text-pitch-800/40"
      >
        3
      </span>

      <div className="relative z-10 max-w-3xl">
        <p className="font-[var(--font-mono)] text-gold text-sm tracking-widest uppercase mb-6">
          Belgrade, Serbia — Available for internships
        </p>

        <h1 className="font-[var(--font-display)] text-[clamp(3.5rem,10vw,7.5rem)] leading-[0.9] tracking-wide">
          Marko
          <br />
          Stojanović
        </h1>

        <p className="mt-8 text-xl md:text-2xl text-chalk-dim max-w-xl leading-relaxed">
          Software Engineering student. Former professional footballer and team
          captain, now building full-stack web applications with the same
          discipline.
        </p>

        <div className="mt-10 flex flex-wrap gap-4 font-[var(--font-mono)] text-sm">
          <a
            href="https://github.com/markostojanovic03"
            target="_blank"
            rel="noreferrer"
            className="border border-chalk/25 hover:border-gold hover:text-gold transition-colors px-5 py-3 rounded-sm"
          >
            GitHub ↗
          </a>
          <a
            href="https://www.linkedin.com/in/marko-stojanovic-60b6b8375"
            target="_blank"
            rel="noreferrer"
            className="border border-chalk/25 hover:border-gold hover:text-gold transition-colors px-5 py-3 rounded-sm"
          >
            LinkedIn ↗
          </a>
          <a
            href="mailto:marko.stojanovic03@gmail.com"
            className="bg-gold text-pitch-950 hover:bg-gold-bright transition-colors px-5 py-3 rounded-sm font-medium"
          >
            marko.stojanovic03@gmail.com
          </a>
        </div>
      </div>
    </section>
  );
}
