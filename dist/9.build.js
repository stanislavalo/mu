webpackJsonp([9],{221:function(e,t,i){var a,n;a=i(222);var r=i(226);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,e.exports=a},222:function(e,t,i){"use strict";function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(223),o=i.n(r);t.default={props:["item","detail"],components:{newTitleCard:o.a},computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.forEach(function(t){a(e,t,i[t])})}return e}({},Object(n.c)("header",{language:"language",mdAndDown:"mdAndDown"})),methods:{getIsFirst:function(e){return e}}}},223:function(e,t,i){var a,n;a=i(224);var r=i(225);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,e.exports=a},224:function(e,t,i){"use strict";function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1);t.default={props:["item","getIsFirst","detail"],computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.forEach(function(t){a(e,t,i[t])})}return e}({},Object(n.c)("header",{language:"language",mdAndDown:"mdAndDown"})),methods:{getUrl:function(e){return e.url},getImg:function(e,t){return null!==e&&(!(!t||1!=e.length)||!(!e.length||t||this.mdAndDown))},getCarousel:function(e,t){return null!==e&&!!(t&&e.length>1)},maxHeightImg:function(e){return this.$vuetify.breakpoint.lg?e?420:340:this.mdAndDown?"auto":this.$vuetify.breakpoint.xl?e?600:400:auto},maxHeightImg1:function(){return this.$vuetify.breakpoint.lg?240:this.mdAndDown?"auto":200}}}},225:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-card-title",{staticClass:"mx-0 px-0 my-0 py-0"},[i("div",{staticClass:"my-0 pb-0"},[e.getImg(e.item.slices,e.item.isFirst)?i("v-img",{staticClass:"mb-2",attrs:{src:e.item.slices[0],"max-height":e.maxHeightImg(e.detail),"aspect-ratio":"1.9"}}):e._e(),e._v(" "),e.getCarousel(e.item.slices,e.item.isFirst)?i("v-carousel",{staticClass:"mb-2",attrs:{height:e.maxHeightImg(e.detail)}},e._l(e.item.slices,function(e,t){return i("v-carousel-item",{key:t,attrs:{src:e.src,"reverse-transition":"fade-transition",transition:"fade-transition"}})}),1):e._e(),e._v(" "),i("p",{class:[{"px-1":!e.mdAndDown},{title:e.item.isFirst},{subheading:!e.item.isFirst},"py-0","my-0","indigo--text",{"font-weight-black":!e.item.isFirst}]},[e._v("\n        "+e._s(e.item.title))]),e._v(" "),e.getIsFirst(e.item.isFirst)?i("div",{class:[{"px-1":!e.mdAndDown},"py-2","black--text","text-justify"]},[e._v(e._s(e.item.description)+"\n        "),e._l(e.item.links,function(t,a){return i("router-link",{key:a,staticClass:"pt-1 pb-1 my-0 url",attrs:{to:{name:e.getUrl(t)},tag:"p"}},[i("a",[e._v(e._s(t.text))])])})],2):e._e(),e._v(" "),e.item.isFirst?e._e():i("p",{staticClass:"mt-2 mb-0 text-justify grey--text text--darken-2 pl-1 py-0"},[e._v("Short text: Lorem ipsum dolor sit \n        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \n      ")]),e._v(" "),e.item.slices?e._e():i("p",{staticClass:"mt-0 pt-0  text-justify grey--text text--darken-2 pl-1 py-0"},[e._v("Short text1: Lorem ipsum dolor sit \n        amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et \n      ")]),e._v(" "),i("p",{class:[{"mt-2":!e.mdAndDown},"custom-transform-class","grey--text","pl-1"]},[e._v(e._s(e.item.short))])],1)])},staticRenderFns:[]}},226:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("div",{staticClass:"px-0 pb-3"},[e.getIsFirst(e.item.isFirst)?i("new-title-card",{attrs:{item:e.item,getIsFirst:e.getIsFirst,detail:e.detail}}):i("router-link",{attrs:{to:{name:"new",params:{id:e.item.id}}}},[i("new-title-card",{attrs:{item:e.item,getIsFirst:e.getIsFirst,detail:!1}})],1)],1)},staticRenderFns:[]}},420:function(e,t,i){var a=i(421);"string"==typeof a&&(a=[[e.i,a,""]]);i(21)(a,{});a.locals&&(e.exports=a.locals)},421:function(e,t,i){t=e.exports=i(10)(),t.push([e.i,".description{font-family:arial,Helvetica,sans-serif;font-size:1.2em;font-weight:400;font-stretch:expanded}.url{text-decoration:underline}.custom-transform-class{text-transform:uppercase;border-left-color:orange;border-left-style:solid;border-left-width:2pt}",""])},422:function(e,t,i){"use strict";function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}Object.defineProperty(t,"__esModule",{value:!0});var n=i(1),r=i(221),o=i.n(r);t.default={data:function(){return{newsFirst:{},new1:[],new2:[],newsRemain:[],news:[{id:1,title:"M. Křížek, L. Somer, M. Markl, O. Kowalski, P. Pudlák, and I. Vrkoč received the 2018 Josef Hlávka Prize",description:"Every year, the Foundation of Josef, Marie and Zdeňka Hlávka awards the Josef Hlávka Prize for scientific literature. In the ceremony held at the Castle Lužany on June 17, 2019, M. Křížek, L. Somer, M. Markl, O. Kowalski, P. Pudlák, and I. Vrkoč recieved the 2018 Josef Hlávka Prize for their book Abelova cena – nejvyšší ocenění za matematiku (The Abel Prize – the Highest Achievement in Mathematics) published by Academia Publishing House in 2018. The book surveys the major results of the recipients of the first fifteen Abel Prizes. The Prize which is considered a mathematics counterpart of the Nobel Prize is awarded by the King of Norway every year to one or two mathematicians for their lifetime achievement.The Abel Prize is a Norwegian prize awarded annually by the King of Norway to one or more outstanding mathematicians. It is named after Norwegian mathematician Niels Henrik Abel (1802–1829) and directly modeled after the Nobel Prizes",slices:[{src:"/src/data/photos/news/Josef_Hlavka.jpg"},{src:"/src/data/photos/news/Krizek.jpg"},{src:"http://www.math.cas.cz/documents/Krizek_Somer2.jpg"}],links:[{url:"abel",text:"Book cover"},{url:"Krizek_Somer2",text:" M. Křížek and L. Somer in front of Josef Hlávka statue in Lužany"}],short:"scientific literature",type:0,order:1,isFirst:!0},{id:2,title:"Learnability can be undecidable",description:"Obor machine learning se zabývá zhruba otázkou, co se lze o nějakém objektu dozvědět z omezeného množství dat; v extrémním případě, jestli k uchopení daného problému vůbec stačí konečné množství dat, a pokud ano, kolik. To je dnes zajímavé hlavně kvůli počítačům, ale dalo by se to vnímat i jako studium možností lidského mozku. Ukázali jsme, že poměrně přirozená úloha v tomto oboru je nerozhodnutelná ze základních matematických axiomů. To je zase jiná větev matematiky, matematická logika, která ukazuje, že pravdivost některych tvrzení nelze rozhodnout ze základních axiomů. Klasický příklad je hypotéza kontinua, kdy je nerozhodnutelné, jaká je mohutnost reálných čísel. Podobně my ukazujeme, že obecná otázka, co se lze naučit z konečného množství dat, je nerozhodnutelná. Článek byl publikován v časopise Nature Machine Intelligence.",slices:[{src:"https://media.springernature.com/w300/springer-static/cover-hires/journal/42256/1/8"}],links:[{url:"paper",text:"Paper"}],short:"Machine learning, article: Nature Machine Intelligence",type:1,order:2,isFirst:!1},{id:3,title:"Commemorative Medal of Masaryk University in Brno",description:"On the occasion of Centennial of Masaryk University in Brno, the Commemorative Medal has been awarded on June 13, 2019 to the Institute of Mathematics as a recognition of the long-term collaboration with the Faculty of Science especially in the field of ordinary differential equations, algebraic topology and differential geometry, for membership in boards and commissions, important joint grant projects and doctoral programme.",slices:[{src:"/src/data/photos/news/muni.png"},{src:"src/data/photos/news/sumava.jpg"}],links:[{url:"award",text:"Award"},{url:"partners",text:"Complete list of awarded partners"}],short:"MUNI 100 Festival",type:1,order:3,isFirst:!1},{id:4,title:"Jan Grebík received the Josef Hlávka Prize",description:"On 16 November, the eve of the Students' Day of Fight for Freedom and Democracy, The Foundation of Josef, Marie and Zdeňka Hlávka is traditionally awarding the Josef Hlávka Prize for the best students of the Prague public universities and Brno Technical University and for young talented researchers in the Czech Academy of Sciences. Among this year's awardees was Jan Grebík, Ph.D. student of David Chodounský.",slices:[{src:"http://www.hlavkovanadace.cz/img/galerie/2018/181116/021.jpg"},{src:"http://www.hlavkovanadace.cz/img/galerie/2018/181116/023.jpg"},{src:"http://www.hlavkovanadace.cz/img/galerie/2018/181116/047.jpg"},{src:"http://www.hlavkovanadace.cz/img/galerie/2018/181116/074.jpg"}],links:null,short:"Award, Josef Hlávka Prize",type:1,order:4,isFirst:!1},{id:5,title:"The Academic Award – Praemium Academiae for Martin Markl",description:"Thursday, 6 December 2018 at 10:30 a.m., in the main lecture hall of the Institute of Mathematics CAS For abstract see the invitation below. The distinguished Eduard Čech Lectures held to commemorate one of the most eminent Czech mathematicians and founder of the Institute are directed to a general mathematical audience. Professor Vojtěch Rödl is the second Eduard Čech Distinguished Visitor. The fifteenth Eduard Čech Lecture will be part of his research programme in the Institute of Mathematics.",slices:[{src:"/src/data/photos/news/Akademicka_premie.jpg"}],links:[{url:"calendar",text:" A short video portrait of M. Markl"}],short:"Academic Award",type:1,order:5,isFirst:!1},{id:6,title:"Naši pracovníci se podíleli na nalezení nového typu černé díry",description:'Vědečtí pracovnící našeho ústavu V. Pravda a A. Pravdová ve spolupráci s kolegy R. Švarcem a J. Podolským z MFF UK nalezli statické, sféricky symetrické řešení polních rovnic kvadratické gravitace s nenulovou kosmologickou konstantou popisující černou díru. Tato teorie tedy kromě všeobecně známé Schwarzschildovy černé díry připouští navíc ještě další statickou, sféricky symetrickou černou díru. Ve své práci navázali na práce týmu z USA, Velké Británie a Číny, který s použitím numerických výpočtů existenci této nové černé díry v roce 2015 předpověděl (avšak  pouze v případě s nulovou kosmologickou konstantou) Čeští autoři využili svého předchozího výsledku, ve kterém ukázali, že sféricky symetrické statické prostoročasy jsou vždy konformní ke Kundtovým prostoročasům. Dále také využili toho, že dodatečné členy kvadratické gravitace lze zkombinovat do Bachova tenzoru, který se při konformních transformacích velmi jednoduše transformuje. Tento nový konformní přístup jim umožnil provést podstatnou část potřebných výpočtů "na pozadí" daleko jednoduššího Kundtova prostoročasu a vedl ke dramatickému zjednodušení  výsledných polních rovnic kvadratické gravitace. To následně umožnilo zkoumat tyto rovnice analytickými metodami. Ukázalo se, že tato nová černá díra má kromě hmotnosti ještě jeden další parametr, který odpovídá hodnotě Bachova tenzoru na horizontu. V práci bylo také ukázáno, že tento nový parametr má mimo jiné vliv na pohyb testovacích částic obíhajících tuto černou díru. Práce byla publikována ve špičkovém časopise Americké fyzikální společnosti Physical Review Letters.',slices:null,links:null,short:"Physical Review Letters,  Exact black holes in quadratic gravity with any cosmological constant ",type:1,order:6,isFirst:!1},{id:7,title:"Eduard Čech Distinguished Visitor Programme",description:"The programme has been established with the aim to significantly enhance the creative environment in the Institute of Mathematics by bring here highly distinguished mathematicians for prolonged periods. The Eduard Čech Distinguished Visitor for 2018/2019 is Prof. Vojtěch Rödl from the Emory University, Atlanta. For the details of the programme see the corresponding",slices:null,links:null,short:"research programme, Prof. Vojtěch Rödl from the Emory University, Atlanta",type:1,order:7,isFirst:!1},{id:8,title:"Miloslav Feistauer and Antonín Novotný received the Honorary Bernard Bolzano Medal for Merits in Mathematical Sciences",description:"President of the Czech Academy of Sciences Prof. Eva Zažímalová awarded Prof. RNDr. Miloslav Feistauer, DrSc., dr. h. c., from the Charles University, and Prof. RNDr. Antonín Novotný, CSc., from Université de Toulon, the Honorary Bernard Bolzano Medal for Merits in Mathematical Sciences. The ceremony took place on 6th February 2019 in the Institute of Mathematics of the CAS. M. Feistauer, member of the Learned Society of the Czech Republic, is a renowned specialist in development and analysis of numerical methods for solving partial differential equations. A. Novotný is a renowned specialist in theory of partial differential equations and their applications in mathematical description of fluid mechanics. Both have a long-term broad collaboration with the colleagues from the Institute of Mathematics of the CAS. The ceremony was followed with the workshop Antonín Novotný and his contribution to PDEs on 6th February and the seminar Current Problems in Numerical Analysis on 8th February dedicated to M. Feistauer.",slices:null,links:null,short:"Award",type:1,order:8,isFirst:!1},{id:9,title:"Dny otevřených dveří v Matematickém ústavu AV ČR | Open Houses in the Institute of Mathematics CAS",description:"Tradiční Dny otevřených dveří v Matematickém ústavu AV ČR jsou součástí Týdne vědy a techniky Akademie věd ČR, nejrozsáhlejšího vědeckého festivalu v ČR pořádaného Akademií věd ČR ve spolupráci s dalšími institucemi ve dnech 5.–11. listopadu 2018. Široká veřejnost a především studenti středních škol mají možnost nahlédnout do pracoven, laboratoří a knihoven a poznat, jak se dělá věda. Badatelé z výzkumných pracovišť AV ČR připravují širokou nabídku exkurzí, přednášek, výstav a diskusních večerů, ve kterých představí své výzkumné projekty, předvedou nejmodernější vědecké přístroje a experimenty a přiblíží návštěvníkům nejnovější trendy v oblasti vědy. V Matematickém ústavu AV ČR se Dny otevřených dveří uskuteční na pražském pracovišti ve dnech 5.–9. listopadu 2018. Traditional Open Houses in the Institute of Mathematics CAS was held as part of the Week of Science and Technology, the most extensive scientific festival in the Czech Republic, organized by the Czech Academy of Sciences in cooperation with other institutions from 5th to 11th November 2018. The scientists from the research workplaces of the Academy of Sciences prepare a wide offer of lectures, presentations, panel discussions, seminars, excursions, exhibitions and discussion evenings, in which they present their research projects, the most modern scientific apparatuses and outline the latest trends in the areas of science in the Czech Republic and the world. The Prague departments in the Institute of Mathematics will be open to public from 5th to 9th November 2018.",slices:null,links:[{url:"calendar",text:" Nabídka přednášek v MÚ AV ČR | Lectures offered in the Institute of Mathematics"}],short:"Týden vědy a techniky Akademie věd ČR, 5th to 9th November 2018",type:1,order:9,isFirst:!1},{id:10,title:"Higher Structures – a new journal",description:"M. Markl, together with M. Batanin and R. Kaufmann, founded the journal Higher Structures. It is an all-electronic, refereed journal on the theory of higher structures and its applications in the mathematical sciences. The journal publishes articles that make significant new contributions to mathematical science using higher structures, or that significantly advance our understanding of the foundational aspects of the theory of such structures. The scope of the journal includes: higher categories, operads and their generalisations, and applications of these to Algebra, Geometry, Topology, Combinatorics, Logic and Mathematical Physics.",slices:null,links:null,short:"mathematical science,  ",type:1,order:10,isFirst:!1},{id:11,title:"The fifteenth Eduard Čech Lecture: Prof. Vojtěch Rödl, Emory University, Atlanta",description:"Thursday, 6 December 2018 at 10:30 a.m., in the main lecture hall of the Institute of Mathematics CAS For abstract see the invitation below. The distinguished Eduard Čech Lectures held to commemorate one of the most eminent Czech mathematicians and founder of the Institute are directed to a general mathematical audience. Professor Vojtěch Rödl is the second Eduard Čech Distinguished Visitor. The fifteenth Eduard Čech Lecture will be part of his research programme in the Institute of Mathematics.",slices:null,links:[{url:"calendar",text:" Nabídka přednášek v MÚ AV ČR | Lectures offered in the Institute of Mathematics"}],short:"Quasi-Randomness and the Regularity Method in Hypergraph",type:1,order:11,isFirst:!1},{id:12,title:"The fifteenth Eduard Čech Lecture: Prof. Vojtěch Rödl, Emory University, Atlanta",description:"The President of the Czech Academy of Sciences Prof. Eva Zažímalová presented the most prestigious Academic Award – Praemium Academiae 2018 to three researchers of the Academy's institutes. One of them was Dr. Martin Markl, member of the Department of Algebra, Geometry and Mathematical Physics in the Institute of Mathematics. The Academic Award is a rigorously selective instrument for the financial and moral support of scientific excellence at the Czech Academy of Sciences. The most generous grant in the country providing a support for six years is intended to assist outstanding scientific figures who are the bearers of research at the top international level and create for them such conditions in which they can better develop their potential in the benefit of the Czech Academy of Sciences and all of Czech science. This is already the second Academic Award in the institute; the winner of the first one was E. Feireisl in 2007.",slices:null,links:[{url:"calendar",text:" Nabídka přednášek v MÚ AV ČR | Lectures offered in the Institute of Mathematics"}],short:"Quasi-Randomness and the Regularity Method in Hypergraph",type:1,order:12,isFirst:!1},{id:13,title:"The fifteenth Eduard Čech Lecture: Prof. Vojtěch Rödl, Emory University, Atlanta",description:"Thursday, 6 December 2018 at 10:30 a.m., in the main lecture hall of the Institute of Mathematics CAS For abstract see the invitation below. The distinguished Eduard Čech Lectures held to commemorate one of the most eminent Czech mathematicians and founder of the Institute are directed to a general mathematical audience. Professor Vojtěch Rödl is the second Eduard Čech Distinguished Visitor. The fifteenth Eduard Čech Lecture will be part of his research programme in the Institute of Mathematics.",slices:null,links:[{url:"calendar",text:" Nabídka přednášek v MÚ AV ČR | Lectures offered in the Institute of Mathematics"}],short:"Quasi-Randomness and the Regularity Method in Hypergraph",type:1,order:13,isFirst:!1}]}},components:{AppNewItem:o.a},created:function(){var e=[],t=[],i=[],a={};this.news.forEach(function(n){1==n.order?a=n:2==n.order||3==n.order?e.push(n):4==n.order||5==n.order?t.push(n):i.push(n)}),this.news1=e,this.news2=t,this.newsFirst=a,this.newsRemain=i},computed:function(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{},n=Object.keys(i);"function"==typeof Object.getOwnPropertySymbols&&(n=n.concat(Object.getOwnPropertySymbols(i).filter(function(e){return Object.getOwnPropertyDescriptor(i,e).enumerable}))),n.forEach(function(t){a(e,t,i[t])})}return e}({},Object(n.c)("header",{language:"language",mdAndDown:"mdAndDown"}),{maxHeight:function(){return"auto"},maxHeight1:function(){return"auto"}}),methods:{getUrl:function(e){return e.url},getImg:function(e,t){return null!==e&&(!(!t||1!=e.length)||!(!e.length||t||this.mdAndDown))},getCarousel:function(e,t){return!!(t&&e.length>1)}}}},423:function(e,t){e.exports={render:function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("v-container",{staticClass:"ma-0 pa-0",attrs:{fluid:""}},[i("v-layout",{staticClass:"mx-0 px-1 mb-10",attrs:{xs12:"",md12:"",lg12:"",xl12:"",row:"",wrap:""}},[e.mdAndDown?e._e():i("v-flex",{staticClass:"ma-0 pa-0",attrs:{lg8:"",xl8:""}},[i("v-card",{staticClass:"ma-0 pa-0",attrs:{"max-height":2*e.maxHeight,"min-height":2*e.maxHeight,flat:""}},[i("app-new-item",{attrs:{item:e.newsFirst,aspectRatio:"0.9",detail:!1}})],1)],1),e._v(" "),e.mdAndDown?i("v-flex",{staticClass:"ma-0 pa-0",attrs:{xs12:""}},e._l(e.news,function(e,t){return i("v-card",{key:t,staticClass:"ma-0 pa-0",attrs:{flat:"",height:"auto"}},[i("app-new-item",{attrs:{item:e,aspectRatio:"2.6"}})],1)}),1):e._e(),e._v(" "),e.mdAndDown?e._e():i("v-flex",{staticClass:"ma-0 pa-0",attrs:{lg2:"",xl2:""}},e._l(e.news1,function(t,a){return i("v-card",{key:a,staticClass:"ma-0 pa-1",attrs:{"max-height":e.maxHeight,"min-height":e.maxHeight,flat:""}},[i("app-new-item",{attrs:{item:t}})],1)}),1),e._v(" "),e.mdAndDown?e._e():i("v-flex",{staticClass:"ma-0 pa-0",attrs:{lg2:"",xl2:""}},e._l(e.news2,function(t,a){return i("v-card",{key:a,staticClass:"ma-0 pa-1",attrs:{"max-height":e.maxHeight,"min-height":e.maxHeight,flat:""}},[i("app-new-item",{attrs:{item:t}})],1)}),1)],1),e._v(" "),e.mdAndDown?e._e():i("v-layout",{staticClass:"mx-0 px-0",attrs:{md12:"",lg12:"",xl12:"",row:"",wrap:""}},e._l(e.newsRemain,function(t,a){return i("v-flex",{key:a,staticClass:"mt-3",attrs:{lg3:"",xl3:""}},[i("v-card",{staticClass:"ma-0 pa-1",attrs:{"max-height":e.maxHeight1,"min-height":e.maxHeight1,flat:""}},[i("app-new-item",{attrs:{item:t}})],1)],1)}),1),e._v(" "),i("v-layout",{staticClass:"mx-0 px-0",attrs:{xs12:"",md12:"",lg12:"",xl12:"",row:"",wrap:""}},[i("div",{staticClass:"text-xs-center"},[i("router-link",{attrs:{to:{name:"news"}}},[i("v-bottom-sheet",{scopedSlots:e._u([{key:"activator",fn:function(){return[i("v-btn",{attrs:{color:"indigo",dark:""}},[e._v("\n          >>   More news\n          ")])]},proxy:!0}]),model:{value:e.sheet,callback:function(t){e.sheet=t},expression:"sheet"}})],1)],1)])],1)},staticRenderFns:[]}},97:function(e,t,i){var a,n;i(420),a=i(422);var r=i(423);n=a=a||{},"object"!=typeof a.default&&"function"!=typeof a.default||(n=a=a.default),"function"==typeof n&&(n=n.options),n.render=r.render,n.staticRenderFns=r.staticRenderFns,e.exports=a}});