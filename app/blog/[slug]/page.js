import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';
import Link from 'next/link';
import styles from './BlogPost.module.css'; // Import the new CSS module

export async function generateStaticParams() {
  const postsDirectory = path.join(process.cwd(), 'posts');
  const filenames = fs.readdirSync(postsDirectory);

  // Only return .md files
  return filenames
    .filter((filename) => filename.endsWith('.md'))
    .map((filename) => ({
      slug: filename.replace('.md', ''),
    }));
}

export default async function BlogPost({ params }) {
  const { slug } = params;
  const postsDirectory = path.join(process.cwd(), 'posts');
  const postPath = path.join(postsDirectory, `${slug}.md`);
  const fileContent = fs.readFileSync(postPath, 'utf8');
  const { data, content } = matter(fileContent);

  const processedContent = await remark().use(html).process(content);
  const htmlContent = processedContent.toString();

  return (
    <div className={styles.container}>
      <article className={styles.article}>
        <h1 className={styles.title}>{data.title}</h1>
        <p className={styles.date}>{data.date}</p>
        <div
          className={styles.content}
          dangerouslySetInnerHTML={{ __html: htmlContent }}
        />
      </article>

      <div className={styles.back}>
        <Link href="/blog">
          <a>← Back to Blog</a>
        </Link>
      </div>
    </div>
  );
}
