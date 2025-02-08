import { ApiService } from "../ApiService";

class CategoryTypeService extends ApiService {
  constructor() {
    super();
  }

  async GetAllCategories() {
    const response = await this.api.get("/api/CategoryType");
    return response["content"];
  }

  async DeleteCategory(id) {
    await this.api.delete("/api/CategoryType", { data: Number(id), headers: { "Content-Type": "application/json" } });
  }

  async CreateCategory(data) {
    await this.api.post("/api/CategoryType", data);
  }

  async UpdateCategoryType(data) {
    await this.api.put("/api/CategoryType", data);
  }
}

const categoryTypeService = new CategoryTypeService();

export { categoryTypeService, CategoryTypeService };
