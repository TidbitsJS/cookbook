"use client";

import React, { useEffect, useState } from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { formUrlQuery } from "./utils";

function Search() {
  const [searchTerm, setSearchTerm] = useState("");
  const router = useRouter();
  const searchParams = useSearchParams();

  const query = searchParams.get("query");

  // query after 0.3s of no input
  useEffect(() => {
    const delayDebounceFn = setTimeout(() => {
      if (searchTerm) {
        const newUrl = formUrlQuery({
          params: searchParams.toString(),
          key: "query",
          value: searchTerm,
        });

        router.push(newUrl, { scroll: false });
      } else {
        router.push("/");
      }
    }, 300);

    return () => clearTimeout(delayDebounceFn);
  }, [searchTerm, searchParams, query]);

  return (
    <input
      type="text"
      placeholder="Search..."
      value={searchTerm}
      className="w-full p-2 mb-4 border-b-2 border-gray-300 focus:outline-none"
      onChange={(e) => setSearchTerm(e.target.value)}
    />
  );
}

export default Search;
