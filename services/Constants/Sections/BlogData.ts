export interface BlogType {
    image: string,
    title: string,
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

export interface SmallBlogType {
    id: number,
    image: string,
    header: string,
    content: string,
    author: string,
}

export const SmallBlogsData: SmallBlogType[] = [
    {
        id: 1,
        image: '/img/smallpic1.png',
        header: 'The Birth of Comfort',
        content: `So I'm sitting with Dina Rabinowitz, another instructor of Just Giving Birth, at a work meeting in a coffee shop, and suddenly an excited girl comes up to us`,
        author: 'Avishag Oren'
    },
    {
        id: 2,
        image: '/img/smallpic2.png',
        header: 'Whose Birth Is It?',
        content: `Last night, during a private lesson I was teaching, the pregnant mother continually referred to “Baby Boom”, her source of knowledge on everything about birth. For those who don’t know, “Baby Boom” is a reality show that follows couples through their classic pregnancy...`,
        author: 'Rebecca Rosenstein'
    },
    {
        id: 3,
        image: '/img/smallpic3.png',
        header: 'The Birth of Comfort',
        content: `So I'm sitting with Dina Rabinowitz, another instructor of Just Giving Birth, at a work meeting in a coffee shop, and suddenly an excited girl comes up to us`,
        author: 'Avishag Oren'
    },
    {
        id: 4,
        image: '/img/smallpic4.png',
        header: 'Whose Birth Is It?',
        content: `Last night, during a private lesson I was teaching, the pregnant mother continually referred to “Baby Boom”, her source of knowledge on everything about birth. For those who don’t know, “Baby Boom” is a reality show that follows couples through their classic pregnancy...`,
        author: 'Rebecca Rosenstein'
    },
    {
        id: 5,
        image: '/img/smallpic5.png',
        header: 'The Birth of Comfort',
        content: `So I'm sitting with Dina Rabinowitz, another instructor of Just Giving Birth, at a work meeting in a coffee shop, and suddenly an excited girl comes up to us`,
        author: 'Avishag Oren'
    }
]

export interface SupportCardType {
    image: string,
    title: string,
    link: string,
}

export const SupportCards: SupportCardType[] = [
    {
        image: '/img/BlogSec4.png',
        title: 'Birth Professionals Support HypnoBirthing — One Day Workshop',
        link: '/oneday',
    },
    {
        image: '/img/BlogSec5.png',
        title: 'Pashut Laledet HypnoBirthing Educator Training',
        link: '/pashut',
    },
]