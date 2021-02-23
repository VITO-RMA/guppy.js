"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
/**
 * Returns a guppy instance with your config enclosed
 * @param config
 * @param config.url - Absolute url to Guppy api. E.g. https://guppy.server.be/api
 * @returns Guppy instance with guppy operations available
 */
function createInstance(config) {
    /**
     * **************************************************************************
     * Aggregation
     */
    /**
     * Get array of classes with their counts or percentages fo the geometry.
     * @param uuid - Id of raster
     * @param body
     */
    async function getRasterClassification(uuid, body) {
        const url = `${config.url}/rasters/${uuid}/classification`;
        const result = await axios_1.default.post(url, body);
        return result.data.data;
    }
    /**
     * Get raw raster data values inside wkt geometry
     * @param uuid - Id of raster
     * @param body
     */
    async function getRasterData(uuid, body) {
        const url = `${config.url}/rasters/${uuid}/data`;
        const result = await axios_1.default.post(url, body);
        if (result.status === 200)
            return result.data.data;
    }
    /**
     * Get defined number of raw raster data values for a line wkt geometry
     * @param uuid - Id of raster
     * @param body
     */
    async function getRasterLinedata(uuid, body) {
        const url = `${config.url}/rasters/${uuid}/linedata`;
        const result = await axios_1.default.post(url, { ...body });
        return result.data.data;
    }
    /**
     * Get raster stats for WKT geometry
     * @param uuid - Id of raster
     * @param body
     */
    async function getRasterStats(uuid, body) {
        const url = `${config.url}/rasters/${uuid}/stats`;
        const result = await axios_1.default.post(url, body);
        return result.data.data;
    }
    /**
     * Get raster quantiles for WKT geometry
     * @param uuid - Id of raster
     * @param body
     */
    async function getRasterQuantiles(uuid, body) {
        const url = `${config.url}/rasters/${uuid}/quantiles`;
        const result = await axios_1.default.post(url, body);
        return result.data.data;
    }
    /**
     * **************************************************************************
     * Categories
     */
    /**
     * Get categories known by Guppy api
     */
    async function getCategories() {
        const result = await axios_1.default.get(`${config.url}/categories`);
        return result.data.data;
    }
    /**
     * Get category details
     * @param categoryId
     */
    async function getCategory(categoryId) {
        const result = await axios_1.default.get(`${config.url}/categories/${categoryId}`);
        return result.data.data;
    }
    /**
     * Get rasters by category
     * @param categoryId
     * @param options
     */
    async function getRastersByCategory(categoryId, options = { limit: 9999 }) {
        const result = await axios_1.default.get(`${config.url}/categories/${categoryId}/rasters`, { params: { limit: options.limit } });
        return result.data.data;
    }
    /**
     * **************************************************************************
     * Rasters
     */
    /**
     * Get rasters known by Guppy api
     */
    async function getRasters() {
        const result = await axios_1.default.get(`${config.url}/rasters`);
        return result.data.data;
    }
    /**
     * Get raster details
     * @param uuid
     */
    async function getRaster(uuid) {
        const result = await axios_1.default.get(`${config.url}/rasters/${uuid}`);
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
exports.createInstance = createInstance;
