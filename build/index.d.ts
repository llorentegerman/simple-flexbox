/// <reference types="react" />

declare module "simple-flexbox" {
    class Column extends React.Component<ColumnProps> {}
    class Row extends React.Component<RowProps> {}
  
    interface Breakpoints {
        [key: number]: string | object;
    }
    interface ColumnProps extends React.HTMLAttributes<HTMLDivElement> {
      className?: string;
      style?: React.CSSProperties;
      flexGrow?: number;
      wrap?: boolean;
      flex?: string;
      flexShrink?: number;
      flexBasis?: string;
      breakpoints?: Breakpoints;
      reverse?: boolean;
      children: any;
      vertical?:
        | "start"
        | "center"
        | "end"
        | "spaced"
        | "space-between"
        | "around"
        | "space-around"
        | "space-evenly";
      horizontal?: "start" | "center" | "end" | "stretch";
      justifyContent?:
        | "start"
        | "flex-start"
        | "center"
        | "end"
        | "flex-end"
        | "spaced"
        | "space-between"
        | "around"
        | "space-around"
        | "space-evenly";
      alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
      alignSelf?: "start" | "center" | "end" | "stretch" | "baseline";
      alignContent?:
        | "start"
        | "flex-start"
        | "center"
        | "end"
        | "flex-end"
        | "spaced"
        | "space-between"
        | "around"
        | "space-around"
        | "stretch";
    }
  
    interface RowProps extends React.HTMLAttributes<HTMLDivElement> {
      className?: string;
      style?: React.CSSProperties;
      wrap?: boolean;
      reverse?: boolean;
      flex?: string;
      flexGrow?: number;
      flexShrink?: number;
      flexBasis?: string;
      breakpoints?: Breakpoints;
      children: any;
      vertical?: "start" | "center" | "end" | "spaced" | "baseline";
      horizontal?:
        | "start"
        | "center"
        | "end"
        | "spaced"
        | "space-between"
        | "around"
        | "space-around"
        | "space-evenly";
      justifyContent?:
        | "start"
        | "flex-start"
        | "center"
        | "end"
        | "flex-end"
        | "spaced"
        | "space-between"
        | "around"
        | "space-around"
        | "space-evenly";
      alignItems?: "start" | "center" | "end" | "stretch" | "baseline";
      alignSelf?: "start" | "center" | "end" | "stretch" | "baseline";
      alignContent?:
        | "start"
        | "flex-start"
        | "center"
        | "end"
        | "flex-end"
        | "spaced"
        | "space-between"
        | "around"
        | "space-around"
        | "stretch";
    }
  }
  