import{_ as c,f as v,g as u,h as f,i as $,j as C,k as j,l as y,m as k,n as w,q as W,s as H,t as z,u as Z,v as I,x as P,y as q,z as E,A as B,B as M,C as N,D as U,E as V,F as D,G as F,H as L,I as R,J as S,K as A,L as O,N as T,O as G,P as J,Q as K,R as Q,S as X,T as Y,U as x,V as __,W as s_,X as e_,Y as t_,Z as a_,$ as i_,a0 as g_,a1 as o_,a2 as n_,a3 as l_,a4 as m_,a5 as p_,a6 as r_,a7 as d_,a8 as h_,a9 as b_,aa as c_,ab as v_,ac as u_,ad as f_,ae as $_,af as C_,ag as j_,ah as y_,ai as k_,aj as w_,ak as W_,al as H_,am as z_,an as Z_,ao as I_,ap as P_,aq as q_,ar as E_,as as B_,at as M_,au as N_,av as U_,aw as V_,ax as D_,ay as F_,az as L_,aA as R_,aB as S_,aC as A_,aD as O_,aE as T_,aF as G_,aG as J_,aH as K_,aI as Q_,aJ as X_,aK as Y_,aL as x_,aM as _s,aN as ss,aO as es,aP as ts,aQ as as,aR as is,aS as gs,aT as os,aU as ns,aV as ls,aW as ms,aX as ps,aY as rs,aZ as ds,a_ as hs,a$ as bs,b0 as cs,b1 as vs,b2 as us,b3 as fs,b4 as $s,b5 as Cs,b6 as js,b7 as ys,b8 as ks,b9 as ws,ba as Ws,bb as Hs,bc as zs,bd as Zs,be as Is,bf as Ps,bg as qs,bh as Es,bi as Bs,bj as Ms,bk as Ns,bl as Us,bm as Vs,bn as Ds,bo as Fs,bp as Ls,bq as Rs,r as h,o as n,c as l,b as a,w as i,e as _,br as d,bs as t,bt as m,bu as p,bv as Ss}from"./index.5d528a32.js";const As={name:"APP",props:[],data(){return{msg1:"Hello, main!",bannerImg:[1,2,3,4],bannerWidth:0,bannerHeight:0,screenWidth:0,showWidth:1200,topic2:[0,1,2,3],imgFolder:"banner"}},methods:{getImgUrl(s){return new URL(Object.assign({"../assets/img/banner_full/1.jpg":v,"../assets/img/banner_full/2.jpg":u,"../assets/img/banner_full/3.jpg":f,"../assets/img/banner_full/4.jpg":$,"../assets/img/banner_fullZH/1.jpg":C,"../assets/img/banner_fullZH/2.jpg":j,"../assets/img/banner_fullZH/3.jpg":y,"../assets/img/banner_fullZH/4.jpg":k,"../assets/img/banner_sm/1.jpg":w,"../assets/img/banner_sm/2.jpg":W,"../assets/img/banner_sm/3.jpg":H,"../assets/img/banner_sm/4.jpg":z,"../assets/img/banner_smZH/1.jpg":Z,"../assets/img/banner_smZH/2.jpg":I,"../assets/img/banner_smZH/3.jpg":P,"../assets/img/banner_smZH/4.jpg":q,"../assets/img/chairmen/blank.png":E,"../assets/img/chairmen/fugee-tsung.jpg":B,"../assets/img/chairmen/fugee-tsung.png":M,"../assets/img/ciedh/1.png":N,"../assets/img/ciedh/10.png":U,"../assets/img/ciedh/11.png":V,"../assets/img/ciedh/12.png":D,"../assets/img/ciedh/13.png":F,"../assets/img/ciedh/14.png":L,"../assets/img/ciedh/15.png":R,"../assets/img/ciedh/16.png":S,"../assets/img/ciedh/17.png":A,"../assets/img/ciedh/18.png":O,"../assets/img/ciedh/19.png":T,"../assets/img/ciedh/2.png":G,"../assets/img/ciedh/20.png":J,"../assets/img/ciedh/21.png":K,"../assets/img/ciedh/22.png":Q,"../assets/img/ciedh/23.png":X,"../assets/img/ciedh/24.png":Y,"../assets/img/ciedh/25.png":x,"../assets/img/ciedh/26.png":__,"../assets/img/ciedh/27.png":s_,"../assets/img/ciedh/28.png":e_,"../assets/img/ciedh/29.png":t_,"../assets/img/ciedh/3.png":a_,"../assets/img/ciedh/30.png":i_,"../assets/img/ciedh/31.png":g_,"../assets/img/ciedh/32.png":o_,"../assets/img/ciedh/33.png":n_,"../assets/img/ciedh/34.png":l_,"../assets/img/ciedh/35.png":m_,"../assets/img/ciedh/36.png":p_,"../assets/img/ciedh/37.png":r_,"../assets/img/ciedh/38.png":d_,"../assets/img/ciedh/39.png":h_,"../assets/img/ciedh/4.png":b_,"../assets/img/ciedh/40.png":c_,"../assets/img/ciedh/41.png":v_,"../assets/img/ciedh/42.png":u_,"../assets/img/ciedh/43.png":f_,"../assets/img/ciedh/44.png":$_,"../assets/img/ciedh/45.png":C_,"../assets/img/ciedh/46.png":j_,"../assets/img/ciedh/47.png":y_,"../assets/img/ciedh/48.png":k_,"../assets/img/ciedh/49.png":w_,"../assets/img/ciedh/5.png":W_,"../assets/img/ciedh/50.png":H_,"../assets/img/ciedh/51.png":z_,"../assets/img/ciedh/52.png":Z_,"../assets/img/ciedh/53.png":I_,"../assets/img/ciedh/54.png":P_,"../assets/img/ciedh/55.png":q_,"../assets/img/ciedh/56.png":E_,"../assets/img/ciedh/57.png":B_,"../assets/img/ciedh/58.png":M_,"../assets/img/ciedh/59.png":N_,"../assets/img/ciedh/6.png":U_,"../assets/img/ciedh/60.png":V_,"../assets/img/ciedh/61.png":D_,"../assets/img/ciedh/62.png":F_,"../assets/img/ciedh/7.png":L_,"../assets/img/ciedh/8.png":R_,"../assets/img/ciedh/9.png":S_,"../assets/img/logo/CIEDH.jpg":A_,"../assets/img/logo/IEI.jpg":O_,"../assets/img/logo/IEI.png":T_,"../assets/img/logo/aomen.png":G_,"../assets/img/logo/aomentech.png":J_,"../assets/img/logo/cityu.jpeg":K_,"../assets/img/logo/cityu.svg":Q_,"../assets/img/logo/gdgy.jpg":X_,"../assets/img/logo/gdxt.jpg":Y_,"../assets/img/logo/glkx.jpg":x_,"../assets/img/logo/guangdonggongye.png":_s,"../assets/img/logo/hkdd.gif":ss,"../assets/img/logo/hksq.png":es,"../assets/img/logo/hku.svg":ts,"../assets/img/logo/hkust.jpeg":as,"../assets/img/logo/hkust.png":is,"../assets/img/logo/hkust.svg":gs,"../assets/img/logo/hkust.webp":os,"../assets/img/logo/hkustgz.png":ns,"../assets/img/logo/hkustgz_logo.png":ls,"../assets/img/logo/hnlg.png":ms,"../assets/img/logo/iise.jpeg":ps,"../assets/img/logo/jinan.svg":rs,"../assets/img/logo/kingfar.jpg":ds,"../assets/img/logo/polyU.png":hs,"../assets/img/logo/saq.png":bs,"../assets/img/logo/shenzhen.png":cs,"../assets/img/logo/tianjin.png":vs,"../assets/img/logo/triple-i.png":us,"../assets/img/logo/zaq.png":fs,"../assets/img/logo_blue-2x.png":$s,"../assets/img/pay.png":Cs,"../assets/img/profile/1.jpg":js,"../assets/img/profile/10.jpg":ys,"../assets/img/profile/11.png":ks,"../assets/img/profile/12.png":ws,"../assets/img/profile/13.png":Ws,"../assets/img/profile/14.png":Hs,"../assets/img/profile/15.png":zs,"../assets/img/profile/16.png":Zs,"../assets/img/profile/17.png":Is,"../assets/img/profile/18.png":Ps,"../assets/img/profile/2.jpg":qs,"../assets/img/profile/3.png":Es,"../assets/img/profile/4.jpg":Bs,"../assets/img/profile/4.png":Ms,"../assets/img/profile/5.jpg":Ns,"../assets/img/profile/6.jpg":Us,"../assets/img/profile/7.png":Vs,"../assets/img/profile/8.png":Ds,"../assets/img/profile/9.jpg":Fs,"../assets/img/wechat/assistant.jpg":Ls,"../assets/img/wechat/group.png":Rs})[`../assets/img/${s}`],self.location).href}},created(){this.screenWidth=document.body.clientWidth,window.onresize=()=>(()=>{this.screenWidth=document.body.clientWidth})()},mounted(){this.bannerWidth=this.$refs.banner.offsetWidth,console.log(this.bannerWidth),this.bannerHeight=this.bannerWidth/20*11},watch:{screenWidth:{handler:function(s){s*.9<1200?(this.showWidth=s*.9,this.bannerHeight=this.showWidth/20*11):(this.showWidth=1200,this.bannerHeight=this.showWidth/20*11)},immediate:!0,deep:!0}},components:{}},Os={style:{"font-size":"18px",color:"#212529"}},Ts={id:"03",class:"conferencePart"},Gs=_("span",null,null,-1),Js={class:"sq_content"},Ks={style:{float:"right","margin-top":"10px"}},Qs={class:"chairname"},Xs={class:"chairdepartment"},Ys={style:{float:"right","margin-top":"10px"}},xs={class:"chairname"},_e={class:"chairdepartment"},se={id:"05",class:"conferencePart"},ee=_("span",null,null,-1),te={style:{float:"right","margin-top":"10px"}},ae={class:"chairname"},ie={class:"chairdepartment"},ge={style:{float:"right","margin-top":"10px"}},oe={class:"chairname"},ne={class:"chairdepartment"},le=_("span",null,null,-1),me={style:{float:"right","margin-top":"10px"}},pe={class:"chairname"},re={class:"chairdepartment"},de={style:{float:"right","margin-top":"10px"}},he={class:"chairname"},be={class:"chairdepartment"},ce={id:"06",class:"conferencePart"},ve=_("span",null,null,-1),ue={style:{float:"right","margin-top":"10px"}},fe={class:"chairname"},$e={class:"chairdepartment"},Ce={id:"07",class:"conferencePart"},je=_("span",null,null,-1),ye={style:{float:"right","margin-top":"10px"}},ke={class:"chairname"},we={class:"chairdepartment"};function We(s,He,ze,Ze,b,Ie){const g=h("el-col"),o=h("el-row");return n(),l("div",Os,[a(o,{justify:"center"},{default:i(()=>[a(g,null,{default:i(()=>[_("div",{style:Ss({width:b.showWidth+"px",margin:"auto","font-family":"Roboto"}),ref:"banner"},[_("div",Ts,[_("h1",null,[Gs,d(t(s.$t("chairmen_03_title")),1)]),_("div",null,[_("div",null,[_("div",Js,[_("div",null,[a(o,{gutter:40},{default:i(()=>[a(g,{span:8},{default:i(()=>[_("p",Ks,t(s.$t("chairmen_03.title.0")),1)]),_:1}),a(g,{span:16},{default:i(()=>[(n(),l(m,null,p(3,(r,e)=>_("div",{key:e},[_("p",Qs,t(s.$t(`chairmen_03.CoChair.${e}.name`)),1),_("p",Xs,t(s.$t(`chairmen_03.CoChair.${e}.department`)),1)])),64))]),_:1})]),_:1})]),_("div",null,[a(o,{gutter:40},{default:i(()=>[a(g,{span:8},{default:i(()=>[_("p",Ys,t(s.$t("chairmen_03.title.1")),1)]),_:1}),a(g,{span:16},{default:i(()=>[(n(),l(m,null,p(5,(r,e)=>_("div",{key:e},[_("p",xs,t(s.$t(`chairmen_03.HonoraryCoChair.${e}.name`)),1),_("p",_e,t(s.$t(`chairmen_03.HonoraryCoChair.${e}.department`)),1)])),64))]),_:1})]),_:1})])])])])]),_("div",se,[_("h1",null,[ee,d(t(s.$t("programCommittee_05_title")),1)]),_("div",null,[_("div",null,[a(o,{gutter:40},{default:i(()=>[a(g,{span:8},{default:i(()=>[_("p",te,t(s.$t("programCommittee_05.title.1")),1)]),_:1}),a(g,{span:16},{default:i(()=>[(n(),l(m,null,p(3,(r,e)=>_("div",{key:e},[_("p",ae,t(s.$t(`programCommittee_05.Chairmen.${e}.name`)),1),_("p",ie,t(s.$t(`programCommittee_05.Chairmen.${e}.department`)),1)])),64))]),_:1})]),_:1}),a(o,{gutter:40},{default:i(()=>[a(g,{span:8},{default:i(()=>[_("p",ge,t(s.$t("programCommittee_05.title.2")),1)]),_:1}),a(g,{span:16},{default:i(()=>[(n(),l(m,null,p(7,(r,e)=>_("div",{key:e},[_("p",oe,t(s.$t(`programCommittee_05.Members.${e}.name`)),1),_("p",ne,t(s.$t(`programCommittee_05.Members.${e}.department`)),1)])),64))]),_:1})]),_:1})])]),_("h1",null,[le,d(t(s.$t("organizationCommittee_05_title")),1)]),_("div",null,[_("div",null,[a(o,{gutter:40},{default:i(()=>[a(g,{span:8},{default:i(()=>[_("p",me,t(s.$t("organizationCommittee_05.title.1")),1)]),_:1}),a(g,{span:16},{default:i(()=>[(n(),l(m,null,p(5,(r,e)=>_("div",{key:e},[_("p",pe,t(s.$t(`organizationCommittee_05.Chairmen.${e}.name`)),1),_("p",re,t(s.$t(`organizationCommittee_05.Chairmen.${e}.department`)),1)])),64))]),_:1})]),_:1}),a(o,{gutter:40},{default:i(()=>[a(g,{span:8},{default:i(()=>[_("p",de,t(s.$t("organizationCommittee_05.title.2")),1)]),_:1}),a(g,{span:16},{default:i(()=>[(n(),l(m,null,p(11,(r,e)=>_("div",{key:e},[_("p",he,t(s.$t(`organizationCommittee_05.Members.${e}.name`)),1),_("p",be,t(s.$t(`organizationCommittee_05.Members.${e}.department`)),1)])),64))]),_:1})]),_:1})])])]),_("div",ce,[_("h1",null,[ve,d(t(s.$t("awardCommittee_06_title")),1)]),_("div",null,[_("div",null,[a(o,{gutter:40},{default:i(()=>[a(g,{span:8},{default:i(()=>[_("p",ue,t(s.$t("awardCommittee_06.title")),1)]),_:1}),a(g,{span:16},{default:i(()=>[(n(),l(m,null,p(4,(r,e)=>_("div",{key:e},[_("p",fe,t(s.$t(`awardCommittee_06.Chairmen.${e}.name`)),1),_("p",$e,t(s.$t(`awardCommittee_06.Chairmen.${e}.department`)),1)])),64))]),_:1})]),_:1})])])]),_("div",Ce,[_("h1",null,[je,d(t(s.$t("publicationCommittee_07_title")),1)]),_("div",null,[_("div",null,[a(o,{gutter:40},{default:i(()=>[a(g,{span:8},{default:i(()=>[_("p",ye,t(s.$t("publicationCommittee_07.title")),1)]),_:1}),a(g,{span:16},{default:i(()=>[(n(),l(m,null,p(3,(r,e)=>_("div",{key:e},[_("p",ke,t(s.$t(`publicationCommittee_07.Chairmen.${e}.name`)),1),_("p",we,t(s.$t(`publicationCommittee_07.Chairmen.${e}.department`)),1)])),64))]),_:1})]),_:1})])])])],4)]),_:1})]),_:1})])}const qe=c(As,[["render",We]]);export{qe as C};
