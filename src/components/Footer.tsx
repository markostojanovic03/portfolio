export default function Footer() {
  return (
    <footer className="px-6 md:px-16 py-12 border-t border-chalk/10 flex flex-col sm:flex-row justify-between gap-4 font-[var(--font-mono)] text-sm text-chalk-dim">
      <p>© {new Date().getFullYear()} Marko Stojanović</p>
      <div className="flex gap-6">
        <a href="mailto:marko.stojanovic03@gmail.com" className="hover:text-gold transition-colors">
          Email
        </a>
        <a
          href="https://github.com/markostojanovic03"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gold transition-colors"
        >
          GitHub
        </a>
        <a
          href="https://www.linkedin.com/in/marko-stojanovic-60b6b8375"
          target="_blank"
          rel="noreferrer"
          className="hover:text-gold transition-colors"
        >
          LinkedIn
        </a>
      </div>
    </footer>
  );
}
