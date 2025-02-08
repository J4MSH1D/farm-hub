import { ApiService } from "../ApiService";

class RegionsService extends ApiService {
  constructor() {
    super();
  }
  async GetAll() {
    const response = await this.api.get("/api/Region");
    return response["content"];
  }
}

const regionsService = new RegionsService();

export { regionsService, RegionsService };
