import CodeMirror from '@uiw/react-codemirror';
import { langs } from '@uiw/codemirror-extensions-langs';
import { useState } from 'react';

type MarkdownProps = {
  generateReviewHandler: (code: string) => void;
}

const Editor = ({ generateReviewHandler }: MarkdownProps) => {
  const [code, setCode] = useState('');
  
  return (
    <>
      <div className='w-1/2 text-xl relative h-screen overflow-auto'>
        <CodeMirror height='100vh' value={code} extensions={[langs.tsx()]} theme='dark' onChange={setCode} />
        <button className='bg-green-600 text-white text-sm p-2 absolute bottom-1 right-1 rounded cursor-pointer hover:bg-green-700 disabled:opacity-60  disabled:pointer-events-none disabled:cursor-not-allowed' onClick={() => { generateReviewHandler(code) }}>Generate Review</button>
      </div>

    </>

  )
}

export default Editor