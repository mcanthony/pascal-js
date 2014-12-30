/************************************
* scanner.js
* MIT License (c) 2014 David Leonard
* drksephy.github.io
*************************************/

'use strict';   

/**********************
* Scanner constructor *
**********************/

function Scanner(){
    this.tokens     = []
    this.curr_row   = 1
    this.curr_col   = 1 
    this.curr_token = ''
    this.curr_val   = ''; 

}

Scanner.prototype.generateToken = function(){

    if(this.curr_token){
        var token = {
            'value': this.curr_val,
            'row'  : this.curr_row,
            'col'  : this.curr_col
        }
        this.tokens.push(token);
    }

    /*
    document.getElementById('tokens').innerHTML += "<tr>";
    document.getElementById('tokens').innerHTML += "<td>" + token.value + "</td>";
    document.getElementById('tokens').innerHTML += "<td>" + token.value + "</td>";
    document.getElementById('tokens').innerHTML += "<td>" + token.row + "</td>";
    document.getElementById('tokens').innerHTML += "<td>" + token.col + "</td>";
    document.getElementById('tokens').innerHTML += "</tr>";
    */


    return; 
}

// Resets values of token
Scanner.prototype.reset = function(){
    this.curr_val = '';
    this.curr_token = ''; 
    return; 
}

// Default printer method
Scanner.prototype.printer = function(){
    console.log("Printer method");
}

// Retrieves value from table
Scanner.prototype.lookup = function(table, key){
    return table[key];
}

// Returns ascii value of character
Scanner.prototype.toAscii = function(char){
    return char.charCodeAt();
}

// Returns lowercase string
Scanner.prototype.toLower = function(char){
    return char.toLowerCase();
}

// Returns uppercase string
Scanner.prototype.toUpper = function(char){
    return char.toUpperCase();
}

// Handles whitespace character
Scanner.prototype.setSpace = function(char){
    // TODO
    return; 
}

// Handles comments 
Scanner.prototype.setComment = function(char){
    // TODO
    return;
}

// Handles numerical characters
Scanner.prototype.setDigit = function(char){
    // TODO
    return;
}

// Handles newline characters
Scanner.prototype.setLine = function(char){
    Scanner.prototype.generateToken
    return; 
}

// Main scanner function
function scan(){
    // Get input text from textarea
    var program = document.getElementById("program").value;
    document.getElementById("demo").innerHTML = program; 
    // Initalize scanner
    var scanner = new Scanner();

    // Begin scanning input text
    for(var i = 0; i < program.length; i++){
        character = scanner.toUpper(program[i]);
        ascii = scanner.toAscii(program[i]);

        if(ascii == '10'){
            // Handle case for newline character
            Scanner.setLine(ascii);
        }
        /*
        scanner.curr_col += 1;
        // Check if character is newline or space
        if(scanner.toAscii(program[i]) != '32' && scanner.toAscii(program[i]) != '10'){
            // Build up current token value
            scanner.curr_val += program[i]
        }
        console.log(scanner.curr_val);
        // Check if current token value is a keyword...
        if(scanner.toUpper(scanner.curr_val) in keywords){
            console.log("Hello")
            scanner.generateToken(scanner.lookup(keywords, scanner.toUpper(scanner.curr_val)));
            scanner.curr_val = '';
        }
        if(scanner.toAscii(program[i]) == '10'){
            scanner.curr_row += 1; 
        }
        console.log(scanner.toAscii(program[i]));
        // console.log(scanner.curr_val);
        */

    }
    console.log(scanner.tokens);

}

var keywords = {
    'BEGIN'     : 'TK_BEGIN',
    'BREAK'     : 'TK_BREAK',
    'CONST'     : 'TK_CONST',
    'DO'        : 'TK_DO',
    'DOWNTO'    : 'TK_DOWNTO',
    'ELSE'      : 'TK_ELSE',
    'END'       : 'TK_END',
    'END.'      : 'TK_END_CODE',
    'FOR'       : 'TK_FOR',
    'FUNCTION'  : 'TK_FUNCTION',
    'IDENTIFIER': 'TK_IDENTIFIER',
    'IF'        : 'TK_IF',
    'LABEL'     : 'TK_LABEL', 
    'PROGRAM'   : 'TK_PROGRAM',
    'REPEAT'    : 'TK_REPEAT',
    'STRING'    : 'TK_STRING', 
    'THEN'      : 'TK_THEN',
    'TO'        : 'TK_TO',
    'TYPE'      : 'TK_TYPE',
    'VAR'       : 'TK_VAR',
    'UNTIL'     : 'TK_UNTIL', 
    'WHILE'     : 'TK_WHILE',
    'INTEGER'   : 'TK_ID_INTEGER', 
    'REAL'      : 'TK_ID_REAL',
    'CHAR'      : 'TK_ID_CHAR',
    'BOOLEAN'   : 'TK_ID_BOOLEAN',
    'OF'        : 'TK_OF'
}

var operators = {
    '+'         : 'TK_PLUS',
    '-'         : 'TK_MINUS',
    '*'         : 'TK_MULT',
    '/'         : 'TK_DIV_FLOAT',
    'DIV'       : 'TK_DIV',
    'MOD'       : 'TK_MOD',
    ':'         : 'TK_COLON',
    '='         : 'TK_EQUALS',
    ':='        : 'TK_ASSIGNMENT',
    '>'         : 'TK_GREATER',
    '<'         : 'TK_LESS',
    '>='        : 'TK_GREATER_EQUALS',
    '<='        : 'TK_LESS_EQUALS',
    '!'         : 'TK_EXCLAMATION',
    '!='        : 'TK_NOT_EQUALS',
    'AND'       : 'TK_AND',
    'XOR'       : 'TK_XOR',
    'OR'        : 'TK_OR',
    'NOT'       : 'TK_NOT',
    ';'         : 'TK_SEMICOLON',
    '('         : 'TK_OPEN_PARENTHESIS',
    ')'         : 'TK_CLOSE_PARENTHESIS',
    '\''        : 'TK_QUOTE',
    '(*'        : 'TK_BEGIN_COMMENT',
    '*)'        : 'TK_END_COMMENT',
    ','         : 'TK_COMMA',
    '~'         : 'TK_RANGE',
    'ARRAY'     : 'TK_ARRAY',
    '['         : 'TK_OPEN_BRACKET',
    ']'         : 'TK_CLOSE_BRACKET'
}

var SYSTEM = {
    'WRITELN'   : 'TK_WRITELN',
    'ABS'       : 'TK_ABS'
}