import { requestSetores, requestEmpresas } from './requests.js'

requestSetores()
requestEmpresas()

function openMenuLogin() {

    let menuAsideContent = document.querySelector(".menuAsideContent")
    let openBtn = document.querySelector(".openBtn")
    let setores = document.querySelector('#setores')

    openBtn.addEventListener('click', () => {
        menuAsideContent.style.display = `flex`
        openBtn.style.display = 'none'
        setores.id = 'setoresMargin'
    })

}

function closeMenuLogin() {
    let menuAsideContent = document.querySelector(`.menuAsideContent`)
    let closeBtn = document.querySelector(`.closeBtn`)
    let openBtn = document.querySelector(".openBtn")
    let setores = document.querySelector('#setores')

    closeBtn.addEventListener('click', () => {
        menuAsideContent.style.display = `none`
        openBtn.style.display = 'flex'
        setores.id = 'setores'
    })
}

function goToLogin() {
    let loginBtn = document.querySelector('.goToLogin')

    loginBtn.addEventListener('click', () => {
        window.location.replace('../../src/index/login.html')
    })
}

function goToCadastro() {
    let cadastroBtn = document.querySelector('.goToCadastro')

    cadastroBtn.addEventListener('click', () => {
        window.location.replace('../../src/index/register.html')
    })
}

function goToLoginDesk() {
    let loginBtn = document.querySelector('.goToLoginDesktop')

    loginBtn.addEventListener('click', () => {
        window.location.replace('../../src/index/login.html')
    })
}

function goToCadastroDesk() {
    let loginBtn = document.querySelector('.goToCadastroDesktop')

    loginBtn.addEventListener('click', () => {
        window.location.replace('../../src/index/register.html')
    })
}


//

async function renderizaEmpresas() {
    let chamadaDaFunction = await requestEmpresas()

    let appendCards = document.querySelector('.ulCardsList')

    chamadaDaFunction.forEach(element => {

        let liCard = document.createElement('li')
        let title = document.createElement('h1')
        let hours = document.createElement('p')
        let tagSetor = document.createElement('p')

        title.innerText = element.name
        hours.innerText = element.opening_hours
        tagSetor.innerText = element.sectors.description

        liCard.classList.add('liCard')
        title.classList.add('title')
        hours.classList.add('hours')
        tagSetor.classList.add('tagSetor')

        appendCards.append(liCard)
        liCard.append(title, hours, tagSetor)
    })
}

async function filterEmpresas() {
    let chamadaDaFunction = await requestEmpresas()
    console.log(chamadaDaFunction)

    let setores = document.querySelector('#setores')
    console.log(setores)

    if (setores.value === chamadaDaFunction.sectors.description) {
        renderizaEmpresas()
    } 
}

openMenuLogin()
closeMenuLogin()
goToLogin()
goToCadastro()
goToLoginDesk()
goToCadastroDesk()
renderizaEmpresas()
filterEmpresas()
