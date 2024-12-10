'use client';

import dynamic from 'next/dynamic';
import { useFormContext, useWatch } from 'react-hook-form';
import 'react-quill-new/dist/quill.snow.css';
const ReactQuill = dynamic(() => import('react-quill-new'), { ssr: false });

interface IProps {
  name: string;
}

export default function ContentBox({ name }: IProps) {
  const { setValue } = useFormContext();
  const content = useWatch({ name });

  const modules = {
    toolbar: [
      [{ header: [1, 2, false] }],
      ['bold', 'italic', 'underline', 'strike', 'blockquote'],
      [
        { list: 'ordered' },
        { list: 'bullet' },
        { indent: '-1' },
        { indent: '+1' },
      ],
      ['link', 'image'],
      ['clean'],
    ],
  };

  const formats = [
    'header',
    'bold',
    'italic',
    'underline',
    'strike',
    'blockquote',
    'list',
    'bullet',
    'indent',
    'link',
    'image',
  ];

  return (
    <ReactQuill
      theme="snow"
      modules={modules}
      formats={formats}
      value={content}
      onChange={(value) => setValue(name, value)}
      className="w-full"
    />
  );
}
