import{_ as u,a as w,b as j,c as H,d as k,e as W,f as I,g as z,h as F,i as P,j as D,k as Z,l as E,m as M,n as S,o as A,p as V,q as B,r as L,s as N,t as R,u as q,v as O,w as T,x as U,y as G,z as J,A as K,B as Q,C as X,D as p,E as l,F as r,G as a,H as o,I as e,J as h,K as n,L as d,M as g,N as Y,O as x,P as ee,Q as te,R as se}from"./index.14e32f3b.js";const ne={name:"APP",props:[],data(){return{msg1:"Hello, main!",bannerImg:[1,2,3,4],bannerWidth:0,bannerHeight:0,screenWidth:0,showWidth:920,topic2:[0,1,2,3],imgFolder:"banner"}},methods:{getImgUrl(t){return new URL(Object.assign({"../assets/img/banner_full/1.jpg":w,"../assets/img/banner_full/2.jpg":j,"../assets/img/banner_full/3.jpg":H,"../assets/img/banner_full/4.jpg":k,"../assets/img/banner_fullZH/1.jpg":W,"../assets/img/banner_fullZH/2.jpg":I,"../assets/img/banner_fullZH/3.jpg":z,"../assets/img/banner_fullZH/4.jpg":F,"../assets/img/banner_sm/1.jpg":P,"../assets/img/banner_sm/2.jpg":D,"../assets/img/banner_sm/3.jpg":Z,"../assets/img/banner_sm/4.jpg":E,"../assets/img/banner_smZH/1.jpg":M,"../assets/img/banner_smZH/2.jpg":S,"../assets/img/banner_smZH/3.jpg":A,"../assets/img/banner_smZH/4.jpg":V,"../assets/img/chairmen/blank.png":B,"../assets/img/chairmen/fugee-tsung.jpg":L,"../assets/img/chairmen/fugee-tsung.png":N,"../assets/img/logo/CIEDH.jpg":R,"../assets/img/logo/IEI.jpg":q,"../assets/img/logo/IEI.png":O,"../assets/img/logo/glkx.jpg":T,"../assets/img/logo/guangdonggongye.png":U,"../assets/img/logo/hkdd.gif":G,"../assets/img/logo/hkustgz.png":J,"../assets/img/logo/jinan.svg":K,"../assets/img/logo/shenzhen.png":Q,"../assets/img/logo_blue-2x.png":X})[`../assets/img/${t}`],self.location).href}},created(){this.screenWidth=document.body.clientWidth,window.onresize=()=>(()=>{this.screenWidth=document.body.clientWidth})()},mounted(){this.bannerWidth=this.$refs.banner.offsetWidth,console.log(this.bannerWidth),this.bannerHeight=this.bannerWidth/20*11},watch:{screenWidth:{handler:function(t){t*.9<920?(this.showWidth=t*.9,this.bannerHeight=this.showWidth/20*11):(this.showWidth=920,this.bannerHeight=this.showWidth/20*11)},immediate:!0,deep:!0}},components:{}},ae={style:{"font-size":"16px",color:"#212529"}},oe={id:"03",class:"conferencePart"},ie=e("span",null,null,-1),_e={class:"sq_content"},le={style:{float:"right","margin-top":"10px"}},re={class:"chairname"},me={class:"chairdepartment"},de={style:{float:"right","margin-top":"10px"}},ge={class:"chairname"},pe={class:"chairdepartment"},he={id:"05",class:"conferencePart"},ce=e("span",null,null,-1),ue={style:{float:"right","margin-top":"10px"}},fe={class:"chairname"},be={class:"chairdepartment"},ve={style:{float:"right","margin-top":"10px"}},$e={class:"chairname"},Ce={class:"chairdepartment"},ye={style:{float:"right","margin-top":"10px"}},we={class:"chairname"},je={class:"chairdepartment"},He={style:{float:"right","margin-top":"10px"}},ke={class:"chairname"},We={class:"chairdepartment"},Ie={id:"06",class:"conferencePart"},ze=e("span",null,null,-1),Fe={style:{float:"right","margin-top":"10px"}},Pe={class:"chairname"},De={class:"chairdepartment"},Ze={id:"07",class:"conferencePart"},Ee=e("span",null,null,-1),Me={style:{float:"right","margin-top":"10px"}},Se={class:"chairname"},Ae={class:"chairdepartment"},Ve={id:"08",class:"conferencePart"},Be=e("span",null,null,-1),Le={style:{float:"right","margin-top":"10px"}},Ne={class:"chairname"},Re={class:"chairdepartment"},qe={id:"09",class:"conferencePart"},Oe=e("span",null,null,-1),Te={style:{float:"right","margin-top":"10px"}},Ue={class:"chairname"},Ge={class:"chairdepartment"};function Je(t,f,b,v,c,$){const i=p("el-col"),_=p("el-row");return l(),r("div",ae,[a(_,{justify:"center"},{default:o(()=>[a(i,null,{default:o(()=>[e("div",{style:Y({width:c.showWidth+"px",margin:"auto","font-family":"Roboto"}),ref:"banner"},[e("div",oe,[e("h1",null,[ie,h(n(t.$t("chairmen_03_title")),1)]),e("div",null,[e("div",null,[e("div",_e,[e("div",null,[a(_,{gutter:40},{default:o(()=>[a(i,{span:8},{default:o(()=>[e("p",le,n(t.$t("chairmen_03.title.0")),1)]),_:1}),a(i,{span:16},{default:o(()=>[(l(),r(d,null,g(3,(m,s)=>e("div",{key:s},[e("p",re,n(t.$t(`chairmen_03.CoChair.${s}.name`)),1),e("p",me,n(t.$t(`chairmen_03.CoChair.${s}.department`)),1)])),64))]),_:1})]),_:1})]),e("div",null,[a(_,{gutter:40},{default:o(()=>[a(i,{span:8},{default:o(()=>[e("p",de,n(t.$t("chairmen_03.title.1")),1)]),_:1}),a(i,{span:16},{default:o(()=>[(l(),r(d,null,g(3,(m,s)=>e("div",{key:s},[e("p",ge,n(t.$t(`chairmen_03.HonoraryCoChair.${s}.name`)),1),e("p",pe,n(t.$t(`chairmen_03.HonoraryCoChair.${s}.department`)),1)])),64))]),_:1})]),_:1})])])])])]),e("div",he,[e("h1",null,[ce,h(n(t.$t("programCommittee_05_title")),1)]),e("div",null,[e("h2",null,n(t.$t("programCommittee_05.title.0")),1),e("div",null,[a(_,{gutter:40},{default:o(()=>[a(i,{span:8},{default:o(()=>[e("p",ue,n(t.$t("programCommittee_05.title.1")),1)]),_:1}),a(i,{span:16},{default:o(()=>[(l(),r(d,null,g(3,(m,s)=>e("div",{key:s},[e("p",fe,n(t.$t(`programCommittee_05.Chairmen.${s}.name`)),1),e("p",be,n(t.$t(`programCommittee_05.Chairmen.${s}.department`)),1)])),64))]),_:1})]),_:1}),a(_,{gutter:40},{default:o(()=>[a(i,{span:8},{default:o(()=>[e("p",ve,n(t.$t("programCommittee_05.title.2")),1)]),_:1}),a(i,{span:16},{default:o(()=>[(l(),r(d,null,g(6,(m,s)=>e("div",{key:s},[e("p",$e,n(t.$t(`programCommittee_05.Members.${s}.name`)),1),e("p",Ce,n(t.$t(`programCommittee_05.Members.${s}.department`)),1)])),64))]),_:1})]),_:1})])]),e("div",null,[e("h2",null,n(t.$t("organizationCommittee_05.title.0")),1),e("div",null,[a(_,{gutter:40},{default:o(()=>[a(i,{span:8},{default:o(()=>[e("p",ye,n(t.$t("organizationCommittee_05.title.1")),1)]),_:1}),a(i,{span:16},{default:o(()=>[(l(),r(d,null,g(3,(m,s)=>e("div",{key:s},[e("p",we,n(t.$t(`organizationCommittee_05.Chairmen.${s}.name`)),1),e("p",je,n(t.$t(`organizationCommittee_05.Chairmen.${s}.department`)),1)])),64))]),_:1})]),_:1}),a(_,{gutter:40},{default:o(()=>[a(i,{span:8},{default:o(()=>[e("p",He,n(t.$t("organizationCommittee_05.title.2")),1)]),_:1}),a(i,{span:16},{default:o(()=>[(l(),r(d,null,g(6,(m,s)=>e("div",{key:s},[e("p",ke,n(t.$t(`organizationCommittee_05.Members.${s}.name`)),1),e("p",We,n(t.$t(`organizationCommittee_05.Members.${s}.department`)),1)])),64))]),_:1})]),_:1})])])]),e("div",Ie,[e("h1",null,[ze,h(n(t.$t("awardCommittee_06_title")),1)]),e("div",null,[e("div",null,[a(_,{gutter:40},{default:o(()=>[a(i,{span:8},{default:o(()=>[e("p",Fe,n(t.$t("awardCommittee_06.title")),1)]),_:1}),a(i,{span:16},{default:o(()=>[(l(),r(d,null,g(3,(m,s)=>e("div",{key:s},[e("p",Pe,n(t.$t(`awardCommittee_06.Chairmen.${s}.name`)),1),e("p",De,n(t.$t(`awardCommittee_06.Chairmen.${s}.department`)),1)])),64))]),_:1})]),_:1})])])]),e("div",Ze,[e("h1",null,[Ee,h(n(t.$t("publicationCommittee_07_title")),1)]),e("div",null,[e("div",null,[a(_,{gutter:40},{default:o(()=>[a(i,{span:8},{default:o(()=>[e("p",Me,n(t.$t("publicationCommittee_07.title")),1)]),_:1}),a(i,{span:16},{default:o(()=>[(l(),r(d,null,g(2,(m,s)=>e("div",{key:s},[e("p",Se,n(t.$t(`publicationCommittee_07.Chairmen.${s}.name`)),1),e("p",Ae,n(t.$t(`publicationCommittee_07.Chairmen.${s}.department`)),1)])),64))]),_:1})]),_:1})])])]),e("div",Ve,[e("h1",null,[Be,h(n(t.$t("societies_08_title")),1)]),e("div",null,[a(_,{gutter:40},{default:o(()=>[a(i,{span:8},{default:o(()=>[e("p",Le,n(t.$t("programCommittee_05.title.2")),1)]),_:1}),a(i,{span:16},{default:o(()=>[(l(),r(d,null,g(5,(m,s)=>e("div",{key:s},[e("p",Ne,n(t.$t(`societies_08.${s}.name`)),1),e("p",Re,n(t.$t(`societies_08.${s}.department.0`)),1)])),64))]),_:1})]),_:1})])]),e("div",qe,[e("h1",null,[Oe,h(n(t.$t("internationalAdvisoryCommittee_09_title")),1)]),e("div",null,[a(_,{gutter:40},{default:o(()=>[a(i,{span:8},{default:o(()=>[e("p",Te,n(t.$t("programCommittee_05.title.2")),1)]),_:1}),a(i,{span:16},{default:o(()=>[(l(),r(d,null,g(40,(m,s)=>e("div",{key:s},[e("p",Ue,n(t.$t(`internationalAdvisoryCommittee_09.${s}.name`)),1),e("p",Ge,n(t.$t(`internationalAdvisoryCommittee_09.${s}.department`)),1)])),64))]),_:1})]),_:1})])])],4)]),_:1})]),_:1})])}const Ke=u(ne,[["render",Je]]);const Qe={name:"home_view",data(){return{msgH:null,timeData:null,sliceData:null,basicData:null}},computed:{initSign(){},loadingText(){return"Loading"}},mounted(){},methods:{fetchData(){}},components:{Main:x,Header:ee,Committee:Ke}},Xe=t=>(te("data-v-bebf42a7"),t=t(),se(),t),Ye={class:"common-layout",style:{width:"100%",height:"100vh","overflow-y":"auto","background-color":"#FFFFFF"}},xe=Xe(()=>e("div",{style:{"text-align":"center"}}," Copyright \xA9 CSIE 2023 & CIEDH 2023 ",-1));function et(t,f,b,v,c,$){const i=p("Header"),_=p("el-header"),m=p("Committee"),s=p("el-main"),C=p("el-footer"),y=p("el-container");return l(),r("div",Ye,[a(y,null,{default:o(()=>[a(_,null,{default:o(()=>[a(i,{activeMenu:"3"})]),_:1}),a(s,null,{default:o(()=>[a(m)]),_:1}),a(C,null,{default:o(()=>[xe]),_:1})]),_:1})])}const st=u(Qe,[["render",et],["__scopeId","data-v-bebf42a7"]]);export{st as default};
