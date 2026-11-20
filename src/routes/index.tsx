import { createFileRoute } from "@tanstack/react-router";
import { FilmPlayer } from "@/components/film-player";
import { processes } from "@/data/processes";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "Nakshi Kantha · Craft Cluster" },
      {
        name: "description",
        content:
          "Process films from a Nakshi Kantha workshop in Kolkata with Padma Shri Pritikana Goswami and Mahua Lahiri.",
      },
    ],
  }),
  component: Home,
});

function Home() {
  return (
    <main className="mx-auto max-w-3xl px-5 py-10 sm:px-8 sm:py-16">
      <header className="border-t-2 border-primary pt-6">
        <p className="text-xs font-medium tracking-widest text-primary uppercase">
          Craft cluster design
        </p>
        <h1 className="mt-3 text-5xl leading-none text-ink sm:text-6xl">Nakshi Kantha</h1>
        <p className="mt-4 max-w-xl text-lg leading-relaxed text-muted">
          Process films from a craft design workshop in Kolkata, given by Padma Shri Pritikana
          Goswami and Mahua Lahiri.
        </p>
        <p className="mt-3 max-w-xl text-sm leading-relaxed text-muted">
          Attended by Mokshita Bhatia, 2nd year, FDDI LLPD.
        </p>
      </header>

      <section className="mt-10 flex flex-col gap-12">
        {processes.map((process, index) => (
          <article key={process.slug} id={process.slug}>
            <p className="text-xs tracking-widest text-muted uppercase">
              {String(index + 1).padStart(2, "0")} · {process.kicker}
            </p>
            <h2 className="mt-2 text-4xl leading-tight text-ink">{process.title}</h2>
            <p className="mt-2 max-w-xl text-base leading-relaxed text-muted">{process.summary}</p>
            <FilmPlayer process={process} />
          </article>
        ))}
      </section>
    </main>
  );
}
