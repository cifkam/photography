function previewGalleryNext(gallery) {
    let es = gallery.querySelectorAll(".preview-gallery-item");
    var index = -1;
    for (var i = 0; i < es.length; ++i) {
        if (es[i].classList.contains("visible")) {
            index = i;
            break;
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
    let href = gallery.getAttribute("href");
    if (href !== null) {
        for (let element of Array.from(gallery.children)) {
            element.remove();
            let a = document.createElement("a");
            a.href = href;        
            a.appendChild(element);
            gallery.appendChild(a);
        }
    }

    gallery.removeAttribute("href");
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


function setupPreviewGalleryGalleryV2(id, href, images, width, height) {
    let g = document.getElementById(id);
    g.classList.add("preview-gallery");
    g.innerHTML = "";
    g.style.width = width;
    g.style.height = height;

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
    prev.onclick = function() {
        g.index = Math.max(0, g.index - 1);
        image.style.backgroundImage = "url('" + g.images[g.index] + "')";
    };
    g.appendChild(prev);
    
    // Create next button
    let next = document.createElement("span");
    next.classList.add("preview-gallery-next");
    next.innerHTML = "↪";
    next.onclick = function() {
        g.index = Math.min(g.images.length-1, g.index + 1);
        image.style.backgroundImage = "url('" + g.images[g.index] + "')";
    };
    g.appendChild(next);

}