import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import './globals.css'
import NavigationBar from './NavigationBar'
import { Providers } from './providers'
import { ColorModeScript } from '@chakra-ui/react'
import theme from './theme'

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={inter.className}>
        {/* <NavigationBar/> */}
        <main className='p-5'>
             <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Providers>{children}</Providers>
        </main>
        </body>
    </html>
  )
}
