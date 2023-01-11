function openMenuLogin(){

    let menuAsideContent = document.querySelector(`.menuAsideContent`) 
    let openBtn = document.querySelector(`.openBtn`) 
    
    openBtn.addEventListener('click', ()=>{     
        menuAsideContent.style.display = `flex`
    })

}

function closeMenuLogin(){
    let menuAsideContent = document.querySelector(`.menuAsideContent`) 
    let closeBtn = document.querySelector(`.closeBtn`) 

    closeBtn.addEventListener('click', ()=>{
        menuAsideContent.style.display = `none`
    })
}

function goToHome(){

    let getHome = document.querySelector('.goToHome')

    getHome.addEventListener('click', (event)=>{

        // console.log(event)
        window.location.replace('../../src/index/homepage.html')
    })

    let getHomeDesktop = document.querySelector('.goToHomeDesktop')
    
    getHomeDesktop.addEventListener('click', (event)=>{

        console.log(event)
        window.location.replace('../../src/index/homepage.html')
    })
}

function goToCadastro(){

    let getCadastro = document.querySelector('.goToCadastro')

    getCadastro.addEventListener('click', (event)=>{

        // console.log(event)
        window.location.replace('../../src/index/register.html')
    })

    let getCadastroDesktop = document.querySelector('.goToCadastroDesktop')
    
    getCadastroDesktop.addEventListener('click', (event)=>{

        console.log(event)
        window.location.replace('../../src/index/register.html')
    })
}

function goToCadastrar(){
    let cadastrar = document.querySelector('.cadastre-se')

    console.log(cadastrar)
    
    cadastrar.addEventListener('click', (event)=>{

        console.log(event)
        window.location.replace('../../src/index/register.html')
    })
}

openMenuLogin()
closeMenuLogin()
goToHome()
goToCadastro()
goToCadastrar()