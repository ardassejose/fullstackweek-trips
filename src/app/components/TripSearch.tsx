import Input from "@/components/Input";

export default function TripSearch() {
  return (
    <div className="container mx-auto">
      <h1 className="font-semibold text-2xl text-primaryDark text-center">Encontre sua próxima <span className="text-primary">viagem!</span></h1>
      <div className="flex flex-col gap-4 mt-5">
        <Input placeholder="Onde você quer ir?" />
        <div className="flex flex-row gap-4">
          <Input placeholder="Data de ida" />
          <Input placeholder="Orçamento" />
        </div>
      </div>
    </div>
  )
}
