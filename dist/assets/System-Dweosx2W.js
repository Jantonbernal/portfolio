import{f as P,e as B,g as S,b as L,r as e,o as t,c as r,h as a,j as o,l as i,m as u,F as _,z as A,i as c,t as p}from"./index-C7Li9OMr.js";const I="/portfolio/assets/courier-BhYJ601l.png",J="/portfolio/assets/garage-Sc_35MAX.png",D=["src"],N={class:"px-4 mb-2"},U={class:"font-weight-bold text-caption"},F={__name:"System",setup(V){const{name:m}=P(),n=B([]);S(()=>{n.value.push({id:1,title:"Aplicación Web - Playa de Estacionamiento",year:2020,skills:["JavaScript","PHP","VueJS","Laravel","API","Git","Consulta DNI/RUC & Placa"],uri:"https://youtu.be/0BLet4K40ac",image:"garage.png"}),n.value.push({id:1,title:"Aplicación Web - Courier",year:2024,skills:["JavaScript","PHP","VueJS","Laravel","API","Git","Facturación Electronica","Consulta DNI/RUC"],uri:"https://youtu.be/0BLet4K40ac",image:"courier.png"})});const g=L(()=>{switch(m.value){case"xs":return 220;case"sm":return 400;case"md":return 500;case"lg":return 600;case"xl":return 800;case"xxl":return 1200}}),d=l=>new URL(Object.assign({"../assets/images/systems/courier.png":I,"../assets/images/systems/garage.png":J})[`../assets/images/systems/${l}`],import.meta.url).href;return(l,j)=>{const v=e("v-card-title"),h=e("v-chip"),f=e("v-card"),y=e("v-col"),x=e("v-row"),b=e("v-container");return t(),r(b,{fluid:""},{default:a(()=>[o(x,{align:"center",justify:"center",dense:""},{default:a(()=>[(t(!0),i(_,null,u(n.value,(s,C)=>(t(),r(y,{cols:"auto",key:C},{default:a(()=>[o(f,{class:A([g.value>400?" mr-5":"","mx-auto hover"]),variant:"plain","max-width":"400","min-height":"380",href:s.uri,target:"_blank",hover:""},{default:a(()=>[c("img",{src:d(s.image),class:"align-end",height:"200px",width:"100%",cover:""},null,8,D),o(v,{class:"wrap",textContent:p(s.title)},null,8,["textContent"]),c("div",N,[(t(!0),i(_,null,u(s.skills,(k,w)=>(t(),r(h,{color:"primary ma-2",key:w},{default:a(()=>[c("p",U,p(k),1)]),_:2},1024))),128))])]),_:2},1032,["class","href"])]),_:2},1024))),128))]),_:1})]),_:1})}}};export{F as default};