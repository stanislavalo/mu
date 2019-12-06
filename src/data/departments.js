export default [{
        id: 1,
        sigle: "AA",
        name: ["Abstract Analysis", "Abstraktní analýza "],
        date_start: 1970,
        date_end: null,
        activ: true,
        head: { id: 22, last_name: 'Kubiś', first_name: 'Wiesław', title: 'Prof' },
        description: "Main research themes of the department members can be described as the study and classification of mathematical structures, using advanced methods of logic, set theory, and category theory, as well as modern tools from mathematical analysis and algebra. Abstract analysis refers to these areas of science where mathematical logic plays a significant role, even though it is not the main object of study. These areas include descriptive set theory, topology, Banach space theory, and the theory of C* algebras.",
        themes: [{
                header: 'classification of mathematical structures I',
                items: ['C* algebras',
                    'descriptive set theory',
                    'function spaces',
                    'geometric group theory',
                    'graphs and their limits',
                    'harmonic analysis',
                    'operator theory'
                ]
            },
            {
                header: 'classification of mathematical structures II',
                items: [
                    'theory of deformable media',
                    'topological and geometric properties of Banach spaces',
                    'universal homogeneous structures'
                ]
            }
        ],
        members: [{
                id: 1,
                last_name: 'Bodner',
                first_name: 'Tomáš',
                type: { from: 1985, category: 'Researcher' },
                url: 'members/researcher/1'
            },
            {
                id: 2,
                last_name: 'Nekasová',
                first_name: 'Šárka ',
                type: { from: 1995, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 3,
                last_name: 'Raboševičova',
                first_name: 'Anna',
                type: { from: 1995, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 4,
                last_name: 'Kufner',
                first_name: 'Josef',
                type: { from: 2008, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 5,
                last_name: ' Monte',
                first_name: 'Giselle Antunes',
                type: { from: 2008, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 6,
                last_name: 'Schwarz',
                first_name: 'Sebastian',
                type: { from: 2008, category: 'Postdoc' },
                url: 'membre/110'
            },
            {
                id: 7,
                last_name: 'Schwood',
                first_name: 'Sebastian',
                type: { from: 2008, category: 'Postdoc' },
                url: 'membre/115'
            },
            {
                id: 8,
                last_name: 'Tvrder',
                first_name: 'Milan',
                type: { from: 2008, category: 'Researcher' },
                url: 'membre/115'
            }
        ],
        formerMembers: [{
            id: 5,
            last_name: 'Rufza',
            first_name: 'Jan',
            type: { from: 2011, to: 2010, category: 'Ph.D. student' },
            url: 'membre/110'
        }, ]
    },
    {
        id: 2,
        sigle: "AGMP",
        name: ["Algebra, Geometry and Mathematical Physics", "Algebra, geometrie a matematická fyzika"],
        date_start: 1970,
        date_end: null,
        activ: true,
        head: { id: 22, last_name: 'Pravda', first_name: 'Vojtěch', title: 'Mgr., Ph.D., DSc.' },
        description: "The department was formed in 2014 from researchers interested in algebraic and differential geometry and on closely related areas of mathematical physics. The research is focused on mathematical aspects of modern theoretical models of physics of microcosmos and gravity..",
        themes: [{
                header: 'Algebraic and differential geometry',
                items: ['algebraic and differential geometry',
                    'representation theory (vertex algebras), applications to algebraic geometry and number theory ',
                    'homological algebra',
                ]
            },
            {
                header: 'Mathematical physics',
                items: [
                    'classfication of tensors',
                    'Einstein\'s equations',
                    'generalized theories of gravity'
                ]
            }
        ],
        members: [{
                id: 1,
                last_name: 'Bodner',
                first_name: 'Tomáš',
                type: { from: 1985, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 2,
                last_name: 'Nekasová',
                first_name: 'Šárka ',
                type: { from: 1995, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 3,
                last_name: 'Raboševičova',
                first_name: 'Anna',
                type: { from: 1995, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 4,
                last_name: 'Kufner',
                first_name: 'Josef',
                type: { from: 2008, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 5,
                last_name: ' Monte',
                first_name: 'Giselle Antunes',
                type: { from: 2008, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 6,
                last_name: 'Schwarz',
                first_name: 'Sebastian',
                type: { from: 2008, category: 'Postdoc' },
                url: 'membre/110'
            },
            {
                id: 7,
                last_name: 'Schwood',
                first_name: 'Sebastian',
                type: { from: 2008, category: 'Postdoc' },
                url: 'membre/115'
            },
            {
                id: 8,
                last_name: 'Tvrder',
                first_name: 'Milan',
                type: { from: 2008, category: 'Researcher' },
                url: 'membre/115'
            }
        ],
        formerMembers: [{
            id: 5,
            last_name: 'Rufza',
            first_name: 'Jan',
            type: { from: 2011, to: 2010, category: 'Ph.D. student' },
            url: 'membre/110'
        }, ]
    },
    {
        id: 3,
        sigle: "BB",
        name: ["Branch in Brno ", "Pobočka v Brně"],
        date_start: 1970,
        date_end: null,
        activ: true,
        head: { id: 22, last_name: 'Hakl', first_name: 'Robert', title: 'prof. RNDr., DSc.' },
        description: "The core research performed in this section in collaboration with several members of the Department of Evolution Differential Equations concerns qualitative properties of ordinary and functional differential equations. Such equations describing development of finite dimensional systems find important applications in biology and physics. The theoretical study of their solutions would help discovering mathematical causalities in real systems including singularities in time and space variables and in discontinuous processes which are modelled by means of the Kurzweil-Henstock integral as well as in terms of equations on time scales. Another important topics is studying methods of optimal control of complex processes.",
        nb_membres_activ: 30,
        nb_membres_former: 20,
        themes: [{
            header: 'Differential equations',
            items: [
                'boundary value problems',
                'equations on time scales',
            ]
        }, ],
        members: [{
                id: 1,
                last_name: 'Hanek',
                first_name: 'Martin',
                type: { from: 1985, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 2,
                last_name: 'Nečasová',
                first_name: 'Šárka ',
                type: { from: 1995, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 3,
                last_name: 'Radoševič',
                first_name: 'Anna',
                type: { from: 1995, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 4,
                last_name: 'Kuf',
                first_name: 'Josef',
                type: { from: 2008, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 5,
                last_name: ' Monteiro',
                first_name: 'Giselle Antunes',
                type: { from: 2008, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 6,
                last_name: 'Schwarzacher',
                first_name: 'Sebastian',
                type: { from: 2008, category: 'Postdoc' },
                url: 'membre/110'
            },
            {
                id: 7,
                last_name: 'Schwoor',
                first_name: 'Sebastian',
                type: { from: 2008, category: 'Postdoc' },
                url: 'membre/115'
            },
            {
                id: 8,
                last_name: 'Tvrdý',
                first_name: 'Milan',
                type: { from: 2008, category: 'Researcher' },
                url: 'membre/115'
            }
        ],
        formerMembers: [{
                id: 1,
                last_name: 'Bonom',
                first_name: 'Tomáš',
                type: { from: 1985, to: 1995, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 2,
                last_name: 'Nekita',
                first_name: 'Alexandre ',
                type: { from: 1995, to: 2001, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 3,
                last_name: 'Radonikov',
                first_name: 'Nikola',
                type: { from: 2001, to: 2010, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 4,
                last_name: 'Kufza',
                first_name: 'Josef',
                type: { from: 2008, to: 2010, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 5,
                last_name: 'Rufza',
                first_name: 'Jan',
                type: { from: 2011, to: 2010, category: 'Ph.D. student' },
                url: 'membre/110'
            },
        ],
    },
    {
        id: 4,
        sigle: "CMMA",
        name: ["Constructive Methods of Mathematical Analysis", "Konstruktivní metody matematické analýzy"],
        date_start: 1970,
        date_end: null,
        activ: true,
        head: { id: 22, last_name: 'Křížek', first_name: 'Michal', title: 'prof. RNDr., DSc.' },
        description: "The scope of this section covers qualitative aspects of theory of partial differential equations in mechanics and thermodynamics of continuum, in biology and in other sciences. The research aims at verification of correctness of mathematical models and of the possibility to provide theoretical predictions of future development of a system without the full knowledge of the initial state. The work focuses on investigation of equations describing fluid flow including heat exchange and interaction with solid bodies. Attention is paid also to processes in solid matters focusing on mathematical modelling of memory in multifunctional materials, to dynamical behaviour of bodies in a contact with an underlay, and to phase transitions. Several members cooperate with the Branch in Brno investigating the integration theory and ordinary differential equations.",
        nb_membres_activ: 30,
        nb_membres_former: 20,
        themes: [{
            header: 'Finite element analysis',
            items: [
                'discretizations and space decompositions',
                'higher order approximations to solutions of linear and nonlinear elliptic and parabolic partial differential equations',
                'automatic mesh generation',
                'superconvergence phenomena with mathematical modeling of melting and solidification processes',
                'optimal approximation properties of higher order finite elements',
                'nonsmooth problems in continuum mechanics',
                'the worst scenario method'
            ]
        }, ],
        members: [{
                id: 1,
                last_name: 'Hanek',
                first_name: 'Martin',
                type: { from: 1985, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 2,
                last_name: 'Nečasová',
                first_name: 'Šárka ',
                type: { from: 1995, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 3,
                last_name: 'Radoševič',
                first_name: 'Anna',
                type: { from: 1995, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 4,
                last_name: 'Kuf',
                first_name: 'Josef',
                type: { from: 2008, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 5,
                last_name: ' Monteiro',
                first_name: 'Giselle Antunes',
                type: { from: 2008, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 6,
                last_name: 'Schwarzacher',
                first_name: 'Sebastian',
                type: { from: 2008, category: 'Postdoc' },
                url: 'membre/110'
            },
            {
                id: 7,
                last_name: 'Schwoor',
                first_name: 'Sebastian',
                type: { from: 2008, category: 'Postdoc' },
                url: 'membre/115'
            },
            {
                id: 8,
                last_name: 'Tvrdý',
                first_name: 'Milan',
                type: { from: 2008, category: 'Researcher' },
                url: 'membre/115'
            }
        ],
        formerMembers: [{
                id: 1,
                last_name: 'Bonom',
                first_name: 'Tomáš',
                type: { from: 1985, to: 1995, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 2,
                last_name: 'Nekita',
                first_name: 'Alexandre ',
                type: { from: 1995, to: 2001, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 3,
                last_name: 'Radonikov',
                first_name: 'Nikola',
                type: { from: 2001, to: 2010, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 4,
                last_name: 'Kufza',
                first_name: 'Josef',
                type: { from: 2008, to: 2010, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 5,
                last_name: 'Rufza',
                first_name: 'Jan',
                type: { from: 2011, to: 2010, category: 'Ph.D. student' },
                url: 'membre/110'
            },
        ],
    },
    {
        id: 5,
        sigle: "EDE",
        name: ["Evolution Differential Equations", "Evoluční diferenciální rovnice"],
        date_start: 1970,
        date_end: null,
        activ: true,
        head: { id: 22, last_name: 'Nečasová', first_name: 'Šárka', title: 'RNDr., DSc.' },
        description: "The scope of this section covers qualitative aspects of theory of partial differential equations in mechanics and thermodynamics of continuum, in biology and in other sciences. The research aims at verification of correctness of mathematical models and of the possibility to provide theoretical predictions of future development of a system without the full knowledge of the initial state. The work focuses on investigation of equations describing fluid flow including heat exchange and interaction with solid bodies. Attention is paid also to processes in solid matters focusing on mathematical modelling of memory in multifunctional materials, to dynamical behaviour of bodies in a contact with an underlay, and to phase transitions. Several members cooperate with the Branch in Brno investigating the integration theory and ordinary differential equations.",
        nb_membres_activ: 30,
        nb_membres_former: 20,
        themes: [{
                header: 'Partial differential equations and mathematical theory of fluid dynamics',
                items: [
                    'system of equations describing the fluid flow in a physically realistic setting',
                    'qualitative behaviour of solutions to evolution equations',
                    'thermomechanics modeling',
                    'long time asymptotics',
                    'boundary behaviour',
                    'existence and localization of singularities',
                    'modeling moving bodies surrounded by fluid'
                ]
            },
            {
                header: 'Theory of intergal and ordinary differential equations',
                items: [
                    'generalized integral of Kurzweil-Henstock type',
                    'generalized ordinary differential equations'
                ]
            },
        ],
        members: [{
                id: 1,
                last_name: 'Bodnár',
                first_name: 'Tomáš',
                type: { from: 1985, category: 'Researcher' },
                url: 'members/researcher/1'
            },
            {
                id: 2,
                last_name: 'Nečasová',
                first_name: 'Šárka ',
                type: { from: 1995, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 3,
                last_name: 'Radoševič',
                first_name: 'Anna',
                type: { from: 1995, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 4,
                last_name: 'Kuf',
                first_name: 'Josef',
                type: { from: 2008, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 5,
                last_name: ' Monteiro',
                first_name: 'Giselle Antunes',
                type: { from: 2008, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 6,
                last_name: 'Schwarzacher',
                first_name: 'Sebastian',
                type: { from: 2008, category: 'Postdoc' },
                url: 'membre/110'
            },
            {
                id: 7,
                last_name: 'Schwoor',
                first_name: 'Sebastian',
                type: { from: 2008, category: 'Postdoc' },
                url: 'membre/115'
            },
            {
                id: 8,
                last_name: 'Tvrdý',
                first_name: 'Milan',
                type: { from: 2008, category: 'Researcher' },
                url: 'membre/115'
            }
        ],
        formerMembers: [{
                id: 1,
                last_name: 'Bonom',
                first_name: 'Tomáš',
                type: { from: 1985, to: 1995, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 2,
                last_name: 'Nekita',
                first_name: 'Alexandre ',
                type: { from: 1995, to: 2001, category: 'Researcher' },
                url: 'membre/110'
            },
            {
                id: 3,
                last_name: 'Radonikov',
                first_name: 'Nikola',
                type: { from: 2001, to: 2010, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 4,
                last_name: 'Kufza',
                first_name: 'Josef',
                type: { from: 2008, to: 2010, category: 'Ph.D. student' },
                url: 'membre/110'
            },
            {
                id: 5,
                last_name: 'Rufza',
                first_name: 'Jan',
                type: { from: 2011, to: 2010, category: 'Ph.D. student' },
                url: 'membre/110'
            },
        ],
    },

]