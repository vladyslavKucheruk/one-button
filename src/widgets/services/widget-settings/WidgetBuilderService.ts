import injector from "@shared/utils/Injector";
import { HttpApi } from "@shared/api";

export class TemplateBuilderService {
  private fetcher = injector.get<HttpApi>("HttpApi");

  async patchWidget(id: string, data: { [key: string]: string }) {
    this.fetcher.templateBuilderRepo.patchWidget(id, data);
  }
}
