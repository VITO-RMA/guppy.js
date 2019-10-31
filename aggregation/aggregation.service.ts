import axios from "axios";
import {
  RasterBody,
  RasterClassification,
  RasterClassificationBody,
  RasterLinedataBody,
  RasterStats,
} from "../interfaces/interfaces";

// POST /rasters/{rasterId}/classification
export async function getRasterClassification(
  uuid: string,
  body: RasterClassificationBody,
): Promise<RasterClassification[]> {
  const url = `${API_BASE_URL}/rasters/${uuid}/classification`;
  const result = await axios.post(url, body);
  return result.data.data;
}

// POST /rasters/{rasterId}/data
export async function getRasterData(
  uuid: string,
  body: RasterBody,
): Promise<number[][]> {
  const url = `${API_BASE_URL}/rasters/${uuid}/data`;
  const result = await axios.post(url, body);
  return result.data.data;
}
// POST /rasters/{rasterId}/linedata
export async function getRasterLinedata(
  uuid: string,
  body: RasterLinedataBody,
): Promise<number[]> {
  const url = `${API_BASE_URL}/rasters/${uuid}/linedata`;
  const result = await axios.post(url, { ...body });
  return result.data.data;
}

// POST /rasters/{rasterId}/stats
export async function getRasterStats(
  uuid: string,
  body: RasterBody,
): Promise<RasterStats> {
  const url = `${API_BASE_URL}/rasters/${uuid}/stats`;
  const result = await axios.post(url, body);
  return result.data.data;
}
