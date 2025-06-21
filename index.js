import{a as y,S as L,i as l}from"./assets/vendor-frHSA4Lh.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&i(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function i(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();async function w(o,t){const{data:{hits:n,totalHits:i}}=await y.get("https://pixabay.com/api/",{params:{key:"50844575-9e292bfe2a1d78c665340f91a",q:o,image_type:"photo",orientation:"horizontal",safesearch:!0,page:t,per_page:15}});return{hits:n,totalHits:i}}const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")},b=new L(".gallery a",{});function v(o){const t=o.map(({webformatURL:n,largeImageURL:i,tags:e,likes:r,views:s,comments:g,downloads:h})=>`<li class='gallery-item'>
         <a href='${i}'>
         <img src='${n}' alt='${e}' width='360'
         />
         </a>
      <ul class='info-list'>
      
      <li class='info-item'>
         <span>Likes</span>
         <span>${r}</span>
        </li>

        <li class='info-item'>
          <span>views</span>
         <span>${s}</span>
         </li>

         <li class='info-item'>
          <span>comments</span>
         <span>${g}</span>
         </li>

         <li class='info-item'>
          <span>downloads</span>
         <span>${h}</span>
         </li>
       </ul>
      </li>`).join("");a.gallery.insertAdjacentHTML("beforeend",t),b.refresh()}function f(){a.loader.classList.add("hide")}function p(){a.loader.classList.remove("hide")}function S(){a.gallery.innerHTML=""}function B(){a.loadBtn.classList.remove("hide")}function d(){a.loadBtn.classList.add("hide")}f();let c=null,u=null;const q=15;a.form.addEventListener("submit",M);async function M(o){o.preventDefault();const t=o.currentTarget.elements.search.value.trim();if(u=t,c=1,t===""){l.warning({message:"The input is empty",position:"topRight"}),a.form.reset();return}p(),S(),await m(u,c)}a.loadBtn.addEventListener("click",$);async function $(){p(),c++,await m(u,c),P()}async function m(o,t){try{const{hits:n,totalHits:i}=await w(o,t);if(Math.ceil(i/q)>=i){l.warning({message:"We are sorry, but you have reached the end of search results.",position:"topRight",color:"red"}),d();return}if(n.length===0){l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),d();return}v(n),B()}catch(n){l.warning({message:`${n}`,position:"topRight"})}finally{a.form.reset(),f()}}function P(){const o=document.querySelector(".gallery-item"),{height:t}=o.getBoundingClientRect();window.scrollBy({top:t*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
