const themeToogle = document.getElementById("theme-toogle");
const heading = document.getElementById("heading");

themeToogle.addEventListener("click", () => {
  const currentTheme = document.body.style.backgroundColor;
  if (currentTheme === "" || currentTheme === "white") {
    document.body.style.backgroundColor = "black";
    heading.style.color = "white";
    themeToogle.innerText="Light Mode";
    themeToogle.classList.replace("button-light", "button-dark");
  } else {
    document.body.style.backgroundColor = "white";
    heading.style.color = "black";
    themeToogle.innerText="Dark Mode";
    themeToogle.classList.replace("button-dark", "button-light");
  }
});
