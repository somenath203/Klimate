/* eslint-disable react/prop-types */

import { ArrowDown, ArrowUp, Droplet, Wind } from "lucide-react";

import {
    Card,
    CardContent,
} from "@/components/ui/card"

  
const CurrentWeather = ({ weatherData, locationName }) => {

  
  const {
    main: { temp, feels_like, temp_min, temp_max, humidity },
    wind: { speed }
  } = weatherData;


  const formatTemperature = (temperature) => {

    return `${Math.round(temperature)}`;

  }


  return (
    <Card className="overflow-hidden">

        <CardContent className="p-6">

            <div className="grid grid-6 md:grid-cols-2">

                <div className="space-y-4">

                    <div className="space-y-2">

                        <div className="flex items-end gap-1">

                            <h2 className="text-2xl font-bold tracking-tighter">{locationName?.name ? locationName?.name : locationName}</h2>

                            {locationName?.state && (
                                <span className="text-muted-foreground">
                                    , {locationName?.state}
                                </span>
                            )}

                        </div>

                        <p className="text-sm text-muted-foreground">
                            {locationName?.sys?.country}
                        </p>

                    </div>


                    <div className="flex items-center gap-2">

                        <p className="text-7xl font-bold tracking-tighter">{formatTemperature(temp)}&deg;</p>

                        <div className="space-y-1">

                            <p className="text-sm font-medium text-muted-foreground">
                                Feels like {formatTemperature(feels_like)}°
                            </p>

                            <div className="flex gap-2 text-sm font-medium">

                                <span className="flex items-center gap-1 text-blue-500">

                                    <ArrowDown className="h-3 w-3" />

                                    {formatTemperature(temp_min)}°

                                </span>

                                <span className="flex items-center gap-1 text-red-500">

                                    <ArrowUp className="h-3 w-3" />

                                    {formatTemperature(temp_max)}°

                                </span>

                            </div>

                        </div>

                    </div>

                    <div className="grid grid-cols-2 gap-4">

                        <div className="flex items-center gap-2">

                            <Droplet className="w-4 h-4 text-blue-500" />

                            <div className="space-y-0 5">

                                <div className="text-sm font-medium">Humidity</div>

                                <div className="text-sm text-muted-foreground">{humidity}%</div>

                            </div>

                        </div>

                        <div className="flex items-center gap-2">

                            <Wind className="w-4 h-4 text-blue-500" />

                            <div className="space-y-0 5">

                                <div className="text-sm font-medium">Wind Speed</div>

                                <div className="text-sm text-muted-foreground">{speed} m/s</div>

                            </div>

                        </div>

                    </div>

                </div>


                <div className="flex flex-col items-center justify-center">

                    <div className="relative flex aspect-square w-full max-w-[200px] items-center justify-center">

                        <img 
                            src={`https://openweathermap.org/img/wn/${weatherData?.weather[0]?.icon}@4x.png`} 
                            alt={weatherData?.weather[0]?.description}
                            className="w-full h-full object-contain"
                        />

                        <div className="absolute bottom-0 text-center">

                            <div className="text-sm font-medium capitalize">
                                {weatherData?.weather[0]?.description}
                            </div>

                        </div>

                    </div>

                </div>


            </div>

        </CardContent>

    </Card>

  )

}


export default CurrentWeather;