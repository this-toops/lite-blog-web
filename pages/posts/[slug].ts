import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import marked from 'marked';

export default function Post({ content, data }) {
    console.log('content', content)
    console.log('data', data)
    
  return (
    <div>
        <h1>{data?.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}

export async function getStaticPaths() {
  const files = fs.readdirSync('posts');

  const paths = files.map((filename) => ({
    params: {
      slug: filename.replace('.md', ''),
    },
  }));

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const { slug } = params;
  const markdownWithMetadata = fs.readFileSync(
    path.join('posts', slug + '.md'),
    'utf-8'
  );

  const parsedMarkdown = matter(markdownWithMetadata);

  const htmlString = marked(parsedMarkdown.content);

  return {
    props: {
      data: parsedMarkdown.data,
      content: htmlString,
    },
  };
}