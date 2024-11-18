import { Button } from "@/components/ui/button";
import { useFavouriteCity } from "@/hooks/use-favoruite-city";
import { ScrollArea } from "@/components/ui/scroll-area";
import FavCityCard from "./FavCityCard";

const FavCity = () => {


  const { favCities, removeParticularFav, removeAllFavCities } = useFavouriteCity();

  
  if(!favCities.length) {

    return null;

  }


  return (
    <>

      <h1 className="text-xl font-bold tracking-light">Favourites</h1>

      <Button 
        onClick={() => removeAllFavCities.mutate()}
      >Remove All Favourites</Button>

      <ScrollArea className="w-full pb-4">

        <div className="flex gap-4">

          {favCities?.length > 0 && favCities?.map((favCity) => (

            <FavCityCard 
              key={favCity.id} 
              {...favCity}
              onRemoveFav={() => removeParticularFav.mutate(favCity.id)}
            />

          ))}

        </div>

      </ScrollArea>

    </>
  )

}

export default FavCity;