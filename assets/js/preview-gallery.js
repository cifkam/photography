function setupPreviewGalleryGalleryV2(id, href, images, width, height) {
  let g = document.getElementById(id);
  g.classList.add("preview-gallery");

  image = document.createElement("a");
  image.href = href;
  image.style.width = "100%";
  image.style.height = "100%";
  image.style.backgroundImage = "url('" + images[0] + "')";
  image.style.display = "block";
  image.style.backgroundSize = "cover";
  g.appendChild(image);
  g.index = 0;
  g.images = images;

  // Create prev button
  let prev = document.createElement("span");
  prev.classList.add("preview-gallery-prev");
  prev.innerHTML = "↩";
  prev.onclick = function () {
    g.index = Math.max(0, g.index - 1);
    image.style.backgroundImage = "url('" + g.images[g.index] + "')";
  };
  g.appendChild(prev);

  // Create next button
  let next = document.createElement("span");
  next.classList.add("preview-gallery-next");
  next.innerHTML = "↪";
  next.onclick = function () {
    g.index = Math.min(g.images.length - 1, g.index + 1);
    image.style.backgroundImage = "url('" + g.images[g.index] + "')";
  };
  g.appendChild(next);
}
