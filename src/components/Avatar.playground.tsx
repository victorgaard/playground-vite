import { generateProps } from "@/utils/generateProps";
import Avatar, { AvatarProps } from "./Avatar";

export const props = generateProps<AvatarProps>({
  Component: Avatar,
  defaultProps: {
    picture: "./assets/avatar.jpeg",
    name: "",
    size: "md",
    status: "online",
    shape: "rounded",
  },
  variantProps: {
    size: ["sm", "md", "lg", "xl"],
    shape: ["rounded", "squared"],
    status: ["online", "offline", "idle"],
  },
  examples: {
    squared: {
      picture: "./assets/avatar.gif",
      shape: "squared",
      size: "lg",
      status: "online",
    },
    fallback: {
      picture: "",
      name: "knight",
      status: "offline",
    },
  },
});
