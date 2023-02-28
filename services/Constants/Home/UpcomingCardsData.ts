export interface UpcomingCardType {
    id: number;
    image: string;
    title: number;
    header: string;
    content: string;
    author: string;
}

export const UpcomingCards: UpcomingCardType[] = [
    {
        id: 1,
        image: '/img/upcoming1.png',
        // image: '/img/teacher.png',
        title: Date.now(),
        header: 'Frontal Birth Preparation',
        content: 'Rehovot / Zoom',
        author: 'Dana Raichman and Avishag Oren'
    },
    {
        id: 2,
        image: '/img/upcoming2.png',
        // image: '/img/teacher.png',
        title: Date.now(),
        header: 'Frontal Birth Preparation',
        content: 'Rehovot / Zoom',
        author: 'Dana Raichman and Avishag Oren'
    },
    {
        id: 3,
        image: '/img/upcoming3.png',
        // image: '/img/teacher.png',
        title: Date.now(),
        header: 'Frontal Birth Preparation',
        content: 'Rehovot / Zoom',
        author: 'Dana Raichman and Avishag Oren'
    }
]