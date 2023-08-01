import { useRouter } from "next/router";
import React from "react";
import { SingleResult } from "types";

type PROPS  = {
    item: SingleResult
}

const SingleSearchResult: React.FC<PROPS> = ({ item }) => {
  const router = useRouter();
  return (
    <div className="m-5 max-w-screen-md md:ml-[12rem]">
      <div
        className="group cursor-pointer"
        onClick={() => {
          router.push(item.link);
        }}
      >
        <p className="text-small text-gray-600">{item.formattedUrl}</p>
        <p className="text-blue-700 text-xl group-hover:underline underline-offset-1">
          {item.title}
        </p>
      </div>
      <p className="text-gray-800">{item.snippet}</p>
    </div>
  );
};

export default SingleSearchResult;
