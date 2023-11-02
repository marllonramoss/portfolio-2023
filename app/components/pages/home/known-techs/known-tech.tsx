import { getRelativeTimeString } from "@/app/utils/get-relative-time"
import { ReactNode } from "react"

interface KnownTechProps {
    tech: {
        icon: ReactNode
        name: string
        startDate: string
    }
}

export default function KnownTech(props: KnownTechProps) {

    const relativeTime = getRelativeTimeString(
        new Date(props.tech.startDate),
         'pt-BR')?.replace('há ', '')

    return (
        <div className="p-6 rounded-lg bg-gray-600/20 text-gray-500 flex flex-col gap-2 hover:text-emerald-500 hover:bg-gray-600/30 transition-all">
            <div className="flex items-center justify-between">
                <p className="font-medium">{props.tech.name}</p>
                {props.tech.icon}
            </div>

            <span>{relativeTime} de experiência</span>
        </div>
    )
}