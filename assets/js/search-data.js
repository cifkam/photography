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
        },{id: "nav-orthochromasia",
          title: "orthochromasia",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/orthochromasia";
          },
        },{id: "nav-genius-loci",
          title: "genius loci",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/genius-loci";
          },
        },{id: "nav-suburbs",
          title: "suburbs",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/suburbs";
          },
        },{id: "nav-landscape",
          title: "landscape",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/landscape";
          },
        },{id: "nav-still-life-1",
          title: "still life 1",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/still1";
          },
        },{id: "nav-still-life-2",
          title: "still life 2",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/still2";
          },
        },{id: "nav-greenhouse",
          title: "greenhouse",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/greenhouse";
          },
        },{id: "nav-head",
          title: "head",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/head";
          },
        },{id: "nav-my-film-is-not-advancing",
          title: "my film is not advancing",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/my-film-is-not-advancing";
          },
        },{id: "nav-test",
          title: "test",
          description: "",
          section: "Navigation",
          handler: () => {
            window.location.href = "/photography/test";
          },
        },{id: "post-spotlight-gallery",
      
        title: "spotlight gallery",
      
      description: "spotlight gallery test",
      section: "Posts",
      handler: () => {
        
          window.location.href = "/photography/blog/2025/spotlight-gallery/";
        
      },
    },];
