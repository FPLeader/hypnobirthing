export interface CategorySelectItemType {
    id: number,
    value: string,
}

export const TypeOptions: CategorySelectItemType[] = [
    {
        id: 0,
        value: 'Educator'
    },
    {
        id: 1,
        value: 'Birth Professional Supports HypnoBirthing'
    }
]

interface SelectItemType {
    value: string,
    label: string,
}

export const SkillSet: SelectItemType[] = [
    {
        value: 'Childbirth educator',
        label: 'Childbirth educator'
    },
    {
        value: 'Birth Doula',
        label: 'Birth Doula'
    },
    {
        value: 'Postpartum Doula',
        label: 'Postpartum Doula'
    },
    {
        value: 'Midwife',
        label: 'Midwife'
    },
    {
        value: 'Lactation Consultant',
        label: 'Lactation Consultant'
    },
    {
        value: 'Lactation Counselor',
        label: 'Lactation Counselor'
    },
    {
        value: 'Yoga Teacher',
        label: 'Yoga Teacher'
    },
    {
        value: 'Massage Therapist',
        label: 'Massage Therapist'
    },
    {
        value: 'Baby Massage',
        label: 'Baby Massage'
    },
    {
        value: 'Naturopath',
        label: 'Naturopath'
    },
    {
        value: 'Obstetrician',
        label: 'Obstetrician'
    },
    {
        value: 'Pelvic Floor Physiotherapist',
        label: 'Pelvic Floor Physiotherapist'
    },
    {
        value: 'Infant Development Specialist',
        label: 'Infant Development Specialist'
    },
    {
        value: 'Osteopath',
        label: 'Osteopath'
    },
    {
        value: 'Reflexologist',
        label: 'Reflexologist'
    },
    {
        value: 'Therapist',
        label: 'Therapist'
    },
    {
        value: 'Psychologist',
        label: 'Psychologist'
    },
    {
        value: 'Acupuncturist',
        label: 'Acupuncturist'
    },
    {
        value: 'Dietician',
        label: 'Dietician'
    },
    {
        value: 'Equilibrio Practitioner',
        label: 'Equilibrio Practitioner'
    },
    {
        value: 'Embrio Balance Practitioner',
        label: 'Embrio Balance Practitioner'
    },
    {
        value: 'Hydrotherapist',
        label: 'Hydrotherapist'
    },
    {
        value: 'New mothers circle facilitator',
        label: 'New mothers circle facilitator'
    },
    {
        value: 'Pilates Teacher',
        label: 'Pilates Teacher'
    },
    {
        value: 'Other',
        label: 'Other'
    },
]

export const LanguageOptions = [
    { id: 0, value: 'I only know English' },
    { id: 1, value: 'I only know Hebrew' },
    { id: 2, value: 'I know English and Hebrew both' },
]

export const CategoryOptions = [
    { id: 0, value: 'Article' },
    { id: 1, value: 'Birth Story' },
    { id: 2, value: 'Recipe' },
]

export const DayOptions = [
    { id: 0, value: 'Mondays' },
    { id: 1, value: 'Tuesdays' },
    { id: 2, value: 'Wednesdays' },
    { id: 3, value: 'Thursdays' },
    { id: 4, value: 'Fridays' },
    { id: 5, value: 'Saturdays' },
    { id: 6, value: 'Sundays' },
]