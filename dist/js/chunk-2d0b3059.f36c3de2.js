(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2d0b3059"],{2731:function(t,e,n){"use strict";n.r(e);var s=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container"},[n("h5",[t._v("Добавить учреждение")]),n("div",{staticClass:"q-pa-md"},[n("div",{staticClass:"input-field-inn"},[n("label",[t._v("ИНН учреждения")]),n("q-input",{attrs:{outlined:"",placeholder:"Введите ИНН"},model:{value:t.INN,callback:function(e){t.INN=t._n(e)},expression:"INN"}})],1),n("div",{staticClass:"input-field-shortname"},[n("label",[t._v("Краткое наименование")]),n("q-input",{attrs:{outlined:"",placeholder:"Введите краткое наименование"},model:{value:t.shortname,callback:function(e){t.shortname=e},expression:"shortname"}})],1),n("div",{staticClass:"select-district"},[n("label",[t._v("Район")]),n("q-select",{attrs:{outlined:"",options:t.districts},model:{value:t.district,callback:function(e){t.district=e},expression:"district"}})],1),n("button",{staticClass:"btn waves-effect waves-light",on:{click:function(e){return e.preventDefault(),t.clickHandler(e)}}},[t._v(" Сохранить ")])])])},r=[],a=(n("b0c0"),n("96cf"),n("1da1")),c={name:"CreateSchool",data:function(){return{INN:null,shortname:null,district:null,districts:[]}},mounted:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n,s;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$store.dispatch("fetchDistricts");case 3:for(s in n=e.sent,n)t.districts.push(n[s].name.name);console.log(t.districts),e.next=11;break;case 8:e.prev=8,e.t0=e["catch"](0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},methods:{clickHandler:function(){var t=this;return Object(a["a"])(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:if(e.prev=0,n={INN:t.INN,shortname:t.shortname,district:t.district},console.log(n),!(n.district&&n.shortname&&n.INN)){e.next=10;break}return e.next=6,t.$store.dispatch("createSchool",n);case 6:return e.next=8,t.$router.push("/districts");case 8:e.next=11;break;case 10:alert("Введите все поля!");case 11:e.next=16;break;case 13:e.prev=13,e.t0=e["catch"](0),console.log(e.t0);case 16:case"end":return e.stop()}}),e,null,[[0,13]])})))()}}},i=c,o=n("2877"),l=n("fe09"),u=Object(o["a"])(i,s,r,!1,null,"69b712a2",null);e["default"]=u.exports;u.options.components=Object.assign(Object.create(u.options.components||null),u.options.components||{},{QInput:l["h"],QSelect:l["n"]})}}]);
//# sourceMappingURL=chunk-2d0b3059.f36c3de2.js.map