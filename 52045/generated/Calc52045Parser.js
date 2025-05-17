// Generated from c:/Users/Mauro/Downloads/52045/Calc52045.g4 by ANTLR 4.13.2
// jshint ignore: start
import antlr4 from 'antlr4';
import Calc52045Listener from './Calc52045Listener.js';
import Calc52045Visitor from './Calc52045Visitor.js';

const serializedATN = [4,1,17,46,2,0,7,0,2,1,7,1,2,2,7,2,2,3,7,3,2,4,7,4,
2,5,7,5,2,6,7,6,1,0,4,0,16,8,0,11,0,12,0,17,1,1,1,1,1,1,1,1,1,1,1,1,1,1,
1,1,1,1,1,2,1,2,1,2,3,2,32,8,2,1,3,1,3,1,4,1,4,1,4,1,4,1,5,1,5,1,5,1,5,1,
6,1,6,1,6,0,0,7,0,2,4,6,8,10,12,0,1,1,0,12,14,41,0,15,1,0,0,0,2,19,1,0,0,
0,4,31,1,0,0,0,6,33,1,0,0,0,8,35,1,0,0,0,10,39,1,0,0,0,12,43,1,0,0,0,14,
16,3,2,1,0,15,14,1,0,0,0,16,17,1,0,0,0,17,15,1,0,0,0,17,18,1,0,0,0,18,1,
1,0,0,0,19,20,5,1,0,0,20,21,5,15,0,0,21,22,5,2,0,0,22,23,5,3,0,0,23,24,3,
4,2,0,24,25,5,4,0,0,25,26,3,12,6,0,26,27,5,5,0,0,27,3,1,0,0,0,28,32,3,6,
3,0,29,32,3,8,4,0,30,32,3,10,5,0,31,28,1,0,0,0,31,29,1,0,0,0,31,30,1,0,0,
0,32,5,1,0,0,0,33,34,5,6,0,0,34,7,1,0,0,0,35,36,5,7,0,0,36,37,5,8,0,0,37,
38,5,16,0,0,38,9,1,0,0,0,39,40,5,9,0,0,40,41,5,10,0,0,41,42,5,11,0,0,42,
11,1,0,0,0,43,44,7,0,0,0,44,13,1,0,0,0,2,17,31];


const atn = new antlr4.atn.ATNDeserializer().deserialize(serializedATN);

const decisionsToDFA = atn.decisionToState.map( (ds, index) => new antlr4.dfa.DFA(ds, index) );

const sharedContextCache = new antlr4.atn.PredictionContextCache();

export default class Calc52045Parser extends antlr4.Parser {

    static grammarFileName = "Calc52045.g4";
    static literalNames = [ null, "'regla'", "'{'", "'cuando'", "'entonces'", 
                            "'}'", "'intentoAccesoFueraHorario'", "'intentosFallidos'", 
                            "'>'", "'accesoARecursosSensibles'", "'y'", 
                            "'noESAdministrador'", "'agregarUsuarioAListaNegra'", 
                            "'agregarIPAListaNegra'", "'activarMonitoreoDetallado'" ];
    static symbolicNames = [ null, null, null, null, null, null, null, null, 
                             null, null, null, null, null, null, null, "IDENTIFICADOR", 
                             "NUMERO", "WS" ];
    static ruleNames = [ "prog", "regla", "condicion", "accesoNoAutorizado", 
                         "multiplesIntentosFallidos", "actividadSospechosa", 
                         "comando" ];

    constructor(input) {
        super(input);
        this._interp = new antlr4.atn.ParserATNSimulator(this, atn, decisionsToDFA, sharedContextCache);
        this.ruleNames = Calc52045Parser.ruleNames;
        this.literalNames = Calc52045Parser.literalNames;
        this.symbolicNames = Calc52045Parser.symbolicNames;
    }



	prog() {
	    let localctx = new ProgContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 0, Calc52045Parser.RULE_prog);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 15; 
	        this._errHandler.sync(this);
	        _la = this._input.LA(1);
	        do {
	            this.state = 14;
	            this.regla();
	            this.state = 17; 
	            this._errHandler.sync(this);
	            _la = this._input.LA(1);
	        } while(_la===1);
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



	regla() {
	    let localctx = new ReglaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 2, Calc52045Parser.RULE_regla);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 19;
	        this.match(Calc52045Parser.T__0);
	        this.state = 20;
	        this.match(Calc52045Parser.IDENTIFICADOR);
	        this.state = 21;
	        this.match(Calc52045Parser.T__1);
	        this.state = 22;
	        this.match(Calc52045Parser.T__2);
	        this.state = 23;
	        this.condicion();
	        this.state = 24;
	        this.match(Calc52045Parser.T__3);
	        this.state = 25;
	        this.comando();
	        this.state = 26;
	        this.match(Calc52045Parser.T__4);
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



	condicion() {
	    let localctx = new CondicionContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 4, Calc52045Parser.RULE_condicion);
	    try {
	        this.state = 31;
	        this._errHandler.sync(this);
	        switch(this._input.LA(1)) {
	        case 6:
	            this.enterOuterAlt(localctx, 1);
	            this.state = 28;
	            this.accesoNoAutorizado();
	            break;
	        case 7:
	            this.enterOuterAlt(localctx, 2);
	            this.state = 29;
	            this.multiplesIntentosFallidos();
	            break;
	        case 9:
	            this.enterOuterAlt(localctx, 3);
	            this.state = 30;
	            this.actividadSospechosa();
	            break;
	        default:
	            throw new antlr4.error.NoViableAltException(this);
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



	accesoNoAutorizado() {
	    let localctx = new AccesoNoAutorizadoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 6, Calc52045Parser.RULE_accesoNoAutorizado);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 33;
	        this.match(Calc52045Parser.T__5);
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



	multiplesIntentosFallidos() {
	    let localctx = new MultiplesIntentosFallidosContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 8, Calc52045Parser.RULE_multiplesIntentosFallidos);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 35;
	        this.match(Calc52045Parser.T__6);
	        this.state = 36;
	        this.match(Calc52045Parser.T__7);
	        this.state = 37;
	        this.match(Calc52045Parser.NUMERO);
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



	actividadSospechosa() {
	    let localctx = new ActividadSospechosaContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 10, Calc52045Parser.RULE_actividadSospechosa);
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 39;
	        this.match(Calc52045Parser.T__8);
	        this.state = 40;
	        this.match(Calc52045Parser.T__9);
	        this.state = 41;
	        this.match(Calc52045Parser.T__10);
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



	comando() {
	    let localctx = new ComandoContext(this, this._ctx, this.state);
	    this.enterRule(localctx, 12, Calc52045Parser.RULE_comando);
	    var _la = 0;
	    try {
	        this.enterOuterAlt(localctx, 1);
	        this.state = 43;
	        _la = this._input.LA(1);
	        if(!((((_la) & ~0x1f) === 0 && ((1 << _la) & 28672) !== 0))) {
	        this._errHandler.recoverInline(this);
	        }
	        else {
	        	this._errHandler.reportMatch(this);
	            this.consume();
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


}

Calc52045Parser.EOF = antlr4.Token.EOF;
Calc52045Parser.T__0 = 1;
Calc52045Parser.T__1 = 2;
Calc52045Parser.T__2 = 3;
Calc52045Parser.T__3 = 4;
Calc52045Parser.T__4 = 5;
Calc52045Parser.T__5 = 6;
Calc52045Parser.T__6 = 7;
Calc52045Parser.T__7 = 8;
Calc52045Parser.T__8 = 9;
Calc52045Parser.T__9 = 10;
Calc52045Parser.T__10 = 11;
Calc52045Parser.T__11 = 12;
Calc52045Parser.T__12 = 13;
Calc52045Parser.T__13 = 14;
Calc52045Parser.IDENTIFICADOR = 15;
Calc52045Parser.NUMERO = 16;
Calc52045Parser.WS = 17;

Calc52045Parser.RULE_prog = 0;
Calc52045Parser.RULE_regla = 1;
Calc52045Parser.RULE_condicion = 2;
Calc52045Parser.RULE_accesoNoAutorizado = 3;
Calc52045Parser.RULE_multiplesIntentosFallidos = 4;
Calc52045Parser.RULE_actividadSospechosa = 5;
Calc52045Parser.RULE_comando = 6;

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

	regla = function(i) {
	    if(i===undefined) {
	        i = null;
	    }
	    if(i===null) {
	        return this.getTypedRuleContexts(ReglaContext);
	    } else {
	        return this.getTypedRuleContext(ReglaContext,i);
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



class ReglaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Calc52045Parser.RULE_regla;
    }

	IDENTIFICADOR() {
	    return this.getToken(Calc52045Parser.IDENTIFICADOR, 0);
	};

	condicion() {
	    return this.getTypedRuleContext(CondicionContext,0);
	};

	comando() {
	    return this.getTypedRuleContext(ComandoContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterRegla(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitRegla(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitRegla(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class CondicionContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Calc52045Parser.RULE_condicion;
    }

	accesoNoAutorizado() {
	    return this.getTypedRuleContext(AccesoNoAutorizadoContext,0);
	};

	multiplesIntentosFallidos() {
	    return this.getTypedRuleContext(MultiplesIntentosFallidosContext,0);
	};

	actividadSospechosa() {
	    return this.getTypedRuleContext(ActividadSospechosaContext,0);
	};

	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterCondicion(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitCondicion(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitCondicion(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class AccesoNoAutorizadoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Calc52045Parser.RULE_accesoNoAutorizado;
    }


	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterAccesoNoAutorizado(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitAccesoNoAutorizado(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitAccesoNoAutorizado(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class MultiplesIntentosFallidosContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Calc52045Parser.RULE_multiplesIntentosFallidos;
    }

	NUMERO() {
	    return this.getToken(Calc52045Parser.NUMERO, 0);
	};

	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterMultiplesIntentosFallidos(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitMultiplesIntentosFallidos(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitMultiplesIntentosFallidos(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ActividadSospechosaContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Calc52045Parser.RULE_actividadSospechosa;
    }


	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterActividadSospechosa(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitActividadSospechosa(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitActividadSospechosa(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}



class ComandoContext extends antlr4.ParserRuleContext {

    constructor(parser, parent, invokingState) {
        if(parent===undefined) {
            parent = null;
        }
        if(invokingState===undefined || invokingState===null) {
            invokingState = -1;
        }
        super(parent, invokingState);
        this.parser = parser;
        this.ruleIndex = Calc52045Parser.RULE_comando;
    }


	enterRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.enterComando(this);
		}
	}

	exitRule(listener) {
	    if(listener instanceof Calc52045Listener ) {
	        listener.exitComando(this);
		}
	}

	accept(visitor) {
	    if ( visitor instanceof Calc52045Visitor ) {
	        return visitor.visitComando(this);
	    } else {
	        return visitor.visitChildren(this);
	    }
	}


}




Calc52045Parser.ProgContext = ProgContext; 
Calc52045Parser.ReglaContext = ReglaContext; 
Calc52045Parser.CondicionContext = CondicionContext; 
Calc52045Parser.AccesoNoAutorizadoContext = AccesoNoAutorizadoContext; 
Calc52045Parser.MultiplesIntentosFallidosContext = MultiplesIntentosFallidosContext; 
Calc52045Parser.ActividadSospechosaContext = ActividadSospechosaContext; 
Calc52045Parser.ComandoContext = ComandoContext; 
