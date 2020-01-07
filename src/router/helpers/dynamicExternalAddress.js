// TODO import dynamicExternalAddresses from BD
export const dynamicExternalAddresses = [{
        path: '/news/ox',
        name: 'ox',
        beforeEnter() { location.href = 'http://www.ox.ac.uk/admissions/undergraduate/open-days-and-visits' },
    },
    {
        path: '/news/github',
        name: 'github',
        beforeEnter() { location.href = 'http://github.com' },
    },
    {
        path: '/news/abel',
        name: 'abel',
        beforeEnter() { location.href = 'http://www.math.cas.cz/documents/Abelova_cena.jpeg' }
    },
    {
        path: '/news/Krizek_Somer2',
        name: 'Krizek_Somer2',
        beforeEnter() { location.href = 'http://www.math.cas.cz/documents/Krizek_Somer2.jpg' }
    },
    {
        path: '/news/paper',
        name: 'paper',
        beforeEnter() { location.href = 'https://www.nature.com/articles/s42256-018-0002-3' },
    },
    {
        path: '/news/award',
        name: 'award',
        beforeEnter() { location.href = 'http://www.math.cas.cz/documents/diplom_MUNI.jpg' },
    },
    {
        path: '/news/partners',
        name: 'partners',
        beforeEnter() { location.href = 'https://muni100.cz/program-oslav/podrobny/zahradni-slavnost-s-partnery' },
    },
    {
        path: '/news/workshop',
        name: 'workshop',
        beforeEnter() { location.href = 'http://workshop.math.cas.cz/MDPW/' },
    },
];