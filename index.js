import{a as w,S as b,i as l}from"./assets/vendor-frHSA4Lh.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))a(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&a(s)}).observe(document,{childList:!0,subtree:!0});function n(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function a(e){if(e.ep)return;e.ep=!0;const r=n(e);fetch(e.href,r)}})();async function f(t,o){const{data:{hits:n,totalHits:a}}=await w.get("https://pixabay.com/api/",{params:{key:"50844575-9e292bfe2a1d78c665340f91a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0,page:o,per_page:15}});return{hits:n,totalHits:a}}const i={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector(".loader"),loadBtn:document.querySelector(".load-btn")},v=new b(".gallery a",{});function p(t){const o=t.map(({webformatURL:n,largeImageURL:a,tags:e,likes:r,views:s,comments:y,downloads:L})=>`<li class='gallery-item'>
         <a href='${a}'>
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
         <span>${y}</span>
         </li>

         <li class='info-item'>
          <span>downloads</span>
         <span>${L}</span>
         </li>
       </ul>
      </li>`).join("");i.gallery.insertAdjacentHTML("beforeend",o),v.refresh()}function d(){i.loader.classList.add("hide")}function m(){i.loader.classList.remove("hide")}function S(){i.gallery.innerHTML=""}function g(){i.loadBtn.classList.remove("hide")}function h(){i.loadBtn.classList.add("hide")}d();let c=null,u=null;const B=15;i.form.addEventListener("submit",$);async function $(t){if(t.preventDefault(),u=t.currentTarget.elements.search.value.trim(),c=1,u===""){l.warning({message:"The input is empty",position:"topRight"}),i.form.reset();return}m(),S();try{const{hits:n}=await f(u,c);if(n.length===0)return l.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"}),h(),!0;p(n),g()}catch(n){l.warning({message:`${n}`,position:"topRight"})}finally{i.form.reset(),d()}}i.loadBtn.addEventListener("click",q);async function q(){m(),c++;try{const{hits:t,totalHits:o}=await f(u,c),n=Math.ceil(o/B);if(c>=n){l.warning({message:"We are sorry, but you have reached the end of search results.",position:"topRight",color:"red"}),h();return}p(t),g()}catch(t){l.warning({message:`${t}`,position:"topRight"})}finally{i.form.reset(),d(),M()}}function M(){const t=document.querySelector(".gallery-item"),{height:o}=t.getBoundingClientRect();window.scrollBy({top:o*2,behavior:"smooth"})}
//# sourceMappingURL=index.js.map
