'use client';

import MarkdownPreview from '@uiw/react-markdown-preview';

type MarkdownProps = {
    review: string;
}

const Markdown = ({ review }: MarkdownProps) => {

    return (
        <div className='w-1/2 overflow-auto h-screen'>
            <MarkdownPreview source={review} style={{ padding: 16,}} />
        </div>
    )
}

export default Markdown