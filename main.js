
import { Tamagotchi } from './modules/tamagotchi.js'
const createTamaBtn = document.getElementById('createTamaBtn')

createTamaBtn.addEventListener('click', (e) => {
    e.preventDefault()
    if (input.value === "") {
        alert('Please name your tamagotchi!')
    }
    else {
        let newTamagotchi = new Tamagotchi(input, select)
        newTamagotchi.createTamagotchi()

    }
}
)

