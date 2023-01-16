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

import { renderizaDeptos, selectEmpresas, listarSetores, criaDepto, listarEmpresas } from './requests.js'


let closeButton = document.querySelector(".close")

let divBackground = document.querySelector(".divBackground")


let openModal = document.querySelector(".btnCriar")

closeButton.addEventListener('click', (event) => {
    event.preventDefault()
    divBackground.style.display = 'none'
})

openModal.addEventListener('click', (event) => {
    event.preventDefault()
    divBackground.style.display = 'unset'
})

async function selectDoModalCriarDepartamento() {
    const selecionarEmpresa = document.getElementById('selecionarEmpresa')

    const setor = await listarSetores()

    setor.forEach(element => {
        // console.log(element)

        let optionEmpresa = document.createElement('option')
        optionEmpresa.innerText = element.description
        optionEmpresa.value = element.description

        selecionarEmpresa.append(optionEmpresa)
    });
}

async function criarBodyDeDepto() {
    const inputNome = document.querySelector('.inptNomeDepto')
    const inputDescricao = document.querySelector('.inptDescricaoDepto')

    const selectNivel = document.querySelector('#selecionarEmpresa')
    console.log(selectNivel.value)

    const uuidEmpresa = await listarEmpresas()

    uuidEmpresa.forEach(element=>{
        console.log(element.uuid)
    })

    let atribuirUuid = ''

    if(selectNivel.value === uuidEmpresa.name){
        atribuirUuid = uuidEmpresa.uuid
    }

    const criaDeptoBtn = document.querySelector('.criarDeptoModal')

    criaDeptoBtn.addEventListener('clck', async (event) => {
        event.preventDefault()

        const objetoBody = {
            'name': inputNome.value,
            'description': inputDescricao.value,
            'company_uuid': selectNivel.value
        }

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
criarBodyDeDepto()