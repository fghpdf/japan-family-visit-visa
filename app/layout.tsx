'use client'

import './globals.css'
import { Inter } from 'next/font/google'
import { NextUIProvider} from "@nextui-org/react";

const inter = Inter({ subsets: ['latin'] })
export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className='light'>
        <body>
          <NextUIProvider>
            {children}
          </NextUIProvider>
        </body>
      </html>
  )
}
