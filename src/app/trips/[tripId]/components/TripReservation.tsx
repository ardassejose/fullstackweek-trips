'use client'
import Button from '@/components/Button'
import DatePicker from '@/components/DatePicker'
import Input from '@/components/Input'
import { Trip } from '@prisma/client'
import { differenceInDays } from 'date-fns'
import { useRouter } from 'next/navigation'
import { Controller, useForm } from 'react-hook-form'

interface TripReservationProps {
  tripId: string
  tripStartDate: Date
  tripEndDate: Date
  maxGuests: number
  pricePerDay: number
}

interface TripReservationForm {
  guests: number
  startDate: Date | null
  endDate: Date | null
}

export default function TripReservation({
  tripId,
  tripStartDate,
  tripEndDate,
  maxGuests,
  pricePerDay,
}: TripReservationProps) {
  const {
    register,
    handleSubmit,
    formState: { errors },
    control,
    watch,
    setError,
  } = useForm<TripReservationForm>()

  const router = useRouter();

  const onSubmit = async (data: TripReservationForm) => {
    const req = await fetch('http://localhost:3000/api/trips/check', {
      method: 'POST',
      body: Buffer.from(
        JSON.stringify({
          startDate: data.startDate,
          endDate: data.endDate,
          tripId,
        })
      ),
    })


    const res = await req.json()
    if (res?.error?.code === 'TRIP_ALREADY_BOOKED') {
      setError('startDate', {
        type: 'manual',
        message: 'Esta data já está reservada.',
      })

      return setError('endDate', {
        type: 'manual',
        message: 'Esta data já está reservada.',
      })
    }

    if (res?.error?.code === 'INVALID_START_DATE') {
      return setError('startDate', {
        type: 'manual',
        message: 'Data inválida.',
      })
    }

    if (res?.error?.code === 'INVALID_END_DATE') {
      return setError('endDate', {
        type: 'manual',
        message: 'Data inválida.',
      })
    }

    router.push(
      `/trips/${tripId}/confirmation?startDate=${data.startDate?.toISOString()}&endDate=${data.endDate?.toISOString()}&guests=${data.guests
      }`
    )

  }

  const startDate = watch('startDate')
  const endDate = watch('endDate')

  return (
    <div className='flex flex-col px-5'>
      <div className='flex gap-4'>
        {/* Data de ida */}
        <Controller
          name='startDate'
          rules={{
            required: {
              value: true,
              message: 'Informe a data de ida.',
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.startDate}
              errorMessage={errors?.startDate?.message}
              onChange={field.onChange}
              selected={field.value}
              placeholderText='Data de Início'
              className='w-full'
              minDate={tripStartDate}
            />
          )}
        />

        {/* Data de volta */}
        <Controller
          name='endDate'
          rules={{
            required: {
              value: true,
              message: 'Informe a data de volta.',
            },
          }}
          control={control}
          render={({ field }) => (
            <DatePicker
              error={!!errors?.endDate}
              errorMessage={errors?.endDate?.message}
              onChange={field.onChange}
              selected={field.value}
              placeholderText='Data final'
              className='w-full'
              maxDate={tripEndDate}
              minDate={startDate ?? tripStartDate}
            />
          )}
        />
      </div>

      <Input
        {...register('guests', {
          required: {
            value: true,
            message: 'Informe o número de hóspedes.',
          },
          max: {
            value: maxGuests,
            message: `Número de hóspedes não pode ser maior que ${maxGuests}`,
          }
        })}
        placeholder={`Número de hóspedes (max: ${maxGuests})`}
        className='mt-4'
        error={!!errors?.guests}
        errorMessage={errors?.guests?.message}
        type='number'
      />

      <div className='flex justify-between mt-2'>
        <p className='font-medium text-sm text-primaryDark'>Total:</p>
        <p className='font-medium text-sm text-primaryDark'>
          {startDate && endDate
            ? `R$${differenceInDays(endDate, startDate) * pricePerDay}`
            : 'R$0,00'}
        </p>
      </div>

      <div className='pb-10 border-b border-b-graySecondary w-full'>
        <Button
          onClick={() => handleSubmit(onSubmit)()}
          variant='primary'
          className='mt-3 w-full'>
          Reservar agora
        </Button>
      </div>
    </div>
  )
}
