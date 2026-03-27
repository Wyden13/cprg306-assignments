import Page from "./week-2/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className="min-h-screen bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white py-12">
      <div className="max-w-4xl mx-auto px-6">
        <header className="bg-white/5 backdrop-blur-sm rounded-2xl p-8 shadow-lg border border-white/5">
          <h1 className="text-3xl sm:text-4xl font-extrabold mb-2 text-center">
            CPRG 306 — Web Development 2
          </h1>
          <p className="text-sm sm:text-base text-center text-slate-300 max-w-2xl mx-auto">
            This workspace contains assignment demos and in-class examples for
            each week. Click a card below to open the corresponding week's pages
            and exercises.
          </p>
          <div className="mt-6 flex justify-center">
            <Link
              href="/week-2"
              className="inline-block bg-yellow-400 text-slate-900 px-4 py-2 rounded-md font-semibold shadow hover:scale-105 transition-transform"
            >
              Start Week 2
            </Link>
          </div>
        </header>

        <section className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-4">
          <Card href="/week-2" color="bg-green-500">
            Week 2<br />
            <span className="text-sm font-normal">Fundamentals & Layout</span>
          </Card>
          <Card href="/week-3" color="bg-red-500">
            Week 3<br />
            <span className="text-sm font-normal">Interactivity & DOM</span>
          </Card>
          <Card href="/week-4" color="bg-purple-500">
            Week 4<br />
            <span className="text-sm font-normal">Components & Props</span>
          </Card>
          <Card href="/week-5" color="bg-blue-500">
            Week 5<br />
            <span className="text-sm font-normal">State & Events</span>
          </Card>
          <Card href="/week-6" color="bg-yellow-400 text-slate-900">
            Week 6<br />
            <span className="text-sm font-normal">Forms & Lists</span>
          </Card>
          <Card href="/week-7" color="bg-pink-500">
            Week 7<br />
            <span className="text-sm font-normal">Routing & APIs</span>
          </Card>
          <Card href="/week-8" color="bg-teal-500">
            Week 8<br />
            <span className="text-sm font-normal">API Integration</span>
          </Card>
          <Card href="/week-9" color="bg-orange-500">
            Week 9<br />
            <span className="text-sm font-normal">
              Firebase & authentication
            </span>
          </Card>
          <Card href="/week-10" color="bg-cyan-500">
            Week 10
            <br />
            <span className="text-sm font-normal">Next.js & Deployment</span>
          </Card>
        </section>

        <footer className="mt-8 text-center text-sm text-slate-400">
          Built for CPRG 306 — keep practicing and iterating on your UI!
        </footer>
      </div>
    </main>
  );
}

function Card({ href, children, color = "bg-slate-700" }) {
  return (
    <Link
      href={href}
      className={`block p-6 rounded-xl shadow-md hover:shadow-xl transform hover:-translate-y-1 transition-all ${color}`}
    >
      <div className="text-lg font-bold">{children}</div>
    </Link>
  );
}
