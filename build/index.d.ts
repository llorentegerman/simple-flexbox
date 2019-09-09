/// <reference types="react" />

declare module "simple-flexbox" {
    class Column extends React.PureComponent<ColumnProps> { }
    class Row extends React.PureComponent<RowProps> { }

    interface Breakpoints {
        [key: number]: string | object;
    }
    interface ColumnProps extends React.HTMLAttributes<React.ReactHTML> {
        componentRef?: ((ref: any) => void) | React.MutableRefObject<any>;
        className?: string;
        style?: React.CSSProperties;
        flexGrow?: number;
        wrap?: boolean;
        wrapReverse?: boolean;
        flex?: string;
        flexShrink?: number;
        flexBasis?: string;
        breakpoints?: Breakpoints;
        reverse?: boolean;
        children: any;
        element?: "article" | "aside" | "div" | "figure" | "footer" | "form"  | "header" | "main" | "nav" | "section";
        vertical?:
        | "flex-start"
        | "start"
        | "center"
        | "end"
        | "flex-end"
        | "spaced"
        | "space-between"
        | "around"
        | "space-around"
        | "space-evenly";
        horizontal?: "start" | "center" | "end" | "stretch" | "baseline";
        justifyContent?:
        | "flex-start"
        | "start"
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

    interface RowProps extends React.HTMLAttributes<React.ReactHTML> {
        componentRef?: ((ref: any) => void) | React.MutableRefObject<any>;
        className?: string;
        style?: React.CSSProperties;
        wrap?: boolean;
        wrapReverse?: boolean;
        reverse?: boolean;
        flex?: string;
        flexGrow?: number;
        flexShrink?: number;
        flexBasis?: string;
        breakpoints?: Breakpoints;
        children: any;
        element?: "article" | "aside" | "div" | "figure" | "footer" | "form"  | "header" | "main" | "nav" | "section";
        vertical?: "start" | "center" | "end" | "stretch" | "baseline";
        horizontal?:
        | "flex-start"
        | "start"
        | "center"
        | "end"
        | "flex-end"
        | "spaced"
        | "space-between"
        | "around"
        | "space-around"
        | "space-evenly";
        justifyContent?:
        | "flex-start"
        | "start"
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
        | "flex-start"
        | "start"
        | "center"
        | "end"
        | "flex-end"
        | "spaced"
        | "space-between"
        | "around"
        | "space-around"
        | "stretch"
    }
}
