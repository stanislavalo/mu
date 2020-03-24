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
                more:'More news',
                evens: 'Forthcoming events',
                calendar:'Calendar',
            },
            about:{
              departments:'Departments',
              mission:'Mission',
              contact:'Contact',
              information:'Information for Visitors',
            },
            structure:{
              administration:'Administration',
              boardint:"International Advisory Board",
              board:"Board of the Institute",
              supervisory:"Supervisory Board of the Institute",
              members:"Members",
              heads:"Scientific departments and department heads",
              facilities:"Facilities",
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
            visitors: {
                distinguished: 'Eduard Čech Distinguished Visitor',
                visitors: 'Visitors',
            },
            research:{
              collaboration:'Collaboration',
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
            },
            events: {
                calendar: 'Calendar',
                seminars: 'Seminars',
                conferences: 'Conferences',
                cechLecture: 'Eduard Čech Lectures',
                awards: 'Awards',
                bestPapers: 'Best papers in journals published by the Institute',
            },

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
                more:'Další aktuality',
                evens: 'Chystané akce',
                calendar:'Kalendář',
            },
            about:{
              departements:'Vědecká oddělení',
              mission:'Poslání',
              contact:'Kontakt',
              information:'Informace pro hostující pracovníky',
            },
            structure:{
              administration:'Vedení ústavu',
              boardint:"Mezinárodní poradní sbor",
              board:"Rada pracoviště ",
              supervisory:"Dozorčí rada",
              members:"Členové",
              heads:"Vědecká oddělení a jejich vedoucí ",
              facilities:"Ostatní útvary  ",
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
            visitors: {
                distinguished: 'Eduard Čech Distinguished Visitor',
                visitors: 'Hostující pracovníci',
            },
            research:{
              collaboration:'Spolupráce',
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
            },
            events: {
                calendar: 'Kalendář akcí',
                seminars: 'Semináře',
                conferences: 'Konference',
                cechLecture: 'Čechovské přednášky',
                awards: 'Ocenění',
                bestPapers: 'Nejlepší ċlánky v ċasopisech vydávaných v MÚ',
            },
        }
    }
})