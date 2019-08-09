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
 * Course renderer.
 *
 * @package    theme_noanme
 * @copyright  2016 Frédéric Massart - FMCorz.net
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

namespace theme_escola_modelo\output\core;
defined('MOODLE_INTERNAL') || die();

use moodle_url;
use core_course_category;
use core_course_list_element;
use html_writer;
use coursecat_helper;
use stdClass;

require_once($CFG->dirroot . '/course/renderer.php');

/**
 * Course renderer class.
 *
 * @package    theme_noanme
 * @copyright  2016 Frédéric Massart - FMCorz.net
 * @license    http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */

/**
 * Class course_renderer
 * @package theme_trema
 * @copyright   2019 Trema - {@link https://trema.tech/}
 * @author      Rodrigo Mady
 * @author      Trevor Furtado
 * @license     http://www.gnu.org/copyleft/gpl.html GNU GPL v3 or later
 */
class course_renderer extends \core_course_renderer {

    public function frontpage() {
        global $CFG, $SITE;

        $output = '';

        if (isloggedin() and !isguestuser() and isset($CFG->frontpageloggedin)) {
            $frontpagelayout = $CFG->frontpageloggedin;
        } else {
            $frontpagelayout = $CFG->frontpage;
        }

        foreach (explode(',', $frontpagelayout) as $v) {
            switch ($v) {
                // Display the main part of the front page.
                case FRONTPAGENEWS:
                    if ($SITE->newsitems) {
                        // Print forums only when needed.
                        require_once($CFG->dirroot .'/mod/forum/lib.php');
                        if (($newsforum = forum_get_course_forum($SITE->id, 'news')) &&
                                ($forumcontents = $this->frontpage_news($newsforum))) {
                            $newsforumcm = get_fast_modinfo($SITE)->instances['forum'][$newsforum->id];
                            $output .= $this->frontpage_part('skipsitenews', 'site-news-forum',
                                $newsforumcm->get_formatted_name(), $forumcontents);
                        }
                    }
                    break;

                case FRONTPAGEENROLLEDCOURSELIST:
                    $mycourseshtml = $this->frontpage_my_courses();
                    if (!empty($mycourseshtml)) {
                        $output .= $this->frontpage_part('skipmycourses', 'frontpage-course-list',
                            get_string('mycourses'), $mycourseshtml);
                    }
                    break;

                case FRONTPAGEALLCOURSELIST:
                    $availablecourseshtml = $this->frontpage_available_courses();
                    $output .= $this->frontpage_part('skipavailablecourses', 'frontpage-available-course-list',
                        get_string('availablecourses'), $availablecourseshtml);
                    break;

                case FRONTPAGECATEGORYNAMES:
                    $output .= $this->frontpage_part('skipcategories', 'frontpage-category-names',
                        get_string('categories'), $this->frontpage_categories_list());
                    break;

                case FRONTPAGECATEGORYCOMBO:
                    $output .= $this->frontpage_part('skipcourses', 'frontpage-category-combo',
                        get_string('courses'), $this->frontpage_combo_list());
                    break;

                case FRONTPAGECOURSESEARCH:
                    $output .= $this->box($this->course_search_form('', 'short'), 'mdl-align');
                    break;

            }
            $output .= '<br />';
        }

        return $output;
    }

    /**
     * Renders the list of courses for frontpage and /course
     *
     * If list of courses is specified in $courses; the argument $chelper is only used
     * to retrieve display options and attributes, only methods get_show_courses(),
     * get_courses_display_option() and get_and_erase_attributes() are called.
     *
     * @param coursecat_helper $chelper various display options
     * @param array $courses the list of courses to display
     * @param int|null $totalcount total number of courses (affects display mode if it is AUTO or pagination if applicable),
     *     defaulted to count($courses)
     * @return string
     */
    protected function coursecat_courses(coursecat_helper $chelper, $courses, $totalcount = null) {
        global $CFG;
        if ($totalcount === null) {
            $totalcount = count($courses);
        }
        if (!$totalcount) {
            // Courses count is cached during courses retrieval.
            return '';
        }
        if ($chelper->get_show_courses() == self::COURSECAT_SHOW_COURSES_AUTO) {
            // In 'auto' course display mode we analyse if number of courses is more or less than $CFG->courseswithsummarieslimit.
            if ($totalcount <= $CFG->courseswithsummarieslimit) {
                $chelper->set_show_courses(self::COURSECAT_SHOW_COURSES_EXPANDED);
            } else {
                $chelper->set_show_courses(self::COURSECAT_SHOW_COURSES_COLLAPSED);
            }
        }
        // Prepare content of paging bar if it is needed.
        $paginationurl = $chelper->get_courses_display_option('paginationurl');
        $paginationallowall = $chelper->get_courses_display_option('paginationallowall');
        if ($totalcount > count($courses)) {
            // There are more results that can fit on one page.
            if ($paginationurl) {
                // The option paginationurl was specified, display pagingbar.
                $perpage = $chelper->get_courses_display_option('limit', $CFG->coursesperpage);
                $page = $chelper->get_courses_display_option('offset') / $perpage;
                $pagingbar = $this->paging_bar($totalcount, $page, $perpage,
                    $paginationurl->out(false, array('perpage' => $perpage)));
                if ($paginationallowall) {
                    $pagingbar .= html_writer::tag('div', html_writer::link($paginationurl->out(false, array('perpage' => 'all')),
                        get_string('showall', '', $totalcount)), array('class' => 'paging paging-showall'));
                }
            } else if ($viewmoreurl = $chelper->get_courses_display_option('viewmoreurl')) {
                // The option for 'View more' link was specified, display more link.
                $viewmoretext = $chelper->get_courses_display_option('viewmoretext', new \lang_string('viewmore'));
                $morelink = html_writer::tag('div', html_writer::link($viewmoreurl, $viewmoretext),
                    array('class' => 'paging paging-morelink'));
            }
        } else if (($totalcount > $CFG->coursesperpage) && $paginationurl && $paginationallowall) {
            // There are more than one page of results and we are in 'view all' mode, suggest to go back to paginated view mode.
            $pagingbar = html_writer::tag(
                'div',
                html_writer::link(
                    $paginationurl->out(
                        false,
                        array('perpage' => $CFG->coursesperpage)
                        ),
                    get_string('showperpage', '', $CFG->coursesperpage)
                    ),
                array('class' => 'paging paging-showperpage')
                );
        }
        // Display list of courses.
        $attributes = $chelper->get_and_erase_attributes('courses');
        $content = html_writer::start_tag('div', $attributes);
        if (!empty($pagingbar)) {
            $content .= $pagingbar;
        }
        $coursecount = 1;
        $content .= html_writer::start_tag('div', array('class' => ' row card-deck my-4'));
        foreach ($courses as $course) {
            $content .= $this->coursecat_coursebox($chelper, $course, 'card mb-3 course-card-view boxCursos tamanhoBoxCursos');
            $coursecount ++;
        }
        $content .= html_writer::end_tag('div');
        if (!empty($pagingbar)) {
            $content .= $pagingbar;
        }
        if (!empty($morelink)) {
            $content .= $morelink;
        }
        $content .= html_writer::end_tag('div'); // End courses.

        return $content;
    }
    /**
     * Displays one course in the list of courses.
     *
     * This is an internal function, to display an information about just one course
     * please use {@link core_course_renderer::course_info_box()}
     *
     * @param coursecat_helper $chelper various display options
     * @param core_course_list_element|stdClass $course
     * @param string $additionalclasses additional classes to add to the main <div> tag (usually
     *    depend on the course position in list - first/last/even/odd)
     * @return string
     */
    protected function coursecat_coursebox(coursecat_helper $chelper, $course, $additionalclasses = '') {
        global $CFG;
        if (!isset($this->strings->summary)) {
            $this->strings->summary = get_string('summary');
        }
        if ($chelper->get_show_courses() <= self::COURSECAT_SHOW_COURSES_COUNT) {
            return '';
        }
        if ($course instanceof stdClass) {
            $course = new core_course_list_element($course);
        }
        $content = html_writer::start_tag('div', array('class' => $additionalclasses));
        $classes = '';
        if ($chelper->get_show_courses() >= self::COURSECAT_SHOW_COURSES_EXPANDED) {
            $nametag = 'h5';
        } else {
            $classes .= ' collapsed';
            $nametag = 'div';
        }
        // End coursebox.
        $content .= html_writer::start_tag('div', array(
            'class' => $classes,
            'data-courseid' => $course->id,
            'data-type' => self::COURSECAT_TYPE_COURSE,
        ));
        $content .= $this->coursecat_coursebox_content($chelper, $course);
        $content .= html_writer::end_tag('div');
        // End coursebox.
        $content .= html_writer::end_tag('div');
        // End col-md-4.
        return $content;
    }
    /**
     * Returns HTML to display course content (summary, course contacts and optionally category name)
     *
     * This method is called from coursecat_coursebox() and may be re-used in AJAX
     *
     * @param coursecat_helper $chelper various display options
     * @param stdClass|core_course_list_element $course
     * @return string
     */
    protected function coursecat_coursebox_content(coursecat_helper $chelper, $course) {
        if ($course instanceof stdClass) {
            $course = new core_course_list_element($course);
        }
        // Course name.
        $coursename = $chelper->get_course_formatted_name($course);
        $courseurl = new moodle_url('/course/view.php', array('id' => $course->id));
        $coursenamelink = html_writer::link($courseurl,
            $coursename, array('class' => $course->visible ? 'propertiesTextColor' : 'dimmed propertiesTextColor'));
        $content = html_writer::start_tag('a', array ('href' => $courseurl, 'class' => 'course-card-img'));
        $content .= $this->get_course_summary_image($course);
        $content .= html_writer::end_tag('a');
        $content .= html_writer::start_tag('div', array('class' => 'card-body'));
        $content .= "<div class='elegantshd textCardEdited'>". $coursenamelink ."</div>";
        $content .= html_writer::end_tag('div');
        // if ($course->has_course_contacts()) {
        //     $content .= html_writer::start_tag('div', array('class' => 'card-footer teachers'));
        //     $content .= html_writer::start_tag('ul');
        //     foreach ($course->get_course_contacts() as $userid => $coursecontact) {
        //         $name = $coursecontact['rolename'].': '.
        //             html_writer::link(new moodle_url('/user/view.php',
        //                 array('id' => $userid, 'course' => SITEID)),
        //                 $coursecontact['username']);
        //             $content .= html_writer::tag('li', $name);
        //     }
        //     $content .= html_writer::end_tag('ul'); // End teachers.
        //     $content .= html_writer::end_tag('div'); // End teachers.
        // }
        // Display course category if necessary (for example in search results).
        if ($chelper->get_show_courses() == self::COURSECAT_SHOW_COURSES_EXPANDED_WITH_CAT) {
            if ($cat = core_course_category::get($course->category, IGNORE_MISSING)) {
                $content .= html_writer::start_tag('div', array('class' => 'coursecat text-center'));
                $content .= get_string('category').': '.
                    html_writer::link(new moodle_url('/course/index.php', array('categoryid' => $cat->id)),
                        $cat->get_formatted_name(), array('class' => $cat->visible ? '' : 'dimmed'));
                    $content .= html_writer::end_tag('div'); // End coursecat.
            }
        }

        // Display course summary.

            $content .= html_writer::start_tag('div', array('class' => 'card-see-more text-center teste'));
            if ($icons = enrol_get_course_info_icons($course)) {
                $content .= html_writer::start_tag('div', 
                    array('class' => 'btn btn-inscrever',
                          'onclick'=>"window.location.href='" . $courseurl . "';")
                );
                $content .= 'Inscrever';
                $content .= html_writer::end_tag('div');
            }
            //if ($course->has_summary() && false) {
                $content .= html_writer::start_tag('div', array('class' => 'btn btn-mais-info m-2',
                    'id' => "course-popover-{$course->id}", 'role' => 'button', 'data-region' => 'popover-region-toggle',
                    'data-toggle' => 'popover', 'data-placement' => 'right',
                    'data-content' => $chelper->get_course_formatted_summary($course,
                    array('noclean' => true, 'para' => false)), 'data-html' => 'true', 'tabindex' => '0', 'data-trigger' => 'focus'));
                $content .= 'Mais informações';
                $content .= html_writer::end_tag('div');
            //}
            $content .= html_writer::end_tag('div'); // End summary.
        
        return $content;
    }
    /** <img src=""
     * Returns the first course's summary issue
     *
     * @param stdClass $course the course object
     * @return string
     */
    protected function get_course_summary_image($course) {
        global $CFG;
        $contentimage = '';
        foreach ($course->get_course_overviewfiles() as $file) {
            $isimage = $file->is_valid_image();
            $url = file_encode_url("$CFG->wwwroot/pluginfile.php",
                '/'. $file->get_contextid(). '/'. $file->get_component(). '/'.
                $file->get_filearea(). $file->get_filepath(). $file->get_filename(), !$isimage);
                if ($isimage) {
                $contentimage = html_writer::start_tag('img', array('src' => "$url",
                    'class' => 'card-img-top minheight'));
                $contentimage .= html_writer::end_tag('img');
                break;
            }
        }
        if (empty($contentimage)) {
            $pattern = new \core_geopattern();
            $pattern->setColor($this->coursecolor($course->id));
            $pattern->patternbyid($course->id);
            $contentimage = html_writer::start_tag('div', array('style' => "background-image:url('{$pattern->datauri()}')",
            'class' => 'card-img-top minheight'));
            $contentimage .= html_writer::end_tag('div');
        }

        return $contentimage;
    }
    /**
     * Generate a semi-random color based on the courseid number (so it will always return
     * the same color for a course)
     *
     * @param int $courseid
     * @return string $color, hexvalue color code.
     */
    protected function coursecolor($courseid) {
        // The colour palette is hardcoded for now. It would make sense to combine it with theme settings.
        $basecolors = ['#81ecec', '#74b9ff', '#a29bfe', '#dfe6e9', '#00b894', '#0984e3', '#b2bec3',
                        '#fdcb6e', '#fd79a8', '#6c5ce7'];
        $color = $basecolors[$courseid % 10];
        return $color;
    }
}


// class course_renderer extends \core_course_renderer {

//     /**
//      * Renders html to display a course search form.
//      *
//      * @param string $value default value to populate the search field
//      * @param string $format display format - 'plain' (default), 'short' or 'navbar'
//      * @return string
//      */
//     public function course_search_form($value = '', $format = 'plain') {
//         static $count = 0;
//         $formid = 'coursesearch';
//         if ((++$count) > 1) {
//             $formid .= $count;
//         }

//         switch ($format) {
//             case 'navbar' :
//                 $formid = 'coursesearchnavbar';
//                 $inputid = 'navsearchbox';
//                 $inputsize = 20;
//                 break;
//             case 'short' :
//                 $inputid = 'shortsearchbox';
//                 $inputsize = 12;
//                 break;
//             default :
//                 $inputid = 'coursesearchbox';
//                 $inputsize = 30;
//         }

//         $data = (object) [
//             'searchurl' => (new moodle_url('/course/search.php'))->out(false),
//             'id' => $formid,
//             'inputid' => $inputid,
//             'inputsize' => $inputsize,
//             'value' => $value
//         ];
//         if ($format != 'navbar') {
//             $helpicon = new \help_icon('coursesearch', 'core');
//             $data->helpicon = $helpicon->export_for_template($this);
//         }

//         return $this->render_from_template('theme_escola_modelo/course_search_form', $data);
//     }

// }
