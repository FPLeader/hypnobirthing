export interface BlogType {
    image: string,
    title: string,
    link: string,
}

export const BlogData: BlogType[] = [
    {
        image: '/img/BlogSec1.png',
        title: 'Our Latest Blog Posts',
        link: '/article'
    },
    {
        image: '/img/BlogSec2.png',
        title: 'Popular Products',
        link: '/shop'
    },
    {
        image: '/img/BlogSec3.png',
        title: 'What People Are Saying',
        link: '/reviews'
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