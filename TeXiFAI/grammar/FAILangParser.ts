// Generated from grammar/FAILang.g4 by ANTLR 4.6-SNAPSHOT


import { ATN } from 'antlr4ts/atn/ATN';
import { ATNDeserializer } from 'antlr4ts/atn/ATNDeserializer';
import { FailedPredicateException } from 'antlr4ts/FailedPredicateException';
import { NotNull } from 'antlr4ts/Decorators';
import { NoViableAltException } from 'antlr4ts/NoViableAltException';
import { Override } from 'antlr4ts/Decorators';
import { Parser } from 'antlr4ts/Parser';
import { ParserRuleContext } from 'antlr4ts/ParserRuleContext';
import { ParserATNSimulator } from 'antlr4ts/atn/ParserATNSimulator';
import { ParseTreeListener } from 'antlr4ts/tree/ParseTreeListener';
import { ParseTreeVisitor } from 'antlr4ts/tree/ParseTreeVisitor';
import { RecognitionException } from 'antlr4ts/RecognitionException';
import { RuleContext } from 'antlr4ts/RuleContext';
import { RuleVersion } from 'antlr4ts/RuleVersion';
import { TerminalNode } from 'antlr4ts/tree/TerminalNode';
import { Token } from 'antlr4ts/Token';
import { TokenStream } from 'antlr4ts/TokenStream';
import { Vocabulary } from 'antlr4ts/Vocabulary';
import { VocabularyImpl } from 'antlr4ts/VocabularyImpl';

import * as Utils from 'antlr4ts/misc/Utils';

import { FAILangListener } from './FAILangListener';
import { FAILangVisitor } from './FAILangVisitor';


export class FAILangParser extends Parser {
	public static readonly PLUS=1;
	public static readonly SUBTRACT=2;
	public static readonly MULTIPLY=3;
	public static readonly DIVIDE=4;
	public static readonly MODULO=5;
	public static readonly EXPONENT=6;
	public static readonly EQ=7;
	public static readonly NE=8;
	public static readonly R_ARR=9;
	public static readonly L_ARR=10;
	public static readonly GE=11;
	public static readonly LE=12;
	public static readonly NOT=13;
	public static readonly L_PAREN=14;
	public static readonly R_PAREN=15;
	public static readonly L_CURL=16;
	public static readonly R_CURL=17;
	public static readonly L_BRAC=18;
	public static readonly R_BRAC=19;
	public static readonly COMMA=20;
	public static readonly COLON=21;
	public static readonly SEMI_COLON=22;
	public static readonly VERT_LINE=23;
	public static readonly ELIPSIS=24;
	public static readonly ARROW=25;
	public static readonly NUMBER=26;
	public static readonly STRING=27;
	public static readonly BOOLEAN=28;
	public static readonly VOID=29;
	public static readonly LAMBDA=30;
	public static readonly UPDATE=31;
	public static readonly MEMO=32;
	public static readonly IF=33;
	public static readonly OTHERWISE=34;
	public static readonly NAME=35;
	public static readonly COMMENT=36;
	public static readonly MULTILINE_COMMENT=37;
	public static readonly WS=38;
	public static readonly RULE_calls = 0;
	public static readonly RULE_call = 1;
	public static readonly RULE_def = 2;
	public static readonly RULE_lambda = 3;
	public static readonly RULE_fparams = 4;
	public static readonly RULE_callparams = 5;
	public static readonly RULE_arg = 6;
	public static readonly RULE_name = 7;
	public static readonly RULE_param = 8;
	public static readonly RULE_expression = 9;
	public static readonly RULE_type = 10;
	public static readonly RULE_tuple = 11;
	public static readonly RULE_vector = 12;
	public static readonly RULE_prefix = 13;
	public static readonly RULE_indexer = 14;
	public static readonly RULE_piecewise = 15;
	public static readonly RULE_condition = 16;
	public static readonly RULE_union = 17;
	public static readonly RULE_end = 18;
	public static readonly RULE_compileUnit = 19;
	public static readonly ruleNames: string[] = [
		"calls", "call", "def", "lambda", "fparams", "callparams", "arg", "name", 
		"param", "expression", "type", "tuple", "vector", "prefix", "indexer", 
		"piecewise", "condition", "union", "end", "compileUnit"
	];

	private static readonly _LITERAL_NAMES: (string | undefined)[] = [
		undefined, "'+'", "'-'", "'*'", "'/'", "'%'", "'^'", "'='", "'~='", "'>'", 
		"'<'", "'>='", "'<='", "'~'", "'('", "')'", "'{'", "'}'", "'['", "']'", 
		"','", "':'", "';'", "'|'", undefined, "'->'", undefined, undefined, undefined, 
		"'void'", "'lambda'", "'update'", "'memo'", "'if'", "'otherwise'"
	];
	private static readonly _SYMBOLIC_NAMES: (string | undefined)[] = [
		undefined, "PLUS", "SUBTRACT", "MULTIPLY", "DIVIDE", "MODULO", "EXPONENT", 
		"EQ", "NE", "R_ARR", "L_ARR", "GE", "LE", "NOT", "L_PAREN", "R_PAREN", 
		"L_CURL", "R_CURL", "L_BRAC", "R_BRAC", "COMMA", "COLON", "SEMI_COLON", 
		"VERT_LINE", "ELIPSIS", "ARROW", "NUMBER", "STRING", "BOOLEAN", "VOID", 
		"LAMBDA", "UPDATE", "MEMO", "IF", "OTHERWISE", "NAME", "COMMENT", "MULTILINE_COMMENT", 
		"WS"
	];
	public static readonly VOCABULARY: Vocabulary = new VocabularyImpl(FAILangParser._LITERAL_NAMES, FAILangParser._SYMBOLIC_NAMES, []);

	@Override
	@NotNull
	public get vocabulary(): Vocabulary {
		return FAILangParser.VOCABULARY;
	}

	@Override
	public get grammarFileName(): string { return "FAILang.g4"; }

	@Override
	public get ruleNames(): string[] { return FAILangParser.ruleNames; }

	@Override
	public get serializedATN(): string { return FAILangParser._serializedATN; }

	constructor(input: TokenStream) {
		super(input);
		this._interp = new ParserATNSimulator(FAILangParser._ATN, this);
	}
	@RuleVersion(0)
	public calls(): CallsContext {
		let _localctx: CallsContext = new CallsContext(this._ctx, this.state);
		this.enterRule(_localctx, 0, FAILangParser.RULE_calls);
		let _la: number;
		try {
			this.state = 50;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FAILangParser.SUBTRACT:
			case FAILangParser.L_ARR:
			case FAILangParser.NOT:
			case FAILangParser.L_PAREN:
			case FAILangParser.L_CURL:
			case FAILangParser.NUMBER:
			case FAILangParser.STRING:
			case FAILangParser.BOOLEAN:
			case FAILangParser.VOID:
			case FAILangParser.UPDATE:
			case FAILangParser.MEMO:
			case FAILangParser.NAME:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 43; 
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				do {
					{
					{
					this.state = 40;
					this.call();
					this.state = 41;
					this.end();
					}
					}
					this.state = 45; 
					this._errHandler.sync(this);
					_la = this._input.LA(1);
				} while ( (((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FAILangParser.SUBTRACT) | (1 << FAILangParser.L_ARR) | (1 << FAILangParser.NOT) | (1 << FAILangParser.L_PAREN) | (1 << FAILangParser.L_CURL) | (1 << FAILangParser.NUMBER) | (1 << FAILangParser.STRING) | (1 << FAILangParser.BOOLEAN) | (1 << FAILangParser.VOID) | (1 << FAILangParser.UPDATE))) !== 0) || _la===FAILangParser.MEMO || _la===FAILangParser.NAME );
				this.state = 47;
				this.compileUnit();
				}
				break;
			case FAILangParser.EOF:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 49;
				this.compileUnit();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public call(): CallContext {
		let _localctx: CallContext = new CallContext(this._ctx, this.state);
		this.enterRule(_localctx, 2, FAILangParser.RULE_call);
		try {
			this.state = 54;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,2,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 52;
				this.def();
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 53;
				this.expression(0);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public def(): DefContext {
		let _localctx: DefContext = new DefContext(this._ctx, this.state);
		this.enterRule(_localctx, 4, FAILangParser.RULE_def);
		let _la: number;
		try {
			this.state = 79;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,6,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 57;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===FAILangParser.UPDATE) {
					{
					this.state = 56;
					_localctx._update = this.match(FAILangParser.UPDATE);
					}
				}

				this.state = 60;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===FAILangParser.MEMO) {
					{
					this.state = 59;
					_localctx._memoize = this.match(FAILangParser.MEMO);
					}
				}

				this.state = 62;
				this.name();
				this.state = 63;
				this.match(FAILangParser.L_PAREN);
				this.state = 64;
				this.fparams();
				this.state = 65;
				this.match(FAILangParser.R_PAREN);
				this.state = 66;
				this.match(FAILangParser.EQ);
				this.state = 67;
				this.expression(0);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 70;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===FAILangParser.UPDATE) {
					{
					this.state = 69;
					_localctx._update = this.match(FAILangParser.UPDATE);
					}
				}

				this.state = 72;
				this.name();
				this.state = 73;
				this.match(FAILangParser.EQ);
				this.state = 74;
				this.expression(0);
				}
				break;

			case 3:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 76;
				_localctx._update = this.match(FAILangParser.UPDATE);
				this.state = 77;
				_localctx._memoize = this.match(FAILangParser.MEMO);
				this.state = 78;
				this.name();
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public lambda(): LambdaContext {
		let _localctx: LambdaContext = new LambdaContext(this._ctx, this.state);
		this.enterRule(_localctx, 6, FAILangParser.RULE_lambda);
		let _la: number;
		try {
			this.state = 97;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FAILangParser.L_PAREN:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 81;
				this.match(FAILangParser.L_PAREN);
				this.state = 83;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===FAILangParser.MEMO) {
					{
					this.state = 82;
					_localctx._memoize = this.match(FAILangParser.MEMO);
					}
				}

				this.state = 85;
				this.fparams();
				this.state = 86;
				this.match(FAILangParser.R_PAREN);
				this.state = 87;
				this.match(FAILangParser.ARROW);
				this.state = 88;
				this.expression(0);
				}
				break;
			case FAILangParser.NAME:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 90;
				this.param();
				this.state = 92;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===FAILangParser.ELIPSIS) {
					{
					this.state = 91;
					_localctx._elipsis = this.match(FAILangParser.ELIPSIS);
					}
				}

				this.state = 94;
				this.match(FAILangParser.ARROW);
				this.state = 95;
				this.expression(0);
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public fparams(): FparamsContext {
		let _localctx: FparamsContext = new FparamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 8, FAILangParser.RULE_fparams);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 111;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===FAILangParser.NAME) {
				{
				this.state = 104;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,10,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 99;
						this.param();
						this.state = 100;
						this.match(FAILangParser.COMMA);
						}
						} 
					}
					this.state = 106;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,10,this._ctx);
				}
				this.state = 107;
				this.param();
				this.state = 109;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===FAILangParser.ELIPSIS) {
					{
					this.state = 108;
					_localctx._elipsis = this.match(FAILangParser.ELIPSIS);
					}
				}

				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public callparams(): CallparamsContext {
		let _localctx: CallparamsContext = new CallparamsContext(this._ctx, this.state);
		this.enterRule(_localctx, 10, FAILangParser.RULE_callparams);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 122;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FAILangParser.SUBTRACT) | (1 << FAILangParser.L_ARR) | (1 << FAILangParser.NOT) | (1 << FAILangParser.L_PAREN) | (1 << FAILangParser.L_CURL) | (1 << FAILangParser.NUMBER) | (1 << FAILangParser.STRING) | (1 << FAILangParser.BOOLEAN) | (1 << FAILangParser.VOID))) !== 0) || _la===FAILangParser.NAME) {
				{
				this.state = 118;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 113;
						this.arg();
						this.state = 114;
						this.match(FAILangParser.COMMA);
						}
						} 
					}
					this.state = 120;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,13,this._ctx);
				}
				this.state = 121;
				this.arg();
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public arg(): ArgContext {
		let _localctx: ArgContext = new ArgContext(this._ctx, this.state);
		this.enterRule(_localctx, 12, FAILangParser.RULE_arg);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 124;
			this.expression(0);
			this.state = 126;
			this._errHandler.sync(this);
			_la = this._input.LA(1);
			if (_la===FAILangParser.ELIPSIS) {
				{
				this.state = 125;
				_localctx._elipsis = this.match(FAILangParser.ELIPSIS);
				}
			}

			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public name(): NameContext {
		let _localctx: NameContext = new NameContext(this._ctx, this.state);
		this.enterRule(_localctx, 14, FAILangParser.RULE_name);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 128;
			this.match(FAILangParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public param(): ParamContext {
		let _localctx: ParamContext = new ParamContext(this._ctx, this.state);
		this.enterRule(_localctx, 16, FAILangParser.RULE_param);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 130;
			this.match(FAILangParser.NAME);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public expression(): ExpressionContext;
	public expression(_p: number): ExpressionContext;
	@RuleVersion(0)
	public expression(_p?: number): ExpressionContext {
		if (_p === undefined) {
			_p = 0;
		}

		let _parentctx: ParserRuleContext = this._ctx;
		let _parentState: number = this.state;
		let _localctx: ExpressionContext = new ExpressionContext(this._ctx, _parentState);
		let _prevctx: ExpressionContext = _localctx;
		let _startState: number = 18;
		this.enterRecursionRule(_localctx, 18, FAILangParser.RULE_expression, _p);
		let _la: number;
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 145;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,16,this._ctx) ) {
			case 1:
				{
				this.state = 133;
				this.match(FAILangParser.L_PAREN);
				this.state = 134;
				this.expression(0);
				this.state = 135;
				this.match(FAILangParser.R_PAREN);
				}
				break;

			case 2:
				{
				this.state = 137;
				this.union();
				}
				break;

			case 3:
				{
				this.state = 138;
				this.prefix();
				this.state = 139;
				this.expression(10);
				}
				break;

			case 4:
				{
				this.state = 141;
				this.lambda();
				}
				break;

			case 5:
				{
				this.state = 142;
				this.piecewise();
				}
				break;

			case 6:
				{
				this.state = 143;
				this.type();
				}
				break;

			case 7:
				{
				this.state = 144;
				this.name();
				}
				break;
			}
			this._ctx._stop = this._input.tryLT(-1);
			this.state = 168;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,18,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					if ( this._parseListeners!=null ) this.triggerExitRuleEvent();
					_prevctx = _localctx;
					{
					this.state = 166;
					this._errHandler.sync(this);
					switch ( this.interpreter.adaptivePredict(this._input,17,this._ctx) ) {
					case 1:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FAILangParser.RULE_expression);
						this.state = 147;
						if (!(this.precpred(this._ctx, 8))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 8)");
						this.state = 148;
						_localctx._op = this.match(FAILangParser.EXPONENT);
						this.state = 149;
						this.expression(8);
						}
						break;

					case 2:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FAILangParser.RULE_expression);
						this.state = 150;
						if (!(this.precpred(this._ctx, 7))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 7)");
						this.state = 151;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FAILangParser.MULTIPLY) | (1 << FAILangParser.DIVIDE) | (1 << FAILangParser.MODULO))) !== 0)) ) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 152;
						this.expression(8);
						}
						break;

					case 3:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FAILangParser.RULE_expression);
						this.state = 153;
						if (!(this.precpred(this._ctx, 6))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 6)");
						this.state = 154;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !(_la===FAILangParser.PLUS || _la===FAILangParser.SUBTRACT) ) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 155;
						this.expression(7);
						}
						break;

					case 4:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FAILangParser.RULE_expression);
						this.state = 156;
						if (!(this.precpred(this._ctx, 5))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 5)");
						this.state = 157;
						_localctx._op = this._input.LT(1);
						_la = this._input.LA(1);
						if ( !((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FAILangParser.EQ) | (1 << FAILangParser.NE) | (1 << FAILangParser.R_ARR) | (1 << FAILangParser.L_ARR) | (1 << FAILangParser.GE) | (1 << FAILangParser.LE))) !== 0)) ) {
							_localctx._op = this._errHandler.recoverInline(this);
						} else {
							if (this._input.LA(1) === Token.EOF) {
								this.matchedEOF = true;
							}

							this._errHandler.reportMatch(this);
							this.consume();
						}
						this.state = 158;
						this.expression(6);
						}
						break;

					case 5:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FAILangParser.RULE_expression);
						this.state = 159;
						if (!(this.precpred(this._ctx, 11))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 11)");
						this.state = 160;
						this.match(FAILangParser.L_PAREN);
						this.state = 161;
						this.callparams();
						this.state = 162;
						this.match(FAILangParser.R_PAREN);
						}
						break;

					case 6:
						{
						_localctx = new ExpressionContext(_parentctx, _parentState);
						this.pushNewRecursionContext(_localctx, _startState, FAILangParser.RULE_expression);
						this.state = 164;
						if (!(this.precpred(this._ctx, 9))) throw new FailedPredicateException(this, "this.precpred(this._ctx, 9)");
						this.state = 165;
						this.indexer();
						}
						break;
					}
					} 
				}
				this.state = 170;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,18,this._ctx);
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.unrollRecursionContexts(_parentctx);
		}
		return _localctx;
	}
	@RuleVersion(0)
	public type(): TypeContext {
		let _localctx: TypeContext = new TypeContext(this._ctx, this.state);
		this.enterRule(_localctx, 20, FAILangParser.RULE_type);
		try {
			this.state = 177;
			this._errHandler.sync(this);
			switch (this._input.LA(1)) {
			case FAILangParser.NUMBER:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 171;
				_localctx._t_number = this.match(FAILangParser.NUMBER);
				}
				break;
			case FAILangParser.STRING:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 172;
				_localctx._t_string = this.match(FAILangParser.STRING);
				}
				break;
			case FAILangParser.BOOLEAN:
				this.enterOuterAlt(_localctx, 3);
				{
				this.state = 173;
				_localctx._t_boolean = this.match(FAILangParser.BOOLEAN);
				}
				break;
			case FAILangParser.VOID:
				this.enterOuterAlt(_localctx, 4);
				{
				this.state = 174;
				_localctx._t_void = this.match(FAILangParser.VOID);
				}
				break;
			case FAILangParser.L_PAREN:
				this.enterOuterAlt(_localctx, 5);
				{
				this.state = 175;
				this.tuple();
				}
				break;
			case FAILangParser.L_ARR:
				this.enterOuterAlt(_localctx, 6);
				{
				this.state = 176;
				this.vector();
				}
				break;
			default:
				throw new NoViableAltException(this);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public tuple(): TupleContext {
		let _localctx: TupleContext = new TupleContext(this._ctx, this.state);
		this.enterRule(_localctx, 22, FAILangParser.RULE_tuple);
		let _la: number;
		try {
			let _alt: number;
			this.state = 197;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,22,this._ctx) ) {
			case 1:
				this.enterOuterAlt(_localctx, 1);
				{
				this.state = 179;
				this.match(FAILangParser.L_PAREN);
				this.state = 185;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,20,this._ctx);
				while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
					if ( _alt===1 ) {
						{
						{
						this.state = 180;
						this.expression(0);
						this.state = 181;
						this.match(FAILangParser.COMMA);
						}
						} 
					}
					this.state = 187;
					this._errHandler.sync(this);
					_alt = this.interpreter.adaptivePredict(this._input,20,this._ctx);
				}
				this.state = 188;
				this.expression(0);
				this.state = 190;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===FAILangParser.COMMA) {
					{
					this.state = 189;
					this.match(FAILangParser.COMMA);
					}
				}

				this.state = 192;
				this.match(FAILangParser.R_PAREN);
				}
				break;

			case 2:
				this.enterOuterAlt(_localctx, 2);
				{
				this.state = 194;
				this.match(FAILangParser.L_PAREN);
				this.state = 195;
				this.match(FAILangParser.COMMA);
				this.state = 196;
				this.match(FAILangParser.R_PAREN);
				}
				break;
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public vector(): VectorContext {
		let _localctx: VectorContext = new VectorContext(this._ctx, this.state);
		this.enterRule(_localctx, 24, FAILangParser.RULE_vector);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 199;
			this.match(FAILangParser.L_ARR);
			this.state = 205;
			this._errHandler.sync(this);
			_alt = this.interpreter.adaptivePredict(this._input,23,this._ctx);
			while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER ) {
				if ( _alt===1 ) {
					{
					{
					this.state = 200;
					this.expression(0);
					this.state = 201;
					this.match(FAILangParser.COMMA);
					}
					} 
				}
				this.state = 207;
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,23,this._ctx);
			}
			this.state = 208;
			this.expression(0);
			this.state = 209;
			this.match(FAILangParser.R_ARR);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public prefix(): PrefixContext {
		let _localctx: PrefixContext = new PrefixContext(this._ctx, this.state);
		this.enterRule(_localctx, 26, FAILangParser.RULE_prefix);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 211;
			_la = this._input.LA(1);
			if ( !(_la===FAILangParser.SUBTRACT || _la===FAILangParser.NOT) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public indexer(): IndexerContext {
		let _localctx: IndexerContext = new IndexerContext(this._ctx, this.state);
		this.enterRule(_localctx, 28, FAILangParser.RULE_indexer);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 213;
			this.match(FAILangParser.L_BRAC);
			this.state = 228;
			this._errHandler.sync(this);
			switch ( this.interpreter.adaptivePredict(this._input,28,this._ctx) ) {
			case 1:
				{
				this.state = 214;
				_localctx._l_index = this.expression(0);
				this.state = 219;
				this._errHandler.sync(this);
				_la = this._input.LA(1);
				if (_la===FAILangParser.ELIPSIS) {
					{
					this.state = 215;
					_localctx._elipsis = this.match(FAILangParser.ELIPSIS);
					this.state = 217;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FAILangParser.SUBTRACT) | (1 << FAILangParser.L_ARR) | (1 << FAILangParser.NOT) | (1 << FAILangParser.L_PAREN) | (1 << FAILangParser.L_CURL) | (1 << FAILangParser.NUMBER) | (1 << FAILangParser.STRING) | (1 << FAILangParser.BOOLEAN) | (1 << FAILangParser.VOID))) !== 0) || _la===FAILangParser.NAME) {
						{
						this.state = 216;
						_localctx._r_index = this.expression(0);
						}
					}

					}
				}

				}
				break;

			case 2:
				{
				this.state = 225;
				this._errHandler.sync(this);
				switch ( this.interpreter.adaptivePredict(this._input,27,this._ctx) ) {
				case 1:
					{
					this.state = 222;
					this._errHandler.sync(this);
					_la = this._input.LA(1);
					if ((((_la) & ~0x1F) === 0 && ((1 << _la) & ((1 << FAILangParser.SUBTRACT) | (1 << FAILangParser.L_ARR) | (1 << FAILangParser.NOT) | (1 << FAILangParser.L_PAREN) | (1 << FAILangParser.L_CURL) | (1 << FAILangParser.NUMBER) | (1 << FAILangParser.STRING) | (1 << FAILangParser.BOOLEAN) | (1 << FAILangParser.VOID))) !== 0) || _la===FAILangParser.NAME) {
						{
						this.state = 221;
						_localctx._l_index = this.expression(0);
						}
					}

					this.state = 224;
					_localctx._elipsis = this.match(FAILangParser.ELIPSIS);
					}
					break;
				}
				this.state = 227;
				_localctx._r_index = this.expression(0);
				}
				break;
			}
			this.state = 230;
			this.match(FAILangParser.R_BRAC);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public piecewise(): PiecewiseContext {
		let _localctx: PiecewiseContext = new PiecewiseContext(this._ctx, this.state);
		this.enterRule(_localctx, 30, FAILangParser.RULE_piecewise);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 232;
			this.match(FAILangParser.L_CURL);
			this.state = 234; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 233;
					this.condition();
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 236; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,29,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			this.state = 238;
			this.expression(0);
			this.state = 239;
			this.match(FAILangParser.OTHERWISE);
			this.state = 240;
			this.match(FAILangParser.SEMI_COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public condition(): ConditionContext {
		let _localctx: ConditionContext = new ConditionContext(this._ctx, this.state);
		this.enterRule(_localctx, 32, FAILangParser.RULE_condition);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 242;
			_localctx._expr = this.expression(0);
			this.state = 243;
			this.match(FAILangParser.IF);
			this.state = 244;
			_localctx._cond = this.expression(0);
			this.state = 245;
			this.match(FAILangParser.SEMI_COLON);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public union(): UnionContext {
		let _localctx: UnionContext = new UnionContext(this._ctx, this.state);
		this.enterRule(_localctx, 34, FAILangParser.RULE_union);
		try {
			let _alt: number;
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 247;
			this.match(FAILangParser.L_PAREN);
			this.state = 251; 
			this._errHandler.sync(this);
			_alt = 1;
			do {
				switch (_alt) {
				case 1:
					{
					{
					this.state = 248;
					this.expression(0);
					this.state = 249;
					this.match(FAILangParser.VERT_LINE);
					}
					}
					break;
				default:
					throw new NoViableAltException(this);
				}
				this.state = 253; 
				this._errHandler.sync(this);
				_alt = this.interpreter.adaptivePredict(this._input,30,this._ctx);
			} while ( _alt!==2 && _alt!==ATN.INVALID_ALT_NUMBER );
			this.state = 255;
			this.expression(0);
			this.state = 256;
			this.match(FAILangParser.R_PAREN);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public end(): EndContext {
		let _localctx: EndContext = new EndContext(this._ctx, this.state);
		this.enterRule(_localctx, 36, FAILangParser.RULE_end);
		let _la: number;
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 258;
			_la = this._input.LA(1);
			if ( !(_la===FAILangParser.EOF || _la===FAILangParser.SEMI_COLON) ) {
			this._errHandler.recoverInline(this);
			} else {
				if (this._input.LA(1) === Token.EOF) {
					this.matchedEOF = true;
				}

				this._errHandler.reportMatch(this);
				this.consume();
			}
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}
	@RuleVersion(0)
	public compileUnit(): CompileUnitContext {
		let _localctx: CompileUnitContext = new CompileUnitContext(this._ctx, this.state);
		this.enterRule(_localctx, 38, FAILangParser.RULE_compileUnit);
		try {
			this.enterOuterAlt(_localctx, 1);
			{
			this.state = 260;
			this.match(FAILangParser.EOF);
			}
		}
		catch (re) {
			if (re instanceof RecognitionException) {
				_localctx.exception = re;
				this._errHandler.reportError(this, re);
				this._errHandler.recover(this, re);
			} else {
				throw re;
			}
		}
		finally {
			this.exitRule();
		}
		return _localctx;
	}

	public sempred(_localctx: RuleContext, ruleIndex: number, predIndex: number): boolean {
		switch (ruleIndex) {
		case 9:
			return this.expression_sempred(_localctx as ExpressionContext, predIndex);
		}
		return true;
	}
	private expression_sempred(_localctx: ExpressionContext, predIndex: number): boolean {
		switch (predIndex) {
		case 0:
			return this.precpred(this._ctx, 8);

		case 1:
			return this.precpred(this._ctx, 7);

		case 2:
			return this.precpred(this._ctx, 6);

		case 3:
			return this.precpred(this._ctx, 5);

		case 4:
			return this.precpred(this._ctx, 11);

		case 5:
			return this.precpred(this._ctx, 9);
		}
		return true;
	}

	public static readonly _serializedATN: string =
		"\x03\uAF6F\u8320\u479D\uB75C\u4880\u1605\u191C\uAB37\x03(\u0109\x04\x02"+
		"\t\x02\x04\x03\t\x03\x04\x04\t\x04\x04\x05\t\x05\x04\x06\t\x06\x04\x07"+
		"\t\x07\x04\b\t\b\x04\t\t\t\x04\n\t\n\x04\v\t\v\x04\f\t\f\x04\r\t\r\x04"+
		"\x0E\t\x0E\x04\x0F\t\x0F\x04\x10\t\x10\x04\x11\t\x11\x04\x12\t\x12\x04"+
		"\x13\t\x13\x04\x14\t\x14\x04\x15\t\x15\x03\x02\x03\x02\x03\x02\x06\x02"+
		".\n\x02\r\x02\x0E\x02/\x03\x02\x03\x02\x03\x02\x05\x025\n\x02\x03\x03"+
		"\x03\x03\x05\x039\n\x03\x03\x04\x05\x04<\n\x04\x03\x04\x05\x04?\n\x04"+
		"\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04"+
		"I\n\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x03\x04\x05\x04"+
		"R\n\x04\x03\x05\x03\x05\x05\x05V\n\x05\x03\x05\x03\x05\x03\x05\x03\x05"+
		"\x03\x05\x03\x05\x03\x05\x05\x05_\n\x05\x03\x05\x03\x05\x03\x05\x05\x05"+
		"d\n\x05\x03\x06\x03\x06\x03\x06\x07\x06i\n\x06\f\x06\x0E\x06l\v\x06\x03"+
		"\x06\x03\x06\x05\x06p\n\x06\x05\x06r\n\x06\x03\x07\x03\x07\x03\x07\x07"+
		"\x07w\n\x07\f\x07\x0E\x07z\v\x07\x03\x07\x05\x07}\n\x07\x03\b\x03\b\x05"+
		"\b\x81\n\b\x03\t\x03\t\x03\n\x03\n\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v"+
		"\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x05\v\x94\n\v\x03\v\x03\v\x03"+
		"\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03\v\x03"+
		"\v\x03\v\x03\v\x03\v\x03\v\x07\v\xA9\n\v\f\v\x0E\v\xAC\v\v\x03\f\x03\f"+
		"\x03\f\x03\f\x03\f\x03\f\x05\f\xB4\n\f\x03\r\x03\r\x03\r\x03\r\x07\r\xBA"+
		"\n\r\f\r\x0E\r\xBD\v\r\x03\r\x03\r\x05\r\xC1\n\r\x03\r\x03\r\x03\r\x03"+
		"\r\x03\r\x05\r\xC8\n\r\x03\x0E\x03\x0E\x03\x0E\x03\x0E\x07\x0E\xCE\n\x0E"+
		"\f\x0E\x0E\x0E\xD1\v\x0E\x03\x0E\x03\x0E\x03\x0E\x03\x0F\x03\x0F\x03\x10"+
		"\x03\x10\x03\x10\x03\x10\x05\x10\xDC\n\x10\x05\x10\xDE\n\x10\x03\x10\x05"+
		"\x10\xE1\n\x10\x03\x10\x05\x10\xE4\n\x10\x03\x10\x05\x10\xE7\n\x10\x03"+
		"\x10\x03\x10\x03\x11\x03\x11\x06\x11\xED\n\x11\r\x11\x0E\x11\xEE\x03\x11"+
		"\x03\x11\x03\x11\x03\x11\x03\x12\x03\x12\x03\x12\x03\x12\x03\x12\x03\x13"+
		"\x03\x13\x03\x13\x03\x13\x06\x13\xFE\n\x13\r\x13\x0E\x13\xFF\x03\x13\x03"+
		"\x13\x03\x13\x03\x14\x03\x14\x03\x15\x03\x15\x03\x15\x02\x02\x03\x14\x16"+
		"\x02\x02\x04\x02\x06\x02\b\x02\n\x02\f\x02\x0E\x02\x10\x02\x12\x02\x14"+
		"\x02\x16\x02\x18\x02\x1A\x02\x1C\x02\x1E\x02 \x02\"\x02$\x02&\x02(\x02"+
		"\x02\x07\x03\x02\x05\x07\x03\x02\x03\x04\x03\x02\t\x0E\x04\x02\x04\x04"+
		"\x0F\x0F\x03\x03\x18\x18\u0121\x024\x03\x02\x02\x02\x048\x03\x02\x02\x02"+
		"\x06Q\x03\x02\x02\x02\bc\x03\x02\x02\x02\nq\x03\x02\x02\x02\f|\x03\x02"+
		"\x02\x02\x0E~\x03\x02\x02\x02\x10\x82\x03\x02\x02\x02\x12\x84\x03\x02"+
		"\x02\x02\x14\x93\x03\x02\x02\x02\x16\xB3\x03\x02\x02\x02\x18\xC7\x03\x02"+
		"\x02\x02\x1A\xC9\x03\x02\x02\x02\x1C\xD5\x03\x02\x02\x02\x1E\xD7\x03\x02"+
		"\x02\x02 \xEA\x03\x02\x02\x02\"\xF4\x03\x02\x02\x02$\xF9\x03\x02\x02\x02"+
		"&\u0104\x03\x02\x02\x02(\u0106\x03\x02\x02\x02*+\x05\x04\x03\x02+,\x05"+
		"&\x14\x02,.\x03\x02\x02\x02-*\x03\x02\x02\x02./\x03\x02\x02\x02/-\x03"+
		"\x02\x02\x02/0\x03\x02\x02\x0201\x03\x02\x02\x0212\x05(\x15\x0225\x03"+
		"\x02\x02\x0235\x05(\x15\x024-\x03\x02\x02\x0243\x03\x02\x02\x025\x03\x03"+
		"\x02\x02\x0269\x05\x06\x04\x0279\x05\x14\v\x0286\x03\x02\x02\x0287\x03"+
		"\x02\x02\x029\x05\x03\x02\x02\x02:<\x07!\x02\x02;:\x03\x02\x02\x02;<\x03"+
		"\x02\x02\x02<>\x03\x02\x02\x02=?\x07\"\x02\x02>=\x03\x02\x02\x02>?\x03"+
		"\x02\x02\x02?@\x03\x02\x02\x02@A\x05\x10\t\x02AB\x07\x10\x02\x02BC\x05"+
		"\n\x06\x02CD\x07\x11\x02\x02DE\x07\t\x02\x02EF\x05\x14\v\x02FR\x03\x02"+
		"\x02\x02GI\x07!\x02\x02HG\x03\x02\x02\x02HI\x03\x02\x02\x02IJ\x03\x02"+
		"\x02\x02JK\x05\x10\t\x02KL\x07\t\x02\x02LM\x05\x14\v\x02MR\x03\x02\x02"+
		"\x02NO\x07!\x02\x02OP\x07\"\x02\x02PR\x05\x10\t\x02Q;\x03\x02\x02\x02"+
		"QH\x03\x02\x02\x02QN\x03\x02\x02\x02R\x07\x03\x02\x02\x02SU\x07\x10\x02"+
		"\x02TV\x07\"\x02\x02UT\x03\x02\x02\x02UV\x03\x02\x02\x02VW\x03\x02\x02"+
		"\x02WX\x05\n\x06\x02XY\x07\x11\x02\x02YZ\x07\x1B\x02\x02Z[\x05\x14\v\x02"+
		"[d\x03\x02\x02\x02\\^\x05\x12\n\x02]_\x07\x1A\x02\x02^]\x03\x02\x02\x02"+
		"^_\x03\x02\x02\x02_`\x03\x02\x02\x02`a\x07\x1B\x02\x02ab\x05\x14\v\x02"+
		"bd\x03\x02\x02\x02cS\x03\x02\x02\x02c\\\x03\x02\x02\x02d\t\x03\x02\x02"+
		"\x02ef\x05\x12\n\x02fg\x07\x16\x02\x02gi\x03\x02\x02\x02he\x03\x02\x02"+
		"\x02il\x03\x02\x02\x02jh\x03\x02\x02\x02jk\x03\x02\x02\x02km\x03\x02\x02"+
		"\x02lj\x03\x02\x02\x02mo\x05\x12\n\x02np\x07\x1A\x02\x02on\x03\x02\x02"+
		"\x02op\x03\x02\x02\x02pr\x03\x02\x02\x02qj\x03\x02\x02\x02qr\x03\x02\x02"+
		"\x02r\v\x03\x02\x02\x02st\x05\x0E\b\x02tu\x07\x16\x02\x02uw\x03\x02\x02"+
		"\x02vs\x03\x02\x02\x02wz\x03\x02\x02\x02xv\x03\x02\x02\x02xy\x03\x02\x02"+
		"\x02y{\x03\x02\x02\x02zx\x03\x02\x02\x02{}\x05\x0E\b\x02|x\x03\x02\x02"+
		"\x02|}\x03\x02\x02\x02}\r\x03\x02\x02\x02~\x80\x05\x14\v\x02\x7F\x81\x07"+
		"\x1A\x02\x02\x80\x7F\x03\x02\x02\x02\x80\x81\x03\x02\x02\x02\x81\x0F\x03"+
		"\x02\x02\x02\x82\x83\x07%\x02\x02\x83\x11\x03\x02\x02\x02\x84\x85\x07"+
		"%\x02\x02\x85\x13\x03\x02\x02\x02\x86\x87\b\v\x01\x02\x87\x88\x07\x10"+
		"\x02\x02\x88\x89\x05\x14\v\x02\x89\x8A\x07\x11\x02\x02\x8A\x94\x03\x02"+
		"\x02\x02\x8B\x94\x05$\x13\x02\x8C\x8D\x05\x1C\x0F\x02\x8D\x8E\x05\x14"+
		"\v\f\x8E\x94\x03\x02\x02\x02\x8F\x94\x05\b\x05\x02\x90\x94\x05 \x11\x02"+
		"\x91\x94\x05\x16\f\x02\x92\x94\x05\x10\t\x02\x93\x86\x03\x02\x02\x02\x93"+
		"\x8B\x03\x02\x02\x02\x93\x8C\x03\x02\x02\x02\x93\x8F\x03\x02\x02\x02\x93"+
		"\x90\x03\x02\x02\x02\x93\x91\x03\x02\x02\x02\x93\x92\x03\x02\x02\x02\x94"+
		"\xAA\x03\x02\x02\x02\x95\x96\f\n\x02\x02\x96\x97\x07\b\x02\x02\x97\xA9"+
		"\x05\x14\v\n\x98\x99\f\t\x02\x02\x99\x9A\t\x02\x02\x02\x9A\xA9\x05\x14"+
		"\v\n\x9B\x9C\f\b\x02\x02\x9C\x9D\t\x03\x02\x02\x9D\xA9\x05\x14\v\t\x9E"+
		"\x9F\f\x07\x02\x02\x9F\xA0\t\x04\x02\x02\xA0\xA9\x05\x14\v\b\xA1\xA2\f"+
		"\r\x02\x02\xA2\xA3\x07\x10\x02\x02\xA3\xA4\x05\f\x07\x02\xA4\xA5\x07\x11"+
		"\x02\x02\xA5\xA9\x03\x02\x02\x02\xA6\xA7\f\v\x02\x02\xA7\xA9\x05\x1E\x10"+
		"\x02\xA8\x95\x03\x02\x02\x02\xA8\x98\x03\x02\x02\x02\xA8\x9B\x03\x02\x02"+
		"\x02\xA8\x9E\x03\x02\x02\x02\xA8\xA1\x03\x02\x02\x02\xA8\xA6\x03\x02\x02"+
		"\x02\xA9\xAC\x03\x02\x02\x02\xAA\xA8\x03\x02\x02\x02\xAA\xAB\x03\x02\x02"+
		"\x02\xAB\x15\x03\x02\x02\x02\xAC\xAA\x03\x02\x02\x02\xAD\xB4\x07\x1C\x02"+
		"\x02\xAE\xB4\x07\x1D\x02\x02\xAF\xB4\x07\x1E\x02\x02\xB0\xB4\x07\x1F\x02"+
		"\x02\xB1\xB4\x05\x18\r\x02\xB2\xB4\x05\x1A\x0E\x02\xB3\xAD\x03\x02\x02"+
		"\x02\xB3\xAE\x03\x02\x02\x02\xB3\xAF\x03\x02\x02\x02\xB3\xB0\x03\x02\x02"+
		"\x02\xB3\xB1\x03\x02\x02\x02\xB3\xB2\x03\x02\x02\x02\xB4\x17\x03\x02\x02"+
		"\x02\xB5\xBB\x07\x10\x02\x02\xB6\xB7\x05\x14\v\x02\xB7\xB8\x07\x16\x02"+
		"\x02\xB8\xBA\x03\x02\x02\x02\xB9\xB6\x03\x02\x02\x02\xBA\xBD\x03\x02\x02"+
		"\x02\xBB\xB9\x03\x02\x02\x02\xBB\xBC\x03\x02\x02\x02\xBC\xBE\x03\x02\x02"+
		"\x02\xBD\xBB\x03\x02\x02\x02\xBE\xC0\x05\x14\v\x02\xBF\xC1\x07\x16\x02"+
		"\x02\xC0\xBF\x03\x02\x02\x02\xC0\xC1\x03\x02\x02\x02\xC1\xC2\x03\x02\x02"+
		"\x02\xC2\xC3\x07\x11\x02\x02\xC3\xC8\x03\x02\x02\x02\xC4\xC5\x07\x10\x02"+
		"\x02\xC5\xC6\x07\x16\x02\x02\xC6\xC8\x07\x11\x02\x02\xC7\xB5\x03\x02\x02"+
		"\x02\xC7\xC4\x03\x02\x02\x02\xC8\x19\x03\x02\x02\x02\xC9\xCF\x07\f\x02"+
		"\x02\xCA\xCB\x05\x14\v\x02\xCB\xCC\x07\x16\x02\x02\xCC\xCE\x03\x02\x02"+
		"\x02\xCD\xCA\x03\x02\x02\x02\xCE\xD1\x03\x02\x02\x02\xCF\xCD\x03\x02\x02"+
		"\x02\xCF\xD0\x03\x02\x02\x02\xD0\xD2\x03\x02\x02\x02\xD1\xCF\x03\x02\x02"+
		"\x02\xD2\xD3\x05\x14\v\x02\xD3\xD4\x07\v\x02\x02\xD4\x1B\x03\x02\x02\x02"+
		"\xD5\xD6\t\x05\x02\x02\xD6\x1D\x03\x02\x02\x02\xD7\xE6\x07\x14\x02\x02"+
		"\xD8\xDD\x05\x14\v\x02\xD9\xDB\x07\x1A\x02\x02\xDA\xDC\x05\x14\v\x02\xDB"+
		"\xDA\x03\x02\x02\x02\xDB\xDC\x03\x02\x02\x02\xDC\xDE\x03\x02\x02\x02\xDD"+
		"\xD9\x03\x02\x02\x02\xDD\xDE\x03\x02\x02\x02\xDE\xE7\x03\x02\x02\x02\xDF"+
		"\xE1\x05\x14\v\x02\xE0\xDF\x03\x02\x02\x02\xE0\xE1\x03\x02\x02\x02\xE1"+
		"\xE2\x03\x02\x02\x02\xE2\xE4\x07\x1A\x02\x02\xE3\xE0\x03\x02\x02\x02\xE3"+
		"\xE4\x03\x02\x02\x02\xE4\xE5\x03\x02\x02\x02\xE5\xE7\x05\x14\v\x02\xE6"+
		"\xD8\x03\x02\x02\x02\xE6\xE3\x03\x02\x02\x02\xE7\xE8\x03\x02\x02\x02\xE8"+
		"\xE9\x07\x15\x02\x02\xE9\x1F\x03\x02\x02\x02\xEA\xEC\x07\x12\x02\x02\xEB"+
		"\xED\x05\"\x12\x02\xEC\xEB\x03\x02\x02\x02\xED\xEE\x03\x02\x02\x02\xEE"+
		"\xEC\x03\x02\x02\x02\xEE\xEF\x03\x02\x02\x02\xEF\xF0\x03\x02\x02\x02\xF0"+
		"\xF1\x05\x14\v\x02\xF1\xF2\x07$\x02\x02\xF2\xF3\x07\x18\x02\x02\xF3!\x03"+
		"\x02\x02\x02\xF4\xF5\x05\x14\v\x02\xF5\xF6\x07#\x02\x02\xF6\xF7\x05\x14"+
		"\v\x02\xF7\xF8\x07\x18\x02\x02\xF8#\x03\x02\x02\x02\xF9\xFD\x07\x10\x02"+
		"\x02\xFA\xFB\x05\x14\v\x02\xFB\xFC\x07\x19\x02\x02\xFC\xFE\x03\x02\x02"+
		"\x02\xFD\xFA\x03\x02\x02\x02\xFE\xFF\x03\x02\x02\x02\xFF\xFD\x03\x02\x02"+
		"\x02\xFF\u0100\x03\x02\x02\x02\u0100\u0101\x03\x02\x02\x02\u0101\u0102"+
		"\x05\x14\v\x02\u0102\u0103\x07\x11\x02\x02\u0103%\x03\x02\x02\x02\u0104"+
		"\u0105\t\x06\x02\x02\u0105\'\x03\x02\x02\x02\u0106\u0107\x07\x02\x02\x03"+
		"\u0107)\x03\x02\x02\x02!/48;>HQU^cjoqx|\x80\x93\xA8\xAA\xB3\xBB\xC0\xC7"+
		"\xCF\xDB\xDD\xE0\xE3\xE6\xEE\xFF";
	public static __ATN: ATN;
	public static get _ATN(): ATN {
		if (!FAILangParser.__ATN) {
			FAILangParser.__ATN = new ATNDeserializer().deserialize(Utils.toCharArray(FAILangParser._serializedATN));
		}

		return FAILangParser.__ATN;
	}

}

export class CallsContext extends ParserRuleContext {
	public compileUnit(): CompileUnitContext {
		return this.getRuleContext(0, CompileUnitContext);
	}
	public call(): CallContext[];
	public call(i: number): CallContext;
	public call(i?: number): CallContext | CallContext[] {
		if (i === undefined) {
			return this.getRuleContexts(CallContext);
		} else {
			return this.getRuleContext(i, CallContext);
		}
	}
	public end(): EndContext[];
	public end(i: number): EndContext;
	public end(i?: number): EndContext | EndContext[] {
		if (i === undefined) {
			return this.getRuleContexts(EndContext);
		} else {
			return this.getRuleContext(i, EndContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_calls; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterCalls) listener.enterCalls(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitCalls) listener.exitCalls(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitCalls) return visitor.visitCalls(this);
		else return visitor.visitChildren(this);
	}
}


export class CallContext extends ParserRuleContext {
	public def(): DefContext | undefined {
		return this.tryGetRuleContext(0, DefContext);
	}
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_call; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterCall) listener.enterCall(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitCall) listener.exitCall(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitCall) return visitor.visitCall(this);
		else return visitor.visitChildren(this);
	}
}


export class DefContext extends ParserRuleContext {
	public _update: Token;
	public _memoize: Token;
	public name(): NameContext {
		return this.getRuleContext(0, NameContext);
	}
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.L_PAREN, 0); }
	public fparams(): FparamsContext | undefined {
		return this.tryGetRuleContext(0, FparamsContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.R_PAREN, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.EQ, 0); }
	public expression(): ExpressionContext | undefined {
		return this.tryGetRuleContext(0, ExpressionContext);
	}
	public UPDATE(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.UPDATE, 0); }
	public MEMO(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.MEMO, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_def; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterDef) listener.enterDef(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitDef) listener.exitDef(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitDef) return visitor.visitDef(this);
		else return visitor.visitChildren(this);
	}
}


export class LambdaContext extends ParserRuleContext {
	public _memoize: Token;
	public _elipsis: Token;
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.L_PAREN, 0); }
	public fparams(): FparamsContext | undefined {
		return this.tryGetRuleContext(0, FparamsContext);
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.R_PAREN, 0); }
	public ARROW(): TerminalNode { return this.getToken(FAILangParser.ARROW, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public MEMO(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.MEMO, 0); }
	public param(): ParamContext | undefined {
		return this.tryGetRuleContext(0, ParamContext);
	}
	public ELIPSIS(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.ELIPSIS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_lambda; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterLambda) listener.enterLambda(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitLambda) listener.exitLambda(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitLambda) return visitor.visitLambda(this);
		else return visitor.visitChildren(this);
	}
}


export class FparamsContext extends ParserRuleContext {
	public _elipsis: Token;
	public param(): ParamContext[];
	public param(i: number): ParamContext;
	public param(i?: number): ParamContext | ParamContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ParamContext);
		} else {
			return this.getRuleContext(i, ParamContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FAILangParser.COMMA);
		} else {
			return this.getToken(FAILangParser.COMMA, i);
		}
	}
	public ELIPSIS(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.ELIPSIS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_fparams; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterFparams) listener.enterFparams(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitFparams) listener.exitFparams(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitFparams) return visitor.visitFparams(this);
		else return visitor.visitChildren(this);
	}
}


export class CallparamsContext extends ParserRuleContext {
	public arg(): ArgContext[];
	public arg(i: number): ArgContext;
	public arg(i?: number): ArgContext | ArgContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ArgContext);
		} else {
			return this.getRuleContext(i, ArgContext);
		}
	}
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FAILangParser.COMMA);
		} else {
			return this.getToken(FAILangParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_callparams; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterCallparams) listener.enterCallparams(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitCallparams) listener.exitCallparams(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitCallparams) return visitor.visitCallparams(this);
		else return visitor.visitChildren(this);
	}
}


export class ArgContext extends ParserRuleContext {
	public _elipsis: Token;
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public ELIPSIS(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.ELIPSIS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_arg; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterArg) listener.enterArg(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitArg) listener.exitArg(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitArg) return visitor.visitArg(this);
		else return visitor.visitChildren(this);
	}
}


export class NameContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(FAILangParser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_name; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterName) listener.enterName(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitName) listener.exitName(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitName) return visitor.visitName(this);
		else return visitor.visitChildren(this);
	}
}


export class ParamContext extends ParserRuleContext {
	public NAME(): TerminalNode { return this.getToken(FAILangParser.NAME, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_param; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterParam) listener.enterParam(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitParam) listener.exitParam(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitParam) return visitor.visitParam(this);
		else return visitor.visitChildren(this);
	}
}


export class ExpressionContext extends ParserRuleContext {
	public _op: Token;
	public L_PAREN(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.L_PAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public R_PAREN(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.R_PAREN, 0); }
	public union(): UnionContext | undefined {
		return this.tryGetRuleContext(0, UnionContext);
	}
	public callparams(): CallparamsContext | undefined {
		return this.tryGetRuleContext(0, CallparamsContext);
	}
	public prefix(): PrefixContext | undefined {
		return this.tryGetRuleContext(0, PrefixContext);
	}
	public indexer(): IndexerContext | undefined {
		return this.tryGetRuleContext(0, IndexerContext);
	}
	public EXPONENT(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.EXPONENT, 0); }
	public MULTIPLY(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.MULTIPLY, 0); }
	public DIVIDE(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.DIVIDE, 0); }
	public MODULO(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.MODULO, 0); }
	public PLUS(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.PLUS, 0); }
	public SUBTRACT(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.SUBTRACT, 0); }
	public EQ(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.EQ, 0); }
	public NE(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.NE, 0); }
	public R_ARR(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.R_ARR, 0); }
	public L_ARR(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.L_ARR, 0); }
	public GE(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.GE, 0); }
	public LE(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.LE, 0); }
	public lambda(): LambdaContext | undefined {
		return this.tryGetRuleContext(0, LambdaContext);
	}
	public piecewise(): PiecewiseContext | undefined {
		return this.tryGetRuleContext(0, PiecewiseContext);
	}
	public type(): TypeContext | undefined {
		return this.tryGetRuleContext(0, TypeContext);
	}
	public name(): NameContext | undefined {
		return this.tryGetRuleContext(0, NameContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_expression; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterExpression) listener.enterExpression(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitExpression) listener.exitExpression(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitExpression) return visitor.visitExpression(this);
		else return visitor.visitChildren(this);
	}
}


export class TypeContext extends ParserRuleContext {
	public _t_number: Token;
	public _t_string: Token;
	public _t_boolean: Token;
	public _t_void: Token;
	public NUMBER(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.NUMBER, 0); }
	public STRING(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.STRING, 0); }
	public BOOLEAN(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.BOOLEAN, 0); }
	public VOID(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.VOID, 0); }
	public tuple(): TupleContext | undefined {
		return this.tryGetRuleContext(0, TupleContext);
	}
	public vector(): VectorContext | undefined {
		return this.tryGetRuleContext(0, VectorContext);
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_type; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterType) listener.enterType(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitType) listener.exitType(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitType) return visitor.visitType(this);
		else return visitor.visitChildren(this);
	}
}


export class TupleContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(FAILangParser.L_PAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public R_PAREN(): TerminalNode { return this.getToken(FAILangParser.R_PAREN, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FAILangParser.COMMA);
		} else {
			return this.getToken(FAILangParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_tuple; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterTuple) listener.enterTuple(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitTuple) listener.exitTuple(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitTuple) return visitor.visitTuple(this);
		else return visitor.visitChildren(this);
	}
}


export class VectorContext extends ParserRuleContext {
	public L_ARR(): TerminalNode { return this.getToken(FAILangParser.L_ARR, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public R_ARR(): TerminalNode { return this.getToken(FAILangParser.R_ARR, 0); }
	public COMMA(): TerminalNode[];
	public COMMA(i: number): TerminalNode;
	public COMMA(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FAILangParser.COMMA);
		} else {
			return this.getToken(FAILangParser.COMMA, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_vector; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterVector) listener.enterVector(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitVector) listener.exitVector(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitVector) return visitor.visitVector(this);
		else return visitor.visitChildren(this);
	}
}


export class PrefixContext extends ParserRuleContext {
	public NOT(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.NOT, 0); }
	public SUBTRACT(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.SUBTRACT, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_prefix; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterPrefix) listener.enterPrefix(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitPrefix) listener.exitPrefix(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitPrefix) return visitor.visitPrefix(this);
		else return visitor.visitChildren(this);
	}
}


export class IndexerContext extends ParserRuleContext {
	public _l_index: ExpressionContext;
	public _elipsis: Token;
	public _r_index: ExpressionContext;
	public L_BRAC(): TerminalNode { return this.getToken(FAILangParser.L_BRAC, 0); }
	public R_BRAC(): TerminalNode { return this.getToken(FAILangParser.R_BRAC, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public ELIPSIS(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.ELIPSIS, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_indexer; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterIndexer) listener.enterIndexer(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitIndexer) listener.exitIndexer(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitIndexer) return visitor.visitIndexer(this);
		else return visitor.visitChildren(this);
	}
}


export class PiecewiseContext extends ParserRuleContext {
	public L_CURL(): TerminalNode { return this.getToken(FAILangParser.L_CURL, 0); }
	public expression(): ExpressionContext {
		return this.getRuleContext(0, ExpressionContext);
	}
	public OTHERWISE(): TerminalNode { return this.getToken(FAILangParser.OTHERWISE, 0); }
	public SEMI_COLON(): TerminalNode { return this.getToken(FAILangParser.SEMI_COLON, 0); }
	public condition(): ConditionContext[];
	public condition(i: number): ConditionContext;
	public condition(i?: number): ConditionContext | ConditionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ConditionContext);
		} else {
			return this.getRuleContext(i, ConditionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_piecewise; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterPiecewise) listener.enterPiecewise(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitPiecewise) listener.exitPiecewise(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitPiecewise) return visitor.visitPiecewise(this);
		else return visitor.visitChildren(this);
	}
}


export class ConditionContext extends ParserRuleContext {
	public _expr: ExpressionContext;
	public _cond: ExpressionContext;
	public IF(): TerminalNode { return this.getToken(FAILangParser.IF, 0); }
	public SEMI_COLON(): TerminalNode { return this.getToken(FAILangParser.SEMI_COLON, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_condition; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterCondition) listener.enterCondition(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitCondition) listener.exitCondition(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitCondition) return visitor.visitCondition(this);
		else return visitor.visitChildren(this);
	}
}


export class UnionContext extends ParserRuleContext {
	public L_PAREN(): TerminalNode { return this.getToken(FAILangParser.L_PAREN, 0); }
	public expression(): ExpressionContext[];
	public expression(i: number): ExpressionContext;
	public expression(i?: number): ExpressionContext | ExpressionContext[] {
		if (i === undefined) {
			return this.getRuleContexts(ExpressionContext);
		} else {
			return this.getRuleContext(i, ExpressionContext);
		}
	}
	public R_PAREN(): TerminalNode { return this.getToken(FAILangParser.R_PAREN, 0); }
	public VERT_LINE(): TerminalNode[];
	public VERT_LINE(i: number): TerminalNode;
	public VERT_LINE(i?: number): TerminalNode | TerminalNode[] {
		if (i === undefined) {
			return this.getTokens(FAILangParser.VERT_LINE);
		} else {
			return this.getToken(FAILangParser.VERT_LINE, i);
		}
	}
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_union; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterUnion) listener.enterUnion(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitUnion) listener.exitUnion(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitUnion) return visitor.visitUnion(this);
		else return visitor.visitChildren(this);
	}
}


export class EndContext extends ParserRuleContext {
	public SEMI_COLON(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.SEMI_COLON, 0); }
	public EOF(): TerminalNode | undefined { return this.tryGetToken(FAILangParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_end; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterEnd) listener.enterEnd(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitEnd) listener.exitEnd(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitEnd) return visitor.visitEnd(this);
		else return visitor.visitChildren(this);
	}
}


export class CompileUnitContext extends ParserRuleContext {
	public EOF(): TerminalNode { return this.getToken(FAILangParser.EOF, 0); }
	constructor(parent: ParserRuleContext, invokingState: number);
	constructor(parent: ParserRuleContext, invokingState: number) {
		super(parent, invokingState);

	}
	@Override public get ruleIndex(): number { return FAILangParser.RULE_compileUnit; }
	@Override
	public enterRule(listener: FAILangListener): void {
		if (listener.enterCompileUnit) listener.enterCompileUnit(this);
	}
	@Override
	public exitRule(listener: FAILangListener): void {
		if (listener.exitCompileUnit) listener.exitCompileUnit(this);
	}
	@Override
	public accept<Result>(visitor: FAILangVisitor<Result>): Result {
		if (visitor.visitCompileUnit) return visitor.visitCompileUnit(this);
		else return visitor.visitChildren(this);
	}
}


