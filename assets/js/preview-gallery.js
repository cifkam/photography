function previewGalleryNext(gallery) {
    let es = gallery.querySelectorAll(".preview-gallery-item");
    var index = -1;
    for (var i=0; i<es.length; ++i) {
      if (es[i].classList.contains("visible")) {
          index = i; break;
        }
    }
    
    if (index === -1) {
        es[0].classList.add("visible")
    } else {
        es[index].classList.remove("visible");
        es[Math.min(index+1, es.length-1)].classList.add("visible");
    }
}

function previewGalleryPrev(gallery) {
    let es = gallery.querySelectorAll(".preview-gallery-item");
    var index = -1;
    for (var i=0; i<es.length; ++i) {
      if (es[i].classList.contains("visible")) {
          index = i; break;
        }
    }
    
    if (index === -1) {
        es[es.length-1].classList.add("visible")
    } else {
        es[index].classList.remove("visible");
        es[Math.max(index-1, 0)].classList.add("visible");
    }
}

function setupPreviewGallery(gallery) {
    gallery.firstElementChild.classList.add("visible");

    // Add classes to children
    for (let child of gallery.children) {
        child.classList.add("preview-gallery-item");
    }

    // Create prev button
    let prev = document.createElement("span");
    prev.classList.add("preview-gallery-prev");
    prev.innerHTML = "↩";
    prev.onclick = function() { previewGalleryPrev(gallery); };
    gallery.appendChild(prev);
    
    // Create next button
    let next = document.createElement("span");
    next.classList.add("preview-gallery-next");
    next.innerHTML = "↪";
    next.onclick = function() { previewGalleryNext(gallery); };
    gallery.appendChild(next);
}

function setupAllPreviewGalleries() {
    let galleries = document.querySelectorAll(".preview-gallery");
    for (let gallery of galleries) {
        setupPreviewGallery(gallery);
    }
}

window.addEventListener("load", (event) => { setupAllPreviewGalleries(); });