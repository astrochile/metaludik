import type { MetadataRoute } from "next";
import { projects, services } from "@/lib/content";

const BASE_URL = "https://metaludik.cl";

export default function sitemap(): MetadataRoute.Sitemap {
  const staticRoutes = [
    "",
    "/nosotros",
    "/servicios",
    "/proyectos",
    "/cotizar",
    "/contacto",
  ].map((path) => ({
    url: `${BASE_URL}${path}`,
    lastModified: new Date(),
  }));

  const projectRoutes = projects.map((p) => ({
    url: `${BASE_URL}/proyectos/${p.slug}`,
    lastModified: new Date(),
  }));

  return [...staticRoutes, ...projectRoutes];
}
