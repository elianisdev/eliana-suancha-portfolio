export default function Home() {
  return (
    <main className="mx-auto flex w-full max-w-page flex-1 flex-col justify-center gap-4 px-4">
      <p className="font-mono text-xs uppercase tracking-widest text-accent">
        Frontend Developer
      </p>
      <h1 className="font-display text-5xl font-extrabold tracking-tight">
        Eliana{" "}
        <span className="bg-linear-to-r from-accent to-accent-2 bg-clip-text text-transparent">
          Suancha
        </span>
      </h1>
      <p className="max-w-xl text-muted">
        Portafolio en construcción.
      </p>
    </main>
  );
}
