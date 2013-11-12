var slideBlocker = 0;
function sliderSlideLeft(outerClassName, leftArrowID, itemCounterClass, itemClass, sliderLoaderBackgroundClass, sliderLoaderProgressClass, sliderLoaderFinishClass, ItemsCount, ajaxMode, switchClass, switchItemClass, switchItemActClass, switchItemCountClass, switchResAct, switchResInAct, HideItemClass)
{
        //последовательность действий):
        //    если Ajax
        //    1)ставим заставку слайдера (SliderGen::splash_class)
        //    2)отображаем прогресс бар/ы (SliderGen::lp_class) (миннимум 1 секунда)
        //    3)получаем элементы для подстановки
        //    4)отображаем финальную картинку удачной загрузки бар/ы (SliderGen::lp_class_ok)
        //    5)подменяем отображаемые элементы новыми элементами
        //
        //    если не Ajax
        //    1)ставим заставку слайдера (SliderGen::splash_class)
        //    2)отображаем прогресс бар/ы (SliderGen::lp_class) (миннимум 1 секунда)
        //    3)отображаем финальную картинку удачной загрузки бар/ы (SliderGen::lp_class_ok)
        //    4)подменяем отображаемые элементы новыми элементами
        if(ajaxMode == 1)
        {

        }
        else
        {
            //получаем номера, которые необходимо обновить
            var f_item = 0;
            var l_item = 0;
            $("." + outerClassName + " ." + itemClass).each(function(){
                if($(this).css("display") == "block")
                {
                    f_item = parseInt($(this).attr("class").replace(/[a-zA-Z _]/g, ""));
                    return false;
                }
            });

            l_item = parseInt(f_item) + parseInt(ItemsCount);

            var work = sliderCheckSlide(f_item, outerClassName, itemClass, itemCounterClass, ItemsCount, "left", HideItemClass);

            if(work == 1)
            {
                sliderShowBack(f_item, l_item, outerClassName, itemCounterClass, ItemsCount, sliderLoaderBackgroundClass, sliderLoaderProgressClass, "left");
                //setTimeout('sliderShowFinish(' + f_item + ', ' + l_item + ', "' + outerClassName + '", "' + itemCounterClass + '", "' + ItemsCount + '", "' + sliderLoaderProgressClass + '", "' + sliderLoaderFinishClass + '", "left");', 2000);
                setTimeout('sliderChangeItems(' + f_item + ', ' + l_item + ', "' + outerClassName + '", "' + itemClass + '", "' + itemCounterClass + '", "' + ItemsCount + '", "left", "' + HideItemClass + '");', 250);
                setTimeout('sliderHideBack(' + f_item + ', ' + l_item + ', "' + outerClassName + '", "' + itemClass + '", "' + itemCounterClass + '", "' + ItemsCount + '", "' + sliderLoaderBackgroundClass + '", "' + sliderLoaderFinishClass + '", "left", "' + HideItemClass + '");', 300);
                setTimeout('sliderSwitchSide("' + outerClassName + '", "' + switchClass + '", "' + switchItemClass + '", "' + switchItemActClass + '", "' + switchItemCountClass + '", "' + switchResAct + '", "' + switchResInAct + '", "left", "' + HideItemClass + '");', 220);
            }
        }
}

function sliderSlideRight(outerClassName, rightArrowID, itemCounterClass, itemClass, sliderLoaderBackgroundClass, sliderLoaderProgressClass, sliderLoaderFinishClass, ItemsCount, ajaxMode, switchClass, switchItemClass, switchItemActClass, switchItemCountClass, switchResAct, switchResInAct, HideItemClass)
{
    //последовательность действий):
    //    если Ajax
    //    1)ставим заставку слайдера (SliderGen::splash_class)
    //    2)отображаем прогресс бар/ы (SliderGen::lp_class) (миннимум 1 секунда)
    //    3)получаем элементы для подстановки
    //    4)отображаем финальную картинку удачной загрузки бар/ы (SliderGen::lp_class_ok)
    //    5)подменяем отображаемые элементы новыми элементами
    //
    //    если не Ajax
    //    1)ставим заставку слайдера (SliderGen::splash_class)
    //    2)отображаем прогресс бар/ы (SliderGen::lp_class) (миннимум 1 секунда)
    //    3)отображаем финальную картинку удачной загрузки бар/ы (SliderGen::lp_class_ok)
    //    4)подменяем отображаемые элементы новыми элементами
    if(ajaxMode == 1)
    {

    }
    else
    {
        //получаем номера, которые необходимо обновить
        var f_item = 0;
        var l_item = 0;
        $("." + outerClassName + " ." + itemClass).each(function(){
            if($(this).css("display") == "block")
            {
                f_item = parseInt($(this).attr("class").replace(/[a-zA-Z _-]/g, ""));
                return false;
            }
        });

        l_item = parseInt(f_item) + parseInt(ItemsCount);


        //проверяем - есть ли элементы для обновления
        var work = sliderCheckSlide(f_item, outerClassName, itemClass, itemCounterClass, ItemsCount, "right", HideItemClass);

        if(work == 1)
        {
            sliderShowBack(f_item, l_item, outerClassName, itemCounterClass, ItemsCount, sliderLoaderBackgroundClass, sliderLoaderProgressClass, "right");
            //setTimeout('sliderShowFinish(' + f_item + ', ' + l_item + ', "' + outerClassName + '", "' + itemCounterClass + '", "' + ItemsCount + '", "' + sliderLoaderProgressClass + '", "' + sliderLoaderFinishClass + '", "right");', 2000);
            setTimeout('sliderChangeItems(' + f_item + ', ' + l_item + ', "' + outerClassName + '", "' + itemClass + '", "' + itemCounterClass + '", "' + ItemsCount + '", "right", "' + HideItemClass + '");', 250);
            setTimeout('sliderHideBack(' + f_item + ', ' + l_item + ', "' + outerClassName + '", "' + itemClass + '", "' + itemCounterClass + '", "' + ItemsCount + '", "' + sliderLoaderBackgroundClass + '", "' + sliderLoaderFinishClass + '", "right", "' + HideItemClass + '");', 250);
            setTimeout('sliderSwitchSide("' + outerClassName + '", "' + switchClass + '", "' + switchItemClass + '", "' + switchItemActClass + '", "' + switchItemCountClass + '", "' + switchResAct + '", "' + switchResInAct + '", "right", "' + HideItemClass + '");', 220);
        }
    }
}

function sliderSlideNum(NewNum, outerClassName, itemCounterClass, itemClass, sliderLoaderBackgroundClass, sliderLoaderProgressClass, sliderLoaderFinishClass, ItemsCount, ajaxMode, switchClass, switchItemClass, switchItemActClass, switchItemCountClass, switchResAct, switchResInAct, HideItemClass)
{
    //последовательность действий):
    //    если Ajax
    //    1)ставим заставку слайдера (SliderGen::splash_class)
    //    2)отображаем прогресс бар/ы (SliderGen::lp_class) (миннимум 1 секунда)
    //    3)получаем элементы для подстановки
    //    4)отображаем финальную картинку удачной загрузки бар/ы (SliderGen::lp_class_ok)
    //    5)подменяем отображаемые элементы новыми элементами
    //
    //    если не Ajax
    //    1)ставим заставку слайдера (SliderGen::splash_class)
    //    2)отображаем прогресс бар/ы (SliderGen::lp_class) (миннимум 1 секунда)
    //    3)отображаем финальную картинку удачной загрузки бар/ы (SliderGen::lp_class_ok)
    //    4)подменяем отображаемые элементы новыми элементами


    if(ajaxMode == 1)
    {

    }
    else
    {
        //получаем номера, которые необходимо обновить
        var f_item = 0;
        var l_item = 0;
        var new_item = parseInt(NewNum) * parseInt(ItemsCount) - parseInt(ItemsCount) + parseInt(1);
        $("." + outerClassName + " ." + itemClass).each(function(){
            if($(this).css("display") == "block")
            {
                f_item = parseInt($(this).attr("class").replace(/[a-zA-Z _-]/g, ""));
                return false;
            }
        });

        l_item = parseInt(f_item) + parseInt(ItemsCount);

        //проверяем - есть ли элементы для обновления
        var work = sliderCheckSlide(f_item, outerClassName, itemClass, itemCounterClass, ItemsCount,  new_item, HideItemClass);

        if(work == 1)
        {
            //alert(outerClassName);
            sliderShowBack(f_item, l_item, outerClassName, itemCounterClass, ItemsCount, sliderLoaderBackgroundClass, sliderLoaderProgressClass, new_item);
            //setTimeout('sliderShowFinish(' + f_item + ', ' + l_item + ', "' + outerClassName + '", "' + itemCounterClass + '", "' + ItemsCount + '", "' + sliderLoaderProgressClass + '", "' + sliderLoaderFinishClass + '", "right");', 2000);
            setTimeout('sliderChangeItems(' + f_item + ', ' + l_item + ', "' + outerClassName + '", "' + itemClass + '", "' + itemCounterClass + '", "' + ItemsCount + '", ' + new_item + ', "' + HideItemClass + '");', 250);
            setTimeout('sliderHideBack(' + f_item + ', ' + l_item + ', "' + outerClassName + '", "' + itemClass + '", "' + itemCounterClass + '", "' + ItemsCount + '", "' + sliderLoaderBackgroundClass + '", "' + sliderLoaderFinishClass + '", ' + new_item + ', "' + HideItemClass + '");', 250);
            setTimeout('sliderSwitchSide("' + outerClassName + '", "' + switchClass + '", "' + switchItemClass + '", "' + switchItemActClass + '", "' + switchItemCountClass + '", "' + switchResAct + '", "' + switchResInAct + '", ' + NewNum + ', "' + HideItemClass + '");', 220);
        }
    }
}

function sliderShowBack(firstNum, lastNum, outerClassName, itemCounterClass, ItemsCount, sliderLoaderBackgroundClass, sliderLoaderProgressClass, mode)
{
    switch(mode)
    {
        case 'right':
            for(var i = firstNum; i < lastNum; i++)
            {
                //alert("." + outerClassName + " ." + itemCounterClass + i + " ." + sliderLoaderBackgroundClass);
                $("." + outerClassName + " ." + itemCounterClass + i + " ." + sliderLoaderBackgroundClass).fadeIn(150);
                //$("." + outerClassName + " ." + itemCounterClass + i + " ." + sliderLoaderBackgroundClass).fadeIn(700).find(" ." + sliderLoaderProgressClass).css("display", "block");
                $("." + outerClassName + " ." + itemCounterClass + parseInt(parseInt(i) + parseInt(ItemsCount)) + " ." + sliderLoaderBackgroundClass).fadeIn(150);
                //$("." + outerClassName + " ." + itemCounterClass + parseInt(parseInt(i) + parseInt(ItemsCount)) + " ." + sliderLoaderBackgroundClass).fadeIn(700).find(" ." + sliderLoaderProgressClass).css("display", "block");
            }
            break;
        case 'left':
            for(var i = firstNum; i < lastNum; i++)
            {
                $("." + outerClassName + " ." + itemCounterClass + i + " ." + sliderLoaderBackgroundClass).fadeIn(150);
                //$("." + outerClassName + " ." + itemCounterClass + i + " ." + sliderLoaderBackgroundClass).fadeIn(700).find(" ." + sliderLoaderProgressClass).css("display", "block");
                $("." + outerClassName + " ." + itemCounterClass + parseInt(parseInt(i) - parseInt(ItemsCount)) + " ." + sliderLoaderBackgroundClass).fadeIn(150);
                //$("." + outerClassName + " ." + itemCounterClass + parseInt(parseInt(i) - parseInt(ItemsCount)) + " ." + sliderLoaderBackgroundClass).fadeIn(700).find(" ." + sliderLoaderProgressClass).css("display", "block");
            }
            break;
        default:
            var my_c = 0;
            for(var i = firstNum; i < lastNum; i++)
            {
                $("." + outerClassName + " ." + itemCounterClass + i + " ." + sliderLoaderBackgroundClass).fadeIn(150);
                //$("." + outerClassName + " ." + itemCounterClass + i + " ." + sliderLoaderBackgroundClass).fadeIn(700).find(" ." + sliderLoaderProgressClass).css("display", "block");
                $("." + outerClassName + " ." + itemCounterClass + parseInt(parseInt(mode) + parseInt(my_c)) + " ." + sliderLoaderBackgroundClass).fadeIn(150);
                //$("." + outerClassName + " ." + itemCounterClass + parseInt(parseInt(i) - parseInt(ItemsCount)) + " ." + sliderLoaderBackgroundClass).fadeIn(700).find(" ." + sliderLoaderProgressClass).css("display", "block");

                my_c++;
            }
            break;
    }
    if(mode == 'right')
    {

    }
    else
    {

    }
}

function sliderChangeItems(firstNum, lastNum, outerClassName, innerClassName, itemCounterClass, ItemsCount, mode, HideItemClass)
{
    switch(mode)
    {
        case 'right':
            for(var i = firstNum; i < lastNum; i++)
            {
                $("." + outerClassName + " ." + innerClassName + "." + itemCounterClass + i).addClass(HideItemClass);
                $("." + outerClassName + " ." + innerClassName + "." + itemCounterClass + parseInt(parseInt(i) + parseInt(ItemsCount))).removeClass(HideItemClass);
            }
            break;
        case 'left':
            for(var i = firstNum; i < lastNum; i++)
            {
                $("." + outerClassName + " ." + innerClassName + "." + itemCounterClass + i).addClass(HideItemClass);
                $("." + outerClassName + " ." + innerClassName + "." + itemCounterClass + parseInt(parseInt(i) - parseInt(ItemsCount))).removeClass(HideItemClass);
            }
            break;
        default:
            //слайдим на конкретный элемент
            var my_c = 0;
            for(var i = firstNum; i < lastNum; i++)
            {
                $("." + outerClassName + " ." + innerClassName + "." + itemCounterClass + i).addClass(HideItemClass);
                $("." + outerClassName + " ." + innerClassName + "." + itemCounterClass + parseInt(parseInt(my_c) + parseInt(mode))).removeClass(HideItemClass);
                my_c++;
            }
            break;
    }
}

function sliderShowFinish(firstNum, lastNum, outerClassName, itemCounterClass, ItemsCount, sliderLoaderProgressClass, sliderLoaderFinishClass, mode)
{
    var _firstNum = 0;
    var _lastNum = 0;

    if(mode == "right")
    {
        _firstNum = parseInt(firstNum) + parseInt(ItemsCount);
        _lastNum = parseInt(lastNum) + parseInt(ItemsCount);
    }
    else
    {
        _firstNum = parseInt(firstNum) + parseInt(ItemsCount);
        _lastNum = parseInt(lastNum) + parseInt(ItemsCount);
    }


    for(var i = _firstNum; i < _lastNum; i++)
    {
        $("." + outerClassName + " ." + itemCounterClass + i + " ." + sliderLoaderProgressClass).css("display", "none");
        $("." + outerClassName + " ." + itemCounterClass + i + " ." + sliderLoaderFinishClass).css("display", "block");
    }
}

function sliderHideBack(firstNum, lastNum, outerClassName, itemClassName, itemCounterClass, ItemsCount, sliderLoaderBackgroundClass, sliderLoaderFinishClass, mode, HideItemClass)
{
    switch(mode)
    {
        case 'right':
            for(var i = firstNum; i < lastNum; i++)
            {
                //$("." + outerClassName + " ." + itemCounterClass + i + " ." + sliderLoaderBackgroundClass).fadeOut(700).find(" ." + sliderLoaderFinishClass).css("display", "none");
                $("." + outerClassName + " ." + itemClassName + "." + itemCounterClass + parseInt(parseInt(i) + parseInt(ItemsCount)) + " ." + sliderLoaderBackgroundClass).fadeOut(200);
                //$("." + outerClassName + " ." + itemCounterClass + parseInt(parseInt(i) + parseInt(ItemsCount)) + " ." + sliderLoaderBackgroundClass).fadeOut(700).find(" ." + sliderLoaderFinishClass).css("display", "none");
            }
            break;
        case 'left':
            for(var i = firstNum; i < lastNum; i++)
            {
                //$("." + outerClassName + " ." + itemCounterClass + i + " ." + sliderLoaderBackgroundClass).fadeOut(700).find(" ." + sliderLoaderFinishClass).css("display", "none");
                $("." + outerClassName + " ." + itemClassName + "." + itemCounterClass + parseInt(parseInt(i) - parseInt(ItemsCount)) + " ." + sliderLoaderBackgroundClass).fadeOut(200);
                //$("." + outerClassName + " ." + itemCounterClass + parseInt(parseInt(i) - parseInt(ItemsCount)) + " ." + sliderLoaderBackgroundClass).fadeOut(700).find(" ." + sliderLoaderFinishClass).css("display", "none");
            }
            break;
        default:
            var my_c = 0;

            for(var i = 0; i < ItemsCount; i++)
            {



                //if(switchClass == 'laws_switch_area')
                //{
                //alert("." + outerClassName + " ." + itemClassName + "." + itemCounterClass + parseInt(parseInt(i) + parseInt(mode)) + " ." + sliderLoaderBackgroundClass);
                //}

                //$("." + outerClassName + " ." + itemCounterClass + i + " ." + sliderLoaderBackgroundClass).fadeOut(700).find(" ." + sliderLoaderFinishClass).css("display", "none");
                if($("." + outerClassName + " ." + itemClassName + "." + itemCounterClass + parseInt(parseInt(i) + parseInt(mode)) + " ." + sliderLoaderBackgroundClass).length > 0)
                {
                    $("." + outerClassName + " ." + itemClassName + "." + itemCounterClass + parseInt(parseInt(i) + parseInt(mode)) + " ." + sliderLoaderBackgroundClass).fadeOut(200);
                }
                //$("." + outerClassName + " ." + itemCounterClass + parseInt(parseInt(i) - parseInt(ItemsCount)) + " ." + sliderLoaderBackgroundClass).fadeOut(700).find(" ." + sliderLoaderFinishClass).css("display", "none");

                my_c++;
            }
            break;
    }
    slideBlocker = 0;
}

function sliderCheckSlide(curFirstNum, outerClassName, itemClassName, itemCounterClass, ItemsCount, mode, HideItemClass)
{
    switch(mode)
    {
        case "right":
            var cur_find = parseInt(curFirstNum) + parseInt(ItemsCount);
            if($("." + outerClassName + " ." + itemClassName + "." + itemCounterClass + cur_find).length)
            {//ок - есть хотя бы один элемент
                if(slideBlocker == 0)
                {
                    slideBlocker = 1;
                    return 1;
                }
            }
            else
            {
                return 0;
            }
            break;
        case "left":
            var cur_find = parseInt(curFirstNum) - 1;
            if($("." + outerClassName + " ." + itemClassName + "." + itemCounterClass + cur_find).length)
            {//ок - есть хотя бы один элемент
                if(slideBlocker == 0)
                {
                    slideBlocker = 1;
                    return 1;
                }
            }
            else
            {
                return 0;
            }
            break;
        default:



//            if(switchClass = 'laws_switch_area')
//            {
//                alert("." + outerClassName + " ." + itemClassName + "." + itemCounterClass + mode);
//            }

            if($("." + outerClassName + " ." + itemClassName + "." + itemCounterClass + mode).length)
            {//ок - есть хотя бы один элемент и если он уже неактивен
                if(slideBlocker == 0 && $("." + outerClassName + " ." + itemClassName + "." + itemCounterClass + mode).hasClass(HideItemClass))
                {
                    slideBlocker = 1;
                    return 1;
                }

            }
            else
            {
                return 0;
            }
            break;
    }


    if(mode == "right")
    {

    }
    else
    {

    }

    return 0;
}

function sliderSwitchSide(outerClassName, switchClass, switchItemClass, switchItemActClass, switchItemCountClass, switchResAct, switchResInAct, mode, HideItemClass)
{
    var curNum = $("." + switchClass + " ." + switchItemClass + "." + switchItemActClass).attr("class").replace(/[a-zA-Z _]/g, "");
    if(curNum == "")
        curNum = 1;

    switch(mode)
    {
        case 'right':
            var nextNum = parseInt(curNum) + 1;
            $("." + switchClass + " ." + switchItemClass + "." + switchItemCountClass + curNum).attr("src", switchResInAct).removeClass(switchItemActClass);
            $("." + switchClass + " ." + switchItemClass + "." + switchItemCountClass + nextNum).attr("src", switchResAct).addClass(switchItemActClass);
            break;
        case 'left':
            var nextNum = parseInt(curNum) - 1;
            $("." + switchClass + " ." + switchItemClass + "." + switchItemCountClass + curNum).attr("src", switchResInAct).removeClass(switchItemActClass);
            $("." + switchClass + " ." + switchItemClass + "." + switchItemCountClass + nextNum).attr("src", switchResAct).addClass(switchItemActClass);
            break;
        default:
            $("." + switchClass + " ." + switchItemClass + "." + switchItemCountClass + curNum).attr("src", switchResInAct).removeClass(switchItemActClass);
            $("." + switchClass + " ." + switchItemClass + "." + switchItemCountClass + mode).attr("src", switchResAct).addClass(switchItemActClass);
            break;
    }
}
