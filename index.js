import{a as b,S as v,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&s(u)}).observe(document,{childList:!0,subtree:!0});function n(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function s(e){if(e.ep)return;e.ep=!0;const o=n(e);fetch(e.href,o)}})();async function m(t,r){const{data:{hits:n,totalHits:s}}=await b.get("https://pixabay.com/api/",{params:{key:"50844575-9e292bfe2a1d78c665340f91a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}});return{hits:n,totalHits:s}}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")},B=new v(".gallery a",{});async function d(t){const r=t.map(({webformatURL:n,largeImageURL:s,tags:e,likes:o,views:u,comments:w,downloads:L})=>`<li class='gallery-item'>
         <a href='${s}'>
         <img src='${n}' alt='${e}' width='360'
         />
         </a>
      <ul class='info-list'>
      
      <li class='info-item'>
         <span>Likes</span>
         <span>${o}</span>
        </li>

        <li class='info-item'>
          <span>views</span>
         <span>${u}</span>
         </li>

         <li class='info-item'>
          <span>comments</span>
         <span>${w}</span>
         </li>

         <li class='info-item'>
          <span>downloads</span>
         <span>${L}</span>
         </li>
       </ul>
      </li>`).join("");i.gallery.insertAdjacentHTML("beforeend",r),B.refresh()}function p(){i.loader.classList.add("hide")}function g(){i.loader.classList.remove("hide")}function S(){i.gallery.innerHTML=""}function h(){i.loadBtn.classList.remove("hide")}function f(){i.loadBtn.classList.add("hide")}p();let c=1,l=null;const y=15;i.form.addEventListener("submit",$);async function $(t){if(t.preventDefault(),l=t.currentTarget.elements.search.value.trim(),c=1,l===""){a.warning({message:"The input is empty",position:"topRight"}),i.form.reset();return}g(),S();try{const{hits:n,totalHits:s}=await m(l,c),e=Math.ceil(s/y);if(n.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),f();return}else a.success({message:`Images with ${l} are found`,position:"topRight",color:"green"});c>=e?f():h(),d(n)}catch(n){a.warning({message:`${n}`,position:"topRight"})}finally{i.form.reset(),p()}}i.loadBtn.addEventListener("click",q);async function q(){g(),c++;try{const{hits:t,totalHits:r}=await m(l,c),n=Math.ceil(r/y);if(c>=n){a.warning({message:"We are sorry, but you have reached the end of search results.",position:"topRight",color:"red"}),f();return}else a.success({message:`Images with ${l} are found`,position:"topRight",color:"green"});const s=document.querySelector(".gallery-item");if(!s){d(t);return}const{height:e}=s.getBoundingClientRect();window.scrollBy({top:e*2,behavior:"smooth"}),d(t),h()}catch(t){a.warning({message:`${t}`,position:"topRight"})}finally{i.form.reset(),p(),R()}}function R(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
