import "@fontsource/zen-kaku-gothic-new/latin-400.css";
import "@fontsource/zen-kaku-gothic-new/latin-500.css";
import "@fontsource/zen-kaku-gothic-new/latin-700.css";
import "./style.css";
import "./movies.css";
import { profile, tracks, slides, settings } from "./config";
import { startSlideshow } from "./slideshow";
import { startSnow } from "./snow";
import { initTilt } from "./tilt";
import { createPlayer } from "./player";
import { initCursor } from "./cursor";

const $ = <T extends HTMLElement>(s:string):T => document.querySelector(s) as T;
$("#name").textContent=profile.name;
$("#kanji").textContent=profile.kanji;
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
