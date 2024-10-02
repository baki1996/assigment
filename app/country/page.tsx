import React from "react";
import Link from "next/link";

const Country = () => {
  return (
    <div>
      <h1 className="text-3xl font-bold underline p-4">
        This is Countries Page:
      </h1>
      <ul>
        <li className="text-2xl font-bold text-blue-600 ml-5">
          <Link href={"/country/pakistan"}>Pakistan</Link>
        </li>
        <li className="text-2xl font-bold text-blue-600 ml-5">
          <Link href={"/country/india"}>India</Link>
        </li>
        <li className="text-2xl font-bold text-blue-600 ml-5">
          <Link href={"/country/china"}>China</Link>
        </li>
        <li className="text-2xl font-bold text-blue-600 ml-5">
          <Link href={"/country/japan"}>Japan</Link>
        </li>
        <li className="text-2xl font-bold text-blue-600 ml-5">
          <Link href={"/country/bangladesh"}>Bangladesh</Link>
        </li>
      </ul>
    </div>
  );
};

export default Country;