if (typeof window !== "undefined") {
  const body = document.querySelector("body");
  const allDropdownMenu = document.querySelectorAll(".dropdown-menu");

  body.addEventListener("click", (e) => {
    if (
      e.target.classList.contains("dropdown") ||
      e.target.parentElement.classList.contains("dropdown")
    ) {
      console.log("");
    } else {
      allDropdownMenu.forEach((menu) => menu.classList.remove("show"));
    }
  });
  // new Glide(".glide").mount();
}
