import Image from "next/image";

export default function QuickSearch() {
  return (
    <div className="container mx-auto p-5">
      <div className="flex items-center gap-5">
        <div className="w-full h-[2px] bg-graySecondary"></div>
        <h2 className="font-medium whitespace-nowrap text-grayPrimary">Tente pesquisar por</h2>
        <div className="w-full h-[2px] bg-graySecondary"></div>
      </div>

      <div className="flex w-full justify-between mt-4">
        <div className="flex flex-col items-center gap-1">
          <Image src="/hotel-icon.png" alt="Fullstack Week" width={25} height={25} />
          <p className="text-sm text-grayPrimary">Hotel</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image src="/cottage-icon.png" alt="Fullstack Week" width={25} height={25} />
          <p className="text-sm text-grayPrimary">Chalé</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image src="/inn-icon.png" alt="Fullstack Week" width={25} height={25} />
          <p className="text-sm text-grayPrimary">Pousada</p>
        </div>

        <div className="flex flex-col items-center gap-1">
          <Image src="/farm-icon.png" alt="Fullstack Week" width={25} height={25} />
          <p className="text-sm text-grayPrimary">Fazenda</p>
        </div>
      </div>

    </div>
  )
}
