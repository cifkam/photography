function setupPreviewGalleryGallery(id, href, images, title, width = null, height = null) {
  let g = document.getElementById(id);
  g.classList.add("preview-gallery");

  let image_link = g.querySelector(".preview-gallery-image");
  if (image_link == null) {
    image_link = document.createElement("a");
    image_link.classList.add("preview-gallery-image");
    image_link.href = href;
    g.appendChild(image_link);
  }

  let image = image_link.querySelector("img");
  if (image == null) {
    image = document.createElement("img");
    image.src = images[0];
    image.classList.add("preview-gallery-image");
    image_link.appendChild(image);
  }

  if (width != null) {
    image.style.width = width;
  }
  if (height != null) {
    image.style.height = height;
  }

  g.index = 0;
  g.images = images;
  g.image = image;

  // Create prev button
  let prev = g.querySelector(".preview-gallery-prev");
  if (prev == null) {
    prev = document.createElement("span");
    prev.classList.add("preview-gallery-prev");
    prev.innerHTML = "↩";
  }
  prev.onclick = (function (g) {
    return function () {
      g.index = Math.max(0, g.index - 1);
      g.image.src = g.images[g.index];
    };
  })(g);
  g.appendChild(prev);

  // Create next button
  let next = g.querySelector("preview-gallery-next");
  if (next == null) {
    next = document.createElement("span");
    next.classList.add("preview-gallery-next");
    next.innerHTML = "↪";
  }
  next.onclick = (function (g) {
    return function () {
      g.index = Math.min(g.images.length - 1, g.index + 1);
      g.image.src = g.images[g.index];
    };
  })(g);
  g.appendChild(next);

  // Create div with gallery title
  let title_div = g.querySelector("preview-gallery-title");
  if (title_div == null) {
    title_div = document.createElement("div");
    title_div.classList.add("preview-gallery-title");
    g.appendChild(title_div);
  }

  let title_link = title_div.querySelector("a");
  if (title_link == null) {
    title_link = document.createElement("a");
    title_link.innerHTML = title;
    title_link.href = href;
    title_div.appendChild(title_link);
  }
}
