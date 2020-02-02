// table conferences in v1
export default [{
        id: 1,
        type: 8,
        /* type author in IM: true,false */
        authors: [{ type: 1, name_last: 'Thapen', name_first: 'Neil Dillip' }, ],
        title: {
            url: null,
            name: 'Induction, search problems and approximate counting'
        },
        conference: {
            title: 'ASL Logic Colloquium 2019',
            address: 'Prague, Czech Republic ',

        },
        filepdf: null,
        month: 4,
        year: 2019,
        grants: null,
    },
    {
        id: 2,
        type: 8,
        /* type author in IM: true,false */
        authors: [{ type: 1, name_last: 'Thapen', name_first: 'Neil Dillip' }, ],
        title: {
            url: 'http://sat2019.tecnico.ulisboa.pt/index.html',
            name: 'DRAT Proofs, Propagation Redundancy, and Extended Resolution'
        },
        conference: {
            title: '22nd International Conference on Theory and Applications of Satisfiability Testing (SAT 2019)',
            address: 'Lisbon, Portugal',

        },
        filepdf: null,
        month: 7,
        year: 2019,
        grants: null,
    },
    {
        id: 3,
        type: 8,
        /* type author in IM: true,false */
        authors: [{ type: 1, name_last: 'Feireisl', name_first: 'Eduard' }, ],
        title: {
            url: 'https://www.enumath2019.eu/',
            name: 'Solving ill posed problems: Young measures, K-convergence, and Lax equivalence theorem for nonlinear problems'
        },
        conference: {
            title: 'EnuMath 2019',
            address: 'Egmond aan Zee',

        },
        filepdf: 'http://www.math.cas.cz/fichier/conference/filepdf/conference_pdf_20200127135228_67.pdf',
        month: 10,
        year: 2019,
        grants: [{
            url: 'http://www.math.cas.cz/recherche/grants/grant_detail.php?id_grant=147&lang=0',
            id_grant: '147',
            name: 'GA18-05974S'
        }, ],
    },
    {
        id: 4,
        type: 8,
        /* type author in IM: true,false */
        authors: [{ type: 0, name_last: 'Baralić', name_first: 'Đorđe' },
            { type: 0, name_last: 'Curien', name_first: 'Pierre-Louis' },
            { type: 0, name_last: 'Milićević', name_first: 'Milena' },
            { type: 1, name_last: 'Obradović', name_first: 'Jovana' },
            { type: 0, name_last: 'Petrić', name_first: 'Zoran' },
            { type: 0, name_last: 'Zekić', name_first: 'Mladen' },
            { type: 0, name_last: 'Žival', name_first: 'Rade T' }
        ],
        title: {
            url: 'https://math.unice.fr/tacl/2019/',
            name: 'Proofs and surfaces'
        },
        conference: {
            title: 'Topology, Algebra, and Categories in Logic 2019',
            address: 'University of Nice',

        },
        filepdf: null,
        month: 12,
        year: 2019,
        grants: [{
            url: 'http://www.math.cas.cz/recherche/grants/grant_detail.php?id_grant=160&lang=0',
            id_grant: '160',
            name: 'Grant Praemium Academiae '
        }, ],
    }
]