'use client'
import Button from "@/components/Button";
import CurrencyInput from "@/components/CurrencyInput";
import DatePicker from "@/components/DatePicker";
import Input from "@/components/Input";

export default function TripSearch() {
  return (
    <div className="container mx-auto bg-search-background bg-no-repeat bg-center bg-cover p-5">
      <h1 className="font-semibold text-2xl text-primaryDark text-center">Encontre sua próxima <span className="text-primary">viagem!</span></h1>

      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" className="text-primaryDark" />
        <div className="flex flex-row gap-4">
          <DatePicker className="w-full" placeholderText="Data de ida" onChange={() => {}} />
          <CurrencyInput placeholder="Orçamento" />
        </div>
        <Button>Buscar</Button>
      </div>

    </div>
  )
}
