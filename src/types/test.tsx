import React from "react";

// Get type module from build/index.d.ts
import { Row, Column } from "simple-flexbox";

const Test: React.FC<{}> = () => {
    return (
        <>
            <Row
                horizontal="center"
                vertical="center"
                onClick={() => {
                    console.log("click");
                }}
                ref={null}
                breakpoints={{
                    850: { flexDirection: 'row', backgroundColor: 'green' },
                    600: 'row-reverse'
                }}
            >
                <div style={{ width: "100%", height: "100px", backgroundColor: "red" }} />
            </Row>
            <Column
                horizontal="center"
                vertical="center"
                onClick={() => {
                    console.log("click");
                }}
                ref={null}
                breakpoints={{
                    850: { flexDirection: 'row', backgroundColor: 'green' },
                    600: 'row-reverse'
                }}
            >
                <div style={{ width: "100%", height: "100px", backgroundColor: "red" }} />
            </Column>
        </>
    );
};
