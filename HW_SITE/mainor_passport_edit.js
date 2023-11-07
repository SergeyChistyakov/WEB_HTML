const mode_for_click = document.getElementById("for_click")

function find_edit(){
    const surname = document.getElementsByTagName('span')[3]
    console.log(surname.innerText)
    surname.innerText = 'Chistyakov'

    const name = document.getElementsByTagName('span')[4]
    console.log(name.innerText)
    name.innerText = 'Sergey'

    const father = document.getElementsByTagName('span')[5]
    console.log(father.innerText)
    father.innerText = 'Sergeevich'
}

mode_for_click.addEventListener("click", find_edit)