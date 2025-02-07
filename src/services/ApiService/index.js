import api from "@/plugins/axios";

class ApiService {
  constructor() {
    this.api = api;
  }
}

const apiService = new ApiService();

export { ApiService, apiService };
