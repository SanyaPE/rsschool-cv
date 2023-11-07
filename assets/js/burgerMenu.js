export class Menu {
  constructor() {
    this.nav = null;
    this.navList = null;
    this.toggle = null;
    this.init();
  }
  init() {
    this.nav = document.querySelector(".nav");
    this.navList = document.querySelector(".nav__list");
    this.toggle = document.querySelector(".toggle");
    this.toggle.addEventListener("click", this.switchMenu.bind(this));
  }
  switchMenu() {
    this.toggle.classList.toggle("open");
    this.nav.classList.toggle("open");
    this.navList.classList.toggle("open");
  }
}
