'use client'
import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";

interface TripReservationProps {
  trip: Trip;
}

export default function TripReservation({ trip }: TripReservationProps) {
  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <DatePicker placeholderText="Data de Início" onChange={() => { }} className="w-full" />
        <DatePicker placeholderText="Data final" onChange={() => { }} className="w-full" />
      </div>

      <Input placeholder={`Número de hóspedes (max: ${trip.maxGuests})`} className="mt-4" />

      <div className="flex justify-between mt-2">
        <p className="font-medium text-sm text-primaryDark">Total:</p>
        <p className="font-medium text-sm text-primaryDark">R$2500</p>
      </div>

      <div className="pb-10 w-full border-b-graySecondary">
        <Button variant="primary" className="mt-3 w-full">Reservar agrora</Button>
      </div>
    </div>
  )
}
