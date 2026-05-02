import LeftSidebar from '@/components/homePage/news/LeftSidebar';
import RightSidebar from '@/components/homePage/news/RightSidebar';
import { getCategories, getNewsByCategoryId } from '@/lib/data';
import React from 'react';




const NewsCategoryPage = async ({params}) => {

    const {id} = await params;
    console.log(id);

    const categories = await getCategories();
  //console.log(categories.news_category);

  const news = await getNewsByCategoryId(id);
  //console.log(news, "news")


    
    return (
        <div className="container mx-auto grid grid-cols-12 gap-4 my-12">
      <div className="col-span-3">
        <LeftSidebar categories={categories} activeId={id}/>
      </div>
      <div className="col-span-6">
       <h2 className="text-lg font-bold">Dragon News Home</h2>
      
      <div className="space-y-4 my-4">
        {
        news.length > 0 ? news.map((n) => {
          return <div key={n._id} className="border rounded-2xl p-6">{n.title}</div>
        
        }): <h2 className='my-5 text-5xl text-red-600 font-bold text-center mx-auto'>No News Found!!!</h2>      }
      </div>
        
        </div>
      <div className="col-span-3">
        <RightSidebar/>
        </div>
    </div>
    );
};

export default NewsCategoryPage;