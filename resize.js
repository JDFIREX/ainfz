window.addEventListener('load', (e) => {
    if(window.innerWidth <= 1500){
        e.preventDefault();
        resize();
    }else{
        e.preventDefault();
        backresize()
    }
})
window.addEventListener('resize', (e) => {
    if(window.innerWidth <= 1500){
        e.preventDefault();
        resize();
    }
    else{
        e.preventDefault();
        backresize()
    }
})



function resize() {
    var kontakt_img = document.getElementById('kontakt_img');
    kontakt_img.setAttribute("src", "");
    var o_nas_lewa = document.querySelector('.o_nas_lewa')
    o_nas_lewa.setAttribute('src', " ")
    var o_nas_lewa = document.querySelector('.o_nas_prawa')
    o_nas_lewa.setAttribute('src', " ")
    var o_nas_gora = document.querySelector('.o_nas_gora')
    o_nas_gora.setAttribute('src', "resize/w_gora.png")
    var section_usługi_background = document.querySelector('#section_usługi_background');
    section_usługi_background.setAttribute('src', "resize/uslugi.png")
    var lokalizacja_img_background = document.querySelector('#lokalizacja_img_background');
        lokalizacja_img_background.setAttribute('src', 'resize/lokalizacja.png')
    var header_img = document.querySelector('#header_img');
    header_img.setAttribute('src', 'resize/main.png')


        var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene,{
            relativeInput: true
          });
          var scene2 = document.getElementById('scene2');
        var parallaxInstance2 = new Parallax(scene2,{
            relativeInput: true
          });

          if(window.innerWidth < 800){

            parallaxInstance.disable();
      
            parallaxInstance2.disable();
      
      }


         

          if(window.innerWidth < 1001){
            //klikanie na przycisk
            var nav_item_rwd = document.querySelector('.nav_item_rwd')
            var nav_list = document.querySelector('#nav_list')
            var clicked = false;
            nav_item_rwd.addEventListener('click', (e) => {
                nav_item_rwd_Click(e);
            });

            function nav_item_rwd_Click(e) {
                if(!clicked){
                    nav_list.style.transition = "all 0.7s ease-in-out, visibility 0.5s";
                    nav_list.style.width = "100vw";
                    nav_list.style.visibility = "visible"
                    clicked = true;
                    nav_item_rwd.setAttribute('src', "photo/window-close-regular_2.svg")
                    move_background.style.left = "-200vw";
                    move_background.style.transition = "all 0.4s";
                    move_background.style.visibility ="visible";
                }
                else if(clicked){
                    nav_list.style.transition = "all 0.7s ease-in-out, visibility 0.5s";
                    nav_list.style.visibility = "hidden"
                    nav_list.style.width = "0vw";
                    clicked = false;
                    nav_item_rwd.setAttribute('src', "resize/bars-solid.svg")
                    move_background.style.transition = "all 0.4s";
                    move_background.style.visibility ="hidden";
                }   
            }


            // zmiana tła 
            var move_background = document.querySelector('.move_background');
            var nav_item = document.querySelectorAll('.nav_item');
            nav_item.forEach( n => {
                n.addEventListener('click', (e) => {
                    var item = e.path[0].dataset.item;
                    nav_item_click(item)
                })
            })
            

            function nav_item_click(item){
                var click_item = document.querySelector(`[data-item="${item}"]`);
                var itemCoords = click_item.getBoundingClientRect();

                        move_background.style.top = (itemCoords.top - (itemCoords.height / 3.5)) + "px";
                        move_background.style.left = (itemCoords.left - (itemCoords.width /2)) +"px";
                        move_background.style.width = (itemCoords.width * 2) + "px";
                        move_background.style.height = (itemCoords.height * 1.5) + "px";

                    
                
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
                                nav_item_click(6);
                            }
                            else if(scoords.top >= -50 && scoords.top <= ((window.innerHeight / 2) - (window.innerHeight / 5))){
                                nav_item_click(windowSee);
                            }

                        }
                        if(lastScrollTop > scrollCurrent){
                            if( scoords.bottom >= (window.innerHeight / 2) && scoords.bottom <= ((window.innerHeight / 2) + (window.innerHeight / 8))){
                                nav_item_click(windowSee);
                            }
                        }

                    })

                lastScrollTop = scrollCurrent;

            })

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



          }
            



}



function backresize() {
    var kontakt_img = document.getElementById('kontakt_img');
    kontakt_img.setAttribute("src", "photo/kontakty.png");
    var o_nas_lewa = document.querySelector('.o_nas_lewa')
    o_nas_lewa.setAttribute('src', "photo/w-lewa.png")
    var o_nas_prawa = document.querySelector('.o_nas_prawa')
    o_nas_prawa.setAttribute('src', "photo/w-prawa.png")
    var o_nas_gora = document.querySelector('.o_nas_gora')
    o_nas_gora.setAttribute('src', "photo/w-góra.png")
    var section_usługi_background = document.querySelector('#section_usługi_background');
    section_usługi_background.setAttribute('src', "photo/usługi.png")
    var lokalizacja_img_background = document.getElementById('lokalizacja_img_background');
    lokalizacja_img_background.setAttribute('src', "photo/lokalizacja.png")
    var header_img = document.querySelector('#header_img');
    header_img.setAttribute('src', 'photo/logo.png')


    var scene = document.getElementById('scene');
        var parallaxInstance = new Parallax(scene,{
            relativeInput: true
          });
          parallaxInstance.destroy();
          var scene2 = document.getElementById('scene2');
        var parallaxInstance2 = new Parallax(scene2,{
            relativeInput: true
          });
          parallaxInstance2.destroy();



}
