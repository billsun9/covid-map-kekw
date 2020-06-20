const survey = document.querySelector('#survey');
const guidelines = document.querySelector('#guidelines');
const googleMap = document.querySelector('#map');
googleMap.classList.remove('hide');

const navbarBtns = document.querySelectorAll('.navbar li');

navbarBtns.forEach(btn => {
    btn.addEventListener('click', () => {
        let currentlyActive = document.querySelector('.navbar .active');
        currentlyActive.classList.remove('active');
        btn.classList.add('active');

        survey.classList.add('hide');
        guidelines.classList.add('hide');
        googleMap.classList.add('hide');

        let link = btn.getAttribute("data-opt").toString();
        if(link === '#map') {
            googleMap.classList.remove('hide');
        } else if (link === '#guidelines') {
            guidelines.classList.remove('hide');
        } else if (link === '#survey') {
            survey.classList.remove('hide');
        }
    })
})
const btns = document.querySelectorAll('button');

btns.forEach(btn => {
    btn.addEventListener('click', () => {
        //styles the chosen option
        let currentChoice = btn.parentElement;
        currentChoice.classList.add('chosen');

        // can no longer click on answered question
        let currentQuestion = currentChoice.parentElement;
        currentQuestion.classList.add('completed');

        // shows next question or response
        let next = "."+btn.getAttribute('data-next').toString();
        let nextQuestion = document.querySelector(next);
        nextQuestion.classList.remove('hide');
    });
});