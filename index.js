import{a as u,i as f,S as d}from"./assets/vendor-DFCQGEf1.js";(function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))o(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const s of r.addedNodes)s.tagName==="LINK"&&s.rel==="modulepreload"&&o(s)}).observe(document,{childList:!0,subtree:!0});function i(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function o(e){if(e.ep)return;e.ep=!0;const r=i(e);fetch(e.href,r)}})();function m(t){return u.get("https://pixabay.com/api/",{params:{key:"50844575-9e292bfe2a1d78c665340f91a",q:t,image_type:"photo",orientation:"horizontal",safesearch:!0}}).then(p)}function p(t){const n=t.data.hits;if(n.length===0){f.warning({message:"Sorry, there are no images matching your search query. Please try again!",position:"topRight",color:"red"});return}return n}const a={form:document.querySelector(".form"),gallery:document.querySelector(".gallery"),loader:document.querySelector("#loader")},g=new d(".gallery a",{});function y(t){const n=t.map(({webformatURL:i,largeImageURL:o,tags:e,likes:r,views:s,comments:l,downloads:c})=>`<li class='gallery-item'>
         <a href='${o}'>
         <img src='${i}' alt='${e}' width='360'
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
         <span>${l}</span>
         </li>

         <li class='info-item'>
          <span>downloads</span>
         <span>${c}</span>
         </li>
       </ul>
      </li>`).join("");a.gallery.insertAdjacentHTML("beforeend",n),g.refresh()}function h(){a.loader.classList.remove("loader")}function L(){a.loader.classList.add("loader")}function b(){a.gallery.innerHTML=""}a.form.addEventListener("submit",S);function S(t){t.preventDefault();const n=t.currentTarget.elements.search.value.trim();if(n===""){t.currentTarget.reset();return}L(),b(),m(n).then(y).catch(console.log).finally(()=>{h()}),t.currentTarget.reset()}
//# sourceMappingURL=index.js.map
