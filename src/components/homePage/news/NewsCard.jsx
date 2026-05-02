import Image from "next/image";
import Link from "next/link";
import React from "react";
import { CiBookmark, CiShare2, CiStar } from "react-icons/ci";
import { FaEye } from "react-icons/fa";
import { IoIosStar } from "react-icons/io";

const NewsCard = ({ news }) => {
  return (
    <div className="card bg-base-100 shadow-sm">
      <div className="card-body space-y-3">
        <div className="flex justify-between items-center bg-slate-100 p-3">
          <div className="flex gap-2 ">
            <Image
              src={news.author?.img}
              alt={news.author?.name || "Author image"}
              height={40}
              width={40}
              className="rounded-full"
            ></Image>
            <div>
              <h2 className="font-semibold">{news.author?.name}</h2>
              <p className="text-xs">{news.author?.published_date}</p>
            </div>
          </div>
          <div className="flex justify-between">
            <CiBookmark className="text-xl" />
            <CiShare2 className="text-xl" />
          </div>
        </div>
        <h2 className="card-title">{news.title}</h2>

        <figure>
          <Image
            src={news.image_url}
            alt={news.title || "News image"}
            width={300}
            height={300}
            className="w-full"
          ></Image>
        </figure>

        <p className="text-lg line-clamp-3">{news.details}</p>

        <div className="flex items-center gap-2 justify-between">
          <div className="flex items-center gap-2">
            <h2 className="flex text-lg items-center gap-2">
              <IoIosStar className="text-xl text-orange-500 font-bold" />
              {news.rating.number}
            </h2>
            <h2 className="flex text-lg items-center gap-2">
              <FaEye className="text-xl text-orange-500 font-bold" />
              {news.total_view}
            </h2>
          </div>

          <Link
            href={`/news/${news._id}`}
            className="text-orange-500 text-xl font-semibold"
          >
            Read More
          </Link>
        </div>
      </div>
    </div>
  );
};

export default NewsCard;
