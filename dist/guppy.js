"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const axios_1 = require("axios");
function createInstance(config) {
    /**
     * **************************************************************************
     * Aggregation
     */
    async function getRasterClassification(uuid, body) {
        const url = `${config.url}/rasters/${uuid}/classification`;
        const result = await axios_1.default.post(url, body);
        return result.data.data;
    }
    async function getRasterData(uuid, body) {
        const url = `${config.url}/rasters/${uuid}/data`;
        const result = await axios_1.default.post(url, body);
        return result.data.data;
    }
    async function getRasterLinedata(uuid, body) {
        const url = `${config.url}/rasters/${uuid}/linedata`;
        const result = await axios_1.default.post(url, { ...body });
        return result.data.data;
    }
    async function getRasterStats(uuid, body) {
        const url = `${config.url}/rasters/${uuid}/stats`;
        const result = await axios_1.default.post(url, body);
        return result.data.data;
    }
    async function getRasterQuantiles(uuid, body) {
        const url = `${config.url}/rasters/${uuid}/quantiles`;
        const result = await axios_1.default.post(url, body);
        return result.data.data;
    }
    /**
     * **************************************************************************
     * Categories
     */
    async function getCategories() {
        const result = await axios_1.default.get(`${config.url}/categories`);
        return result.data.data;
    }
    // GET /categories/{categoryId}
    async function getCategory(categoryId) {
        const result = await axios_1.default.get(`${config.url}/categories/${categoryId}`);
        return result.data.data;
    }
    // GET /categories/{categoryId}/rasters
    async function getRastersByCategory(categoryId, options = { limit: 9999 }) {
        const result = await axios_1.default.get(`${config.url}/categories/${categoryId}/rasters`, { params: { limit: options.limit } });
        return result.data.data;
    }
    /**
     * **************************************************************************
     * Rasters
     */
    async function getRasters() {
        const result = await axios_1.default.get(`${config.url}/rasters`);
        return result.data.data;
    }
    // GET /rasters/{rasterId}
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
