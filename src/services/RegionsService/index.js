import { ApiService } from "../ApiService";

class RegionsService extends ApiService {
  constructor() {
    super();
  }

  async GetAll() {
    const response = await this.api.get("/api/Region");
    return response["content"];
  }

  async GetAllDistricts() {
    const response = await this.api.get("/api/District/GetAll");
    return response["content"];
  }

  async GetByRegion(regionId) {
    const response = await this.api.get("/api/District/GetByRegion", { params: { regionId } });
    return response["content"];
  }
}

const regionsService = new RegionsService();

export { regionsService, RegionsService };
