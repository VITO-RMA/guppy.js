/**
 * GET /categories
 * @function
 * @async
 * @description Get array of all the categories available
 * @example getCategories()
 * @returns Promise<Raster[]>
 * @version 1.0.0
 */

/**
 * GET /categories/{categoryId}
 * @function
 * @async
 * @description get one category with uuid and name
 * @param {string} categoryId - Id of the category
 * @example getRasterData("123")
 * @returns Promise<Raster>
 * @version 1.0.0
 */

/**
 * GET /categories/{categoryId}/rasters
 * @function
 * @async
 * @description Get all rasters corresponding to the category
 * @param {string} categoryId - Id of the category
 * @param {Object} options - extra options like limit
 * @param {string} options.limit - number, limit the count
 * @example getRasterLinedata("123", { limit: 9999 })
 * @returns Promise<Raster[]>
 * @version 1.0.0
 */
