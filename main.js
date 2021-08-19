// ==================Destucturization==============================
// const user = {
//     name: 'Sanjar',
//     age:26,
//     from: `O'zbekiston, Toshkent, Chilonzor 15 kvartal 8 uy 4 xonadon`
// }
// function parserUser(obj) {
//     const {name, age: ageObj, from} = obj,
//     data = new Date(),
//     age = data.getFullYear(),
//     userName = `Ismiz ${name}`,
//     userFrom = `Address ${from}`,
//     userAge = `Yoshingiz ${ageObj} da. Tug'ilgan yilingiz ${age - ageObj}`,
//     userInfo = `${userName} ${userAge} ${userFrom} da istiqomat qilasiz`
//     return userInfo
// }
// console.log(parserUser(user));


// const users = {
//     1: {
//         name: 'Sanjar',
//         age: 26,
//         from: {
//             country: `O'zbekiston`,
//             city: 'Toshkent',
//             district: 'Chilonzor',
//             street: '15 kvartal',
//             home: '8 uy 4 xonadon'
//         }
//     },
//     2: {
//         name: "Diyorxo'ja",
//         age: 19,
//         from: {
//             country: `O'zbekiston`,
//             city: 'Toshkent',
//             district: "yangi yo'l",
//             street: 'Xasanov',
//             home: '13 uy'
//         }
//     },
//     3: {
//         name: 'Mustafo',
//         age: 17,
//         from: {
//             country: `O'zbekiston`,
//             city: 'Toshkent',
//             district: 'Mirobod',
//             street: '3 kvartal',
//             home: '8 uy 4 xonadon'
//         }
//     },
//     4: {
//         name: 'Islom',
//         age: 16,
//         from: {
//             country: `O'zbekiston`,
//             city: 'Toshkent',
//             district: "Ko'kcha",
//             street: '6 kvartal',
//             home: '8 uy 4 xonadon'
//         }
//     },
//     5: {
//         name: 'Abdulloh',
//         age: 15,
//         from: {
//             country: `O'zbekiston`,
//             city: 'Toshkent',
//             district: "Izza",
//             street: '6 kvartal',
//             home: '8 uy 4 xonadon'
//         }
//     },
// }
// function parsingUser(obj) {
//     const { name, age, from: { country, city, district, street, home } } = obj,
//         date = new Date(),
//         yearNow = date.getFullYear(),
//         userName = `Ismingiz: ${name}`,
//         userAge = `Yoshingiz: ${age},\nTug'ilgan yilingiz: ${yearNow - age}`,
//         userFrom = `Address - country : ${country}\ncity: ${city}\ndistrict: ${district}\nstreet: ${street}\nhome: ${home}`,
//         userInfo = `${userName}\n${userAge}\n${userFrom}`
//     return userInfo

// }
// for (const key in users) {
//     console.log(parsingUser(users[key]));
// }

// const local = {
//     en:{
//         servicies: 'servicies',
//         price:'price'
//     },
//     ru:{
//         servicies: 'Услуги',
//         price:'Цена'
//     },
//     uz:{
//         servicies: 'Xizmatlar',
//         price:'Narx'
        
//     }
// }
// console.log(local.uz);


let lang = prompt('Choose language: eng, ru, uz ').toLowerCase()

const local = {
    eng:{
        servicies: 'servicies',
        price: 'price'
    },
    ru:{
        servicies: 'Услуги',
        price:'Цена'
    },
    uz:{
        servicies: 'xizmatlar',
        price: 'narx'
    }
}
if (lang == 'eng') {
    console.log(local.eng);
}else if (lang == 'ru'){
    console.log(local.ru);
}else if (lang == 'uz'){
    console.log(local.uz);
}else{
    console.log(local.eng);
}








