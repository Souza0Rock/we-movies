interface ITypographProps {
  fontSize?: number;
  textTransform?: "capitalize" | "lowercase" | "uppercase" | "none";
  textAlign?: "center" | "right" | "left" | "justify";
  fontWeight?: 300 | 400 | 500 | 600 | 700;
  color?: string;
  cursorPointer?: boolean;
  lineHeigth?: number | string;
  italic?: boolean;
  children: React.ReactNode;
  onClick?: () => void;
  className?: string;
}
