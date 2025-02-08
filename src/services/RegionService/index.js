import { ApiService } from "../ApiService";

class RegionService extends ApiService {
  constructor() {
    super();
  }
  async GetAllRegions() {
    const params = { skip: 0, take: 100000 };
    const response = await this.api.get("/api/Region", { params });
    return response["content"];
  }

  async GetAllDestricts() {
    const params = { skip: 0, take: 100000 };
    const response = await this.api.get("/api/District", { params });
    return response["content"];
  }

  async GetDestrictsByRegion(regionId) {
    const params = { skip: 0, take: 100000 };
    const response = await this.api.get(`/api/District/GetByRegion/${regionId}`, { params });
    return response["content"];
  }

  async Update(data) {
    const response = await this.api.put("/api/Region", data);
    return response["content"];
  }

  async Delete(id) {
    const response = await this.api.delete("/api/Region", { params: { id } });
    return response["content"];
  }
}

const regionService = new RegionService();

export { regionService, RegionService };
