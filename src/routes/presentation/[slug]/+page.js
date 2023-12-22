export async function load({ params }) {
  const post = await import(`../md/${params.slug}.md`);
  return {
    content: post.default,
    meta: post.metadata
 };
}
