export interface CommunityCardType {
    image: string,
    name: string,
    description: string,
}

export const CommunityCards: CommunityCardType[] = [
    {
        image: '/img/teacher.png',
        name: 'Sharon Peled',
        description: 'Odim (near Netanya)'
    },
    {
        image: '/img/teacher.png',
        name: 'Sharon Peled',
        description: 'Odim (near Netanya)'
    },
    {
        image: '/img/teacher.png',
        name: 'Sharon Peled',
        description: 'Odim (near Netanya)'
    },
    {
        image: '/img/teacher.png',
        name: 'Sharon Peled',
        description: 'Odim (near Netanya)'
    },
    {
        image: '/img/teacher.png',
        name: 'Sharon Peled',
        description: 'Odim (near Netanya)'
    },
    {
        image: '/img/teacher.png',
        name: 'Sharon Peled',
        description: 'Odim (near Netanya)'
    },
    {
        image: '/img/teacher.png',
        name: 'Sharon Peled',
        description: 'Odim (near Netanya)'
    },
    {
        image: '/img/teacher.png',
        name: 'Sharon Peled',
        description: 'Odim (near Netanya)'
    },
    {
        image: '/img/teacher.png',
        name: 'Sharon Peled',
        description: 'Odim (near Netanya)'
    },
]

export interface BlogCardType {
    id: number,
    image: string,
    title: string,
    header: string,
    content: string,
    author: string,
}

export const BlogCards: BlogCardType[] = [
    {
        id: 1,
        image: '/img/birth.png',
        title: 'Birth story',
        header: 'I Did It!',
        content: 'I had two c-sections with my first two babies and then decided with baby number 3, I wanted to have a vaginal birth after two csections (vbac). The medical world says DON’T DO IT!!! Every doctor I talked to about having a VBAC said that the risks of a uterine rupture...',
        author: 'Sharon Peled'
    },
    {
        id: 2,
        image: '/img/teacher.png',
        title: 'Birth story',
        header: 'I Did It!',
        content: 'I had two c-sections with my first two babies and then decided with baby number 3, I wanted to have a vaginal birth after two csections (vbac). The medical world says DON’T DO IT!!! Every doctor I talked to about having a VBAC said that the risks of a uterine rupture...',
        author: 'Sharon Peled'
    },
    {
        id: 3,
        image: '/img/birth.png',
        title: 'Birth story',
        header: 'I Did It!',
        content: 'I had two c-sections with my first two babies and then decided with baby number 3, I wanted to have a vaginal birth after two csections (vbac). The medical world says DON’T DO IT!!! Every doctor I talked to about having a VBAC said that the risks of a uterine rupture...',
        author: 'Sharon Peled'
    },
    {
        id: 4,
        image: '/img/teacher.png',
        title: 'Birth story',
        header: 'I Did It!',
        content: 'I had two c-sections with my first two babies and then decided with baby number 3, I wanted to have a vaginal birth after two csections (vbac). The medical world says DON’T DO IT!!! Every doctor I talked to about having a VBAC said that the risks of a uterine rupture...',
        author: 'Sharon Peled'
    },
    {
        id: 5,
        image: '/img/birth.png',
        title: 'Birth story',
        header: 'I Did It!',
        content: 'I had two c-sections with my first two babies and then decided with baby number 3, I wanted to have a vaginal birth after two csections (vbac). The medical world says DON’T DO IT!!! Every doctor I talked to about having a VBAC said that the risks of a uterine rupture...',
        author: 'Sharon Peled'
    },
    {
        id: 6,
        image: '/img/teacher.png',
        title: 'Birth story',
        header: 'I Did It!',
        content: 'I had two c-sections with my first two babies and then decided with baby number 3, I wanted to have a vaginal birth after two csections (vbac). The medical world says DON’T DO IT!!! Every doctor I talked to about having a VBAC said that the risks of a uterine rupture...',
        author: 'Sharon Peled'
    },
    {
        id: 7,
        image: '/img/birth.png',
        title: 'Birth story',
        header: 'I Did It!',
        content: 'I had two c-sections with my first two babies and then decided with baby number 3, I wanted to have a vaginal birth after two csections (vbac). The medical world says DON’T DO IT!!! Every doctor I talked to about having a VBAC said that the risks of a uterine rupture...',
        author: 'Sharon Peled'
    },
    {
        id: 8,
        image: '/img/birth.png',
        title: 'Birth story',
        header: 'I Did It!',
        content: 'I had two c-sections with my first two babies and then decided with baby number 3, I wanted to have a vaginal birth after two csections (vbac). The medical world says DON’T DO IT!!! Every doctor I talked to about having a VBAC said that the risks of a uterine rupture...',
        author: 'Sharon Peled'
    },
    {
        id: 9,
        image: '/img/birth.png',
        title: 'Birth story',
        header: 'I Did It!',
        content: 'I had two c-sections with my first two babies and then decided with baby number 3, I wanted to have a vaginal birth after two csections (vbac). The medical world says DON’T DO IT!!! Every doctor I talked to about having a VBAC said that the risks of a uterine rupture...',
        author: 'Sharon Peled'
    }
]

export interface InsuranceCardType {
    title: string,
    content: string,
    list: boolean,
    contents?: string[],
}

export const InsuranceCards: InsuranceCardType[] = [
    {
        title: 'Clalit health insurance: *2700 or 1-222-2700',
        content: 'Platinum customers can receive a 75% refund for a private childbirth preparation course',
        list: false,
    },
    {
        title: 'Meuhedet (United) health insurance: *3833 or 077-2703716',
        content: `"Peak" customers will receive a refund of up to 50% or NIS 416, whichever is lower - the policy of the United Health Insurance Fund is not completely clear these days. Please check with the insurance system 03-5202323 the eligibility for a refund.`,
        list: false,
    },
    {
        title: 'Leumit Health Care Services',
        content: '',
        list: true,
        contents: [
            `Silver Leumit Insurance (page 11) - 80% refund up to NIS 226.`,
            `Gold Leumit Insurance (page 11) - 80% refund up to NIS 282`
        ]
    },
    {
        title: 'Maccabi health fund - *3555',
        content: `My Maccabi customers “Maccabi Sheli” - 75% refund for a childbirth preparation course`,
        list: false,
    }
]

export const InsuranceText1 = [
    `This information was obtained from different insurance companies.`,
    `Please note that the policies listed are valid as of 31.12.22.`,
    `Sometimes there are changes in the company policy, it is very important to verify personally with your insurance so that you make sure to receive your refund.`
]

export const InsuranceText2 = [
    `Generally the refunds from “Kupot Holim” are part of the “pregnancy basket” (sal herayon). So refunds will vary depending on one's individual use of the basket.`,
    `Please attach the course receipts to your refund request.`,
    `The data written above is data that we received from the health insurance funds and Pashut Laledet has no responsibility for its validity.`,
    `Things change from time to time, so it is highly recommended to check directly with the health insurance companies what exactly you are entitled to.`,
    `Some private insurance companies also allow you to receive a refund, so it is highly recommended for those with private medical insurance to check eligibility for refunds.`
]



export interface CourseCardType {
    date: number,
    title: string,
    location: string,
    teacher: string,
}

export interface SearchResultType {
    month: number,
    cards: CourseCardType[],
}

export const SearchResult: SearchResultType[] = [
    {
        month: 12,
        cards: [
            {
                date: Date.now(),
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            },
            {
                date: Date.now(),
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            },
            {
                date: Date.now(),
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            }
        ]
    },
    {
        month: 1,
        cards: [
            {
                date: Date.now(),
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            },
            {
                date: Date.now(),
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            },
            {
                date: Date.now(),
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            }
        ]
    },
    {
        month: 2,
        cards: [
            {
                date: Date.now(),
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            },
            {
                date: Date.now(),
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            },
            {
                date: Date.now(),
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            }
        ]
    }
]