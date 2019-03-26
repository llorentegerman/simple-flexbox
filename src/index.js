import React from 'react';
import PropTypes from 'prop-types';
import * as media from './media-queries';

export class Layout extends React.Component {

    static propTypes = {
        style: PropTypes.object,

        column: PropTypes.bool,
        rowReverse: PropTypes.bool,
        columnReverse: PropTypes.bool,

        justifyContent: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around']),

        alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),

        alignSelf: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),

        alignContent: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around']),

        wrap: PropTypes.bool,
        wrapReverse: PropTypes.bool,

        flexGrow: PropTypes.number,

        flexShrink: PropTypes.number,

        flexBasis: PropTypes.string,

        flex: PropTypes.string,

        onXSmall: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),

        onSmall: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),

        onMedium: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),

        onLarge: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),

        onExtraLarge: PropTypes.oneOf(['column', 'column-reverse', 'row', 'row-reverse']),

        children: PropTypes.node.isRequired
    };

    getMainAxisAlign = (value) => {
        switch (value) {
            case 'start': return 'flex-start';
            case 'center': return 'center';
            case 'end': return 'flex-end';
            case 'space-between':
            case 'spaced': return 'space-between';
            case 'space-around':
            case 'around': return 'space-around';
            default: return 'flex-start';
        }
    }

    getCrossAxisAlign = (value) => {
        switch (value) {
            case 'start': return 'flex-start';
            case 'center': return 'center';
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

            // Cross Axis
            alignItems,
            alignSelf,
            alignContent,

            // Wrap
            wrap = false,
            wrapReverse = false,

            flexGrow,
            flexShrink,
            flexBasis,
            flex,

            onXSmall,
            onSmall,
            onMedium,
            onLarge,
            onExtraLarge,

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

        let flexWrap = { flexWrap: 'noWrap' };
        if (wrap) {
            flexWrap = { flexWrap: 'wrap' };
        }
        else if (wrapReverse) {
            flexWrap = { flexWrap: 'wrap-reverse' };
        }

        const justifyContentStyle = justifyContent && { justifyContent: this.getMainAxisAlign(justifyContent) } || {};

        const alignItemsStyle = alignItems && { alignItems: this.getCrossAxisAlign(alignItems) } || {};

        const alignSelfStyle = alignSelf && { alignSelf: this.getCrossAxisAlign(alignSelf) } || {};

        const alignContentStyle = alignContent && { alignContent: this.getMainAxisAlign(alignContent) } || {};

        const flexGrowStyle = flexGrow && { flexGrow } || {};

        const flexShrinkStyle = flexShrink && { flexShrink } || {};

        const flexBasisStyle = flexBasis && { flexBasis } || {};

        const flexStyle = flex && { flex } || {};

        let onXSmallStyle = onXSmall && media.isXSmallScreen() && { flexDirection: onXSmall } || {};
        let onSmallStyle = onSmall && media.isSmallScreen() && { flexDirection: onSmall } || {};
        let onMediumStyle = onMedium && media.isMediumScreen() && { flexDirection: onMedium } || {};
        let onLargeStyle = onLarge && media.isLargeScreen() && { flexDirection: onLarge } || {};
        let onExtraLargeStyle = onExtraLarge && media.isExtraLargeScreen() && { flexDirection: onExtraLarge } || {};

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
            ...onXSmallStyle,
            ...onSmallStyle,
            ...onMediumStyle,
            ...onLargeStyle,
            ...onExtraLargeStyle,
            ...style
        };

        return (<div style={layoutStyles} {...ownProps}>
            {this.props.children}
        </div>);
    }
}

export class Row extends React.Component {

    static propTypes = {
        reverse: PropTypes.bool,
        vertical: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
        horizontal: PropTypes.oneOf(['start', 'center', 'end', 'spaced', 'space-between', 'around', 'space-around']),

        justifyContent: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around']),
        alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
        alignSelf: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
        alignContent: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around']),

        flex: PropTypes.string,
        flexGrow: PropTypes.number,
        flexShrink: PropTypes.number,
        flexBasis: PropTypes.string,
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

export class Column extends React.Component {

    static propTypes = {
        reverse: PropTypes.bool,
        horizontal: PropTypes.oneOf(['start', 'center', 'end', 'stretch']),
        vertical: PropTypes.oneOf(['start', 'center', 'end', 'spaced', 'space-between', 'around', 'space-around']),

        justifyContent: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around']),
        alignItems: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
        alignSelf: PropTypes.oneOf(['start', 'center', 'end', 'stretch', 'baseline']),
        alignContent: PropTypes.oneOf(['start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around']),

        flex: PropTypes.string,
        flexGrow: PropTypes.number,
        flexShrink: PropTypes.number,
        flexBasis: PropTypes.string,
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
