(window.webpackJsonp=window.webpackJsonp||[]).push([[5],{478:function(t,e,n){var content=n(508);"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(21).default)("4cca6644",content,!0,{sourceMap:!1})},479:function(t,e,n){"use strict";n.r(e);n(33);var r={props:{status:{type:Number}},data:function(){return{}},computed:{message:function(){switch(this.status){case 0:return"今日はまだおふろに入っていません。";case 1:return"ただいま入浴中です。";case 2:return"今日のおふろは無事に終了しました。";case 3:return"平均入浴時間を大幅に超過しています！！"}return""},color:function(){switch(this.status){case 0:return"#FFB304";case 1:return"#FFF2DC";case 2:return"#3DB4BE";case 3:return"#E53A00"}return""}}},o=(n(507),n(71)),l=n(100),c=n.n(l),h=n(522),component=Object(o.a)(r,(function(){var t=this.$createElement,e=this._self._c||t;return e("v-card",{staticClass:"pa-5 d-flex align-center justify-center text-h5 font-weight-bold",attrs:{color:this.color,dark:"",height:"100"}},[e("span",{class:{"taking-bath":1===this.status}},[this._v(this._s(this.message))])])}),[],!1,null,"ab7d0676",null);e.default=component.exports;c()(component,{VCard:h.a})},480:function(t,e,n){"use strict";n.r(e);var r={extends:n(511).a,name:"chart",props:{chartLabel:{type:Array},chartData:{type:Array},update:{type:Array}},data:function(){return{data:{labels:this.chartLabel,datasets:[{label:"入浴時間",data:this.chartData,borderColor:"#CFD8DC",fill:!1,type:"line",lineTension:.3},{label:"入浴時間",data:this.chartData,backgroundColor:"#FFB304",borderColor:"rgba(255, 159, 64, 1)",borderWidth:1}]},options:{legend:!1,scales:{xAxes:[{scaleLabel:{display:!1,labelString:"日付"}}],yAxes:[{ticks:{beginAtZero:!0,stepSize:10,callback:function(t,e,n){return"".concat(t,"分")}}}]}}}},watch:{chartLabel:function(){this.$data._chart.update()},chartData:function(){this.$data._chart.update()},update:function(){this.$data._chart.update()}},mounted:function(){this.renderChart(this.data,this.options)}},o=n(71),component=Object(o.a)(r,void 0,void 0,!1,null,null,null);e.default=component.exports},506:function(t,e,n){var map={"./af":343,"./af.js":343,"./ar":344,"./ar-dz":345,"./ar-dz.js":345,"./ar-kw":346,"./ar-kw.js":346,"./ar-ly":347,"./ar-ly.js":347,"./ar-ma":348,"./ar-ma.js":348,"./ar-sa":349,"./ar-sa.js":349,"./ar-tn":350,"./ar-tn.js":350,"./ar.js":344,"./az":351,"./az.js":351,"./be":352,"./be.js":352,"./bg":353,"./bg.js":353,"./bm":354,"./bm.js":354,"./bn":355,"./bn-bd":356,"./bn-bd.js":356,"./bn.js":355,"./bo":357,"./bo.js":357,"./br":358,"./br.js":358,"./bs":359,"./bs.js":359,"./ca":360,"./ca.js":360,"./cs":361,"./cs.js":361,"./cv":362,"./cv.js":362,"./cy":363,"./cy.js":363,"./da":364,"./da.js":364,"./de":365,"./de-at":366,"./de-at.js":366,"./de-ch":367,"./de-ch.js":367,"./de.js":365,"./dv":368,"./dv.js":368,"./el":369,"./el.js":369,"./en-au":370,"./en-au.js":370,"./en-ca":371,"./en-ca.js":371,"./en-gb":372,"./en-gb.js":372,"./en-ie":373,"./en-ie.js":373,"./en-il":374,"./en-il.js":374,"./en-in":375,"./en-in.js":375,"./en-nz":376,"./en-nz.js":376,"./en-sg":377,"./en-sg.js":377,"./eo":378,"./eo.js":378,"./es":379,"./es-do":380,"./es-do.js":380,"./es-mx":381,"./es-mx.js":381,"./es-us":382,"./es-us.js":382,"./es.js":379,"./et":383,"./et.js":383,"./eu":384,"./eu.js":384,"./fa":385,"./fa.js":385,"./fi":386,"./fi.js":386,"./fil":387,"./fil.js":387,"./fo":388,"./fo.js":388,"./fr":389,"./fr-ca":390,"./fr-ca.js":390,"./fr-ch":391,"./fr-ch.js":391,"./fr.js":389,"./fy":392,"./fy.js":392,"./ga":393,"./ga.js":393,"./gd":394,"./gd.js":394,"./gl":395,"./gl.js":395,"./gom-deva":396,"./gom-deva.js":396,"./gom-latn":397,"./gom-latn.js":397,"./gu":398,"./gu.js":398,"./he":399,"./he.js":399,"./hi":400,"./hi.js":400,"./hr":401,"./hr.js":401,"./hu":402,"./hu.js":402,"./hy-am":403,"./hy-am.js":403,"./id":404,"./id.js":404,"./is":405,"./is.js":405,"./it":406,"./it-ch":407,"./it-ch.js":407,"./it.js":406,"./ja":408,"./ja.js":408,"./jv":409,"./jv.js":409,"./ka":410,"./ka.js":410,"./kk":411,"./kk.js":411,"./km":412,"./km.js":412,"./kn":413,"./kn.js":413,"./ko":414,"./ko.js":414,"./ku":415,"./ku.js":415,"./ky":416,"./ky.js":416,"./lb":417,"./lb.js":417,"./lo":418,"./lo.js":418,"./lt":419,"./lt.js":419,"./lv":420,"./lv.js":420,"./me":421,"./me.js":421,"./mi":422,"./mi.js":422,"./mk":423,"./mk.js":423,"./ml":424,"./ml.js":424,"./mn":425,"./mn.js":425,"./mr":426,"./mr.js":426,"./ms":427,"./ms-my":428,"./ms-my.js":428,"./ms.js":427,"./mt":429,"./mt.js":429,"./my":430,"./my.js":430,"./nb":431,"./nb.js":431,"./ne":432,"./ne.js":432,"./nl":433,"./nl-be":434,"./nl-be.js":434,"./nl.js":433,"./nn":435,"./nn.js":435,"./oc-lnc":436,"./oc-lnc.js":436,"./pa-in":437,"./pa-in.js":437,"./pl":438,"./pl.js":438,"./pt":439,"./pt-br":440,"./pt-br.js":440,"./pt.js":439,"./ro":441,"./ro.js":441,"./ru":442,"./ru.js":442,"./sd":443,"./sd.js":443,"./se":444,"./se.js":444,"./si":445,"./si.js":445,"./sk":446,"./sk.js":446,"./sl":447,"./sl.js":447,"./sq":448,"./sq.js":448,"./sr":449,"./sr-cyrl":450,"./sr-cyrl.js":450,"./sr.js":449,"./ss":451,"./ss.js":451,"./sv":452,"./sv.js":452,"./sw":453,"./sw.js":453,"./ta":454,"./ta.js":454,"./te":455,"./te.js":455,"./tet":456,"./tet.js":456,"./tg":457,"./tg.js":457,"./th":458,"./th.js":458,"./tk":459,"./tk.js":459,"./tl-ph":460,"./tl-ph.js":460,"./tlh":461,"./tlh.js":461,"./tr":462,"./tr.js":462,"./tzl":463,"./tzl.js":463,"./tzm":464,"./tzm-latn":465,"./tzm-latn.js":465,"./tzm.js":464,"./ug-cn":466,"./ug-cn.js":466,"./uk":467,"./uk.js":467,"./ur":468,"./ur.js":468,"./uz":469,"./uz-latn":470,"./uz-latn.js":470,"./uz.js":469,"./vi":471,"./vi.js":471,"./x-pseudo":472,"./x-pseudo.js":472,"./yo":473,"./yo.js":473,"./zh-cn":474,"./zh-cn.js":474,"./zh-hk":475,"./zh-hk.js":475,"./zh-mo":476,"./zh-mo.js":476,"./zh-tw":477,"./zh-tw.js":477};function r(t){var e=o(t);return n(e)}function o(t){if(!n.o(map,t)){var e=new Error("Cannot find module '"+t+"'");throw e.code="MODULE_NOT_FOUND",e}return map[t]}r.keys=function(){return Object.keys(map)},r.resolve=o,t.exports=r,r.id=506},507:function(t,e,n){"use strict";n(478)},508:function(t,e,n){(e=n(20)(!1)).push([t.i,".taking-bath[data-v-ab7d0676]{color:#3db4be}",""]),t.exports=e},519:function(t,e,n){"use strict";n.r(e);n(11),n(52),n(31),n(54),n(12);var r=n(480),o=n(479),l={components:{BathChart:r.default,StatusCard:o.default},data:function(){return{status:0,bath_time:{taking_bath_time:{hour:null,minutes:null},entry_bath_time:{hour:null,minutes:null},exit_bath_time:{hour:null,minutes:null}},chart:{data:[0,0,0,0,0,0,0],label:["","","","","","",""],update:[]},history:null,mean_bath_time:0,alert:!1}},created:function(){var t=this;this.$OneSignal.push((function(){t.$OneSignal.on("notificationDisplay",(function(e){t.updateData()}))}))},mounted:function(){this.updateData()},methods:{dateToHourMinutes:function(t){return{hour:Math.floor(t/36e5),minutes:Math.floor(t%36e5/6e4)}},dateFromEntry:function(t){return new Date-Date.parse(t)},chageChartData:function(){this.chart.data[0]=Math.floor(Math.random()*Math.floor(10)),this.chart.update=[]},getTime:function(time){return null==time.hour?"":time.hour+":"+time.minutes},getNowDate:function(){var t=new Date;return t.getMonth()+1+"月"+(t.getDay()+1)+"日"},getUserId:function(){return window.localStorage.getItem("user_id")},updateData:function(){var t=this;this.$axios.get("/status",{headers:{Authorization:"".concat(this.getUserId())}}).then((function(e){var n=e.data.status,r=e.data.entry_time,o=e.data.exit_time;t.status=n,console.log(n),r&&(r=new Date(r),t.bath_time.entry_bath_time.hour=r.getHours(),t.bath_time.entry_bath_time.minutes=r.getMinutes()),o&&(o=new Date(o),t.bath_time.exit_bath_time.hour=o.getHours(),t.bath_time.exit_bath_time.minutes=o.getMinutes())})),this.$axios.get("/history/week",{headers:{Authorization:"".concat(this.getUserId())}}).then((function(e){var n=e.data.history,r=e.data.mean;t.mean_bath_time=r,n.map((function(t){return t.date})).forEach((function(e,n){var r=e.split("-");t.chart.label[n]=r[1]+"/"+r[2]})),n.map((function(t){return t.minute})).forEach((function(e,n){t.chart.data[n]=e})),t.chart.update=[]}))}}},c=n(71),h=n(100),j=n.n(h),d=n(341),m=n(487),f=n(342),component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("v-row",{staticClass:"px-5 py-2"},[n("v-col",{attrs:{cols:"12"}},[n("h1",{staticClass:"amber--text text--darken-1"},[t._v(t._s(t.getNowDate()))])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("StatusCard",{attrs:{status:t.status}})],1),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"text-h5 font-weight-black"},[t._v("今日の入浴時間")]),t._v(" "),n("h1",{staticClass:"amber--text text--darken-1"},[t._v("\n      "+t._s(t.getTime(t.bath_time.entry_bath_time))+"\n        ~\n      "+t._s(t.getTime(t.bath_time.exit_bath_time))+"\n    ")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("div",{staticClass:"text-h5 font-weight-black"},[t._v("平均入浴時間")]),t._v(" "),n("div",{staticClass:"text-body-1 font-weight-black"},[t._v(t._s(this.chart.label[0])+"~"+t._s(this.chart.label[6]))]),t._v(" "),n("h1",{staticClass:"amber--text text--darken-1"},[t._v(t._s(t.mean_bath_time)+"分")])]),t._v(" "),n("v-col",{attrs:{cols:"12"}},[n("BathChart",{attrs:{height:270,chartData:t.chart.data,chartLabel:t.chart.label,update:t.chart.update}})],1),t._v(" "),n("v-overlay",{attrs:{absolute:!0,value:3===t.status,color:"#E53A00"}})],1)}),[],!1,null,"7c1db1fd",null);e.default=component.exports;j()(component,{StatusCard:n(479).default,BathChart:n(480).default}),j()(component,{VCol:d.a,VOverlay:m.a,VRow:f.a})}}]);