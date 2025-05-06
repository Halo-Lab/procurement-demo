import { Search } from "lucide-react"
import Image from "next/image"
import Link from "next/link"
import { QuestionIcon } from '../assets/icons/QuestionIcon'
import { CartIcon } from '../assets/icons/CartIcon'
export function Header() {
  return (
    <header className="fixed top-0 left-0 right-0 h-13 bg-[#061120] border-b border-gray-200 flex items-center px-4 z-10">
      <div className="flex items-center gap-4 w-full">
        <Link href="/" className="flex items-center gap-2">
          <div className="flex items-center justify-center">
          <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
<g clipPath="url(#clip0_8666_976)">
<path d="M13.3334 10.0002H6.66675M6.66675 10.0002L9.58341 12.9168M6.66675 10.0002L9.58341 7.0835" stroke="#737D8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
<path d="M10.0001 18.3332C14.6024 18.3332 18.3334 14.6022 18.3334 9.99984C18.3334 5.39746 14.6024 1.6665 10.0001 1.6665C5.39771 1.6665 1.66675 5.39746 1.66675 9.99984C1.66675 14.6022 5.39771 18.3332 10.0001 18.3332Z" stroke="#737D8C" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
</g>
<defs>
<clipPath id="clip0_8666_976">
<rect width="20" height="20" fill="white"/>
</clipPath>
</defs>
</svg>
          </div>
          <span className="font-bold text-lg text-white">ARBOUR</span>
        </Link>

        <div className="flex-1 max-w-xl mx-auto flex items-center bg-[#252D39] rounded-full justify-between pl-3 pr-4 py-2">
          <div className="relative flex items-center">
            <div className="inset-y-0 left-0 flex items-center pointer-events-none">
              <Search className="h-4 w-4 text-gray-400" />
            </div>
            <input
              type="search"
              className="block w-full rounded-full pl-2 pr-4 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 text-[#9AA5B3] placeholder:text-[#9AA5B3]"
              placeholder="Type to search"
            />
          </div>
          <Link href="/" className="text-sm text-[#F7F7F7] underline">
            Advanced Search
          </Link>
        </div>

        <div className="flex items-center gap-4">

          <button className="text-gray-500 hover:text-gray-700">
            <QuestionIcon />
          </button>
          <button className="text-gray-500 hover:text-gray-700">
            <CartIcon />
          </button>
          <div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
            <Image
              src="/avatar.jpg"
              alt="User profile"
              width={32}
              height={32}
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </header>
  )
}
