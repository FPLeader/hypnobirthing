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
        image: '/img/blog1.png',
        // image: '/img/teacher.png',
        title: 'Birth story',
        header: 'I Did It!',
        content: 'I had two c-sections with my first two babies and then decided with baby number 3, I wanted to have a vaginal birth after two csections (vbac). The medical world says DON’T DO IT!!! Every doctor I talked to about having a VBAC said that the risks of a uterine rupture...',
        author: 'Sharon Peled'
    },
    {
        id: 2,
        image: '/img/blog2.png',
        // image: '/img/teacher.png',
        title: 'Birth story',
        header: 'I Did It!',
        content: 'I had two c-sections with my first two babies and then decided with baby number 3, I wanted to have a vaginal birth after two csections (vbac). The medical world says DON’T DO IT!!! Every doctor I talked to about having a VBAC said that the risks of a uterine rupture...',
        author: 'Sharon Peled'
    },
    {
        id: 3,
        image: '/img/blog3.png',
        // image: '/img/teacher.png',
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
        image: '/img/teacher.png',
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
    list?: boolean,
    contents?: string[],
}

export const InsuranceCards: InsuranceCardType[] = [
    {
        title: 'Clalit health insurance: *2700 or 1-222-2700',
        content: 'Platinum customers can receive a 75% refund for a private childbirth preparation course',
    },
    {
        title: 'Meuhedet (United) health insurance: *3833 or 077-2703716',
        content: `"Peak" customers will receive a refund of up to 50% or NIS 416, whichever is lower - the policy of the United Health Insurance Fund is not completely clear these days. Please check with the insurance system 03-5202323 the eligibility for a refund.`,
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
                date: 0,
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            },
            {
                date: 0,
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            },
            {
                date: 0,
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
                date: 0,
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            },
            {
                date: 0,
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            },
            {
                date: 0,
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
                date: 0,
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            },
            {
                date: 0,
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            },
            {
                date: 0,
                title: 'Frontal Birth Preparation',
                location: 'Odim (near Netanya)',
                teacher: 'Hagar Ben David',
            }
        ]
    }
]

export interface MediaCardType {
    image: string,
    url: string,
    title: string,
    content: string,
}

export const MediaCards: MediaCardType[] = [
    {
        image: '/img/media1.png',
        url: 'colbonews.co.il',
        title: 'Whose Birth Is It?',
        content: `Relax, happily, when you're in the center and everyone around you is only attentive to you and the baby on the way. Sharon Peled, director of the "Just Giving Birth" Center, explains that giving birth can be a different, safe and stress-free experience, if we just change the approach asdfasdfasdfasdfasdfasdfasdfasdfasdfdasfasdfasdfasdfasd`,
    },
    {
        image: '/img/media2.png',
        url: 'colbonews.co.il',
        title: 'Whose Birth Is It?',
        content: `Relax, happily, when you're in the center and everyone around you is only attentive to you and the baby on the way. Sharon Peled, director of the "Just Giving Birth" Center, explains that giving birth can be a different, safe and stress-free experience, if we just change the approach asdfasdfasdfasdfasdfasdfasdfasdfasdfdasfasdfasdfasdfasd`,
    },
    {
        image: '/img/media3.png',
        url: 'colbonews.co.il',
        title: 'Whose Birth Is It?',
        content: `Relax, happily, when you're in the center and everyone around you is only attentive to you and the baby on the way. Sharon Peled, director of the "Just Giving Birth" Center, explains that giving birth can be a different, safe and stress-free experience, if we just change the approach asdfasdfasdfasdfasdfasdfasdfasdfasdfdasfasdfasdfasdfasd`,
    },
    {
        image: '/img/media4.png',
        url: 'colbonews.co.il',
        title: 'Whose Birth Is It?',
        content: `Relax, happily, when you're in the center and everyone around you is only attentive to you and the baby on the way. Sharon Peled, director of the "Just Giving Birth" Center, explains that giving birth can be a different, safe and stress-free experience, if we just change the approach asdfasdfasdfasdfasdfasdfasdfasdfasdfdasfasdfasdfasdfasd`,
    },
    {
        image: '/img/media5.png',
        url: 'colbonews.co.il',
        title: 'Whose Birth Is It?',
        content: `Relax, happily, when you're in the center and everyone around you is only attentive to you and the baby on the way. Sharon Peled, director of the "Just Giving Birth" Center, explains that giving birth can be a different, safe and stress-free experience, if we just change the approach asdfasdfasdfasdfasdfasdfasdfasdfasdfdasfasdfasdfasdfasd`,
    }
]

export interface BigBlogCardType {
    id: number,
    image: string,
    title: string,
    header: string,
    content: string,
    author: string,
}

export const BigBlogCards: BigBlogCardType[] = [
    {
        id: 1,
        image: '/img/bigpic1.png',
        title: 'Article',
        header: 'Whose Birth Is It?',
        content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
        author: 'Rebecca Rosenstein'
    },
    {
        id: 2,
        image: '/img/bigpic2.png',
        title: 'Birth story',
        header: 'I Did It!',
        content: `Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Nemo enim ipsam voluptatem quia voluptas sit aspernatur aut odit aut fugit, sed quia consequuntur magni dolores eos qui ratione voluptatem sequi nesciunt. Neque porro quisquam est, qui dolorem ipsum quia dolor sit amet, consectetur, adipisci velit, sed quia non numquam eius modi tempora incidunt ut labore et dolore magnam aliquam quaerat voluptatem. Ut enim ad minima veniam, quis nostrum exercitationem ullam corporis suscipit laboriosam, nisi ut aliquid ex ea commodi consequatur? Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam nihil molestiae consequatur, vel illum qui dolorem eum fugiat quo voluptas nulla pariatur?`,
        author: 'Sharon Peled'
    },
]

export interface MemberCardType {
    id: number,
    image: string,
    name: string,
    title: string,
    description: string,
}

export const MemberCards: MemberCardType[] = [
    {
        id: 1,
        image: '/img/member1.png',
        name: 'Paula Aji',
        title: 'Modern Applied Psychology & Personal Development',
        description: `I believe that women know how to birth and that babies know how to be born. I believe that with guidance and support, the fears and the noise of the medical approach to birth can be put aside and replaced with full presence. Families can feel empowered and safe to celebrate their births.
        I'm an International Faculty Trainer of the HypnoBirthing Institute, and a founder and faculty trainer of Pashut Laledet HypnoBirthing in Israel. In this capacity I have trained hundreds of childbirth educators and other birth professionals in HypnoBirthing all around the world.
        I'm also a founder of Mind Body Birthkeepers mentoring trainings for doulas and other birth professionals, in which a bridge is created for cooperative understanding of scientific and spiritual, medical and natural approaches to the childbearing year.
        My newest endeavor is as a founder of Mechanisms of Balance which is a project illustrating female internal anatomy to enrich understanding and techniques for health and balance.
        My background certifications and trainings in healing, hypnosis, HypnoBirthing, Lamaze, Bradley, Evidence Based Birth, Spinning Babies, the Art of Birth and DONA have supported my work in educating and accompanying families. I have attended over 600 births and educated over 2000 families.
        I'm a native New Yorker living with my partner in Karmei Yosef, Israel. I am fluent in English and Hebrew. My favorite way to spend free time is cuddling with my grandbabies. I also love reading, hiking, qigong and chocolate.`
    },
    {
        id: 2,
        image: '/img/member2.png',
        name: 'Talya Aji Demri',
        title: 'Modern Applied Psychology & Personal Development',
        description: `I believe that women know how to birth and that babies know how to be born. I believe that with guidance and support, the fears and the noise of the medical approach to birth can be put aside and replaced with full presence. Families can feel empowered and safe to celebrate their births.
        I'm an International Faculty Trainer of the HypnoBirthing Institute, and a founder and faculty trainer of Pashut Laledet HypnoBirthing in Israel. In this capacity I have trained hundreds of childbirth educators and other birth professionals in HypnoBirthing all around the world.
        I'm also a founder of Mind Body Birthkeepers mentoring trainings for doulas and other birth professionals, in which a bridge is created for cooperative understanding of scientific and spiritual, medical and natural approaches to the childbearing year.
        My newest endeavor is as a founder of Mechanisms of Balance which is a project illustrating female internal anatomy to enrich understanding and techniques for health and balance.
        My background certifications and trainings in healing, hypnosis, HypnoBirthing, Lamaze, Bradley, Evidence Based Birth, Spinning Babies, the Art of Birth and DONA have supported my work in educating and accompanying families. I have attended over 600 births and educated over 2000 families.
        I'm a native New Yorker living with my partner in Karmei Yosef, Israel. I am fluent in English and Hebrew. My favorite way to spend free time is cuddling with my grandbabies. I also love reading, hiking, qigong and chocolate.`
    },
    {
        id: 3,
        image: '/img/member3.png',
        name: 'Paula Aji',
        title: 'Modern Applied Psychology & Personal Development',
        description: `I believe that women know how to birth and that babies know how to be born. I believe that with guidance and support, the fears and the noise of the medical approach to birth can be put aside and replaced with full presence. Families can feel empowered and safe to celebrate their births.
        I'm an International Faculty Trainer of the HypnoBirthing Institute, and a founder and faculty trainer of Pashut Laledet HypnoBirthing in Israel. In this capacity I have trained hundreds of childbirth educators and other birth professionals in HypnoBirthing all around the world.
        I'm also a founder of Mind Body Birthkeepers mentoring trainings for doulas and other birth professionals, in which a bridge is created for cooperative understanding of scientific and spiritual, medical and natural approaches to the childbearing year.
        My newest endeavor is as a founder of Mechanisms of Balance which is a project illustrating female internal anatomy to enrich understanding and techniques for health and balance.
        My background certifications and trainings in healing, hypnosis, HypnoBirthing, Lamaze, Bradley, Evidence Based Birth, Spinning Babies, the Art of Birth and DONA have supported my work in educating and accompanying families. I have attended over 600 births and educated over 2000 families.
        I'm a native New Yorker living with my partner in Karmei Yosef, Israel. I am fluent in English and Hebrew. My favorite way to spend free time is cuddling with my grandbabies. I also love reading, hiking, qigong and chocolate.`
    },
    {
        id: 4,
        image: '/img/member4.png',
        name: 'Rebecca Rosenstein',
        title: 'educator, birth doula, gentle birth childbirth educator',
        description: `I believe that women know how to birth and that babies know how to be born. I believe that with guidance and support, the fears and the noise of the medical approach to birth can be put aside and replaced with full presence. Families can feel empowered and safe to celebrate their births.
        I'm an International Faculty Trainer of the HypnoBirthing Institute, and a founder and faculty trainer of Pashut Laledet HypnoBirthing in Israel. In this capacity I have trained hundreds of childbirth educators and other birth professionals in HypnoBirthing all around the world.
        I'm also a founder of Mind Body Birthkeepers mentoring trainings for doulas and other birth professionals, in which a bridge is created for cooperative understanding of scientific and spiritual, medical and natural approaches to the childbearing year.
        My newest endeavor is as a founder of Mechanisms of Balance which is a project illustrating female internal anatomy to enrich understanding and techniques for health and balance.
        My background certifications and trainings in healing, hypnosis, HypnoBirthing, Lamaze, Bradley, Evidence Based Birth, Spinning Babies, the Art of Birth and DONA have supported my work in educating and accompanying families. I have attended over 600 births and educated over 2000 families.
        I'm a native New Yorker living with my partner in Karmei Yosef, Israel. I am fluent in English and Hebrew. My favorite way to spend free time is cuddling with my grandbabies. I also love reading, hiking, qigong and chocolate.`
    },
    {
        id: 5,
        image: '/img/member2.png',
        name: 'Maor Demri',
        title: 'CMO-Chief Marketing Operation',
        description: `I believe that women know how to birth and that babies know how to be born. I believe that with guidance and support, the fears and the noise of the medical approach to birth can be put aside and replaced with full presence. Families can feel empowered and safe to celebrate their births.
        I'm an International Faculty Trainer of the HypnoBirthing Institute, and a founder and faculty trainer of Pashut Laledet HypnoBirthing in Israel. In this capacity I have trained hundreds of childbirth educators and other birth professionals in HypnoBirthing all around the world.
        I'm also a founder of Mind Body Birthkeepers mentoring trainings for doulas and other birth professionals, in which a bridge is created for cooperative understanding of scientific and spiritual, medical and natural approaches to the childbearing year.
        My newest endeavor is as a founder of Mechanisms of Balance which is a project illustrating female internal anatomy to enrich understanding and techniques for health and balance.
        My background certifications and trainings in healing, hypnosis, HypnoBirthing, Lamaze, Bradley, Evidence Based Birth, Spinning Babies, the Art of Birth and DONA have supported my work in educating and accompanying families. I have attended over 600 births and educated over 2000 families.
        I'm a native New Yorker living with my partner in Karmei Yosef, Israel. I am fluent in English and Hebrew. My favorite way to spend free time is cuddling with my grandbabies. I also love reading, hiking, qigong and chocolate.`
    },
    {
        id: 6,
        image: '/img/member6.png',
        name: 'Shelley Lawnikanis',
        title: 'Family photographer',
        description: `I believe that women know how to birth and that babies know how to be born. I believe that with guidance and support, the fears and the noise of the medical approach to birth can be put aside and replaced with full presence. Families can feel empowered and safe to celebrate their births.
        I'm an International Faculty Trainer of the HypnoBirthing Institute, and a founder and faculty trainer of Pashut Laledet HypnoBirthing in Israel. In this capacity I have trained hundreds of childbirth educators and other birth professionals in HypnoBirthing all around the world.
        I'm also a founder of Mind Body Birthkeepers mentoring trainings for doulas and other birth professionals, in which a bridge is created for cooperative understanding of scientific and spiritual, medical and natural approaches to the childbearing year.
        My newest endeavor is as a founder of Mechanisms of Balance which is a project illustrating female internal anatomy to enrich understanding and techniques for health and balance.
        My background certifications and trainings in healing, hypnosis, HypnoBirthing, Lamaze, Bradley, Evidence Based Birth, Spinning Babies, the Art of Birth and DONA have supported my work in educating and accompanying families. I have attended over 600 births and educated over 2000 families.
        I'm a native New Yorker living with my partner in Karmei Yosef, Israel. I am fluent in English and Hebrew. My favorite way to spend free time is cuddling with my grandbabies. I also love reading, hiking, qigong and chocolate.`
    },
]