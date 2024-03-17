import HorizontalCenterIcon from "@assets/icons/HorizontalCenterIcon";
import HorizontalLeftIcon from "@assets/icons/HorizontalLeftIcon";
import HorizontalRightIcon from "@assets/icons/HorizontalRightIcon";
import VerticalBottomIcon from "@assets/icons/VerticalBottomIcon";
import VerticalCenterIcon from "@assets/icons/VerticalCenterIcon";
import VerticalTopIcon from "@assets/icons/VerticalTopIcon";

enum HorizontalAlignEnum {
  LEFT = "left",
  CENTER = "center",
  RIGHT = "right",
}
type HorizontalAlign = HorizontalAlignEnum.LEFT | HorizontalAlignEnum.CENTER | HorizontalAlignEnum.RIGHT;

enum VerticalAlignEnum {
  TOP = "top",
  CENTER = "center",
  BOTTOM = "bottom",
}
type VerticalAlign = VerticalAlignEnum.TOP | VerticalAlignEnum.CENTER | VerticalAlignEnum.BOTTOM;

interface HorizontalProps {
  direction: "horizontal";
  align: HorizontalAlign;
}

interface VerticalProps {
  direction: "vertical";
  align: VerticalAlign;
}

export const AlignedSegmentIcon = (props: HorizontalProps | VerticalProps) => {
  if (props.direction === "horizontal") {
    const mapper = {
      left: <HorizontalLeftIcon />,
      center: <HorizontalCenterIcon />,
      right: <HorizontalRightIcon />,
    };

    return <div>{mapper[props.align]}</div>;
  }

  if (props.direction === "vertical") {
    const mapper = {
      top: <VerticalTopIcon />,
      center: <VerticalCenterIcon />,
      bottom: <VerticalBottomIcon />,
    };

    return <div>{mapper[props.align]}</div>;
  }
  return null;
};

export default AlignedSegmentIcon;
