
/** /presentation/_page.js    load all md files in presentation */

export async function load() {
  const allPostFiles = import.meta.glob('/src/routes/presentation/md/*.md');
  const iterablePostFiles = Object.entries(allPostFiles);

  const posts = await Promise.all(
    iterablePostFiles.map(async ([path, resolver]) => {
      const { metadata } = await resolver();
      // const postPath = path.path.slice(11, -3);

      return {
        meta: metadata,
        path: path.split('/').at(-1)?.replace('.md', '')
      };
    })
  );

  return { posts };

}
