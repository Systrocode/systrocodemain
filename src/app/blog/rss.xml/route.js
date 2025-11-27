import { blogPosts } from '@/data';

export async function GET() {
  const siteURL = 'https://systrocode.tech';
  
  const rssXml = `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom" xmlns:content="http://purl.org/rss/1.0/modules/content/">
  <channel>
    <title>Systrocode Blog</title>
    <description>Expert insights on web development, digital marketing, data analytics, AI automation, and cybersecurity</description>
    <link>${siteURL}/blog</link>
    <language>en-US</language>
    <lastBuildDate>${new Date().toUTCString()}</lastBuildDate>
    <atom:link href="${siteURL}/blog/rss.xml" rel="self" type="application/rss+xml"/>
    <managingEditor>contact@systrocode.tech (Systrocode)</managingEditor>
    <webMaster>contact@systrocode.tech (Systrocode)</webMaster>
    <category>Technology</category>
    <category>Web Development</category>
    <category>Digital Marketing</category>
    <category>Data Analytics</category>
    <category>AI Automation</category>
    <category>Cybersecurity</category>
    
    ${blogPosts
      .map(
        (post) => `
    <item>
      <title><![CDATA[${post.title}]]></title>
      <description><![CDATA[${post.excerpt}]]></description>
      <link>${siteURL}/blog/${post.slug}</link>
      <guid isPermaLink="true">${siteURL}/blog/${post.slug}</guid>
      <pubDate>${new Date(post.date).toUTCString()}</pubDate>
      <author>contact@systrocode.tech (${post.author || 'Systrocode'})</author>
      <category><![CDATA[${post.category}]]></category>
      <content:encoded><![CDATA[
        <p>${post.excerpt}</p>
        <img src="${siteURL}${post.image}" alt="${post.title}" style="max-width: 100%; height: auto;" />
        ${post.content || ''}
        <p><a href="${siteURL}/blog/${post.slug}">Read the full article on Systrocode</a></p>
      ]]></content:encoded>
      ${post.tags ? post.tags.map(tag => `<category><![CDATA[${tag}]]></category>`).join('\n      ') : ''}
    </item>`
      )
      .join('')}
  </channel>
</rss>`;

  return new Response(rssXml, {
    headers: {
      'Content-Type': 'application/xml',
      'Cache-Control': 'public, max-age=3600',
    },
  });
}
