import{_ as h,a as j,b as w,c as H,d as W,e as I,f as S,g as D,h as F,i as Z,j as C,k as E,l as V,m as z,n as K,o as M,p as B,q as N,r as P,s as L,t as q,u as A,v as O,w as R,x as U,y as G,z as J,A as Q,B as X,C as Y,D as x,E as ee,F as te,G as se,H as ne,I as oe,J as _,K as p,L as m,M as i,N as l,O as e,P as n,Q as s,T as _e,W as r,X as c,Y as ie,V as le}from"./index.af4b9829.js";const ae={name:"APP",props:[],data(){return{msg1:"Hello, main!",bannerImg:[1,2,3,4],bannerWidth:0,bannerHeight:0,screenWidth:0,showWidth:920,topic2:[0,1,2,3],imgFolder:"banner"}},methods:{getImgUrl(t){return new URL(Object.assign({"../assets/img/a.png":j,"../assets/img/banner/1.jpg":w,"../assets/img/banner/2.jpg":H,"../assets/img/banner/3.jpg":W,"../assets/img/banner/4.jpg":I,"../assets/img/banner1/1.jpg":S,"../assets/img/banner1/2.jpg":D,"../assets/img/banner1/3.jpg":F,"../assets/img/bannerZH/1.jpg":Z,"../assets/img/bannerZH/2.jpg":C,"../assets/img/bannerZH/3.jpg":E,"../assets/img/bannerZH/4.jpg":V,"../assets/img/banner_full/1.jpg":z,"../assets/img/banner_full/2.jpg":K,"../assets/img/banner_full/3.jpg":M,"../assets/img/banner_full/4.jpg":B,"../assets/img/banner_fullZH/1.jpg":N,"../assets/img/banner_fullZH/2.jpg":P,"../assets/img/banner_fullZH/3.jpg":L,"../assets/img/banner_fullZH/4.jpg":q,"../assets/img/banner_new/1.png":A,"../assets/img/chairmen/blank.png":O,"../assets/img/chairmen/fugee-tsung.jpg":R,"../assets/img/chairmen/fugee-tsung.png":U,"../assets/img/inv1.jpg":G,"../assets/img/logo/CIEDH.jpg":J,"../assets/img/logo/IEI.jpg":Q,"../assets/img/logo/IEI.png":X,"../assets/img/logo/glkx.jpg":Y,"../assets/img/logo/guangdonggongye.png":x,"../assets/img/logo/hkdd.gif":ee,"../assets/img/logo/hkustgz.png":te,"../assets/img/logo/jinan.svg":se,"../assets/img/logo/shenzhen.png":ne,"../assets/img/logo_blue-2x.png":oe})[`../assets/img/${t}`],self.location).href}},created(){this.screenWidth=document.body.clientWidth,window.onresize=()=>(()=>{this.screenWidth=document.body.clientWidth})()},mounted(){this.bannerWidth=this.$refs.banner.offsetWidth,console.log(this.bannerWidth),this.bannerHeight=this.bannerWidth/20*11},watch:{screenWidth:{handler:function(t){t*.9<920?(this.showWidth=t*.9,this.bannerHeight=this.showWidth/20*11):(this.showWidth=920,this.bannerHeight=this.showWidth/20*11)},immediate:!0,deep:!0}},components:{}},o=t=>(r("data-v-8075c164"),t=t(),c(),t),ge={style:{"font-size":"16px",color:"#212529"}},de={id:"04",class:"conferencePart"},he=o(()=>e("span",null,null,-1)),pe={class:"sq_content"},me=o(()=>e("span",null,null,-1)),re={style:{"margin-top":"10px"}},ce={class:"themeTitle"},ue={class:"themeTitle",style:{"margin-top":"10px","margin-bottom":"10px"}},be={class:"info"},ye={class:"themeTitle"},ve={class:"info"},fe=o(()=>e("div",{style:{float:"right","margin-top":"10px",clear:"both"},align:"center"},null,-1)),$e={class:"themeTitle"},ke=o(()=>e("span",null,null,-1)),Te={style:{"margin-top":"10px"}},je={class:"themeTitle"},we={class:"themeTitle",style:{"margin-top":"10px","margin-bottom":"10px"}},He={class:"info"},We={class:"themeTitle"},Ie={class:"info"},Se=o(()=>e("div",{style:{float:"right","margin-top":"10px",clear:"both"},align:"center"},null,-1)),De={class:"themeTitle"},Fe=o(()=>e("span",null,null,-1)),Ze={style:{"margin-top":"10px"}},Ce={class:"themeTitle"},Ee={class:"themeTitle",style:{"margin-top":"10px","margin-bottom":"10px"}},Ve={class:"info"},ze={class:"themeTitle"},Ke={class:"info"},Me=o(()=>e("div",{style:{float:"right","margin-top":"10px",clear:"both"},align:"center"},null,-1)),Be={class:"themeTitle"},Ne=o(()=>e("span",null,null,-1)),Pe={style:{"margin-top":"10px"}},Le={class:"themeTitle"},qe={class:"themeTitle",style:{"margin-top":"10px","margin-bottom":"10px"}},Ae={class:"info"},Oe={class:"themeTitle"},Re={class:"info"},Ue=o(()=>e("div",{style:{float:"right","margin-top":"10px",clear:"both"},align:"center"},null,-1)),Ge={class:"themeTitle"},Je=o(()=>e("span",null,null,-1)),Qe={style:{"margin-top":"10px"}},Xe={class:"themeTitle"},Ye={class:"themeTitle",style:{"margin-top":"10px","margin-bottom":"10px"}},xe={class:"info"},et={class:"themeTitle"},tt={class:"info"},st=o(()=>e("div",{style:{float:"right","margin-top":"10px",clear:"both"},align:"center"},null,-1)),nt={class:"themeTitle"};function ot(t,u,b,y,a,v){const g=_("el-col"),d=_("el-row");return p(),m("div",ge,[i(d,{justify:"center"},{default:l(()=>[i(g,null,{default:l(()=>[e("div",{style:_e({width:a.showWidth+"px",margin:"auto","font-family":"Roboto"}),ref:"banner"},[e("div",de,[e("h1",null,[he,n(s(t.$t("keynote_04_title")),1)]),e("div",pe,[e("div",null,[e("h2",null,[me,n(" "+s(t.$t("keynote_04.0.name")),1)]),e("p",null,s(t.$t("keynote_04.0.department.0")),1),e("p",null,s(t.$t("keynote_04.0.department.1")),1),e("p",re,[e("span",ce,s(t.$t("keynote_04.0.timeTitle")),1),n(": "+s(t.$t("keynote_04.0.time")),1)]),e("p",ue,s(t.$t("keynote_04.0.theme")),1),e("div",be,[e("span",ye,s(t.$t("keynote_04.0.infoTitle")),1),n(": "+s(t.$t("keynote_04.0.info")),1)]),e("div",ve,[fe,e("span",$e,s(t.$t("keynote_04.0.bioTitle")),1),n(": "+s(t.$t("keynote_04.0.bio")),1)])]),e("div",null,[e("h2",null,[ke,n(" "+s(t.$t("keynote_04.1.name")),1)]),e("p",null,s(t.$t("keynote_04.1.department.0")),1),e("p",Te,[e("span",je,s(t.$t("keynote_04.1.timeTitle")),1),n(": "+s(t.$t("keynote_04.0.time")),1)]),e("p",we,s(t.$t("keynote_04.1.theme")),1),e("div",He,[e("span",We,s(t.$t("keynote_04.1.infoTitle")),1),n(": "+s(t.$t("keynote_04.1.info")),1)]),e("div",Ie,[Se,e("span",De,s(t.$t("keynote_04.1.bioTitle")),1),n(": "+s(t.$t("keynote_04.1.bio")),1)])]),e("div",null,[e("h2",null,[Fe,n(" "+s(t.$t("keynote_04.2.name")),1)]),e("p",null,s(t.$t("keynote_04.2.department.0")),1),e("p",null,s(t.$t("keynote_04.2.department.1")),1),e("p",Ze,[e("span",Ce,s(t.$t("keynote_04.2.timeTitle")),1),n(": "+s(t.$t("keynote_04.2.time")),1)]),e("p",Ee,s(t.$t("keynote_04.2.theme")),1),e("div",Ve,[e("span",ze,s(t.$t("keynote_04.2.infoTitle")),1),n(": "+s(t.$t("keynote_04.2.info")),1)]),e("div",Ke,[Me,e("span",Be,s(t.$t("keynote_04.2.bioTitle")),1),n(": "+s(t.$t("keynote_04.2.bio")),1)])]),e("div",null,[e("h2",null,[Ne,n(" "+s(t.$t("keynote_04.3.name")),1)]),e("p",null,s(t.$t("keynote_04.3.department.0")),1),e("p",Pe,[e("span",Le,s(t.$t("keynote_04.3.timeTitle")),1),n(": "+s(t.$t("keynote_04.3.time")),1)]),e("p",qe,s(t.$t("keynote_04.3.theme")),1),e("div",Ae,[e("span",Oe,s(t.$t("keynote_04.3.infoTitle")),1),n(": "+s(t.$t("keynote_04.3.info")),1)]),e("div",Re,[Ue,e("span",Ge,s(t.$t("keynote_04.3.bioTitle")),1),n(": "+s(t.$t("keynote_04.3.bio")),1)])]),e("div",null,[e("h2",null,[Je,n(" "+s(t.$t("keynote_04.4.name")),1)]),e("p",null,s(t.$t("keynote_04.4.department.0")),1),e("p",null,s(t.$t("keynote_04.4.department.1")),1),e("p",Qe,[e("span",Xe,s(t.$t("keynote_04.4.timeTitle")),1),n(": "+s(t.$t("keynote_04.4.time")),1)]),e("p",Ye,s(t.$t("keynote_04.4.theme")),1),e("div",xe,[e("span",et,s(t.$t("keynote_04.4.infoTitle")),1),n(": "+s(t.$t("keynote_04.4.info")),1)]),e("div",tt,[st,e("span",nt,s(t.$t("keynote_04.4.bioTitle")),1),n(": "+s(t.$t("keynote_04.4.bio")),1)])])])])],4)]),_:1})]),_:1})])}const _t=h(ae,[["render",ot],["__scopeId","data-v-8075c164"]]);const it={name:"home_view",data(){return{msgH:null,timeData:null,sliceData:null,basicData:null,activeMenu:"2"}},computed:{initSign(){},loadingText(){return"Loading"}},mounted(){const t=ie();t.defaultValue="2"},methods:{fetchData(){}},components:{Header:le,Keynote:_t}},lt=t=>(r("data-v-c08bfa56"),t=t(),c(),t),at={class:"common-layout",style:{width:"100%",height:"100vh","overflow-y":"auto","background-color":"#FFFFFF"}},gt=lt(()=>e("div",{style:{"text-align":"center"}}," Copyright \xA9 CSIE 2023 & CIEDH 2023 ",-1));function dt(t,u,b,y,a,v){const g=_("Header"),d=_("el-header"),f=_("Keynote"),$=_("el-main"),k=_("el-footer"),T=_("el-container");return p(),m("div",at,[i(T,null,{default:l(()=>[i(d,null,{default:l(()=>[i(g,{activeMenu:a.activeMenu},null,8,["activeMenu"])]),_:1}),i($,null,{default:l(()=>[i(f)]),_:1}),i(k,null,{default:l(()=>[gt]),_:1})]),_:1})])}const pt=h(it,[["render",dt],["__scopeId","data-v-c08bfa56"]]);export{pt as default};
