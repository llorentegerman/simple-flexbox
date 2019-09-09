import React from 'react';
import PropTypes from 'prop-types';

export class Layout extends React.PureComponent {

    static propTypes = {
        style: PropTypes.object,

        column: PropTypes.bool,
        rowReverse: PropTypes.bool,
        columnReverse: PropTypes.bool,

        justifyContent: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'space-evenly']),

        alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),

        alignSelf: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),

        alignContent: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'stretch']),

        wrap: PropTypes.bool,
        wrapReverse: PropTypes.bool,

        flexGrow: PropTypes.number,

        flexShrink: PropTypes.number,

        flexBasis: PropTypes.string,

        flex: PropTypes.string,

        breakpoints: PropTypes.object,

        element: PropTypes.oneOf(['article', 'aside', 'div', 'figure', 'footer', 'form', 'header', 'main', 'nav', 'section']),

        componentRef: PropTypes.oneOfType([
            PropTypes.func,
            PropTypes.shape({ current: PropTypes.object })
        ]),

        children: PropTypes.node.isRequired
    };

    getMainAxisAlign = (value, stretchIncluded = false) => {
        switch (value) {
            case 'flex-start':
            case 'start': return 'flex-start';
            case 'center': return 'center';
            case 'flex-end':
            case 'end': return 'flex-end';
            case 'space-between':
            case 'spaced': return 'space-between';
            case 'space-around':
            case 'around': return 'space-around';
            case 'space-evenly': return stretchIncluded ? 'flex-start' : 'space-evenly';
            case 'stretch': return stretchIncluded ? 'stretch' : 'flex-start';
            default: return 'flex-start';
        }
    }

    getCrossAxisAlign = (value) => {
        switch (value) {
            case 'flex-start':
            case 'start': return 'flex-start';
            case 'center': return 'center';
            case 'flex-end':
            case 'end': return 'flex-end';
            case 'stretch': return 'stretch';
            case 'baseline': return 'baseline';
            default: return 'stretch';
        }
    }

    render() {

        const {
            style,
            column = false,
            rowReverse = false,
            columnReverse = false,

            // Main Axis
            justifyContent,
            alignContent,

            // Cross Axis
            alignItems,
            alignSelf,

            // Wrap
            wrap = false,
            wrapReverse = false,

            flexGrow,
            flexShrink,
            flexBasis,
            flex,

            breakpoints,
            className,
            componentRef,

            element,

            ...ownProps
        } = this.props;

        let direction = { flexDirection: 'row' }; // default row
        if (column) {
            direction = { flexDirection: 'column' };
        }

        if (rowReverse) {
            direction = { flexDirection: 'row-reverse' };
        }
        else if (columnReverse) {
            direction = { flexDirection: 'column-reverse' };
        }

        let flexWrap = { flexWrap: 'nowrap' };
        if (wrap) {
            flexWrap = { flexWrap: 'wrap' };
        }
        else if (wrapReverse) {
            flexWrap = { flexWrap: 'wrap-reverse' };
        }

        const justifyContentStyle = justifyContent && { justifyContent: this.getMainAxisAlign(justifyContent) } || {};

        const alignItemsStyle = alignItems && { alignItems: this.getCrossAxisAlign(alignItems) } || {};

        const alignSelfStyle = alignSelf && { alignSelf: this.getCrossAxisAlign(alignSelf) } || {};

        const alignContentStyle = alignContent && { alignContent: this.getMainAxisAlign(alignContent, true) } || {};

        const flexGrowStyle = flexGrow && { flexGrow } || {};

        const flexShrinkStyle = flexShrink && { flexShrink } || {};

        const flexBasisStyle = flexBasis && { flexBasis } || {};

        const flexStyle = flex && { flex } || {};

        const breakpointsClassNames = [];
        const breakpointsStyles = !breakpoints ? {} :
            Object.keys(breakpoints).sort((a, b) => b - a).reduce((style, key) => {
                if (isNaN(key)) {
                    return style;
                }
                const value = breakpoints[key];
                if (typeof value === 'string') {
                    if (!['column', 'column-reverse', 'row', 'row-reverse'].includes(value)) {
                        if (window.innerWidth <= +key) {
                            breakpointsClassNames.push(value)
                        }
                        return style;
                    }
                    return {
                        ...style,
                        ...(window.innerWidth <= +key ? { flexDirection: value } : {})
                    }
                }
                return {
                    ...style,
                    ...(window.innerWidth <= +key ? value : {})
                }
            }, {});

        const classNames = `${className || ''} ${breakpointsClassNames.join(' ')}`.trim();

        const layoutStyles = {
            display: 'flex',
            ...direction,
            ...justifyContentStyle,
            ...alignItemsStyle,
            ...alignSelfStyle,
            ...alignContentStyle,
            ...flexWrap,
            ...flexGrowStyle,
            ...flexShrinkStyle,
            ...flexBasisStyle,
            ...flexStyle,
            ...style,
            ...breakpointsStyles
        };

        const Element = React.createElement(element || 'div');

        return (<Element.type ref={componentRef} style={layoutStyles} className={classNames} {...ownProps}>
            {this.props.children}
        </Element.type>);
    }
}

export class Row extends React.PureComponent {

    static propTypes = {
        reverse: PropTypes.bool,
        vertical: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
        horizontal: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'space-evenly']),

        justifyContent: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'space-evenly']),
        alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
        alignSelf: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
        alignContent: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'stretch']),

        flex: PropTypes.string,
        flexGrow: PropTypes.number,
        flexShrink: PropTypes.number,
        flexBasis: PropTypes.string,
        breakpoints: PropTypes.object,
        element: PropTypes.oneOf(['article', 'aside', 'div', 'figure', 'footer', 'form', 'header', 'main', 'nav', 'section']),

        children: PropTypes.node.isRequired
    };

    render() {
        const { reverse = false, vertical, horizontal, justifyContent, alignItems, alignSelf, alignContent,
            flex, flexGrow, flexShrink, flexBasis, ...ownProps } = this.props;

        const rowReverse = reverse;

        return (
            <Layout
                rowReverse={rowReverse}
                alignItems={vertical || alignItems}
                justifyContent={horizontal || justifyContent}
                alignSelf={alignSelf}
                alignContent={alignContent}
                flexGrow={flexGrow}
                flexBasis={flexBasis}
                flexShrink={flexShrink}
                flex={flex}
                {...ownProps}>
                {this.props.children}
            </Layout>
        );
    }

}

export class Column extends React.PureComponent {

    static propTypes = {
        reverse: PropTypes.bool,
        horizontal: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
        vertical: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'space-evenly']),

        justifyContent: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'space-evenly']),
        alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
        alignSelf: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
        alignContent: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'stretch']),

        flex: PropTypes.string,
        flexGrow: PropTypes.number,
        flexShrink: PropTypes.number,
        flexBasis: PropTypes.string,
        breakpoints: PropTypes.object,
        element: PropTypes.oneOf(['article', 'aside', 'div', 'figure', 'footer', 'form', 'header', 'main', 'nav', 'section']),

        children: PropTypes.node.isRequired
    };

    render() {
        const { reverse = false, vertical, horizontal, justifyContent, alignItems, alignSelf, alignContent,
            flex, flexGrow, flexShrink, flexBasis, ...ownProps } = this.props;

        const columnReverse = reverse;

        return (
            <Layout column
                columnReverse={columnReverse}
                alignItems={horizontal || alignItems}
                justifyContent={vertical || justifyContent}
                alignSelf={alignSelf}
                alignContent={alignContent}
                flexGrow={flexGrow}
                flexBasis={flexBasis}
                flexShrink={flexShrink}
                flex={flex}
                {...ownProps}>
                {this.props.children}
            </Layout>
        );
    }
}
