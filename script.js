window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
    {
      name: "shop",
      location: {
        lat: 57.985756,
        lng: 56.216322,
      },
    },
    {
      name: "another shop",
      location: {
        lat: 57.984935,
        lng: 56.210375,
      },
    },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector("a-scene");

  places.forEach((place) => {
    const latitude = place.location.lat;
    const longitude = place.location.lng;

    // add place icon
    const icon = document.createElement('a-image');
    icon.setAttribute('gps-entity-place', `latitude: ${latitude}; longitude: ${longitude}`);
    icon.setAttribute('name', place.name);
    icon.setAttribute('src', './assets/map-marker.png');

    // for debug purposes, just show in a bigger scale, otherwise I have to personally go on places...
    icon.setAttribute('scale', '20, 20');

    icon.addEventListener('loaded', () => window.dispatchEvent(new CustomEvent('gps-entity-place-loaded')));

    scene.appendChild(icon);
  });
}
