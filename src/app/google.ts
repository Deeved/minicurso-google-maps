/// <reference types="@types/google.maps" />

interface MapSettings {
  element: HTMLDivElement;
  map: google.maps.Map | undefined;
  initialSettings: Record<string, any>;
}

const instances: Map<string, MapSettings> = new Map();

export function createMapInstance(
  alias: string,
  id: string,
  settings: Record<string, any> = {},
  width: string | number = "100%",
  height: string | number = "100%"
): Promise<MapSettings> {
  return new Promise((resolve, reject) => {
    const googleMaps = (window as any).google;
    if (!googleMaps) {
      reject({ msg: "Google Maps is not loaded" });
      return;
    }

    const elementWrapper = document.getElementById(id);

    if (!elementWrapper) {
      reject({ msg: "Element wrapper not found" });
      return;
    }

    elementWrapper.innerHTML = "";

    const element = document.createElement("div");
    element.style.width = typeof width === "string" ? width : width + "px";
    element.style.height = typeof height === "string" ? height : height + "px";

    const existingInstance = instances.get(alias);
    if (existingInstance) {
      elementWrapper.appendChild(existingInstance.element);
      resolve(existingInstance);
      return;
    }

    const map = new google.maps.Map(element, {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
      ...settings,
    });

    const newInstance: MapSettings = {
      element,
      map,
      initialSettings: settings,
    };

    instances.set(alias, newInstance);
    elementWrapper.appendChild(newInstance.element);
    resolve(newInstance);
  });
}
