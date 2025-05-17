// Generated from c:/Users/Mauro/Downloads/52045/Calc52045.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Calc52045Listener from './Calc52045Listener.js';
import Calc52045Visitor from './Calc52045Visitor.js';

const serializedATN = [4,1,11,45,2,0,7,0,2,1,7,1,2,2,7,2,1,0,4,0,8,8,0,11,
0,12,0,9,1,1,1,1,3,1,14,8,1,1,1,1,1,1,1,1,1,3,1,20,8,1,1,1,3,1,23,8,1,1,
2,1,2,1,2,1,2,1,2,1,2,1,2,3,2,32,8,2,1,2,1,2,1,2,1,2,1,2,1,2,5,2,40,8,2,
10,2,12,2,43,9,2,1,2,0,1,4,3,0,2,4,0,2,1,0,1,2,1,0,3,4,50,0,7,1,0,0,0,2,
22,1,0,0,0,4,31,1,0,0,0,6,8,3,2,1,0,7,6,1,0,0,0,8,9,1,0,0,0,9,7,1,0,0,0,
9,10,1,0,0,0,10,1,1,0,0,0,11,13,3,4,2,0,12,14,5,10,0,0,13,12,1,0,0,0,13,
14,1,0,0,0,14,23,1,0,0,0,15,16,5,6,0,0,16,17,5,5,0,0,17,19,3,4,2,0,18,20,
5,10,0,0,19,18,1,0,0,0,19,20,1,0,0,0,20,23,1,0,0,0,21,23,5,10,0,0,22,11,
1,0,0,0,22,15,1,0,0,0,22,21,1,0,0,0,23,3,1,0,0,0,24,25,6,2,-1,0,25,32,5,
7,0,0,26,32,5,6,0,0,27,28,5,8,0,0,28,29,3,4,2,0,29,30,5,9,0,0,30,32,1,0,
0,0,31,24,1,0,0,0,31,26,1,0,0,0,31,27,1,0,0,0,32,41,1,0,0,0,33,34,10,5,0,
0,34,35,7,0,0,0,35,40,3,4,2,6,36,37,10,4,0,0,37,38,7,1,0,0,38,40,3,4,2,5,
39,33,1,0,0,0,39,36,1,0,0,0,40,43,1,0,0,0,41,39,1,0,0,0,41,42,1,0,0,0,42,
5,1,0,0,0,43,41,1,0,0,0,7,9,13,19,22,31,39,41];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Calc52045Parser extends antlr4.Parser {

    static grammarFileName = "Calc52045.g4";
    static literalNames = [ null, "'*'", "'/'", "'+'", "'-'", "'='", null, 
                            null, "'('", "')'" ];
    static symbolicNames = [ null, "MUL", "DIV", "ADD", "SUB", "EQ", "ID", 
                             "INT", "LPAREN", "RPAREN", "NEWLINE", "WS" ];
    static ruleNames = [ "prog", "stat", "expr" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Calc52045Parser.ruleNames;
        this.literalNames = Calc52045Parser.literalNames;
        this.symbolicNames = Calc52045Parser.symbolicNames;
    }

    sempred(localctx, ruleIndex, predIndex) {
    	switch(ruleIndex) {
    	case 2:
    	    		return this.expr_sempred(localctx, predIndex);
        default:
            throw "No predicate with index:" + ruleIndex;
       }
    }

    expr_sempred(localctx, predIndex) {
    	switch(predIndex) {
    		case 0:
    			return this.precpred(this._ctx, 5);
    		case 1:
    			return this.precpred(this._ctx, 4);
    		default:
    			throw "No predicate with index:" + predIndex;
    	}
    };




	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Calc52045Parser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 7; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 6;
	            this.stat();
	            this.state = 9; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while((((_la) & ~0x1f) === 0 && ((1 << _la) & 1472) !== 0));
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}



	stat() {
	    let localctx = new StatContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Calc52045Parser.RULE_stat);
	    try {
	        this.state = 22;
	        this._errHandler.sync(this);
	        var la_ = this._interp.adaptivePredict(this._input,3,this._ctx);
	        switch(la_) {
	        case 1:
	            localctx = new PrintExprContext(this, localctx);
	            this.enterOuterAlt(localctx, 1);
	            this.state = 11;
	            this.expr(0);
	            this.state = 13;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,1,this._ctx);
	            if(la_===1) {
	                this.state = 12;
	                this.match(Calc52045Parser.NEWLINE);

	            }
	            break;

	        case 2:
	            localctx = new AssignContext(this, localctx);
	            this.enterOuterAlt(localctx, 2);
	            this.state = 15;
	            this.match(Calc52045Parser.ID);
	            this.state = 16;
	            this.match(Calc52045Parser.EQ);
	            this.state = 17;
	            this.expr(0);
	            this.state = 19;
	            this._errHandler.sync(this);
	            var la_ = this._interp.adaptivePredict(this._input,2,this._ctx);
	            if(la_===1) {
	                this.state = 18;
	                this.match(Calc52045Parser.NEWLINE);

	            }
	            break;

	        case 3:
	            localctx = new BlankContext(this, localctx);
	            this.enterOuterAlt(localctx, 3);
	            this.state = 21;
	            this.match(Calc52045Parser.NEWLINE);
	            break;

	        }
	    } catch (re) {
	    	if(re instanceof antlr4.error.RecognitionException) {
		        localctx.exception = re;
		        this._errHandler.reportError(this, re);
		        this._errHandler.recover(this, re);
		    } else {
		    	throw re;
		    }
	    } finally {
	        this.exitRule();
	    }
	    return localctx;
	}


	expr(_p) {
		if(_p===undefined) {
		    _p = 0;
		}
	    const _parentctx = this._ctx;
	    const _parentState = this.state;
	    let localctx = new ExprContext(this, this._ctx, _parentState);
	    let _prevctx = localctx;
	    const _startState = 4;
	    this.enterRecursionRule(localctx, 4, Calc52045Parser.RULE_expr, _p);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 7:
	            localctx = new IntContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;

	            this.state = 25;
	            this.match(Calc52045Parser.INT);
	            break;
	        case 6:
	            localctx = new IdContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 26;
	            this.match(Calc52045Parser.ID);
	            break;
	        case 8:
	            localctx = new ParensContext(this, localctx);
	            this._ctx = localctx;
	            _prevctx = localctx;
	            this.state = 27;
	            this.match(Calc52045Parser.LPAREN);
	            this.state = 28;
	            this.expr(0);
	            this.state = 29;
	            this.match(Calc52045Parser.RPAREN);
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
	        }
	        this._ctx.stop = this._input.LT(-1);
	        this.state = 41;
	        this._errHandler.sync(this);
	        var _alt = this._interp.adaptivePredict(this._input,6,this._ctx)
	        while(_alt!=2 && _alt!=antlr4.atn.ATN.INVALID_ALT_NUMBER) {
	            if(_alt===1) {
	                if(this._parseListeners!==null) {
	                    this.triggerExitRuleEvent();
	                }
	                _prevctx = localctx;
	                this.state = 39;
	                this._errHandler.sync(this);
	                var la_ = this._interp.adaptivePredict(this._input,5,this._ctx);
	                switch(la_) {
	                case 1:
	                    localctx = new MulDivContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, Calc52045Parser.RULE_expr);
	                    this.state = 33;
	                    if (!( this.precpred(this._ctx, 5))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 5)");
	                    }
	                    this.state = 34;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===1 || _la===2)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 35;
	                    this.expr(6);
	                    break;

	                case 2:
	                    localctx = new AddSubContext(this, new ExprContext(this, _parentctx, _parentState));
	                    this.pushNewRecursionContext(localctx, _startState, Calc52045Parser.RULE_expr);
	                    this.state = 36;
	                    if (!( this.precpred(this._ctx, 4))) {
	                        throw new antlr4.error.FailedPredicateException(this, "this.precpred(this._ctx, 4)");
	                    }
	                    this.state = 37;
	                    localctx.op = this._input.LT(1);
	                    _la = this._input.LA(1);
	                    if(!(_la===3 || _la===4)) {
	                        localctx.op = this._errHandler.recoverInline(this);
	                    }
	                    else {
	                    	this._errHandler.reportMatch(this);
	                        this.consume();
	                    }
	                    this.state = 38;
	                    this.expr(5);
	                    break;

	                } 
	            }
	            this.state = 43;
	            this._errHandler.sync(this);
	            _alt = this._interp.adaptivePredict(this._input,6,this._ctx);
	        }

	    } catch( error) {
	        if(error instanceof antlr4.error.RecognitionException) {
		        localctx.exception = error;
		        this._errHandler.reportError(this, error);
		        this._errHandler.recover(this, error);
		    } else {
		    	throw error;
		    }
	    } finally {
	        this.unrollRecursionContexts(_parentctx)
	    }
	    return localctx;
	}


}

Calc52045Parser.EOF = antlr4.Token.EOF;
Calc52045Parser.MUL = 1;
Calc52045Parser.DIV = 2;
Calc52045Parser.ADD = 3;
Calc52045Parser.SUB = 4;
Calc52045Parser.EQ = 5;
Calc52045Parser.ID = 6;
Calc52045Parser.INT = 7;
Calc52045Parser.LPAREN = 8;
Calc52045Parser.RPAREN = 9;
Calc52045Parser.NEWLINE = 10;
Calc52045Parser.WS = 11;

Calc52045Parser.RULE_prog = 0;
Calc52045Parser.RULE_stat = 1;
Calc52045Parser.RULE_expr = 2;

class ProgContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Calc52045Parser.RULE_prog;
    }

	stat = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(StatContext);
	    } else {
	        return this.getTypedRuleContext(StatContext,i);
	    }
	};

	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterProg(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitProg(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitProg(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class StatContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Calc52045Parser.RULE_stat;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class BlankContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	NEWLINE() {
	    return this.getToken(Calc52045Parser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterBlank(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitBlank(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitBlank(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

Calc52045Parser.BlankContext = BlankContext;

class PrintExprContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NEWLINE() {
	    return this.getToken(Calc52045Parser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterPrintExpr(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitPrintExpr(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitPrintExpr(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

Calc52045Parser.PrintExprContext = PrintExprContext;

class AssignContext extends StatContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(Calc52045Parser.ID, 0);
	};

	EQ() {
	    return this.getToken(Calc52045Parser.EQ, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	NEWLINE() {
	    return this.getToken(Calc52045Parser.NEWLINE, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterAssign(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitAssign(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitAssign(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

Calc52045Parser.AssignContext = AssignContext;

class ExprContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Calc52045Parser.RULE_expr;
    }


	 
		copyFrom(ctx) {
			super.copyFrom(ctx);
		}

}


class ParensContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	LPAREN() {
	    return this.getToken(Calc52045Parser.LPAREN, 0);
	};

	expr() {
	    return this.getTypedRuleContext(ExprContext,0);
	};

	RPAREN() {
	    return this.getToken(Calc52045Parser.RPAREN, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterParens(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitParens(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitParens(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

Calc52045Parser.ParensContext = ParensContext;

class MulDivContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	MUL() {
	    return this.getToken(Calc52045Parser.MUL, 0);
	};

	DIV() {
	    return this.getToken(Calc52045Parser.DIV, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterMulDiv(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitMulDiv(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitMulDiv(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

Calc52045Parser.MulDivContext = MulDivContext;

class AddSubContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        this.op = null;;
        super.copyFrom(ctx);
    }

	expr = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ExprContext);
	    } else {
	        return this.getTypedRuleContext(ExprContext,i);
	    }
	};

	ADD() {
	    return this.getToken(Calc52045Parser.ADD, 0);
	};

	SUB() {
	    return this.getToken(Calc52045Parser.SUB, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterAddSub(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitAddSub(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitAddSub(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

Calc52045Parser.AddSubContext = AddSubContext;

class IdContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	ID() {
	    return this.getToken(Calc52045Parser.ID, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterId(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitId(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitId(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

Calc52045Parser.IdContext = IdContext;

class IntContext extends ExprContext {

    constructor(parser, ctx) {
        super(parser);
        super.copyFrom(ctx);
    }

	INT() {
	    return this.getToken(Calc52045Parser.INT, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterInt(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitInt(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitInt(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}

Calc52045Parser.IntContext = IntContext;


Calc52045Parser.ProgContext = ProgContext; 
Calc52045Parser.StatContext = StatContext; 
Calc52045Parser.ExprContext = ExprContext; 
