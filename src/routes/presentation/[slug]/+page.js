
/* /presentation/[slug]/+page.js

  retrieve an individual markdown file
  Mdsvex did most of the magic
*/

export async function load({ params }) {
  const post = await import(`../md/${params.slug}.md`);
  return {
    content: post.default,
    meta: post.metadata,
    pageTitle: post.metadata.title
 };
}
