import{a as b,S as v,i as a}from"./assets/vendor-frHSA4Lh.js";(function(){const r=document.createElement("link").relList;if(r&&r.supports&&r.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const u of o.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&n(u)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function n(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}})();async function p(t,r){const{data:{hits:s,totalHits:n}}=await b.get("https://pixabay.com/api/",{params:{key:"50844575-9e292bfe2a1d78c665340f91a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:r,per_page:15}});return{hits:s,totalHits:n}}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")},S=new v(".gallery a",{});function m(t){const r=t.map(({webformatURL:s,largeImageURL:n,tags:e,likes:o,views:u,comments:L,downloads:w})=>`<li class='gallery-item'>
         <a href='${n}'>
         <img src='${s}' alt='${e}' width='360'
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
         <span>${L}</span>
         </li>

         <li class='info-item'>
          <span>downloads</span>
         <span>${w}</span>
         </li>
       </ul>
      </li>`).join("");i.gallery.insertAdjacentHTML("beforeend",r),S.refresh()}function f(){i.loader.classList.add("hide")}function g(){i.loader.classList.remove("hide")}function $(){i.gallery.innerHTML=""}function h(){i.loadBtn.classList.remove("hide")}function d(){i.loadBtn.classList.add("hide")}f();let c=1,l=null;const y=15;i.form.addEventListener("submit",B);async function B(t){if(t.preventDefault(),l=t.currentTarget.elements.search.value.trim(),c=1,l===""){a.warning({message:"The input is empty",position:"topRight"}),i.form.reset();return}g(),$();try{const{hits:s,totalHits:n}=await p(l,c),e=Math.ceil(n/y);if(s.length===0){a.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),d();return}else a.success({message:`Images with ${l} are found`,position:"topRight",color:"green"});c>=e?d():h(),m(s)}catch(s){a.warning({message:`${s}`,position:"topRight"})}finally{i.form.reset(),f()}}i.loadBtn.addEventListener("click",q);async function q(){g(),c++;try{const{hits:t,totalHits:r}=await p(l,c),s=Math.ceil(r/y);if(c>=s){a.warning({message:"We are sorry, but you have reached the end of search results.",position:"topRight",color:"red"}),d();return}else a.success({message:`Images with ${l} are found`,position:"topRight",color:"green"});m(t),h()}catch(t){a.warning({message:`${t}`,position:"topRight"})}finally{i.form.reset(),f(),M()}}function M(){const t=document.querySelector(".gallery-item");if(!t)return;const{height:r}=t.getBoundingClientRect();window.scrollBy({top:r*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
