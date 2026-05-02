import LeftSidebar from "@/components/homePage/news/LeftSidebar";
import RightSidebar from "@/components/homePage/news/RightSidebar";
import Image from "next/image";
import { redirect } from "next/navigation";

const default_category_id ="01"

export default async function HomePage() {
   redirect (`/category/${default_category_id}`)
}
