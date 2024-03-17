import { makeAutoObservable } from "mobx";

import injector from "@shared/utils/Injector";
import { TemplateBuilderService } from "@widgets/services/widget-settings/WidgetBuilderService";
import {
  ButtonSize,
  ButtonSizeEnum,
  HorizontalAlign,
  HorizontalAlignEnum,
  VerticalAlign,
  VerticalAlignEnum,
} from "@features/types/widget-settings";

export class ButtonWidgetStore {
  id?: string;
  label?: string;
  action?: string;
  size?: ButtonSize;
  horizontalAlign?: HorizontalAlign;
  verticalAlign?: VerticalAlign;
  initialProps: Partial<ButtonWidgetStore>;

  private templateBuilderService = injector.get<TemplateBuilderService>("TemplateBuilderService");

  constructor(
    id?: string,
    label?: string,
    action?: string,
    size?: ButtonSize,
    horizontalAlign?: HorizontalAlign,
    verticalAlign?: VerticalAlign
  ) {
    this.id = id;
    this.action = action || "#";
    this.label = label || "Button";
    this.size = size || ButtonSizeEnum.M;
    this.horizontalAlign = horizontalAlign || HorizontalAlignEnum.LEFT;
    this.verticalAlign = verticalAlign || VerticalAlignEnum.TOP;
    this.initialProps = { label, action, size, horizontalAlign };
    makeAutoObservable(this, {}, { autoBind: true });
  }

  setLabel(label: string) {
    this.label = label;
  }

  setAction(action: string) {
    this.action = action;
  }

  setSize(size: ButtonSize) {
    this.size = size;
  }

  setHorizontalAlign(align: HorizontalAlign) {
    this.horizontalAlign = align;
  }

  setVerticalAlign(align: VerticalAlign) {
    this.verticalAlign = align;
  }

  setInitialProps(props: Partial<ButtonWidgetStore>) {
    this.initialProps = props;
  }

  async save() {
    try {
      this.setInitialProps({
        label: this.label,
        action: this.action,
        size: this.size,
        horizontalAlign: this.horizontalAlign,
        verticalAlign: this.verticalAlign,
      });

      if (!this.id) {
        return;
      }

      // TODO: use the correct widget id
      await this.templateBuilderService.patchWidget("1", {
        label: this.label || "",
        action: this.action || "",
        size: this.size || "",
        horizontalAlign: this.horizontalAlign || "",
        verticalAlign: this.verticalAlign || "",
      });
    } catch (e) {
      console.log(e);
    }
  }

  get isChanged() {
    return (
      this.label !== this.initialProps.label ||
      this.action !== this.initialProps.action ||
      this.size !== this.initialProps.size ||
      this.horizontalAlign !== this.initialProps.horizontalAlign ||
      this.verticalAlign !== this.initialProps.verticalAlign
    );
  }
}
