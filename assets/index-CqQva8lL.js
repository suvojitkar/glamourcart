import{importShared as a}from"./__federation_fn_import-B5nKkAXK.js";import d,{j as i}from"./__federation_expose_Cart-DLZmfvbr.js";import{r as f}from"./__federation_shared_react-dom-Dnnd693R.js";(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))s(e);new MutationObserver(e=>{for(const r of e)if(r.type==="childList")for(const o of r.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&s(o)}).observe(document,{childList:!0,subtree:!0});function u(e){const r={};return e.integrity&&(r.integrity=e.integrity),e.referrerPolicy&&(r.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?r.credentials="include":e.crossOrigin==="anonymous"?r.credentials="omit":r.credentials="same-origin",r}function s(e){if(e.ep)return;e.ep=!0;const r=u(e);fetch(e.href,r)}})();var c,n=f;c=n.createRoot,n.hydrateRoot;function l(){return i.jsx(d,{})}const{StrictMode:m}=await a("react");c(document.getElementById("root")).render(i.jsx(m,{children:i.jsx(l,{})}));
