import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';

const postsDirectory = path.join(process.cwd(), 'posts');

export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory); // Ensure this points to the correct directory

  return filenames.map((filename) => ({
    slug: filename.replace('.markdown', ''),
  }));
}

export default function BlogPost({ params }) {
  const { slug } = params;
  const postPath = path.join(postsDirectory, `${slug}.markdown`);
  const fileContent = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(fileContent);

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: content }} />
    </div>
  );
}
