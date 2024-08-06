const home = () => {
  let content = document.querySelector("#content");
  let h1 = document.createElement("h1");
  h1.innerText = "PAC PAC Peckish";
  content.appendChild(h1);

  let divGreeting = document.createElement("div");
  divGreeting.classList.add("greeting");
  divGreeting.innerHTML = "";
  content.appendChild(divGreeting);

  let divOpenTime = document.createElement("div");
  divOpenTime.classList.add("time");
  divOpenTime.innerHTML = "";
  content.appendChild(divOpenTime);

  let divLocation = document.createElement("div");
  divLocation.classList.add("location");
  divLocation.innerHMTL = "";
  content.appendChild(divLocation);
};
export { home };
