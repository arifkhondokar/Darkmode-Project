let darkBtn = document.querySelector(".dark__btn");

    darkBtn.addEventListener('click', function(){
    darkBtn.classList.toggle("active")
    document.body.classList.toggle('dark')
});

