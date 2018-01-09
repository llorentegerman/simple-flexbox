## Simple Flexbox

A simple component to make layouts with Flexbox.

## Installation

`npm install simple-flexbox` or `yarn add simple-flexbox`

## Examples

See examples in [storybook](https://llorentegerman.github.io/simple-flexbox-storybook/storybook-static/?full=0&down=1&left=1&panelRight=1&downPanel=storybooks%2Fstorybook-addon-knobs).

There are two principal components, `Column` and `Row`.

```html
<Row vertical='center' horizontal='spaced'>
	<Column vertical='end'>
    	<span> Content 1 </span>
        <span> Content 2 </span>
    </Column>
    <Column>
    	<span> Content 3 </span>
        <span> Content 4 </span>
        <span> Content 5 </span>
    </Column>
</Row>
```

[![Edit simple-flexbox examples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/z3p04l3vol?module=%2Fexamples%2Findex.js)


# Row props
|property|accepted values|description|
| --------- | ----------- | ----------- |
|reverse| true or false |		|
|vertical|	'start', 'center', 'end', 'stretch', 'baseline' |	at **rows**, *vertical* and *alignItems* are the same	|
|horizontal|'start', 'center', 'end', 'spaced', 'space-between', 'around', 'space-around'|	at **rows**, *horizontal* and *justifyContent* are the same|
|justifyContent|'start', 'center', 'end', 'spaced', 'space-between', 'around', 'space-around'|	at **rows**, *horizontal* and *justifyContent* are the same|
|alignItems|'start', 'center', 'end', 'stretch', 'baseline' |	at **rows**, *vertical* and *alignItems* are the same	|
|alignSelf|'start', 'center', 'end', 'stretch', 'baseline' |	other alignment for the cross (vertical) axis	|
|alignContent|'start', 'center', 'end', 'spaced', 'space-between', 'around', 'space-around'|	other alignment for the cross (vertical) axis	|
|flex|	number|		|
|wrap|	true or false|	default: false	|
|wrapReverse|	true or false|	default: false	|
|any other property| any | i.e.: `style={{bakcgroundColor: 'red'}}`|
|children|	|	required	|


# Column props
|property|accepted values|description|
| --------- | ----------- | ----------- |
|reverse| true or false |		|
|horizontal|	'start', 'center', 'end', 'stretch', 'baseline' |	at **column**, *horizontal* and *alignItems* are the same	|
|vertical|'start', 'center', 'end', 'spaced', 'space-between', 'around', 'space-around'|	at **column**, *vertical* and *justifyContent* are the same|
|justifyContent|'start', 'center', 'end', 'spaced', 'space-between', 'around', 'space-around'|	at **column**, *vertical* and *justifyContent* are the same|
|alignItems|'start', 'center', 'end', 'stretch', 'baseline' |	at **column**, *horizontal* and *alignItems* are the same	|
|alignSelf|'start', 'center', 'end', 'stretch', 'baseline' |	other alignment for the cross (horizontal) axis	|
|alignContent|'start', 'center', 'end', 'spaced', 'space-between', 'around', 'space-around'|	other alignment for the cross (horizontal) axis	|
|flex|	number|		|
|wrap|	true or false|	default: false	|
|wrapReverse|	true or false|	default: false	|
|any other property| any | i.e.: `style={{bakcgroundColor: 'red'}}`|
|children|	|	required	|

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-mysqlspec/blob/master/LICENSE).

Author
-------
![me](https://avatars3.githubusercontent.com/u/21162888?s=100&v=4)

[Germán Llorente](https://github.com/llorentegerman)