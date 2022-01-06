//! LOCAL MODULES
// local modullar bu biz qo`lda tayyorlagan reusable (qayta-qayta ishlatiladigan) modullar!

// const { log: myLog } = require("./locals"); // ---> locals.js fayliga yozilgan console.log fazifasini bajaruvchi local module!

// myLog("salom");  //---> console.log("salom") bilan bir xil

//!console.table()
// console.table({     // ---> Table ko`rinishida (index) va Values qismlarga ajratib chiqarib beradi!
//   name1: "Abduhalim",
//   age1: 23,
//   name2: "Sardor",
//   age2: 19,
// });

/*
!OUTPUT:
┌─────────┬─────────────┐
│ (index) │   Values    │
├─────────┼─────────────┤
│  name1  │ 'Abduhalim' │
│  age1   │     23      │
│  name2  │  'Sardor'   │
│  age2   │     19      │
└─────────┴─────────────┘
 
*/

//! console.error()
// console.error(new Error("Whoops, something bad happened"));  // ---> Error: Whoops, something bad happened

//! ------------------------------------- NPM(Node Package Manager) -----------------------------------------------
/* package.json ---> backend da dasturchi o`zi tuzishi kerak bo`lgan dasturi haqida to`liq (dastur nomi, joylashuvi, aftori, ishlatgan versiyalari ...) ma`lumot saqlanadigan qism! 
package.json kirish orqali proekt haqida 60-70% ma`lumot ovolsa bo`ladi! 
!package.json ni qo`lda yozish uchun quyidagilar qilinadi -> 
1) cmd terminalda "npm init" yozsak ma`lumotlani qo`lda o`zimiz to`ldirib chiqishimiza kk!
2) cmd terminalda "npm init -y" desak to`ldirilgan ma`lumotlarni tayyor chiqarib beradi

note: cmd da "npm i nodemon --save-dev"  ---> deganimizada package.jsonga nodemonni "devDependencies" degan bo`limiga joylashtiradi va bu proektimiz davomida live server har bir o`zgarishni kuzatuvchi vazifasini bajaradi! 

!bcrypt
Bcrypt is a popular and trusted method for salt and hashing passwords. 
A salt is a random string that makes the hash unpredictable. 
note for installing bcrypt in cmd we should write "npm i bcrypt"
*/

const bcrypt = require("bcrypt");
const salt = 3;

const password = "abdsc123";

bcrypt.hash(password, salt, (err, data) => {
  if (err) throw err;
  console.log(data);
});

bcrypt.compare(
  // bu metod hashlangan kodni asl kod bilan solishtirishga kk bo`ladi!
  password,
  "$2b$04$oEFI9dWtrfWcoBOl46mw7Oz117yIGQNm7a0qzVeYbQI8gy2c1sBVq",
  (err, data) => {
    if (err) throw err;
    console.log(data);
  }
);
