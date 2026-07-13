const card = document.querySelector('.broker-card');
const btn = document.querySelector('.floating-app-btn');

window.addEventListener('scroll', () => {
    const rect = card.getBoundingClientRect();

    const half = rect.height / 2;

    if (rect.top <= rect.height *0.2 && rect.bottom >= rect.height *0) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});

/* ----- */

const showNote = document.getElementById("showNote");
const noteShort = document.getElementById("noteShort");
const noteFull = document.getElementById("noteFull");

if(showNote){

    showNote.addEventListener("click",()=>{

        if(noteFull.style.display === "none"){

            noteShort.style.display="none";
            noteFull.style.display="inline";
            showNote.innerText="Đóng hướng dẫn";

        }else{

            noteShort.style.display="inline";
            noteFull.style.display="none";
            showNote.innerText="Xem hướng dẫn";

        }

    });

}