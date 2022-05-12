(() => {
    const getInputElement = (query: string) => document.querySelector(query) as HTMLInputElement | null //Função para a captura de inputs

    const buttonCadastrar = document.querySelector('.add') as HTMLButtonElement //Button cadastrar

    buttonCadastrar?.addEventListener('click', () => {
        const name = getInputElement('#name')?.value
        const color = getInputElement('#color')?.value
        const plate = getInputElement('#plate')?.value
        if(!name || !plate || !color) {
            return
        }
        console.log(name)
        console.log(color)
        console.log(plate)
    })
})()