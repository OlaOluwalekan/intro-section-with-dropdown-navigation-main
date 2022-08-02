const openMenuBtn = document.querySelector(".open-menu");
const closeMenuBtn = document.querySelector(".close-menu img");
const menuContainer = document.querySelector(".menu-container");
const pageOverlay = document.querySelector(".overlay");
const openFeaturesMenuBtn = document.querySelector(".feature-main");
const openCompanyMenuBtn = document.querySelector(".company-main");
const featuresMenu = document.querySelector(".feature-drop-down");
const companyMenu = document.querySelector(".company-drop-down");

let menuOpened = 0;

const desktopScreen = window.matchMedia("(min-width: 700px)");

window.onresize = () => {
  if (desktopScreen.matches) {
    openMenuBtn.style.display = "none";
    pageOverlay.style.display = "none";
    menuContainer.style.display = "flex";
  } else {
    openMenuBtn.style.display = "flex";
    if (menuOpened != 0) {
      pageOverlay.style.display = "flex";
    } else {
      menuContainer.style.display = "none";
    }
  }
};

openMenuBtn.onclick = () => {
  OpenMenu();
  menuOpened = 1;
};

closeMenuBtn.onclick = () => {
  CloseMenu();
  menuOpened = 0;
};

pageOverlay.onclick = () => {
  CloseMenu();
  menuOpened = 0;
};

openFeaturesMenuBtn.onclick = () => {
  if (featuresMenu.style.height == "0px") {
    OpenFeaturesMenu();
    CloseCompanyMenu();
  } else {
    CloseFeaturesMenu();
  }
};

openCompanyMenuBtn.onclick = () => {
  if (companyMenu.style.height == "0px") {
    OpenCompanyMenu();
    CloseFeaturesMenu();
  } else {
    CloseCompanyMenu();
  }
};

const OpenMenu = () => {
  menuContainer.style.display = "flex";
  setTimeout(() => {
    menuContainer.style.right = "0";
    pageOverlay.style.display = "flex";
    openMenuBtn.style.display = "none";
  }, 10);
};

const CloseMenu = () => {
  menuContainer.style.right = "-500px";
  pageOverlay.style.display = "none";
  openMenuBtn.style.display = "flex";
  setTimeout(() => {
    menuContainer.style.display = "none";
  }, 1000);

  CloseFeaturesMenu();
  CloseCompanyMenu();
};

const OpenFeaturesMenu = () => {
  featuresMenu.style.height = "170px";
  featuresMenu.style.padding = "5px 20px";
};

const CloseFeaturesMenu = () => {
  featuresMenu.style.height = "0px";
  featuresMenu.style.padding = "0";
};

const OpenCompanyMenu = () => {
  companyMenu.style.height = "130px";
  companyMenu.style.padding = "5px 20px";
};

const CloseCompanyMenu = () => {
  companyMenu.style.height = "0px";
  companyMenu.style.padding = "0";
};
