import { FC } from "react";

type Props = {
  width?: number;
  stroke?: string;
  strokeWidth?: number;
  fill?: string;
};

export const LightningBolt: FC<Props> = ({
  width = 32,
  stroke = "black",
  strokeWidth = 1.5,
  fill = "orange",
}) => {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill={fill}
      viewBox="0 0 24 24"
      strokeWidth={strokeWidth}
      stroke={stroke}
      width={width}
      color={stroke}
    >
      <path
        strokeLinecap="round"
        strokeLinejoin="round"
        d="m3.75 13.5 10.5-11.25L12 10.5h8.25L9.75 21.75 12 13.5H3.75Z"
      />
    </svg>
  );
};
