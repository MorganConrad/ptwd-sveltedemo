
/* @see https://joshcollinsworth.com/blog/build-static-sveltekit-markdown-blog#add-an-rss-feed */

export function rss(posts, site) {

let lead = `<?xml version="1.0" encoding="UTF-8" ?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
<channel>
<title>${site.title}</title>
<description>${site.description}</description>
<link>${site.url}</link>
<atom:link href="${site.url}/rss.xml" rel="self" type="application/rss+xml"/>\n`;

let postsRSS = posts.map(function(post) {
return `<item>
<guid isPermaLink="true">${site.url}/blog/${post.path}</guid>
<title>${post.meta.title}</title>
<link>${site.url}/blog/${post.path}</link>
<description>${post.meta.title}</description>
<pubDate>${new Date(post.meta.date).toUTCString()}</pubDate>
</item>`
});

  return lead + postsRSS.join('') + '\n</channel></rss>';
}

