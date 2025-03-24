function setupPreviewGalleryGallery(id, href, images, title, width = null, height = null) {
  let g = document.getElementById(id);
  g.classList.add("preview-gallery");

  let image_link = document.createElement("a");
  image_link.href = href;

  let image = document.createElement("img");
  image.src = images[0];
  if (width != null) {
    image.style.width = width;
  }
  if (height != null) {
    image.style.height = height;
  }
  image.classList.add("preview-gallery-image");
  image_link.appendChild(image);
  g.appendChild(image_link);
  g.index = 0;
  g.images = images;
  g.image = image;

  // Create prev button
  let prev = document.createElement("span");
  prev.classList.add("preview-gallery-prev");
  prev.innerHTML = "↩";
  prev.onclick = (function (g) {
    return function () {
      g.index = Math.max(0, g.index - 1);
      g.image.src = g.images[g.index];
    };
  })(g);
  g.appendChild(prev);

  // Create next button
  let next = document.createElement("span");
  next.classList.add("preview-gallery-next");
  next.innerHTML = "↪";
  next.onclick = (function (g) {
    return function () {
      g.index = Math.min(g.images.length - 1, g.index + 1);
      g.image.src = g.images[g.index];
    };
  })(g);
  g.appendChild(next);

  // Create div with gallery title
  let title_div = document.createElement("div");
  title_div.classList.add("preview-gallery-title");
  let title_link = document.createElement("a");
  title_link.innerHTML = title;
  title_link.href = href;
  title_div.appendChild(title_link);
  g.appendChild(title_div);
}
