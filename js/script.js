let searchSection = document.querySelector('.search-section');

let search = document.querySelector('.search-icon').addEventListener('click', () => {
    
    if(searchSection.style.top == '-11.5%'){
    
        searchSection.style.top = '8%';

    } else {

        searchSection.style.top = '-11.5%';

    }
});