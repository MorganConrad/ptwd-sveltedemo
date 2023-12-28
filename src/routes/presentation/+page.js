
/** /presentation/+page.js

   incantation to load all .md files in presentation
   import.meta.glob is a vite thing...
 */

export async function load() {
  const allPostFiles = import.meta.glob('/src/routes/presentation/md/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const posts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();

      return {
        meta: metadata,
        path: path.split('/').at(-1)?.replace('.md', '')
      };
    })
  );

  return {
    posts,
    pageTitle: "Presentation"
  };

}
