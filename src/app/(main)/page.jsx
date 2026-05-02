import LeftSidebar from "@/components/homePage/news/LeftSidebar";
import RightSidebar from "@/components/homePage/news/RightSidebar";
import Image from "next/image";

async function getCategories() {
  const res = await fetch(
    "https://openapi.programming-hero.com/api/news/categories",
  );
  const data = await res.json();
  return data.data;
}

export default async function HomePage() {
  const categories = await getCategories();
  console.log(categories.news_category);
  return (
    <div className="container mx-auto grid grid-cols-12 gap-4 my-12">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={"01"}/>
      </div>
      <div className="col-span-6">All News</div>
      <div className="col-span-3">
        <RightSidebar/>
        </div>
    </div>
  );
}
