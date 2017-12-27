## Simple Flexbox

A simple component to make layouts with Flexbox.

See examples in [storybook](https://github.com/trytrytrytry/README.md).

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

This is [on GitHub](https://github.com/jbt/markdown-editor) so let me know if I've b0rked it somewhere.


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
|any other property| any | i.e.: `style={{bakcgroundColor: 'red'}}`|
|children|	|	required	|

License
-------
This software is released under the [MIT License](https://github.com/okunishinishi/node-mysqlspec/blob/master/LICENSE).
