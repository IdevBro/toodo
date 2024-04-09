// // JavaScriptda array, ma'lumotlarni saqlash va ularga operatsiyalar bajarish uchun keng qo'llaniladigan obyekt turi. Bir qator elementlardan tashkil topgan bo'lishi mumkin. Arraylar turli xil ma'lumot turlarini (masalan, sonlar, matnlar, obyektlar va h.k.) o'z ichiga olishlari mumkin.

// var cars = ["Toyota", "BMW", "Honda", "Ford"];
// var numbers = [1, 2, 3, 4, 5];
// var mixedArray = ["apple", 3, true];

// // length: Arrayda nechta element borligini aniqlaydi.
// var cars = ["Toyota", "BMW", "Honda", "Ford"];
// console.log(cars.length); // 4

// // push(): Yangi element qo'shish uchun ishlatiladi.
// cars.push("Chevrolet");
// console.log(cars); // ["Toyota", "BMW", "Honda", "Ford", "Chevrolet"]

// // pop(): So'nggi elementni olib tashlaydi.
// cars.pop();
// console.log(cars); // ["Toyota", "BMW", "Honda", "Ford"]

// // shift(): Birinchi elementni olib tashlaydi.
// cars.shift();
// console.log(cars); // ["BMW", "Honda", "Ford"]

// // unshift(): Boshiga yangi element qo'shadi.
// cars.unshift("Mercedes");
// console.log(cars); // ["Mercedes", "BMW", "Honda", "Ford"]

// // slice(): Biron bir qismni ko'chiradi.
// var subArray = cars.slice(1, 3);
// console.log(subArray); // ["BMW", "Honda"]

// // splice(): Arraydan biror qismni olib tashlab, o'rniga boshqa elementlar qo'shish, o'zgartirish yoki o'chirish imkoniyatini beradi.
// cars.splice(2, 0, "Nissan", "Chevrolet");
// console.log(cars); // ["Mercedes", "BMW", "Nissan", "Chevrolet", "Honda", "Ford"]

// // indexOf(): Element indeksini qaytaradi, agar topilmasa -1 qaytaradi.
// var index = cars.indexOf("BMW");
// console.log(index); // 1

// // forEach(): Har bir element uchun takrorlash.

// cars.forEach(function (car) {
//   console.log(car);
// });

// // map(): Bu metod har bir array elementi uchun beringan funksiyani chaqiradi
// //  va undan foydalanib yangi bir array yaratadi. Yangi array asl arrayning har bir elementiga
// // beringan funksiyaning qaytaradigan qiymatlar bilan to'ldiriladi.
// var squaredNumbers = numbers.map(function (num) {
//   return num * num;
// });
// console.log(squaredNumbers); // [1, 4, 9, 16, 25]

// // filter(): Bu metod berilgan shartni qanoatlantiradigan elementlardan iborat bo'lgan yangi bir array qaytaradi.
// // Ya'ni, berilgan shartga mos keladigan barcha elementlarni o'z ichiga oladi.
// var evenNumbers = numbers.filter(function (num) {
//   return num % 2 === 0;
// });
// console.log(evenNumbers); // [2, 4]

// // reduce(): Bu metod beringan funksiya orqali arrayni bir qiymatga qisqartiradi.
// //  Reduce metodining bosh parametrlari reducer funksiya va boshlang'ich qiymatdir.

// var sum = numbers.reduce(function (acc, curr) {
//   console.log(acc + "acc bu");
//   console.log(curr + "curr bu");
//   return acc + curr;
// }, 0);
// console.log(sum); // 15

