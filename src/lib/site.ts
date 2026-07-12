import profile from "../data/profile.json";
import projectsData from "../data/projects.json";
import config from "../data/config.json";

export { profile, config };
export const projects = projectsData.projects;

export type Resume = (typeof profile.resumes)[number];
export type Project = (typeof projectsData.projects)[number];

/**
 * Resolve a path inside /public against the site's base URL (e.g. "/loadout/").
 * JSON data stores paths relative to /public (no leading slash) — always route
 * them through here so links work both locally and on GitHub Pages.
 */
export function asset(path: string): string {
  const base = import.meta.env.BASE_URL; // e.g. "/loadout/"
  return `${base}${path.replace(/^\//, "")}`;
}
