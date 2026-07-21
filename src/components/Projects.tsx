interface Project {
  fixture: string; // project name, framed as a "match" title
  competition: string; // short category label
  result: string; // one-line outcome
  formation: string[]; // tech stack, framed as a lineup/formation
  summary: string;
  github: string;
  live?: string;
}

const projects: Project[] = [
  {
    fixture: "Zentrax Shop — E-Commerce Platform",
    competition: "Real Client Project",
    result: "Shipped, in production",
    formation: ["Python", "FastAPI", "JWT", "SQLite", "Vanilla JS", "Docker", "GitHub Actions"],
    summary:
      "Upgraded a real freelance client's static site — a Belgrade business selling filters for construction machinery — into a full e-commerce platform: product catalog, cart, checkout, customer accounts, and an admin dashboard. 23 automated tests, CI/CD pipeline, containerized with Docker.",
    github: "https://github.com/markostojanovic03/zentrax-shop",
  },
  {
    fixture: "Task Manager — Full Stack",
    competition: "Personal Project",
    result: "Shipped end-to-end",
    formation: ["React", "TypeScript", "Express", "JWT", "SQLite", "Docker"],
    summary:
      "A full-stack task management app with user accounts. React + TypeScript frontend, an authenticated Express REST API, and a SQLite database — all containerized with Docker for one-command deployment.",
    github: "https://github.com/markostojanovic03/task-manager-fullstack",
  },
];

function MatchCard({ project }: { project: Project }) {
  return (
    <div className="border border-chalk/15 bg-pitch-900/50 rounded-sm overflow-hidden">
      {/* "Scoreboard" header strip */}
      <div className="flex items-center justify-between px-6 py-3 bg-pitch-800 font-[var(--font-mono)] text-xs uppercase tracking-widest text-chalk-dim">
        <span>{project.competition}</span>
        <span className="text-gold">{project.result}</span>
      </div>

      <div className="p-6 md:p-8">
        <h3 className="font-[var(--font-display)] text-3xl md:text-4xl mb-4">{project.fixture}</h3>
        <p className="text-chalk-dim leading-relaxed max-w-2xl">{project.summary}</p>

        <div className="mt-6">
          <p className="font-[var(--font-mono)] text-xs uppercase tracking-widest text-chalk-dim mb-2">
            Formation
          </p>
          <div className="flex flex-wrap gap-2">
            {project.formation.map((tech) => (
              <span key={tech} className="text-sm px-3 py-1 rounded-sm border border-gold/30 text-gold">
                {tech}
              </span>
            ))}
          </div>
        </div>

        <div className="mt-8 flex gap-4 font-[var(--font-mono)] text-sm">
          <a
            href={project.github}
            target="_blank"
            rel="noreferrer"
            className="border border-chalk/25 hover:border-gold hover:text-gold transition-colors px-4 py-2 rounded-sm"
          >
            Code ↗
          </a>
          {project.live && (
            <a
              href={project.live}
              target="_blank"
              rel="noreferrer"
              className="bg-gold text-pitch-950 hover:bg-gold-bright transition-colors px-4 py-2 rounded-sm font-medium"
            >
              Live demo ↗
            </a>
          )}
        </div>
      </div>
    </div>
  );
}

export default function Projects() {
  return (
    <section id="projects" className="px-6 md:px-16 py-24 border-t border-chalk/10">
      <div className="max-w-4xl">
        <p className="font-[var(--font-mono)] text-gold text-sm tracking-widest uppercase mb-4">Projects</p>
        <h2 className="font-[var(--font-display)] text-5xl mb-12">Match reports</h2>

        <div className="space-y-6">
          {projects.map((project) => (
            <MatchCard key={project.fixture} project={project} />
          ))}
        </div>
      </div>
    </section>
  );
}
