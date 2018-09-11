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

if (isloggedin()) {
	user_preference_allow_ajax_update('drawer-open-nav', PARAM_ALPHA);
	require_once($CFG->libdir . '/behat/lib.php');

  $navdraweropen = (get_user_preferences('drawer-open-nav', 'true') == 'true');
	$extraclasses = [];
	if ($navdraweropen) {
	    $extraclasses[] = 'drawer-open-left';
	}
//$bodyattributes = $OUTPUT->body_attributes($extraclasses);
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


// Descobrir quais categorias de curso estão disponíveis para serem exibidas
// Obter nome, e-mail de contato e demais informações relevantes
// Obter eventuais notícias para exibição
// Obter configurações para rodapé (links para outros sites e contatos em redes sociais)

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
		'evl_url' => 'https://evl.interlegis.leg.br'
	];
	

	
	echo $OUTPUT->render_from_template('theme_escola_modelo/frontpage', $templatecontext);
}
