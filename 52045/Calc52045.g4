grammar Calc52045;

// Regla inicial
prog: regla+ ;

// Reglas principales
regla: 'regla' IDENTIFICADOR '{' 'cuando' condicion 'entonces' comando '}' ;

// Condiciones
condicion: accesoNoAutorizado
         | multiplesIntentosFallidos
         | actividadSospechosa ;

accesoNoAutorizado: 'intentoAccesoFueraHorario' ;

multiplesIntentosFallidos: 'intentosFallidos' '>' NUMERO ;

actividadSospechosa: 'accesoARecursosSensibles' 'y' 'noESAdministrador' ;

// Comandos
comando: 'agregarUsuarioAListaNegra'
       | 'agregarIPAListaNegra'
       | 'activarMonitoreoDetallado' ;

// Lexemas
IDENTIFICADOR: (LETRA | DIGITO)+ ;

fragment LETRA: [a-zA-Z] ;
fragment DIGITO: [0-9] ;

// Token para números
NUMERO: [0-9]+ ;

// Espacios en blanco
WS: [ \t\r\n]+ -> skip ;