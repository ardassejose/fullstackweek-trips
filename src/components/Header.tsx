'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/navigation"
import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"

export default function Header() {
  const [menuIsOpen, setMenuIsOpen] = useState(false)
  const { status, data } = useSession()
  const router = useRouter()

  const handleLoginClick = () => signIn()
  const handleLogoutClick = () => signOut()

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen)

  return (
    <div className="container mx-auto h-[93px] flex justify-between items-center p-3">

      <Link href={'/'}>
        <div className="relative h-[32px] w-[183px]">
          <Image src="/logo.png" alt="Fullstack Week" fill />
        </div>
      </Link>
      {status === "unauthenticated" && (
        <button className="text-primary text-sm font-semibold" onClick={handleLoginClick}>Login</button>
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 border border-solid border-graySecondary p-2 rounded-full relative cursor-pointer" onClick={handleMenuClick}>
          <AiOutlineMenu size={16} className="text-primary text-xl" />
          <Image src={data.user?.image!} alt={data.user.name!} width={32} height={32} className="rounded-full shadow-sm" />
          {menuIsOpen && (
            <div className="z-10 absolute w-[150px] h-[100px] top-14 right-2 border-primaryLighter bg-white shadow-md rounded-lg flex flex-col justify-center items-center transition-all divide-y-2 divide-graySecondary space-y-2 border animate-topIn">
              <Link href={"/my-trips"}><button className="text-primary text-sm font-semibold">Minhas viagens</button></Link>
              <button onClick={handleLogoutClick} className="text-primary text-sm font-semibold pt-2">Logout</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}
