import fs from 'fs';
import matter from 'gray-matter';
import { serialize } from 'next-mdx-remote/serialize';
import path from 'path';

// Gets the root of the server
const root = process.cwd();

// Gets all the folders inside the guides folder,
// for accessing the names of all the guides and their information
export const getAllFolders = () => {
  const directoryPath = path.join(root, 'guides');

  return fs
    .readdirSync(directoryPath, { withFileTypes: true })
    .filter((dirent) => dirent.isDirectory())
    .map((dirent) => dirent.name);
};

// Gets files inside a specific directory inside guides
export const getAllGuideIds = (guide) => {
  const files = fs.readdirSync(path.join(root, 'guides', `${guide}`));

  const allFiles = files.filter((file) => file.includes('.mdx') && !file.includes('index.mdx'));

  return allFiles.map((file) => {
    return file.replace(/\.mdx$/, '');
  });
};

/*
 The highlevel function, which get all of the folders and their contentnames to getStaticPaths
 inside pages/guides/[guideId]/[chapterId].js in the form of:

 {
   params: {
     chapterId: [chapterId]_slug,
     guideId: [guideId]_slug
   }
 }
*/
export const getAllStaticIds = () => {
  const guideDirs = getAllFolders();

  const newGuideDirs = guideDirs.map((guide) => {
    const mdxFiles = getAllGuideIds(guide);

    return mdxFiles.map((chapter) => {
      return {
        params: {
          chapterId: chapter,
          guideId: guide
        }
      };
    });
  });
  const allPaths = [];

  /*
  The newGuideDirs is in the form of :
  [
    [
      First Guide params...
    ],
    [
      Second Guide params...
    ]
  ]
  This next double mapping is made because of that
  */
  newGuideDirs.map((guideDir) => {
    guideDir.map((chapter) => {
      allPaths.push(chapter);
    });
  });
  return allPaths;
};

/*
 Gets the specific contents of a specific file in a specific folder inside the guides folder.
 This is for rendering mdx so all of the contents should be markdown.
 It also gets all of the frontmatter out of it, sans the graymatter plugin.
 */
export const getFileBySlug = async (directory, slug) => {
  console.log('getFileBySlug directory ->', directory, 'slug ->', slug);
  const source = slug
    ? fs.readFileSync(path.join(root, 'guides', directory, `${slug}.mdx`), 'utf8')
    : fs.readFileSync(path.join(root, 'guides', `${directory}`, 'index.mdx'), 'utf8');

  const { data, content } = matter(source);

  const mdxSource = await serialize(content);
  return {
    mdxSource,
    frontMatter: {
      ...data
    }
  };
};
