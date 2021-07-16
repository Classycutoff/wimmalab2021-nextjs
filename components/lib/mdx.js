import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

const root = process.cwd();

export function getAllGuideIds(dir) {
  const filenames = fs.readdirSync(path.join(root, 'guides', `${dir}`));

  return filenames.map((filename) => {
    return {
      params: {
        guideId: filename.replace(/\.mdx$/, '')
      }
    };
  });
}

export async function getFileBySlug(type, slug) {
  const source = slug
    ? fs.readFileSync(path.join(root, 'guides', type, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'data', `${type}.mdx`), 'utf8');

  const { data, content } = matter(source);

  const mdxSource = await serialize(content);
  return {
    mdxSource,
    frontMatter: {
      ...data
    }
  };
}
