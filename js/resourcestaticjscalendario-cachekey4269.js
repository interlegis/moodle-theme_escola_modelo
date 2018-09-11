
/* - ++resource++static/js/calendario.js - */
$(document).ready(function(){
//	var $ = $18; // version 1.8
	// alert("[window.$, $]: " + window.$(document).jquery + ", " + $(document).jquery)

	// Agenda
	configCalendar();
	
	// Notícia
	configNoticia();
});

////////////////////////////////////////////////////////////////////////////
// Configuração do calendário para a utilização da agenda.
var calendarMesAtual = "";

// Configuração do calendário. 
function configCalendar() {
	mes = $(".portletCalendar .portletHeader").text();
	if (mes == calendarMesAtual) {
		return true;
	}

	// O mês foi alterado.
	configCalendarLinks();
	return false;
}

// Configuração de links para a agenda.
function configCalendarLinks() {
	
    // Modifica o endereço dos links para apontarem para a view.
	$("table.ploneCalendar a").each(function(index) {
	    var linkAgenda = $(this);
	    var endereco = linkAgenda.attr('href');
	    var texto = $(this).attr('title');
	    var data = texto.substring(0, 10);
	    var parts = endereco.split("/search");
	    var urlPresidencia = parts[0] + "/eventos";
	    var novoEndereco = urlPresidencia + "/pesquisaagenda?data=" + data;
	    linkAgenda.attr("href", novoEndereco);
	});
	
	// Tratamento dos eventos de mudança de mês (previous e next).
	$(".portletCalendar a#calendar-previous, .portletCalendar a#calendar-next").each(function(index) {
		$(this).click(function() {
			calendarMesAtual = $(".portletCalendar .portletHeader").text();
			serviceTimer(configCalendar, 1000);
		});
	});
	
}

// Configuração da view de notícia.
// Remove a imagem de upload na view de detalhamento da notícia.
function configNoticia() {
	imgNoticia = $("div.newsImageContainer");
	imgNoticia.remove();
	sumario = $("div#parent-fieldname-description");
	sumario.remove();
	$(".newsDataPublicacao").after($('<div />').load('socialshare?NoticiaID='+ window.location));
}

function Imprimir(objeto){
	var printContent = document.getElementById(objeto);
    var parametrosExibicaoJanela = 'left=250,top=150,width=800,height=800px,toolbar=0,scrollbars=0,status=0,directories=no, menubar=no, resizable=no'; 
    var winPrint = window.open('', '', parametrosExibicaoJanela);
    
    winPrint.document.write(printContent.innerHTML);
    
    var printIconesAcessibilidade = winPrint.document.getElementById('socialshare');
    printIconesAcessibilidade.innerHTML = "";
    
    winPrint.document.close();
    winPrint.focus();
    winPrint.print();
    winPrint.close();
}

function EnviarEmail(objeto){
	titulo = objeto.title;
	endereco = objeto.location;
	window.open("mailto:?Subject=" + titulo + "&body=" + titulo + escape('\n') + endereco); 
}
