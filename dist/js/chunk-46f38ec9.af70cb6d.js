(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-46f38ec9"],{"07ac":function(t,a,e){var s=e("23e7"),n=e("6f53").values;s({target:"Object",stat:!0},{values:function(t){return n(t)}})},"6f53":function(t,a,e){var s=e("83ab"),n=e("df75"),i=e("fc6a"),r=e("d1e7").f,o=function(t){return function(a){var e,o=i(a),l=n(o),c=l.length,v=0,d=[];while(c>v)e=l[v++],s&&!r.call(o,e)||d.push(t?[e,o[e]]:o[e]);return d}};t.exports={entries:o(!0),values:o(!1)}},de86:function(t,a,e){"use strict";var s=e("f7fc"),n=e.n(s);n.a},f7fc:function(t,a,e){},feb7:function(t,a,e){"use strict";e.r(a);var s=function(){var t=this,a=t.$createElement,e=t._self._c||a;return e("div",{staticClass:"container"},[t.loading?e("Loader"):e("div",[e("h4",[t._v("Учереждение "),e("router-link",{attrs:{to:"/schoolcard/"+this.$route.params["school"]}},[t._v(" "+t._s(t.mainInfo.shortname))])],1),e("div",{staticClass:"card"},[e("h4",[t._v("Основные сведения учреждения")]),e("table",{staticClass:"main-info"},[e("tbody",[e("tr",{staticClass:"inn"},[e("th",[t._v("ИНН")]),e("td",[t._v(t._s(t.mainInfo.INN))])]),e("tr",{staticClass:"inn"},[e("th",[t._v("Краткое название")]),e("td",[t._v(t._s(t.mainInfo.shortname))])]),e("tr",{staticClass:"inn"},[e("th",[t._v("Полное название")]),e("td",[t._v(t._s(t.mainInfo.fullname))])]),e("tr",{staticClass:"inn"},[e("th",[t._v("Вид организационно-правовой формы")]),e("td",[t._v(t._s(t.mainInfo.form_type))])]),e("tr",{staticClass:"inn"},[e("th",[t._v("Вид образования")]),e("td",[t._v(t._s(t.mainInfo.edu_type))])])])]),e("br"),e("button",{staticClass:"btn waves-effect waves-light right"},[t._v(" Редактировать основные сведения ")])]),e("div",{staticClass:"card"},[e("h4",[t._v("Контактные данные")]),e("div",{staticClass:"director"},[e("h5",[t._v("Руководство образовательного учреждения")]),e("table",{staticClass:"main-info"},[e("tbody",[e("tr",{staticClass:"fio"},[e("th",[t._v("ФИО")]),e("td",[t._v(t._s(t.director.fio))])]),e("tr",{staticClass:"phone"},[e("th",[t._v("Телефон рабочий")]),e("td",[t._v(t._s(t.director.phone))])]),e("tr",{staticClass:"email"},[e("th",[t._v("Электронная почта")]),e("td",[t._v(t._s(t.director.email))])])])])]),e("div",{staticClass:"zavhoz"},[e("h5",[t._v("Заместитель директора по административно-хозяйственной части / завхоз")]),e("table",{staticClass:"main-info"},[e("tbody",[e("tr",{staticClass:"fio"},[e("th",[t._v("ФИО")]),e("td",[t._v(t._s(t.zavhoz.fio))])]),e("tr",{staticClass:"phone"},[e("th",[t._v("Телефон рабочий")]),e("td",[t._v(t._s(t.zavhoz.phone))])]),e("tr",{staticClass:"email"},[e("th",[t._v("Электронная почта")]),e("td",[t._v(t._s(t.zavhoz.email))])])])])]),e("div",{staticClass:"updater"},[e("h5",[t._v("Ответственный за заполнение данных")]),e("table",{staticClass:"main-info"},[e("tbody",[e("tr",{staticClass:"fio"},[e("th",[t._v("ФИО")]),e("td",[t._v(t._s(t.updater.fio))])]),e("tr",{staticClass:"phone"},[e("th",[t._v("Телефон рабочий")]),e("td",[t._v(t._s(t.updater.phone))])]),e("tr",{staticClass:"email"},[e("th",[t._v("Электронная почта")]),e("td",[t._v(t._s(t.updater.email))])]),e("tr",{staticClass:"prikaz"},[e("th",[t._v("Приказ о назначении ответственного")]),e("td",[t._v(t._s(t.updater.prikaz))])])])]),e("br")]),e("div",{staticClass:"bookkeeper"},[e("h5",[t._v("Главный бухгалтер")]),e("table",{staticClass:"main-info"},[e("tbody",[e("tr",{staticClass:"fio"},[e("th",[t._v("ФИО")]),e("td",[t._v(t._s(t.bookkeeper.fio))])]),e("tr",{staticClass:"phone"},[e("th",[t._v("Телефон рабочий")]),e("td",[t._v(t._s(t.bookkeeper.phone))])]),e("tr",{staticClass:"email"},[e("th",[t._v("Электронная почта")]),e("td",[t._v(t._s(t.bookkeeper.email))])])])])]),e("br"),e("button",{staticClass:"btn waves-effect waves-light right"},[t._v(" Редактировать контактные данные ")])]),e("div",{staticClass:"card"},[e("h4",[t._v("Реквизиты, адреса учреждения")]),e("table",{staticClass:"main-info"},[e("tbody",[e("tr",{staticClass:"site"},[e("th",[t._v("Официальный сайт")]),e("td",[t._v(t._s(t.rekvizit.site))])]),e("tr",{staticClass:"address"},[e("th",[t._v("Юридический адрес")]),e("td",[t._v(t._s(t.rekvizit.address))])]),e("tr",{staticClass:"district"},[e("th",[t._v("Территориальная принадлежность")]),e("td",[t._v(t._s(t.rekvizit.district))])]),e("tr",{staticClass:"date"},[e("th",[t._v("Дата образования юр.лица")]),e("td",[t._v(t._s(t.rekvizit.date))])])])]),e("br"),e("button",{staticClass:"btn waves-effect waves-light right"},[t._v(" Редактировать реквизиты ")])])]),e("button",{staticClass:"btn waves-effect waves-light",on:{click:t.toBuilding}},[t._v(" Здания ")])],1)},n=[],i=(e("b0c0"),e("b64b"),e("07ac"),e("96cf"),e("1da1")),r={name:"school",data:function(){return{mainInfo:{INN:null,form_type:null,edu_type:null,shortname:null,fullname:null},rekvizit:{address:null,district:null,site:null,date:null},director:{fio:null,phone:null,email:null},zavhoz:{fio:null,phone:null,email:null},updater:{fio:null,phone:null,email:null,prikaz:null},bookkeeper:{fio:null,phone:null,email:null},loading:!0}},mounted:function(){var t=this;return Object(i["a"])(regeneratorRuntime.mark((function a(){var e,s,n;return regeneratorRuntime.wrap((function(a){while(1)switch(a.prev=a.next){case 0:if(a.prev=0,e=t.$store.getters.info,s=localStorage.getItem("token"),n=t.$route.params["school"],Object.keys(e).length&&e["INN"]===n){a.next=9;break}return a.next=7,t.$store.dispatch("fetchInfo",{token:s,inn:n});case 7:e=a.sent,console.log(e);case 9:t.mainInfo.INN=e["INN"],t.mainInfo.fullname=e["name"],t.phone=e["phone"],t.mainInfo.shortname=e["shortname"],t.rekvizit.district=e["district"],t.address=e["address"],t.mainInfo.edu_type=e["edu_type"],t.mainInfo.form_type=e["form_type"],t.loading=!1,a.next=23;break;case 20:a.prev=20,a.t0=a["catch"](0),console.log(a.t0);case 23:case"end":return a.stop()}}),a,null,[[0,20]])})))()},methods:{changeData:function(t){var a=this;return Object(i["a"])(regeneratorRuntime.mark((function e(){var s,n,i,r,o;return regeneratorRuntime.wrap((function(e){while(1)switch(e.prev=e.next){case 0:for(o in s=prompt("Введите новые данные:",t.toElement["textContent"]),n=Object.values(a.$data),i=Object.keys(a.$data),r="",n)n[o]===t.toElement["textContent"]&&(r=i[o]);if(null==s||""===s){e.next=9;break}return a.$data[r]=s,e.next=9,a.$store.dispatch("updateInfo",a.$data);case 9:case"end":return e.stop()}}),e)})))()},toBuilding:function(){this.$router.push("/schoolbuilding/".concat(this.$route.params["school"]))}}},o=r,l=(e("de86"),e("2877")),c=Object(l["a"])(o,s,n,!1,null,"bdb33bb8",null);a["default"]=c.exports}}]);
//# sourceMappingURL=chunk-46f38ec9.af70cb6d.js.map