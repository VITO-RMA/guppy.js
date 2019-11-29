import axios from "axios";
import { Raster, Config } from "../interfaces/_interfaces";

export default function categoriesInit(config: Config) {
  // GET /categories
  async function getCategories(): Promise<Raster[]> {
    const result = await axios.get(`${config.baseUrl}/api/categories`);
    return result.data.data;
  }

  // GET /categories/{categoryId}
  async function getCategory(categoryId: string): Promise<Raster> {
    const result = await axios.get(
      `${config.baseUrl}/api/categories/${categoryId}`,
    );
    return result.data.data;
  }

  // GET /categories/{categoryId}/rasters
  async function getRastersByCategory(
    categoryId: string,
    options = { limit: 9999 },
  ): Promise<Raster[]> {
    const result = await axios.get(
      `${config.baseUrl}/api/categories/${categoryId}/rasters`,
      { params: { limit: options.limit } },
    );
    return result.data.data;
  }

  return {
    getCategories,
    getCategory,
    getRastersByCategory,
  };
}
