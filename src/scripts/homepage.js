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

openMenuLogin()
closeMenuLogin()
goToLogin()
goToCadastro()




async function requestSetores(){
    let setores = await fetch('http://localhost:6278/sectors')
    .then(resp => {
     return resp.json()
    })
    .then(osta => {
        // console.log(osta)

        let optionAppend = document.getElementById('setores')

        osta.forEach(element => {
            let sector = document.createElement('option')
            sector.innerText = element.description
            sector.classList.add(element.description)
            sector.value = element.description

            optionAppend.append(sector)
        })
    })
    .catch(error => {
        console.log(`Ops! Ocorreu o seguinte erro: ${error}`)
    })

}

async function requestEmpresas(){

    let empresasPorSetor = await fetch('http://localhost:6278/companies')
    .then(resp => {
        return resp.json()
       })
    .then(osta => {
           console.log(osta)

           let appendCards = document.querySelector('.ulCardsList')

           osta.forEach(element =>{
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
       })
    .catch(error => {
        console.log(`Ops! Ocorreu o seguinte erro: ${error}`)
    })

}

// async function requestEmpresasPorSetor(name = ""){


//     let empresasPorSetor = (await fetch(`http://localhost:6278/companies/${name}`))
//     .then(resp => {
//         return resp.json()
//        })
//     .then(osta => {
//            console.log(osta)
//        })
       
//     console.log(empresasPorSetor)
       
// } 
    
    
requestSetores()
requestEmpresas()
// requestEmpresasPorSetor()

