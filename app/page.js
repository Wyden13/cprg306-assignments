import Page from "./week-2/page";
import Link from "next/link";

export default function Home() {
  return (
    <main>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <ul className="space-x-4 my-4">
        <li className="inline-block border px-2 py-1 rounded bg-purple-200 shadow-md">
          <Link href="/week-2">Go to Week 2</Link>
        </li>
        <li className="inline-block border px-2 py-1 rounded bg-purple-200 shadow-md">
          <Link href="/week-3">Go to Week 3</Link>
        </li>
        <li className="inline-block border px-2 py-1 rounded bg-purple-200  shadow-md">
          <Link href="/week-4">Go to Week 4</Link>
        </li>
      </ul>
    </main>
   
  );
}
