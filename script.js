var smallToBig;
var BigToSmall;
var mniejszeniz1500;
var wiekszeniz1500;
window.addEventListener("load", (e) => {
    loadWidth = window.innerWidth;
    if(window.innerWidth <= 1001){
        smallToBig = true;
        BigToSmall = false;
    }else if(window.innerWidth >1001){
        smallToBig = false;
        BigToSmall = true;
    }
    if(window.innerWidth > 1500){
        wiekszeniz1500 = true;
        mniejszeniz1500 = false;
    }else if (window.innerWidth <= 1500){
        mniejszeniz1500 = true;
        wiekszeniz1500 = false;
    }
})
window.addEventListener("resize", (e) => {
    if(window.innerWidth > 1001 && smallToBig){
        smallToBig = false;
        BigToSmall = true;
        window.location.reload(true);
    }else if(BigToSmall && window.innerWidth <= 1001){
        smallToBig = true;
        BigToSmall = false;
        window.location.reload(true);
    }
    if(window.innerWidth <= 1500 && wiekszeniz1500){
        mniejszeniz1500 = true;
        wiekszeniz1500 = false;
        window.location.reload(true);
    }else if(window.innerWidth > 1500 & mniejszeniz1500){
        wiekszeniz1500 = true;
        mniejszeniz1500 = false;
        window.location.reload(true);
    }
    if(window.innerWidth = 800){
        window.location.reload(true);
    }
})





// zespól   
        // var
var Bleft = document.getElementById("zespol_b_l");
var Bright = document.getElementById("zespol_b_r");
var Person = document.getElementById('zespol_osoba')

var Pcount = 1;
// Bleft animation
var BleftClick = false;

Bleft.addEventListener('click', (e) => {
    if(BleftClick == false){
        BleftClick = true;
        e.path[0].style.animation = "bleft 1s";  // animacja przycisku

        // animacja zmiany osoby wstecz
        Pcount--;
        if(Pcount == 0){
            Pcount = 8;
        }

        changeImg(-10.4166,20.4166, 0,"left",Pcount);

        setTimeout(() => {
            e.path[0].style.animation = ""; 
        }, 1250);
        setTimeout(() => {
            BleftClick = false;
        }, 1500);
    
    }  
})



//  Bright animation
var BrightClick = false;

Bright.addEventListener('click', (e) => {
    Brightclick(e);
});
Bright.addEventListener('mouseup', (e) => { 
    Brightclick(e);
});

function Brightclick(e){
    if(BrightClick == false){
        BrightClick = true;
        e.path[0].style.animation = "bright 1s";  // animacja przycisku

        // animacja zmiany osoby wstecz
        Pcount--;
        if(Pcount == 0){
            Pcount = 8;
        }
        
        changeImg(10.4166,-20.416,0,"right",Pcount);

        setTimeout(() => {
            e.path[0].style.animation = ""; 
        }, 1250);
        setTimeout(() => {
            BrightClick = false;
        }, 1500);
    
    }  
}


function changeImg(FirstLeft, SecondLeft, ThirdLeft, bside, count){
        Person.style.transformOrigin = `${bside}`;
        Person.style.left = `${FirstLeft}` +"vw";
        Person.style.opacity = "0";
        Person.style.transform = 'scale(0.4)';
        setTimeout(() => {
            Person.style.left = `${SecondLeft}` +"vw";
        }, 820);
        setTimeout(() => {
            Person.setAttribute('src', `photo/user_${count}.svg`);
        }, 1200);
        setTimeout(() => {
            Person.style.left = `${ThirdLeft}` +"vw";
            Person.style.opacity = "1";
            Person.style.transform = 'scale(1)';
        }, 1500);
}




// usługi


    // var
    var Uimg = document.querySelectorAll('.uslugi_img');


    // otwieranie okna danej uslugi
    Uimg.forEach( i => {
        i.addEventListener('click', (e) => {

            var parent = e.path[2]; // rodzic obrazka którego klikneliśmy
            var Uinfo = parent.querySelector('.file_info') // okno które ma się wyświetlić
            var Uwindow = Uinfo.querySelector('.file_window');

            // animacje

            Uinfo.style.minwidth = 100 +"vw";
            Uinfo.style.visibility = "visible";
            setTimeout(() => {
                Uwindow.style.visibility = "visible";
                Uwindow.style.top = 200 +"px";
            }, 200);


            // przycisk wyjscia i esc

            var Bexit = Uwindow.querySelector('.button_exit');
            Bexit.addEventListener('click', (e) => {
                setWindow(Uwindow, Uinfo, parent)
            })


            window.addEventListener("keyup", (e) => {
                if(e.key == "Escape"){
                    setWindow(Uwindow, Uinfo, parent)
                }
            })


        })
    })
     
    function setWindow(Uwindow, Uinfo, parent) {
        Uwindow.style.visibility = "hidden";
        Uwindow.style.top = -1000 +"px";
        
        setTimeout(() => {
            Uinfo.style.minwidth = 0 +"vw";
            Uinfo.style.visibility = "hidden";
        }, 200);
    }


    // mapa 
        // TO MAKE THE MAP APPEAR YOU MUST
        // ADD YOUR ACCESS TOKEN FROM
        // https://account.mapbox.com

        mapboxgl.accessToken = 'pk.eyJ1IjoiamRmaXJleCIsImEiOiJja2JmZXBhY3QwdWw2MnNxZTlnY2N1ZDM4In0.Q34Lq3f1apoEpcn8teup1w';

        var map = new mapboxgl.Map({
        container: 'map', // container id
        style: 'mapbox://styles/mapbox/streets-v11',
        center: [20.9823668,52.2300604], // starting position
        zoom: 16 // starting zoom
        });
        
        // Add zoom and rotation controls to the map.
        map.addControl(new mapboxgl.NavigationControl());



// nav fixed
    //var

    var nav =  document.getElementById('nav');
    var body = document.getElementById('body')
    var nav_list =  document.getElementById('nav_list');
    var currentPosition = 0;
     var wasScrollDown = false;

     // aminacja scroll chowanie i pojawianie sie nav na górze strony 
    window.addEventListener('scroll', (e) => {
        if(window.innerWidth > 1001){
            windowScroll(e);
        }
        
    })

    function windowScroll(e){
        var scrollTop = e.path[1].scrollY;
        var heightscroll = e.path[1].outerHeight - 50;
       if(scrollTop >= heightscroll){
            wasScrollDown = true;
            nav.style.position = "fixed";
            nav.style.marginTop = "10px";
            nav_list.style.top = "-15px";
            setTop();
       }

        if(currentPosition < scrollTop && scrollTop >= (heightscroll + 200)){
            nav.style.transition = ' all 3s';
             nav.style.top = "-100px";
    
             // jezeli myszka jest w okolicy nav a on jest schowwany to sie pojawi
             window.addEventListener('mousemove', (e) => {
                 if(e.screenY <= 150){
                    setTop();
                 }
             })
    
         }
         else{
             nav.style.transition = ' all 0.4s';
             nav.style.top = "0px";
         }
       
       

       if(wasScrollDown && scrollTop < heightscroll){
        wasScrollDown = false;
        nav.style.position = "relative";
        nav.style.top = '0px';
        nav.style.bottom = '0px';
        nav.style.marginTop = "0px";
        nav.style.transition = ' all 0.4s';
        nav_list.style.top = "0px";
       }

        currentPosition = scrollTop;

    }

     function setTop(){
         nav.style.transition = ' all 0.4s';
         nav.style.top = '0px';
         nav.style.bottom = '0px';
     }

// animacja kwadratu niebieskiego  grzy myszką nakierujemy na dany napis

    var list = nav.querySelector('#nav_list')
    var listItem =  list.querySelectorAll('.nav_item');
    var moveBackGround = document.querySelector('.move_background')
     window.addEventListener('load',() => {
         if(window.innerWidth > 1001){
            setMoveBackGround(1);
         }
     })
            

    
    

    listItem.forEach( i => {
        i.addEventListener('click', (e) => {
            var adata = e.path[0].dataset.item;
            setMoveBackGround(adata);
        })
    })

    function setMoveBackGround(n){

         var a = document.querySelector(`[data-item="${n}"]`)
         var acoords = a.getBoundingClientRect();
         return setMoveBackGroundStyle(acoords);
         
         
    }

    function setMoveBackGroundStyle(c){
        if(window.innerWidth > 1001){
            moveBackGround.style.width = (c.width * 1.50) + "px";
            moveBackGround.style.left = (c.left - (c.width * 0.27)) + "px";
            moveBackGround.style.top = "2px"
        }else if(window.innerWidth < 1001){
            moveBackGround.style.width = (c.width * 1.50) + "px";
            moveBackGround.style.left = (c.left - (c.width * 0.27)) + "px";
            moveBackGround.style.top = (c.top - (c.height / 3)) + "px";
        }
        

    }


 var lastScrollTop;

 window.addEventListener('scroll', (e) => {

     var scrollList = document.querySelectorAll('.scroll');
     var scrollCurrent = e.path[1].scrollY;
     var body = document.querySelector('#main');
     var bodyCoords = body.getBoundingClientRect();

         scrollList.forEach( s => {

             var scoords = s.getBoundingClientRect();
             var windowSee = s.getAttribute('data-scroll');

             if(lastScrollTop < scrollCurrent){
                if(bodyCoords.bottom < 950){
                    setMoveBackGround(6);
                }
                 else if(scoords.top >= -50 && scoords.top <= ((window.innerHeight / 2) - (window.innerHeight / 5))){
                     setMoveBackGround(windowSee);
                 }

             }
             if(lastScrollTop > scrollCurrent){
                 if( scoords.bottom >= (window.innerHeight / 2) && scoords.bottom <= ((window.innerHeight / 2) + (window.innerHeight / 8))){
                     setMoveBackGround(windowSee);
                 }
             }

         })

     lastScrollTop = scrollCurrent;

 })


 



//o nas tekst schodzący wraz z scrollem 
ScrollReveal({ 
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'left',
    interval: 3500,
    delay: 500 
}).reveal('.o_nas_j');
ScrollReveal({ 
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'left',
    interval: 3500,
    delay: 500 
}).reveal('.o_nas_d');
ScrollReveal({ 
    reset: true,
    easing: 'cubic-bezier(0.5, 0, 0, 1)',
    origin: 'left',
    interval: 3500,
    delay: 200 
}).reveal('#o_nas_h');






