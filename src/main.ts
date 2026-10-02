import "@fontsource/zen-kaku-gothic-new/latin-400.css";
import "@fontsource/zen-kaku-gothic-new/latin-500.css";
import "@fontsource/zen-kaku-gothic-new/latin-700.css";
import "./style.css";
import "./movies.css";
import { profile, links, tracks, slides, settings } from "./config";
import { startSlideshow } from "./slideshow";
import { startSnow } from "./snow";
import { initTilt } from "./tilt";
import { createPlayer } from "./player";
import { initCursor } from "./cursor";
import { icons } from "./icons";

const $ = <T extends HTMLElement>(s:string):T => document.querySelector(s) as T;
$("#name").textContent=profile.name;
$("#kanji").textContent=profile.kanji;
$("#tagline").textContent=profile.tagline;
$("#description").textContent=profile.description;
const socialNav=$("#links");
const movieButton=socialNav.firstElementChild;
for(const social of links){
 const url=social.href?.trim();
 const username=social.copy?.trim();
 const button=document.createElement(url?'a':'button');
 button.className='chip';
 button.style.setProperty('--c',social.color);
 const svg=document.createElementNS('http://www.w3.org/2000/svg','svg');
 svg.setAttribute('viewBox','0 0 24 24');svg.setAttribute('aria-hidden','true');
 const path=document.createElementNS('http://www.w3.org/2000/svg','path');
 path.setAttribute('d',icons[social.icon]);svg.append(path);
 const label=document.createElement('span');label.textContent=social.label;
 button.append(svg,label);
 if(button instanceof HTMLAnchorElement && url){
  button.href=url;button.target='_blank';button.rel='noopener noreferrer';
 }else if(button instanceof HTMLButtonElement){
  button.type='button';
  if(username){
   button.addEventListener('click',async()=>{
    const toast=$("#toast");
    try{await navigator.clipboard.writeText(username);toast.textContent='Discord username copied: '+username;}
    catch{toast.textContent='Discord: '+username;}
    toast.classList.add('show');window.setTimeout(()=>toast.classList.remove('show'),4000);
   });
  }else{
   button.disabled=true;button.title=social.label+' profile not added yet';
   button.setAttribute('aria-label',social.label+' — profile not added yet');
  }
 }
 socialNav.insertBefore(button,movieButton);
}
startSlideshow($("#bg"),slides,settings);
startSnow($<HTMLCanvasElement>("#snow"));
initTilt($("#tilt"));
createPlayer($("#player"),tracks,settings.startVolume);
initCursor();
function el<K extends keyof HTMLElementTagNameMap>(tag:K,cls:string,text?:string){const e=document.createElement(tag);e.className=cls;if(text!==undefined)e.textContent=text;return e}
async function renderMovies(){
const {default:movies}=await import("./movies.json");
const grid=$("#movie-grid");
for(const [i,m] of movies.entries()){
 const card=el('article','movie-card');const link=el('a','movie-poster');link.href=`https://www.imdb.com/title/${m.id}/`;link.target='_blank';link.rel='noopener';link.setAttribute('aria-label',`${m.title} on IMDb`);
 const img=el('img','');img.src=m.poster;img.alt=`${m.title} poster`;img.width=320;img.height=480;img.loading='eager';img.decoding='async';link.append(img);
 if(m.type==='Series')link.append(el('span','movie-type','Series'));
 link.append(el('span','movie-number',String(i+1).padStart(3,'0')));card.append(link);
 const h=el('h3','');const a=el('a','',m.title);a.href=link.href;a.target='_blank';a.rel='noopener';h.append(a);card.append(h);
 const meta=el('div','movie-meta');meta.append(el('span','',String(m.year)));const r=el('span','movie-rating',m.rating?`★ ${m.rating.toFixed(1)}`:'Not rated');r.title=`${m.votes?.toLocaleString() ?? 0} IMDb votes`;meta.append(r);card.append(meta);
 if(m.note)card.append(el('p','movie-note',m.note));grid.append(card);
}

}
renderMovies().catch(()=>{$("#movie-grid").textContent="The collection could not load. Please refresh to try again."});
