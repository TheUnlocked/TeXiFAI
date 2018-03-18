import { ANTLRInputStream, CommonTokenStream } from 'antlr4ts';
import { FAILangLexer } from './grammar/FAILangLexer';
import { FAILangParser } from './grammar/FAILangParser';
import { FAILangListener } from './grammar/FAILangListener';
import { TexifaiVisitor } from './TexifaiVisitor';

let input = ``; // Input goes here

let inputStream = new ANTLRInputStream(input);
let lexer = new FAILangLexer(inputStream);
let tokenStream = new CommonTokenStream(lexer);
let parser = new FAILangParser(tokenStream);

let context = parser.calls();
console.log(new TexifaiVisitor().visitCalls(context));