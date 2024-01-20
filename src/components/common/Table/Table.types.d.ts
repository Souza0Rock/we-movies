type TCollumn = {
  width?: string;
  header?: string;
  renderCell: (data: any) => ReactNode;
};

interface ITableProps {
  data: any[];
  collumns: TCollumn[];
}
