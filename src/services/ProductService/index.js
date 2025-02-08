import { ApiService } from "../ApiService";

class ProductService extends ApiService {
  constructor() {
    super();
  }
  async GetTrade() {
    const response = await this.api.get("/Product/GetTrade");
    return response["content"];
  }
}

const productService = new ProductService();

export { productService, ProductService };
