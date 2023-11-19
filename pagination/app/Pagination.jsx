"use client";

import React from "react";
import { useRouter, useSearchParams } from "next/navigation";

import { formUrlQuery } from "./utils";

function Pagination({ isNext }) {
  const router = useRouter();
  const searchParams = useSearchParams();

  const page = parseInt(searchParams.get("page"));
  const currentPage = page ? page : 1;

  const handleNavigation = (type) => {
    const nextPageNumber = type === "prev" ? currentPage - 1 : currentPage + 1;

    const value = nextPageNumber > 1 ? nextPageNumber.toString() : null;

    const newUrl = formUrlQuery({
      params: searchParams.toString(),
      key: "page",
      value,
    });

    router.push(newUrl);
  };

  return (
    <div className='my-5 flex justify-center items-center'>
      <div className='flex gap-3 items-center'>
        <button
          onClick={() => handleNavigation("prev")}
          disabled={page === 1}
          className='flex items-center justify-center px-4 py-2 text-base font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700'
        >
          Previous
        </button>
        <p className='text-black text-xl'>{currentPage}</p>
        <button
          onClick={() => handleNavigation("next")}
          disabled={!isNext}
          className='flex items-center justify-center px-4 text-base py-2 font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700'
        >
          Next
        </button>
      </div>
    </div>
  );
}

export default Pagination;
