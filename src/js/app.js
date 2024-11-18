import { initPage } from "./module/pageLoad.js";
import { initHeader } from './module/headerPage.js';
import { initMain } from "./module/mainPage.js";
import { initFooter } from "./module/footerPage.js";

window.addEventListener('DOMContentLoaded', async function() {

    await initPage();
    initHeader();
    initMain();
    await initFooter();

});