import { RichText as CMSRichText } from '@graphcms/rich-text-react-renderer'
import { ComponentProps } from 'react'

interface RichTextProps extends ComponentProps<typeof CMSRichText>{

}

export default function RichText (props: RichTextProps) {
    return (
        <CMSRichText 
        {...props}
        renderers={{
            bold: ({ children }) => (
                <b className='text-gray-50 font-medium'>{children}</b>
            )
        }}
        />
    )
}