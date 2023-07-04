import { prisma } from '@/lib/prisma'
import React from 'react'

const getTrips = async () => {
  const trips = await prisma.trip.findMany({})
}
export default async function Trips() {
  const data = await fetch('https://jsonplaceholder.typicode.com/posts').then(res => res.json())
  console.log(data);

  return (
    <div>Trips</div>
  )
}
