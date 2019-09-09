## Simple Flexbox

A simple way to make responsive layouts using Flexbox in React. _Typescript supported._

## Installation

`npm install simple-flexbox` or `yarn add simple-flexbox`

## Examples

Look at a real UI created with `simple-flexbox` here: [https://llorentegerman.github.io/react-admin-dashboard/](https://llorentegerman.github.io/react-admin-dashboard/) and read the code here: [https://github.com/llorentegerman/react-admin-dashboard](https://github.com/llorentegerman/react-admin-dashboard).

See examples in [codesandbox](https://codesandbox.io/s/z3p04l3vol).

There are two main components, `Column` and `Row`.

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
[![Edit simple-flexbox examples](https://codesandbox.io/static/img/play-codesandbox.svg)](https://codesandbox.io/s/z3p04l3vol)

# Row props
|property|accepted values|description|
| --------- | ----------- | ----------- |
|reverse| true or false |		|
|vertical|	'start', 'center', 'end', 'stretch', 'baseline' |	at **rows**, *vertical* and *alignItems* are the same	|
|horizontal|'start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'space-evenly'|	at **rows**, *horizontal* and *justifyContent* are the same|
|justifyContent|'start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'space-evenly'|	at **rows**, *horizontal* and *justifyContent* are the same|
|alignItems|'start', 'center', 'end', 'stretch', 'baseline' |	at **rows**, *vertical* and *alignItems* are the same	|
|alignSelf|'start', 'center', 'end', 'stretch', 'baseline' |	other alignment for the cross (vertical) axis	|
|alignContent|'start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'stretch'|	other alignment for the cross (vertical) axis	|
|flex|	string|		shorthand for grow, shrink and basis |
|flexGrow|	number|		flex-grow |
|flexShrink|	number|		flex-shrink |
|flexBasis|	string|		flex-basis |
|wrap|	true or false|	default: false	|
|wrapReverse|	true or false|	default: false	|
|any other property| any | i.e.: `style={{bakcgroundColor: 'red'}}`|
|breakpoints|array of objects| different styles are applied depending on `window.innerWidth`, see **Breakpoints** section below |
|element |  'article', 'aside', 'div', 'figure', 'footer', 'form', 'header', 'main', 'nav', 'section'  | Defines to which html tag the styles will be applied. Default: `div` |
|componentRef|	createRef() or callback ref|	reference	|
|children|	|	**required**	|


# Column props
|property|accepted values|description|
| --------- | ----------- | ----------- |
|reverse| true or false |		|
|horizontal|	'start', 'center', 'end', 'stretch', 'baseline' |	at **column**, *horizontal* and *alignItems* are the same	|
|vertical|'start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'space-evenly'|	at **column**, *vertical* and *justifyContent* are the same|
|justifyContent|'start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'space-evenly'|	at **column**, *vertical* and *justifyContent* are the same|
|alignItems|'start', 'center', 'end', 'stretch', 'baseline' |	at **column**, *horizontal* and *alignItems* are the same	|
|alignSelf|'start', 'center', 'end', 'stretch', 'baseline' |	other alignment for the cross (horizontal) axis	|
|alignContent|'start', 'flex-start', 'center', 'end', 'flex-end', 'spaced', 'space-between', 'around', 'space-around', 'stretch'|	other alignment for the cross (horizontal) axis	|
|flex|	string|		shorthand for grow, shrink and basis |
|flexGrow|	number|		flex-grow |
|flexShrink|	number|		flex-shrink |
|flexBasis|	string|		flex-basis |
|wrap|	true or false|	default: false	|
|wrapReverse|	true or false|	default: false	|
|any other property| any | i.e.: `style={{bakcgroundColor: 'red'}}`|
|breakpoints|array of objects| different styles are applied depending on `window.innerWidth`, see **Breakpoints** section below |
|element |  'article', 'aside', 'div', 'figure', 'footer', 'form', 'header', 'main', 'nav', 'section'  | Defines to which html tag the styles will be applied. Default: `div` |
|componentRef|	createRef() or callback ref|	reference	|
|children|	|	**required**	|

Breakpoints
-------
The `breakpoints` property allows you to apply styles depending on `window.innerWidth`.

You must indicate the maximum **size** for which the styles will be applied, that means that the styles will be applied as long as `windows.width` <= **size**, where `size` is a number.
Breakpoints property must have this structure:
```
{
	size1: { styles1 },
	size2: { styles2 },
	...
	sizeN: { stylesN }
}
```
you can also use a `flexDirection` value such as `column, column-reverse, row, row-reverse`, or a `className`, in this case, the name of the class cannot be any of the 4 possible values of `flexDirection`, so, `className` cannot be any of these `column`, `column-reverse`, `row` or `row-reverse`.

```
{
	size1: 'flexDirection value, for example: column, column-reverse, row or row-reverse',
	size2: 'any className except column, column-reverse, row, row-reverse',
	...
	sizeN: 'column, column-reverse, row, row-reverse or className'
}
```
for example:
```
<Column breakpoints={{
	850: { flexDirection: 'row', backgroundColor: 'green' },
	600: 'row-reverse'
}}>
	<b>Hello</b>
    <span>world!</span>
</Column>
```
Breakpoints styles are applied cumulatively, for example, for the `Column` declared above, these will be the styles, depending on `window.innerWidth`:

`window.innerWidth > 850` --> `styles = {}`

`600 < window.innerWidth <= 850` --> `styles = { flexDirection: 'row', backgroundColor: 'green' }`

`window.innerWidth <= 600` --> `styles = { flexDirection: 'row-reverse', backgroundColor: 'green' }`

You can see this `breakpoints` examples in [codesandbox](https://codesandbox.io/s/z3p04l3vol).

License
-------
This software is released under the [MIT License](https://github.com/llorentegerman/simple-flexbox/blob/master/LICENSE).

Author
-------
![me](https://avatars3.githubusercontent.com/u/21162888?s=100&v=4)

[Germán Llorente](https://github.com/llorentegerman)