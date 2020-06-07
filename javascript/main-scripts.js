const vid = document.getElementById("myVideo");
const info = document.getElementById("home-content")


    vid.addEventListener('ended',makeVisible,false);

    function makeVisible(e) {

          window.setTimeout(()=>{
             info.classList.remove('hide');
           info.classList.add('fade-in');
         }, 500)

       }
