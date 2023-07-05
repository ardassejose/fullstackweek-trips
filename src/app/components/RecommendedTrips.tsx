import TripItem from "@/components/TripItem";
import { Trip } from "@prisma/client";
import React from "react";

const RecommendedTrips = async () => {
  const data = await fetch("http://localhost:3000/api/hello").then((res) => res.json());
  
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center gap-5">
        <div className="w-full h-[2px] bg-graySecondary"></div>
        <h2 className="font-medium whitespace-nowrap text-grayPrimary">Destinos recomendados</h2>
        <div className="w-full h-[2px] bg-graySecondary"></div>
      </div>

      <div className="flex flex-col items-center mt-5 gap-5">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};

export default RecommendedTrips;