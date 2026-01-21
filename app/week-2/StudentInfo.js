import Link from "next/link";

export default function StudentInfo() {
  return (
    <section>
      <p>Name: Hoang Phuong Uyen Nguyen</p>
      <p>
        GitHub:{" "}
        <Link
          href="https://github.com/Wyden13/cprg306-assignments"
          target="_blank"
          rel="noopener noreferrer"
          className="underline"
        >
          Wyden13/cprg306-assignments
        </Link>
      </p>
    </section>
  );
}