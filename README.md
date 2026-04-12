# `console.col`

This is my console colour package. There are many like it but this one is mine.

It adds a number of functions to the console module for adding colour. You can specify text or background colours using 
 specific functions, or you can change within a single call by specifying flags.

## Usage

The generic coloured console log is `console.col()`. 

### Coloured Text
To add coloured text, add flags with this structure `@colourName@`.

_example:_
```
console.col("@red@This text will be red")
```
Will output the text `This text will be red` in red.


### Coloured Background
To add coloured background, add flags with this structure `#colourName#`.

_example:_
```
console.col("#blue#This text will have a blue background")
```
Will output the text `This text will have a blue background` in the default colour with a blue background.

### Mixing Styles

You can combine background and text colours by using both background and text formatting.

_example:_
```
console.col("@red@#blue#This text will be red with a blue background")
```
Will output the text `This text will be red with a blue background` with red text on a blue background.

### Changing styles
You can also change styles mid-text.

_example:_
```
console.col("@red@This text will be red @blue@This text will be blue") 
```
Will have `This text will be red ` in red and `This text will be blue` in blue.

### Clearing style
At any time you can clear the styling and return to your terminal defaults with either `#clear#` or `@clear@`. They 
 both do the same thing.

_example:_
```
console.col("@red@This text will be red @clear@This text will be normal") 
```
Will have `This text will be red ` in red and `This text will be normal` in your terminal's default colour.

## Colour-specific functions

This package also adds a number of colour specific functions to `console`, one for each colour, both background and 
 text.

### Text Colour

Text colour functions follow this structure: `console.colourName()`

_example:_

```
console.red("Text is red");
```

Will output `Text is red` in red.

### Background Colour

Text colour functions follow this structure: `console.colourName$()`

_example:_

```
console.blue$("Background is blue");
```

Will output `Background is blue` with a blue background.

### Adding styles to colour-specific functions

These functions work the same as the regular `console.col` function. 

_example:_
```
console.red("This text is red @yellow@This text is yellow")
```

Will have `This text is red ` in red and `This text is yellow` in yellow.


## Colours

The following colours are supported:

- `red`
- `green`
- `blue`
- `yellow`
- `magenta`
- `cyan`
- `white`
- `black`

and their darker variants

- `darkRed`
- `darkGreen`
- `darkBlue`
- `darkYellow`
- `darkMagenta`
- `darkCyan`
- `darkWhite`
- `darkBlack`

## Additional Functionality

I added a few extra functions that I find useful in specific situations.

### Die

`console.die(msg)` is a special function that takes a single string param, logs it in red, and then calls `process.exit()`.

### Enable/Disable

The package also exports `enable()` and `disable()`. When disabled, `console.col` just does nothing. 