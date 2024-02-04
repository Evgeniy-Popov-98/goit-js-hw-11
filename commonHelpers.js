import{i as l,S as c}from"./assets/vendor-46aac873.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))n(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const i of r.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&n(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerpolicy&&(r.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?r.credentials="include":e.crossorigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function n(e){if(e.ep)return;e.ep=!0;const r=s(e);fetch(e.href,r)}})();const a=document.querySelector(".js-form");document.querySelector(".js-input");document.querySelector(".js-button");const u=document.querySelector(".js-gallery");a.addEventListener("submit",d);function d(t){t.preventDefault();const o=a.elements.text.value.trim();o?f(o):l.error({position:"topRight",message:"Sorry, there are no images matching your search query. Please try again!"})}function f(t){const o=`https://pixabay.com/api/?key=42169950-0e8cca4ed1d3fcef898dec13a&q=${t}&image_type=photo&orientation=horizontal&safesearch=true`;return fetch(o).then(s=>{if(s.ok)return s.json();throw new Error(`${s.status}`)}).then(s=>p(s.hits)).catch(s=>console.log(s.message))}function m(t){return`
			 <li class="gallery-item">
				<a class="gallery-link" href=${t.largeImageURL}>
					<img class="gallery-image" src=${t.webformatURL} alt="${t.tags}" />
				</a>
				<div class="container">
					<div class="container-text"><h3 class="titel-text">Likes</h3><p class="text">${t.likes}</p></div>
					<div class="container-text"><h3 class="titel-text">Views</h3><p class="text">${t.views}</p></div>
					<div class="container-text"><h3 class="titel-text">Comments</h3><p class="text">${t.comments}</p></div>
					<div class="container-text"><h3 class="titel-text">Dowloads</h3><p class="text">${t.downloads}</p></div>
				</div>
			</li>
			`}function p(t){const o=t.map(m).join("");u.innerHTML=o}new c(".gallery a",{captionsData:"alt",captionPosition:"bottom",captionDelay:250});
//# sourceMappingURL=commonHelpers.js.map
