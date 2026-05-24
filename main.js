const dotaHeroes = [
    "Abaddon", "Alchemist", "Ancient Apparition", "Anti-Mage", "Arc Warden",
  "Axe", "Bane", "Batrider", "Beastmaster", "Bloodseeker",
  "Bounty Hunter", "Brewmaster", "Bristleback", "Broodmother", "Centaur Warrunner",
  "Chaos Knight", "Chen", "Clinkz", "Clockwerk", "Crystal Maiden",
  "Dark Seer", "Dark Willow", "Dawnbreaker", "Dazzle", "Death Prophet",
  "Disruptor", "Doom", "Dragon Knight", "Drow Ranger", "Earth Spirit",
  "Earthshaker", "Elder Titan", "Ember Spirit", "Enchantress", "Enigma",
  "Faceless Void", "Grimstroke", "Gyrocopter", "Hoodwink", "Huskar",
  "Invoker", "Io", "Jakiro", "Juggernaut", "Keeper of the Light",
  "Kez", "Kunkka", "Legion Commander","Largo", "Leshrac", "Lich",
  "Lifestealer", "Lina", "Lion", "Lone Druid", "Luna",
  "Lycan", "Magnus", "Marci", "Mars", "Medusa",
  "Meepo", "Mirana", "Monkey King", "Morphling", "Muerta",
  "Naga Siren", "Nature's Prophet", "Necrophos", "Night Stalker", "Nyx Assassin",
  "Ogre Magi", "Omniknight", "Oracle", "Outworld Destroyer", "Pangolier",
  "Phantom Assassin", "Phantom Lancer", "Phoenix", "Primal Beast", "Puck",
  "Pudge", "Pugna", "Queen of Pain", "Razor", "Riki",
  "Ringmaster", "Rubick", "Sand King", "Shadow Demon", "Shadow Fiend",
  "Shadow Shaman", "Silencer", "Skywrath Mage", "Slardar", "Slark",
  "Snapfire", "Sniper", "Spectre", "Spirit Breaker", "Storm Spirit",
  "Sven", "Techies", "Templar Assassin", "Terrorblade", "Tidehunter",
  "Timbersaw", "Tinker", "Tiny", "Treant Protector", "Troll Warlord",
  "Tusk", "Underlord", "Undying", "Ursa", "Vengeful Spirit",
  "Venomancer", "Viper", "Visage", "Void Spirit", "Warlock",
  "Weaver", "Windranger", "Winter Wyvern", "Witch Doctor", "Wraith King", "Zeus"
]
  
    function pickRandomHero() {
        const randomIndex = Math.floor(Math.random() * dotaHeroes.length)
        const randomHero = dotaHeroes[randomIndex]
        document.getElementById("heroResult").textContent = `Ваш случайный герой: ${randomHero}`
    }
    function generateTeamPick() {
          const pickedHeroes = new Set()
          while (pickedHeroes.size < 5) {
              const randomHero = dotaHeroes[Math.floor(Math.random() * dotaHeroes.length)]
              pickedHeroes.add(randomHero)
          }
          const teamArray = Array.from(pickedHeroes)
          const display = teamArray.map((hero, index) =>
              `<div class="hero-box">${index + 1}. ${hero}</div>`
          ).join('')
          document.getElementById("teamDisplay").innerHTML = display
      }

      generateTeamPick()

const heroSelector = document.getElementById('heroSelector');
const heroImageContainer = document.getElementById('heroImageContainer');

function showHeroImage(heroName) {
    heroImageContainer.innerHTML = ''

    if (!heroName) return;

    const img = document.createElement('img');

    img.src = `images/${heroName}.png`; 

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
