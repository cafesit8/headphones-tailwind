const btn = document.getElementById('btn-items')
const list = document.getElementById('list')

btn.addEventListener('click', ()=>{
    list.classList.toggle('show')
    if (list.classList.contains('show')) {
        list.classList.replace('max-[500px]:top-[-400%]', 'max-[500px]:top-[0]')
        btn.setAttribute('name', 'close')
    }else{
        list.classList.replace('max-[500px]:top-[0]', 'max-[500px]:top-[-400%]')
        btn.setAttribute('name', 'grid-outline')
    }
})