import { ApiService } from "../ApiService";

class LangService extends ApiService {
  constructor() {
    super();
  }
  async GetAll() {
    const params = { skip: 0, take: 100000 };
    const response = await this.api.get("/api/Translation/GetAll", { params });
    return response["content"];
  }

  async Update(data) {
    const response = await this.api.put("/api/Translation/Update", data);
    return response["content"];
  }
}

const langService = new LangService();

export { langService, LangService };
