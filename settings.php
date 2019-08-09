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
 * @package   theme_escola_modelo
 * @copyright 2016 Ryan Wyllie
 * @license   http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

defined('MOODLE_INTERNAL') || die();

if ($ADMIN->fulltree) {
    $settings = new theme_escola_modelo_admin_settingspage_tabs('themesettingescola_modelo', get_string('configtitle', 'theme_escola_modelo'));
    $page = new admin_settingpage('theme_escola_modelo_general', get_string('generalsettings', 'theme_escola_modelo'));

    // Background image setting.
    $name = 'theme_escola_modelo/backgroundimage';
    $title = get_string('backgroundimage', 'theme_escola_modelo');
    $description = get_string('backgroundimage_desc', 'theme_escola_modelo');
    $setting = new admin_setting_configstoredfile($name, $title, $description, 'backgroundimage');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    // Indicador de mensagem de aviso

    // Texto da mensagem de aviso

    // Mensagem de boas vindas
    $name = 'theme_escola_modelo/welcome';
    $title = get_string('welcome', 'theme_escola_modelo');
    $description = get_string('welcome_desc', 'theme_escola_modelo');
    $setting = new admin_setting_confightmleditor($name, $title, $description, 'welcome');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    // Cabeçalho principal
    $name = 'theme_escola_modelo/header';
    $title = get_string('header', 'theme_escola_modelo');
    $description = get_string('header_desc', 'theme_escola_modelo');
    $setting = new admin_setting_confightmleditor($name, $title, $description, 'header');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    // Rodapé principal
    $name = 'theme_escola_modelo/footer';
    $title = get_string('footer', 'theme_escola_modelo');
    $description = get_string('footer_desc', 'theme_escola_modelo');
    $setting = new admin_setting_confightmleditor($name, $title, $description, 'footer');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    // Rodapé simples
    $name = 'theme_escola_modelo/footersimple';
    $title = get_string('footersimple', 'theme_escola_modelo');
    $description = get_string('footersimple_desc', 'theme_escola_modelo');
    $setting = new admin_setting_confightmleditor($name, $title, $description, 'footersimple');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    // Cursos em destaque
    
/*    admin_setting_configtext - The most flexible setting, the user enters text.
    admin_setting_configtextarea - General text area without html editor. Useful for things like raw CSS
    admin_setting_confightmleditor - A full html editor using the systems default text editor. Good for editing HTML
    admin_setting_configpasswordunmask - Works like a password field - but isn't one. Good for shared secrets etc
    admin_setting_configfile - Good for listing a file stored on the server. Does not allow uploading files
    admin_setting_configexecutable - More specific version of admin_setting_configfile. The file is checked to make sure it can be executed by the webserver
    admin_setting_configcheckbox - Are you cool [ ]
    admin_setting_configselect - Choose from a list of values
    admin_setting_configstoredfile - Allow uploading of files and storing in moodle file storage
    admin_setting_configcolourpicker - Interactive colour picker
*/

/*

    // Preset.
    $name = 'theme_escola_modelo/preset';
    $title = get_string('preset', 'theme_escola_modelo');
    $description = get_string('preset_desc', 'theme_escola_modelo');
    $default = 'default.scss';

    $context = context_system::instance();
    $fs = get_file_storage();
    $files = $fs->get_area_files($context->id, 'theme_escola_modelo', 'preset', 0, 'itemid, filepath, filename', false);

    $choices = [];
    foreach ($files as $file) {
        $choices[$file->get_filename()] = $file->get_filename();
    }
    // These are the built in presets.
    $choices['default.scss'] = 'default.scss';
    $choices['plain.scss'] = 'plain.scss';

    $setting = new admin_setting_configselect($name, $title, $description, $default, $choices);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    // Preset files setting.
    $name = 'theme_escola_modelo/presetfiles';
    $title = get_string('presetfiles','theme_escola_modelo');
    $description = get_string('presetfiles_desc', 'theme_escola_modelo');

    $setting = new admin_setting_configstoredfile($name, $title, $description, 'preset', 0,
        array('maxfiles' => 20, 'accepted_types' => array('.scss')));
    $page->add($setting);

    // Variable $body-color.
    // We use an empty default value because the default colour should come from the preset.
    $name = 'theme_escola_modelo/brandcolor';
    $title = get_string('brandcolor', 'theme_escola_modelo');
    $description = get_string('brandcolor_desc', 'theme_escola_modelo');
    $setting = new admin_setting_configcolourpicker($name, $title, $description, '');
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    // Must add the page after definiting all the settings!
    $settings->add($page);

    // Advanced settings.
    $page = new admin_settingpage('theme_escola_modelo_advanced', get_string('advancedsettings', 'theme_escola_modelo'));

    // Raw SCSS to include before the content.
    $setting = new admin_setting_scsscode('theme_escola_modelo/scsspre',
        get_string('rawscsspre', 'theme_escola_modelo'), get_string('rawscsspre_desc', 'theme_escola_modelo'), '', PARAM_RAW);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);

    // Raw SCSS to include after the content.
    $setting = new admin_setting_scsscode('theme_escola_modelo/scss', get_string('rawscss', 'theme_escola_modelo'),
        get_string('rawscss_desc', 'theme_escola_modelo'), '', PARAM_RAW);
    $setting->set_updatedcallback('theme_reset_all_caches');
    $page->add($setting);
*/


    $settings->add($page);
}
