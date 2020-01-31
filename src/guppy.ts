import axios from 'axios';

export interface Config {
  url: string;
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
  resolution: 'native' | 'auto';
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

export function createInstance(config: Config) {
  /**
   * **************************************************************************
   * Aggregation
   */
  async function getRasterClassification(
    uuid: string,
    body: RasterClassificationBody
  ): Promise<RasterClassification> {
    const url = `${config.url}/rasters/${uuid}/classification`;
    const result = await axios.post(url, body);
    return result.data.data;
  }

  async function getRasterData(
    uuid: string,
    body: RasterBody
  ): Promise<number[][]> {
    const url = `${config.url}/rasters/${uuid}/data`;
    const result = await axios.post(url, body);
    return result.data.data;
  }

  async function getRasterLinedata(
    uuid: string,
    body: RasterLinedataBody
  ): Promise<number[]> {
    const url = `${config.url}/rasters/${uuid}/linedata`;
    const result = await axios.post(url, { ...body });
    return result.data.data;
  }

  async function getRasterStats(
    uuid: string,
    body: RasterBody
  ): Promise<RasterStats> {
    const url = `${config.url}/rasters/${uuid}/stats`;
    const result = await axios.post(url, body);
    return result.data.data;
  }

  async function getRasterQuantiles(
    uuid: string,
    body: RasterQuantilesBody
  ): Promise<RasterQuantiles> {
    const url = `${config.url}/rasters/${uuid}/quantiles`;
    const result = await axios.post(url, body);
    return result.data.data;
  }
  /**
   * **************************************************************************
   * Categories
   */
  async function getCategories(): Promise<Raster[]> {
    const result = await axios.get(`${config.url}/categories`);
    return result.data.data;
  }

  // GET /categories/{categoryId}
  async function getCategory(categoryId: string): Promise<Raster> {
    const result = await axios.get(`${config.url}/categories/${categoryId}`);
    return result.data.data;
  }

  // GET /categories/{categoryId}/rasters
  async function getRastersByCategory(
    categoryId: string,
    options = { limit: 9999 }
  ): Promise<Raster[]> {
    const result = await axios.get(
      `${config.url}/categories/${categoryId}/rasters`,
      { params: { limit: options.limit } }
    );
    return result.data.data;
  }

  /**
   * **************************************************************************
   * Rasters
   */
  async function getRasters(): Promise<Raster[]> {
    const result = await axios.get(`${config.url}/rasters`);
    return result.data.data;
  }
  // GET /rasters/{rasterId}
  async function getRaster(uuid: string): Promise<Raster> {
    const result = await axios.get(`${config.url}/rasters/${uuid}`);
    return result.data.data;
  }

  return {
    // aggregation
    getRasterClassification,
    getRasterData,
    getRasterLinedata,
    getRasterStats,
    getRasters,

    // categories
    getCategories,
    getCategory,
    getRastersByCategory,

    // rasters
    getRaster,
    getRasterQuantiles,
  };
}
