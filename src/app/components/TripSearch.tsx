'use client'
import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";
import { useRouter } from "next/navigation";
import { Controller, useForm } from "react-hook-form";

interface TripSearchForm {
  text: string;
  startDate: Date;
  budget: number;
}

export default function TripSearch() {
  const router = useRouter();
  
  const { control, formState: { errors }, register, handleSubmit } = useForm<TripSearchForm>()

  const onSubmit = (data: TripSearchForm) => {
    router.push(`/trips/search?text=${data.text}&startDate=${data.startDate?.toISOString()}&budget=${data.budget}`);
  };

  return (
    <div className="container mx-auto bg-search-background bg-no-repeat bg-center bg-cover p-5">
      <h1 className="font-semibold text-2xl text-primaryDark text-center">
        Encontre sua próxima <span className="text-primary">viagem!</span>
      </h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" className="text-primaryDark"
          error={!!errors.text}
          errorMessage={errors.text?.message}
          {...register('text', {
            required: {
              value: true,
              message: 'Campo obrigatório'
            }
          })} />

        <div className="flex flex-row gap-4">

          {/* Data de volta */}
          <Controller
            name='startDate'
            control={control}
            render={({ field }: { field: any }) => (
              <DatePicker onChange={field.onChange} selected={field.value} placeholderText='Data final' className='w-full' minDate={new Date()}
              />
            )}
          />

          {/* Input de preço */}
          <Controller
            name='budget'
            control={control}
            render={({ field }: { field: any }) => (
              <CurrencyInput allowDecimals={false} placeholder="Orçamento" onValueChange={(value) => field.onChange(value)} value={field.value} onBlur={field.onBlur} />
            )}
          />

        </div>

        <Button variant="primary" onClick={() => handleSubmit(onSubmit)()}>Buscar</Button>
      </div>

    </div>
  )
}
