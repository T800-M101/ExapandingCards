const panels = document.querySelectorAll('.panel'); //querySelectorAll selects all th elemenets with the indicated class

panels.forEach(panel => {
    panel.addEventListener('click', () => {
      removeActiveClasses();
      panel.classList.add('active');
    });
});

function removeActiveClasses(){
    panels.forEach(panel =>{
        panel.classList.remove('active');
    });

}