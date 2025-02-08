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

  async GetByRegion(id) {
    const response = await this.api.get("/api/District/GetByRegion", { params: { id } });
    return response["content"];
  }
}

const regionsService = new RegionsService();

export { regionsService, RegionsService };
