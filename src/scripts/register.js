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

// function professionalLevelsList(){
//     let select = document.getElementById(`professionalLevelsList`)
// }

function goToHome(){

    let getHome = document.querySelector('.goToHome')

    getHome.addEventListener('click', (event)=>{

        console.log(event)
        window.location.replace('../../src/index/homepage.html')
    })

    let getHomeDesktop = document.querySelector('.goToHomeDesktop')
    
    getHomeDesktop.addEventListener('click', (event)=>{

        console.log(event)
        window.location.replace('../../src/index/homepage.html')
    })
}

function goToLogin(){

    let getLogin = document.querySelector('.goToLogin')
    
    getLogin.addEventListener('click', (event)=>{
        
        console.log(event)
        window.location.replace('../../src/index/login.html')
    })
    
    let getLoginDesktop = document.querySelector('.goToLoginDesktop')

    getLoginDesktop.addEventListener('click', (event)=>{

        console.log(event)
        window.location.replace('../../src/index/login.html')
    })
}

function retrurnToLogin(){
    let returnBtn = document.querySelector('.return')

    returnBtn.addEventListener('click', ()=>{

        window.location.replace('../../src/index/login.html')
    })
}


closeMenu()
openMenu()
goToHome()
goToLogin()
retrurnToLogin()
