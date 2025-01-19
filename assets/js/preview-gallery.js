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
    } else if (index < es.length-1) {
        es[index].classList.remove("visible");
        es[index+1].classList.add("visible");
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
    } else if (index > 0) {
        es[index].classList.remove("visible");
        es[index-1].classList.add("visible");
    }
}

function setupPreviewGallery(gallery) {
    //append the prev and next buttons to children of `el`
    let prev = document.createElement("span");
    prev.classList.add("preview-gallery-prev");
    prev.innerHTML = "↩";
    prev.onclick = function() { previewGalleryPrev(gallery); };
    gallery.appendChild(prev);
    
    let next = document.createElement("span");
    next.classList.add("preview-gallery-next");
    next.innerHTML = "↪";
    next.onclick = function() { previewGalleryNext(gallery); };
    gallery.appendChild(next);
}