/**
 * Subtitle: Esta clase representa un subtitulo.
 * 
 * @index: Indice.
 * @start: tiempo de inicio.
 * @end: tiempo de fin.
 * @text: texto.
 */
function Subtitle(index, start, end, text) {
	this.index = index;
	this.start = start;
	this.end = end;
	this.text = text;

	return this;
}

/**
 * SubtitleFile: Esta clase representa un archivo de subtitulo.
 * 
 * @source: Ubicacion del archivo en la web.
 */
function SubtitleFile(source) {
	var indexFile = 0;
	var id, start, end, text;
	var remoteTextFile = new RemoteTextFile(source);
	this.subtitles = [];

	while (indexFile < remoteTextFile.getCountLines()) {
		var textLine = remoteTextFile.getLine(indexFile);
		id = textLine.replace(' ', '');

		indexFile++;
		if (indexFile < remoteTextFile.getCountLines()) {
			textLine = remoteTextFile.getLine(indexFile);
			start = textLine.split(' --> ')[0];
			end = textLine.split(' --> ')[1];

			indexFile++;
			if (indexFile < remoteTextFile.getCountLines()) {
				textLine = remoteTextFile.getLine(indexFile);
				text = textLine;

				do {
					indexFile++;
					textLine = remoteTextFile.getLine(indexFile); //Empty Line
					if (textLine != '') {
						text += String.fromCharCode(13) + textLine;
					}
				} while (textLine != '' && indexFile < remoteTextFile.getCountLines())

				this.subtitles.push(new Subtitle(id, start, end, text));

				indexFile++;
			}
		}
	}

}

/**
 * SubtitleFile.getSubtitleById: Devuelve un subtitulo especifico, segun el numero de Indice.
 * 
 *    @subtitleNumer: Indice del subtitulo a buscar. Inicia normalmente en 1. Si no existe ninguno, devuelve null.
 */
SubtitleFile.prototype.getSubtitleById = function(subtitleNumer) {
	var subtitle = null;
	for (var index = 0; index < this.subtitles.length; index++) {
		if (this.subtitles[index].index == subtitleNumer) {
			subtitle = this.subtitles[index];
			break;
		}
	}

	return subtitle; 
}

/**
 * SubtitleFile.getSubtitleAtTime: Devuelve el subtitulo que se encuentra en el tiempo especificado.
 * 
 *    @moment: El tiempo del subtitulo. Si no existe ninguno, devuelve null.
 */
SubtitleFile.prototype.getSubtitleAtTime = function(moment) {
	var subtitle = null;
	for (var index = 0; index < this.subtitles.length; index++) {
		if (moment >= this.subtitles[index].start && moment <= this.subtitles[index].end) {
			subtitle = this.subtitles[index];
			break;
		}
	}

	return subtitle; 
}

