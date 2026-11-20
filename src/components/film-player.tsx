import type { Process } from "@/data/processes";

export function FilmPlayer({ process }: { process: Process }) {
  return (
    <video
      controls
      playsInline
      preload="metadata"
      poster={process.poster}
      src={process.src}
      className="mx-auto mt-4 max-h-[70vh] w-auto max-w-full rounded-card bg-ink"
    >
      {process.title}
    </video>
  );
}
