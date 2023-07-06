import { prisma } from '@/lib/prisma'
import Image from 'next/image';
import React from 'react'
import TripHeader from './components/TripHeader';
import TripReservation from './components/TripReservation';
import TripDescription from './components/TripDescription';
import TripHighlights from './components/TripHighlights';
import TripLocation from './components/TripLocation';

const getTripsDetails = async (tripId: string) => {
  const trip = await prisma.trip.findUnique({
    where: {
      id: tripId
    }
  })
  return trip;
}

export default async function TripDetails({ params }: { params: { tripId: string } }) {
  const trip = await getTripsDetails(params.tripId)

  if (!trip) return null

  return (
    <div className='container mx-auto'>
      <TripHeader trip={trip} />
      <TripReservation trip={trip} />
      <TripDescription description={trip.description} />
      <TripHighlights highlights={trip.highlights} />
      <TripLocation location={trip.location} locationDescription={trip.locationDescription} />
    </div>
  )
}
