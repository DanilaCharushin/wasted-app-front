(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-2f48838d"],{2318:function(t,e,a){"use strict";a.r(e);var n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"container",staticStyle:{width:"80%"}},[t.loading?a("Loader"):a("div",[a("h4",[t._v("Редактирование контактных данных учреждения "),a("router-link",{attrs:{to:"/school/"+this.$route.params["inn"]}},[t._v(t._s(t.shortname))])],1),a("form",{on:{submit:function(e){return e.preventDefault(),t.submitHandler(e)}}},[a("div",{staticClass:"q-pa-sm"},[a("div",{staticClass:"card"},[a("div",{staticClass:"q-ma-md"},[a("h5",[a("strong",[t._v("Руководство образовательного учреждения")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("label",[t._v("Фамилия")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите фамилию"},model:{value:t.contactInfo.director.last_name,callback:function(e){t.$set(t.contactInfo.director,"last_name",e)},expression:"contactInfo.director.last_name"}})],1),a("div",{staticClass:"col"},[a("label",[t._v("Имя")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите имя"},model:{value:t.contactInfo.director.first_name,callback:function(e){t.$set(t.contactInfo.director,"first_name",e)},expression:"contactInfo.director.first_name"}})],1),a("div",{staticClass:"col"},[a("label",[t._v("Отчество")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите отчество"},model:{value:t.contactInfo.director.patronymic,callback:function(e){t.$set(t.contactInfo.director,"patronymic",e)},expression:"contactInfo.director.patronymic"}})],1)]),a("div",{staticClass:"input-field-phone"},[a("label",[t._v("Телефон рабочий")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите телефон",mask:"8 (###) ### - ####","fill-mask":"",type:"tel"},model:{value:t.contactInfo.director.phone,callback:function(e){t.$set(t.contactInfo.director,"phone",e)},expression:"contactInfo.director.phone"}})],1),a("div",{staticClass:"input-field-email"},[a("label",[t._v("Электронная почта")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите почту",type:"email"},model:{value:t.contactInfo.director.email,callback:function(e){t.$set(t.contactInfo.director,"email",e)},expression:"contactInfo.director.email"}})],1)])]),a("div",{staticClass:"card"},[a("div",{staticClass:"q-ma-md"},[a("h5",[a("strong",[t._v("Заместитель директора по административно-хозяйственной части / завхоз")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("label",[t._v("Фамилия")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите фамилию"},model:{value:t.contactInfo.zavhoz.last_name,callback:function(e){t.$set(t.contactInfo.zavhoz,"last_name",e)},expression:"contactInfo.zavhoz.last_name"}})],1),a("div",{staticClass:"col"},[a("label",[t._v("Имя")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите имя"},model:{value:t.contactInfo.zavhoz.first_name,callback:function(e){t.$set(t.contactInfo.zavhoz,"first_name",e)},expression:"contactInfo.zavhoz.first_name"}})],1),a("div",{staticClass:"col"},[a("label",[t._v("Отчество")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите отчество"},model:{value:t.contactInfo.zavhoz.patronymic,callback:function(e){t.$set(t.contactInfo.zavhoz,"patronymic",e)},expression:"contactInfo.zavhoz.patronymic"}})],1)]),a("div",{staticClass:"input-field-phone"},[a("label",[t._v("Телефон рабочий")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите телефон",mask:"8 (###) ### - ####","fill-mask":"",type:"tel"},model:{value:t.contactInfo.zavhoz.phone,callback:function(e){t.$set(t.contactInfo.zavhoz,"phone",t._n(e))},expression:"contactInfo.zavhoz.phone"}})],1),a("div",{staticClass:"input-field-email"},[a("label",[t._v("Электронная почта")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите почту",type:"email"},model:{value:t.contactInfo.zavhoz.email,callback:function(e){t.$set(t.contactInfo.zavhoz,"email",e)},expression:"contactInfo.zavhoz.email"}})],1)])]),a("div",{staticClass:"card"},[a("div",{staticClass:"q-ma-md"},[a("h5",[a("strong",[t._v("Ответственный за заполнение данных")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("label",[t._v("Фамилия")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите фамилию"},model:{value:t.contactInfo.updater.last_name,callback:function(e){t.$set(t.contactInfo.updater,"last_name",e)},expression:"contactInfo.updater.last_name"}})],1),a("div",{staticClass:"col"},[a("label",[t._v("Имя")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите имя"},model:{value:t.contactInfo.updater.first_name,callback:function(e){t.$set(t.contactInfo.updater,"first_name",e)},expression:"contactInfo.updater.first_name"}})],1),a("div",{staticClass:"col"},[a("label",[t._v("Отчество")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите отчество"},model:{value:t.contactInfo.updater.patronymic,callback:function(e){t.$set(t.contactInfo.updater,"patronymic",e)},expression:"contactInfo.updater.patronymic"}})],1)]),a("div",{staticClass:"input-field-phone"},[a("label",[t._v("Телефон рабочий")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите телефон",mask:"8 (###) ### - ####","fill-mask":"",type:"tel"},model:{value:t.contactInfo.updater.phone,callback:function(e){t.$set(t.contactInfo.updater,"phone",t._n(e))},expression:"contactInfo.updater.phone"}})],1),a("div",{staticClass:"input-field-email"},[a("label",[t._v("Электронная почта")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите почту",type:"email"},model:{value:t.contactInfo.updater.email,callback:function(e){t.$set(t.contactInfo.updater,"email",e)},expression:"contactInfo.updater.email"}})],1),a("div",{staticClass:"input-field-prikaz"},[a("label",[t._v("Приказ о назначении ответственного")]),a("q-file",{attrs:{outlined:"",label:"Приказ о назначении ответственного",hint:"Выберите файл с расширением jpg, jpeg, pdf размером не более 3МБ",multiple:"","max-total-size":"25165824",accept:".jpg, image/jpeg, .pdf"},on:{rejected:t.onRejected},model:{value:t.contactInfo.updater.prikaz,callback:function(e){t.$set(t.contactInfo.updater,"prikaz",e)},expression:"contactInfo.updater.prikaz"}})],1)])]),a("div",{staticClass:"card"},[a("div",{staticClass:"q-ma-md"},[a("h5",[a("strong",[t._v("Главный бухгалтер")])]),a("div",{staticClass:"row"},[a("div",{staticClass:"col"},[a("label",[t._v("Фамилия")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите фамилию"},model:{value:t.contactInfo.bookkeeper.last_name,callback:function(e){t.$set(t.contactInfo.bookkeeper,"last_name",e)},expression:"contactInfo.bookkeeper.last_name"}})],1),a("div",{staticClass:"col"},[a("label",[t._v("Имя")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите имя"},model:{value:t.contactInfo.bookkeeper.first_name,callback:function(e){t.$set(t.contactInfo.bookkeeper,"first_name",e)},expression:"contactInfo.bookkeeper.first_name"}})],1),a("div",{staticClass:"col"},[a("label",[t._v("Отчество")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите отчество"},model:{value:t.contactInfo.bookkeeper.patronymic,callback:function(e){t.$set(t.contactInfo.bookkeeper,"patronymic",e)},expression:"contactInfo.bookkeeper.patronymic"}})],1)]),a("div",{staticClass:"input-field-phone"},[a("label",[t._v("Телефон рабочий")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите телефон",mask:"8 (###) ### - ####","fill-mask":"",type:"tel"},model:{value:t.contactInfo.bookkeeper.phone,callback:function(e){t.$set(t.contactInfo.bookkeeper,"phone",t._n(e))},expression:"contactInfo.bookkeeper.phone"}})],1),a("div",{staticClass:"input-field-email"},[a("label",[t._v("Электронная почта")]),a("q-input",{attrs:{outlined:"",placeholder:"Введите почту",type:"email"},model:{value:t.contactInfo.bookkeeper.email,callback:function(e){t.$set(t.contactInfo.bookkeeper,"email",e)},expression:"contactInfo.bookkeeper.email"}})],1)])])]),a("button",{staticClass:"btn waves-effect waves-light",attrs:{type:"submit"}},[t._v(" Сохранить ")])])])],1)},o=[],l=(a("96cf"),a("1da1")),c={name:"UpdateContacts",data:function(){return{loading:!0,filesImages:null,shortname:null,contactInfo:{INN:null,director:{first_name:null,last_name:null,patronymic:null,phone:null,email:null},zavhoz:{first_name:null,last_name:null,patronymic:null,phone:null,email:null},updater:{first_name:null,last_name:null,patronymic:null,phone:null,email:null,prikaz:null},bookkeeper:{first_name:null,last_name:null,patronymic:null,phone:null,email:null}}}},mounted:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){var a,n,o,l;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,a=localStorage.getItem("token"),n=t.$route.params["inn"],e.next=5,t.$store.dispatch("fetchInfo",{token:a,inn:n});case 5:return o=e.sent,e.next=8,t.$store.dispatch("fetchPersonal",n);case 8:l=e.sent,t.contactInfo.director=l["director"],t.contactInfo.zavhoz=l["zavhoz"],t.contactInfo.updater=l["updater"],t.contactInfo.bookkeeper=l["bookkeeper"],t.contactInfo.INN=o["INN"],t.shortname=o["shortname"],t.loading=!1,e.next=21;break;case 18:e.prev=18,e.t0=e["catch"](0),console.log(e.t0);case 21:case"end":return e.stop()}}),e,null,[[0,18]])})))()},methods:{submitHandler:function(){var t=this;return Object(l["a"])(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return e.prev=0,console.log("contact"),console.log(t.contactInfo),e.next=5,t.$store.dispatch("updatePersonal",t.contactInfo);case 5:return e.next=7,t.$router.push("/school/".concat(t.contactInfo.INN));case 7:e.next=12;break;case 9:e.prev=9,e.t0=e["catch"](0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},onRejected:function(t){this.$q.notify({type:"negative",message:"".concat(t.length," file(s) did not pass validation constraints")})}}},i=c,s=(a("9c1f"),a("2877")),r=a("fe09"),p=Object(s["a"])(i,n,o,!1,null,"e64e3ace",null);e["default"]=p.exports;p.options.components=Object.assign(Object.create(p.options.components||null),p.options.components||{},{QInput:r["i"],QFile:r["h"]})},"3d0d":function(t,e,a){},"9c1f":function(t,e,a){"use strict";var n=a("3d0d"),o=a.n(n);o.a}}]);
//# sourceMappingURL=chunk-2f48838d.b6926ec3.js.map