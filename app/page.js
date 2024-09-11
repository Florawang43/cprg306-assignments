import Image from "next/image";
import Link from "next/link";
import StudentInfo from "./week-2/student-info";

export default function Home() {
  return (
    <div>
      <h1>CPRG 306: Web Development 2 - Assignments</h1>
      <Link href="/week-2">week-2</Link>
    </div>
  );
}
