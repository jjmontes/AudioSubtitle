/**
 * AudioSubtitle: Esta clase reproduce el subtitulo asociado al audio a reproducir.
 * 
 * @audio: Objeto Audio de HTML5.
 * @panel: Objeto que implemente innerHTML para mostrar el subtitulo.
 *
 *   Dependencias: Subtitle.js
 *     Sub Dependencias:
 *      - RemoteTextFile.js.
 *      - jquery-1.7.2
 */
function AudioSubtitle(audio, panel) {
	var subtitleFile = null;

	if (audio != null && panel != null) {
		audio.addEventListener('timeupdate', Audio_OnTimeUpdate);
		audio.addEventListener('loadedmetadata', Audio_OnLoadMetaData);
	}


	function Audio_OnTimeUpdate() {
		var sub = subtitleFile.getSubtitleAtTime(TimeToSubtitleTime(audio.currentTime));
		if (sub == null) {
			panel.innerHTML = '';
		} else {
			panel.innerHTML = sub.text;
		}
	}
	
	function Audio_OnLoadMetaData() {
		var file = audio.currentSrc.substring(0, audio.currentSrc.lastIndexOf('.')) + '.srt';
		subtitleFile = new SubtitleFile(file);
	}
}

/**
 * TimeToSubtitleTime: Transforma el tiempo en segundos a formato subtitulo (HH:MM:SS.mmm)
 *
 * @time: Tiempo en segundos.
 */
function TimeToSubtitleTime(time) {
	var hour = Math.floor(time / 3600);
	var minute = Math.floor((time % 3600) / 60);
	var second = Math.floor(time % 60);
	var millisecond = (time % 60) - second;

	return pad(hour, 2) + ':' + pad(minute, 2) + ':' + pad(second, 2) + String(millisecond).substring(1);
}

/**
 * pad: Alinea a la derecha el numero especificado e inserta a la izquierda ceros hasta alcanzar la longitud total especificada.
 *
 * @number: Numero.
 * @length: Longitud que debe alcanzar el numero con los ceros a la izquierda.
 */
function pad(number, length) {

    var str = '' + number;
    while (str.length < length) {
        str = '0' + str;
    }

    return str;

}
