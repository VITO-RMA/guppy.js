import axios from "axios";
import { RasterQuantiles, RasterQuantilesBody } from "../interfaces/interfaces";

// POST /rasters/{rasterId}/quantiles
export async function getRasterQuantiles(
  uuid: string,
  body: RasterQuantilesBody,
): Promise<RasterQuantiles> {
  const url = `${API_BASE_URL}/rasters/${uuid}/quantiles`;
  const result = await axios.post(url, body);
  return result.data.data;
}
