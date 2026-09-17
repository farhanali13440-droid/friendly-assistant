import { createFileRoute } from "@tanstack/react-router";
import EbookLanding from "../pages/EbookLanding";

export const Route = createFileRoute("/ebook")({
  component: EbookLanding,
  head: () => ({
    meta: [
      { title: "The Patient Acquisition Machine | Zero Apple A Day" },
      { name: "description", content: "The step-by-step ebook that shows US doctors and clinics how to build a simple, repeatable patient acquisition system. $27 with 5 bonuses." },
    ],
    links: [
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      { rel: "stylesheet", href: "https://fonts.googleapis.com/css2?family=Figtree:wght@400;500;600;700&family=Sora:wght@600;700;800&display=swap" },
    ],
  }),
});
