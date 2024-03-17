import { Axios } from "axios";

class TemplateBuilderRepo {
  constructor(private fetcher: Axios) {}

  async patchWidget(id: string, payload: { [key: string]: string }) {
    return this.fetcher.patch(`/widget/${id}`, payload);
  }
}

export class HttpApi {
  public templateBuilderRepo: TemplateBuilderRepo;

  constructor(private fetcher: Axios) {
    this.templateBuilderRepo = new TemplateBuilderRepo(this.fetcher);
  }
}
