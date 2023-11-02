import NextLink from 'next/link'
import { ComponentProps } from 'react'

interface LinkProps extends ComponentProps<typeof NextLink> {
children: any
className?: string
}

export default function Link(props: LinkProps) {
    return (
        <NextLink {...props} className={` flex items-center gap-2 text-gray-300 text-sm hover:text-emerald-500 transition-colors ${props.className ?? ''}`}>
        {props.children}
        </NextLink>
    )
}