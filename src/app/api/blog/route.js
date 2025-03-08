import * as cheerio from 'cheerio';

export async function GET() {
    const $ = await cheerio.fromURL('https://raghupadma.substack.com/archive');
    const $blogPosts = $('body').find('.container-Qnseki')

    let blogPostsResponse = []

    $blogPosts.map((blog) => {
        if (blog != $blogPosts.length-1) {
            blogPostsResponse.push({
                link: $blogPosts[blog].firstChild.firstChild.firstChild.attribs.href,
                title: $blogPosts[blog].firstChild.firstChild.firstChild.children[0].data,
                description: $blogPosts[blog].firstChild.children[1].firstChild.children[0].data,
                date: $blogPosts[blog].firstChild.children[2].firstChild.attribs.datetime
            })
        }
    })

    return Response.json({ blogPostsResponse })
}