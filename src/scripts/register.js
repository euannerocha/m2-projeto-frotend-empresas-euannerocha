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

import{ criarUsuario } from './requests.js'

function criarUsuarioRegister(){
    const inputs = document.querySelectorAll('.inputsCadastro > inputs')
    const btnCadastro = document.getElementById('registerAndGoToLogin')
    const novoUsuario = {}

    btnCadastro.addEventListener('click', async (event)=>{
        event.preventDefault()

        // const inputNome = document.querySelector('.inputNome')
//         const inputEmail = document.querySelector('.inputEmail')
//         const inputSenha = document.querySelector('.inputSenha')
//         const selectNivel = document.querySelector('#professionalLevelsList')

//         console.log(selectNivel)


//         const montandoObjetoBody = {
//             username: inputNome.value,
//             password: inputSenha.value,
//             email: inputEmail.value,
//             professional_level: selectNivel.innerText
//         }

        inputs.forEach(inpt => {
            novoUsuario[inpt.name] = inpt.value
        })

        const requisicao = await criarUsuario(novoUsuario)
    })

    return novoUsuario

}


closeMenu()
openMenu()
goToHome()
goToLogin()
retrurnToLogin()
criarUsuarioRegister()

// realizaCadastro()
// verificaUsuarios()


// function registerLogin(){
//     let cadastrar = document.getElementById('registerAndGoToLogin')
    
//     cadastrar.addEventListener('click', (event)=>{
//         event.preventDefault()

//         window.location.replace('../../src/index/login.html')
//     })
// }


// async function cadastrar(infosUsuarios){
//     const infosDeCadastro = await fetch('http://localhost:6278/auth/register', {
//         method: "POST",
//         headers: {"Content-Type": "application/json"},
//         body: JSON.stringify(infosUsuarios)
//     })
//     .then(resp => resp.json())
//     .then(osta => {
//         console.log(osta)
//         ClasseToastify.criarAvisos("Usuário cadastrado com sucesso! Redirecionando...", "cor", "white")
//         setTimeout(() =>{
//             window.location.replace('./homeLogin.html')
//         }, 4000)
//     })    
//     .catch(error => {
//         console.log(error)
//         ClasseToastify.criarAvisos(`${error.error}`, "red")
//     })
    
//     return infosDeCadastro
// }

// function realizaCadastro(){
//     const inputsLogin = document.querySelector(".inputsCadastro")
//     inputsLogin.addEventListener('submit', (event) => {
//         event.preventDefault()

//         const inputNome = document.querySelector('.inputNome')
//         const inputEmail = document.querySelector('.inputEmail')
//         const inputSenha = document.querySelector('.inputSenha')
//         const selectNivel = document.querySelector('#professionalLevelsList')

//         console.log(selectNivel)


//         const montandoObjetoBody = {
//             username: inputNome.value,
//             password: inputSenha.value,
//             email: inputEmail.value,
//             professional_level: selectNivel.innerText
//         }

//       cadastrar(montandoObjetoBody)
//     })
// }

// const token = localStorage.getItem('oToken')

// async function verificaUsuarios(){
//     const usuarios = await fetch('http://localhost:6278/users', {
//         method: "GET",
//         headers: {Authorization: `Bearer ${this.token}`}
//     })
//     .then(resp => resp.json())
//     .then(osta => console.log(osta))
//     .catch(error => console.log(error))

//     return usuarios
// }
