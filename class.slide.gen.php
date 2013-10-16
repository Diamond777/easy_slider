<?
    //generating slider class by Diamond (requires jquery ver. >= 1.4)

    //needs:
    //$CSS_path - path to slide.css
    //$JS_path  - path to slide.js
    //$AJAX_path  - path to sliderPageLoad.php
    //$sliderContainer - class of slider container
    //$splash_class - class of shadow container
    //$lp_class - class of loading progress image (animate gif is default)
    //$lp_class_ok - class of loading finish image
    //$slider_id_left - id of left arrow
    //$slider_id_right - id of left arrow


    class SliderGen
    {
        var $CSS_path;
        var $JS_path;
        var $AJAX_path;
        var $genType; //тип слайдера (slide/splash/switch/slide_all)
        var $itemInner; //наполнение элемента слайдера (html) - для сериализации
        var $itemOuter; //наполнение элемента слайдера (html) - обрамление
        var $itemSwitch; //наполнение слайдера (html) - слайдер
        var $sliderContainer; //уникальный класс контейнера для слайдера (для защиты от перетирания слайдеров друг другом)
        var $itemClass; //уникальный класс контейнера для слайдера (для защиты от перетирания слайдеров друг другом)
        var $itemsCount; //количество элементов на странице
        var $ajax_mode; //нужен ли ajax
        var $hide_this_class; //если нет ajax - скрывать лишние контейнеры, применяя класс заменяя в шаблоне -[*]- на $hide_this_class
        var $switchClass; //класс области содержащей элементы переключения
        var $switchItemClass; //общий класс элемента переключения
        var $switchItemCountClass; //класс со счетчиком элемента переключения
        var $switchResAct; //путь к картинке для переключения (актив) 19х19 пикс
        var $switchResInAct; //путь к картинке для переключения (неактив) 19х19 пикс
        var $switchItemActClass; //класс-признак активности переключателя
        var $switchNeedMake; //нужно ли автоматически составлять свитчер
        var $pagesCount; //нужно ли автоматически составлять свитчер

        var $items_arr; //массив выводимых данных
        function SliderGen()
        {
            $this->CSS_path = "/design/site/css/slide.css";
            $this->JS_path = "/design/site/js/slide.js";
            $this->AJAX_path = "/pages_ajax/sliderPageLoad.php";
            $this->genType = "splash";
            $this->itemInner = "";
            $this->itemsCount = 4;
            $this->itemsCount_class = "item_i";
            $this->splash_class = "slider_loader_background";
            $this->lp_class = "slider_loader_progress";
            $this->lp_class_ok = "slider_loader_finish";
            $this->slider_id_left = "slider_go_left";
            $this->slider_id_right = "slider_go_right";
            $this->hide_this_class = "no_show";
            $this->sliderContainer = "fast_slider_area";
            $this->itemClass = "ifns_item";
            $this->ajax_mode = 0;
            $this->switchClass = "fast_switch_area";
            $this->switchItemClass = "fast_switch_item";
            $this->switchItemCountClass = "item";
            $this->switchItemResAct = "fast_switch_item";
            $this->switchItemResInAct = "item";
            $this->switchItemActClass = "act";
            $this->switchNeedMake = 1;
            $this->itemSwitch = "";
            $this->pagesCount = 0;
        }

//========================= get-set
        function SetType($strType)
        {
            $this->genType = $strType;
        }
        function GetType()
        {
            return $this->genType;
        }

        function SetItemsCount($num_items_on_each_page)
        {
            $this->itemsCount = $num_items_on_each_page;
        }
        function GetItemsCount()
        {
            return $this->itemsCount;
        }

        function SetCSSPath($str)
        {
            $this->CSS_path = $str;
        }
        function GetCSSPath()
        {
            return $this->CSS_path;
        }

        function SetJSPath($str)
        {
            $this->JS_path = $str;
        }
        function GetJSPath()
        {
            return $this->JS_path;
        }

        function SetAJAXPath($str)
        {
            $this->CSS_path = $str;
        }
        function GetAJAXPath()
        {
            return $this->CSS_path;
        }

        function SetSplashClass($str)
        {
            $this->splash_class = $str;
        }
        function GetSplashClass()
        {
            return $this->splash_class;
        }

        function SetLpClass($str)
        {
            $this->lp_class = $str;
        }
        function GetLpClass()
        {
            return $this->lp_class;
        }

        function SetLpOkClass($str)
        {
            $this->lp_class_ok = $str;
        }
        function GetLpOkClass()
        {
            return $this->lp_class_ok;
        }

        function SetLeftArwId($str)
        {
            $this->slider_id_left = $str;
        }
        function GetLeftArwId()
        {
            return $this->slider_id_left;
        }

        function SetRightArwId($str)
        {
            $this->slider_id_right = $str;
        }
        function GetRightArwId()
        {
            return $this->slider_id_right;
        }

        function SetHideClass($str)
        {
            $this->hide_this_class = $str;
        }
        function GetHideClass()
        {
            return $this->hide_this_class;
        }

        function SetAjaxMode($str)
        {
            $this->ajax_mode = $str;
        }
        function GetAjaxMode()
        {
            return $this->ajax_mode;
        }

        function SetSliderContainer($str)
        {
            $this->sliderContainer = $str;
        }
        function GetSliderContainer()
        {
            return $this->sliderContainer;
        }

        function SetCounterClass($str)
        {
            $this->itemsCount_class = $str;
        }
        function GetCounterClass()
        {
            return $this->itemsCount_class;
        }

        function SetItemClass($str)
        {
            $this->itemClass = $str;
        }
        function GetItemClass()
        {
            return $this->itemClass;
        }

        function SetSwitchClass($str)
        {
            $this->switchClass = $str;
        }
        function GetSwitchClass()
        {
            return $this->switchClass;
        }

        function SetSwitchItemClass($str)
        {
            $this->switchItemClass = $str;
        }
        function GetSwitchItemClass()
        {
            return $this->switchItemClass;
        }

        function SetSwitchItemCountClass($str)
        {
            $this->switchItemCountClass = $str;
        }
        function GetSwitchItemCountClass()
        {
            return $this->switchItemCountClass;
        }

        function SetSwitchItemResAct($str)
        {
            $this->switchResAct = $str;
        }
        function GetSwitchItemResAct()
        {
            return $this->switchResAct;
        }

        function SetSwitchItemResInAct($str)
        {
            $this->switchResInAct = $str;
        }
        function GetSwitchItemResInAct()
        {
            return $this->switchResInAct;
        }

        function SetSwitchItemActClass($str)
        {
            $this->switchItemActClass = $str;
        }
        function GetSwitchItemActClass()
        {
            return $this->switchItemActClass;
        }

        function SetSwitchNeedMake($str)
        {
            $this->switchNeedMake = $str;
        }
        function GetSwitchNeedMake()
        {
            return $this->switchNeedMake;
        }

        function SetSwitchHtml($str)
        {
            $this->itemSwitch = $str;
        }
        function GetSwitchHtml()
        {
            return $this->itemSwitch;
        }

        function SetTemplate($str)
        {//функция, устанавливающая шаблон
            $this->itemInner = $str;
        }

        function SetOuter($str)
        {//функция, устанавливающая внешнее обрамление
            $this->itemOuter = $str;
        }

        function SetOutControls($str_ItemsCount = 4, $str_SliderContainer, $str_LeftArwId, $str_RightArwId, $str_SplashClass, $str_AjaxMode = 1, $str_LpClass = "", $str_LpOkClass = "")
        {
            $this->SetItemsCount($str_ItemsCount);
            $this->SetSliderContainer($str_SliderContainer);
            $this->SetLeftArwId($str_LeftArwId);
            $this->SetRightArwId($str_RightArwId);
            $this->SetSplashClass($str_SplashClass);
            $this->SetAjaxMode($str_AjaxMode);
            $this->SetLpClass($str_LpClass);
            $this->SetLpOkClass($str_LpOkClass);
        }

        function SetInnerControls($str_ItemClass, $str_CounterClass, $str_HideClass)
        {
            $this->SetItemClass($str_ItemClass);
            $this->SetCounterClass($str_CounterClass);
            $this->SetHideClass($str_HideClass);
        }

        function SetSwitchControls($str_SwitchClass, $str_SwitchItemClass, $str_SwitchItemCountClass, $str_SwitchItemResAct, $str_SwitchItemResInAct, $str_SwitchItemActClass, $str_SwitchNeedMake = 0)
        {
            $this->SetSwitchClass($str_SwitchClass);
            $this->SetSwitchItemClass($str_SwitchItemClass);
            $this->SetSwitchItemCountClass($str_SwitchItemCountClass);
            $this->SetSwitchItemResAct($str_SwitchItemResAct);
            $this->SetSwitchItemResInAct($str_SwitchItemResInAct);
            $this->SetSwitchItemActClass($str_SwitchItemActClass);
            $this->SetSwitchNeedMake($str_SwitchNeedMake);
        }

//========================= work functions
        function GenStart()
        {
            $html = "";
            return $html;
        }

        function GenData()
        {//функция, заполняющая массив данных

        }

        function TryInner($strTemplate)
        {//проверка подходит ли содержимое к шаблону элемента прокрутки

            //$answer == 1 -> все в порядке
            //$answer == 0 -> количество сущностей для вставок не совпадает с количеством ключей массива
            //$answer == '[произвольный текст]' -> сообщение о какой-либо ошибке
            $answer = 1;
            if(!is_array($strTemplate) || count($strTemplate) == 0)
            {
                $answer = "empty SliderGen::items_arr, fill items_arr with data";
                return $answer;
            }

            preg_match_all("/\+\[(\d+?)\]\+/s", $strTemplate, $match_params);

            if(!isset($match_params[1]) || count($match_params[1]) != count($this->items_arr[0]))
            {
                $answer = 0;
                return $answer;
            }
            return answer;
        }

        function GenHTML($strTemplate)
        {//получение html внутренностей слайдера
            $answer = array(-1, "clean");
            $try_val = $this->TryInner($strTemplate);
            if($try_val == 0)
            {
                $answer = array(0, "Error! Can't use template for data at items_arr.");
            }
            elseif($try_val != 1)
            {
                $answer = array(2, $try_val);
            }
            elseif($try_val == 1)
            {
                $answer = array(1, "OK");
            }

            $answer;
        }

        function makeHTML($rtype = false)
        {//универсальное создание html
            $html = 0;
            if(trim($this->itemOuter == "") || !is_array($this->items_arr) || !isset($this->items_arr[0]) || count($this->items_arr[0]) == 0)
            {//если: нет обрамления || нет наполнения items_arr || неверное наполнение items_arr || неверное наполнение items_arr
                $html = 0;
            }
            else
            {
                $inner_html = "";

                $my_c = -1;
                $item_cnter = 1;

                foreach($this->items_arr as $cur_item)
                {
                    $temp_html = $this->itemInner;
                    for($i = 0; $i < count($cur_item); $i++)
                    {
                        $temp_html = preg_replace("/\+\[" . $i . "\]\+/s", $cur_item[$i], $temp_html);
                    }

                    $my_c++;
                    if($my_c >= $this->itemsCount)
                        $temp_html = preg_replace("/\-\[\*\]\-/s", " " . $this->hide_this_class . " " . $this->itemsCount_class . $item_cnter, $temp_html);
                    else
                        $temp_html = preg_replace("/\-\[\*\]\-/s", " " . " " . $this->itemsCount_class . $item_cnter, $temp_html);


                    $inner_html .= $temp_html;

                    $item_cnter++;
                }

                $this->pagesCount = ceil(count($this->items_arr)/$this->GetItemsCount());

                $html = preg_replace("/\+\[content\]\+/s", $inner_html, $this->itemOuter);

                if($this->pagesCount > 1)
                {//установка действий для стрелок
                    $html = preg_replace("/(id=\"" . $this->slider_id_left . "\")/s", "${1} onclick=\"sliderSlideLeft('" . $this->GetSliderContainer() . "', '" . $this->GetLeftArwId() . "', '" . $this->itemsCount_class . "', '" . $this->GetItemClass() . "','" . $this->GetSplashClass() . "', '" . $this->GetLpClass() . "', '" . $this->GetLpOkClass() . "', '" . $this->GetItemsCount() . "', '" . $this->ajax_mode . "', '" . $this->switchClass . "', '" . $this->switchItemClass . "', '" . $this->switchItemActClass . "', '" . $this->switchItemCountClass . "', '" . $this->switchResAct . "', '" . $this->switchResInAct . "', '" . $this->hide_this_class . "');\"", $html);
                    $html = preg_replace("/(id=\"" . $this->slider_id_right . "\")/s", "${1} onclick=\"sliderSlideRight('" . $this->GetSliderContainer() . "', '" . $this->GetRightArwId() . "', '" . $this->itemsCount_class . "', '" . $this->GetItemClass() . "','" . $this->GetSplashClass() . "', '" . $this->GetLpClass() . "', '" . $this->GetLpOkClass() . "', '" . $this->GetItemsCount() . "', '" . $this->ajax_mode . "', '" . $this->switchClass . "', '" . $this->switchItemClass . "', '" . $this->switchItemActClass . "', '" . $this->switchItemCountClass . "', '" . $this->switchResAct . "', '" . $this->switchResInAct . "', '" . $this->hide_this_class . "');\"", $html);
                }
                else
                {//убираем стрелки т.к. страница одна
                    $html = preg_replace("/<a *?id=\"" . $this->slider_id_left . "\".*?\/a>/s", "", $html);
                    $html = preg_replace("/<a *?id=\"" . $this->slider_id_right . "\".*?\/a>/s", "", $html);
                }

                if($this->GetSwitchNeedMake() == 1)
                {
                    $temp_switch_html = $this->GetSwitchHtml();

                    preg_match("/\-\[(.*?)\]\-/s", $temp_switch_html, $item_matcher);

                    if(isset($item_matcher[1]) && trim($item_matcher[1]) != "" && $this->pagesCount > 1)
                    {
                        $temp_switch_item_html = $item_matcher[1];
                        $temp_switch_item_list_html = "";
                        for($i = 0; $i < $this->pagesCount; $i++)
                        {
                            if($i == 0)
                            {
                                $temp_switch_item_list_html .= preg_replace("/\+\[\*\]\+/s", 'class="' . $this->GetSwitchItemClass() . ' ' . $this->GetSwitchItemCountClass() . ($i+1) . ' act" onclick="sliderSlideNum(' . ($i+1) . ',\'' . $this->GetSliderContainer() . '\', \'' . $this->GetCounterClass()   . '\', \'' . $this->GetItemClass() . '\',\'' . $this->GetSplashClass() . '\', \'' . $this->GetLpClass() . '\', \'' . $this->GetLpOkClass() . '\', \'' . $this->GetItemsCount() . '\', \'' . $this->GetAjaxMode() . '\', \'' . $this->GetSwitchClass() . '\', \'' . $this->GetSwitchItemClass() . '\', \'' . $this->GetSwitchItemActClass() . '\', \'' . $this->GetSwitchItemCountClass() . '\', \'' . $this->GetSwitchItemResAct() . '\', \'' . $this->GetSwitchItemResInAct() . '\', \'' . $this->hide_this_class . '\');" src="' . $this->GetSwitchItemResAct() . '"' ,$temp_switch_item_html);
                            }
                            else
                            {
                                $temp_switch_item_list_html .= preg_replace("/\+\[\*\]\+/s", 'class="' . $this->GetSwitchItemClass() . ' ' . $this->GetSwitchItemCountClass() . ($i+1) . '" onclick="sliderSlideNum(' . ($i+1) . ',\'' . $this->GetSliderContainer() . '\', \'' . $this->GetCounterClass()   . '\', \'' . $this->GetItemClass() . '\',\'' . $this->GetSplashClass() . '\', \'' . $this->GetLpClass() . '\', \'' . $this->GetLpOkClass() . '\', \'' . $this->GetItemsCount() . '\', \'' . $this->GetAjaxMode() . '\', \'' . $this->GetSwitchClass() . '\', \'' . $this->GetSwitchItemClass() . '\', \'' . $this->GetSwitchItemActClass() . '\', \'' . $this->GetSwitchItemCountClass() . '\', \'' . $this->GetSwitchItemResAct() . '\', \'' . $this->GetSwitchItemResInAct() . '\', \'' . $this->hide_this_class . '\');" src="' . $this->GetSwitchItemResInAct() . '"' ,$temp_switch_item_html);
                            }
                        }
                        $html .= preg_replace("/\-\[.*?\]\-/s", $temp_switch_item_list_html, $temp_switch_html);
                    }
                }
            }

            if($rtype == "ifns")
            {
                $replace = 'last ';
                $counter = 0;
                $entry = 5;

                $html = preg_replace_callback(
                    '/\"ifns_item /',
                    function ($matches) use ($replace, &$counter, $entry) {
                        return (++$counter % $entry == 0) ? $matches[0] . $replace : $matches[0];
                    },
                    $html
                );
            }

            return $html;
        }

//========================= extended functions
		//there is no extended functions at now
    }
?>
