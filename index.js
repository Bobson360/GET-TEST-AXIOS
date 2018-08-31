const axios = require('axios') // Chama o axios

let url = 'https://jsonplaceholder.typicode.com/todos' // armazena a url de requizição

axios.get(url)// faz a requisição GET
    .then((res) => { // então espera a respora do servidor
        console.log(res.data.length) // imprime o total de itens dentro do documento

        for (var i = 0; i < res.data.length; i++) { // percorre todos os itens do documento

            if (res.data[i].completed) {// seleciona os itens que tem o campo completed = true


                console.log(`Id: ${res.data[i].id}, Title: ${res.data[i].title}`) // imprime na tela os campos selecionados

            }
        }

    })