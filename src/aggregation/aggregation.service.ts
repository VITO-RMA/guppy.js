import axios from "axios";
import {
  RasterBody,
  RasterClassification,
  RasterClassificationBody,
  RasterLinedataBody,
  RasterStats,
  Config,
} from "../interfaces/_interfaces";
/**
 *  @ignore
 * @param config
 *
 */

export default function aggregationInit(config: Config) {
  async function getRasterClassification(
    uuid: string,
    body: RasterClassificationBody,
  ): Promise<RasterClassification> {
    const url = `${config.baseUrl}/api/rasters/${uuid}/classification`;
    const result = await axios.post(url, body);
    return result.data.data;
  }

  async function getRasterData(
    uuid: string,
    body: RasterBody,
  ): Promise<number[][]> {
    const url = `${config.baseUrl}/api/rasters/${uuid}/data`;
    const result = await axios.post(url, body);
    return result.data.data;
  }

  async function getRasterLinedata(
    uuid: string,
    body: RasterLinedataBody,
  ): Promise<number[]> {
    const url = `${config.baseUrl}/api/rasters/${uuid}/linedata`;
    const result = await axios.post(url, { ...body });
    return result.data.data;
  }

  async function getRasterStats(
    uuid: string,
    body: RasterBody,
  ): Promise<RasterStats> {
    const url = `${config.baseUrl}/api/rasters/${uuid}/stats`;
    const result = await axios.post(url, body);
    return result.data.data;
  }

  return {
    getRasterClassification,
    getRasterData,
    getRasterLinedata,
    getRasterStats,
  };
}
