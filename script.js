window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
    {
      minPrice: 41000000,
      lat: 57.987895,
      lng: 56.212851,
    },
    {
      minPrice: 41000000,
      lat: 57.987757,
      lng: 56.213606,
    },
    {
      minPrice: 41000000,
      lat: 57.987705,
      lng: 56.211306,
    },
    {
      minPrice: 9850000,
      lat: 55.7773069292,
      lng: 37.6308578812,
    },
    {
      minPrice: 17000000,
      lat: 55.7767449226,
      lng: 37.6311369985,
    },
    {
      minPrice: 14400000,
      lat: 55.7775299717,
      lng: 37.617589999,
    },
    {
      minPrice: 12500000,
      lat: 55.7778229192,
      lng: 37.6165658981,
    },
    {
      minPrice: 100000000,
      lat: 55.7774539478,
      lng: 37.6161709428,
    },
    {
      minPrice: 33500000,
      lat: 55.7765319385,
      lng: 37.6144729368,
    },
    {
      minPrice: 25000000,
      lat: 55.7779099233,
      lng: 37.6138979383,
    },
    {
      minPrice: 15251000.000000002,
      lat: 55.7761679962,
      lng: 37.6391769201,
    },
    {
      minPrice: 55000000,
      lat: 55.7768059429,
      lng: 37.6398868673,
    },
    {
      minPrice: 155000000,
      lat: 55.7771599945,
      lng: 37.6097299531,
    },
    {
      minPrice: 33000000,
      lat: 55.7778689358,
      lng: 37.6091009751,
    },
    {
      minPrice: 58000000,
      lat: 55.7768259756,
      lng: 37.6083648764,
    },
    {
      minPrice: 12350000.000000002,
      lat: 55.7764509693,
      lng: 37.6442519948,
    },
    {
      minPrice: 34000000,
      lat: 55.7767909393,
      lng: 37.6060109027,
    },
    {
      minPrice: 16854893.999999996,
      lat: 55.776602095,
      lng: 37.6465560123,
    },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector("a-scene");

  places.forEach((place) => {
    const latitude = place.lat;
    const longitude = place.lng;

    // add place icon
    const icon = document.createElement("a-image");
    icon.setAttribute(
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude}`
    );
    icon.setAttribute("name", place.minPrice);
    icon.setAttribute("src", "./assets/pin.svg");
    icon.setAttribute("width", "5");
    icon.setAttribute("height", "5");


    // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...

    icon.addEventListener("loaded", () =>
      window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"))
    );
    
    // const clickListener = function (ev) {
    //   ev.stopPropagation();
    //   ev.preventDefault();

    //   const name = ev.target.getAttribute("name");

    //   const el = ev.detail.intersection && ev.detail.intersection.object.el;

    //   if (el && el === ev.target) {
    //     const label = document.createElement("span");
    //     const container = document.createElement("div");
    //     container.setAttribute("id", "place-label");
    //     label.innerText = name;
    //     container.appendChild(label);
    //     document.body.appendChild(container);

    //     setTimeout(() => {
    //       container.parentElement.removeChild(container);
    //     }, 1500);
    //   }
    // };

    // icon.addEventListener("click", clickListener);

    scene.appendChild(icon);
  });
}
