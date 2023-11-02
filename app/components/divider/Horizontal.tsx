interface HorizontalDividerProps {
    className?: string
}

export default function HorizontalDivider(props: HorizontalDividerProps) {
    return (
        <div className={`w-full my-8 border-b border-b-gray-800 ${props.className ?? ''}`}></div>
    )
}