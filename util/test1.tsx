import React, {useEffect, useState} from 'react';
import ReactMarkdown from 'react-markdown';//引入
//import md from './README.md';

interface Param {
    url: string;
}

const App = ({url}: Param) => {

    const [mdContent, setMdContent] = useState('')

    useEffect(() => {
        //url是markdown文件的路径，我在项目中是放到了media文件夹下，示例：url为'/media/xx.md'
        fetch(url)
            .then(res => res.text())
            .then(text => setMdContent(text));

    }, []);

    return (
        <ReactMarkdown
            className='markdown-body'
            children={mdContent}
        />
    )
}

export default App