const handleClick: () => void = () => {
  console.log("hello");
};
const buttons = document.querySelectorAll(".shopping-cta-button");
buttons.forEach((button) => button?.addEventListener("click", handleClick));
