import { ReactNode } from "react";

import "./segmented-radio.styles.scss";

interface RadioGroupProps {
  value: string;
  label?: string;
  onChange: (value: string) => void;
  items: { label: string | ReactNode; value: string }[];
}

export const SegmentedRadioGroup = ({ value, label, items, onChange }: RadioGroupProps) => {
  return (
    <div className="segmented_radio_group__container">
      {label && <label className="segmented_radio_group__label">{label}</label>}
      <div className="segmented_radio_group__options">
        {items.map((item) => (
          <SegmentedRadioItem
            key={item.value}
            label={item.label}
            onClick={() => onChange(item.value)}
            active={value === item.value}
          />
        ))}
      </div>
    </div>
  );
};

interface RadioItemProps {
  label: string | ReactNode;
  active: boolean;
  onClick: () => void;
}

export const SegmentedRadioItem = ({ active, label, onClick }: RadioItemProps) => {
  return (
    <div className={`segmented_radio_group__item ${active ? "selected" : ""}`} onClick={onClick}>
      {label}
    </div>
  );
};
