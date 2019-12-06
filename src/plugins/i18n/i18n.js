import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
export const i18n = new VueI18n({
    locale: 1,
    fallbackLocale: 1,
    // Ready translated locale messages
    messages: {
        0: {
            staff: {
                title: 'Staff'
            },
            summary: {
                title: 'Summary',
            },
            news: {
                title: 'News',
            },
            researchers: {
                title: 'Researchers',
                departement: 'Department',
                interests: 'Research interests'
            },
            researcher: {
                about: 'About me',
            },
            department: {
                head: 'Head',
                themes: 'Research themes',
                production: 'Scientifique production',
                members: 'Members',
                membersFormer: 'Former,Members',
                archiv: 'Archive of departments',
            },
            production: {
                preprints: 'Preprints',
                publications: 'Publications',
                lectures: 'Lectures',
                theses: 'Theses',
                grants: 'Grants'
            },
            grants: {
                1: 'Grants',
                2: 'Foreign Grants',
                3: 'International Cooperation',
            },
        },
        1: {
            staff: {
                title: 'Ostatní zaměstnanci'
            },
            summary: {
                title: 'Seznam',
            },
            news: {
                title: 'Aktuality',
            },
            researchers: {
                title: 'Vědečtí pracovníci',
                departement: 'Vědecké oddělení',
                interests: 'Témata výzkumu'
            },
            researcher: {
                about: 'Kdo jsem',
            },
            department: {
                head: 'Vedoucí oddělení',
                themes: 'Vědecká témata',
                production: 'Výzkumná činnost',
                members: 'Členové',
                membersFormer: 'Bývalí členové',
                archiv: 'Archiv vědeckých oddělení',
            },
            production: {
                preprints: 'Preprinty',
                publications: 'Publikace',
                lectures: 'Přednášky',
                theses: 'Doktorské disertace',
                grants: 'Granty, projekty',
            },
            grants: {
                1: 'Granty, projekty',
                2: 'Zahraniční granty',
                3: 'Mezinárodní spolupráce',
            }
        }
    }
})