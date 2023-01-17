function openMenuLogin() {

    let menuAsideContent = document.querySelector(".menuAsideContent")
    let openBtn = document.querySelector(".openBtn")

    openBtn.addEventListener('click', () => {
        menuAsideContent.style.display = `flex`
    })

}

function closeMenuLogin() {
    let menuAsideContent = document.querySelector(`.menuAsideContent`)
    let closeBtn = document.querySelector(`.closeBtn`)

    closeBtn.addEventListener('click', () => {
        menuAsideContent.style.display = `none`
    })
}

function goToLogout() {
    let loginBtn = document.querySelector('.goToLogout')

    loginBtn.addEventListener('click', (event) => {

        const token = localStorage.getItem('token')

        window.location.replace('../../src/index/homepage.html')

        localStorage.clear(token)
    })
}

import { renderizaDeptos, selectEmpresas, listarSetores, criaDepto, listarEmpresas, listarDeptos, renderizaUsuarios, contrataFuncionario } from './requests.js'





async function selectDoModalCriarDepartamento() {
    const selecionarEmpresa = document.getElementById('selecionarEmpresa')

    const setor = await listarEmpresas()

    setor.forEach(element => {

        let optionEmpresa = document.createElement('option')
        optionEmpresa.innerText = element.name
        optionEmpresa.value = element.uuid

        selecionarEmpresa.append(optionEmpresa)
    });
}

async function criarBodyDeDepto() {
    const inputNome = document.querySelector('.inptNomeDepto')
    const inputDescricao = document.querySelector('.inptDescricaoDepto')

    const selectNivel = document.querySelector('#selecionarEmpresa')

    const criaDeptoBtn = document.querySelector('.criarDeptoModal')

    criaDeptoBtn.addEventListener('click', async (event) => {

        console.log(event)

        const objetoBody = {
            'name': inputNome.value,
            'description': inputDescricao.value,
            'company_uuid': selectNivel.value
        }

        console.log(objetoBody)

        const requisicao = await criaDepto(objetoBody)
        console.log(requisicao)
    })

}


function criaModal() {

    const btnCriar = document.querySelector('.btnCriar')

    let divBackground = document.querySelector(".divBackground")

    btnCriar.addEventListener('click', (event) => {
        console.log(event)
        divBackground.style.display = 'unset'
    })

    let closeButton = document.querySelector(".close")

    closeButton.addEventListener('click', (event) => {
        event.preventDefault()
        divBackground.style.display = 'none'
    })
}

async function mostraCardsUsuario(){
    const ulCardsUsuarios = document.querySelector('.ulCardsUsuarios')

    const usuarios = await renderizaUsuarios()
    console.log(usuarios)
    
    usuarios.forEach((element)=>{
        if(element.is_admin === false){
        console.log(element)
    
    
            let liUsuario = document.createElement('li')
            let nameUsuario = document.createElement('h1')
            let cargoUsuario = document.createElement('p')
            let empresaUsuario = document.createElement('p')
            let btnEditarUsuario = document.createElement('button')
            let btnDeletarUsuario = document.createElement('button')
    
            nameUsuario.innerText = element.username
            cargoUsuario.innerText = element.professional_level
            empresaUsuario.innerText = element.department_uuid

    
            btnEditarUsuario.innerText = 'Editar'
            btnDeletarUsuario.innerText = 'Deletar'
    
            ulCardsUsuarios.append(liUsuario)
            liUsuario.append(nameUsuario, cargoUsuario, empresaUsuario, btnEditarUsuario, btnDeletarUsuario)
        }
    })

}

async function selectUser(){
    let selecionarUsuario = document.querySelector('#selecionarUsuario')
    const usuarios = await renderizaUsuarios()
    console.log(usuarios)

    usuarios.forEach((element)=>{
        if(element.is_admin === false){

            let optionUser = document.createElement('option')
            optionUser.innerText = element.username
    
            selecionarUsuario.append(optionUser)
        }

    })
    
}

async function contrataFuncionario(){
    
    const inputNome = document.querySelector('.inptNomeDepto')
    const inputDescricao = document.querySelector('.inptDescricaoDepto')


    let btnContratarFuncionario = document.querySelector('.btnContratarFuncionario')

    btnContratarFuncionario.addEventListener('click', async (event) => {

        console.log(event)

        const objetoBody = {
            'name': inputNome.value,
            'description': inputDescricao.value,
            'company_uuid': selectNivel.value
        }

        console.log(objetoBody)

        const requisicao = await criaDepto(objetoBody)
        console.log(requisicao)
    })

}

goToLogout()
renderizaDeptos()
openMenuLogin()
closeMenuLogin()
selectEmpresas()
criarBodyDeDepto()
selectDoModalCriarDepartamento()
criaModal()
mostraCardsUsuario()
selectUser()
