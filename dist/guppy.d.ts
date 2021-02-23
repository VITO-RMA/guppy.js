export interface Config {
    url: string;
}
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
export interface RasterDataResult {
    data: number[][] | number[];
    meta: {
        type: string;
    };
}
export interface RasterDataError {
    message: string;
}
export interface RasterClassification {
    value: string;
    count: number;
}
export interface RasterClassificationBody extends RasterBody {
    method: string;
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
export declare function createInstance(config: Config): {
    getRasterClassification: (uuid: string, body: RasterClassificationBody) => Promise<RasterClassification>;
    getRasterData: (uuid: string, body: RasterBody) => Promise<number[][]>;
    getRasterLinedata: (uuid: string, body: RasterLinedataBody) => Promise<number[]>;
    getRasterStats: (uuid: string, body: RasterBody) => Promise<RasterStats>;
    getRasters: () => Promise<Raster[]>;
    getCategories: () => Promise<Raster[]>;
    getCategory: (categoryId: string) => Promise<Raster>;
    getRastersByCategory: (categoryId: string, options?: {
        limit: number;
    }) => Promise<Raster[]>;
    getRaster: (uuid: string) => Promise<Raster>;
    getRasterQuantiles: (uuid: string, body: RasterQuantilesBody) => Promise<RasterQuantiles[]>;
};
