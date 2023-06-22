function digiclk()
{
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var ss=date.getSeconds();
    // var milss=date.getMilliseconds();
    var dt=date.getDate();
    var mon=date.getMonth();
    var yy=date.getFullYear();
    var day=date.getDay();
    var am_pm="AM";
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh==12;
    }
    if (mon==0)
    {
        mon="jan"
    }
    else if(mon==1)
    {
        mon="Feb"
    }
    else if(mon==2)
    {
        mon="Mar"
    }
    else if(mon==3)
    {
        mon="Apr"
    }
    else if(mon==4)
    {
        mon="May"
    }
    else if(mon==5)
    {
        mon="Jun"
    }
    else if(mon==6)
    {
        mon="jul"
    }
    else if(mon==7)
    {
        mon="Aug"
    }
    else if(mon==8)
    {
        mon="Sep"
    }
    else if(mon==9)
    {
        mon="Oct"
    }
    else if(mon==10)
    {
        mon="Nov"
    }
    else
    {
        mon="Dec"
    }
    switch(day)
    {
        case 0: day="Sunday"
        document.body.style.backgroundImage="url(./sunday.jpg)"
        document.body.style.backgroundSize="100%,150vh"
        break;
        case 1: day="monday"
        document.body.style.backgroundImage="url(./monday.jpg)"
        document.body.style.backgroundSize="100%,150vh"
        break;
        case 2: day="Tuesday"
        document.body.style.backgroundImage="url(./tuesday.jpg)"
        document.body.style.backgroundSize="100%,150vh"
        break;
        case 3: day="Wednesday"
        document.body.style.backgroundImage="url(./wednesday.jpg)"
        document.body.style.backgroundSize="100%,150vh"
        break;
        case 4: day="Thursday"
        document.body.style.backgroundImage="url(./thursday.jpg)"
        document.body.style.backgroundSize="100%,150vh"
        break;
        case 5: day="Friday"
        document.body.style.backgroundImage="url(./friday.jpg)"
        document.body.style.backgroundSize="100%,150vh"
        break;
        case 6: day="Saturday"
        document.body.style.backgroundImage="url(./saturday.jpg)"
        document.body.style.backgroundSize="100%,150vh"
        break;
    }
    document.getElementById("Date").innerHTML=`${dt}/${mon}/${yy}`
    document.getElementById("Time").innerHTML=`${hh}:${mm}:${am_pm}`;
    document.getElementById("Day").innerHTML=day
    document.getElementById("Sec").innerHTML=ss;
    setTimeout(digiclk,1000)
}
digiclk()
// function fun()
// {
//     document.getElementById("message").style.display="none"
// }
var alarmMusic=new Audio()
alarmMusic.src="./just-relax-11157.mp3"
function alarm()
{
    var allSelectTags=document.querySelectorAll("select")
    var userGivenHours=allSelectTags[0].value
    var userGivenMin=allSelectTags[1].value
    var userGivenAm_Pm=allSelectTags[2].value
    var date=new Date();
    var hh=date.getHours();
    var mm=date.getMinutes();
    var am_pm="AM"
    if(hh>=12)
    {
        am_pm="PM"
        if(hh>12)
        {
            hh-=12;
        }
    }
    if(hh==0)
    {
        hh==12;
    }
    if (userGivenHours==hh && userGivenMin==mm && userGivenAm_Pm==am_pm)
    {
        alarmMusic.play
    }
    else{
        alarmMusic.pause()
    }
    setTimeout(alarm, 1000)
}
function alarmConf()
{
    var allSelectTags=document.querySelectorAll("select")
    var userGivenHours=allSelectTags[0].value
    var userGivenMin=allSelectTags[1].value
    var userGivenAm_Pm=allSelectTags[2].value
    alert(`Alarm has been setted for  ${userGivenHours} ${userGivenMin} ${userGivenAm_Pm}`)
    document.getElementById("alarm").style.display="none"
}
function alarmDisplay()
{
    document.getElementById("alarm").style.display="flex"
}
