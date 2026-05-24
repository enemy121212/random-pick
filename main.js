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

];

const hero_list = [
    {
      name: 'Abaddon',
      img: 'pub/heroes/abaddon.jpg',
      role: '4'
    },
    {
      name: 'Alchemist',
      img: 'pub/heroes/alchemist.jpg',
      role: '1'
    },
    {
      name: 'Ancient Apparition',
      img: 'pub/heroes/ancient_apparition.jpg',
      role: '5'
    },
    {
      name: 'Anti-Mage',
      img: 'pub/heroes/anti_mage.jpg',
      role: '1'
    },
    {
      name: 'Arc Warden',
      img: 'pub/heroes/arc_warden.jpg',
      role: '2'
    },
    {
      name: 'Axe',
      img: 'pub/heroes/axe.jpg',
      role: '3'
    },
    {
      name: 'Bane',
      img: 'pub/heroes/bane.jpg',
      role: '4'
    },
    {
      name: 'Batrider',
      img: 'pub/heroes/batrider.jpg',
      role: '3'
    },
    {
      name: 'Beastmaster',
      img: 'pub/heroes/beastmaster.jpg',
      role: '3'
    },
    {
      name: 'Bloodseeker',
      img: 'pub/heroes/bloodseeker.jpg',
      role: '2'
    },
    {
      name: 'Bounty Hunter',
      img: 'pub/heroes/bounty_hunter.jpg',
      role: '4'
    },
    {
      name: 'Brewmaster',
      img: 'pub/heroes/brewmaster.jpg',
      role: '3'
    },
    {
      name: 'Bristleback',
      img: 'pub/heroes/bristleback.jpg',
      role: '3'
    },
    {
      name: 'Broodmother',
      img: 'pub/heroes/broodmother.jpg',
      role: '2'
    },
    {
      name: 'Centaur Warrunner',
      img: 'pub/heroes/centaur_warrunner.jpg',
      role: '3'
    },
    {
      name: 'Chaos Knight',
      img: 'pub/heroes/chaos_knight.jpg',
      role: '3'
    },
    {
      name: 'Chen',
      img: 'pub/heroes/chen.jpg',
      role: '5'
    },
    {
      name: 'Clinkz',
      img: 'pub/heroes/clinkz.jpg',
      role: '1'
    },
    {
      name: 'Clockwerk',
      img: 'pub/heroes/clockwerk.jpg',
      role: '4'
    },
    {
      name: 'Crystal Maiden',
      img: 'pub/heroes/crystal_maiden.jpg',
      role: '5'
    },
    {
      name: 'Dark Seer',
      img: 'pub/heroes/dark_seer.jpg',
      role: '3'
    },
    {
      name: 'Dark Willow',
      img: 'pub/heroes/dark_willow.jpg',
      role: '4'
    },
    {
      name: 'Dawnbreaker',
      img: 'pub/heroes/dawnbreaker.jpg',
      role: '3'
    },
    {
      name: 'Dazzle',
      img: 'pub/heroes/dazzle.jpg',
      role: '4'
    },
    {
      name: 'Death Prophet',
      img: 'pub/heroes/death_prophet.jpg',
      role: '2'
    },
    {
      name: 'Disruptor',
      img: 'pub/heroes/disruptor.jpg',
      role: '4'
    },
    {
      name: 'Doom',
      img: 'pub/heroes/doom.jpg',
      role: '3'
    },
    {
      name: 'Dragon Knight',
      img: 'pub/heroes/dragon_knight.jpg',
      role: '3'
    },
    {
      name: 'Drow Ranger',
      img: 'pub/heroes/drow_ranger.jpg',
      role: '1'
    },
    {
      name: 'Earth Spirit',
      img: 'pub/heroes/earth_spirit.jpg',
      role: '4'
    },
    {
      name: 'Earthshaker',
      img: 'pub/heroes/earthshaker.jpg',
      role: '4'
    },
    {
      name: 'Elder Titan',
      img: 'pub/heroes/elder_titan.jpg',
      role: '4'
    },
    {
      name: 'Ember Spirit',
      img: 'pub/heroes/ember_spirit.jpg',
      role: '2'
    },
    {
      name: 'Enchantress',
      img: 'pub/heroes/enchantress.jpg',
      role: '5'
    },
    {
      name: 'Enigma',
      img: 'pub/heroes/enigma.jpg',
      role: '4'
    },
    {
      name: 'Faceless Void',
      img: 'pub/heroes/faceless_void.jpg',
      role: '1'
    },
    {
      name: 'Grimstroke',
      img: 'pub/heroes/grimstroke.jpg',
      role: '4'
    },
    {
      name: 'Gyrocopter',
      img: 'pub/heroes/gyrocopter.jpg',
      role: '1'
    },
    {
      name: 'Hoodwink',
      img: 'pub/heroes/hoodwink.jpg',
      role: '4'
    },
    {
      name: 'Huskar',
      img: 'pub/heroes/huskar.jpg',
      role: '2'
    },
    {
      name: 'Invoker',
      img: 'pub/heroes/invoker.jpg',
      role: '2'
    },
    {
      name: 'Io',
      img: 'pub/heroes/io.jpg',
      role: '5'
    },
    {
      name: 'Jakiro',
      img: 'pub/heroes/jakiro.jpg',
      role: '5'
    },
    {
      name: 'Juggernaut',
      img: 'pub/heroes/juggernaut.jpg',
      role: '1'
    },
    {
      name: 'Keeper of the Light',
      img: 'pub/heroes/keeper_of_the_light.jpg',
      role: '4'
    },
    {
      name: 'Kez',
      img: 'pub/heroes/kez.jpg',
      role: '1'
    },
    {
      name: 'Kunkka',
      img: 'pub/heroes/kunkka.jpg',
      role: '3'
    },
    {
      name: 'Legion Commander',
      img: 'pub/heroes/legion_commander.jpg',
      role: '3'
    },
    {
      name: 'Leshrac',
      img: 'pub/heroes/leshrac.jpg',
      role: '2'
    },
    {
      name: 'Lich',
      img: 'pub/heroes/lich.jpg',
      role: '5'
    },
    {
      name: 'Lifestealer',
      img: 'pub/heroes/lifestealer.jpg',
      role: '1'
    },
    {
      name: 'Lina',
      img: 'pub/heroes/lina.jpg',
      role: '2'
    },
    {
        name: 'Lion',
        img: 'pub/heroes/lion.jpg',
        role: '4'
      },
      {
        name: 'Lone Druid',
        img: 'pub/heroes/lone_druid.jpg',
        role: '2'
      },
      {
        name: 'Luna',
        img: 'pub/heroes/luna.jpg',
        role: '1'
      },
      {
        name: 'Lycan',
        img: 'pub/heroes/lycan.jpg',
        role: '3'
      },
      {
        name: 'Magnus',
        img: 'pub/heroes/magnus.jpg',
        role: '3'
      },
      {
        name: 'Marci',
        img: 'pub/heroes/marci.jpg',
        role: '3'
      },
      {
        name: 'Mars',
        img: 'pub/heroes/mars.jpg',
        role: '3'
      },
      {
        name: 'Medusa',
        img: 'pub/heroes/medusa.jpg',
        role: '1'
      },
      {
        name: 'Meepo',
        img: 'pub/heroes/meepo.jpg',
        role: '2'
      },
      {
        name: 'Mirana',
        img: 'pub/heroes/mirana.jpg',
        role: '2'
      },
      {
        name: 'Monkey King',
        img: 'pub/heroes/monkey_king.jpg',
        role: '3'
      },
      {
        name: 'Morphling',
        img: 'pub/heroes/morphling.jpg',
        role: '1'
      },
      {
        name: 'Muerta',
        img: 'pub/heroes/muerta.jpg',
        role: '2'
      },
      {
        name: 'Naga Siren',
        img: 'pub/heroes/naga_siren.jpg',
        role: '2'
      },
      {
        name: 'Nature\'s Prophet',
        img: 'pub/heroes/natures_prophet.jpg',
        role: '3'
      },
      {
        name: 'Necrophos',
        img: 'pub/heroes/necrophos.jpg',
        role: '2'
      },
      {
        name: 'Night Stalker',
        img: 'pub/heroes/night_stalker.jpg',
        role: '3'
      },
      {
        name: 'Nyx Assassin',
        img: 'pub/heroes/nyx_assassin.jpg',
        role: '4'
      },
      {
        name: 'Ogre Magi',
        img: 'pub/heroes/ogre_magi.jpg',
        role: '5'
      },
      {
        name: 'Omniknight',
        img: 'pub/heroes/omniknight.jpg',
        role: '4'
      },
      {
        name: 'Oracle',
        img: 'pub/heroes/oracle.jpg',
        role: '4'
      },
      {
        name: 'Outworld Destroyer',
        img: 'pub/heroes/outworld_destroyer.jpg',
        role: '2'
      },
      {
        name: 'Pangolier',
        img: 'pub/heroes/pangolier.jpg',
        role: '3'
      },
      {
        name: 'Phantom Assassin',
        img: 'pub/heroes/phantom_assassin.jpg',
        role: '1'
      },
      {
        name: 'Phantom Lancer',
        img: 'pub/heroes/phantom_lancer.jpg',
        role: '1'
      },
      {
        name: 'Phoenix',
        img: 'pub/heroes/phoenix.jpg',
        role: '4'
      },
      {
        name: 'Primal Beast',
        img: 'pub/heroes/primal_beast.jpg',
        role: '3'
      },
      {
        name: 'Puck',
        img: 'pub/heroes/puck.jpg',
        role: '2'
      },
      {
        name: 'Pudge',
        img: 'pub/heroes/pudge.jpg',
        role: '3'
      },
      {
        name: 'Pugna',
        img: 'pub/heroes/pugna.jpg',
        role: '4'
      },
      {
        name: 'Queen of Pain',
        img: 'pub/heroes/queen_of_pain.jpg',
        role: '2'
      },
      {
        name: 'Razor',
        img: 'pub/heroes/razor.jpg',
        role: '2'
      },
      {
        name: 'Riki',
        img: 'pub/heroes/riki.jpg',
        role: '4'
      },
      {
        name: 'Ringmaster',
        img: 'pub/heroes/ringmaster.jpg',
        role: '4'
      },
      {
        name: 'Rubick',
        img: 'pub/heroes/rubick.jpg',
        role: '4'
      },
      {
        name: 'Sand King',
        img: 'pub/heroes/sand_king.jpg',
        role: '3'
      },
      {
        name: 'Shadow Demon',
        img: 'pub/heroes/shadow_demon.jpg',
        role: '4'
      },
      {
        name: 'Shadow Fiend',
        img: 'pub/heroes/shadow_fiend.jpg',
        role: '1'
      },
      {
        name: 'Shadow Shaman',
        img: 'pub/heroes/shadow_shaman.jpg',
        role: '4'
      },
      {
        name: 'Silencer',
        img: 'pub/heroes/silencer.jpg',
        role: '4'
      },
      {
        name: 'Skywrath Mage',
        img: 'pub/heroes/skywrath_mage.jpg',
        role: '4'
      },
      {
        name: 'Slardar',
        img: 'pub/heroes/slardar.jpg',
        role: '3'
      },
      {
        name: 'Slark',
        img: 'pub/heroes/slark.jpg',
        role: '2'
      },
      {
        name: 'Snapfire',
        img: 'pub/heroes/snapfire.jpg',
        role: '4'
      },
      {
        name: 'Sniper',
        img: 'pub/heroes/sniper.jpg',
        role: '1'
      },
      {
        name: 'Spectre',
        img: 'pub/heroes/spectre.jpg',
        role: '1'
      },
      {
        name: 'Spirit Breaker',
        img: 'pub/heroes/spirit_breaker.jpg',
        role: '3'
      },
      {
        name: 'Storm Spirit',
        img: 'pub/heroes/storm_spirit.jpg',
        role: '2'
      },
      {
        name: 'Sven',
        img: 'pub/heroes/sven.jpg',
        role: '3'
      },
      {
        name: 'Techies',
        img: 'pub/heroes/techies.jpg',
        role: '5'
      },
      {
        name: 'Templar Assassin',
        img: 'pub/heroes/templar_assassin.jpg',
        role: '1'
      },
      {
        name: 'Terrorblade',
        img: 'pub/heroes/terrorblade.jpg',
        role: '1'
      },
      {
        name: 'Tidehunter',
        img: 'pub/heroes/tidehunter.jpg',
        role: '4'
      },
      {
        name: 'Timbersaw',
        img: 'pub/heroes/timbersaw.jpg',
        role: '3'
      },
      {
        name: 'Tinker',
        img: 'pub/heroes/tinker.jpg',
        role: '2'
      },
      {
        name: 'Tiny',
        img: 'pub/heroes/tiny.jpg',
        role: '3'
      },
      {
        name: 'Treant Protector',

function populateHeroSelector() {
    const heroSelector = document.getElementById('heroSelector');
    hero_list.forEach(hero => {
        const option = document.createElement('option');
        option.value = hero.name;
        option.textContent = hero.name;
        heroSelector.appendChild(option);
    });
}

function pickRandomHero() {
    const randomIndex = Math.floor(Math.random() * dotaHeroes.length);
    const randomHero = dotaHeroes[randomIndex];
    document.getElementById("heroResult").textContent = `Ваш случайный герой: ${randomHero}`;
    showHeroImage(randomHero);
}

function generateTeamPick() {
    const pickedHeroes = new Set();
    while (pickedHeroes.size < 5) {
        const randomHero = dotaHeroes[Math.floor(Math.random() * dotaHeroes.length)];
        pickedHeroes.add(randomHero);
    }
    const teamArray = Array.from(pickedHeroes);

    const display = teamArray.map((hero, index) => {
        const heroData = hero_list.find(h => h.name === hero);
        const imgSrc = heroData ? heroData.img : 'images/placeholder.jpg'; 

        return `
            <div class="hero-box">
                <div>${index + 1}. ${hero}</div>
                <img src="${imgSrc}" alt="${hero}" style="max-width: 100px; height: auto; margin-top: 5px;">
            </div>
        `;
    }).join('');

    document.getElementById("teamDisplay").innerHTML = display;
}

function showHeroImage(heroName) {
    console.log(heroName)
    const heroImageContainer = document.getElementById('heroImageContainer');
    heroImageContainer.innerHTML = '';

    if (!heroName) return;

  
    const heroData = hero_list.find(hero => hero.name === heroName);

    if (heroData) {
        const img = document.createElement('img');
        img.src = heroData.img;
        img.alt = `Изображение героя: ${heroName}`;
        img.style.maxWidth = '300px';
        img.style.height = 'auto';
        img.style.marginTop = '20px';

        img.onerror = function() {
            heroImageContainer.textContent = 'Картинка для этого героя пока недоступна';
            console.error(`Не удалось загрузить картинку: ${this.src}`);
        };

        heroImageContainer.appendChild(img);
    } else {
        heroImageContainer.textContent = 'Изображение для этого героя не найдено';
    }
}

document.addEventListener('DOMContentLoaded', function() {
    populateHeroSelector();
    generateTeamPick();

    const heroSelector = document.getElementById('heroSelector');
    heroSelector.addEventListener('change', function() {
        const selectedHero = this.value;
        showHeroImage(selectedHero);
    });
});
