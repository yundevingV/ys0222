let userStat = document.querySelector('.userStat')

let helmetStat = document.getElementById('helmetStat')
let helmetAttack = document.getElementById('helmetAttack')
let helmetPlus = document.getElementById('helmetPlus')
let helmetChance = document.getElementById('helmetChance')

let gloveStat = document.getElementById('gloveStat')
let gloveAttack = document.getElementById('gloveAttack')
let glovePlus = document.getElementById('glovePlus')
let gloveChance = document.getElementById('gloveChance')

let wearStat = document.getElementById('wearStat')
let wearAttack = document.getElementById('wearAttack')
let wearPlus = document.getElementById('wearPlus')
let wearChance = document.getElementById('wearChance')

let weaponStat = document.getElementById('weaponStat')
let weaponAttack = document.getElementById('weaponAttack')
let weaponPlus = document.getElementById('weaponPlus')
let weaponChance = document.getElementById('weaponChance')

let shoesStat = document.getElementById('shoesStat')
let shoesAttack = document.getElementById('shoesAttack')
let shoesPlus = document.getElementById('shoesPlus')
let shoesChance = document.getElementById('shoesChance')



let enchantbtn_helmet30 = document.getElementById('helmet30');
let enchantbtn_helmet70 = document.getElementById('helmet70');
let enchantbtn_glove30 = document.getElementById('glove30');
let enchantbtn_glove70 = document.getElementById('glove70');
let enchantbtn_wear30 = document.getElementById('wear30');
let enchantbtn_wear70 = document.getElementById('wear70');
let enchantbtn_weapon30 = document.getElementById('weapon30');
let enchantbtn_weapon70 = document.getElementById('weapon70');
let enchantbtn_shoes30 = document.getElementById('shoes30');
let enchantbtn_shoes70 = document.getElementById('shoes70');


let user = {
    'statAttack' : 5,
}

let equipment = [
    {name: "적응형 투구", str : 1, attack : 0, chance : 7, plusStat : 1},
    {name: "노가다 목장갑", str : 1, attack : 0, chance : 7, plusStat : 1},
    {name: "덤불조끼", str : 1, attack : 0, chance : 7, plusStat : 1},
    {name: "펜리르탈론", str : 1, attack : 100, chance : 7, plusStat : 1},
    {name: "기동신의 장화", str : 1, attack : 0, chance : 7, plusStat : 1},
]

enchantbtn_helmet70.addEventListener('click', function(){
    let randomInt = Math.floor(Math.random()*100);
    if(randomInt < 70){
        equipment[0].str = equipment[0].str + 1
        equipment[0].attack = equipment[0].attack + 1
        equipment[0].chance = equipment[0].chance - 1
        equipment[0].plusStat = equipment[0].plusStat + 4
        user.statAttack = user.statAttack + 4
        helmetStat.innerHTML = `STR + ${equipment[0].str}`
        helmetAttack.innerHTML = `공격력 + ${equipment[0].attack}`
        helmetChance.innerHTML = `남은 횟수 + ${equipment[0].chance}`
        helmetPlus.innerHTML = `스공 + ${equipment[0].plusStat}`
        if(equipment[0].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            helmetChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
    else{
        equipment[0].chance = equipment[0].chance - 1
        helmetChance.innerHTML = `남은 횟수 : ${equipment[0].chance}`
        console.log(randomInt)
        if(equipment[0].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            helmetChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
})

enchantbtn_helmet30.addEventListener('click', function(){
    let randomInt = Math.floor(Math.random()*100);
    if(randomInt < 30){
        equipment[0].str = equipment[0].str + 4
        equipment[0].attack = equipment[0].attack + 2
        equipment[0].chance = equipment[0].chance - 1
        equipment[0].plusStat = equipment[0].plusStat + 10
        helmetStat.innerHTML = `STR + ${equipment[0].str}`
        helmetAttack.innerHTML = `공격력 + ${equipment[0].attack}`
        helmetChance.innerHTML = `남은 횟수 + ${equipment[0].chance}`
        helmetPlus.innerHTML = `스공 + ${equipment[0].plusStat}`
        if(equipment[0].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            helmetChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
    else{
        equipment[0].chance = equipment[0].chance - 1
        helmetChance.innerHTML = `남은 횟수 : ${equipment[0].chance}`
        console.log(randomInt)
        if(equipment[0].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            helmetChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
})

//장갑
enchantbtn_glove70.addEventListener('click', function(){
    let randomInt = Math.floor(Math.random()*100);
    if(randomInt < 70){
        equipment[1].str = equipment[1].str + 1
        equipment[1].attack = equipment[1].attack + 1
        equipment[1].chance = equipment[1].chance - 1
        equipment[1].plusStat = equipment[1].plusStat + 4
        gloveStat.innerHTML = `STR + ${equipment[1].str}`
        gloveAttack.innerHTML = `공격력 + ${equipment[1].attack}`
        gloveChance.innerHTML = `남은 횟수 + ${equipment[1].chance}`
        glovePlus.innerHTML = `스공 + ${equipment[1].plusStat}`
        if(equipment[1].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            gloveChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
    else{
        equipment[1].chance = equipment[1].chance - 1
        gloveChance.innerHTML = `남은 횟수 : ${equipment[1].chance}`
        if(equipment[1].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            gloveChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
})

enchantbtn_glove30.addEventListener('click', function(){
    let randomInt = Math.floor(Math.random()*100);
    if(randomInt < 30){
        equipment[1].str = equipment[1].str + 4
        equipment[1].attack = equipment[1].attack + 2
        equipment[1].chance = equipment[1].chance - 1
        equipment[1].plusStat = equipment[1].plusStat + 10
        gloveStat.innerHTML = `STR + ${equipment[1].str}`
        gloveAttack.innerHTML = `공격력 + ${equipment[1].attack}`
        gloveChance.innerHTML = `남은 횟수 + ${equipment[1].chance}`
        glovePlus.innerHTML = `스공 + ${equipment[1].plusStat}`
        if(equipment[1].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            gloveChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
    else{
        equipment[1].chance = equipment[1].chance - 1
        gloveChance.innerHTML = `남은 횟수 : ${equipment[1].chance}`
        if(equipment[1].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            gloveChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
})

//옷

enchantbtn_wear70.addEventListener('click', function(){
    let randomInt = Math.floor(Math.random()*100);
    if(randomInt < 70){
        equipment[2].str = equipment[2].str + 1
        equipment[2].attack = equipment[2].attack + 1
        equipment[2].chance = equipment[2].chance - 1
        equipment[2].plusStat = equipment[2].plusStat + 4
        wearStat.innerHTML = `STR + ${equipment[2].str}`
        wearAttack.innerHTML = `공격력 + ${equipment[2].attack}`
        wearChance.innerHTML = `남은 횟수 + ${equipment[2].chance}`
        wearPlus.innerHTML = `스공 + ${equipment[2].plusStat}`
        if(equipment[2].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            wearChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
    else{
        equipment[2].chance = equipment[2].chance - 1
        wearChance.innerHTML = `남은 횟수 : ${equipment[2].chance}`
        if(equipment[2].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            wearChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
})

enchantbtn_wear30.addEventListener('click', function(){
    let randomInt = Math.floor(Math.random()*100);
    if(randomInt < 30){
        equipment[2].str = equipment[2].str + 4
        equipment[2].attack = equipment[2].attack + 2
        equipment[2].chance = equipment[2].chance - 1
        equipment[2].plusStat = equipment[2].plusStat + 10
        wearStat.innerHTML = `STR + ${equipment[2].str}`
        wearAttack.innerHTML = `공격력 + ${equipment[2].attack}`
        wearChance.innerHTML = `남은 횟수 + ${equipment[2].chance}`
        wearPlus.innerHTML = `스공 + ${equipment[2].plusStat}`
        if(equipment[2].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            wearChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
    else{
        equipment[2].chance = equipment[2].chance - 1
        wearChance.innerHTML = `남은 횟수 : ${equipment[2].chance}`
        console.log(randomInt)
        if(equipment[2].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            wearChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
})

enchantbtn_weapon70.addEventListener('click', function(){
    let randomInt = Math.floor(Math.random()*100);
    if(randomInt < 70){
        equipment[3].str = equipment[3].str + 2
        equipment[3].attack = equipment[3].attack + 3
        equipment[3].chance = equipment[3].chance - 1
        equipment[3].plusStat = equipment[3].plusStat + 8
        weaponStat.innerHTML = `STR + ${equipment[3].str}`
        weaponAttack.innerHTML = `공격력 + ${equipment[3].attack}`
        weaponChance.innerHTML = `남은 횟수 + ${equipment[3].chance}`
        weaponPlus.innerHTML = `스공 + ${equipment[3].plusStat}`
        if(equipment[3].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            weaponChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
    else{
        equipment[3].chance = equipment[3].chance - 1
        weaponChance.innerHTML = `남은 횟수 : ${equipment[3].chance}`
        console.log(randomInt)
        if(equipment[3].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            weaponChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
})

enchantbtn_weapon30.addEventListener('click', function(){
    let randomInt = Math.floor(Math.random()*100);
    if(randomInt < 30){
        equipment[3].str = equipment[3].str + 5
        equipment[3].attack = equipment[3].attack + 7
        equipment[3].chance = equipment[3].chance - 1
        equipment[3].plusStat = equipment[3].plusStat + 19
        weaponStat.innerHTML = `STR + ${equipment[3].str}`
        weaponAttack.innerHTML = `공격력 + ${equipment[3].attack}`
        weaponChance.innerHTML = `남은 횟수 + ${equipment[3].chance}`
        weaponPlus.innerHTML = `스공 + ${equipment[3].plusStat}`
        if(equipment[3].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            weaponChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
    else{
        equipment[3].chance = equipment[3].chance - 1
        weaponChance.innerHTML = `남은 횟수 : ${equipment[3].chance}`
        console.log(randomInt)
        if(equipment[3].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            weaponChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
})

enchantbtn_shoes70.addEventListener('click', function(){
    let randomInt = Math.floor(Math.random()*100);
    if(randomInt < 70){
        equipment[4].str = equipment[4].str + 1
        equipment[4].attack = equipment[4].attack + 1
        equipment[4].chance = equipment[4].chance - 1
        equipment[4].plusStat = equipment[4].plusStat + 4
        shoesStat.innerHTML = `STR + ${equipment[4].str}`
        shoesAttack.innerHTML = `공격력 + ${equipment[4].attack}`
        shoesChance.innerHTML = `남은 횟수 + ${equipment[4].chance}`
        shoesPlus.innerHTML = `스공 + ${equipment[4].plusStat}`
        if(equipment[4].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            shoesChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
    else{
        equipment[4].chance -= 1
        shoesChance.innerHTML = `남은 횟수 : ${equipment[0].chance}`
        console.log(randomInt)
        if(equipment[4].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            shoesChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
})

enchantbtn_shoes30.addEventListener('click', function(){
    let randomInt = Math.floor(Math.random()*100);
    if(randomInt < 30){
        equipment[4].str = equipment[4].str + 4
        equipment[4].attack = equipment[4].attack + 2
        equipment[4].chance = equipment[4].chance - 1
        equipment[4].plusStat = equipment[4].plusStat + 10
        user.statAttack += 10
        shoesStat.innerHTML = `STR + ${equipment[4].str}`
        shoesAttack.innerHTML = `공격력 + ${equipment[4].attack}`
        shoesChance.innerHTML = `남은 횟수 + ${equipment[4].chance}`
        shoesPlus.innerHTML = `스공 + ${equipment[4].plusStat}`
        if(equipment[4].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            shoesChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
    else{
        equipment[4].chance = equipment[4].chance - 1
        shoesChance.innerHTML = `남은 횟수 : ${equipment[4].chance}`
        console.log(randomInt)
        if(equipment[4].chance < 0){
            alert('더 이상 강화할 수 없습니다.')
            shoesChance.innerHTML = `남은 횟수 + ${0}`
        }
    }
})