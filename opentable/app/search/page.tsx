import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";

import { Metadata } from 'next'
 
export const metadata: Metadata = {
  title: 'Search | OpenTable',
}

export default function Search() {
  return (
      <>        
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSideBar />
          <div className="w-5/6">
            <RestaurantCard />
          </div>
        </div>
      </>
  )
}