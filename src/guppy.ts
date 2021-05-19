import axios from 'axios';

export interface Config {
  url: string;
}

export interface Category {
  name: string;
  description: string;
  createdOn: Date;
  createdBy: string;
  updatedOn: Date;
  updatedBy: string;
}

export interface Raster {
  uuid: string; // example: atmosys-ifdm_2015ref_industrie_kgn-v1
  name: string; // example: ifdm_2015ref_industrie_kgn
  description: string;
  metadataUrl: string; // Who supplied the raster?
  globalMin: number | null;
  globalMax: number | null;
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

export interface RasterDataResult {
  data: number[][] | number[];
  meta: { type: string };
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

/**
 * Returns a guppy instance with your config enclosed
 * @param config
 * @param config.url - Absolute url to Guppy api. E.g. https://guppy.server.be/api
 * @returns Guppy instance with guppy operations available
 */
export function createInstance(config: Config) {
  /**
   * **************************************************************************
   * Aggregation
   */

  /**
   * Get array of classes with their counts or percentages fo the geometry.
   * @param uuid - Id of raster
   * @param body
   */
  async function getRasterClassification(uuid: string, body: RasterClassificationBody): Promise<RasterClassification> {
    const url = `${config.url}/rasters/${uuid}/classification`;
    const result = await axios.post(url, body);
    return result.data.data;
  }

  /**
   * Get raw raster data values inside wkt geometry
   * @param uuid - Id of raster
   * @param body
   */
  async function getRasterData(uuid: string, body: RasterBody) {
    const url = `${config.url}/rasters/${uuid}/data`;
    const result = await axios.post<RasterDataResult>(url, body);
    if (result.status === 200) return result.data.data;
  }

  /**
   * Get defined number of raw raster data values for a line wkt geometry
   * @param uuid - Id of raster
   * @param body
   */
  async function getRasterLinedata(uuid: string, body: RasterLinedataBody): Promise<number[]> {
    const url = `${config.url}/rasters/${uuid}/linedata`;
    const result = await axios.post(url, { ...body });
    return result.data.data;
  }

  /**
   * Get raster stats for WKT geometry
   * @param uuid - Id of raster
   * @param body
   */
  async function getRasterStats(uuid: string, body: RasterBody): Promise<RasterStats> {
    const url = `${config.url}/rasters/${uuid}/stats`;
    const result = await axios.post(url, body);
    return result.data.data;
  }

  /**
   * Get raster quantiles for WKT geometry
   * @param uuid - Id of raster
   * @param body
   */
  async function getRasterQuantiles(uuid: string, body: RasterQuantilesBody): Promise<RasterQuantiles[]> {
    const url = `${config.url}/rasters/${uuid}/quantiles`;
    const result = await axios.post(url, body);
    return result.data.data;
  }

  /**
   * **************************************************************************
   * Categories
   */

  /**
   * Get categories known by Guppy api
   */
  async function getCategories(options = { offset: 0, limit: 9999 }): Promise<Category[]> {
    const result = await axios.get(`${config.url}/categories`, {
      params: {
        offset: options.offset,
        limit: options.limit,
      },
    });

    return result.data.data;
  }

  /**
   * Get category details
   * @param categoryId
   */
  async function getCategory(categoryId: string): Promise<Category> {
    const result = await axios.get(`${config.url}/categories/${categoryId}`);
    return result.data.data;
  }

  /**
   * Get rasters by category
   * @param categoryName
   * @param options
   */
  async function getRastersByCategory(categoryName: string, options = { limit: 9999 }): Promise<Raster[]> {
    const result = await axios.get(`${config.url}/categories/${categoryName}/rasters`, {
      params: { limit: options.limit },
    });
    return result.data.data;
  }

  /**
   * **************************************************************************
   * Rasters
   */

  /**
   * Get rasters known by Guppy api
   */
  async function getRasters(): Promise<Raster[]> {
    const result = await axios.get(`${config.url}/rasters`);
    return result.data.data;
  }

  /**
   * Get raster details
   * @param uuid
   */
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
