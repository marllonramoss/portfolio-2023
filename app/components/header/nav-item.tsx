import Link from "next/link";
import { usePathname } from 'next/navigation'

interface NavItemsProps {
    label: string,
    href: string
    className?: string
}

export default function NavItem(props:NavItemsProps) {
        const pathname = usePathname()

        const isActive = pathname === props.href

    return (
        <Link href={props.href} className={`text-gray-400 flex items-center gap-2 font-medium font-mono ${props.className ?? ''} `}>
            <span className="text-emerald-400">#</span>
            {props.label}
        </Link>
    )
}