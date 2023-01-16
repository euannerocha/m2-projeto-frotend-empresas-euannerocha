// import { ClasseToastify } from "./toastfy.js"

async function requestSetores() {
    let setores = await fetch('http://localhost:6278/sectors')

        .then(resp => {
            return resp.json()
        })
        .then(osta => {

            let optionAppend = document.getElementById('setores')

            osta.forEach(element => {
                let sector = document.createElement('option')
                sector.innerText = element.description
                sector.classList.add(element.description)
                sector.value = element.description

                optionAppend.append(sector)
            })

            return osta

        })
        .catch(error => {
            console.log(error)
        })
    console.log(setores)
    return setores
}

async function listarSetores() {
    let setores = await fetch('http://localhost:6278/sectors')

        .then(resp => {
            return resp.json()
        })
        .then(osta => {

            return osta

        })
        .catch(error => {
            console.log(error)
        })
    // console.log(setores)
    return setores
}

//condicional:
//evento change no select 
//quando trocar, a condicional será: se o value do option for "todos", renderizar todas as empresas
//se não, fazer um filtro aonde o setor é igual ao value do option e renderizar

async function requestEmpresas() {

    let empresasPorSetor = await fetch('http://localhost:6278/companies')
        .then(resp => {
            return resp.json()
        })
        .then(osta => {
            console.log(osta)
            let appendCards = document.querySelector('.ulCardsList')

            osta.forEach(element => {
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

            return osta

        })
        .catch(error => {
            console.log(error)
        })
    return empresasPorSetor
}



async function login(corpo) {
    const url = await fetch('http://localhost:6278/auth/login', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corpo)
    })
        .then(resp => resp.json())
        .then(osta => {

            return osta.token
        })
        .catch(error => console.log(error))

    return url
}



async function criarUsuario(corpoCria) {
    const url = await fetch('http://localhost:6278/auth/register', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify(corpoCria)
    })
        .then(resp => resp.json())
        .then(osta => {
            if (osta.error) {
                alert('E-mail já cadastrado!')
            } else {
                window.location.replace('../../src/index/login.html')
            }

            return osta

        })
        .catch(error => console.log(error))

    return url
}


async function verificaLogin() {

    const token = localStorage.getItem('token')

    console.log(token)

    const url = await fetch('http://localhost:6278/auth/validate_user', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then(resp => resp.json())
        .then(osta => {

            return osta.is_admin
        })
        .catch(error => console.log(error))

    return url
}


async function renderizaDeptos() {
    const token = localStorage.getItem('token')


    let departamentos = await fetch('http://localhost:6278/departments', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then(resp => {
            return resp.json()
        })
        .then(osta => {

            let appendDepto = document.querySelector('.ulCardsDepartamentos')

            osta.forEach(element => {
                let liCard = document.createElement('li')
                let title = document.createElement('h1')
                let description = document.createElement('p')
                let companyName = document.createElement('p')
                let btnVisualiza = document.createElement('button')
                let btnEdita = document.createElement('button')
                let btnDeleta = document.createElement('button')

                title.innerText = element.name
                description.innerText = element.description
                companyName.innerText = element.companies.name
                btnVisualiza.innerText = 'Visualizar'
                btnEdita.innerText = 'Editar'
                btnDeleta.innerText = 'Deletar'

                liCard.classList.add('liCard')
                title.classList.add('title')
                description.classList.add('hours')
                companyName.classList.add('tagSetor')


                appendDepto.append(liCard)
                liCard.append(title, description, companyName, btnVisualiza, btnEdita, btnDeleta)
            })


            return osta

        })
        .catch(error => {
            console.log(error)
        })
    return departamentos
}

async function listarDeptos() {
    const token = localStorage.getItem('token')


    let departamentos = await fetch('http://localhost:6278/departments', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then(resp => {
            return resp.json()
        })
        .then(osta => {

            return osta

        })
        .catch(error => {
            console.log(error)
        })
    return departamentos
}

async function selectEmpresas() {
    let empresasPorSetor = await fetch('http://localhost:6278/companies')
        .then(resp => {
            return resp.json()
        })
        .then(osta => {
            let optionAppend = document.getElementById('empresasAdmin')

            osta.forEach(element => {
                let sector = document.createElement('option')
                sector.innerText = element.name

                optionAppend.append(sector)
            })

            return osta

        })
        .catch(error => {
            console.log(error)
        })
    return empresasPorSetor
}

async function listarEmpresas() {
    let empresasPorSetor = await fetch('http://localhost:6278/companies')
        .then(resp => {
            return resp.json()
        })
        .then(osta => {
            console.log(osta)
            return osta

        })
        .catch(error => {
            console.log(error)
        })
    return empresasPorSetor
}


async function criaDepto(body) {

    const token = localStorage.getItem('token')

    const url = await fetch('http://localhost:6278/departments', {
        method: 'POST',
        headers: { 'Authorization': `Bearer ${token}` },
        body: JSON.stringify(body)
    })
    .then(resp => {
        return resp.json()
    })
    .then(osta => {

        return osta 

    })
    .catch(error => {
        console.log(error)
    })

    return url
}

async function alteraDescricao(){


    const token = localStorage.getItem('token')

    const url = await fetch(`http://localhost:6278/departments/${uuid}`, {
        method: 'PATCH',
        headers: {'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` }
    })
    .then(resp => {
        return resp.json()
    })
    .then(osta => {

        return osta 

    })
    .catch(error => {
        console.log(error)
    })

    return url
}





export {
    login,
    criarUsuario,
    verificaLogin,
    requestSetores,
    requestEmpresas,
    renderizaDeptos,
    selectEmpresas,
    listarDeptos,
    listarSetores,
    criaDepto,
    listarEmpresas
}