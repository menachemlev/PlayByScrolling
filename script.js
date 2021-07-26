"use strict";
 /*The app is going through all the entries(YouTube iframes) every time the page is scrolling.
When videos are at-least 60% visible they will start playing and rest of the videos will stop. To change to playing state,
the page is modifying the source attribute ,changing the parameteres 'autoplay' and 'mute'(must come together)*/
function playVideos(entries, observer) { 
  entries.forEach((entry) => {
    const SRC = entry.target.getAttribute("src");
    //If it's intersecting play video
    const updateSRC = `${SRC.substr(0, SRC.indexOf("?") + 1)}${
      entry.isIntersecting ? "autoplay=1&mute=1" : "autoplay=0&mute=0"
    }`;
    entry.target.setAttribute("src", updateSRC);
  });
}




//Setting up the observer observe and to play each video when it is at-least 60% percent visible.
const observer = new IntersectionObserver(playVideos, {
  root: null,
  threshold: 0.6,
});

//Every iframe is observed
document.querySelectorAll("iframe").forEach((vid) => observer.observe(vid));
