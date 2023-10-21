import Link from "next/link";
import { PRICE, Cuisine, Location, Review } from '@prisma/client';
import Price from "../../components/Price";
import Stars from "../../components/Stars";

type RestaurantCardType = {
  id: number;
  price: PRICE;
  name: string;
  main_image: string;
  cuisine: Cuisine;
  location: Location;
  slug: string;
}

export default function RestaurantCard({ restaurant }: {restaurant: RestaurantCardType}) {

  return (
    <div className="border-b flex pb-5 ml-5">
      <img
        src={restaurant.main_image}
        alt=""
        className="w-44 h-36 rounded"
      />
      <div className="pl-5">
        <h2 className="text-3xl">{restaurant.name}</h2>
        <div className="flex items-start">
          <div className="flex mb-2">
            Stars
          </div>
          <p className="ml-2 text-sm">Rating</p>
        </div>
        <div className="mb-9">
          <div className="font-light flex text-reg">
            <Price price={restaurant.price}/>
            <p className="mr-4">{restaurant.cuisine.name}</p>
            <p className="mr-4">{restaurant.location.name}</p>
          </div>
        </div>
        <div className="text-red-600">
          <Link href={`restaurant/${restaurant.slug}`}>View more information</Link>
        </div>
      </div>
    </div>
  );
}