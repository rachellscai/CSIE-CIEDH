import{C as w}from"./committee.38724ee0.js";import{_ as h,f as H,g as k,h as W,i as F,j as I,k as S,l as x,m as z,n as C,q as Z,s as q,t as D,u as E,v as P,x as V,y as B,z as L,A as N,B as U,C as M,D as R,E as T,F as A,G as O,H as G,I as J,J as K,K as Q,L as X,N as Y,O as ss,P as es,Q as ts,R as _s,S as os,T as is,U as ns,V as as,W as ls,X as gs,Y as ms,Z as ds,$ as rs,a0 as cs,a1 as us,a2 as bs,a3 as hs,a4 as ps,a5 as vs,a6 as fs,a7 as ys,a8 as js,r as o,o as l,c as g,b as i,w as n,e as s,a9 as a,aa as t,ab as c,ac as u,ad as $s,M as ws,a as Hs,p as ks,d as Ws}from"./index.7929e43c.js";const Fs={name:"APP",props:[],data(){return{msg1:"Hello, main!",bannerImg:[1,2,3,4],bannerWidth:0,bannerHeight:0,screenWidth:0,showWidth:920,topic2:[0,1,2,3],telephone:["19916940180","18701723392","15108215250"],imgFolder:"banner"}},methods:{getImgUrl(e){return new URL(Object.assign({"../assets/img/banner_full/1.jpg":H,"../assets/img/banner_full/2.jpg":k,"../assets/img/banner_full/3.jpg":W,"../assets/img/banner_full/4.jpg":F,"../assets/img/banner_fullZH/1.jpg":I,"../assets/img/banner_fullZH/2.jpg":S,"../assets/img/banner_fullZH/3.jpg":x,"../assets/img/banner_fullZH/4.jpg":z,"../assets/img/banner_sm/1.jpg":C,"../assets/img/banner_sm/2.jpg":Z,"../assets/img/banner_sm/3.jpg":q,"../assets/img/banner_sm/4.jpg":D,"../assets/img/banner_smZH/1.jpg":E,"../assets/img/banner_smZH/2.jpg":P,"../assets/img/banner_smZH/3.jpg":V,"../assets/img/banner_smZH/4.jpg":B,"../assets/img/chairmen/blank.png":L,"../assets/img/chairmen/fugee-tsung.jpg":N,"../assets/img/chairmen/fugee-tsung.png":U,"../assets/img/logo/CIEDH.jpg":M,"../assets/img/logo/IEI.jpg":R,"../assets/img/logo/IEI.png":T,"../assets/img/logo/aomen.png":A,"../assets/img/logo/aomentech.png":O,"../assets/img/logo/cityu.jpeg":G,"../assets/img/logo/cityu.svg":J,"../assets/img/logo/gdgy.jpg":K,"../assets/img/logo/gdxt.jpg":Q,"../assets/img/logo/glkx.jpg":X,"../assets/img/logo/guangdonggongye.png":Y,"../assets/img/logo/hkdd.gif":ss,"../assets/img/logo/hksq.png":es,"../assets/img/logo/hku.svg":ts,"../assets/img/logo/hkust.jpeg":_s,"../assets/img/logo/hkust.png":os,"../assets/img/logo/hkust.svg":is,"../assets/img/logo/hkust.webp":ns,"../assets/img/logo/hkustgz.png":as,"../assets/img/logo/hkustgz_logo.png":ls,"../assets/img/logo/hnlg.png":gs,"../assets/img/logo/iise.jpeg":ms,"../assets/img/logo/jinan.svg":ds,"../assets/img/logo/polyU.png":rs,"../assets/img/logo/saq.png":cs,"../assets/img/logo/shenzhen.png":us,"../assets/img/logo/tianjin.png":bs,"../assets/img/logo/triple-i.png":hs,"../assets/img/logo/zaq.png":ps,"../assets/img/logo_blue-2x.png":vs,"../assets/img/pay.png":fs,"../assets/img/wechat/assistant.jpg":ys,"../assets/img/wechat/group.png":js})[`../assets/img/${e}`],self.location).href}},created(){this.screenWidth=document.body.clientWidth,window.onresize=()=>(()=>{this.screenWidth=document.body.clientWidth})()},mounted(){this.bannerWidth=this.$refs.banner.offsetWidth,console.log(this.bannerWidth),this.bannerHeight=this.bannerWidth/20*11},watch:{screenWidth:{handler:function(e){e*.9<920?(this.showWidth=e*.9,this.bannerHeight=this.showWidth/20*11):(this.showWidth=920,this.bannerHeight=this.showWidth/20*11)},immediate:!0,deep:!0}},components:{}},Is={style:{"font-size":"18px",color:"#212529"}},Ss={id:"11",class:"conferencePart"},xs=s("span",null,null,-1),zs={class:"sq_content"},Cs={style:{"margin-bottom":"10px"}},Zs={id:"12",class:"conferencePart"},qs=s("span",null,null,-1),Ds={style:{width:"100%"},class:"sq_content"},Es=s("ul",null,[s("li",null,[s("a",{href:"mailto:csie2023@hkust-gz.edu.cn"},"csie2023@hkust-gz.edu.cn")])],-1),Ps={style:{"margin-bottom":"10px","margin-top":"10px","font-style":"italic"}},Vs={style:{color:"red","font-weight":"bold"}},Bs={id:"10",class:"conferencePart"},Ls=s("span",null,null,-1),Ns={class:"sq_content"},Us={id:"10",class:"conferencePart"},Ms=s("span",null,null,-1),Rs={class:"sq_content"},Ts={style:{"font-style":"italic","font-weight":"bold","margin-bottom":"10px"}};function As(e,p,v,f,b,y){const d=o("el-col"),r=o("el-row");return l(),g("div",Is,[i(r,{justify:"center"},{default:n(()=>[i(d,null,{default:n(()=>[s("div",{style:$s({width:b.showWidth+"px",margin:"auto","font-family":"Roboto"}),ref:"banner"},[s("div",Ss,[s("h1",null,[xs,a(t(e.$t("submission_14.submisstion.title")),1)]),s("div",zs,[s("div",Cs,t(e.$t("submission_14.submisstion.info")),1)])]),s("div",Zs,[s("h1",null,[qs,a(t(e.$t("submission_14.email.title")),1)]),s("div",Ds,[Es,s("div",Ps,[s("div",Vs,t(e.$t("submission_14.email.sub_title")),1),s("ul",null,[(l(),g(c,null,u(5,(m,_)=>s("li",null,t(e.$t(`submission_14.email.sub_info.${_}`)),1)),64))])])])]),s("div",Bs,[s("h1",null,[Ls,a(t(e.$t("submission_14.date.title")),1)]),s("div",Ns,[s("ul",null,[(l(),g(c,null,u(4,(m,_)=>s("li",null,[a(t(e.$t(`submission_14.date.date_title.${_}`))+" ",1),s("span",null,t(e.$t(`submission_14.date.date_info.${_}`)),1)])),64))])])]),s("div",Us,[s("h1",null,[Ms,a(t(e.$t("submission_14.range.title")),1)]),s("div",Rs,[s("div",Ts,t(e.$t("submission_14.range.info")),1),s("ul",null,[(l(),g(c,null,u(29,(m,_)=>s("li",null,t(e.$t(`submission_14.range.topic.${_}`)),1)),64))])])])],4)]),_:1})]),_:1})])}const Os=h(Fs,[["render",As]]);const Gs={name:"home_view",data(){return{msgH:null,timeData:null,sliceData:null,basicData:null}},computed:{initSign(){},loadingText(){return"Loading"}},mounted(){},methods:{fetchData(){}},components:{Main:ws,Header:Hs,Committee:w,Submission:Os}},Js=e=>(ks("data-v-327d2da2"),e=e(),Ws(),e),Ks={class:"common-layout",style:{width:"100%",height:"100vh","overflow-y":"auto","background-color":"#FFFFFF"}},Qs=Js(()=>s("div",{style:{"text-align":"center","background-color":"rgb(33, 68, 117)",width:"100%",height:"100%",color:"#FFFFFF"}},[s("p",{style:{"padding-top":"5px"}}," Copyright \xA9 CSIE 2023 & CIEDH 2023")],-1));function Xs(e,p,v,f,b,y){const d=o("Header"),r=o("el-header"),m=o("Submission"),_=o("el-main"),j=o("el-footer"),$=o("el-container");return l(),g("div",Ks,[i($,null,{default:n(()=>[i(r,null,{default:n(()=>[i(d,{activeMenu:"2"})]),_:1}),i(_,null,{default:n(()=>[i(m)]),_:1}),i(j,{style:{height:"30px",padding:"0px"}},{default:n(()=>[Qs]),_:1})]),_:1})])}const ee=h(Gs,[["render",Xs],["__scopeId","data-v-327d2da2"]]);export{ee as default};
