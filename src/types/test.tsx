import React from "react";

// Get type module from build/index.d.ts
import { Row, Column } from "simple-flexbox";

const Test: React.FC<{}> = () => {
    let refFuncVer = React.useRef(null);
    let refObjectVer = React.useRef(null);

    return (
        <>
            <Row
                componentRef={(ref) => { refFuncVer.current = ref; }}
                horizontal={
                    "start" ||
                    "center" ||
                    "end" ||
                    "spaced" ||
                    "space-between" ||
                    "around" ||
                    "space-around" ||
                    "space-evenly"
                }
                vertical={"start" || "center" || "end" || "stretch" || "baseline"}
                onClick={() => {
                    console.log("click");
                }}
                breakpoints={{
                    850: { flexDirection: "row", backgroundColor: "green" },
                    600: "row-reverse"
                }}
                wrap
                wrapReverse
                element={
                    "article" || "aside" || "div" || "figure" || "footer" || "form" || "header" || "main" || "nav" || "section"
                }
                reverse
                justifyContent={
                    "start" ||
                    "flex-start" ||
                    "center" ||
                    "end" ||
                    "flex-end" ||
                    "spaced" ||
                    "space-between" ||
                    "around" ||
                    "space-around" ||
                    "space-evenly"
                }
                alignItems={"start" || "center" || "end" || "stretch" || "baseline"}
                alignSelf={"start" || "center" || "end" || "stretch" || "baseline"}
                alignContent={
                    "start" ||
                    "flex-start" ||
                    "center" ||
                    "end" ||
                    "flex-end" ||
                    "spaced" ||
                    "space-between" ||
                    "around" ||
                    "space-around"
                }
                flex="0 1 auto"
                flexGrow={1}
                flexShrink={1}
                flexBasis="fill"
            >
                <div style={{ width: "100%", height: "100px", backgroundColor: "red" }} />
            </Row>

            <Column
                componentRef={refObjectVer}
                horizontal={"start" || "center" || "end" || "stretch" || "baseline"}
                vertical={
                    "start" ||
                    "center" ||
                    "end" ||
                    "spaced" ||
                    "space-between" ||
                    "around" ||
                    "space-around" ||
                    "space-evenly"
                }
                onClick={() => {
                    console.log("click");
                }}
                breakpoints={{
                    850: { flexDirection: "row", backgroundColor: "green" },
                    600: "row-reverse"
                }}
                wrap
                wrapReverse
                element={
                    "article" || "aside" || "div" || "figure" || "footer" || "form" || "header" || "main" || "nav" || "section"
                }
                reverse
                justifyContent={
                    "start" ||
                    "flex-start" ||
                    "center" ||
                    "end" ||
                    "flex-end" ||
                    "spaced" ||
                    "space-between" ||
                    "around" ||
                    "space-around" ||
                    "space-evenly"
                }
                alignItems={"start" || "center" || "end" || "stretch" || "baseline"}
                alignSelf={"start" || "center" || "end" || "stretch" || "baseline"}
                alignContent={
                    "start" ||
                    "flex-start" ||
                    "center" ||
                    "end" ||
                    "flex-end" ||
                    "spaced" ||
                    "space-between" ||
                    "around" ||
                    "space-around"
                }
                flex="0 1 auto"
                flexGrow={1}
                flexShrink={1}
                flexBasis="fill"
            >
                <div style={{ width: "100%", height: "100px", backgroundColor: "red" }} />
            </Column>
        </>
    );
};
