$(document).ready(function () {
  var currentFloor = 2; //переменная где хранится текущий этаж
  var floorPath = $(".home-image path");// каждый отдельный этаж в свг
  var counterUp = $(".counter-up"); /*кнопка увеличения этажа*/
   var counterDown = $(".counter-down"); /*кнопка уменьшения этажа*/
 //функция наведения мышью на этаж
   floorPath.on("mouseover", function(){
    floorPath.removeClass("current-floor"); //удаляем активный класс у этажей
    currentFloor = $(this).attr("data-floor"); //получаем значение текущего этажа
    $(".counter").text(currentFloor);//записываем значение этажа в счетчик справа
  })

  counterUp.on("click", function(){ //отслеживаем клик по кнопке вверх
    if (currentFloor < 18) { //проверяем значение этажа, оно не должно быть больше 18
      currentFloor++; //прибавляем один этаж
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});//форматирует переменную с этажом, чтобы было 02 а не 2
      $(".counter").text(usCurrentFloor); //записываем значение этажа в счетчик справа
      floorPath.removeClass("current-floor");//удаляем активный класс у этажей
      $(`[data-floor= ${usCurrentFloor}]`).toggleClass("current-floor");//подчвечиваепм нужный этаж
    }
  })
  counterDown.on("click", function(){
    if (currentFloor > 2) {
      currentFloor--;
      usCurrentFloor = currentFloor.toLocaleString('en-US', {minimumIntegerDigits: 2, useGrouping: false});
      $(".counter").text(usCurrentFloor);
      floorPath.removeClass("current-floor");
      $(`[data-floor= ${usCurrentFloor}]`).toggleClass("current-floor");
    }
  })
});