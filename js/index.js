// const burger = $.burger()



// $.burger = function (options) {
//     const $burger = _createBurger(options)
//
//     return {
//         open() {
//             $burger.classList.add('open')
//             burgerIcon.remove(burgerIcon)
//             function createCross() {
//                 const cross = document.createElement('div')
//                 cross.classList.add('crossInside')
//                 cross.insertAdjacentHTML('beforeend', `<i class="fa-solid fa-xmark"></i>`)
//                 burgerCross.appendChild(cross)
//                 return cross
//             }
//
//             createCross()
//         },
//         close() {
//             $burger.classList.remove('open')
//             burgerCross.remove(burgerCross)
//             burgerIcon.appendChild(burgerIcon)
//         }
//     }
// }
//
//
// const burger = $.burger()
//
// // burger.open()
//
// burgerIcon.addEventListener('click', () => {
//     burger.open()
// })
//
// burgerCross.addEventListener('click', () => {
//     burger.close()
// })