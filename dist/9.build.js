webpackJsonp([9],{543:function(t,r,e){var i=e(544);"string"==typeof i&&(i=[[t.i,i,""]]);e(9)(i,{});i.locals&&(t.exports=i.locals)},544:function(t,r,e){r=t.exports=e(3)(),r.push([t.i,".activedoc{border-bottom:6px solid #8ea4d8}",""])},545:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=e(546),o=e.n(i),a=e(554),p=e.n(a);r.default={data:function(){return{report:!1}},components:{AppReportsList:o.a,AppDocumentsList:p.a},methods:{switchDocuments:function(t){1===t?this.report=!1:0===t&&(this.report=!0)}}}},546:function(t,r,e){var i,o;i=e(547);var a=e(553);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},547:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=e(548),o=e(549),a=e(550),p=e.n(a);r.default={data:function(){return{annuels:i.a,annuelFiles:o.a,last:null,past:null,docurl:null,pastList:!1}},components:{appList:p.a},created:function(){var t=[],r=[],e=0;i.a.forEach(function(i){e++,e<4?t.push(i):r.push(i)}),this.last=t,this.past=r},methods:{geturl:function(t){var r=null;o.a.forEach(function(e){e.id_rapport==t&&(r=e.url_fichier)}),r&&(this.docurl="http://www.math.cas.cz/fichier/ann_rapports/"+r)}}}},548:function(t,r,e){"use strict";r.a=[{id_rapport:"18",title:"Annual Report 2018 (in Czech)",commentaire:"",date_rapport:"2019-05-23"},{id_rapport:"19",title:"Medium-term financial outlook for 2019–21 (Czech)",commentaire:"",date_rapport:"2019-05-23"},{id_rapport:"20",title:"Annual Report 2018 (English summary)",commentaire:"",date_rapport:"2019-05-23"},{id_rapport:"17",title:"Annual Report 2017 (English summary)",commentaire:"",date_rapport:"2019-02-20"},{id_rapport:"16",title:"Annual Report 2017 (in Czech)",commentaire:"",date_rapport:"2018-06-16"},{id_rapport:"15",title:"Medium-term financial outlook for 2018–20 (Czech)",commentaire:"",date_rapport:"2018-02-02"},{id_rapport:"14",title:"Medium-term financial outlook for 2017–19 (Czech)",commentaire:"",date_rapport:"2017-06-08"},{id_rapport:"13",title:"Annual Report 2016 (English summary)",commentaire:"",date_rapport:"2017-06-01"},{id_rapport:"1",title:"Annual Report 2007 (in Czech)",commentaire:"",date_rapport:"2017-04-11"},{id_rapport:"2",title:"Annual Report 2008 (in Czech)",commentaire:"",date_rapport:"2017-04-11"},{id_rapport:"3",title:"Annual Report 2009 (in Czech)",commentaire:"",date_rapport:"2017-04-11"},{id_rapport:"4",title:"Annual Report 2010 (in Czech)",commentaire:"",date_rapport:"2017-04-11"},{id_rapport:"6",title:"Annual Report 2011 (in Czech)",commentaire:"",date_rapport:"2017-04-11"},{id_rapport:"7",title:"Annual Report 2012 (in Czech)",commentaire:"",date_rapport:"2017-04-11"},{id_rapport:"8",title:"Annual Report 2013 (in Czech)",commentaire:"",date_rapport:"2017-04-11"},{id_rapport:"9",title:"Annual Report 2014 (in Czech)",commentaire:"",date_rapport:"2017-04-11"},{id_rapport:"10",title:"Annual Report 2015 (in Czech)",commentaire:"",date_rapport:"2017-04-11"},{id_rapport:"11",title:"Annual Report 2015 (English summary)",commentaire:"",date_rapport:"2017-04-11"},{id_rapport:"12",title:"Annual Report 2016 (in Czech)",commentaire:"",date_rapport:"2017-04-11"}]},549:function(t,r,e){"use strict";r.a=[{id_rapport:"5",title_fichier:"",url_fichier:"ann_reports_20120628161530_25.pdf",ordre_rapport:"12"},{id_rapport:"10",title_fichier:"Výro&#269;ní zpráva 2015",url_fichier:"ann_reports_20160630091506_39.pdf",ordre_rapport:"21"},{id_rapport:"9",title_fichier:"Výro&#269;ní zpráva 2014",url_fichier:"ann_reports_20150623142027_14.pdf",ordre_rapport:"22"},{id_rapport:"8",title_fichier:"Výro&#269;ní zpráva 2013",url_fichier:"ann_reports_20140620104517_74.pdf",ordre_rapport:"23"},{id_rapport:"7",title_fichier:"vyrocni_zprava2012",url_fichier:"ann_reports_20130613140639_79.pdf",ordre_rapport:"24"},{id_rapport:"6",title_fichier:"vyrocni_zprava2011",url_fichier:"ann_reports_20120711105420_14.pdf",ordre_rapport:"25"},{id_rapport:"4",title_fichier:"vyrocni_zprava2010",url_fichier:"ann_reports_20110609160936_11.pdf",ordre_rapport:"26"},{id_rapport:"3",title_fichier:"vyrocni_zprava2009.pdf",url_fichier:"ann_reports_20101112162427_93.pdf",ordre_rapport:"27"},{id_rapport:"2",title_fichier:"vyrocni_zprava2008.pdf",url_fichier:"ann_reports_20101112162345_20.pdf",ordre_rapport:"28"},{id_rapport:"1",title_fichier:"vyrocni_zprava2007.pdf",url_fichier:"ann_reports_20101112162306_54.pdf",ordre_rapport:"29"},{id_rapport:"11",title_fichier:"AnnualReport2015",url_fichier:"ann_reports_20170411143342_36.pdf",ordre_rapport:"30"},{id_rapport:"12",title_fichier:"Výro&#269;ní zpráva 2016",url_fichier:"ann_reports_20170411143700_43.pdf",ordre_rapport:"31"},{id_rapport:"13",title_fichier:"AnnualReport2016",url_fichier:"ann_reports_20170601155045_79.pdf",ordre_rapport:"32"},{id_rapport:"14",title_fichier:"Financial_outlook17-19",url_fichier:"ann_reports_20170608105605_57.pdf",ordre_rapport:"36"},{id_rapport:"15",title_fichier:"Financial_outlook18-20",url_fichier:"ann_reports_20180202100446_94.pdf",ordre_rapport:"37"},{id_rapport:"16",title_fichier:"Výro&#269;ní zpráva 2017",url_fichier:"ann_reports_20180616153417_52.pdf",ordre_rapport:"38"},{id_rapport:"17",title_fichier:"AnnualReport2017",url_fichier:"ann_reports_20190220142722_60.pdf",ordre_rapport:"39"},{id_rapport:"18",title_fichier:"Výro&#269;ní zpráva 2018",url_fichier:"ann_reports_20190523155032_50.pdf",ordre_rapport:"40"},{id_rapport:"19",title_fichier:"Financial_outlook19-21",url_fichier:"ann_reports_20190523155442_47.pdf",ordre_rapport:"41"},{id_rapport:"20",title_fichier:"AnnualReport2018",url_fichier:"ann_reports_20190523155711_67.pdf",ordre_rapport:"42"}]},550:function(t,r,e){var i,o;i=e(551);var a=e(552);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i},551:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0}),r.default={props:["pastList","list"]}},552:function(t,r){t.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-flex",{attrs:{xs12:""}},[t.pastList?e("v-divider",{staticClass:"my-2"}):t._e(),t._v(" "),t.pastList?e("div",{staticClass:"headline"},[t._v("Past Reports")]):t._e(),t._v(" "),t._l(t.list,function(r,i){return e("div",{key:i,staticClass:" my-2"},[e("a",{staticClass:"black--text",attrs:{href:t.docurl,target:"_blanc"},on:{click:function(e){return t.geturl(r.id_rapport)}}},[e("div",{staticClass:"col-sm-4  pb-1"},[e("span",{class:[t.pastList?"body-2":"title"]},[t._v(t._s(r.title))]),t._v(" "),e("span",{staticClass:"body-2 blue--text text--darken-4 pl-1"},[t._v("Download PDF")])])])])})],2)},staticRenderFns:[]}},553:function(t,r){t.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-layout",{staticClass:"mx-2",attrs:{row:"",wrap:""}},[e("app-list",{staticClass:"mt-2",attrs:{pastList:!1,list:t.last}}),t._v(" "),e("app-list",{staticClass:"mt-0",attrs:{pastList:!0,list:t.past}})],1)},staticRenderFns:[]}},554:function(t,r,e){var i,o;e(555),i=e(557);var a=e(560);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,o._scopeId="data-v-4faf101f",t.exports=i},555:function(t,r,e){var i=e(556);"string"==typeof i&&(i=[[t.i,i,""]]);e(9)(i,{});i.locals&&(t.exports=i.locals)},556:function(t,r,e){r=t.exports=e(3)(),r.push([t.i,".pdf[data-v-4faf101f]{color:#8ea4d8}",""])},557:function(t,r,e){"use strict";Object.defineProperty(r,"__esModule",{value:!0});var i=e(558),o=e(559);r.default={data:function(){return{documents:i.a,documentsFiles:o.a,docurl:null}},methods:{geturl:function(t){var r=null;o.a.forEach(function(e){e.id_rapport==t&&(r=e.url_fichier)}),r&&(this.docurl="http://www.math.cas.cz/fichier/doc_rapports/"+r)}}}},558:function(t,r,e){"use strict";r.a=[{id_rapport:"1",title:"Foundation Deed",commentaire:"Foundation Deed issued by the Academy of Sciences of the Czech Republic according to the Act No. 341 Coll. of 28 July 2005 on public research institutions (in Czech).",date_rapport:"2015-01-21",doc_order:"1",title_url1:"",url1:"",title_url2:"",url2:"",title_url3:"",url3:""},{id_rapport:"5",title:"Act No. 341/2005 Coll. of 28 July 2005 on public research institutions",commentaire:"",date_rapport:"2015-01-21",doc_order:"3",title_url1:"",url1:"",title_url2:"",url2:"",title_url3:"",url3:""},{id_rapport:"8",title:"Act No. 283/1992 Coll. on the Academy of Sciences of the Czech Republic",commentaire:"The full version of Act No. 283/1992 Coll., as amended by Act No. 220/2000 Coll. and Act No. 342/2005 Coll.",date_rapport:"2016-09-02",doc_order:"4",title_url1:"",url1:"",title_url2:"",url2:"",title_url3:"",url3:""},{id_rapport:"9",title:"Institutional Research Plan 2005-2011",commentaire:"Research Plan No. AV0Z10190503 according to the Act 130/2002 Coll. - the basis for institutional funding for the Institute in the years 2005-2011.",date_rapport:"2015-01-21",doc_order:"6",title_url1:"",url1:"",title_url2:"",url2:"",title_url3:"",url3:""},{id_rapport:"10",title:"IRP - overview of further activities",commentaire:"Overview of further activities of the Institute beyond the framework of the Institutional Research Plan.",date_rapport:"2017-01-31",doc_order:"7",title_url1:"",url1:"",title_url2:"",url2:"",title_url3:"",url3:""},{id_rapport:"11",title:"Statutes of the Czech Academy of Sciences",commentaire:"",date_rapport:"2016-09-02",doc_order:"5",title_url1:"",url1:"",title_url2:"",url2:"",title_url3:"",url3:""},{id_rapport:"12",title:"Organizational Scheme",commentaire:"",date_rapport:"2019-02-18",doc_order:"2",title_url1:"",url1:"",title_url2:"",url2:"",title_url3:"",url3:""}]},559:function(t,r,e){"use strict";r.a=[{id_rapport:"2",titre_fichier:"vyrocni_zprava2007.pdf",url_fichier:"document_20101112155853_62.pdf",ordre_rapport:"2"},{id_rapport:"3",titre_fichier:"vyrocni_zprava2008.pdf",url_fichier:"document_20101112155956_22.pdf",ordre_rapport:"3"},{id_rapport:"4",titre_fichier:"vyrocni_zprava2009.pdf",url_fichier:"document_20101112160245_89.pdf",ordre_rapport:"4"},{id_rapport:"6",titre_fichier:"zakon341-2005.pdf",url_fichier:"document_20101113001716_26.pdf",ordre_rapport:"7"},{id_rapport:"7",titre_fichier:"zakon_283-1992",url_fichier:"document_20110603170247_27.pdf",ordre_rapport:"10"},{id_rapport:"1",titre_fichier:"Z&#345;izovací listina",url_fichier:"document_20101112154939_15.pdf",ordre_rapport:"31"},{id_rapport:"5",titre_fichier:"Act 341/2005",url_fichier:"document_20101113001509_35.pdf",ordre_rapport:"35"},{id_rapport:"9",titre_fichier:"IRP 2005-2011",url_fichier:"document_20110608223853_80.pdf",ordre_rapport:"37"},{id_rapport:"11",titre_fichier:"Statutes of the CAS",url_fichier:"document_20140728093548_18.pdf",ordre_rapport:"42"},{id_rapport:"8",titre_fichier:"Act 283/1992 on the CAS",url_fichier:"document_20110608222015_66.pdf",ordre_rapport:"43"},{id_rapport:"10",titre_fichier:"IRP 2005-2011 Appendix",url_fichier:"document_20110608224314_12.pdf",ordre_rapport:"44"},{id_rapport:"12",titre_fichier:"",url_fichier:"document_20190218175014_82.pdf",ordre_rapport:"45"}]},560:function(t,r){t.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-layout",{staticClass:"mx-2",attrs:{row:"",wrap:""}},[e("v-flex",{attrs:{xs12:""}},t._l(t.documents,function(r,i){return e("div",{key:i,staticClass:"my-2"},[e("a",{staticClass:"black--text",attrs:{href:t.docurl,target:"_blanc"},on:{click:function(e){return t.geturl(r.id_rapport)}}},[e("div",{staticClass:" pb-1"},[e("span",{staticClass:"title"},[t._v(" "+t._s(r.title))]),t._v(" "),e("span",{staticClass:"body-2 blue--text text--darken-4 pl-1"},[t._v("Download PDF")]),t._v(" "),r.commentaire?e("p",{staticClass:"subheading"},[t._v(t._s(r.commentaire))]):t._e()])])])}),0)],1)},staticRenderFns:[]}},561:function(t,r){t.exports={render:function(){var t=this,r=t.$createElement,e=t._self._c||r;return e("v-container",{attrs:{fluid:""}},[e("v-layout",{staticClass:"mb-2 mx-1",attrs:{row:"",wrap:""}},[e("v-flex",{staticClass:"headline blue--text text--darken-4 ",attrs:{xs12:""}},[e("span",{class:{activedoc:!t.report},on:{click:function(r){return t.switchDocuments(1)}}},[t._v(t._s(t.$t("documents.title")))]),t._v(" "),e("span",[t._v(" / ")]),t._v(" "),e("span",{class:{activedoc:t.report},on:{click:function(r){return t.switchDocuments(0)}}},[t._v(t._s(t.$t("documents.report")))])])],1),t._v(" "),e(t.report?"app-reports-list":"app-documents-list")],1)},staticRenderFns:[]}},86:function(t,r,e){var i,o;e(543),i=e(545);var a=e(561);o=i=i||{},"object"!=typeof i.default&&"function"!=typeof i.default||(o=i=i.default),"function"==typeof o&&(o=o.options),o.render=a.render,o.staticRenderFns=a.staticRenderFns,t.exports=i}});