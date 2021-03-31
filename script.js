function popUp(element){
    alert("This page says loading weather report");
}

function acceptThis(element){
    var accept = document.querySelector('#cookieJar');
    accept.remove();
}

function conversion(element){
    var array= document.querySelectorAll(".high");
    var temp= array[0].innerText;
    if (element.selectedIndex==1){
        for (var i=0;i<array.length;i++){
            array[i].innerText=parseInt(array[i].innerText)*Math.round(1.8)+32+"°";
        }
    }
    var array1= document.querySelectorAll(".low");
    var temp1= array1[0].innerText;
    if (element.selectedIndex==1){
        for (var i=0;i<array1.length;i++){
            array1[i].innerText=parseInt(array1[i].innerText)*Math.round(1.8)+32+"°";
        }
    }
    if (element.selectedIndex==0){
        for (var i=0;i<array.length;i++){
            array[i].innerText=Math.round((parseInt(array[i].innerText)-32)/1.8)+"°";
        }
    }
    if (element.selectedIndex==0){
        for (var i=0;i<array1.length;i++){
            array1[i].innerText=Math.round((parseInt(array1[i].innerText)-32)/1.8)+"°";
        }
    }
}