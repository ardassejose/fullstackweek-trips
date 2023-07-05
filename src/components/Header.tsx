'use client'
import { signIn, signOut, useSession } from "next-auth/react"
import Image from "next/image"
import { useState } from "react"
import { AiOutlineMenu } from "react-icons/ai"

export default function Header() {
  const { status, data } = useSession()

  const [menuIsOpen, setMenuIsOpen] = useState(false)

  const handleLoginClick = () => signIn()
  const handleLogoutClick = () => signOut()

  const handleMenuClick = () => setMenuIsOpen(!menuIsOpen)

  return (
    <div className="container mx-auto h-[93px] flex justify-between items-center">
      <div className="relative h-[32px] w-[183px]">
        <Image src="/logo.png" alt="Fullstack Week" fill />
      </div>
      {status === "unauthenticated" && (
        <button className="text-primary text-sm font-semibold" onClick={handleLoginClick}>Login</button>
      )}

      {status === "authenticated" && data.user && (
        <div className="flex items-center gap-3 border border-solid border-graySecondary p-2 rounded-full relative cursor-pointer" onClick={handleMenuClick}>
          <AiOutlineMenu size={16} className="text-primary text-xl" />
          <Image src={data.user?.image!} alt={data.user.name!} width={32} height={32} className="rounded-full shadow-sm" />
          {menuIsOpen && (
            <div className="absolute top-14 left-0 w-full h-full border-primaryLighter bg-white shadow-md rounded-full flex flex-col justify-center items-center transition-all">
              <button onClick={handleLogoutClick} className="text-primary text-sm font-semibold">Logout</button>
            </div>
          )}
        </div>
      )}
    </div>
  )
}