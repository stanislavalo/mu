export default [
    /** MAIN menu
     */
    {
        id: 1,
        type: 'main',
        name: ['People', 'Lidé'],
        dropdown: true,
        url: null,
        items: [
            { url: '/members/researchers', name: ['Researchers fellow', 'Vědečtí pracovníci'] },
            { url: '/members/postdocs', name: ['Postdocs, students', 'Postdoktorandi, studenti'] },
            { url: '/members/staff', name: ['Staff', 'Ostatní'] },
            { url: '/members/distinguishedVisitors', name: ['Eduard Čech Distinguished Visitor', 'Eduard Čech Distinguished Visitor'] },
            { url: '/members/visitors', name: ['Visitors', 'Hostující pracovníci'] }
        ],
    },
    {
        id: 2,
        type: 'main',
        name: ['Research', 'Výzkum'],
        dropdown: true,
        url: null,
        items: [
            { url: '/research/publications', name: ['Publications', 'Publikace'] },
            { url: '/research/lectures', name: ['Lectures', 'Přednášky'] },
            { url: '/research/collaboration', name: ['Collaboration', 'Spolupráce'] },
        ]
    },
    {
        id: 3,
        type: 'main',
        name: ['Events', 'Vědečké akce'],
        dropdown: true,
        url: null,
        items: [
            { url: '/events/calendar', name: ['Calendar', 'Kalendář akcí'] },
            { url: '/events/seminars', name: ['Seminars', 'Semináře'] },
            { url: '/events/conferences', name: ['Conferences', 'Konference'] },
            { url: '/events/lecturesCech', name: ['Eduard Čech Lectures', 'Čechovské přednášky'] },
            { url: '/events/awards', name: ['Awards', 'Ocenění'] },
        ],
    },
    {
        id: 4,
        type: 'main',
        name: ['About', 'O nás'],
        dropdown: true,
        url: null,
        items: [
            { url: '/', name: ['News', 'Aktuality'] },
            { url: '/about/mission', name: ['Mission', 'Poslání'] },
            { url: '/about/structure', name: ['Structure', 'Struktura'] },
            { url: '/about/documents', name: ['Documents', 'Dokumenty'] },
            { url: '/about/contact', name: ['Contact', 'Kontakt'] },
        ],
    },
    /** BIS menu
     */
    {
        id: 5,
        type: 'bis',
        name: ['Departments', 'Oddělení'],
        items: [
            { url: '/department/detail/1', name: ['Abstract Analysis (AA)', 'Abstraktní analýza (AA)'] },
            {
                url: '/department/detail/2',
                name: ['Algebra, Geometry and Mathematical Physics (AGMP)',
                    'Algebra, geometrie a matematická fyzika (AGMP)'
                ]
            },
            { url: '/department/detail/3', name: ['Branch in Brno (BB)', 'Pobočka v Brně (BB)'] },
            {
                url: '/department/detail/4',
                name: ['Constructive Methods of Mathematical Analysis (CMMA)',
                    'Konstruktivní metody matematické analýzy (CMMA)'
                ]
            },
            {
                url: '/department/detail/5',
                name: ['Evolution Differential Equations (EDE)',
                    'Evoluční diferenciální rovnice (EDE)'
                ]
            },
            {
                url: '/department/detail/6',
                name: ['Mathematical Logic and Theoretical Computer Science (MLTCS)',
                    'Matematická logika a teoretická informatika (MLTCS)'
                ]
            },
        ],
        dropdown: true,
        url: null
    },
    {
        id: 6,
        type: 'bis',
        name: ['Library', 'Knihovna'],
        items: [
            { url: '/library/library', name: ['Library of the Institute', 'Knihovna ústavu'] },
            { url: '/library/resources', name: ['Electronic resources', 'Elektronické zdroje'] },
            { url: '/library/journal/applicationsJournal', name: ['Applications of Mathematics', 'Applications of Mathematics'] },
            { url: '/library/journal/mathematicalJournal', name: ['Czechoslovak Mathematical Journal', 'Czechoslovak Mathematical Journal'] },
            { url: '/library/journal/bohemicaJournal', name: ['Mathematica Bohemica', 'Mathematica Bohemica'] },

        ],
        dropdown: true,
        url: null
    },

    {
        id: 7,
        type: 'bis',
        name: ['Grants', 'Granty, projekty'],
        items: [
            { url: '/grants/list/1', name: ['Running', 'Probíhající'] },
            { url: '/grants/list/2', name: ['Past', 'Minulé'] },
        ],
        dropdown: true,
        url: null
    },
    {
        id: 8,
        type: 'bis',
        name: ['Positions', 'Pracovni prilezitost'],
        dropdown: false,
        url: '/positions',
        // items: [
        //     { url: '/positions/open', name: ['Open position', 'Volná místa'] },
        //     { url: '/positions/thesetopics', name: ['Proposed theses topics', 'Nabídka doktorského studia'] }
        // ],
    },


];