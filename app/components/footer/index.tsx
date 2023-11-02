import { IoMdHeart } from 'react-icons/io'

export default function Footer() {
    return (
        <footer className="h-14 w-full flex items-center justify-center bg-gray-950">
            <span className='flex items-center gap-1.5 text-xs sm:text-sm font-mono text-gray-400'>
                Made by
                <IoMdHeart size={13} className='text-emerald-400'/>
                by  
                <strong className='font-medium'>Marllon Ramos</strong>
            </span>
        </footer>
    )
}