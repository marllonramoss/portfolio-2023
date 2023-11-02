interface SectionTitleProps {
    title: string
    subtitle: string
    className?: string
}

export default function SectionTitle(props:SectionTitleProps) {
    return (
        <div className={`flex flex-col gap-4 ${props.className ?? ''}`}>
            <span className="font-mono text-sm text-emerald-400">{`../${props.subtitle}`}</span>
            <h3 className="text-3xl font-medium">{props.title}</h3>
        </div>
    )
}