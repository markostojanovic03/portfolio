const timeline = [
  {
    year: "2021",
    label: "Signed professional contract",
    detail: "FK Radnički Novi Beograd, Serbian First League",
  },
  {
    year: "2023",
    label: "Career-ending injury",
    detail: "Redirected discipline toward software engineering",
  },
  {
    year: "2024",
    label: "Started Software Engineering",
    detail: "Singidunum University, Belgrade",
  },
];

export default function About() {
  return (
    <section
      id="about"
      className="px-6 md:px-16 py-24 border-t border-chalk/10"
    >
      <div className="max-w-4xl">
        <p className="font-[var(--font-mono)] text-gold text-sm tracking-widest uppercase mb-4">
          About
        </p>

        <p className="text-lg md:text-xl leading-relaxed text-chalk-dim max-w-2xl">
          I spent my teenage years competing professionally before a knee injury
          ended that path in 2023. I brought the same habits — showing up
          consistently, sweating the details, and trusting a process longer than
          it's comfortable to — into software engineering. I'm currently a
          third-year Software Engineering student who builds full-stack projects
          for the same reason I used to study match footage: to get slightly
          better than yesterday.
         </p>

        <div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-chalk/10">
          {timeline.map((item) => (
            <div key={item.label} className="bg-pitch-950 p-6">
              <p className="font-[var(--font-display)] text-4xl text-gold">
                {item.year}
              </p>
              <p className="mt-3 font-medium text-chalk">{item.label}</p>
              <p className="mt-1 text-sm text-chalk-dim">{item.detail}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
