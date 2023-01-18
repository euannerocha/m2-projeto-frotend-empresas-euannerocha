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



import { renderizaDeptos, selectEmpresas, listarSetores, criaDepto, listarEmpresas, listarDeptos, renderizaUsuarios, contrataFuncionario, deletarUsuario, deletarDepartamento } from './requests.js'




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

async function mostraCardsUsuario() {
    const ulCardsUsuarios = document.querySelector('.ulCardsUsuarios')

    const usuarios = await renderizaUsuarios()
    // console.log(usuarios)

    usuarios.forEach((element) => {
        if (element.is_admin === false) {
            // console.log(element)


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

async function selectUser(deptoUuid) {
    let selecionarUsuario = document.querySelector(`#selecionarUsuario-${deptoUuid}`)
    const usuarios = await renderizaUsuarios()
    console.log(usuarios)
    selecionarUsuario.innerHTML = ''

    let defaultOptionUser = document.createElement('option')
    defaultOptionUser.innerText = 'Selecionar Usuário'

    selecionarUsuario.append(defaultOptionUser)
    let usuariosDaEmpresa = document.querySelector(`.usuariosDaEmpresa-${deptoUuid}`)
    usuariosDaEmpresa.innerHTML = ''

    usuarios.forEach((element) => {
        if (element.is_admin === false && !element.department_uuid) {

            let optionUser = document.createElement('option')
            optionUser.innerText = element.username
            optionUser.value = element.uuid

            selecionarUsuario.append(optionUser)
        } else if (element.department_uuid === deptoUuid) {
            console.log(element.username)

            renderizaFuncionariosDeCadaEmpresa(deptoUuid, element)
        }

    })

}

async function renderizaFuncionariosDeCadaEmpresa(deptoUuid, usuario) {


    let usuariosDaEmpresa = document.querySelector(`.usuariosDaEmpresa-${deptoUuid}`)
    console.log(usuariosDaEmpresa)
    //tem o evento de click do botão de desligar
    let liUsuariosEmpresa = document.createElement('li')
    let nomeUser = document.createElement('h1')
    nomeUser.innerText = usuario.username

    let cargoUser = document.createElement('p')
    cargoUser.innerText = usuario.professional_level

    let nomeEmpresaUser = document.createElement('p')
    nomeEmpresaUser.innerText = usuariosDaEmpresa.id

    let btnDesligar = document.createElement('button')
    btnDesligar.innerText = 'Desligar'
    

    usuariosDaEmpresa.append(liUsuariosEmpresa)
    liUsuariosEmpresa.append(nomeUser, cargoUser, nomeEmpresaUser)
    console.log(usuariosDaEmpresa)

}


function deletaDepartamento() {
    let deletarDepartamentoBtn = document.querySelector('.deletarDepartamentoBtn')

    // let ulCardsDepartamentos = document.querySelector('.ulCardsDepartamentos')


    deletarDepartamentoBtn.addEventListener('click', async (event) => {
        event.preventDefault()
        console.log(event)
        await deletarDepartamento()

    })


}


async function renderDeptosECriaModaisVisualizarEditarDeletar() {

    let chamaFunctionRender = await renderizaDeptos()
    let appendDepto = document.querySelector('.ulCardsDepartamentos')

    chamaFunctionRender.forEach(element => {

        console.log(element)

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
        btnVisualiza.classList.add(`btnVisualiza-${element.uuid}`)
        btnEdita.classList.add(`btnEdita-${element.uuid}`)
        btnDeleta.classList.add(`btnDeleta-${element.uuid}`)


        appendDepto.append(liCard)
        liCard.append(title, description, companyName, btnVisualiza, btnEdita, btnDeleta)

        //CRIAÇÃO DOS MODAIS
        //VISUALIZAR

        let containerMain = document.querySelector('.container')

        let divBackgroundVisualizar = document.createElement('div')
        let modalForm = document.createElement('form')
        let btnCloseVisualizar = document.createElement('button')
        let nomeDepto = document.createElement('h1')
        let descricaoDepto = document.createElement('p')
        let empresaPertencente = document.createElement('p')
        let selecionarUsuario = document.createElement('select')
        let btnContratarFuncionario = document.createElement('button')
        let usuariosDaEmpresa = document.createElement('ul')

        divBackgroundVisualizar.classList.add(`divBackgroundVisualizar-${element.uuid}`)
        divBackgroundVisualizar.style.display = 'none'
        modalForm.classList.add(`modal-${element.uuid}`)
        btnCloseVisualizar.innerText = 'X'
        btnCloseVisualizar.classList.add(`closeVisualizar-${element.uuid}`)
        btnCloseVisualizar.type = 'button'
        nomeDepto.innerText = element.name
        nomeDepto.classList.add(`nomeDepto-${element.uuid}`)
        descricaoDepto.innerText = element.description
        descricaoDepto.classList.add(`descricaoDepto-${element.uuid}`)
        empresaPertencente.innerText = element.companies.name
        empresaPertencente.classList.add(`empresaPertencente-${element.uuid}`)
        selecionarUsuario.id = `selecionarUsuario-${element.uuid}`
        btnContratarFuncionario.innerText = 'Contratar'
        btnContratarFuncionario.classList.add(`btnContratarFuncionario-${element.uuid}`)
        usuariosDaEmpresa.classList.add(`usuariosDaEmpresa-${element.uuid}`)
        usuariosDaEmpresa.id = element.companies.name


        divBackgroundVisualizar.append(modalForm, usuariosDaEmpresa)
        modalForm.append(btnCloseVisualizar, nomeDepto, descricaoDepto, empresaPertencente, selecionarUsuario, btnContratarFuncionario)

        //editar
        // <div class="divBackgroundEditar">
        //     <form class="modal">
        //         <h1>Editar Departamento</h1>
        //         <button type="button" class="closeEditar">X</button>

        //         <input class="inptNomeDepto" type="text">
               
        //         <button class="criarDeptoModal">Salvar Alterações</button>
        //     </form>
        // </div>

        let divBackgroundEditar = document.createElement('div')
        divBackgroundEditar.classList.add(`divBackgroundEditar-${element.uuid}`)
        divBackgroundEditar.style.display = 'none'
            let formModalEditar = document.createElement('form')
            formModalEditar.classList.add(`modal-${element.uuid}`)
                let h1Editar = document.createElement('h1')
                h1Editar.innerText = 'Editar Departamento'
                let btnCloseEditar = document.createElement('button')
                btnCloseEditar.innerText = 'X'
                btnCloseEditar.type = 'button'
                btnCloseEditar.classList.add(`closeEditar-${element.uuid}`)
                let inptEditar = document.createElement('input')
                inptEditar.classList.add(`inptNomeDepto-${element.uuid}`)
                inptEditar.type = 'text'
                let btnSalvarAlteracoes = document.createElement('button')
                btnSalvarAlteracoes.innerText = 'Salvar alterações'


        //deletar
        divBackgroundEditar.append(formModalEditar)
        formModalEditar.append(h1Editar, btnCloseEditar, inptEditar, btnSalvarAlteracoes)
        containerMain.append(divBackgroundVisualizar, divBackgroundEditar)
        teste(element.uuid)
    })

}

function teste(uuidDepto) {

    let btnVisualiza = document.querySelector(`.btnVisualiza-${uuidDepto}`)

    let divBackgroundVisualizar = document.querySelector(`.divBackgroundVisualizar-${uuidDepto}`)

    btnVisualiza.addEventListener('click', async (event) => {
        divBackgroundVisualizar.style.display = 'unset'
        console.log(event)
        await selectUser(uuidDepto)
    })


    let btnContratarFuncionario = document.querySelector(`.btnContratarFuncionario-${uuidDepto}`)

    btnContratarFuncionario.addEventListener('click', async (event) => {
        event.preventDefault()
        const optionSelecionaUsuario = document.querySelector(`#selecionarUsuario-${uuidDepto}`)
        const valorUserUuid = optionSelecionaUsuario.options[optionSelecionaUsuario.selectedIndex].value

        console.log(event)

        const objetoBody = {
            'user_uuid': valorUserUuid,
            'department_uuid': uuidDepto,
        }

        await contrataFuncionario(objetoBody)
        await selectUser(uuidDepto)

    })

    let closeVisualizar = document.querySelector(`.closeVisualizar-${uuidDepto}`)


    closeVisualizar.addEventListener('click', (event) => {
        divBackgroundVisualizar.style.display = 'none'
    })

    // let closeEditar = document.querySelector(`.closeEditar-${uuidDepto}`)


    // closeEditar.addEventListener('click', (event) => {
    //     divBackgroundEditar.style.display = 'none'
    // })

    // let closeDeletar = document.querySelector(`.closeDeletar-${uuidDepto}`)


    // closeDeletar.addEventListener('click', (event) => {
    //     divBackgroundDeletar.style.display = 'none'
    // })
}

goToLogout()
renderDeptosECriaModaisVisualizarEditarDeletar()
openMenuLogin()
closeMenuLogin()
selectEmpresas()
criarBodyDeDepto()
selectDoModalCriarDepartamento()
criaModal()
deletaDepartamento()
mostraCardsUsuario()