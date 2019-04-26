window.addEventListener("load", pageLoaded);

function pageLoaded() {
  //selector solution
  const bullets = document.querySelectorAll(".circle:nth-child(n+3)");
  bullets.forEach(createClone);

  //the climsy js-solution
  //   const bullets = document.querySelectorAll(".circle");
  //   for (let i = 2; i < bullets.length; i++) {
  //     createClone(bullets[i]);
  //   }

  const textBullet = document.querySelector("#testbullet");
  // find the <g> in #textlines to use as a template
  createClone(textBullet);
}
function createClone(bullet) {
  const template = document.querySelector("#intro");
  // make a clone
  const copy = template.cloneNode(true);
  // modify the clone
  copy.querySelector("text").textContent = "juju";
  // position the clone

  console.log(bullet);
  const bulletX = bullet.getAttribute("cx");

  const firstX = document.querySelector(".circle").getAttribute("cx");
  console.log(firstX);

  const diffy = bulletX - firstX;

  //   copy.style.transform = "translate(220px)";
  copy.setAttribute("transform", `translate(${diffy} 0)`);
  // append it to the end of #textlines
  document.querySelector("#textlines").append(copy);
}
