import type { CSSProperties, VFC } from "react";

const svgStyle: CSSProperties = {
  position: "absolute",
  top: "0",
  left: "0",
};

export const Icon: VFC<{ size: number; href: string }> = (props) => {
  return (
    <>
      <svg width={props.size} height={props.size} viewBox="0 0 128 128">
        <image
          href={props.href}
          width="100%"
          height="100%"
          preserveAspectRatio="xMidYMid slice"
          clipPath="url(#clip01)"
        />
      </svg>
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128" width="0" height="0" style={svgStyle}>
        <clipPath id="clip01">
          <path d="M128,64c-.28,21.19-4,38.74-14.77,49.23C102.74,124,85.19,127.72,64,128c-21.19-.28-38.74-4-49.23-14.77C4,102.74.28,85.19,0,64,.28,42.81,4,25.26,14.77,14.77,25.26,4,42.81.28,64,0c21.19.28,38.74,4,49.23,14.77C124,25.26,127.72,42.81,128,64Z" />
        </clipPath>
      </svg>
    </>
  );
};
