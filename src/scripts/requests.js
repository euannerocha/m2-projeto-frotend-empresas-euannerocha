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
            // console.log(osta)
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
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
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

async function alteraDescricaoDoDepartamento() {


    const token = localStorage.getItem('token')

    const url = await fetch(`http://localhost:6278/departments/${uuid}`, {
        method: 'PATCH',
        headers: { 'Accept': 'application/json', 'Authorization': `Bearer ${token}` }
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

async function deletarUsuario(uuidDoUsuario){
    const token = localStorage.getItem('token')

    const url = await fetch(`http://localhost:6278/admin/delete_user/${uuidDoUsuario}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then(resp => {
            return resp.json()
        })
        .then(osta => {
            // console.log(osta)
            return osta

        })
        .catch(error => {
            console.log(error)
        })

    return url
}

async function desligaFuncionario(uuidDoUsuario){
    const token = localStorage.getItem('token')

    const url = await fetch(`http://localhost:6278/departments/dismiss/${uuidDoUsuario}`, {
        method: 'PATCH',
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

    return url
}

async function deletarDepartamento(id){
    const token = localStorage.getItem('token')

    const url = await fetch(`http://localhost:6278/departments/${id}`, {
        method: 'DELETE',
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then(resp => {
            return resp
        })
        .catch(error => {
            console.log(error)
        })

    return url
}

async function renderizaUsuarios(){
    const token = localStorage.getItem('token')

    const url = await fetch('http://localhost:6278/users', {
        method: 'GET',
        headers: { 'Authorization': `Bearer ${token}` }
    })
        .then(resp => {
            return resp.json()
        })
        .then(osta => {
            // console.log(osta)
            return osta

        })
        .catch(error => {
            console.log(error)
        })

    return url
}

async function contrataFuncionario(body){
    const token = localStorage.getItem('token')

    const url = await fetch('http://localhost:6278/departments/hire/', {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
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

async function editaDepartamento(uuidDepto, body){
    const token = localStorage.getItem('token')

    const url = await fetch(`http://localhost:6278/departments/${uuidDepto}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
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

async function atualizarFuncionario(corpo){
    const token = localStorage.getItem('token')

    const url = await fetch(`http://localhost:6278/admin/update_user/${uuidDepto}`, {
        method: 'PATCH',
        headers: { 'Content-Type': 'application/json', 'Authorization': `Bearer ${token}` },
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
    listarEmpresas,
    renderizaUsuarios,
    contrataFuncionario,
    alteraDescricaoDoDepartamento,
    deletarUsuario,
    deletarDepartamento,
    desligaFuncionario,
    editaDepartamento
}