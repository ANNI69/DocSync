import { cn } from '@/lib/utils'
import Image from 'next/image'
import Link from 'next/link'

const Header = ({ children, className }: HeaderProps) => {
  return (
    <div className={cn("header flex items-center", className)}>
      <Link href='/' className="md:flex-1 flex items-center">
        <Image 
          src="/assets/icons/logo.png"
          alt="Logo with name"
          width={80}
          height={80}
          className="hidden md:block"
        />
        <Image 
          src="/assets/icons/logo.png"
          alt="Logo"
          width={32}
          height={32}
          className="mr-2 md:hidden"
        />
        <span className="font-sans text-lg md:text-2xl font-semibold ml-2">Doc-Sync</span>
      </Link>
      {children}
    </div>
  )
}

export default Header