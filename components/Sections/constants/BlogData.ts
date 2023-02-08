export interface BlogType {
    image: string;
    title: string;
}

export const BlogData: BlogType[] = [
    {
        image: '/img/BlogSec1.png',
        title: 'Our Latest Blog Posts',
    },
    {
        image: '/img/BlogSec2.png',
        title: 'Popular Products',
    },
    {
        image: '/img/BlogSec3.png',
        title: 'What People Are Saying',
    }
]

export interface MoreBlogType {
    id: number;
    header: string;
    content: string;
    author: string;
}

export const MoreBlogData: MoreBlogType[] = [
    {
        id: 1,
        header: 'The Birth of Comfort',
        content: `So I'm sitting with Dina Rabinowitz, another instructor of Just Giving Birth, at a work meeting in a coffee shop, and suddenly an excited girl comes up to us`,
        author: 'Avishag Oren'
    },
    {
        id: 2,
        header: 'Whose Birth Is It?',
        content: `Last night, during a private lesson I was teaching, the pregnant mother continually referred to “Baby Boom”, her source of knowledge on everything about birth. For those who don’t know, “Baby Boom” is a reality show that follows couples through their classic pregnancy...`,
        author: 'Rebecca Rosenstein'
    },
    {
        id: 1,
        header: 'The Birth of Comfort',
        content: `So I'm sitting with Dina Rabinowitz, another instructor of Just Giving Birth, at a work meeting in a coffee shop, and suddenly an excited girl comes up to us`,
        author: 'Avishag Oren'
    },
    {
        id: 2,
        header: 'Whose Birth Is It?',
        content: `Last night, during a private lesson I was teaching, the pregnant mother continually referred to “Baby Boom”, her source of knowledge on everything about birth. For those who don’t know, “Baby Boom” is a reality show that follows couples through their classic pregnancy...`,
        author: 'Rebecca Rosenstein'
    },
    {
        id: 1,
        header: 'The Birth of Comfort',
        content: `So I'm sitting with Dina Rabinowitz, another instructor of Just Giving Birth, at a work meeting in a coffee shop, and suddenly an excited girl comes up to us`,
        author: 'Avishag Oren'
    }
]