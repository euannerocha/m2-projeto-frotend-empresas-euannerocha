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

    // console.log(cadastrar)
    
    cadastrar.addEventListener('click', (event)=>{

        console.log(event)
        window.location.replace('../../src/index/register.html')
    })
}

import{ login, verificaLogin } from './requests.js'

function fazerLogin(){
    const inputs = document.querySelectorAll('.fazerOLogin > input')
    const btn = document.querySelector('.btnDeLogin')
    const loginUser = {}

    btn.addEventListener('click', async (event)=>{
        event.preventDefault()

        inputs.forEach(inpt =>{
            loginUser[inpt.name] = inpt.value
        })

        const requisicao = await login(loginUser)

        localStorage.setItem('token', requisicao)
        
        const verifica = await verificaLogin()

        if(verifica){
            window.location.replace('../../src/index/dashAdmin.html')
        } else{
            window.location.replace('../../src/index/dashUser.html')
        }

        // console.log(typeof verifica)
        
    })
    
    return loginUser

}



openMenuLogin()
closeMenuLogin()
goToHome()
goToCadastro()
goToCadastrar()
fazerLogin()