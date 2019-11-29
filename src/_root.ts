import aggregationInit from "./aggregation/aggregation.service";
import categoriesInit from "./categories/categories.service";
import quantilesInit from "./quantiles/quantiles.service";
import rastersInit from "./rasters/rasters.service";
import { Config } from "./interfaces/_interfaces";

export function createInstance(config: Config) {
  return {
    ...aggregationInit(config),
    ...categoriesInit(config),
    ...quantilesInit(config),
    ...rastersInit(config),
  };
}

// const config = {
//   url: "https://guppy.server.cool",
// };
// const instance = createInstance(config);
