import axios from "axios";
import { Raster } from "../interfaces/interfaces";

// GET /categories
export async function getCategories(): Promise<Raster[]> {
  const result = await axios.get(`${API_BASE_URL}/categories`);
  return result.data.data;
}
// GET /categories/{categoryId}
export async function getCategory(categoryId: string): Promise<Raster> {
  const result = await axios.get(`${API_BASE_URL}/categories/${categoryId}`);
  return result.data.data;
}

// GET /categories/{categoryId}/rasters
export async function getRastersByCategory(
  categoryId: string,
  options = { limit: 9999 },
): Promise<Raster[]> {
  const result = await axios.get(
    `${API_BASE_URL}/categories/${categoryId}/rasters`,
    { params: { limit: options.limit } },
  );
  return result.data.data;
}
