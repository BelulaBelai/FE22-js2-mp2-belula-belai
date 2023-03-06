
export class Tamagotchi {

    #hunger
    #happiness
    constructor(name, type) {
        this.name = name;
        this.type = type;
        this.#hunger = 6;
        this.#happiness = 6;

    }

    decreaseHunger() {
        setInterval(() => {
        }, 4000);
    }

    decreaseHappiness() {
        setInterval(() => {

        }, 2500);
    }

    getHungerLevel() {
        return this.#hunger;
    }

    getHappinessLevel() {
        return this.#happiness;
    }

    setHungerLevel(newHungerLevel) {
        return (this.#hunger = newHungerLevel);
    }

    setHappinessLevel(newHappinessLevel) {
        return (this.#hunger = newHappinessLevel);
    }


    createTamagotchi() {


        const input = document.getElementById('input').value
        const select = document.getElementById('select').value

        let newTamagotchi = new Tamagotchi(input, select)
        let currentHunger = newTamagotchi.getHungerLevel();
        let currentHappiness = newTamagotchi.getHappinessLevel();

        let tamagotchiCard = document.createElement("div");
        let tamagotchiName = document.createElement('h2')
        let hungerText = document.createElement("p");
        let happinessText = document.createElement("p");
        const feedBtn = document.createElement('button')
        feedBtn.textContent = 'Feed me!'
        const playBtn = document.createElement('button')
        playBtn.textContent = 'Play with me!'

        let tamaContainer = document.querySelector('#tamaContainer');
        tamaContainer.append(tamagotchiCard, feedBtn, playBtn);
        document.body.append(tamaContainer);

        playBtn.addEventListener('click', (e) => {
            e.preventDefault()
            if (currentHappiness >= 10) {
                currentHappiness = 10
            }
            else {
                currentHappiness++
            }
        })

        feedBtn.addEventListener('click', (e) => {
            e.preventDefault()

            if (currentHunger >= 10) {
                currentHunger = 10
            } else {
                currentHunger++
            }
        })

        if (select === 'panda') {
            tamagotchiName.textContent = `${input} the ${select}`
            const img = document.createElement('img')
            img.src = '../images/panda.gif'
            img.style.width = '150px'
            img.style.height = '150px'
            tamagotchiCard.append(tamagotchiName, img, playBtn, feedBtn, happinessText, hungerText)
            tamagotchiCard.classList.add("tamagotchiCard");


        } else {
            tamagotchiName.textContent = `${input} the ${select}`
            const img = document.createElement('img')
            img.src = '../images/happyBunny.gif'
            img.style.width = '150px'
            img.style.height = '150px'
            tamagotchiCard.append(tamagotchiName, img, playBtn, feedBtn, happinessText, hungerText)
            tamagotchiCard.classList.add("tamagotchiCard");

        }

        let happinesInterval = setInterval(function () {
            happinessText.textContent = `Happiness level: ${currentHappiness--}/10`;

            if (currentHappiness < 0) {
                clearInterval(happinesInterval)
                clearInterval(hungerInterval);
                const div = document.createElement('div')
                div.textContent = 'Your tamagotchi died!'
                div.style.color = 'red'
                div.style.fontWeight = 'bold'
                div.style.fontSize = '1rem'
                tamagotchiCard.append(div)
                currentHappiness += 0
                playBtn.disabled = true
                feedBtn.disabled = true

            }
        }, 2500);

        let hungerInterval = setInterval(function () {
            hungerText.textContent = `Hunger level: ${currentHunger--}/10`;

            if (currentHunger < 0) {
                clearInterval(hungerInterval)
                clearInterval(happinesInterval);
                const div = document.createElement('div')
                div.textContent = 'Your tamagotchi died!'
                div.style.color = 'red'
                div.style.fontWeight = 'bold'
                div.style.fontSize = '1rem'
                tamagotchiCard.append(div)
                currentHunger += 0
                playBtn.disabled = true
                feedBtn.disabled = true

            }
        }, 4000);

        newTamagotchi.decreaseHunger()
        newTamagotchi.decreaseHappiness()

    }
}
