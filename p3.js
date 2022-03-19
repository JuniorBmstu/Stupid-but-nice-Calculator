var btn1 = document.getElementById("btn1");
var btn2 = document.getElementById("btn2");
var btn3 = document.getElementById("btn3");
var btn4 = document.getElementById("btn4");
var btn5 = document.getElementById("btn5");
var btn6 = document.getElementById("btn6");
var btn7 = document.getElementById("btn7");
var btn8 = document.getElementById("btn8");
var btn9 = document.getElementById("btn9");
var btn10 = document.getElementById("btn10");
var btn11 = document.getElementById("btn11");
var btn12 = document.getElementById("btn12");
var btn13 = document.getElementById("btn13");
var btn14 = document.getElementById("btn14");
var btn15 = document.getElementById("btn15");
var btn16 = document.getElementById("btn16");
var btn17 = document.getElementById("btn17");
var btn18 = document.getElementById("btn18");
var btn19 = document.getElementById("btn19");
var btn20 = document.getElementById("btn20");
var btn21 = document.getElementById("btn21");
var btn22 = document.getElementById("btn22");
var btn23 = document.getElementById("btn23");


btn1.addEventListener('mouseover',changecolor);
btn1.addEventListener('mouseout',changecolor);
btn2.addEventListener('mouseover',changecolor);
btn2.addEventListener('mouseout',changecolor);
btn4.addEventListener('mouseover',changecolor);
btn4.addEventListener('mouseout',changecolor);
function changecolor(event)
{
    if (event.type == 'mouseover') 
    {
        event.target.style.background = 'rgb(107, 107, 141)';
    }
    if (event.type == 'mouseout') 
    {
        event.target.style.background = 'rgb(86, 86, 133)';
    }
}

btn3.addEventListener('mouseover',changecolorg);
btn3.addEventListener('mouseout',changecolorg);
function changecolorg(event)
{
    if (event.type == 'mouseover') 
    {
        event.target.style.background = 'rgb(44, 146, 86)';
    }
    if (event.type == 'mouseout') 
    {
        event.target.style.background = 'rgb(36, 194, 102)';
    }
}
btn1.addEventListener('mousedown',changeplace);
btn1.addEventListener('mouseup',changeplace);
btn2.addEventListener('mousedown',changeplace);
btn2.addEventListener('mouseup',changeplace);
btn3.addEventListener('mousedown',changeplace);
btn3.addEventListener('mouseup',changeplace);
btn4.addEventListener('mousedown',changeplace);
btn4.addEventListener('mouseup',changeplace);
function changeplace(event)
{
    if (event.type == 'mousedown') 
    {
        event.target.style.marginTop="12px";
    }
    if (event.type == 'mouseup') 
    {
        event.target.style. marginTop="10px";
    }
}
btn8.addEventListener('mouseover',changecoloro);
btn8.addEventListener('mouseout',changecoloro);
btn12.addEventListener('mouseover',changecoloro);
btn12.addEventListener('mouseout',changecoloro);
btn16.addEventListener('mouseover',changecoloro);
btn16.addEventListener('mouseout',changecoloro);
btn20.addEventListener('mouseover',changecoloro);
btn20.addEventListener('mouseout',changecoloro);
btn23.addEventListener('mouseover',changecoloro);
btn23.addEventListener('mouseout',changecoloro);

function changecoloro(event)
{
    if (event.type == 'mouseover') 
    {
        event.target.style.background = 'rgb(172, 100, 7)';
    }
    if (event.type == 'mouseout') 
    {
        event.target.style.background = 'rgb(245, 163, 12)';
    }
}
btn5.addEventListener('mouseover',changecolorw);
btn5.addEventListener('mouseout',changecolorw);
btn6.addEventListener('mouseover',changecolorw);
btn6.addEventListener('mouseout',changecolorw);
btn7.addEventListener('mouseover',changecolorw);
btn7.addEventListener('mouseout',changecolorw); 

function changecolorw(event)
{
    if (event.type == 'mouseover')
    {
        event.target.style.background = 'rgb(121, 116, 116)';
    }
    if (event.type == 'mouseout') 
    {
        event.target.style.background = 'rgb(156, 151, 151)';
    }
}
btn9.addEventListener('mouseover',changecolorgr);
btn9.addEventListener('mouseout',changecolorgr);
btn10.addEventListener('mouseover',changecolorgr);
btn10.addEventListener('mouseout',changecolorgr);
btn11.addEventListener('mouseover',changecolorgr);
btn11.addEventListener('mouseout',changecolorgr);
btn13.addEventListener('mouseover',changecolorgr);
btn13.addEventListener('mouseout',changecolorgr);
btn14.addEventListener('mouseover',changecolorgr);
btn14.addEventListener('mouseout',changecolorgr);
btn15.addEventListener('mouseover',changecolorgr);
btn15.addEventListener('mouseout',changecolorgr);
btn17.addEventListener('mouseover',changecolorgr);
btn17.addEventListener('mouseout',changecolorgr);
btn18.addEventListener('mouseover',changecolorgr);
btn18.addEventListener('mouseout',changecolorgr);
btn19.addEventListener('mouseover',changecolorgr);
btn19.addEventListener('mouseout',changecolorgr);
btn21.addEventListener('mouseover',changecolorgr);
btn21.addEventListener('mouseout',changecolorgr);
btn22.addEventListener('mouseover',changecolorgr);
btn22.addEventListener('mouseout',changecolorgr);
function changecolorgr(event)
{
    if (event.type == 'mouseover') 
    {
        event.target.style.background = 'rgb(39, 37, 37)';
    }
    if (event.type == 'mouseout') 
    {
        event.target.style.background = 'rgb(56, 53, 53)';
    }
}
btn5.addEventListener('mousedown',changesquare);
btn5.addEventListener('mouseup',changesquare);
btn6.addEventListener('mousedown',changesquare);
btn6.addEventListener('mouseup',changesquare);
btn7.addEventListener('mousedown',changesquare);
btn7.addEventListener('mouseup',changesquare);
btn8.addEventListener('mousedown',changesquare);
btn8.addEventListener('mouseup',changesquare);
btn12.addEventListener('mousedown',changesquare);
btn12.addEventListener('mouseup',changesquare);
btn16.addEventListener('mousedown',changesquare);
btn16.addEventListener('mouseup',changesquare);
btn20.addEventListener('mousedown',changesquare);
btn20.addEventListener('mouseup',changesquare);
btn9.addEventListener('mousedown',changesquare);
btn9.addEventListener('mouseup',changesquare);
btn10.addEventListener('mousedown',changesquare);
btn10.addEventListener('mouseup',changesquare);
btn11.addEventListener('mousedown',changesquare);
btn11.addEventListener('mouseup',changesquare);
btn13.addEventListener('mousedown',changesquare);
btn13.addEventListener('mouseup',changesquare);
btn14.addEventListener('mousedown',changesquare);
btn14.addEventListener('mouseup',changesquare);
btn15.addEventListener('mousedown',changesquare);
btn15.addEventListener('mouseup',changesquare);
btn17.addEventListener('mousedown',changesquare);
btn17.addEventListener('mouseup',changesquare);
btn18.addEventListener('mousedown',changesquare);
btn18.addEventListener('mouseup',changesquare);
btn19.addEventListener('mousedown',changesquare);
btn19.addEventListener('mouseup',changesquare);
btn23.addEventListener('mousedown',changesquare);
btn23.addEventListener('mouseup',changesquare);
btn22.addEventListener('mousedown',changesquare);
btn22.addEventListener('mouseup',changesquare);
function changesquare(event)
{
    if (event.type == 'mousedown') 
    {
        event.target.style.marginTop="2px";
        event.target.style.marginLeft="2px";
        event.target.style.width="56px";
        event.target.style.height="56px";
        event.target.style.borderRadius="28px";
    }
    if (event.type == 'mouseup') 
    {
        event.target.style.marginTop="0px";
        event.target.style.marginLeft="0px";
        event.target.style.width="60px";
        event.target.style.height="60px";
        event.target.style.borderRadius="30px";
    }
}
btn21.addEventListener('mouseup',changeellipse);
btn21.addEventListener('mousedown',changeellipse);
function changeellipse(event)
{
    if (event.type == 'mousedown') 
    {
        event.target.style.marginTop="2px";
        event.target.style.marginLeft="2px";
        event.target.style.width="136px";
        event.target.style.height="56px";
        event.target.style.borderRadius="28px";
    }
    if (event.type == 'mouseup') 
    {
        event.target.style.marginTop="0px";
        event.target.style.marginLeft="0px";
        event.target.style.width="140px";
        event.target.style.height="60px";
        event.target.style.borderRadius="30px";
    }
}
btn9.addEventListener('click',printinput);
btn10.addEventListener('click',printinput);
btn11.addEventListener('click',printinput);
btn13.addEventListener('click',printinput);
btn14.addEventListener('click',printinput);
btn15.addEventListener('click',printinput);
btn17.addEventListener('click',printinput);
btn18.addEventListener('click',printinput);
btn19.addEventListener('click',printinput);
btn20.addEventListener('click',printinput);
btn21.addEventListener('click',printinput);
btn22.addEventListener('click',printinput);
function printinput(event)
{
    if (event.type == 'click')
    {
        document.getElementsByClassName("form-control")[0].value += event.target.value;
    }
}
btn23.addEventListener('click',printresult);
function printresult(event)
{
    if (event.type == 'click') 
    {
        document.getElementsByClassName("form-control")[1].value = document.getElementsByClassName("form-control")[0].value;
    }
}