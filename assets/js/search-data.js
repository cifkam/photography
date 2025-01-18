// get the ninja-keys element
const ninja = document.querySelector('ninja-keys');

// add the home and posts menu items
ninja.data = [{
    id: "nav-photography",
    title: "photography",
    section: "Navigation",
    handler: () => {
      window.location.href = "/photography/";
    },
  },{id: "nav-home",
          title: "↩ home",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/home";
          },
        },{id: "nav-photography",
          title: "photography",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/";
          },
        },{id: "nav-subjective-landscape",
          title: "subjective landscape",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/subjective-landscape";
          },
        },{id: "nav-geometry",
          title: "geometry",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/geometry";
          },
        },{id: "post-spotlight-gallery",
      
        title: "spotlight gallery",
      
      description: "spotlight gallery test",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/photography/blog/2025/spotlight-gallery/";
        
      },
    },];
