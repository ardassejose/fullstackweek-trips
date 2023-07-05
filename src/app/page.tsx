'use client'
import Image from 'next/image';
import TripSearch from './components/TripSearch';
import QuickSearch from './components/QuickSearch';

export default function Home() {
  return (
    <div>
      <TripSearch />
      <QuickSearch />
    </div>
  )
}
