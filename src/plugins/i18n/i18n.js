import Vue from 'vue';
import VueI18n from 'vue-i18n';

Vue.use(VueI18n);
export const i18n = new VueI18n({
    locale: 1,
    fallbackLocale: 1,
    // Ready translated locale messages
    messages: {
        0: {
            home: {
                title: 'Home',
            },
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
                title: 'Researchers fellow',
                departement: 'Department',
                interests: 'Research interests',
            },
            postdocs: {
                title: 'Postdocs, students',
                departement: 'Department',
                interests: 'Research interests',
                university: 'University',
                supervisor: 'Supervisor(s)',
            },
            researcher: {
                about: 'About me',
                interests: 'Research interests',
                department: 'Departement of ',
                telephone: 'Telephone',
                office: 'Office',
            },
            department: {
                name: 'Department',
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
                1: 'Running grants',
                2: 'Past Grants',
            },
            documents: {
                title: 'Documents',
                report: 'Annual reports',
            }
        },
        1: {
            home: {
                title: 'MÚ AV ČR',
            },
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
            postdocs: {
                title: 'Postdoktorandi, studenti',
                departement: 'Vědecké oddělení',
                interests: 'Témata výzkumu',
                university: 'Universita',
                supervisor: 'Školitel(é)',
            },
            researcher: {
                about: 'Kdo jsem',
                interests: 'Vědecké zájmy',
                department: 'Oddělení ',
                telephone: 'Telefon',
                office: 'Pracovna',
            },
            department: {
                name: 'Oddělení',
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
                1: 'Probíhající granty',
                2: 'Minulé granty',
            },
            documents: {
                title: 'Dokumenty',
                report: 'Výroční zprávy',
            }
        }
    }
})