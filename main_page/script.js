const sidebar_arrow = document.getElementById('sidebar_arrow')
const sidebar = document.getElementById('sidebar')

sidebar_arrow.addEventListener('click', ()=>{
    sidebar.classList.add('sidebar_show')
})