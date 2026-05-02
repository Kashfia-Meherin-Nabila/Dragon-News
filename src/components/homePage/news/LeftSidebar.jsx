import Link from "next/link";
import React from "react";

const LeftSidebar = ({categories, activeId}) => {
  return (
    <div>
      <h2 className="text-lg font-bold">All categories</h2>
      <ul className="flex flex-col gap-3">
        {categories.news_category.map((category) => {
          return (
            <li
              key={category.category_id}
              
              className={`
              ${activeId === category.category_id ? "bg-slate-100" : ""}
               p-3 rounded font-bold text-md w-full my-4 text-center`}
            >
                <Link href={`/category/${category.category_id}`}
                className="block">
                {" "}
                {category.category_name}
                </Link>
              
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default LeftSidebar;
