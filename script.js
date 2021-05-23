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
        lat: 57.985635,
        lng: 56.213289,
      },
    },
  ];
}

function renderPlaces(places) {
  let scene = document.querySelector("a-scene");

  places.forEach((place) => {
    const latitude = place.location.lat;
    const longitude = place.location.lng;

    // add place name
    const placeText = document.createElement("a-link");
    placeText.setAttribute(
      "gps-entity-place",
      `latitude: ${latitude}; longitude: ${longitude};`
    );
    placeText.setAttribute("title", place.name);
    placeText.setAttribute("scale", "15 15 15");

    placeText.addEventListener("loaded", () => {
      window.dispatchEvent(new CustomEvent("gps-entity-place-loaded"));
    });

    const clickListener = function (ev) {
        ev.stopPropagation();
        ev.preventDefault();

        const name = ev.target.getAttribute('name');

        const el = ev.detail.intersection && ev.detail.intersection.object.el;

        if (el && el === ev.target) {
            const label = document.createElement('span');
            const container = document.createElement('div');
            container.setAttribute('id', 'place-label');
            label.innerText = name;
            container.appendChild(label);
            document.body.appendChild(container);

            setTimeout(() => {
                container.parentElement.removeChild(container);
            }, 1500);
        }
    };

    placeText.addEventListener('click', clickListener);


    scene.appendChild(placeText);
  });
}
