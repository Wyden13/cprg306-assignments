import Page from "./week-2/page";
import Link from "next/link";

export default function Home() {
  return (
    <main className="p-6 w-1/2 mx-auto rounded-lg">
      <h1 className="text-2xl font-bold mb-4 text-center">CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="space-x-4 my-4 space-y-4">
        <li className="inline-block  px-2 py-1 rounded bg-green-400 shadow-md w-full h-16">
          <Link href="/week-2" className="text-lg font-bold">Go to Week 2</Link>
        </li>
        <li className="inline-block px-2 py-1 rounded bg-red-400 shadow-md w-full h-16">
          <Link href="/week-3" className="text-lg font-bold">Go to Week 3</Link>
        </li>
        <li className="inline-block px-2 py-1 rounded bg-purple-400 shadow-md w-full h-16">
          <Link href="/week-4" className="text-lg font-bold">Go to Week 4</Link>
        </li>
        <li className="inline-block px-2 py-1 rounded bg-blue-400 shadow-md w-full h-16">
          <Link href="/week-5" className="text-lg font-bold">Go to Week 5</Link>
        </li>
      </ul>
    </main>
   
  );
}
