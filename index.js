const axios = require('axios') // Chama o axios

let url = 'https://jsonplaceholder.typicode.com/todos' // armazena a url de requizição

axios.get(url)// faz a requisição GET
    .then((res) => { // então espera a respora do servidor

        switch (res.status){// atribui um texto de acordo com o status code
        
            case 200:
            var status = 'SUCCESS'
            break
    
            case '404':
            var status = 'NOT FOUND'
            break
    
            case '400':
            var status = 'INVALID REQUEST'
            break
    
            case '500':
            var status = 'INTERNAL SERVER ERROR'
            break
        }
    

        console.log(`HTTP STATUS CODE ${res.status}: ${status}\n`) // imprime status code e um texto correspondente

        console.log(`Total de Arquivos: ${res.data.length}\n`) // imprime o total de itens dentro do documento

        for (var i = 0; i < res.data.length; i++) { // percorre todos os itens do documento

            if (res.data[i].completed) {// seleciona os itens que tem o campo completed = true


                console.log(`Id: ${res.data[i].id}, Title: ${res.data[i].title}`) // imprime na tela os campos selecionados

            }
        }

    })
