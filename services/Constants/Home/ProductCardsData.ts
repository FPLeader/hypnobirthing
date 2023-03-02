export interface ProductCardType {
    id: number,
    image: string,
    title: string,
    price: number,
}

export const ProductCards: ProductCardType[] = [
    {
        id: 1,
        image: '/img/product1.png',
        title: 'Massage oil at birth',
        price: 89
    },
    {
        id: 2,
        image: '/img/product2.png',
        title: 'HypnoBirthing Relaxation for mothers',
        price: 50
    },
    {
        id: 3,
        image: '/img/product3.png',
        title: 'Massage oil at birth. Weleda',
        price: 91
    },
    {
        id: 4,
        image: '/img/product4.png',
        title: 'Hypnobirthing Book in Hebrew+Download card Relaxation of the rainbow',
        price: 165
    }
]