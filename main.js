    import { hero_list } from "./hero.js"


function pickRandomHero() {
    const randomIndex = Math.floor(Math.random() * hero_list.length)
    const randomHero = hero_list[randomIndex]
    document.getElementById("heroResult").textContent = `Ваш случайный герой: ${randomHero.name}`
    showHeroImage(randomHero.name)
}
function generateTeamPick() {
        const pickedHeroes = new Set()
        while (pickedHeroes.size < 5) {
            const randomHero = hero_list[Math.floor(Math.random() * hero_list.length)]
            pickedHeroes.add(randomHero.name)
        }
        const teamArray = Array.from(pickedHeroes)
        const display = teamArray.map((hero, index) =>
            `<div class="hero-box">${index + 1}. ${hero}</div>`
        ).join('')
        document.getElementById("teamDisplay").innerHTML = display
    }

generateTeamPick()

randomPickButton.addEventListener('click', pickRandomHero)
generateTeamPickButton.addEventListener('click', generateTeamPick)

const heroSelector = document.getElementById('heroSelector');
const heroImageContainer = document.getElementById('heroImageContainer');

function showHeroImage(heroName) {
    heroImageContainer.innerHTML = ''

    if (!heroName) return;

    if (!hero_list.some((hero) => hero.name === heroName)) {
        console.log('Нет героя с таким именем')
        return 
    }

    const hero = hero_list.filter((hero) => hero.name === heroName)[0]

    const img = document.createElement('img');

    img.src = hero.img; 

    img.alt = `Изображение героя: ${heroName}`;

    img.style.maxWidth = '300px';
    img.style.height = 'auto';
    img.style.marginTop = '20px';

    img.onerror = function() {
        heroImageContainer.textContent = 'Картинка для этого героя пока недоступна';
        console.error(`Не удалось загрузить картинку: ${img.src}`);
    };

    heroImageContainer.appendChild(img);
}

heroSelector.addEventListener('change', function() {
    const selectedHero = this.ariaValueMax
    showHeroImage(selectedHero);
});
