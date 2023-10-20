import Header from "./components/Header";
import SearchSideBar from "./components/SearchSideBar";
import RestaurantCard from "./components/RestaurantCard";

import { Metadata } from 'next'
import { PrismaClient } from "@prisma/client";
 
export const metadata: Metadata = {
  title: 'Search | OpenTable',
}

const prisma = new PrismaClient();

const fetchRestaurantByCity = async(city:string | undefined ) => {
  if(!city) return await prisma.restaurant.findMany();
  return await prisma.restaurant.findMany({
    where: {
      location: {
        name: {
          equals: city.toLowerCase()
        }
      }
    },
    select: {
      id:true,
      name:true,
      price:true,
      cuisine:true,
      location:true,
      main_image: true,
      slug: true,
    }  
  });
}


export default async function Search({searchParams}:{ searchParams: { city: string }}) {
  const restaurants = await fetchRestaurantByCity(searchParams.city);
  console.log(restaurants);
  return (
      <>        
        <Header />
        <div className="flex py-4 m-auto w-2/3 justify-between items-start">
          <SearchSideBar />
          <div className="w-5/6">            
            {restaurants.length ? (
              <>
                {restaurants.map( restaurant => {
                  <RestaurantCard restaurant={restaurant}/>
                })}
              </>
            ) : (<p>Sorry, we found no restaurant in {searchParams.city} area</p>)}            
          </div>
        </div>
      </>
  )
}