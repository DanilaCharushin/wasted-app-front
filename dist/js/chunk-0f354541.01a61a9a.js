(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-0f354541"],{1331:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.regex)("integer",/(^[0-9]*$)|(^-[0-9]+$)/);t.default=n},"2a12":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"maxLength",max:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)<=e}))};t.default=n},3360:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.withParams)({type:"and"},(function(){for(var e=this,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return t.length>0&&t.reduce((function(t,a){return t&&a.apply(e,r)}),!0)}))};t.default=n},"3a54":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.regex)("alphaNum",/^[a-zA-Z0-9]*$/);t.default=n},"45b8":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.regex)("numeric",/^[0-9]*$/);t.default=n},"46bc":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"maxValue",max:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t<=+e}))};t.default=n},"5d75":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=/(^$|^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$)/,i=(0,r.regex)("email",n);t.default=i},"5db3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"minLength",min:e},(function(t){return!(0,r.req)(t)||(0,r.len)(t)>=e}))};t.default=n},6235:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.regex)("alpha",/^[a-zA-Z]*$/);t.default=n},6417:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"not"},(function(t,a){return!(0,r.req)(t)||!e.call(this,t,a)}))};t.default=n},"772d":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=/^(?:(?:https?|ftp):\/\/)(?:\S+(?::\S*)?@)?(?:(?!(?:10|127)(?:\.\d{1,3}){3})(?!(?:169\.254|192\.168)(?:\.\d{1,3}){2})(?!172\.(?:1[6-9]|2\d|3[0-1])(?:\.\d{1,3}){2})(?:[1-9]\d?|1\d\d|2[01]\d|22[0-3])(?:\.(?:1?\d{1,2}|2[0-4]\d|25[0-5])){2}(?:\.(?:[1-9]\d?|1\d\d|2[0-4]\d|25[0-4]))|(?:(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)(?:\.(?:[a-z\u00a1-\uffff0-9]-*)*[a-z\u00a1-\uffff0-9]+)*(?:\.(?:[a-z\u00a1-\uffff]{2,})))(?::\d{2,5})?(?:[/?#]\S*)?$/i,i=(0,r.regex)("url",n);t.default=i},"78ef":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"withParams",{enumerable:!0,get:function(){return r.default}}),t.regex=t.ref=t.len=t.req=void 0;var r=n(a("8750"));function n(e){return e&&e.__esModule?e:{default:e}}function i(e){return i="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},i(e)}var l=function(e){if(Array.isArray(e))return!!e.length;if(void 0===e||null===e)return!1;if(!1===e)return!0;if(e instanceof Date)return!isNaN(e.getTime());if("object"===i(e)){for(var t in e)return!0;return!1}return!!String(e).length};t.req=l;var u=function(e){return Array.isArray(e)?e.length:"object"===i(e)?Object.keys(e).length:String(e).length};t.len=u;var s=function(e,t,a){return"function"===typeof e?e.call(t,a):a[e]};t.ref=s;var o=function(e,t){return(0,r.default)({type:e},(function(e){return!l(e)||t.test(e)}))};t.regex=o},8750:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r="web"===Object({NODE_ENV:"production",BASE_URL:"/"}).BUILD?a("cb69").withParams:a("0234").withParams,n=r;t.default=n},"91d3":function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:":";return(0,r.withParams)({type:"macAddress"},(function(t){if(!(0,r.req)(t))return!0;if("string"!==typeof t)return!1;var a="string"===typeof e&&""!==e?t.split(e):12===t.length||16===t.length?t.match(/.{2}/g):null;return null!==a&&(6===a.length||8===a.length)&&a.every(i)}))};t.default=n;var i=function(e){return e.toLowerCase().match(/^[0-9a-f]{2}$/)}},aa82:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"requiredIf",prop:e},(function(t,a){return!(0,r.ref)(e,this,a)||(0,r.req)(t)}))};t.default=n},b5ae:function(e,t,a){"use strict";function r(e){return r="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},r(e)}Object.defineProperty(t,"__esModule",{value:!0}),Object.defineProperty(t,"alpha",{enumerable:!0,get:function(){return n.default}}),Object.defineProperty(t,"alphaNum",{enumerable:!0,get:function(){return i.default}}),Object.defineProperty(t,"numeric",{enumerable:!0,get:function(){return l.default}}),Object.defineProperty(t,"between",{enumerable:!0,get:function(){return u.default}}),Object.defineProperty(t,"email",{enumerable:!0,get:function(){return s.default}}),Object.defineProperty(t,"ipAddress",{enumerable:!0,get:function(){return o.default}}),Object.defineProperty(t,"macAddress",{enumerable:!0,get:function(){return d.default}}),Object.defineProperty(t,"maxLength",{enumerable:!0,get:function(){return c.default}}),Object.defineProperty(t,"minLength",{enumerable:!0,get:function(){return p.default}}),Object.defineProperty(t,"required",{enumerable:!0,get:function(){return f.default}}),Object.defineProperty(t,"requiredIf",{enumerable:!0,get:function(){return v.default}}),Object.defineProperty(t,"requiredUnless",{enumerable:!0,get:function(){return _.default}}),Object.defineProperty(t,"sameAs",{enumerable:!0,get:function(){return b.default}}),Object.defineProperty(t,"url",{enumerable:!0,get:function(){return m.default}}),Object.defineProperty(t,"or",{enumerable:!0,get:function(){return y.default}}),Object.defineProperty(t,"and",{enumerable:!0,get:function(){return q.default}}),Object.defineProperty(t,"not",{enumerable:!0,get:function(){return C.default}}),Object.defineProperty(t,"minValue",{enumerable:!0,get:function(){return N.default}}),Object.defineProperty(t,"maxValue",{enumerable:!0,get:function(){return O.default}}),Object.defineProperty(t,"integer",{enumerable:!0,get:function(){return I.default}}),Object.defineProperty(t,"decimal",{enumerable:!0,get:function(){return g.default}}),t.helpers=void 0;var n=x(a("6235")),i=x(a("3a54")),l=x(a("45b8")),u=x(a("ec11")),s=x(a("5d75")),o=x(a("c99d")),d=x(a("91d3")),c=x(a("2a12")),p=x(a("5db3")),f=x(a("d4f4")),v=x(a("aa82")),_=x(a("e652")),b=x(a("b6cb")),m=x(a("772d")),y=x(a("d294")),q=x(a("3360")),C=x(a("6417")),N=x(a("eb66")),O=x(a("46bc")),I=x(a("1331")),g=x(a("c301")),h=T(a("78ef"));function $(){if("function"!==typeof WeakMap)return null;var e=new WeakMap;return $=function(){return e},e}function T(e){if(e&&e.__esModule)return e;if(null===e||"object"!==r(e)&&"function"!==typeof e)return{default:e};var t=$();if(t&&t.has(e))return t.get(e);var a={},n=Object.defineProperty&&Object.getOwnPropertyDescriptor;for(var i in e)if(Object.prototype.hasOwnProperty.call(e,i)){var l=n?Object.getOwnPropertyDescriptor(e,i):null;l&&(l.get||l.set)?Object.defineProperty(a,i,l):a[i]=e[i]}return a.default=e,t&&t.set(e,a),a}function x(e){return e&&e.__esModule?e:{default:e}}t.helpers=h},b6cb:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"sameAs",eq:e},(function(t,a){return t===(0,r.ref)(e,this,a)}))};t.default=n},c301:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.regex)("decimal",/^[-]?\d*(\.\d+)?$/);t.default=n},c99d:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.withParams)({type:"ipAddress"},(function(e){if(!(0,r.req)(e))return!0;if("string"!==typeof e)return!1;var t=e.split(".");return 4===t.length&&t.every(i)}));t.default=n;var i=function(e){if(e.length>3||0===e.length)return!1;if("0"===e[0]&&"0"!==e)return!1;if(!e.match(/^\d+$/))return!1;var t=0|+e;return t>=0&&t<=255}},cb69:function(e,t,a){"use strict";(function(e){function a(e){return a="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},a(e)}Object.defineProperty(t,"__esModule",{value:!0}),t.withParams=void 0;var r="undefined"!==typeof window?window:"undefined"!==typeof e?e:{},n=function(e,t){return"object"===a(e)&&void 0!==t?t:e((function(){}))},i=r.vuelidate?r.vuelidate.withParams:n;t.withParams=i}).call(this,a("c8ba"))},d294:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(){for(var e=arguments.length,t=new Array(e),a=0;a<e;a++)t[a]=arguments[a];return(0,r.withParams)({type:"or"},(function(){for(var e=this,a=arguments.length,r=new Array(a),n=0;n<a;n++)r[n]=arguments[n];return t.length>0&&t.reduce((function(t,a){return t||a.apply(e,r)}),!1)}))};t.default=n},d4f4:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=(0,r.withParams)({type:"required"},(function(e){return"string"===typeof e?(0,r.req)(e.trim()):(0,r.req)(e)}));t.default=n},d573:function(e,t,a){"use strict";a.r(t);var r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"container"},[a("h4",[e._v("Информация о здании")]),e.loading?a("Loader"):a("form",{on:{submit:function(t){return t.preventDefault(),e.updateBuild(t)}}},[a("div",{staticClass:"q-pa-md"},[a("div",{staticClass:"input-field-address"},[a("label",[e._v("Адрес")]),a("q-input",{attrs:{outlined:""},model:{value:e.d.address,callback:function(t){e.$set(e.d,"address",t)},expression:"d.address"}})],1),a("div",{staticClass:"select-type-field"},[a("label",[e._v("Вид здания")]),a("div",{staticClass:"select"},[a("q-select",{attrs:{outlined:"",options:e.types},model:{value:e.d.type,callback:function(t){e.$set(e.d,"type",t)},expression:"d.type"}})],1)]),e.d.type===e.types[0]?a("div",[a("div",{staticClass:"select-purpose-field"},[a("label",[e._v("Назначение школы")]),a("div",{staticClass:"select"},[a("q-select",{attrs:{outlined:"",options:e.purposes},model:{value:e.d.purpose,callback:function(t){e.$set(e.d,"purpose",t)},expression:"d.purpose"}})],1),e.purposes.includes(e.d.purpose)&&e.d.purpose!==e.purposes[7]?e._e():a("div",[a("label",[e._v("Введите назначение школы")]),a("q-input",{attrs:{outlined:""},model:{value:e.d.purpose,callback:function(t){e.$set(e.d,"purpose",t)},expression:"d.purpose"}})],1),a("div",{staticClass:"input-field-year"},[a("label",[e._v("Год постройки здания")]),a("q-input",{class:{invalid:e.$v.construction_year.$dirty&&(!e.$v.construction_year.minValue||!e.$v.construction_year.maxValue)},attrs:{outlined:"",type:"number"},model:{value:e.d.construction_year,callback:function(t){e.$set(e.d,"construction_year",e._n(t))},expression:"d.construction_year"}}),!e.$v.construction_year.$dirty||e.$v.construction_year.minValue&&e.$v.construction_year.maxValue?e._e():a("span",[e._v("в формате гггг(начиная от 1900 г, не ранее)")])],1),a("div",{staticClass:"input-field-building-square"},[a("label",[e._v("Площадь здания, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.building_square,callback:function(t){e.$set(e.d,"building_square",e._n(t))},expression:"d.building_square"}})],1),a("div",{staticClass:"input-field-land-square"},[a("label",[e._v("Площадь земельного участка, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.land_square,callback:function(t){e.$set(e.d,"land_square",e._n(t))},expression:"d.land_square"}})],1),a("div",{staticClass:"input-field-number-of-storeys"},[a("label",[e._v("Этажность здания")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.number_of_storeys,callback:function(t){e.$set(e.d,"number_of_storeys",e._n(t))},expression:"d.number_of_storeys"}})],1),a("div",{staticClass:"input-field-build-height"},[a("label",[e._v("Высота здания (м)")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.build_height,callback:function(t){e.$set(e.d,"build_height",e._n(t))},expression:"d.build_height"}})],1),a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("label",[e._v("Здания (помещения), сдаваемые в аренду или безвозмездное пользование:")]),a("div",{staticClass:"input-field-arend-square"},[a("label",[e._v("Площадь, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.arend_square,callback:function(t){e.$set(e.d,"arend_square",e._n(t))},expression:"d.arend_square"}})],1),a("div",{staticClass:"input-field-arend-use-type"},[a("label",[e._v("Вид использования")]),a("q-input",{attrs:{outlined:"",type:"text"},model:{value:e.d.arend_use_type,callback:function(t){e.$set(e.d,"arend_use_type",t)},expression:"d.arend_use_type"}})],1)]),a("br"),a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("label",[e._v("Наполняемость:")]),a("div",{staticClass:"input-field-occupancy-proj"},[a("label",[e._v("Проектная")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.occupancy_proj,callback:function(t){e.$set(e.d,"occupancy_proj",e._n(t))},expression:"d.occupancy_proj"}})],1),a("div",{staticClass:"input-field-arend-occupancy-fact"},[a("label",[e._v("Фактическая")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.occupancy_fact,callback:function(t){e.$set(e.d,"occupancy_fact",e._n(t))},expression:"d.occupancy_fact"}})],1)]),a("br"),a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("label",[e._v("Неиспользуемые здания (помещения):")]),a("div",{staticClass:"input-field-unused-square"},[a("label",[e._v("Общая площадь, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.unused_square,callback:function(t){e.$set(e.d,"unused_square",e._n(t))},expression:"d.unused_square"}})],1),a("div",{staticClass:"input-field-arend-repair-need-square"},[a("label",[e._v("Площадь, требующая ремонта, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.repair_need_square,callback:function(t){e.$set(e.d,"repair_need_square",e._n(t))},expression:"d.repair_need_square"}})],1)]),a("br"),a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("label",[e._v("Общее техническое состояние здания:")]),a("div",{staticClass:"q-pa-md"},[a("q-list",[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Исправное состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Исправное состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния строительной конструкции или здания и сооружения в целом, характеризующаяся отсутствием дефектов и повреждений, влияющих на снижение несущей способности и эксплуатационной пригодности. ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Работоспособное состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Работоспособное состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния здания, при которой некоторые из численно оцениваемых контролируемых параметров не отвечают требованиям проекта, норм и стандартов, но имеющиеся нарушения требований, например, по деформативности, а в железобетоне и по трещиностойкости, в данных конкретных условиях эксплуатации не приводят к нарушению работоспособности, и несущая способность конструкций, с учетом влияния имеющихся дефектов и повреждений, обеспечивается. ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Ограниченно работоспособное состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Ограниченно работоспособное состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния здания или его строительных конструкций, при которой имеются дефекты и повреждения, приведшие к некоторому снижению несущей способности, но отсутствует опасность внезапного разрушения и функционирование конструкции возможно при контроле ее состояния, продолжительности и условий эксплуатации. ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Недопустимое состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Недопустимое состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния строительной конструкции или здания и сооружения в целом, характеризующаяся снижением несущей способности и эксплуатационных характеристик, при котором существует опасность для пребывания людей и сохранности оборудования (необходимо проведение страховочных мероприятий и усиление конструкций). ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Аварийное состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Аварийное состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния строительной конструкции или здания и сооружения в целом, характеризующаяся повреждениями и деформациями, свидетельствующими об исчерпании несущей способности и опасности обрушения. ")])],1)],1)],1)],1)]),a("br"),a("div",{staticClass:"input-field-construction-year"},[a("label",[e._v("Год проведения последнего капитального ремонта/реконструкции здания")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.construction_year,callback:function(t){e.$set(e.d,"construction_year",e._n(t))},expression:"d.construction_year"}})],1)],1)]):e.d.type===e.types[1]?a("div",[a("div",{staticClass:"input-field-year"},[a("label",[e._v("Год постройки здания")]),a("q-input",{class:{invalid:e.$v.construction_year.$dirty&&(!e.$v.construction_year.minValue||!e.$v.construction_year.maxValue)},attrs:{outlined:"",type:"number"},model:{value:e.d.construction_year,callback:function(t){e.$set(e.d,"construction_year",e._n(t))},expression:"d.construction_year"}}),!e.$v.construction_year.$dirty||e.$v.construction_year.minValue&&e.$v.construction_year.maxValue?e._e():a("span",[e._v("в формате гггг(начиная от 1900 г, не ранее)")])],1),a("div",{staticClass:"input-field-building-square"},[a("label",[e._v("Площадь занимаемых помещений, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.building_square,callback:function(t){e.$set(e.d,"building_square",e._n(t))},expression:"d.building_square"}})],1),a("div",{staticClass:"input-field-land-square"},[a("label",[e._v("Площадь земельного участка, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.land_square,callback:function(t){e.$set(e.d,"land_square",e._n(t))},expression:"d.land_square"}})],1),a("div",{staticClass:"input-field-number-of-storeys"},[a("label",[e._v("Этажность всего здания")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.number_of_storeys,callback:function(t){e.$set(e.d,"number_of_storeys",e._n(t))},expression:"d.number_of_storeys"}})],1),a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("label",[e._v("Наполняемость:")]),a("div",{staticClass:"input-field-occupancy-proj"},[a("label",[e._v("Проектная")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.occupancy_proj,callback:function(t){e.$set(e.d,"occupancy_proj",e._n(t))},expression:"d.occupancy_proj"}})],1),a("div",{staticClass:"input-field-arend-occupancy-fact"},[a("label",[e._v("Фактическая")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.occupancy_fact,callback:function(t){e.$set(e.d,"occupancy_fact",e._n(t))},expression:"d.occupancy_fact"}})],1)]),a("br"),a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("label",[e._v("Неиспользуемые здания (помещения):")]),a("div",{staticClass:"input-field-unused-square"},[a("label",[e._v("Общая площадь, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.unused_square,callback:function(t){e.$set(e.d,"unused_square",e._n(t))},expression:"d.unused_square"}})],1),a("div",{staticClass:"input-field-arend-repair-need-square"},[a("label",[e._v("Площадь, требующая ремонта, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.repair_need_square,callback:function(t){e.$set(e.d,"repair_need_square",e._n(t))},expression:"d.repair_need_square"}})],1)]),a("br"),a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("label",[e._v("Общее техническое состояние здания:")]),a("div",{staticClass:"q-pa-md"},[a("q-list",[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Исправное состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Исправное состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния строительной конструкции или здания и сооружения в целом, характеризующаяся отсутствием дефектов и повреждений, влияющих на снижение несущей способности и эксплуатационной пригодности. ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Работоспособное состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Работоспособное состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния здания, при которой некоторые из численно оцениваемых контролируемых параметров не отвечают требованиям проекта, норм и стандартов, но имеющиеся нарушения требований, например, по деформативности, а в железобетоне и по трещиностойкости, в данных конкретных условиях эксплуатации не приводят к нарушению работоспособности, и несущая способность конструкций, с учетом влияния имеющихся дефектов и повреждений, обеспечивается. ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Ограниченно работоспособное состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Ограниченно работоспособное состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния здания или его строительных конструкций, при которой имеются дефекты и повреждения, приведшие к некоторому снижению несущей способности, но отсутствует опасность внезапного разрушения и функционирование конструкции возможно при контроле ее состояния, продолжительности и условий эксплуатации. ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Недопустимое состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Недопустимое состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния строительной конструкции или здания и сооружения в целом, характеризующаяся снижением несущей способности и эксплуатационных характеристик, при котором существует опасность для пребывания людей и сохранности оборудования (необходимо проведение страховочных мероприятий и усиление конструкций). ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Аварийное состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Аварийное состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния строительной конструкции или здания и сооружения в целом, характеризующаяся повреждениями и деформациями, свидетельствующими об исчерпании несущей способности и опасности обрушения. ")])],1)],1)],1)],1)]),a("br"),a("div",{staticClass:"input-field-construction-year"},[a("label",[e._v("Год проведения последнего капитального ремонта/реконструкции здания")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.construction_year,callback:function(t){e.$set(e.d,"construction_year",e._n(t))},expression:"d.construction_year"}})],1)],1):e.d.type===e.types[2]?a("div",[a("div",{staticClass:"select-purpose-field"},[a("label",[e._v("Назначение школы")]),a("div",{staticClass:"select"},[a("q-select",{attrs:{outlined:"",options:e.purposes},model:{value:e.d.purpose,callback:function(t){e.$set(e.d,"purpose",t)},expression:"d.purpose"}})],1),e.purposes.includes(e.d.purpose)&&e.d.purpose!==e.purposes[7]?e._e():a("div",[a("label",[e._v("Введите назначение школы")]),a("q-input",{attrs:{outlined:""},model:{value:e.d.purpose,callback:function(t){e.$set(e.d,"purpose",t)},expression:"d.purpose"}})],1),a("div",{staticClass:"input-field-year"},[a("label",[e._v("Год пристройки здания")]),a("q-input",{class:{invalid:e.$v.construction_year.$dirty&&(!e.$v.construction_year.minValue||!e.$v.construction_year.maxValue)},attrs:{outlined:"",type:"number"},model:{value:e.d.construction_year,callback:function(t){e.$set(e.d,"construction_year",e._n(t))},expression:"d.construction_year"}}),!e.$v.construction_year.$dirty||e.$v.construction_year.minValue&&e.$v.construction_year.maxValue?e._e():a("span",[e._v("в формате гггг(начиная от 1900 г, не ранее)")])],1),a("div",{staticClass:"input-field-building-square"},[a("label",[e._v("Площадь занимаемого помещения, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.building_square,callback:function(t){e.$set(e.d,"building_square",e._n(t))},expression:"d.building_square"}})],1),a("div",{staticClass:"input-field-land-square"},[a("label",[e._v("Площадь земельного участка, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.land_square,callback:function(t){e.$set(e.d,"land_square",e._n(t))},expression:"d.land_square"}})],1),a("div",{staticClass:"input-field-number-of-storeys"},[a("label",[e._v("Этажность пристройки")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.number_of_storeys,callback:function(t){e.$set(e.d,"number_of_storeys",e._n(t))},expression:"d.number_of_storeys"}})],1),a("div",{staticClass:"input-field-build-height"},[a("label",[e._v("Высота пристройки (м)")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.build_height,callback:function(t){e.$set(e.d,"build_height",e._n(t))},expression:"d.build_height"}})],1),a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("label",[e._v("Здания (помещения), сдаваемые в аренду или безвозмездное пользование:")]),a("div",{staticClass:"input-field-arend-square"},[a("label",[e._v("Площадь, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.arend_square,callback:function(t){e.$set(e.d,"arend_square",e._n(t))},expression:"d.arend_square"}})],1),a("div",{staticClass:"input-field-arend-use-type"},[a("label",[e._v("Вид использования")]),a("q-input",{attrs:{outlined:"",type:"text"},model:{value:e.d.arend_use_type,callback:function(t){e.$set(e.d,"arend_use_type",t)},expression:"d.arend_use_type"}})],1)]),a("br"),a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("label",[e._v("Наполняемость:")]),a("div",{staticClass:"input-field-occupancy-proj"},[a("label",[e._v("Проектная")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.occupancy_proj,callback:function(t){e.$set(e.d,"occupancy_proj",e._n(t))},expression:"d.occupancy_proj"}})],1),a("div",{staticClass:"input-field-arend-occupancy-fact"},[a("label",[e._v("Фактическая")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.occupancy_fact,callback:function(t){e.$set(e.d,"occupancy_fact",e._n(t))},expression:"d.occupancy_fact"}})],1)]),a("br"),a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("label",[e._v("Неиспользуемые здания (помещения):")]),a("div",{staticClass:"input-field-unused-square"},[a("label",[e._v("Общая площадь, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.unused_square,callback:function(t){e.$set(e.d,"unused_square",e._n(t))},expression:"d.unused_square"}})],1),a("div",{staticClass:"input-field-arend-repair-need-square"},[a("label",[e._v("Площадь, требующая ремонта, Кв. м.")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.repair_need_square,callback:function(t){e.$set(e.d,"repair_need_square",e._n(t))},expression:"d.repair_need_square"}})],1)]),a("br"),a("q-card",{staticClass:"my-card",attrs:{flat:"",bordered:""}},[a("label",[e._v("Общее техническое состояние здания:")]),a("div",{staticClass:"q-pa-md"},[a("q-list",[a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Исправное состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Исправное состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния строительной конструкции или здания и сооружения в целом, характеризующаяся отсутствием дефектов и повреждений, влияющих на снижение несущей способности и эксплуатационной пригодности. ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Работоспособное состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Работоспособное состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния здания, при которой некоторые из численно оцениваемых контролируемых параметров не отвечают требованиям проекта, норм и стандартов, но имеющиеся нарушения требований, например, по деформативности, а в железобетоне и по трещиностойкости, в данных конкретных условиях эксплуатации не приводят к нарушению работоспособности, и несущая способность конструкций, с учетом влияния имеющихся дефектов и повреждений, обеспечивается. ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Ограниченно работоспособное состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Ограниченно работоспособное состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния здания или его строительных конструкций, при которой имеются дефекты и повреждения, приведшие к некоторому снижению несущей способности, но отсутствует опасность внезапного разрушения и функционирование конструкции возможно при контроле ее состояния, продолжительности и условий эксплуатации. ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Недопустимое состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Недопустимое состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния строительной конструкции или здания и сооружения в целом, характеризующаяся снижением несущей способности и эксплуатационных характеристик, при котором существует опасность для пребывания людей и сохранности оборудования (необходимо проведение страховочных мероприятий и усиление конструкций). ")])],1)],1),a("q-item",{directives:[{name:"ripple",rawName:"v-ripple"}],attrs:{tag:"label"}},[a("q-item-section",{attrs:{avatar:"",top:""}},[a("q-radio",{attrs:{val:"Аварийное состояние"},model:{value:e.d.TECHNICAL_CONDITION,callback:function(t){e.$set(e.d,"TECHNICAL_CONDITION",t)},expression:"d.TECHNICAL_CONDITION"}})],1),a("q-item-section",[a("q-item-label",[e._v("Аварийное состояние")]),a("q-item-label",{attrs:{caption:""}},[e._v("категория технического состояния строительной конструкции или здания и сооружения в целом, характеризующаяся повреждениями и деформациями, свидетельствующими об исчерпании несущей способности и опасности обрушения. ")])],1)],1)],1)],1)]),a("br"),a("div",{staticClass:"input-field-construction-year"},[a("label",[e._v("Год проведения последнего капитального ремонта/реконструкции здания")]),a("q-input",{attrs:{outlined:"",type:"number"},model:{value:e.d.last_repair_year,callback:function(t){e.$set(e.d,"last_repair_year",e._n(t))},expression:"d.last_repair_year"}})],1)],1)]):e._e(),a("div",{staticClass:"b"},[a("q-btn",{attrs:{color:"primary",label:"Изменить",type:"submit"}})],1)])])],1)},n=[],i=(a("96cf"),a("1da1")),l=a("b5ae"),u={data:function(){return{data:{},types:["Отдельно стоящее","Встроенное в многоквартирный дом","Пристроенное к многоквартирному дому"],purposes:["Корпус школы","Корпус д/с","Подразделение доп. образования","Овощехранилище","Мастерская","Теплица","Гараж","Иное"],loading:!0,d:{address:null,unused_square:null,TECHNICAL_CONDITION:null,repair_need_square:null,occupancy_proj:null,occupancy_fact:null,arend_square:null,construction_year:null,arend_use_type:null,land_square:null,number_of_storeys:null,building_square:null,build_height:null,type:null,purpose:null,choose_purpose:null,current:null,age:null,last_repair_year:null,id:null}}},validations:{construction_year:{minValue:Object(l["minValue"])(1900),maxValue:Object(l["maxValue"])((new Date).getFullYear())}},methods:{updateBuild:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,e.d.id=e.$route.params["id"],a=e.d,t.next=5,e.$store.dispatch("updateBuilding",a);case 5:r=t.sent,console.log(r),t.next=12;break;case 9:t.prev=9,t.t0=t["catch"](0),console.log(t.t0);case 12:case"end":return t.stop()}}),t,null,[[0,9]])})))()}},mounted:function(){var e=this;return Object(i["a"])(regeneratorRuntime.mark((function t(){var a,r,n;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.prev=0,a=localStorage.getItem("token"),r=e.$route.params["id"],t.next=5,e.$store.dispatch("fetchBuilding",{token:a,id:r});case 5:n=t.sent,e.data=n.data.data[0],console.log(e.data),e.d=n.data.data[0],e.loading=!1,t.next=15;break;case 12:t.prev=12,t.t0=t["catch"](0),console.log(t.t0);case 15:case"end":return t.stop()}}),t,null,[[0,12]])})))()}},s=u,o=a("2877"),d=a("fe09"),c=Object(o["a"])(s,r,n,!1,null,null,null);t["default"]=c.exports;c.options.components=Object.assign(Object.create(c.options.components||null),c.options.components||{},{QInput:d["d"],QSelect:d["j"],QCard:d["b"],QList:d["h"],QItem:d["e"],QItemSection:d["g"],QRadio:d["i"],QItemLabel:d["f"],QBtn:d["a"]}),c.options.directives=Object.assign(Object.create(c.options.directives||null),c.options.directives||{},{Ripple:d["k"]})},e652:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"requiredUnless",prop:e},(function(t,a){return!!(0,r.ref)(e,this,a)||(0,r.req)(t)}))};t.default=n},eb66:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e){return(0,r.withParams)({type:"minValue",min:e},(function(t){return!(0,r.req)(t)||(!/\s/.test(t)||t instanceof Date)&&+t>=+e}))};t.default=n},ec11:function(e,t,a){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.default=void 0;var r=a("78ef"),n=function(e,t){return(0,r.withParams)({type:"between",min:e,max:t},(function(a){return!(0,r.req)(a)||(!/\s/.test(a)||a instanceof Date)&&+e<=+a&&+t>=+a}))};t.default=n}}]);
//# sourceMappingURL=chunk-0f354541.01a61a9a.js.map