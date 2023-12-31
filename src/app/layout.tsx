import { NextAuthProvider } from '@/providers/auth'
import './globals.css'
import { Poppins } from 'next/font/google'
import Header from '../components/Header'
import Footer from '@/components/Footer'
import ToastProvider from '@/providers/toast'

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '500', '600', '700'] })

export const metadata = {
  title: 'FSW Trips',
  description: 'Encontre as melhores viagens em um só lugar!',
  icon: '/icon.png',
}

export default function RootLayout({
  children
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <link rel="icon" href="/icon.png" sizes="any" />
      <body className={poppins.className}>
        <NextAuthProvider>
          <ToastProvider>
            <div className='flex flex-col h-screen'>
              <div className='h-[93px]'>
                <Header />
              </div>
              <div className='flex-1'>
                {children}
              </div>
              <Footer />
            </div>
          </ToastProvider>
        </NextAuthProvider>
      </body>
    </html>
  )
}
