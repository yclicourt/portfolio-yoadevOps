import { useEffect } from "react";

// Per-route meta (title, description, Open Graph, canonical) for the
// minimal pathname router in App.tsx. No new dependency: plain DOM writes.
//
// What this fixes: Google and the browser tab see the right title and
// description for each route. What it does NOT fix: social crawlers
// (WhatsApp / Telegram / LinkedIn) do not run JavaScript, so a shared
// link still shows the static tags from index.html until the route is
// prerendered (Step 3). Do not claim otherwise.

export interface RouteMeta {
  title: string;
  description: string;
  ogUrl: string;
  canonical: string;
}

const SITE = "https://yoadevops.vercel.app";

const HOME_META: RouteMeta = {
  title:
    "Yoan Carlos Licourt — Freelance Fullstack Developer | React · Next.js · NestJS",
  description:
    "Fullstack Developer with 6+ years of experience building the systems small businesses run on — invoicing, inventory, cash register — designed to keep working when the connection doesn't. React, Next.js, Angular, NestJS, PostgreSQL. Founder of CajaYa.",
  ogUrl: `${SITE}/`,
  canonical: `${SITE}/`,
};

const MIPYMES_META: RouteMeta = {
  // The /mipymes page is for Cuban businesses, so its meta stays in
  // Spanish regardless of the visitor's language toggle.
  title: "Servicios para mipymes — YoaDevOps Consulting",
  description:
    "Webs, tiendas y sistemas para negocios en Cuba desde $250. Me escribes por WhatsApp, te cotizo por escrito y lo construimos. CajaYa: 7 días de prueba gratis.",
  ogUrl: `${SITE}/mipymes`,
  canonical: `${SITE}/mipymes`,
};

export function getRouteMeta(route: string): RouteMeta {
  if (route === "/mipymes") return MIPYMES_META;
  return HOME_META;
}

function upsertMeta(
  attr: "name" | "property",
  key: string,
  content: string,
) {
  const selector = `meta[${attr}="${key}"]`;
  let el = document.querySelector<HTMLMetaElement>(selector);
  if (!el) {
    el = document.createElement("meta");
    el.setAttribute(attr, key);
    document.head.appendChild(el);
  }
  el.setAttribute("content", content);
}

function upsertCanonical(href: string) {
  let el = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
  if (!el) {
    el = document.createElement("link");
    el.setAttribute("rel", "canonical");
    document.head.appendChild(el);
  }
  el.setAttribute("href", href);
}

export function applyRouteMeta(meta: RouteMeta) {
  document.title = meta.title;
  upsertMeta("name", "description", meta.description);
  upsertMeta("property", "og:title", meta.title);
  upsertMeta("property", "og:description", meta.description);
  upsertMeta("property", "og:url", meta.ogUrl);
  upsertCanonical(meta.canonical);
}

export function useRouteMeta(route: string) {
  useEffect(() => {
    applyRouteMeta(getRouteMeta(route));
  }, [route]);
}
