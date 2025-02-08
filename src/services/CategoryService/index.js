import { ApiService } from "../ApiService";

class CategoryService extends ApiService {
  constructor() {
    super();
  }

  async GetAll() {
    const response = await this.api.get("/Category/GetAll");
    return response["content"];
  }

  async Delete(id) {
    return await this.api.delete("/Category/Delete", { params: { id } });
  }

  async Create(data) {
    console.log(data);
    await this.api.post("/Category/Create", data);
  }

  async Update(data) {
    await this.api.put("/Category/Update", data);
  }
}

const categoryService = new CategoryService();

export { categoryService, CategoryService };
