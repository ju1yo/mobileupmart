const secoes = [
    //seção 1
        {
          id: 1,
          titulo: 'Qual seu nome?',
          InputTexto: [
            {
              id:1,
              placeholder:'Nome'
            },
            {
              id:2,
              placeholder:'Sobrenome'
            },
            {
              id:3,
              placeholder:'Data de nascimento'
            }
           ]
        },
    //seção 2
        {
          id: 2,
          titulo: 'Qual seu e-mail ou telefone?',
          InputTexto: [
              {
                id: 1,
                placeholder: 'Digite seu e-mail'
              },
              {
                id: 2,
                placeholder: '(00) 8888-8888'
              }
          ]
        },
    // seção 3
        {
          id: 3,
          titulo: 'Crie uma senha!',
          InputTexto: [
            {
              id:1,
              placeholder: '********'
            },
            {
              id:2,
              placeholder: 'Confrme sua senha',
            }
          ]
        }
      ]

      export {secoes}