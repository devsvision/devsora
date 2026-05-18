import { includePartials } from './modules/include.js';
import { appShell, authPage, dashboardShell, featurePage, projectsPage } from './stores/ui.store.js';

window.appShell = appShell;
window.authPage = authPage;
window.dashboardShell = dashboardShell;
window.featurePage = featurePage;
window.projectsPage = projectsPage;

document.addEventListener('DOMContentLoaded', () => {
  includePartials();
});
