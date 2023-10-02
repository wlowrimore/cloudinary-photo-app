import './globals.css'
import { Poppins } from 'next/font/google'
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"

const poppins = Poppins({ subsets: ['latin'], weight: ['400', '600', '800'] })

export const metadata = {
  title: 'Create Next App',
  description: 'Generated by create next app',
}

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={poppins.className}>
        <div className="border-b">
          <div className="flex h-16 items-center px-4 container mx-auto">
            FAMILY CONNECT
            <div className="ml-auto flex items-center space-x-4">
              <Avatar>
                <AvatarImage src="https://github.com/shadcn.png" />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </div>
          </div>
        </div>
        {children}
      </body>
    </html>
  )
}
