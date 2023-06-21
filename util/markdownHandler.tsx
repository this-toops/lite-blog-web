import React from 'react'
import ReactMarkdown from 'react-markdown'
import ReactDom from 'react-dom'
import remarkGfm from 'remark-gfm'


interface Param {
    url: string;
}

export default function readMarkdown({url}: Param) {
    const response = fetch(url)
        .then(resp => resp.text())
        .catch(error => console.error(error));
    return <ReactMarkdown remarkPlugins={[remarkGfm]}>response</ReactMarkdown>
}



