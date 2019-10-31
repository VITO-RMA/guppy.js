export interface Init {
  baseUrl: string;
  env: string;
}

export interface Raster {
  uuid: string; // example: atmosys-ifdm_2015ref_industrie_kgn-v1
  name: string; // example: ifdm_2015ref_industrie_kgn
  description: string;
  metadataUrl: string; // Who supplied the raster?
  createdOn: Date;
  createdBy: string;
  updatedOn: Date;
  updatedBy: string;
  boundingBoxNative: string; // WKT string of the bounding box excluding NODATA values
  boundingBox4326: string; // ESPG:4326 version of the WKT string of the bounding box excluding NODATA values
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
  srs: string; // example: EPSG:4326
  geometry: string; // example: Polygon ((4.508 51.301,4.508 51.401, 4.608 51.401, 4.608 51.301,4.508 51.301))
  resolution: "native" | "auto";
}

export interface RasterClassification {
  value: string;
  count: number;
}

export interface RasterClassificationBody extends RasterBody {
  method: string; // example "polygon_intersection"
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
