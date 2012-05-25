/**
 * RemoteTextFile: Esta clase obtiene el contenido de un archivo remoto en modo no asincronico.
 * 
 * @source: Ubicacion del archivo en la web.
 */
 function RemoteTextFile (source) {
	__thisRemoteTextFile = this;
	this.source = source;
	this.contentLines = [];

	$.ajax({
		url: source,
		success: function(data) { 
			__thisRemoteTextFile.contentLines = data.split(String.fromCharCode(13));
		},
		dataType: 'text',
		async: false
	});	
}

/**
 * RemoteTextFile.getCountLines: Devuelve la cantidad de lineas del archivo.
 * 
 */
RemoteTextFile.prototype.getCountLines = function() {
	return this.contentLines.length;
}

/**
 * RemoteTextFile.getLine: Devuelve la linea especifica.
 * 
 *    @lineNumer: Numero de linea a devolver. Inicia en 0.
 */
RemoteTextFile.prototype.getLine = function(lineNumber) {
	return this.contentLines[lineNumber];
}

/**
 * RemoteTextFile.getAll: Devuelve todas las lineas.
 * 
 */
RemoteTextFile.prototype.getAll = function() {
	return this.contentLines.join(String.fromCharCode(13));
}
