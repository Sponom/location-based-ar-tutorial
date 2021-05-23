window.onload = () => {
  let places = staticLoadPlaces();
  renderPlaces(places);
};

function staticLoadPlaces() {
  return [
    {
      name: "Magnemite",
      location: {
        lat: 57.988323,
        lng: 56.213772,
      },
    },
    {
      name: "5ka",
      location: {
        lat: 57.987346,
        lng: 56.214411,
      },
    },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector("a-scene");

  places.forEach((place) => {
    let latitude = place.location.lat;
    let longitude = place.location.lng;
    let title = place.name;

    let text = document.createElement("a-link");

    text.setAttribute("title", title);
    text.setAttribute("look-at", "[gps-camera]");
    text.setAttribute("scale", "15 15 15");
    text.setAttribute(
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );
    text.addEventListener("loaded", () => {
      window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    });
    scene.appendChild(text);
  });
}
