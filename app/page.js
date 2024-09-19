import Image from "next/image";
import Link from "next/link";
import StudentInfo from "./week-2/student-info";

export default function Home() {
  const weeks = [
    { weekname: "week-1", weekLink: "/week-1" },
    { weekname: "week-2", weekLink: "/week-2" },
    { weekname: "week-3", weekLink: "/week-3" },
    { weekname: "week-4", weekLink: "/week-4" },
    { weekname: "week-5", weekLink: "/week-5" },
    { weekname: "week-6", weekLink: "/week-6" },
  ];
  return (
    <div className="z-10 max-w-5xl w-full items-center justify-between text-sm">
      <h1 className="text-4xl font-bold mb-5">
        CPRG 306: Web Development 2 - Assignments
      </h1>
      <ul>
        {weeks.map((week) => {
          return (
            <li
              key={week.weekname}
              className="hover:text-green-400 hover:underline"
            >
              <Link href={week.weekname}>{week.weekname}</Link>
            </li>
          );
        })}
      </ul>
      {/* <Link href="/week-2">week-2</Link>
      <hr />
      <Link href="/week-3">week-3</Link> */}
    </div>
  );
}
