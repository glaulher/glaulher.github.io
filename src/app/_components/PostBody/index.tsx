'use client';

import markdownStyles from '../markdown-styles.module.css';
import { useEffect } from 'react';
import hljs from 'highlight.js';
import 'highlight.js/styles/github-dark.css';

type Props = { content: string };

export function PostBody({ content }: Props) {
  useEffect(() => {
    document.querySelectorAll('pre code').forEach((block) => {
      hljs.highlightElement(block as HTMLElement);
      block.parentElement?.classList.add(
        'shadow-lg',
        'rounded-lg',
        'p-2',
        'bg-gray-900',
      ); // add css in block code
    });
  }, [content]);
  return (
    <div className="max-w-2xl mx-auto">
      {' '}
      <div
        className={markdownStyles['markdown']}
        dangerouslySetInnerHTML={{ __html: content }}
      />{' '}
    </div>
  );
}
