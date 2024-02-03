import{i as c}from"./assets/vendor-4d6948b9.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const l=document.querySelector(".js-form");document.querySelector(".js-input");document.querySelector(".js-button");const a=document.querySelector(".js-gallery");l.addEventListener("submit",u);function u(o){o.preventDefault();const t=l.elements.text.value.trim();t?m(t):c.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function m(o){const t=`https://pixabay.com/api/?key=42169950-0e8cca4ed1d3fcef898dec13a&q=${o}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(t).then(s=>{if(s.ok)return s.json();throw new Error(`${s.status}`)}).then(s=>p(s)).catch(s=>console.log(s.message))}function f({largeImageURL:o,previewURL:t,tags:s,likes:n,views:e,comments:r,downloads:i}){return`
		  <li class="gallery-item">
		  <a class="gallery-link" href=${o}>
			<img class="gallery-image" src=${t} alt="${s}" />
			<div class="container-text"><h3 class="titel-text">Likes</h3><p class="text">${n}</p></div>
			<div class="container-text"><h3 class="titel-text">Views</h3><p class="text">${e}</p></div>
			<div class="container-text"><h3 class="titel-text">Comments</h3><p class="text">${r}</p></div>
			<div class="container-text"><h3 class="titel-text">Dowloads</h3><p class="text">${i}</p></div>
		  </a>
		</li>
		`}function d(o){return o.map(f).join("")}function p(o){console.log(o);const t=d(o);console.log(t),a.innerHTML=t}
//# sourceMappingURL=commonHelpers.js.map
