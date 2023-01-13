async function requestSetores(){
    let setores = await fetch('http://localhost:6278/sectors')
    .then(resp => {
     return resp.json()
    })
    .then(osta => {
        console.log(osta)

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
        console.log(error)
    })
    return setores
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
    return empresasPorSetor
}
    
async function login(corpo){
    const url = await fetch('http://localhost:6278/auth/login', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(corpo)
    })
    .then(resp => resp.json())
    .then(osta => console.log(osta))
    .catch(error => console.log(error))
    
    return url
}
requestSetores()
requestEmpresas()

async function criarUsuario(corpoCria){
    const url = await fetch('http://localhost:6278/auth/register', {
        method: 'POST',
        headers: {'Content-Type': 'application/json'},
        body: JSON.stringify(corpoCria)
    })
    .then(resp => resp.json())
    .then(osta => console.log(osta))
    .catch(error => console.log(error))

    return url
}

export{
    login,
    criarUsuario
}