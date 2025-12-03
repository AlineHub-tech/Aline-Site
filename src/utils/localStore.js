export const PROJECTS_KEY = "portfolio_projects_v1";

export function loadProjects() {
  try {
    const raw = localStorage.getItem(PROJECTS_KEY);
    return raw ? JSON.parse(raw) : null;
  } catch (e) {
    console.error("loadProjects", e);
    return null;
  }
}

export function saveProjects(list) {
  try {
    localStorage.setItem(PROJECTS_KEY, JSON.stringify(list));
  } catch (e) {
    console.error("saveProjects", e);
  }
}
