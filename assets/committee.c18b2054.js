import{_ as c,f as b,g as v,h as f,i as $,j as C,k as j,l as y,m as k,n as w,q as W,s as H,t as z,u as Z,v as I,x as P,y as q,z as E,A as B,B as M,C as N,D as U,E as V,F as D,G as F,H as L,I as R,J as S,K as A,L as O,N as T,O as G,P as J,Q as K,R as Q,S as X,T as Y,U as x,V as ee,W as te,X as se,Y as _e,Z as ae,$ as ie,a0 as oe,a1 as ne,a2 as le,a3 as ge,a4 as re,a5 as me,a6 as pe,a7 as de,a8 as he,a9 as ue,aa as ce,ab as be,ac as ve,ad as fe,ae as $e,af as Ce,ag as je,ah as ye,ai as ke,r as h,o as l,c as g,b as a,w as i,e,aj as d,ak as _,al as r,am as m,an as we}from"./index.214529dd.js";const We={name:"APP",props:[],data(){return{msg1:"Hello, main!",bannerImg:[1,2,3,4],bannerWidth:0,bannerHeight:0,screenWidth:0,showWidth:920,topic2:[0,1,2,3],imgFolder:"banner"}},methods:{getImgUrl(t){return new URL(Object.assign({"../assets/img/banner_full/1.jpg":b,"../assets/img/banner_full/2.jpg":v,"../assets/img/banner_full/3.jpg":f,"../assets/img/banner_full/4.jpg":$,"../assets/img/banner_fullZH/1.jpg":C,"../assets/img/banner_fullZH/2.jpg":j,"../assets/img/banner_fullZH/3.jpg":y,"../assets/img/banner_fullZH/4.jpg":k,"../assets/img/banner_sm/1.jpg":w,"../assets/img/banner_sm/2.jpg":W,"../assets/img/banner_sm/3.jpg":H,"../assets/img/banner_sm/4.jpg":z,"../assets/img/banner_smZH/1.jpg":Z,"../assets/img/banner_smZH/2.jpg":I,"../assets/img/banner_smZH/3.jpg":P,"../assets/img/banner_smZH/4.jpg":q,"../assets/img/chairmen/blank.png":E,"../assets/img/chairmen/fugee-tsung.jpg":B,"../assets/img/chairmen/fugee-tsung.png":M,"../assets/img/logo/CIEDH.jpg":N,"../assets/img/logo/IEI.jpg":U,"../assets/img/logo/IEI.png":V,"../assets/img/logo/aomen.png":D,"../assets/img/logo/aomentech.png":F,"../assets/img/logo/cityu.jpeg":L,"../assets/img/logo/cityu.svg":R,"../assets/img/logo/gdgy.jpg":S,"../assets/img/logo/gdxt.jpg":A,"../assets/img/logo/glkx.jpg":O,"../assets/img/logo/guangdonggongye.png":T,"../assets/img/logo/hkdd.gif":G,"../assets/img/logo/hksq.png":J,"../assets/img/logo/hku.svg":K,"../assets/img/logo/hkust.jpeg":Q,"../assets/img/logo/hkust.png":X,"../assets/img/logo/hkust.svg":Y,"../assets/img/logo/hkust.webp":x,"../assets/img/logo/hkustgz.png":ee,"../assets/img/logo/hkustgz_logo.png":te,"../assets/img/logo/hnlg.png":se,"../assets/img/logo/iise.jpeg":_e,"../assets/img/logo/jinan.svg":ae,"../assets/img/logo/polyU.png":ie,"../assets/img/logo/saq.png":oe,"../assets/img/logo/shenzhen.png":ne,"../assets/img/logo/tianjin.png":le,"../assets/img/logo/triple-i.png":ge,"../assets/img/logo/zaq.png":re,"../assets/img/logo_blue-2x.png":me,"../assets/img/pay.png":pe,"../assets/img/profile/1.jpg":de,"../assets/img/profile/10.jpg":he,"../assets/img/profile/2.jpg":ue,"../assets/img/profile/3.png":ce,"../assets/img/profile/4.png":be,"../assets/img/profile/5.jpg":ve,"../assets/img/profile/6.jpg":fe,"../assets/img/profile/7.png":$e,"../assets/img/profile/8.png":Ce,"../assets/img/profile/9.jpg":je,"../assets/img/wechat/assistant.jpg":ye,"../assets/img/wechat/group.png":ke})[`../assets/img/${t}`],self.location).href}},created(){this.screenWidth=document.body.clientWidth,window.onresize=()=>(()=>{this.screenWidth=document.body.clientWidth})()},mounted(){this.bannerWidth=this.$refs.banner.offsetWidth,console.log(this.bannerWidth),this.bannerHeight=this.bannerWidth/20*11},watch:{screenWidth:{handler:function(t){t*.9<920?(this.showWidth=t*.9,this.bannerHeight=this.showWidth/20*11):(this.showWidth=920,this.bannerHeight=this.showWidth/20*11)},immediate:!0,deep:!0}},components:{}},He={style:{"font-size":"18px",color:"#212529"}},ze={id:"03",class:"conferencePart"},Ze=e("span",null,null,-1),Ie={class:"sq_content"},Pe={style:{float:"right","margin-top":"10px"}},qe={class:"chairname"},Ee={class:"chairdepartment"},Be={style:{float:"right","margin-top":"10px"}},Me={class:"chairname"},Ne={class:"chairdepartment"},Ue={id:"05",class:"conferencePart"},Ve=e("span",null,null,-1),De={style:{float:"right","margin-top":"10px"}},Fe={class:"chairname"},Le={class:"chairdepartment"},Re={style:{float:"right","margin-top":"10px"}},Se={class:"chairname"},Ae={class:"chairdepartment"},Oe=e("span",null,null,-1),Te={style:{float:"right","margin-top":"10px"}},Ge={class:"chairname"},Je={class:"chairdepartment"},Ke={style:{float:"right","margin-top":"10px"}},Qe={class:"chairname"},Xe={class:"chairdepartment"},Ye={id:"06",class:"conferencePart"},xe=e("span",null,null,-1),et={style:{float:"right","margin-top":"10px"}},tt={class:"chairname"},st={class:"chairdepartment"},_t={id:"07",class:"conferencePart"},at=e("span",null,null,-1),it={style:{float:"right","margin-top":"10px"}},ot={class:"chairname"},nt={class:"chairdepartment"};function lt(t,gt,rt,mt,u,pt){const o=h("el-col"),n=h("el-row");return l(),g("div",He,[a(n,{justify:"center"},{default:i(()=>[a(o,null,{default:i(()=>[e("div",{style:we({width:u.showWidth+"px",margin:"auto","font-family":"Roboto"}),ref:"banner"},[e("div",ze,[e("h1",null,[Ze,d(_(t.$t("chairmen_03_title")),1)]),e("div",null,[e("div",null,[e("div",Ie,[e("div",null,[a(n,{gutter:40},{default:i(()=>[a(o,{span:8},{default:i(()=>[e("p",Pe,_(t.$t("chairmen_03.title.0")),1)]),_:1}),a(o,{span:16},{default:i(()=>[(l(),g(r,null,m(3,(p,s)=>e("div",{key:s},[e("p",qe,_(t.$t(`chairmen_03.CoChair.${s}.name`)),1),e("p",Ee,_(t.$t(`chairmen_03.CoChair.${s}.department`)),1)])),64))]),_:1})]),_:1})]),e("div",null,[a(n,{gutter:40},{default:i(()=>[a(o,{span:8},{default:i(()=>[e("p",Be,_(t.$t("chairmen_03.title.1")),1)]),_:1}),a(o,{span:16},{default:i(()=>[(l(),g(r,null,m(5,(p,s)=>e("div",{key:s},[e("p",Me,_(t.$t(`chairmen_03.HonoraryCoChair.${s}.name`)),1),e("p",Ne,_(t.$t(`chairmen_03.HonoraryCoChair.${s}.department`)),1)])),64))]),_:1})]),_:1})])])])])]),e("div",Ue,[e("h1",null,[Ve,d(_(t.$t("programCommittee_05_title")),1)]),e("div",null,[e("div",null,[a(n,{gutter:40},{default:i(()=>[a(o,{span:8},{default:i(()=>[e("p",De,_(t.$t("programCommittee_05.title.1")),1)]),_:1}),a(o,{span:16},{default:i(()=>[(l(),g(r,null,m(3,(p,s)=>e("div",{key:s},[e("p",Fe,_(t.$t(`programCommittee_05.Chairmen.${s}.name`)),1),e("p",Le,_(t.$t(`programCommittee_05.Chairmen.${s}.department`)),1)])),64))]),_:1})]),_:1}),a(n,{gutter:40},{default:i(()=>[a(o,{span:8},{default:i(()=>[e("p",Re,_(t.$t("programCommittee_05.title.2")),1)]),_:1}),a(o,{span:16},{default:i(()=>[(l(),g(r,null,m(7,(p,s)=>e("div",{key:s},[e("p",Se,_(t.$t(`programCommittee_05.Members.${s}.name`)),1),e("p",Ae,_(t.$t(`programCommittee_05.Members.${s}.department`)),1)])),64))]),_:1})]),_:1})])]),e("h1",null,[Oe,d(_(t.$t("organizationCommittee_05_title")),1)]),e("div",null,[e("div",null,[a(n,{gutter:40},{default:i(()=>[a(o,{span:8},{default:i(()=>[e("p",Te,_(t.$t("organizationCommittee_05.title.1")),1)]),_:1}),a(o,{span:16},{default:i(()=>[(l(),g(r,null,m(5,(p,s)=>e("div",{key:s},[e("p",Ge,_(t.$t(`organizationCommittee_05.Chairmen.${s}.name`)),1),e("p",Je,_(t.$t(`organizationCommittee_05.Chairmen.${s}.department`)),1)])),64))]),_:1})]),_:1}),a(n,{gutter:40},{default:i(()=>[a(o,{span:8},{default:i(()=>[e("p",Ke,_(t.$t("organizationCommittee_05.title.2")),1)]),_:1}),a(o,{span:16},{default:i(()=>[(l(),g(r,null,m(6,(p,s)=>e("div",{key:s},[e("p",Qe,_(t.$t(`organizationCommittee_05.Members.${s}.name`)),1),e("p",Xe,_(t.$t(`organizationCommittee_05.Members.${s}.department`)),1)])),64))]),_:1})]),_:1})])])]),e("div",Ye,[e("h1",null,[xe,d(_(t.$t("awardCommittee_06_title")),1)]),e("div",null,[e("div",null,[a(n,{gutter:40},{default:i(()=>[a(o,{span:8},{default:i(()=>[e("p",et,_(t.$t("awardCommittee_06.title")),1)]),_:1}),a(o,{span:16},{default:i(()=>[(l(),g(r,null,m(4,(p,s)=>e("div",{key:s},[e("p",tt,_(t.$t(`awardCommittee_06.Chairmen.${s}.name`)),1),e("p",st,_(t.$t(`awardCommittee_06.Chairmen.${s}.department`)),1)])),64))]),_:1})]),_:1})])])]),e("div",_t,[e("h1",null,[at,d(_(t.$t("publicationCommittee_07_title")),1)]),e("div",null,[e("div",null,[a(n,{gutter:40},{default:i(()=>[a(o,{span:8},{default:i(()=>[e("p",it,_(t.$t("publicationCommittee_07.title")),1)]),_:1}),a(o,{span:16},{default:i(()=>[(l(),g(r,null,m(3,(p,s)=>e("div",{key:s},[e("p",ot,_(t.$t(`publicationCommittee_07.Chairmen.${s}.name`)),1),e("p",nt,_(t.$t(`publicationCommittee_07.Chairmen.${s}.department`)),1)])),64))]),_:1})]),_:1})])])])],4)]),_:1})]),_:1})])}const ht=c(We,[["render",lt]]);export{ht as C};
