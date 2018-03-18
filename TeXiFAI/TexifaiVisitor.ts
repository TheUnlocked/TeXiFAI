import { FAILangVisitor } from "./grammar/FAILangVisitor";
import { CallsContext, CallContext, DefContext, LambdaContext, FparamsContext, CallparamsContext, ArgContext, NameContext, ParamContext, ExpressionContext, TypeContext, TupleContext, VectorContext, PrefixContext, IndexerContext, PiecewiseContext, ConditionContext, UnionContext, EndContext, CompileUnitContext } from "./grammar/FAILangParser";
import { ParseTree } from "antlr4ts/tree/ParseTree";
import { RuleNode } from "antlr4ts/tree/RuleNode";
import { TerminalNode } from "antlr4ts/tree/TerminalNode";
import { ErrorNode } from "antlr4ts/tree/ErrorNode";

export class TexifaiVisitor implements FAILangVisitor<string> {
    visitCalls (ctx: CallsContext): string{
        return ctx.call().map(call => this.visitCall(call)).join("\0");
    }
    visitCall (ctx: CallContext): string{
        if (ctx.def()){
            return this.visitDef(ctx.def());
        }
        return this.visitExpression(ctx.expression());
    }
    visitDef (ctx: DefContext): string {
        let keywords: string = "";
        if (ctx._update && ctx._memoize)
            keywords = `\\text{${ctx._update ? "update" : ""} ${ctx._memoize ? "memo" : ""}\\;}`;
        
        let name: string = this.visitName(ctx.name());

        let params: string = "";
        if (ctx.fparams()){
            params = `(${this.visitFparams(ctx.fparams())})`;
        }

        let expression: string = "";
        if (ctx.expression()){
            expression = `= ${this.visitExpression(ctx.expression())}`;
        }

        return keywords + name + params + expression;
    }
    visitLambda (ctx: LambdaContext): string {
        let firstPart: string = "";
        
        if (ctx.param()){
            firstPart = this.visitParam(ctx.param());
        }
        else{
            firstPart = `(${ctx._memoize ? "\\text{memo}\\;" : ""}${this.visitFparams(ctx.fparams())})`;
        }

        return firstPart + "\\rightarrow" + this.visitExpression(ctx.expression());
    }
    visitFparams (ctx: FparamsContext): string {
        if (!ctx.param())
            return "";
        return ctx.param().map(p => this.visitParam(p)).join(', ') + (ctx._elipsis ? "..." : "");
    }
    visitCallparams (ctx: CallparamsContext): string {
        return ctx.arg().map(a => this.visitArg(a)).join(', ');
    }
    visitArg (ctx: ArgContext): string {
        return `${this.visitExpression(ctx.expression())}${ctx._elipsis ? ctx._elipsis.text : ""}`;
    }
    visitName (ctx: NameContext): string {
        if (/\d/.test(ctx.text))
            return `\\text{${ctx.text}}`
        return `\\textit{${ctx.text}}`;
    }
    visitParam (ctx: ParamContext): string {
        if (/\d/.test(ctx.text))
            return `\\text{${ctx.text}}`
        return `\\textit{${ctx.text}}`;
    }
    visitExpression (ctx: ExpressionContext): string {
        if (ctx.callparams()){
            let params: string = this.visitCallparams(ctx.callparams());
            if (params.includes('\\\\ '))
                return `${this.visitExpression(ctx.expression()[0])}\\begin{pmatrix}${params}\\end{pmatrix}`;
            return `${this.visitExpression(ctx.expression()[0])}(${params})`;
        }
        else if (ctx.prefix()){
            return this.visitPrefix(ctx.prefix()) + this.visitExpression(ctx.expression(0));
        }
        else if (ctx.indexer()){
            return this.visitExpression(ctx.expression(0)) + this.visitIndexer(ctx.indexer());
        }
        else if (ctx._op){
            return this.visitExpression(ctx.expression(0)) + ctx._op.text + this.visitExpression(ctx.expression(1));
        }
        else if (ctx.union()){
            return this.visitUnion(ctx.union());
        }
        else if (ctx.lambda()){
            return this.visitLambda(ctx.lambda());
        }
        else if (ctx.piecewise()){
            return this.visitPiecewise(ctx.piecewise());
        }
        else if (ctx.type()){
            return this.visitType(ctx.type());
        }
        else if (ctx.name()){
            return this.visitName(ctx.name());
        }
        else{
            let expr: string = this.visitExpression(ctx.expression(0));
            if (expr.includes('\\\\ '))
                return `\\begin{pmatrix}${expr}\\end{pmatrix}`;
            return `(${expr})`;
        }
    }
    visitType (ctx: TypeContext): string {
        if (ctx._t_number){
            let imaginary: boolean = ctx._t_number.text.endsWith('i');
            let num: string = ctx._t_number.text.replace('i', '').toLowerCase();
            if (num.includes('e'))
                num = num.replace('e', '\\cdot10^{') + '}'
            if (imaginary)
                num += 'i';
            return num;
        }
        else if (ctx._t_string){
            return `\\text{\`\`${ctx._t_string.text.slice(1, -1)}''}`;
        }
        else if (ctx._t_boolean){
            return `\\mathit{${ctx._t_boolean.text}}`;
        }
        else if (ctx.tuple()){
            return this.visitTuple(ctx.tuple());
        }
        else if (ctx.vector()){
            return this.visitVector(ctx.vector());
        }
        else{
            return '\\mathbf{void}';
        }
    }
    visitTuple (ctx: TupleContext): string {
        let contents: string = ctx.expression() ? ctx.expression().map(exp => this.visitExpression(exp)).join(',') : "";
        if (contents.includes('\\\\ '))
            return `\\begin{pmatrix}${contents}\\end{pmatrix}`;
        return `(${contents})`;
    }
    visitVector (ctx: VectorContext): string {
        return `<${ctx.expression().map(exp => this.visitExpression(exp)).join(',')}>`;
    }
    visitPrefix (ctx: PrefixContext): string {
        return ctx.text;
    }
    visitIndexer (ctx: IndexerContext): string {
        let left: string = ctx._l_index ? this.visitExpression(ctx._l_index) : "";
        let right: string = ctx._r_index ? this.visitExpression(ctx._r_index) : "";
        let elipsis: string = ctx._elipsis ? ctx._elipsis.text : "";
        let indexed: string = left + elipsis + right;
        if (indexed.includes('\\\\ '))
            return `\\begin{bmatrix}${indexed}\\end{bmatrix}`;
        return `[${indexed}]`;
    }
    visitPiecewise (ctx: PiecewiseContext): string {
        return `\\begin{cases}${ctx.condition().map(cond => this.visitCondition(cond)).join("\\\\ ")}\\\\ ${this.visitExpression(ctx.expression())} & \\text{otherwise;}\\end{cases}`;
    }
    visitCondition (ctx: ConditionContext): string {
        return `${this.visitExpression(ctx._expr)} & \\text{if}\\; ${this.visitExpression(ctx._cond)};`;
    }
    visitUnion (ctx: UnionContext): string {
        let contents: string = ctx.expression() ? ctx.expression().map(exp => this.visitExpression(exp)).join('|') : "";
        if (contents.includes('\\\\ '))
            return `\\begin{pmatrix}${contents}\\end{pmatrix}`;
        return `(${contents})`;
    }
    visitEnd (ctx: EndContext): string {
        return "";
    }
    visitCompileUnit (ctx: CompileUnitContext): string {
        return "";
    }
    visit(tree: ParseTree): string {
        throw new Error("Method not implemented.");
    }
    visitChildren(node: RuleNode): string {
        throw new Error("Method not implemented.");
    }
    visitTerminal(node: TerminalNode): string {
        throw new Error("Method not implemented.");
    }
    visitErrorNode(node: ErrorNode): string {
        throw new Error("Method not implemented.");
    }
}