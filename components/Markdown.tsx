'use client';

import MarkdownPreview from '@uiw/react-markdown-preview';

type MarkdownProps = {
    review: string;
}

const Markdown = ({ review }: MarkdownProps) => {

    return (
        <div className='w-1/2'>
            <MarkdownPreview source={review} style={{ padding: 16, backgroundColor: 'black', height: '100%' , color:'white'}} />
        </div>
    )
}

export default Markdown