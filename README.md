easy_slider
===========

Easy slider is an early version of slider that takes data from mysql or any else database and makes slider html-code with navigation arrows and slide pages switcher.
Requirements: jquery 1.2+, php 4.6+



example of using easy slider
============================

for working with slider you need add class SliderGen and include sliderGen.js to project and make a new copy:
$slider_newsnotes = new SliderGen();

then you need to initialize slider parameters:
a)SetOutControls(number of elements per slide page, class for jQuery to find slider container, id for left arrow, id for right arrow, class of container that will cover items when page changes, no ajax mode yet-> 0)
$slider_newsnotes->SetOutControls(3, "sector1", "nnotes_left_arrow", "nnotes_right_arrow", "nnotes_back_shadow", 0);

b)SetInnerControls(class of item container, class of items iterator, class that makes item invisible)
$slider_newsnotes->SetInnerControls("nnotes_item_area", "item_i", "no_show");

c)SetSwitchControls(class of switch container, class of switch page changer, class of page changer iterator, active page changer image resource, intactive page changer image resource, class that indicates active page changer, need to show switcher// i had to make this first parameter, i know, i'll do it at next update)
$slider_newsnotes->SetSwitchControls("sector1", "nnotes_switch_item", "item", "/design/site/images/fast_switch_a.gif", "/design/site/images/fast_switch.gif", "act", 1);

d)You need to make a template for single item output html like this('-*-' - will be changed to item hide class, for example "no_show", '-[1]-' - will be changed to same (for example second position) position in input data array):
$slider_newsnotes->SetTemplate('<div class="nnotes_item_area-[*]-">
                            <div class="nnotes_item">
                                <div class="nnotes_img" style="background-image: url(+[0]+);"></div>
                                <div class="nnotes_back_shadow"></div>
                                <div class="item_head_area">
                                    <a class="nnotes_item_head" href="/+[1]+/news/+[2]+/">+[3]+</a>
                                </div>
                                <p>+[4]+</p>
                                <a class="like_cnt" href="javascript: void(0);" onclick="makeLike();">0</a>
                                <a class="comnt_cnt" href="javascript: void(0);" onclick="makeComm();">0</a>
                            </div>
                        </div>');

e)You need to make a template for body slider html like this('+[content]+' - will be changed to items html):
$slider_newsnotes->SetOuter('
        <div class="nnotes_slider_area">
            <a id="nnotes_left_arrow" class="nnotes_left_arrow" href="javascript: void(0);"></a>
            <a id="nnotes_right_arrow" class="nnotes_right_arrow" href="javascript: void(0);"></a>
            <div class="nnotes_slider_inner_area">
                <div class="nnotes_slider_body">
                    +[content]+
                </div>
            </div>
        </div>');
            
f)If yoy need switch html output, you need to make a template for it like this ('-[<img +[*]+ />]-' - will be changed to change page images with iterator class, img src property, onclick attribute and etc.):
$slider_newsnotes->SetSwitchHtml('<div class="nnotes_switch_area"><div class="grey_line"></div>-[<img +[*]+ />]-</div>');



All code should be looking like this:

▲ somewhere up there it should be require_once with class.slide.gen.php and <script src="sliderGen.js"... ▲


$slider_newsnotes_html = "";

$slider_newsnotes = new SliderGen();

$slider_newsnotes->SetOutControls(3, "sector1", "nnotes_left_arrow", "nnotes_right_arrow", "nnotes_back_shadow", 0);
$slider_newsnotes->SetInnerControls("nnotes_item_area", "item_i", "no_show");
$slider_newsnotes->SetSwitchControls("sector1", "nnotes_switch_item", "item", "/design/site/images/fast_switch_a.gif", "/design/site/images/fast_switch.gif", "act", 1);

$slider_newsnotes->SetTemplate('<div class="nnotes_item_area-[*]-">
                            <div class="nnotes_item">
                                <div class="nnotes_img" style="background-image: url(+[0]+);"></div>
                                <div class="nnotes_back_shadow"></div>
                                <div class="item_head_area">
                                    <a class="nnotes_item_head" href="/+[1]+/news/+[2]+/">+[3]+</a>
                                </div>
                                <p>+[4]+</p>
                                <a class="like_cnt" href="javascript: void(0);" onclick="makeLike();">0</a>
                                <a class="comnt_cnt" href="javascript: void(0);" onclick="makeComm();">0</a>
                            </div>
                        </div>');

$slider_newsnotes->SetOuter('
        <div class="nnotes_slider_area">
            <a id="nnotes_left_arrow" class="nnotes_left_arrow" href="javascript: void(0);"></a>
            <a id="nnotes_right_arrow" class="nnotes_right_arrow" href="javascript: void(0);"></a>
            <div class="nnotes_slider_inner_area">
                <div class="nnotes_slider_body">
                    +[content]+
                </div>
            </div>
        </div>');

$slider_newsnotes->SetSwitchHtml('<div class="nnotes_switch_area"><div class="grey_line"></div>-[<img +[*]+ />]-</div>');

$slider_newsnotes->items_arr = array(
    0 => array('img1.jpg', 'society', 'header_alias_1', 'header_1'),
    1 => array('img2.jpg', 'society', 'header_alias_2', 'header_2'),
    2 => array('img3.jpg', 'politics', 'header_alias_3', 'header_3'),
    3 => array('img4.jpg', 'sports', 'header_alias_4', 'header_4'),
    4 => array('img5.jpg', 'society', 'header_alias_5', 'header_5')
  );

$slider_newsnotes_html = $slider_newsnotes->makeHTML();
