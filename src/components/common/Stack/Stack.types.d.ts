interface IStackProps extends IStyleGlobal {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
  ref?: React.RefObject<HTMLDivElement>;
}