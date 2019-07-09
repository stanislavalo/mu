export default [
  {
    id:1,
    type:'main',
    name:['People','Lidé'],
    dropdown:true,
    url:null,
    items:[
      {url:'/members/researchers',name:['Researchers','Vědečtí pracovníci']},
      {url:'/members/staff', name:['Staff','Ostatní zaměstnanci']},
      {url:'/members/summary', name:['Summary','Seznam']}
    ],
  },
  {
    id:2,
    type:'main',
    name:['Institute','MU AV CZ'],
    dropdown:true,
    url:null,
    items:[
      {url:'/', name:['Home','Uvodni strana']},
    ],
  },
  {
    id:3,
    type:'main',
    name:['Events & Calender','Vedecke akce & Kalendar'],
    dropdown:true,
    url:null,
    items:[
      {url:'/events/calendar', name: ['Calendar','Kalendar']},
      {url:'/events/seminars', name: ['Seminars','Seminare']}
    ],
  },
  {
    id:4,
    type:'main',
    name:['Positions','Pracovni prilezitost'],
    dropdown:true,
    url:null,
    items:[
      {url:'/positions/open',name:['Open position','Volná místa']},
      {url:'/positions/thesetopics',name:['Proposed theses topics','Nabídka doktorského studia']}
    ],
  },
  {
    id:5,
    type:'bis',
    name:['Research','Výzkumná činnost'],
    dropdown:true,
    url:null,
    items:[{url:'/researche/preprints',name:['Preprints','Preprinty']},
      {url:'/research.publications',name:['Publications','Publikace'],}
    ] 
  },
  {
    id:6,
    type:'bis',
    name:['Departments','Vědecká oddělení'],
    items:[
      {url:'/department/detail/1', name:['Abstract Analysis (AA)','Abstraktní analýza (AA)']},
      {url:'/department/detail/2', name:['Algebra, Geometry and Mathematical Physics (AGMP)',
        'Algebra, geometrie a matematická fyzika (AGMP)']},
      {url:'/department/detail/3', name:['Branch in Brno (BB)','Pobočka v Brně (BB)']},
      {url:'/department/detail/4', name:['Constructive Methods of Mathematical Analysis (CMMA)',
        'Konstruktivní metody matematické analýzy (CMMA)']},
      {url:'/department/detail/5', name:['Evolution Differential Equations (EDE)',
      'Evoluční diferenciální rovnice (EDE)']},
      {url:'/department/detail/6', name:['Mathematical Logic and Theoretical Computer Science (MLTCS)',
        'Matematická logika a teoretická informatika (MLTCS)']},
      {url:'/department/archive', name:['Archive','Archiv']},
    ],
    dropdown:true,
    url:null
  },
  {
    id:7,
    type:'bis',
    name:['Journals',' Časopisy vydávané v MÚ'],
    items:[],
    dropdown:true,
    url:null
  },
  {
    id:8,
    type:'bis',
    name:['Partnership','Partneři'],
    items:[],
    dropdown:true,
    url:null
  }
]
;