import { ApiService } from "../ApiService";

class FileService extends ApiService {
  constructor() {
    super();
  }
  async PostUploadFile(formData) {
    const response = await this.api.post("File/Upload", formData);
    return response["content"]["downloadPath"];
  }
}

const fileService = new FileService();

export { fileService, FileService };
