/* Задания на урок:

---1) Удалить все рекламные блоки со страницы (правая часть сайта)

---2) Изменить жанр фильма, поменять "комедия" на "драма"

3) Изменить задний фон постера с фильмом на изображение "bg.jpg". Оно лежит в папке img.
Реализовать только при помощи JS

---4) Список фильмов на странице сформировать на основании данных из этого JS файла.
--- Отсортировать их по алфавиту 

---5) Добавить нумерацию выведенных фильмов */

'use strict';

const movieDB = {
    movies: [
        "Логан",
        "Лига справедливости",
        "Ла-ла лэнд",
        "Одержимость",
        "Скотт Пилигрим против..."
    ]
};

let {movies} = movieDB;
movies.sort(sortArr);

function sortArr(a,b){
    return a-b;
}

let counter = 0;
let index = 1;
for(let key of movieDB.movies){
       if(key){ 
        document.getElementsByClassName('promo__interactive-item')[counter].innerHTML= `${index} - ${key}`;
        }
         counter++;
         index++;
}

const promoAdv = document.getElementsByClassName('promo__adv');
promoAdv[0].remove();

const ganreFilma = document.getElementsByClassName("promo__genre");
ganreFilma[0].innerHTML = "Drama";

const bg = document.getElementsByClassName('promo__bg');
bg[0].style.background = 'url("../img/bg.jpg")';

