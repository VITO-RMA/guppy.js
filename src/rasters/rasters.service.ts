import axios from "axios";
import { Raster, Config } from "../interfaces/_interfaces";

export default function rastersInit(config: Config) {
  // GET /rasters
  async function getRasters(): Promise<Raster[]> {
    const result = await axios.get(`${config.baseUrl}/api/rasters`);
    return result.data.data;
  }
  // GET /rasters/{rasterId}
  async function getRaster(uuid: string): Promise<Raster> {
    const result = await axios.get(`${config.baseUrl}/api/rasters/${uuid}`);
    return result.data.data;
  }
  return {
    getRasters,
    getRaster,
  };
}
