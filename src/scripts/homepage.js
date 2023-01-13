function openMenuLogin(){

    let menuAsideContent = document.querySelector(".menuAsideContent") 
    let openBtn = document.querySelector(".openBtn") 
    
// console.log(openBtn)
// console.log(menuAsideContent)

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

function goToLogin(){
    let loginBtn = document.querySelector('.goToLogin')

    loginBtn.addEventListener('click', ()=>{
        window.location.replace('../../src/index/login.html')
    })
}

function goToCadastro(){
    let cadastroBtn = document.querySelector('.goToCadastro')

    cadastroBtn.addEventListener('click', ()=>{
        window.location.replace('../../src/index/register.html')
    })
}

function goToLoginDesk(){
    let loginBtn = document.querySelector('.goToLoginDesktop')

    loginBtn.addEventListener('click', ()=>{
        window.location.replace('../../src/index/login.html')
    })
}

function goToCadastroDesk(){
    let loginBtn = document.querySelector('.goToCadastroDesktop')

    loginBtn.addEventListener('click', ()=>{
        window.location.replace('../../src/index/register.html')
    })
}

openMenuLogin()
closeMenuLogin()
goToLogin()
goToCadastro()
goToLoginDesk()
goToCadastroDesk()

