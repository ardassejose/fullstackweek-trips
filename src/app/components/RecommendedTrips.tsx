import TripItem from "@/components/TripItem";
import { prisma } from "@/lib/prisma";
import { Trip } from "@prisma/client";
import React from "react";

async function getTrips() {
  const trips = await prisma.trip.findMany({})
  return trips;
}

export default async function RecommendedTrips() {
  const data = await getTrips();

  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center gap-5 mx-auto">
        <div className="w-full h-[2px] bg-graySecondary"></div>
        <h2 className="font-medium whitespace-nowrap text-grayPrimary">Destinos recomendados</h2>
        <div className="w-full h-[2px] bg-graySecondary"></div>
      </div>

      <div className="flex flex-col items-center mt-5 gap-5 md:grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 md:place-items-center">
        {data.map((trip: Trip) => (
          <TripItem key={trip.id} trip={trip} />
        ))}
      </div>
    </div>
  );
};