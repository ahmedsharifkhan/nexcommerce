import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

// Hardcoded posts directory path
const postsDirectory = path.join(process.cwd(), 'posts');

// Fetch the slugs dynamically (this runs at build time)
export async function generateStaticParams() {
  const filenames = fs.readdirSync(postsDirectory);

  return filenames.map((filename) => ({
    slug: filename.replace('.md', ''), // Remove the .md extension
  }));
}

// The main component for rendering the blog post
export default async function BlogPost({ params }) {
  const { slug } = params;
  const postPath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(postPath, 'utf8');

  const { data, content } = matter(fileContent); // Extract frontmatter and content
  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return (
    <div>
      <h1>{data.title}</h1>
      <p>{data.date}</p>
      <div dangerouslySetInnerHTML={{ __html: htmlContent }} />
    </div>
  );
}
