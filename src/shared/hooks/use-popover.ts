import { useState } from "react";
import { usePopper } from "react-popper";

export const usePopover = () => {
  const [showPopover, setShowPopover] = useState(false);
  const [refElement, setRefElement] = useState<HTMLElement | null>(null);
  const [popperElement, setPopperElement] = useState<HTMLElement | null>(null);
  const { styles, attributes, update } = usePopper(refElement, popperElement, {
    placement: "left-start",
    modifiers: [
      {
        name: "offset",
        options: {
          offset: [0, 10],
        },
      },
    ],
  });

  const togglePopover = () => {
    setShowPopover(!showPopover);
  };

  const applyUpdate = (fn: () => void) => {
    fn();
    update && update();
  };

  return {
    showPopover,
    setShowPopover,
    refElement,
    setRefElement,
    popperElement,
    setPopperElement,
    styles,
    attributes,
    applyUpdate,
    togglePopover,
  };
};
