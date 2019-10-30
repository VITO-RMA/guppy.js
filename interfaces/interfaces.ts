export interface Raster {
  uuid: string;
  name: string;
  description: string;
  metadataUrl: string;
  createdOn: Date;
  createdBy: string;
  updatedOn: Date;
  updatedBy: string;
  boundingBoxNative: string;
  boundingBox4326: string;
}

export interface RasterStats {
  count: number;
  sum: number;
  mean: number;
  stddev: number;
  min: number;
  max: number;
}

export interface RasterBody {
  srs: string;
  geometry: string;
  resolution: "native" | "auto";
}

export interface RasterLinedataBody extends RasterBody {
  datapoints: number;
}

export interface RasterQuantilesBody extends RasterBody {
  quantiles: number[];
}

export interface RasterQuantiles {
  quantile: number;
  value: number;
}
