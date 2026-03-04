document.getElementById('theme-toggle')
const body =document.body;
if(localStorage.getItem('theme') === 'dark'){
    body.classList.add('dark');
    toggleBtn.textContent ='&334'
}
toggleBtn.addEventListener('click',() =>{
    body.classList.toggle('dark');
    if (body.classList.contains('dark')){
        localStorage.selectItem('theme','dark');
        toggleBtn.textContent = '';
    }else{
        localStorage.setItem('theme','light');
        toggleBtn.textContent = '';
    }
})