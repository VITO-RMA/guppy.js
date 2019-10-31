import axios from "axios";
import { Raster } from "../interfaces/interfaces";

// GET /rasters
export async function getRasters(): Promise<Raster[]> {
  const result = await axios.get(`${API_BASE_URL}/rasters`);
  return result.data.data;
}
// GET /rasters/{rasterId}
export async function getRaster(uuid: string): Promise<Raster> {
  const result = await axios.get(`${API_BASE_URL}/rasters/${uuid}`);
  return result.data.data;
}
