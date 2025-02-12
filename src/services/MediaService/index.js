import { ApiService } from "../ApiService";

class MediaService extends ApiService {
  constructor() {
    super();
  }
  async GetAll() {
    const params = { skip: 0, take: 300 };
    const response = await this.api.get("/News/GetAll", { params });
    return response["content"];
  }

  async GetById(id) {
    const response = await this.api.get("/News/GetById", { params: { id } });
    return response["content"];
  }

  async Create(data) {
    const response = await this.api.post("/News/Create", data);
    return response["content"];
  }

  async Update(data) {
    const response = await this.api.put("/News/Update", data);
    return response["content"];
  }

  async Delete(id) {
    const response = await this.api.delete("/News/Delete", { params: { id } });
    return response["content"];
  }
}

const mediaService = new MediaService();

export { mediaService, MediaService };
