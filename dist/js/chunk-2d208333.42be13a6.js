(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d208333"],{a47a:function(t,e,s){"use strict";s.r(e);var i=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",{staticClass:"container"},[t.loading?s("Loader"):s("div",[s("h4",[t._v("Список учреждений")]),s("DistrictList",{attrs:{districts:t.districts}}),s("br"),s("div",{staticClass:"q-gutter-md"},[s("button",{staticClass:"btn waves-effect waves-light",on:{click:t.exportData}},[t._v(" Экспорт данных ")]),s("button",{staticClass:"btn waves-effect waves-light",on:{click:function(e){t.dialog=!0}}},[t._v(" Мастер выгрузки ")]),s("button",{staticClass:"btn waves-effect waves-light",on:{click:t.toCreateSchool}},[t._v(" Добавить учреждение ")])]),s("div",{staticClass:"q-pa-md q-gutter-sm"},[s("q-dialog",{attrs:{persistent:"",maximized:!0,"transition-show":"slide-up","transition-hide":"slide-down"},model:{value:t.dialog,callback:function(e){t.dialog=e},expression:"dialog"}},[s("q-card",{staticClass:"bg-teal-7 text-white"},[s("q-card-section",{staticClass:"row items-center q-pb-none"},[s("div",{staticClass:"text-h6"},[t._v("Мастер выгрузки")]),s("q-space"),s("q-btn",{directives:[{name:"close-popup",rawName:"v-close-popup"}],attrs:{icon:"close",flat:"",dense:""}})],1),s("q-separator",{attrs:{color:"teal-10"}}),s("q-card-section",{staticClass:"q-pt-md-lg"},[s("div",{staticClass:"q-pa-md"},[s("div",{staticClass:"q-gutter-xs row inline items-baseline"},[s("div",{staticClass:"text"},[t._v("Поля")]),s("div",{staticClass:"column"},[s("q-checkbox",{staticClass:"col",attrs:{label:"Основные сведения",color:"orange"},model:{value:t.isMainInfo,callback:function(e){t.isMainInfo=e},expression:"isMainInfo"}}),t.isMainInfo?s("div",{staticClass:"col",staticStyle:{height:"250px",width:"250px"}},t._l(t.mainInfo,(function(e,i,n){return s("q-checkbox",{key:n,staticClass:"col",attrs:{color:"orange",label:e,value:t.mainStates[i]},model:{value:t.mainStates[i],callback:function(e){t.$set(t.mainStates,i,e)},expression:"mainStates[key]"}})})),1):t._e()],1),s("div",{staticClass:"column inline items-baseline"},[s("q-checkbox",{staticClass:"col",attrs:{label:"Cведения о здании",color:"orange"},model:{value:t.isBuildInfo,callback:function(e){t.isBuildInfo=e},expression:"isBuildInfo"}}),t.isBuildInfo?s("div",{staticClass:"col",staticStyle:{height:"250px",width:"250px"}},t._l(t.buildInfo,(function(e,i){return s("q-checkbox",{key:i,staticClass:"col",attrs:{color:"orange",label:e,value:t.buildStates[i]},model:{value:t.buildStates[i],callback:function(e){t.$set(t.buildStates,i,e)},expression:"buildStates[key]"}})})),1):t._e()],1)]),s("br"),s("div",{staticClass:"q-gutter-xs row inline items-baseline"},[s("div",{staticClass:"text"},[t._v("Фильтры")]),s("div",{staticClass:"column inline items-baseline"},[s("q-checkbox",{staticClass:"col",attrs:{label:"Районы",color:"orange"},model:{value:t.isDistrictInfo,callback:function(e){t.isDistrictInfo=e},expression:"isDistrictInfo"}}),t.isDistrictInfo?s("div",{staticClass:"col",staticStyle:{height:"250px",width:"250px"}},t._l(t.districtInfo,(function(e,i){return s("q-checkbox",{key:i,staticClass:"col",attrs:{color:"orange",label:e,value:t.districtStates[i]},model:{value:t.districtStates[i],callback:function(e){t.$set(t.districtStates,i,e)},expression:"districtStates[key]"}})})),1):t._e()],1)])]),s("button",{staticClass:"btn waves-effect waves-light",on:{click:function(e){return e.preventDefault(),t.sendInfo(e)}}},[t._v(" Послать ")])])],1)],1)],1)],1)],1)},n=[],a=(s("b64b"),s("96cf"),s("1da1")),o=function(){var t=this,e=t.$createElement,s=t._self._c||e;return s("div",[s("ul",t._l(t.districts,(function(e){return s("li",{key:e.name["id"]},[s("q-expansion-item",{attrs:{label:e.name["name"]}},t._l(e["schools"],(function(e){return s("router-link",{key:e["INN"],attrs:{to:"/schoolcard/"+e["INN"]}},[t._v(" "+t._s(e["shortname"])+" "),s("br")])})),1)],1)})),0)])},c=[],r=(s("4160"),s("b0c0"),s("159b"),{data:function(){return{distrs:[]}},props:{districts:{type:Array}},name:"DistrictList",created:function(){var t=this;this.districts.forEach((function(e){t.distrs.push(e.name["name"])}))}}),l=r,d=s("2877"),u=s("fe09"),f=Object(d["a"])(l,o,c,!1,null,"64fe8282",null),p=f.exports;f.options.components=Object.assign(Object.create(f.options.components||null),f.options.components||{},{QExpansionItem:u["g"]});var b={name:"Districts",components:{DistrictList:p},data:function(){return{districts:[],test:[],mainInfo:{},buildInfo:{},districtInfo:{},mainStates:{},buildStates:{},districtStates:{},isMainInfo:!1,isBuildInfo:!1,isDistrictInfo:!1,loading:!0,error:!1,dialog:!1}},methods:{exportData:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("exportInfo");case 3:e.next=8;break;case 5:e.prev=5,e.t0=e["catch"](0),console.log(e.t0);case 8:case"end":return e.stop()}}),e,null,[[0,5]])})))()},sendInfo:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,s={},t.isBuildInfo&&(s["building"]=t.buildStates),t.isMainInfo&&(s["school"]=t.mainStates),t.isDistrictInfo&&(s["filters"]={},s["filters"]["district"]=t.districtStates),Object.keys(s).length&&(t.isMainInfo||t.isBuildInfo)){e.next=9;break}alert("Для отправки выберите поля!"),e.next=11;break;case 9:return e.next=11,t.$store.dispatch("sendMainInfo",s);case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()},toCreateSchool:function(){this.$router.push("/create_school")}},beforeCreate:function(){var t=localStorage.getItem("permission");t>10&&(alert("У вас недостаточно прав!"),this.$router.push("/"))},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var s,i,n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("fetchDistricts");case 3:return t.districts=e.sent,e.next=6,t.$store.dispatch("fetchFieldsBuilding");case 6:return t.buildInfo=e.sent,e.next=9,t.$store.dispatch("fetchFieldsDistricts");case 9:return t.districtInfo=e.sent,e.next=12,t.$store.dispatch("fetchFieldsSchool");case 12:for(s in t.mainInfo=e.sent,t.districtInfo=t.districtInfo["district"],t.districtStates=Object.assign({},t.districtInfo),t.districtStates)t.districtStates[s]=!0;return e.next=18,t.$store.dispatch("fetchAllModels");case 18:for(i in t.mainStates=Object.assign({},t.mainInfo),t.mainStates)t.mainStates[i]=!0;for(n in t.buildStates=Object.assign({},t.buildInfo),t.buildInfo)t.buildStates[n]=!0;t.loading=!1,e.next=29;break;case 25:e.prev=25,e.t0=e["catch"](0),console.log(e.t0),t.error=!0;case 29:case"end":return e.stop()}}),e,null,[[0,25]])})))()}},h=b,v=Object(d["a"])(h,i,n,!1,null,"475f1bee",null);e["default"]=v.exports;v.options.components=Object.assign(Object.create(v.options.components||null),v.options.components||{},{QDialog:u["f"],QCard:u["c"],QCardSection:u["d"],QSpace:u["q"],QBtn:u["b"],QSeparator:u["p"],QCheckbox:u["e"]}),v.options.directives=Object.assign(Object.create(v.options.directives||null),v.options.directives||{},{ClosePopup:u["a"]})}}]);
//# sourceMappingURL=chunk-2d208333.42be13a6.js.map