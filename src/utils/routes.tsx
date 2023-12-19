import { toUrlFormat } from "./utils";

export const urls = {
  home: "/",
  category: "/albums",
  item: "/album",
};

export interface Route {
  [key: string]: {
    url: string;
    text: string;
  };
}

export const routes: Route[] = [
  {
    home: {
      url: urls.home,
      text: "Inicio",
    },
  },
  {
    store: {
      url: urls.category,
      text: "Tienda",
    },
  },
  {
    soulEdgeBlade: {
      url: urls.category + "/" + toUrlFormat("Soul Edge / Blade"),
      text: "Soul Edge / Blade",
    },
  },
  {
    soulCalibur: {
      url: urls.category + "/" + toUrlFormat("Soulcalibur"),
      text: "Soulcalibur",
    },
  },
  {
    soulCaliburII: {
      url: urls.category + "/" + toUrlFormat("Soulcalibur II"),
      text: "Soulcalibur II",
    },
  },
];

// const toRoutesApp = (): Record<string, string> => {
//   return routes.reduce((acc, route) => {
//     const key = Object.keys(route)[0];
//     const value = route[key].url;
//     acc[key] = value;
//     return acc;
//   }, {} as Record<string, string>);
// };

// export const routesApp = toRoutesApp();
