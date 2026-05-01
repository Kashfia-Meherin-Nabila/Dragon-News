import React from 'react';
import Marquee from 'react-fast-marquee';

const LatestNews = [
  {
    _id: 1,
    title: "Global Tech Companies Announce Major AI Breakthrough"
  },
  {
    _id: 2,
    title: "Stock Markets Rise Amid Positive Economic Forecast"
  },
  {
    _id: 3,
    title: "Severe Weather Alert Issued for Coastal Regions"
  },
  {
    _id: 4,
    title: "New Education Policy Aims to Improve Digital Learning"
  },
  {
    _id: 5,
    title: "Scientists Discover Promising Treatment for Rare Disease"
  }
];


const BreakingNews = () => {
    return (
        <div className='container flex justify-between gap-4 items-center p-4 bg-gray-100 mx-auto'>
            <button className='btn bg-red-500 text-white'>Latest News</button>
            <Marquee pauseOnHover={true}>
                {LatestNews.map(n=> {
                   return <span className='mx-6 text-red-600 text-lg' key={n._id}>{n.title}</span>;
                })}
            </Marquee>
        </div>
    );
};

export default BreakingNews;