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
    "YoaDevOps Consulting — Websites and systems for small businesses",
  description:
    "YoaDevOps Consulting builds the website, store, booking system or custom software your business needs, with price and scope in writing before we start. Landing from $250, online store from $500. 100% remote, for Latin America and Europe.",
  ogUrl: `${SITE}/`,
  canonical: `${SITE}/`,
};

export function getRouteMeta(): RouteMeta {
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

export function useRouteMeta() {
  useEffect(() => {
    applyRouteMeta(getRouteMeta());
  }, []);
}
