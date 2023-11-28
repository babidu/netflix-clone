const accordion = document.querySelectorAll('.content3');
accordion.forEach(accordion => {
  let ask = accordion.querySelector('.ask');
  let answer = accordion.querySelector('.answer');
  let plusIcon = accordion.querySelector('.plus');

  ask.addEventListener('click', () => {
    if (answer.style.maxHeight === '0px' || !answer.style.maxHeight) {
      const answerWidth = answer.scrollWidth ;

      answer.style.width = answerWidth + 'px';
      answer.style.padding = '10px 15px';

      answer.style.maxHeight = answer.scrollHeight + 'px';

      plusIcon.classList.remove('fa-solid', 'fa-plus');
      plusIcon.classList.add('fa-solid', 'fa-xmark');
    } else {
      answer.style.maxHeight = '0px';
      answer.style.width = 'auto'; 
      answer.style.padding = '0px';

      plusIcon.classList.remove('fa-solid', 'fa-xmark');
      plusIcon.classList.add('fa-solid', 'fa-plus');
    }
  });
});
