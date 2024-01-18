interface IButtonProps {
  children: React.ReactNode;
  onClick: (e?: MouseEvent<HTMLButtonElement>) => void;
  
  width?: string;
  backgrounColor?: string;
}