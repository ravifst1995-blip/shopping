// app/components/BodyClassManager.tsx
"use client";

import { usePathname } from "next/navigation";
import { useEffect } from "react";

function toKebab(s: string) {
  return s
    .replace(/^\//, "")
    .replace(/\/+/g, "-")
    .replace(/\[|\]|\./g, "")
    .toLowerCase() || "home";
}

export default function BodyClassManager() {
  const pathname = usePathname();

  useEffect(() => {
    if (typeof document === "undefined") return;

    // Build id and classes
    const kebab = toKebab(pathname || "/");
    const pageId = `${kebab}-page`;

    // Remove previous page-* classes but keep any persistent classes you might add elsewhere
    const toRemove: string[] = [];
    document.body.classList.forEach((c) => {
      if (c.startsWith("page-") || c.startsWith("seg-")) toRemove.push(c);
    });
    toRemove.forEach((c) => document.body.classList.remove(c));

    // Add page-wide class
    document.body.classList.add(`page-${kebab}`);

    // Add per-segment classes like seg-shop, seg-product
    const segs = (pathname || "/")
      .split("/")
      .filter(Boolean)
      .map((s) => s.replace(/\[|\]|\./g, "").toLowerCase());

    if (segs.length === 0) document.body.classList.add("seg-home");
    segs.forEach((s) => document.body.classList.add(`seg-${s}`));

    // Set id last
    document.body.id = pageId;

    // Optional cleanup on unmount
    return () => {
      document.body.id = "";
      document.body.classList.remove(`page-${kebab}`);
      segs.forEach((s) => document.body.classList.remove(`seg-${s}`));
    };
  }, [pathname]);

  return null;
}
