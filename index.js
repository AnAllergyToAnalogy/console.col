const col = {};

const clear = "\x1b[0m";
const colours = {
    black:      30,
    red:        31,
    green:      32,
    yellow:     33,
    blue:       34,
    magenta:    35,
    cyan:       36,
    white:      37,
}

function replaceAll(text, find, replace){
    return text.replace(new RegExp(find, 'g'), replace);
}

function textFlag(colour){
    return `@${colour}@`;
}
function bgFlag(colour){
    return `#${colour}#`;
}

function dark(colour){
    return 'dark'+colour[0].toUpperCase()+colour.substring(1);
}

col.colour = function(){
    if(!enabled) return;

    let args = [];
    for(let i = 0; i < arguments.length; i++){
        args.push(arguments[i]);
    }


    for(let i = 0; i < args.length; i++){
        if(typeof args[i] === "string"){
            let text = args[i];

            let search, replacement;

            search = "@clear@";
            text = replaceAll(text, search, clear);
            search = "#clear#";
            text = replaceAll(text, search, clear);

            for(let colour in colours){

                search = textFlag(dark(colour));
                replacement = "\x1b["+colours[colour]+"m";
                text = replaceAll(text, search, replacement);

                search = textFlag(colour);
                replacement = "\x1b[1;"+colours[colour]+"m";
                text = replaceAll(text, search, replacement);

                search = bgFlag(dark(colour));
                replacement = "\x1b["+(colours[colour]+10)+"m";
                text = replaceAll(text, search, replacement);

                search = bgFlag(colour);
                replacement = "\x1b[1;"+(colours[colour]+10)+"m";
                text = replaceAll(text, search, replacement);


            }
            args[i] = text;
        }
    }

    args.push(clear);

    console.log(...args);
}


for(let colour in colours){
    col[colour] = function() {
        col.colour("@" + colour + "@", ...arguments);
    }
    col[colour+"$"] = function() {
        col.colour("#" + colour + "#", ...arguments);
    }

    let colourName = colour.substr(0,1).toUpperCase() + colour.substring(1);

    col["dark"+colourName] = function(){
        col.colour("@dark-"+colour+"@",...arguments);
    }

    col["dark"+colourName+"$"] = function(){
        col.colour("#dark-"+colour+"#",...arguments);
    }

}


col.black = function(){
    return col.colour("@black@",...arguments);
}
col.red = function(){
    return col.colour("@red@",...arguments);
}
col.green = function(){
    return col.colour("@green@",...arguments);
}
col.yellow = function(){
    return col.colour("@yellow@",...arguments);
}
col.blue = function(){
    return col.colour("@blue@",...arguments);
}
col.magenta = function(){
    return col.colour("@magenta@",...arguments);
}
col.cyan = function(){
    return col.colour("@cyan@",...arguments);
}
col.white = function(){
    return col.colour("@white@",...arguments);
}

//DARK
col.darkBlack = function(){
    return col.colour("@darkBlack@",...arguments);
}
col.darkRed = function(){
    return col.colour("@darkRed@",...arguments);
}
col.darkGreen = function(){
    return col.colour("@darkGreen@",...arguments);
}
col.darkYellow = function(){
    return col.colour("@darkYellow@",...arguments);
}
col.darkBlue = function(){
    return col.colour("@darkBlue@",...arguments);
}
col.darkMagenta = function(){
    return col.colour("@darkMagenta@",...arguments);
}
col.darkCyan = function(){
    return col.colour("@darkCyan@",...arguments);
}
col.darkWhite = function(){
    return col.colour("@darkWhite@",...arguments);
}

//BG-NORMAL
col.black$ = function(){
    return col.colour("#black#",...arguments);
}
col.red$ = function(){
    return col.colour("#red#",...arguments);
}
col.green$ = function(){
    return col.colour("#green#",...arguments);
}
col.yellow$ = function(){
    return col.colour("#yellow#",...arguments);
}
col.blue$ = function(){
    return col.colour("#blue#",...arguments);
}
col.magenta$ = function(){
    return col.colour("#magenta#",...arguments);
}
col.cyan$ = function(){
    return col.colour("#cyan#",...arguments);
}
col.white$ = function(){
    return col.colour("#white#",...arguments);
}

//BG-DARK
col.darkBlack$ = function(){
    return col.colour("#darkBlack#",...arguments);
}
col.darkRed$ = function(){
    return col.colour("#darkR#",...arguments);
}
col.darkGreen$ = function(){
    return col.colour("#darkGreen#",...arguments);
}
col.darkYellow$ = function(){
    return col.colour("#darkYellow#",...arguments);
}
col.darkBlue$ = function(){
    return col.colour("#darkBlue#",...arguments);
}
col.darkMagenta$ = function(){
    return col.colour("#darkMagenta#",...arguments);
}
col.darkCyan$ = function(){
    return col.colour("#darkCyan#",...arguments);
}
col.darkWhite$ = function(){
    return col.colour("#darkWhite#",...arguments);
}


let enabled = true;
const enable = ()=>{
    enabled = true;
}
col.enable = enable;
const disable = ()=>{
    enabled = false;
}
col.disable = disable;

col.die = function(msg = ''){
    col.red(msg);
    process.exit();
}


const init = function (){
    const skip = ['enable','disable','colour'];
    for(let c in col){
        if(!skip.includes(c)){
            console[c] = col[c];
        }
    }
    console.col = col.colour;
}
init();

export default col;