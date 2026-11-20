import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowLeft } from "lucide-react";
import { FilmPlayer } from "@/components/film-player";
import { getProcess } from "@/data/processes";

export const Route = createFileRoute("/watch/$slug")({
  component: WatchPage,
});

function WatchPage() {
  const { slug } = Route.useParams();
  const process = getProcess(slug);

  if (!process) {
    return (
      <main className="mx-auto flex min-h-screen max-w-lg flex-col justify-center px-5">
        <h1 className="text-4xl text-ink">This process is not listed</h1>
        <Link to="/" className="mt-6 text-sm text-primary">
          Back to the cluster
        </Link>
      </main>
    );
  }

  return (
    <main className="mx-auto flex min-h-screen max-w-3xl flex-col px-5 py-8 sm:py-14">
      <Link to="/" className="inline-flex min-h-11 items-center gap-2 text-sm text-muted">
        <ArrowLeft className="size-4" aria-hidden="true" />
        All processes
      </Link>
      <p className="mt-8 text-xs font-medium tracking-widest text-primary uppercase">
        {process.kicker}
      </p>
      <h1 className="mt-2 text-5xl leading-none text-ink">{process.title}</h1>
      <p className="mt-4 text-base leading-relaxed text-muted">{process.detail}</p>
      <FilmPlayer process={process} />
    </main>
  );
}
