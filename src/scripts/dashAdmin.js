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

import { renderizaDeptos, selectEmpresas, listarSetores, criaDepto, listarEmpresas, listarDeptos } from './requests.js'





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
        console.log('oi isso é um texto')
        event.preventDefault()
        divBackground.style.display = 'none'
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