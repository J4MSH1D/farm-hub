import { ApiService } from "../ApiService";

class ProductService extends ApiService {
  constructor() {
    super();
  }
  async GetTrade() {
    const response = await this.api.get("/Product/GetTrade");
    return response["content"];
  }

  async GetAll() {
    const response = await this.api.get("/Product/GetAll");
    return response["content"];
  }

  async Create({ tradeId, image, assets, title, description, amount, categoryId, districtId, regionId, address }) {
    const response = await this.api.post("/Product/Create", {
      tradeId,
      image,
      assets,
      title,
      description,
      amount,
      categoryId,
      districtId,
      regionId,
      address,
    });
    return response["content"];
  }
}

const productService = new ProductService();

export { productService, ProductService };
