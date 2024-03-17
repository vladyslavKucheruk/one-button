import { useMemo } from "react";
import { Observer, useLocalObservable } from "mobx-react-lite";

import { Button, Input, Portal, SegmentedRadioGroup } from "@shared/components";
import { AlignedSegmentIcon, WidgetSettingsHeader } from "@features/ui";
import { ButtonWidgetStore } from "@widgets/store/widget-settings/ButtonWidgetStore";
import {
  ButtonSize,
  ButtonSizeEnum,
  HorizontalAlign,
  HorizontalAlignEnum,
  VerticalAlign,
  VerticalAlignEnum,
} from "@features/types/widget-settings";

import "./button-widget.styles.scss";
import { usePopover } from "@shared/hooks/use-popover";

interface Props extends Partial<ButtonWidgetStore> {}

export const ButtonWidget = (props: Props) => {
  const buttonStore = useLocalObservable(
    () =>
      new ButtonWidgetStore(props.id, props.label, props.action, props.size, props.horizontalAlign, props.verticalAlign)
  );
  const {
    showPopover,
    styles,
    attributes,
    togglePopover,
    setPopperElement,
    setRefElement,
    setShowPopover,
    applyUpdate,
  } = usePopover();

  const handleSubmit = () => {
    buttonStore.save();
    setShowPopover(false);
  };

  const SIZES = useMemo(() => Object.values(ButtonSizeEnum).map((s) => ({ label: s, value: s })), []);
  const HORIZONTAL_ALIGN = useMemo(
    () =>
      Object.values(HorizontalAlignEnum).map((align) => ({
        label: <AlignedSegmentIcon direction="horizontal" align={align} />,
        value: align,
      })),
    []
  );
  const VERTICAL_ALIGN = useMemo(
    () =>
      Object.values(VerticalAlignEnum).map((align) => ({
        label: <AlignedSegmentIcon direction="vertical" align={align} />,
        value: align,
      })),
    []
  );

  return (
    <Observer>
      {() => (
        <div className={`horizontal-align-${buttonStore.horizontalAlign} vertical-align-${buttonStore.verticalAlign}`}>
          <button ref={setRefElement} className={`button size-${buttonStore.size}`} onClick={togglePopover}>
            <span>{buttonStore.label}</span>
          </button>

          {showPopover && (
            <Portal>
              <div ref={setPopperElement} className="settings" style={styles.popper} {...attributes.popper}>
                <div className="flex flex-col">
                  <WidgetSettingsHeader onClose={() => setShowPopover(false)} />

                  <div className="settings__item">
                    <Input
                      label="Label"
                      type="text"
                      value={buttonStore.label}
                      onChange={(e) => buttonStore.setLabel(e.target.value)}
                    />
                  </div>

                  <div className="settings__item">
                    <Input
                      label="Action"
                      type="text"
                      placeholder="External link or existing page"
                      value={buttonStore.action}
                      onChange={(e) => {
                        buttonStore.setAction(e.target.value);
                      }}
                    />
                  </div>

                  <div className="settings__item">
                    <SegmentedRadioGroup
                      label="Size"
                      value={buttonStore.size || ""}
                      onChange={(value) => {
                        applyUpdate(() => buttonStore.setSize(value as ButtonSize));
                      }}
                      items={SIZES}
                    />
                  </div>

                  <div className="settings__item">
                    <div className="flex gap-1">
                      <SegmentedRadioGroup
                        value={buttonStore.horizontalAlign || ""}
                        onChange={(value) => {
                          applyUpdate(() => buttonStore.setHorizontalAlign(value as HorizontalAlign));
                        }}
                        items={HORIZONTAL_ALIGN}
                      />
                      <SegmentedRadioGroup
                        value={buttonStore.verticalAlign || ""}
                        onChange={(value) => {
                          applyUpdate(() => buttonStore.setVerticalAlign(value as VerticalAlign));
                        }}
                        items={VERTICAL_ALIGN}
                      />
                    </div>
                  </div>
                </div>
                {buttonStore.isChanged && (
                  <div className="flex justify-end settings__item">
                    <Button onClick={handleSubmit}>Apply</Button>
                  </div>
                )}
              </div>
            </Portal>
          )}
        </div>
      )}
    </Observer>
  );
};
