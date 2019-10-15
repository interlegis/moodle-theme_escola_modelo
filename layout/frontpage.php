<?php
// This file is part of Moodle - http://moodle.org/
//
// Moodle is free software: you can redistribute it and/or modify
// it under the terms of the GNU General Public License as published by
// the Free Software Foundation, either version 3 of the License, or
// (at your option) any later version.
//
// Moodle is distributed in the hope that it will be useful,
// but WITHOUT ANY WARRANTY; without even the implied warranty of
// MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
// GNU General Public License for more details.
//
// You should have received a copy of the GNU General Public License
// along with Moodle.  If not, see <http://www.gnu.org/licenses/>.

/**
 * A one column layout for the escola_modelo theme.
 *
 * @package   theme_escola_modelo
 * @copyright 2016 Damyon Wiese
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

require_once($CFG->libdir . '/../config.php');
require_once($CFG->dirroot.'/blocks/escola_modelo/classes/util.php');

//include($CFG->libdir .'/httpful.phar');


$welcomeMessage = $this->page->theme->settings->welcome;
$footer = $this->page->theme->settings->footersimple;

$central_autenticacao_url = evlURLWebServices();

// $destaquesEVL = '{
// 	cursos: {

// 	}
// }';

// $uri = 'https://escolamodelows.interlegis.leg.br/api/v1/cursos?key=L3iQ2LJuaqxWqsxRF3Tk4x3QaypEay6APDpLzcYdSlxvRtYkHY';
// $response = \Httpful\Request::get($uri)
// 	->expectsJson()
// 	//->body($json)
// 	->send();
$destaques_evl = ''; //$response->body;

//echo $response;

//'Rodapé da <a href="https://saberes.whatever.qq.leg.br">Escola da Câmara Municipal de Moodlecity</a>';

$indMostrarCarrossel = true;
$bodyattributes = ''; //$OUTPUT->body_attributes($extraclasses);

function getJsonCursosHomeWS() {
	 $uri = 'http://localhost:3000/api/v1/cursos?key=6iwXud8cubFTlGWgd8FucO6kzT8BAFXRfd7eXlZLMT3bOgPuMg';
	 $response = \Httpful\Request::get($uri)
	 	->expectsJson()
	 	//->body($json)
	 	->send();
	return  $response->body;
}


function getJsonCursosHome() {
	return json_decode(
		'{"cursos": [
			{
				"id": "3",
				"nome": "Curso 3",
				"descricao": "Descrição do curso 3"
			},
			{
				"id": "4",
				"nome": "Curso 4",
				"descricao": "Descrição do curso 4"
			},
			{
				"id": "5",
				"nome": "Curso 5",
				"descricao": "Descrição do curso 5"
			},
			{
				"id": "6",
				"nome": "Curso 6",
				"descricao": "Descrição do curso 6"
			},
			{
				"id": "7",
				"nome": "Curso 7",
				"descricao": "Descrição do curso 7"
			}
		]}'
	);
}

function getAvisos() {
	return json_decode(
		'{ 
			"noticias":[  
			   {  
				  "id":1,
				  "tag":"MANUTENÇÃO",
				  "titulo":"Manutenção programada em 30/02/2020",
				  "link":"http://www.corensc.gov.br/pagina-em-manutencao/pagina-em-manutencao-2/",
				  "icone":"https://www2.emc.ufg.br/up/440/o/paginaEmConstrucao.png"
			   },
			   {  
				  "id":2,
				  "tag":"INSCRIÇÕES ABERTAS",
				  "titulo":"Curso de Processo Legislativo Federal está com inscrições aberta",
				  "link":"https://educacaoadistancia.camara.leg.br/site/921/processo-legislativo/",
				  "icone":""
			   }
			]
		 }'
	);
}

$cursosHome = getJsonCursosHome();
//$cursosHome = getJsonCursosHomeWS();
$avisosHome = getAvisos();


if (isloggedin()) {
	user_preference_allow_ajax_update('drawer-open-nav', PARAM_ALPHA);
	require_once($CFG->libdir . '/behat/lib.php');

	$blockshtml = $OUTPUT->blocks('side-pre');
	$hasblocks = strpos($blockshtml, 'data-block=') !== false;
	$regionmainsettingsmenu = $OUTPUT->region_main_settings_menu();

	// $user_picture = false;
	// if ($user->picture) {
	// 	$user_picture = get_file_url($USER->id.'/'.$size['large'].'.jpg', null, 'user');
	// }
	global $USER,$PAGE;
	$user_picture=new user_picture($USER);
	$user_picture_url=$user_picture->get_url($PAGE);
	$user_profile_url=$CFG->wwwroot . "/user/profile.php?id=" . $USER->id . "&course=1";
	$user_name = $USER->firstname; // . ' ' . $USER->lastname;


//var obj = JSON.parse($response->data);
//var data = '{cursos: obj.prop['cursos'].map(function(x){ return {name: x}; })}';
  
  //echo 'Tem erro: ' . $response->code;
  //echo $response;

	$templatecontext = [
		'sitename' => format_string($SITE->shortname, true, ['context' => context_course::instance(SITEID), "escape" => false]),
		'output' => $OUTPUT,
		'bodyattributes' => $bodyattributes,
		'projetos_especiais' => $OUTPUT->image_url('projetos_especiais', 'theme'),
		'conheca-senado' => $OUTPUT->image_url('conheca-senado', 'theme'),
		'Cursos-on-line-sem-tutor' => $OUTPUT->image_url('Cursos-on-line-sem-tutor', 'theme'),
		'Cursos-on-line' => $OUTPUT->image_url('Cursos-on-line', 'theme'),
		'formacao_interna' => $OUTPUT->image_url('formacao_interna', 'theme'),
		'oficinas-interlegis' => $OUTPUT->image_url('oficinas-interlegis', 'theme'),
		'pos-graduacao' => $OUTPUT->image_url('pos-graduacao', 'theme'),
		'video-aula' => $OUTPUT->image_url('video-aula', 'theme'),
		'fundo-c' => $OUTPUT->image_url('fundo-c', 'theme'),
		'icon_ContatoEmail-azul' => $OUTPUT->image_url('icon_ContatoEmail-azul', 'theme'),
		'icon_ContatoFone-azul' => $OUTPUT->image_url('icon_ContatoFone-azul', 'theme'),
		'logo_saberes_xl' => $OUTPUT->image_url('logo_saberes_xl', 'theme'),
		'moodle_url' => $CFG->wwwroot,
		'casalegislativa_nome' => 'Câmara Municipal de Moodlecity',
		'casalegislativa_logo' => $OUTPUT->image_url('casalegislativa_logo', 'theme'),
		'casalegislativa_endereco' => 'Endereço da Casa Legislativa',
		'link_facebook' => 'https://www.facebook.com.br',
		'link_twitter' => 'https://www.twitter.com.br',
		'link_youtube' => 'https://www.youtube.com.br',
		'evl_logo' => $OUTPUT->image_url('logo_evl', 'theme'),
		'evl_url' => 'https://evl.interlegis.leg.br',
		'facebook_logo' => $OUTPUT->image_url('facebook_logo', 'theme'),
		'twitter_logo' => $OUTPUT->image_url('twitter_logo', 'theme'),
		'youtube_logo' => $OUTPUT->image_url('youtube_logo', 'theme'),
		'flickr_logo' => $OUTPUT->image_url('flickr_logo', 'theme'),
		'1_imagem_card' => $OUTPUT->image_url('1_imagem_card', 'theme'),
		'2_imagem_card' => $OUTPUT->image_url('2_imagem_card', 'theme'),
		'3_imagem_card' => $OUTPUT->image_url('3_imagem_card', 'theme'),
		'4_imagem_card' => $OUTPUT->image_url('4_imagem_card', 'theme'),
		'5_imagem_card' => $OUTPUT->image_url('5_imagem_card', 'theme'),
		'6_imagem_card' => $OUTPUT->image_url('6_imagem_card', 'theme'),
		'output.favicon' => $OUTPUT->image_url('favicon', 'theme'),
		'cursos_evl' => $destaques_evl,		 //$response->body
		'footer' => $footer, 
		'cursos_home' => $cursosHome,
		'central_autenticacao_url' => $central_autenticacao_url,
		'session' => sesskey(),
		'avisos' => $avisosHome,
		'user_picture_url' => $user_picture_url,
		'user_name' => $user_name
	];

// Descobrir quais categorias de curso estão disponíveis para serem exibidas
// Obter nome, e-mail de contato e demais informações relevantes
// Obter eventuais notícias para exibição
// Obter configurações para rodapé (links para outros sites e contatos em redes sociais)
} else {
	$templatecontext = [
    	'sitename' => format_string($SITE->shortname, true, ['context' => context_course::instance(SITEID), "escape" => false]),
    	'output' => $OUTPUT,
	    'bodyattributes' => $bodyattributes,
		'projetos_especiais' => $OUTPUT->image_url('projetos_especiais', 'theme'),
	    'conheca-senado' => $OUTPUT->image_url('conheca-senado', 'theme'),
	    'Cursos-on-line-sem-tutor' => $OUTPUT->image_url('Cursos-on-line-sem-tutor', 'theme'),
	    'Cursos-on-line' => $OUTPUT->image_url('Cursos-on-line', 'theme'),
	    'formacao_interna' => $OUTPUT->image_url('formacao_interna', 'theme'),
	    'oficinas-interlegis' => $OUTPUT->image_url('oficinas-interlegis', 'theme'),
	    'pos-graduacao' => $OUTPUT->image_url('pos-graduacao', 'theme'),
	    'video-aula' => $OUTPUT->image_url('video-aula', 'theme'),
	    'fundo-c' => $OUTPUT->image_url('fundo-c', 'theme'),
	    'icon_ContatoEmail-azul' => $OUTPUT->image_url('icon_ContatoEmail-azul', 'theme'),
	    'icon_ContatoFone-azul' => $OUTPUT->image_url('icon_ContatoFone-azul', 'theme'),
	    'logo_saberes_xl' => $OUTPUT->image_url('logo_saberes_xl', 'theme'),
	    'moodle_url' => $CFG->wwwroot,
		'casalegislativa_nome' => 'Câmara Municipal de Moodlecity',
		'casalegislativa_logo' => $OUTPUT->image_url('casalegislativa_logo', 'theme'),
		'casalegislativa_endereco' => 'Endereço da Casa Legislativa',
		'link_facebook' => 'https://www.facebook.com.br',
		'link_twitter' => 'https://www.twitter.com.br',
		'link_youtube' => 'https://www.youtube.com.br',
		'evl_logo' => $OUTPUT->image_url('logo_evl', 'theme'),
		'evl_url' => 'https://evl.interlegis.leg.br',
        'facebook_logo' => $OUTPUT->image_url('facebook_logo', 'theme'),
        'twitter_logo' => $OUTPUT->image_url('twitter_logo', 'theme'),
        'youtube_logo' => $OUTPUT->image_url('youtube_logo', 'theme'),
        'flickr_logo' => $OUTPUT->image_url('flickr_logo', 'theme'),
        '1_imagem_card' => $OUTPUT->image_url('1_imagem_card', 'theme'),
        '2_imagem_card' => $OUTPUT->image_url('2_imagem_card', 'theme'),
        '3_imagem_card' => $OUTPUT->image_url('3_imagem_card', 'theme'),
        '4_imagem_card' => $OUTPUT->image_url('4_imagem_card', 'theme'),
        '5_imagem_card' => $OUTPUT->image_url('5_imagem_card', 'theme'),
        '6_imagem_card' => $OUTPUT->image_url('6_imagem_card', 'theme'),
        'output.favicon' => $OUTPUT->image_url('favicon', 'theme'),
		'cursos_evl' => $destaques_evl, 
		'footer' => $footer, 
		'cursos_home' => $cursosHome,
		'central_autenticacao_url' => $central_autenticacao_url,
		'session' => sesskey(),
		'avisos' => $avisosHome,
		'user_picture_url' => '',
		'user_name' => ''
	];
}

echo $OUTPUT->render_from_template('theme_escola_modelo/frontpage', $templatecontext);
