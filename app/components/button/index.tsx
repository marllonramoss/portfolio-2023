import { ButtonHTMLAttributes } from "react"

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: any
    className?: string
}

export default function Button(props: ButtonProps) {
    return (
        <button
        {...props}
        className={`
         ${props.className ?? ''}
         bg-emerald-600 py-3 px-4 rounded-lg text-gray-50 flex items-center justify-center gap-2 hover:bg-emerald-500 transition-all disabled:opacity-50
         `}
        >
            {props.children}
        </button>
    )
}