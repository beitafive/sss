(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["location"],{"07e3":function(t,e){var n={}.hasOwnProperty;t.exports=function(t,e){return n.call(t,e)}},"1bc3":function(t,e,n){var i=n("f772");t.exports=function(t,e){if(!i(t))return t;var n,a;if(e&&"function"==typeof(n=t.toString)&&!i(a=n.call(t)))return a;if("function"==typeof(n=t.valueOf)&&!i(a=n.call(t)))return a;if(!e&&"function"==typeof(n=t.toString)&&!i(a=n.call(t)))return a;throw TypeError("Can't convert object to primitive value")}},"1ec9":function(t,e,n){var i=n("f772"),a=n("e53d").document,o=i(a)&&i(a.createElement);t.exports=function(t){return o?a.createElement(t):{}}},2019:function(t,e,n){},"294c":function(t,e){t.exports=function(t){try{return!!t()}catch(e){return!0}}},"2e87":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"record-detail"},[n("div",{attrs:{id:"maps"}}),n("div",{staticClass:"user-info w-flex"},[n("img",{attrs:{src:"/JudicialZjjzFx/app/file/download.action?fileuuid="+t.mine.faceImgids}}),n("div",[n("p",[t._v(t._s(t.mine.userCName))]),n("p",[t._v(t._s(t.mine.companyName))])])]),n("div",{staticClass:"base-info"},[n("div",{staticClass:"date"},[t._v(t._s(t.info.date))]),n("div",{staticClass:"info-box w-flex"},[n("div",{staticClass:"time"},[t._v(t._s(t.info.time))]),n("div",{staticClass:"address"},[n("p",[t._v(t._s(t.info.location))]),n("p",[t._v(t._s(t.info.address))])])])])])},a=[],o={name:"detail",computed:{mine:function(){return this.$store.getters.mine},info:function(){return this.$route.query}},mounted:function(){this.initMap()},methods:{initMap:function(){var t=new AMap.Icon({size:new AMap.Size(40,50),image:n("8b68"),imageSize:new AMap.Size(20,30)}),e=new AMap.Marker({position:new AMap.LngLat(this.info.lon,this.info.lat),offset:new AMap.Pixel(-10,-10),icon:t,title:this.info.location,zoom:13}),i=new AMap.Map("maps",{resizeEnable:!0,zoom:10,center:[this.info.lon,this.info.lat]});i.add(e)}}},r=o,s=(n("77bf"),n("2877")),c=Object(s["a"])(r,i,a,!1,null,"469ac148",null);e["default"]=c.exports},"35e8":function(t,e,n){var i=n("d9f6"),a=n("aebd");t.exports=n("8e60")?function(t,e,n){return i.f(t,e,a(1,n))}:function(t,e,n){return t[e]=n,t}},3870:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAADAAAAAwCAYAAABXAvmHAAAAAXNSR0IArs4c6QAABEtJREFUaAXVWk1ME0EYtdufVBKIRAgRwsEEIwkJlFIwXkw0AY0HKVeJB6M3LuJBr/XKAQ6eNdEQrlJuYgLBizEttHDShAQTIkjAQmxEhRZ8r+xutmXbTrvb7bLJZGZ2vvm+92bmm52fdZwz4VlfXz+/vb3dn06nb0Jdu8PhaDs+Pq5HXEv1SCeR3kW8iuwXp9M539jY+KG1tfUPy408jnIrr6ys1B8cHNxD/SDCAMDVlKILhPYh/x4h7PF4Zjo7O3dLqa/IlkwgGo3WAOwoFDxDqFMUGYx/of4YSE0EAgESE36ECQC0c2lp6RHiEMIlYQslCILABkLI7/e/RpwWqSpEIB6PtxweHk5DYUBEqQkyEfhJEEQ2iukqSiASifShNaYr1er5ALI3SKK7uzuST4bvpUKFi4uLwyhfsBo8McFmcyqV+gifu18IY94eIPijo6PJQpWtKkNvDMO5p/Ts6RLgsIHwAoJXr1IV3v11uVw39IbTqSFEh+WYNwH8TxOJevGRnMYs2JyrM4sAxp2Ts43BMZ9Ea/X19vY2uN1uPxpjL9doOXn6BIb0O2LU1s8iwHkehYamSkmSppSu9vl8Meh7qzVoJA3wffDNh1odKgH5CxvSFpaZ3smpl5vPKS45+4JYlVoqAbAbRajIF1YxZkYMjM0Ylk8UXRkCXJjhBdc2Z+KBLzyXMZ98yORVpVkLMysaoU7GrH6Jg1ZYNdnGIPVJ3IwgHjBZuRXqbq+trXkl7qTgGKpXW2HZDBvEnEgk+iV5G2iGTst1wJlvcRZqt9yyeQavSphT28zTZ60mYL8iYSzxG3AmH2J3gUUtEpUksAcb3wQMuIGjRUBOFSF2l5qrUAIbkZdQzVD0icViPkwqc6WMCg6hZFHNFglgFRsHnjei5oidTlzWgZKokTLkLorWIXYXWPC4z7SZCHPzheXl5cuiIDRyHqxv7iJfcBOvkefGf5VO/BWJO9oCg+kRABkxqEOoOrFjAyXNCUnbUAgNP+/gYm5ra2sHmTO1HkLr7zc1NTVI8hH3rA0buBikzPF8ZkcGNuFi0nYrB2Ye/ZxsaHD8QQK2+R4INFbS6/XOqAR4uQBGYwIVbSFCrB0dHQmVgIxqHAWbtkBYAAQxYsRMKCLqsQpvRlAYUgrsGhNjV1fXbwWfQ0kwxlTqwqHRJyQNnc5pdZqcjqKhr4NEStGr9gBfsADdE0Rsx6H0Q8amgifmLAJ8gfPM74iGQOIf83Z4iAUhKGPLgnSKAEvRTZ9R4XGWZBUzxEJMehB0CVCwp6dnEuukB2SvV9GKd7RNDMSSz16WE+sJwamv4T3P5S09+AV4+uFQvpZXsBYlQMEqXLNG6bB6Y14BrsRCBCiMHrDionsTLc+L7leIzbvoVtgyli8XnoIQj+MzP3Noy8tM82cQLmXGMWQq86tBLjCez+M+bRBEeEpc7s8eswAexnAJW/azRy4R5qv5u81/bmO0l+mjFb8AAAAASUVORK5CYII="},"44f8":function(t,e,n){},"454f":function(t,e,n){n("46a7");var i=n("584a").Object;t.exports=function(t,e,n){return i.defineProperty(t,e,n)}},"456d":function(t,e,n){var i=n("4bf8"),a=n("0d58");n("5eda")("keys",(function(){return function(t){return a(i(t))}}))},"46a7":function(t,e,n){var i=n("63b6");i(i.S+i.F*!n("8e60"),"Object",{defineProperty:n("d9f6").f})},"584a":function(t,e){var n=t.exports={version:"2.6.9"};"number"==typeof __e&&(__e=n)},"5eda":function(t,e,n){var i=n("5ca1"),a=n("8378"),o=n("79e5");t.exports=function(t,e){var n=(a.Object||{})[t]||Object[t],r={};r[t]=e(n),i(i.S+i.F*o((function(){n(1)})),"Object",r)}},"63b6":function(t,e,n){var i=n("e53d"),a=n("584a"),o=n("d864"),r=n("35e8"),s=n("07e3"),c="prototype",u=function(t,e,n){var l,d,f,p=t&u.F,m=t&u.G,A=t&u.S,h=t&u.P,g=t&u.B,v=t&u.W,b=m?a:a[e]||(a[e]={}),w=b[c],S=m?i:A?i[e]:(i[e]||{})[c];for(l in m&&(n=e),n)d=!p&&S&&void 0!==S[l],d&&s(b,l)||(f=d?S[l]:n[l],b[l]=m&&"function"!=typeof S[l]?n[l]:g&&d?o(f,i):v&&S[l]==f?function(t){var e=function(e,n,i){if(this instanceof t){switch(arguments.length){case 0:return new t;case 1:return new t(e);case 2:return new t(e,n)}return new t(e,n,i)}return t.apply(this,arguments)};return e[c]=t[c],e}(f):h&&"function"==typeof f?o(Function.call,f):f,h&&((b.virtual||(b.virtual={}))[l]=f,t&u.R&&w&&!w[l]&&r(w,l,f)))};u.F=1,u.G=2,u.S=4,u.P=8,u.B=16,u.W=32,u.U=64,u.R=128,t.exports=u},"6e92":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"record"},[i("div",{attrs:{id:"maps"}}),i("div",{staticClass:"time-box w-flex",on:{click:function(e){t.show=!0}}},[i("img",{attrs:{src:n("a779")}}),t._v(" "+t._s(t.showDate)+"\n    "),i("img",{attrs:{src:n("dae5")}})]),i("div",{staticClass:"user w-flex"},[i("div",{staticClass:"user-name"},[t._v(t._s(t.mine.userCName))]),i("div",{staticClass:"base-info"},[i("p",[t._v(t._s(t.mine.userCName))]),i("p",[t._v("本月上报"),i("span",[t._v(t._s(t.count))]),t._v("次")])])]),t._l(t.list,(function(e,n){return i("div",{key:n,staticClass:"record-list"},[i("div",{staticClass:"list-day w-flex"},[i("span",[t._v(t._s(e.day))]),i("span",[t._v(t._s(e.month)+"月")]),i("p")]),t._l(e.list,(function(n,a){return i("div",{key:a,staticClass:"list-time w-flex",on:{click:function(i){return t.toDetail(e,n)}}},[i("div",{staticClass:"times"},[t._v(t._s(n.time))]),i("div",{staticClass:"address"},[i("p",[t._v(t._s(n.location))]),i("p",[t._v(t._s(n.address))]),i("div",{directives:[{name:"show",rawName:"v-show",value:"1"===n.isLcorder,expression:"times.isLcorder === '1'"}],staticClass:"zhiling"},[t._v("指令上报")])])])}))],2)})),i("van-popup",{style:{height:"40%"},attrs:{position:"bottom"},model:{value:t.show,callback:function(e){t.show=e},expression:"show"}},[i("van-datetime-picker",{attrs:{type:"year-month","min-date":t.minDate,formatter:t.formatter},on:{cancel:function(e){t.show=!1},confirm:t.selectTime},model:{value:t.date,callback:function(e){t.date=e},expression:"date"}})],1)],2)},a=[],o=(n("8e6e"),n("ac6a"),n("456d"),n("85f2")),r=n.n(o);function s(t,e,n){return e in t?r()(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var c=n("cadb");n("6762");function u(t){for(var e=[],n=[],i=0,a=t.length;i<a;i++){var o=t[i].posreportTime.slice(0,8);e.includes(o)||e.push(o)}for(var r=0,s=e.length;r<s;r++){var c=new Object;c.month=e[r].slice(4,6),c.day=e[r].slice(6,8),c.list=[];for(var u=0,l=t.length;u<l;u++)e[r]===t[u].posreportTime.slice(0,8)&&c.list.push({time:t[u].posreportTime.slice(8,10)+":"+t[u].posreportTime.slice(10,12),location:t[u].posName,address:t[u].detailAddr,lon:t[u].longitude,lat:t[u].latitude,isLcorder:t[u].isLcorder});n.push(c)}return console.log(n),n}function l(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function d(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?l(n,!0).forEach((function(e){s(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):l(n).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}var f={name:"record",data:function(){return{show:!1,date:new Date,count:0,list:[]}},computed:{showDate:function(){return Object(c["d"])(this.date).year+"-"+Object(c["d"])(this.date).month},mine:function(){return this.$store.getters.mine}},mounted:function(){this.getList()},methods:{selectTime:function(t){this.date=t,this.getList()},getList:function(){var t=this;this.$http.get(this.$api.location.list,{useruuid:localStorage.uuid,datetime:Object(c["d"])(this.date).dateStr}).then((function(e){if("1"===e.state&&(t.list=u(e.data),t.count=e.data.length,e.data.length)){var i=new AMap.Icon({size:new AMap.Size(40,50),image:n("8b68"),imageSize:new AMap.Size(20,30)}),a=new AMap.Marker({position:new AMap.LngLat(e.data[0].longitude,e.data[0].latitude),offset:new AMap.Pixel(-10,-10),icon:i,zoom:13}),o=new AMap.Map("maps",{resizeEnable:!0,zoom:10,center:[e.data[0].longitude,e.data[0].latitude]});o.add(a)}t.show=!1}))},toDetail:function(t,e){var n=this,i=d({date:t.month+"月"+t.day+"日"},e);setTimeout((function(){n.$push("/location/detail?address=".concat(encodeURIComponent(i.address),"&date=").concat(encodeURIComponent(i.date),"&lon=").concat(i.lon,"&lat=").concat(i.lat,"&location=").concat(encodeURIComponent(i.location),"&time=").concat(i.time))}),300)}}},p=f,m=(n("7e98"),n("2877")),A=Object(m["a"])(p,i,a,!1,null,"602b689d",null);e["default"]=A.exports},"77bf":function(t,e,n){"use strict";var i=n("e967"),a=n.n(i);a.a},"794b":function(t,e,n){t.exports=!n("8e60")&&!n("294c")((function(){return 7!=Object.defineProperty(n("1ec9")("div"),"a",{get:function(){return 7}}).a}))},"79aa":function(t,e){t.exports=function(t){if("function"!=typeof t)throw TypeError(t+" is not a function!");return t}},"7e98":function(t,e,n){"use strict";var i=n("44f8"),a=n.n(i);a.a},"7ea6":function(t,e,n){"use strict";var i=n("2019"),a=n.n(i);a.a},"7f7f":function(t,e,n){var i=n("86cc").f,a=Function.prototype,o=/^\s*function ([^ (]*)/,r="name";r in a||n("9e1e")&&i(a,r,{configurable:!0,get:function(){try{return(""+this).match(o)[1]}catch(t){return""}}})},"85f2":function(t,e,n){t.exports=n("454f")},"8b68":function(t,e){t.exports="data:image/png;base64,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"},"8e60":function(t,e,n){t.exports=!n("294c")((function(){return 7!=Object.defineProperty({},"a",{get:function(){return 7}}).a}))},"8e6e":function(t,e,n){var i=n("5ca1"),a=n("990b"),o=n("6821"),r=n("11e9"),s=n("f1ae");i(i.S,"Object",{getOwnPropertyDescriptors:function(t){var e,n,i=o(t),c=r.f,u=a(i),l={},d=0;while(u.length>d)n=c(i,e=u[d++]),void 0!==n&&s(l,e,n);return l}})},"990b":function(t,e,n){var i=n("9093"),a=n("2621"),o=n("cb7c"),r=n("7726").Reflect;t.exports=r&&r.ownKeys||function(t){var e=i.f(o(t)),n=a.f;return n?e.concat(n(t)):e}},"9ae4":function(t,e,n){"use strict";n.r(e);var i=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"map"},[i("div",{staticClass:"map-title w-flex"},[t._v("\n    "+t._s(t.location)+"\n    "),i("img",{attrs:{src:n("3870")}}),i("span",[t._v(t._s(t.nowDate))])]),i("div",{attrs:{id:"maps"}}),i("div",{staticClass:"location-info"},[i("div",{staticClass:"location"},[i("p",[t._v("我的位置")]),i("p",[t._v(t._s(t.address))])])]),i("div",{staticClass:"btns",on:{click:t.upload}},[t._v("\n    位置上报"),i("br"),i("span",[t._v(t._s(t.nowTime.hour)+":"+t._s(t.nowTime.minute))])]),i("div",{staticClass:"tips"},[t._v(t._s(t.lastTime?"最近一次上报时间:"+t.lastTime:"今日你还未完成位置上报"))])])},a=[],o=(n("7f7f"),n("cadb")),r=n("cebe"),s=n.n(r),c={name:"index",data:function(){return{nowDate:"",nowTime:"",system:{},address:"",location:"",township:"",list:[],lastTime:"",inter:{}}},computed:{mine:function(){return this.$store.getters.userInfo}},mounted:function(){var t=this;this.initMap(),this.nowDate=Object(o["d"])().symbolStr,this.nowTime=Object(o["d"])(),this.inter=setInterval((function(){t.nowTime=Object(o["d"])()}),3e4)},destroyed:function(){clearInterval(this.inter)},methods:{initMap:function(){var t=this;this.$toast.loading(),this.$http.get(this.$api.location.list,{useruuid:localStorage.uuid,datetime:Object(o["d"])().dateStr}).then((function(e){"1"===e.state&&(t.list=e.data,e.data.length&&Object(o["b"])(e.data[0].posreportTime).day==Object(o["d"])().day&&(t.lastTime=Object(o["a"])(e.data[0].posreportTime)))})),this.$app.get_location((function(t){var e=JSON.parse(t),n=new AMap.Icon({size:new AMap.Size(40,50),image:"static/img/map_icon.png",imageSize:new AMap.Size(20,30)}),i=new AMap.Marker({position:new AMap.LngLat(e.lon,e.lat),offset:new AMap.Pixel(-10,-10),icon:n,zoom:13}),a=new AMap.Map("maps",{resizeEnable:!0,zoom:10,center:[e.lon,e.lat]});a.add(i),localStorage.ios=t})),setTimeout((function(){var e=JSON.parse(localStorage.ios);t.system=e,s()({url:"https://restapi.amap.com/v3/geocode/regeo?location=".concat(e.lon,",").concat(e.lat,"&key=ea4ea3d1c7a9c1bf5e97c1eebcd2e065"),methods:"get",responseType:"json"}).then((function(e){t.location=e.data.regeocode.addressComponent.neighborhood.name.length?e.data.regeocode.addressComponent.neighborhood.name:e.data.regeocode.addressComponent.streetNumber.street+e.data.regeocode.addressComponent.streetNumber.number,t.address=e.data.regeocode.formatted_address,t.township=e.data.regeocode.addressComponent.township,t.address||window.location.reload(),t.$toast.clear()}))}),1500)},upload:function(){var t=this;"1"===this.$route.query.type?this.$http.get(this.$api.location.upload,{useruuid:localStorage.uuid,sqjzryXm:this.$store.state.userInfo.userCName,longitude:this.system.lon,latitude:this.system.lat,posName:this.location,detailAddr:this.address,posreportTime:Object(o["d"])().dateStr3,corrpsnappaccName:this.$store.state.userInfo.userName}).then((function(e){"1"===e.state&&(t.$app.replace_new_url("/location/record"),t.$toast.success("上报成功"))})):this.callLocation()},callLocation:function(){var t=this;this.$http.get(this.$api.cmd.upload,{useruuid:localStorage.uuid,orderId:this.$route.query.id,dwrq:Object(o["d"])().dateStr2,dwsj:Object(o["d"])().dateStr4,dwsblx:this.system.device,jd:this.system.lon,wd:this.system.lat,posName:this.township,dwszdmc:this.address,dwzt:"Y6901"}).then((function(e){"1"===e.state&&(t.$app.replace_new_url("/location/record"),t.$toast.success("上报成功"))}))}}},u=c,l=(n("7ea6"),n("2877")),d=Object(l["a"])(u,i,a,!1,null,"7368c64d",null);e["default"]=d.exports},a779:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAYCAYAAADgdz34AAAA2UlEQVRIS+1UQQrCMBCcgOhJPyI+yHcodA8eclDYgr7D/9if6MWKoEQaCWmbZgPxUOxtp9Od7Ey6Ct7DzFsAuwbeE9HR57j1EF91CFwBzBv8RkSLAYEgv0vg5TYkohbHmyDIzy/AzEsAZwCrkBUJ7yoAa8XMlwzN7XkqI/DxcMhr6QS271+g17mWRVKPY/nfDGI/kPJGGLINx1ph/49UvGVRaqO+A40wg7IsH+5VLIpiamop3ruLsmegtZ64E2itn6aW4j/dpncAM+kKiOTX5poeAGwyiNQATm9ROtBjflHsVQAAAABJRU5ErkJggg=="},ac6a:function(t,e,n){for(var i=n("cadf"),a=n("0d58"),o=n("2aba"),r=n("7726"),s=n("32e9"),c=n("84f2"),u=n("2b4c"),l=u("iterator"),d=u("toStringTag"),f=c.Array,p={CSSRuleList:!0,CSSStyleDeclaration:!1,CSSValueList:!1,ClientRectList:!1,DOMRectList:!1,DOMStringList:!1,DOMTokenList:!0,DataTransferItemList:!1,FileList:!1,HTMLAllCollection:!1,HTMLCollection:!1,HTMLFormElement:!1,HTMLSelectElement:!1,MediaList:!0,MimeTypeArray:!1,NamedNodeMap:!1,NodeList:!0,PaintRequestList:!1,Plugin:!1,PluginArray:!1,SVGLengthList:!1,SVGNumberList:!1,SVGPathSegList:!1,SVGPointList:!1,SVGStringList:!1,SVGTransformList:!1,SourceBufferList:!1,StyleSheetList:!0,TextTrackCueList:!1,TextTrackList:!1,TouchList:!1},m=a(p),A=0;A<m.length;A++){var h,g=m[A],v=p[g],b=r[g],w=b&&b.prototype;if(w&&(w[l]||s(w,l,f),w[d]||s(w,d,g),c[g]=f,v))for(h in i)w[h]||o(w,h,i[h],!0)}},aebd:function(t,e){t.exports=function(t,e){return{enumerable:!(1&t),configurable:!(2&t),writable:!(4&t),value:e}}},d864:function(t,e,n){var i=n("79aa");t.exports=function(t,e,n){if(i(t),void 0===e)return t;switch(n){case 1:return function(n){return t.call(e,n)};case 2:return function(n,i){return t.call(e,n,i)};case 3:return function(n,i,a){return t.call(e,n,i,a)}}return function(){return t.apply(e,arguments)}}},d9f6:function(t,e,n){var i=n("e4ae"),a=n("794b"),o=n("1bc3"),r=Object.defineProperty;e.f=n("8e60")?Object.defineProperty:function(t,e,n){if(i(t),e=o(e,!0),i(n),a)try{return r(t,e,n)}catch(s){}if("get"in n||"set"in n)throw TypeError("Accessors not supported!");return"value"in n&&(t[e]=n.value),t}},dae5:function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABgAAAAJCAYAAAAo/ezGAAAAAXNSR0IArs4c6QAAAK5JREFUKBWNUksSwiAMNdwM2OktOvZWtrdQV3A0aJ5jnNaSQDaE5H3SFLpw5JyvpZQn8m+sMcY7EVUpWGetlVJKD8ZMgnPO3UIIL4eC9/7NhUWafE4ggLirNVNFfIEmCB8DTMqFme/rTqVr0hKHBrTk6w8TaoTWukaxBwNMP0IcwcgmTgY9E/T/fyiX1EfRNLBM0OP4vRbOVXEAVQM0lVWgJWGKA2QaAGCYdMXB3wDNDYGiTpt3qQAAAABJRU5ErkJggg=="},e4ae:function(t,e,n){var i=n("f772");t.exports=function(t){if(!i(t))throw TypeError(t+" is not an object!");return t}},e53d:function(t,e){var n=t.exports="undefined"!=typeof window&&window.Math==Math?window:"undefined"!=typeof self&&self.Math==Math?self:Function("return this")();"number"==typeof __g&&(__g=n)},e967:function(t,e,n){},f1ae:function(t,e,n){"use strict";var i=n("86cc"),a=n("4630");t.exports=function(t,e,n){e in t?i.f(t,e,a(0,n)):t[e]=n}},f772:function(t,e){t.exports=function(t){return"object"===typeof t?null!==t:"function"===typeof t}}}]);