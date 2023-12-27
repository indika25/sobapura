import { Inter } from 'next/font/google'
import './globals.css'
import Header from '@/components/layout/Header'
import Footer from '@/components/layout/Footer'
import { AuthProvider } from './Providers'

const inter = Inter({ subsets: ['latin'] })

export const metadata = {
  title: 'SOBAPURA',
  description: 'Green Sri Lanka',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
      <AuthProvider>
        <Header/>
<main className='max-w-6cl  mx-auto p-2 '>
  
  {children}
 

</main>
</AuthProvider>
<Footer/>

      </body>
    </html>
  )
}
