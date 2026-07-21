const skillGroups = [
  { label: "Languages", items: ["Python", "JavaScript", "TypeScript", "C++", "SQL"] },
  { label: "Frontend", items: ["React", "HTML/CSS", "Tailwind CSS"] },
  { label: "Backend", items: ["Node.js", "Express", "REST APIs", "JWT Auth"] },
  { label: "Tools", items: ["Git", "Docker", "Linux", "SQLite", "MySQL"] },
];

export default function Skills() {
  return (
    <section id="skills" className="px-6 md:px-16 py-24 border-t border-chalk/10">
      <div className="max-w-4xl">
        <p className="font-[var(--font-mono)] text-gold text-sm tracking-widest uppercase mb-4">Skills</p>
        <h2 className="font-[var(--font-display)] text-5xl mb-12">The toolkit</h2>

        <div className="grid sm:grid-cols-2 gap-10">
          {skillGroups.map((group) => (
            <div key={group.label}>
              <p className="font-[var(--font-mono)] text-sm text-chalk-dim uppercase tracking-wide mb-3">
                {group.label}
              </p>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="text-sm px-3 py-1.5 rounded-sm border border-chalk/15 text-chalk"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
