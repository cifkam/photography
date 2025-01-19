
function previewGalleryNext(x) {
    let es = x.parentElement.querySelectorAll(".preview-gallery-item");
    var index = -1;
    for (var i=0; i<es.length; ++i) {
      if (es[i].classList.contains("visible")) {
          index = i; break;
        }
    }
    
    if (index === -1) {
        es[0].classList.add("visible")
    } else {
        es[index].remove("visible");
        es[Math.min(index+1, es.length)].add("visible");
    }
  }


function previewGalleryPrev(x) {
    let es = x.parentElement.querySelectorAll(".preview-gallery-item");
    var index = -1;
    for (var i=0; i<es.length; ++i) {
      if (es[i].classList.contains("visible")) {
          index = i; break;
        }
    }
    
    if (index === -1) {
        es[es.length-1].classList.add("visible")
    } else {
        es[index].remove("visible");
        es[Math.max(index-1, 0)].add("visible");
    }
  }