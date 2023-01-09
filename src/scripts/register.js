function openMenu (){

    let menuAsideContent = document.querySelector(`.menuAsideContent`) 
    let openBtn = document.querySelector(`.openBtn`) 
    
    openBtn.addEventListener('click', ()=>{     
        menuAsideContent.style.display = `flex`
    })

}

function closeMenu(){
    let menuAsideContent = document.querySelector(`.menuAsideContent`) 
    let closeBtn = document.querySelector(`.closeBtn`) 

    closeBtn.addEventListener('click', ()=>{
        menuAsideContent.style.display = `none`
    })
}

function professionalLevelsList(){
    let select = document.getElementById(`professionalLevelsList`)
}

closeMenu()
openMenu()
