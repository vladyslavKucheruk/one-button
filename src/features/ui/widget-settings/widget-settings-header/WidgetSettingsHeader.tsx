import CloseIcon from "@assets/icons/CloseIcon";

import "./widget-settings-header.styles.scss";

interface Props {
  onClose: () => void;
}

export const WidgetSettingsHeader = ({ onClose }: Props) => {
  return (
    <div className="widget_settings__container">
      <div className="widget_settings__dots_container">
        <div className="dot" />
        <div className="dot" />
        <div className="dot" />
      </div>
      <span className="widget_settings__title">Button</span>
      <CloseIcon onClick={onClose} className="widget_settings__close_icon" />
    </div>
  );
};
