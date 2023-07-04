/// <reference types="@types/google.maps" />
interface Settings {
  [x: string]: any;
}

export interface Marker<T = {}> extends google.maps.Marker {
  item?: T;
}

interface MapSettings {
  element: HTMLDivElement;
  map: any;
  initialSettings: Settings;
}

export interface MapSettingsPromise extends MapSettings {
  maps: any;
}

const instances: Map<string, MapSettings> = new Map();

export function MapInstance(
  alias: string,
  id: string,
  settings: Settings = {},
  width: number | string = "100%",
  height: number | string = "100%"
): Promise<MapSettingsPromise> {
  return new Promise((resolve, reject) => {
    if ((window as any).google) {
      const elementWrapper = document.getElementById(id);
      if (elementWrapper) {
        elementWrapper.childNodes.forEach((item) => item.remove());
        const element: HTMLDivElement = document.createElement("div");
        if (element.hasAttribute("style")) {
          element.style.width = `${
            typeof width === "string" ? width : width + "px"
          }`;
          element.style.height = `${
            typeof height === "string" ? height : height + "px"
          }`;
        } else {
          element.setAttribute(
            "style",
            `width: ${
              typeof width === "string" ? width : width + "px"
            };height: ${typeof height === "string" ? height : height + "px"};`
          );
        }
        const instance: MapSettings | undefined = instances.get(alias);
        if (instance) {
          console.log("já existe");

          elementWrapper.append(instance.element);
          (instance as MapSettingsPromise).maps = (window as any).google.maps;
          resolve(instance as MapSettingsPromise);
        } else {
          const map = new (window as any).google.maps.Map(element, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
            ...settings,
          });
          elementWrapper.append(element);
          instances.set(alias, {
            element,
            map,
            initialSettings: settings,
          });

          const instanceMapSettings: MapSettings | undefined =
            instances.get(alias);
          if (instanceMapSettings) {
            (instanceMapSettings as MapSettingsPromise).maps = (
              window as any
            ).google.maps;
            resolve(instanceMapSettings as MapSettingsPromise);
          }
        }
      } else {
        reject({ msg: "Element wrapper is not found" });
      }
    }
  });
}
