import { ApiService } from "../ApiService";

class OrderService extends ApiService {
  constructor() {
    super();
  }
  async GetAll() {
    const params = { skip: 0, take: 300 };
    const response = await this.api.get("/Order/GetAll", { params });
    return response["content"];
  }

  async Update(data) {
    const response = await this.api.put("/Order/Update", data);
    return response["content"];
  }

  async Delete(id) {
    const response = await this.api.delete("/Order/Delete", { params: { id } });
    return response["content"];
  }

  async GetById(id) {
    const response = await this.api.get("/Order/GetById", { params: { id } });
    return response["content"];
  }

  async Create(data) {
    const response = await this.api.post("/Order/Create", data);
    return response["content"];
  }
}

const orderService = new OrderService();

export { orderService, OrderService };
