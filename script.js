"use strict";
//Determine which videos to play
function playVideos(entries, observer) {
  console.log(entries);
  entries.forEach((entry) => {
    const SRC = entry.target.getAttribute("src");
    //If it's intersecting play video
    const updateSRC = `${SRC.substr(0, SRC.indexOf("?") + 1)}${
      entry.isIntersecting ? "autoplay=1&mute=1" : "autoplay=0&mute=0"
    }`;
    entry.target.setAttribute("src", updateSRC);
    console.log(entry.target.getAttribute("src"));
  });
}

//Observer setup
const observer = new IntersectionObserver(playVideos, {
  root: null,
  threshold: 0.6,
});

document.querySelectorAll("iframe").forEach((vid) => observer.observe(vid));
