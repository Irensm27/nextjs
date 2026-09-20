import Link from "next/link";

export default function Home() {
  return (
      <main className="min-h-[calc(100vh-81px)] bg-zinc-950">

        <section className="mx-auto flex max-w-7xl flex-col items-center px-6 py-32 text-center">

          <div className="mb-6 rounded-full border border-zinc-800 bg-zinc-900 px-4 py-2 text-sm text-zinc-400">
            Next.js Cars API
          </div>

          <h1 className="max-w-3xl text-5xl font-bold tracking-tight text-white md:text-6xl">
            Manage your cars
            <span className="block text-zinc-500">
              simply and quickly
            </span>
          </h1>

          <p className="mt-6 max-w-xl text-lg leading-8 text-zinc-400">
            View all available cars or add a new car using
            our simple form.
          </p>

          <div className="mt-10 flex gap-4">

            <Link
                href="/cars"
                className="rounded-lg bg-white px-6 py-3 font-semibold text-black transition hover:bg-zinc-200"
            >
              View cars
            </Link>

            <Link
                href="/cars/create"
                className="rounded-lg border border-zinc-700 px-6 py-3 font-semibold text-white transition hover:bg-zinc-900"
            >
              Add new car
            </Link>

          </div>

        </section>

      </main>
  );
}
