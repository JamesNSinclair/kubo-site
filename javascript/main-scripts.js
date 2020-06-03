const vid = document.getElementById("myVideo");
const info = document.getElementById("home-content")


    vid.addEventListener('ended',makeVisible,false);
    function makeVisible(e) {
        console.log("done!");
        info.classList.remove('hide');
        info.classList.add('fade-in');
    }
