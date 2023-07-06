'use client'
import Button from "@/components/Button";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { Trip } from "@prisma/client";
import { Controller, useForm } from "react-hook-form";

interface TripReservationProps {
  trip: Trip;
}

interface TripReservationForm {
  guests: number;
  startDate: Date | null
  endDate: Date | null
}

export default function TripReservation({ trip }: TripReservationProps) {
  const { register, handleSubmit, formState: { errors }, control } = useForm<TripReservationForm>()

  const onSubmit = (data: any) => { console.log({ data }) }

  return (
    <div className="flex flex-col px-5">
      <div className="flex gap-4">
        <Controller
          name="startDate"
          rules={{
            required: {
              value: true,
              message: "Informe a data de ida."
            },
          }}
          control={control}
          render={({ field }) => <DatePicker error={!!errors?.startDate} errorMessage={errors?.startDate?.message} onChange={field.onChange} selected={field.value} placeholderText="Data de Início" className="w-full" />}
        />

        <Controller
          name="endDate"
          rules={{
            required: {
              value: true,
              message: "Informe a data de volta."
            },
          }}
          control={control}
          render={({ field }) => <DatePicker error={!!errors?.endDate} errorMessage={errors?.endDate?.message} onChange={field.onChange} selected={field.value} placeholderText="Data final" className="w-full" />}
        />

      </div>

      <Input {...register("guests", {
        required: {
          value: true,
          message: "Informe o número de hóspedes."
        }
      })} placeholder={`Número de hóspedes (max: ${trip.maxGuests})`}
        className="mt-4"
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
      />

      <div className="flex justify-between mt-2">
        <p className="font-medium text-sm text-primaryDark">Total:</p>
        <p className="font-medium text-sm text-primaryDark">R$2500</p>
      </div>

      <div className="pb-10 w-full border-b-graySecondary">
        <Button onClick={() => handleSubmit(onSubmit)()} variant="primary" className="mt-3 w-full">Reservar agrora</Button>
      </div>
    </div>
  )
}
