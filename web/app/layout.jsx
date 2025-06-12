import { Header } from '@/components/layout/header'
import Footer from '@/components/layout/footer'
import './globals.css'
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import 'swiper/css/free-mode';
import { Playfair_Display, Newsreader, Poppins,PT_Serif ,Inter, Noto_Serif  } from 'next/font/google'

const playfair = Playfair_Display({
  subsets: ['latin'],
  variable: '--font-playfair',
  display: 'swap',
})
const newsreader = Newsreader({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-newsreader',
  display: 'swap',
})

const ptSerif = PT_Serif({
  subsets: ['latin'],
  weight: [ '400', '700'], 
  variable: '--font-pt-serif',
  display: 'swap',
})

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['300', '400', '500', '600', '700'],
  variable: '--font-poppins',
  display: 'swap',
})
const notoSerif = Noto_Serif({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700']
  display: 'swap',
})

export const metadata = {
  title: 'v0 App',
  description: 'Created with v0',
  generator: 'v0.dev',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={`${playfair.variable} ${newsreader.variable} ${poppins.variable} ${ptSerif.variable} ${inter.variable} ${notoSerif.variable}`}>
      <body>
      <Header />

      {children}
      <Footer/>
      </body>
    </html>
  )
}