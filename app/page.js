import Image from "next/image";
import Link from "next/link";
import StudentInfo from "./week-2/student-info";

export default function Home() {
  const weeks = [
    { weekname: "week-1 Assignment", weekLink: "/week-1" },
    { weekname: "week-2 Assignment", weekLink: "/week-2" },
    { weekname: "week-3 Assignment", weekLink: "/week-3" },
    { weekname: "week-4 Assignment", weekLink: "/week-4" },
    { weekname: "week-5 Assignment", weekLink: "/week-5" },
    { weekname: "week-6 Assignment", weekLink: "/week-6" },
    { weekname: "week-7 Assignment", weekLink: "/week-7" },
    { weekname: "week-8 Assignment", weekLink: "/week-8" },
    { weekname: "week-9 Assignment", weekLink: "/week-9" },
    { weekname: "week-10 Assignment", weekLink: "/week-10" },
    { weekname: "week-11 Assignment", weekLink: "/week-11" },
    { weekname: "week-12 Assignment", weekLink: "/week-12" },
  ];
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24 bg-slate-950">
      <div className="z-10 max-w-5xl w-full items-center justify-between text-sm text-white">
        <h1 className="text-4xl font-bold mb-5  text-white">
          CPRG 306: Web Development 2 - Assignments
        </h1>
        <div className="text-xl">
          <ul>
            {weeks.map((week) => {
              return (
                <li
                  key={week.weekname}
                  className="my-2 hover:text-green-400 hover:underline"
                >
                  <Link href={week.weekLink}>{week.weekname}</Link>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </main>
  );
}
