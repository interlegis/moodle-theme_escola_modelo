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

//$central_autenticacao_url = evlURLWebServices();

// $destaquesEVL = '{
// 	cursos: {

// 	}
// }';

// $uri = 'https://escolamodelows.interlegis.leg.br/api/v1/cursos?key=k4B5YcbKa619ohu3wxk2xXbmtoxFuQqrwcKEOTAnZi7iy4tl9z';
// $response = \Httpful\Request::get($uri)
// 	->expectsJson()
// 	//->body($json)
// 	->send();
$destaques_evl = ''; //$response->body;

//echo $response;

//'Rodapé da <a href="https://saberes.whatever.qq.leg.br">Escola da Câmara Municipal de Moodlecity</a>';

$indMostrarCarrossel = true;
$bodyattributes = ''; //$OUTPUT->body_attributes($extraclasses);

function getJsonCursosHome() {
	return json_decode(
		'{ "categorias" : 
			[ 
				{
					"categoria": {
						"id" : "1",
						"nome": "Categoria 1"
					},
					"cursos": [
						{
							"id": "1",
							"nome": "Curso 1",
							"descricao": "Descrição do curso 1"
						},
						{
							"id": "2",
							"nome": "Curso 2",
							"descricao": "Descrição do curso 1"
						}
					]
				}, 
				{
					"categoria": {
						"id" : "2",
						"nome": "Categoria 2"
					},
					"cursos": [
						{
							"id": "3",
							"nome": "Curso 3",
							"descricao": "Descrição do curso 3"
						}
					]
				}
			]
		}'
	);
}

$cursosHome = getJsonCursosHome();
//$avisoHome = getAviso();


if (isloggedin()) {
	user_preference_allow_ajax_update('drawer-open-nav', PARAM_ALPHA);
	require_once($CFG->libdir . '/behat/lib.php');

	$blockshtml = $OUTPUT->blocks('side-pre');
	$hasblocks = strpos($blockshtml, 'data-block=') !== false;
	$regionmainsettingsmenu = $OUTPUT->region_main_settings_menu();

	//$user_picture = false;
	//if ($user->picture) {
	//$user_picture = get_file_url($USER->id.'/'.$size['large'].'.jpg', null, 'user');
	//}
	global $USER,$PAGE;
	$user_picture=new user_picture($USER);
	$user_picture_url=$user_picture->get_url($PAGE);
	$user_profile_url=$CFG->wwwroot . "/user/profile.php?id=" . $USER->id . "&course=1";


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
		'session' => sesskey()
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
		'session' => sesskey()
	];
}

echo $OUTPUT->render_from_template('theme_escola_modelo/frontpage', $templatecontext);
