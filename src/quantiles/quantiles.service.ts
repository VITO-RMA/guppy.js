import axios from "axios";
import {
  RasterQuantiles,
  RasterQuantilesBody,
  Config,
} from "../interfaces/_interfaces";

export default function quantilesInit(config: Config) {
  async function getRasterQuantiles(
    uuid: string,
    body: RasterQuantilesBody,
  ): Promise<RasterQuantiles> {
    const url = `${config.baseUrl}/api/rasters/${uuid}/quantiles`;
    const result = await axios.post(url, body);
    return result.data.data;
  }
  return { getRasterQuantiles };
}
