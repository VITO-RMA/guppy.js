import { Init } from "../interfaces/interfaces";

// Initialize service with config
export async function init(initObject: Init) {
  return {
    baseUrl: initObject.baseUrl,
    environment: initObject.env,
  };
}
