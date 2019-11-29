/**
 * POST /rasters/{rasterId}/classification
 * @function
 * @async
 * @description Get array of classes with their counts or percentages fo the geometry
 * @param {string} uuid - Id of raster
 * @param {Object} body - used body for data
 * @param {string} body.srs - srs / epsg
 * @param {string} body.geometry - geometry (POINT, POLYGON,... )
 * @param {string} body.resolution - native / auto
 * @param {string} body.exclude_nodata - boolean
 * @param {string} body.method - used method
 * @example getRasterClassification("123", body)
 * @returns Promise<RasterClassification>
 * @version 1.0.0
 */

/**
 * POST /rasters/{rasterId}/data
 * @function
 * @async
 * @description Get raw raster data values inside wkt geometry
 * @param {string} uuid - Id of raster
 * @param {Object} body - used body for data
 * @param {string} body.srs - srs / epsg
 * @param {string} body.geometry - geometry (POINT, POLYGON,... )
 * @param {string} body.resolution - native / auto
 * @param {string} body.exclude_nodata - boolean
 * @example getRasterData("123", body)
 * @returns Promise<number[][]>
 * @version 1.0.0
 */

/**
 * POST /rasters/{rasterId}/linedata
 * @function
 * @async
 * @description Get defined number of raw raster data values for a line wkt geometry
 * @param {string} uuid - Id of raster
 * @param {Object} body - used body for data
 * @param {string} body.srs - srs / epsg
 * @param {string} body.geometry - geometry (POINT, POLYGON,... )
 * @param {string} body.resolution - native / auto
 * @param {string} body.exclude_nodata - boolean
 * @param {string} body.datapoints - number, count of datapoints
 * @example getRasterLinedata("123", body)
 * @returns Promise<number[]>
 * @version 1.0.0
 */

/**
 * POST /rasters/{rasterId}/stats
 * @function
 * @async
 * @description Get raster stats for WKT geometry
 * @param {string} uuid - Id of raster
 * @param {Object} body - used body for data
 * @param {string} body.srs - srs / epsg
 * @param {string} body.geometry - geometry (POINT, POLYGON,... )
 * @param {string} body.resolution - native / auto
 * @param {string} body.exclude_nodata - boolean
 * @example getRasterStats("123", body)
 * @returns Promise<RasterStats>
 * @version 1.0.0
 */
