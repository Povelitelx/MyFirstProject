const header = document.getElementById('#')
const burgerCont = document.querySelector('.burger_nav_container')
const burgerIcon = document.querySelector('.burger_icon')
const burgerCross = document.querySelector('.burger_cross')

function _createBurger(options) {
    const burger = document.createElement('div')
    burger.classList.add('burger_nav')
    burger.insertAdjacentHTML('beforeend', `<div>
        <div class="burger_nav_wrapper">
            <div class="burger_nav_main">
                <div>
                    <a href="index.html">Главная</a>
                </div>
                <div>
                    <a href="index2.html">O питомнике</a>
                </div>
                <div>
                    <a href="">Щенки</a>
                </div>
                <div>
                    <a href="">Галерея</a>
                </div>
                <div>
                    <a href="">Oтзывы</a>
                </div>
            </div>
            <div class="burger_nav_icon">
                <div>
                    <a href=""> <i class="fa-brands fa-instagram"></i></a>
                </div>
                <div>
                    <a href=""> <i class="fa-brands fa-viber"></i></a>
                </div>
                <div>
                    <a href=""> <i class="fa-brands fa-telegram"></i></a>
                </div>
            </div>
        </div>
    </div>`)


    burgerCont.appendChild(burger)

    return burger
}

const $ = {}


$.burger = function (options) {
    const $burger = _createBurger(options)

    return {
        open() {
            $burger.classList.add('open')
        },
        close() {
            $burger.classList.remove('open')

        }
    }
}


const burger = $.burger()

let isOpen = false

if (isOpen) {
    burger.open()
}

burgerIcon.addEventListener('click', () => {
    if (!isOpen) {
        burger.close()
    } else {
        burger.open()
    }
    isOpen = !isOpen
})


const textInfo = document.querySelector('.main_info_text_JS')
const nextButton = document.querySelector('.next_but')
const imgInfo = document.querySelector('.main_info_every_img')


const data = [

    {
        title: 'Сиба-Ину — cамая маленькая собака из японских пород. Храбрая, величественная, с большой внутренней силой в сочетании с непоколебимой лояльностью и доверием к владельцу. Это очаровательная собака с плюшевой шерстью и своенравным характером. Быть хозяином такого питомца непросто, но если вы завоюете его уважение и доверие, то получите массу удовольствия от общения с умным и любознательным другом.',
        photo: '<img src="img/siba-inu-5_right.jpg" alt="">'
    },

    {
        title: 'Акита-ину – шпицеобразные собаки, выведенные на севере Японии (префектура Акита). Они обладают мускулистым телосложением и густой короткой шерстью. Нрав доминантный, независимый, требующий упорной дрессуры и уважительного отношения. Эта порода подходит опытным собаководам, спокойным, уверенным в себе людям.',
        photo: '<img src="img/akita2.webp" alt="">'
    },
    {
        title: 'Американский булли по праву считается бодибилдером среди пород собак. При сравнительно небольшом росте его мускулатура поражает своими размерами. Внешность булли устрашающая, огромная пасть может напугать любого человека.Но это впечатление от первого взгляда. На самом деле в этой породе удивительным образом сочетается экстерьер безжалостного бойца и дружелюбный нрав.',
        photo: '<img src="img/bulli2.jpg" alt="">'
    },

]

const firstCircle = document.querySelector('.fa-circle_one')
const firstCircleTwo = document.querySelector('.fa-circle_two')
const firstCircleThree = document.querySelector('.fa-circle_three')
const circleGeneral = document.querySelector('.fa-circle')

const Arr = [firstCircle,firstCircleTwo,firstCircleThree]


let current = 0;



nextButton.addEventListener('click', () => {
    if (current === data.length - 1) {
        current = 0;
        Arr[current].style.fontSize ='18px'
        firstCircleThree.style.fontSize ='14px'



    }

    else {
        current += 1
        Arr[current].style.fontSize ='18px'
        Arr[current -1].style.fontSize ='14px'


    }
    textInfo.textContent = data[current].title
    imgInfo.innerHTML = data[current].photo

})

firstCircle.style.fontSize = '18px'

// let currentTwo = 0
//
// nextButton.addEventListener('click', ()=> {
//     if (data[1]){
//         firstCircleTwo.style.fontSize = '23px'
//         firstCircle.style.fontSize = '14px'
//         console.log('one')
//
//
//     }  else if (data[2]){
//         firstCircleThree.style.fontSize = '23px'
//         firstCircleTwo.style.fontSize = '14px'
//         firstCircle.style.fontSize = '14px'
//         console.log('two')
//
//     }
// })

// function test () {
//     for (let i = 0; i < data.length; i++) {
//         if (i === data.length-2) {
//             nextButton.addEventListener('click', () => {
//                 console.log('one')
//             })
//         }
//         else if (i === data.length-1) {
//             nextButton.addEventListener('click', () => {
//                 console.log('two')
//             })
//         }
//     }
// }
// test()
// console.log(data.length-2)




// function createModal(options) {
//     const modal = document.createElement('div')
//     modal.classList.add('emodal')
//     modal.insertAdjacentHTML("beforeend", `
// <div class="dogs_modal">
//     <div class="dogs_modal_wrapper">
//                 <div class="dogs_img">
//                     <i class="fa-solid fa-xmark"></i>
//                     <img class="siba_modal" src="img/siba_absolut.jpg" alt="">
//                 </div>
//                 <div class="dogs_p">
//                     <p>Сиба — преданная, бдительная и внимательная собака, в поведении которой чередуются периоды спокойствия и повышенной активности. Они независимы, но тем не менее из них получаются хорошие семейные собаки.</p>
//                 </div>
//             </div>
// </div>`)
//     document.body.appendChild(modal)
//     return modal
// }
//
//
// mainPhotoSiba.addEventListener('click', () => {
//   modal.open()
// })
//
// const my = {}
//
//
// my.modal = function (options){
//     const modalOpen = createModal(options)
//
//     return{
//         open() {
//             modalOpen.classList.add('open')
//         },
//         close() {
//             modalOpen.classList.remove('open')
//         }
//     }
// }
// const modal = my.modal()

const mainPhotoSiba = document.querySelector('.main_info_wrapper_photo_siba')


const modalCross = document.querySelector('.fa-xmark')
const emodal = document.querySelector('.emodal')
const dogsModal = document.querySelector('.dogs_modal')
const mainPhotoAkita = document.querySelector('.akita_modal')
const mainPhotoBulli = document.querySelector('.bulli_modal')
const crosssId = document.getElementById('crossId')


function modalNew(img, p) {
    emodal.innerHTML = `<div class="dogs_modal" data-close = 'true'>

                <div class="dogs_modal_wrapper" >
                    <div class="dogs_img">
                       <i id="crossId" class="fa-solid fa-xmark" data-close ='true'></i>
                        ${img}
                    </div>
                    <div class="dogs_p">
                        ${p}
                    </div>
                </div>

            </div>`

}


const modalObj = [
    {
        imgClick: mainPhotoSiba,
        img: '<img class="siba_modal" src="img/siba_absolut.jpg" alt="">',
        p: '<p>Сиба — преданная, бдительная и внимательная собака, в поведении которой чередуются периоды спокойствия и повышенной активности. Они независимы, но тем не менее из них получаются хорошие семейные собаки.</p>'
    },
    {
        imgClick: mainPhotoAkita,
        img: '<img class="siba_modal" src="img/4-4.jpg" alt="">',
        p: '<p>Акита-ину разводили для охоты, защиты и выпаса стад. За свою долгую историю эта порода использовалась как охотничья (на медведя и кабана).</p>'
    },
    {
        imgClick:mainPhotoBulli,
        img: '<img class="siba_modal" src="img/amerikanskij-bulli-1-960x540.jpg" alt="">',
        p: '<p>Американский булли – бодибилдер в мире собак. При взгляде на этого приземистого крепыша с оскалом хищника, с трудом верится в дружелюбие и кроткий нрав животного.</p>'
    }
]

// modalObj[i].img
//
// function letsGo(img, num) {
//     img.addEventListener('click', () => {
//         modalNew(modalObj[num].img, modalObj[num].p)
//         emodal.classList.remove('destroy_modal')
//     })
// }
//
// letsGo(mainPhotoSiba, 0)
// letsGo(mainPhotoAkita, 1)
// letsGo(mainPhotoBulli, 2)

emodal.addEventListener('click', event => {
    if (event.target.dataset.close) {
        emodal.classList.add('destroy_modal')
    }
})


const rightFun = () =>{

    for (let i = 0; i < modalObj.length; i++){
        modalObj[i].imgClick.addEventListener('click', ()=> {
            modalNew(modalObj[i].img, modalObj[i].p)
            emodal.classList.remove('destroy_modal')
        })

    }

}
rightFun()


// crosssId.addEventListener("click", ()=>{
//     console.log('asdasdas')
// })
// console.log(crosssId)

// modalNew(modalObj[0].img, modalObj[0].p, ()=>{
//     console.log('sadasd')
// })







