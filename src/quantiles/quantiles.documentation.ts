/**
 * POST /quantiles/${rasterId}/quantiles
 * @function
 * @async
 * @description Get raster quantile for WKT geometry
 * @param {string} uuid - Id of raster
 * @param {Object} body - used body for data
 * @param {string} body.srs - srs / epsg
 * @param {string} body.geometry - geometry (POINT, POLYGON,... )
 * @param {string} body.resolution - native / auto
 * @param {string} body.exclude_nodata - boolean
 * @param {string} body.quantiles - array of all the quantiles
 * @example getRasterQuantiles("123", body)
 * @returns Promise<RasterQuantiles>
 * @version 1.0.0
 */
