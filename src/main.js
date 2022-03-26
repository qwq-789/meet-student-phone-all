import "./style.css";

//選單
var burgerButton = document.getElementById("bb");
var burger = document.getElementById("burger");
burgerButton.addEventListener("click", function () {
  burger.classList.toggle("-translate-y-72");
  burger.classList.toggle("translate-y-10");
  burger.classList.toggle("fixed");
});

document.onclick = function (e) {
  if (e.target.id !== "nav" && e.target.id !== "bb" && e.target.id !== "word" && e.target.id !== "burger" && e.target.id !== "list-a" && e.target.id !== "list-b" && e.target.id !== "list-c" && e.target.id !== "list-d" && e.target.id !== "list-f" && e.target.id !== "list-g" && e.target.id !== "list-h") {
    burger.classList.remove("translate-y-10");
    burger.classList.remove("fixed");
    burger.classList.add("-translate-y-72");
  }
};
// var list_a = document.getElementById("list-a");
// var list_b = document.getElementById("list-b");
// var list_c = document.getElementById("list-c");
// var list_d = document.getElementById("list-d");
// var list_f = document.getElementById("list-f");
// var list_g = document.getElementById("list-g");
// var list_h = document.getElementById("list-h");
// list_a.addEventListener("click", function () {
//   burger.classList.toggle("-translate-y-72");
//   burger.classList.toggle("translate-y-10");
//   burger.classList.toggle("fixed");
// });
// list_b.addEventListener("click", function () {
//   burger.classList.toggle("-translate-y-72");
//   burger.classList.toggle("translate-y-10");
//   burger.classList.toggle("fixed");
// });
// list_c.addEventListener("click", function () {
//   burger.classList.toggle("-translate-y-72");
//   burger.classList.toggle("translate-y-10");
//   burger.classList.toggle("fixed");
// });
// list_d.addEventListener("click", function () {
//   burger.classList.toggle("-translate-y-72");
//   burger.classList.toggle("translate-y-10");
//   burger.classList.toggle("fixed");
// });
// list_f.addEventListener("click", function () {
//   burger.classList.toggle("-translate-y-72");
//   burger.classList.toggle("translate-y-10");
//   burger.classList.toggle("fixed");
// });
// list_g.addEventListener("click", function () {
//   burger.classList.toggle("-translate-y-72");
//   burger.classList.toggle("translate-y-10");
//   burger.classList.toggle("fixed");
// });
// list_h.addEventListener("click", function () {
//   burger.classList.toggle("-translate-y-72");
//   burger.classList.toggle("translate-y-10");
//   burger.classList.toggle("fixed");
// });

//信件燈箱
var letter = document.getElementById("letter");
var jumpout = document.getElementById("jumpout");
letter.addEventListener("click", function () {
  jumpout.classList.toggle("hidden");
});
jumpout.addEventListener("click", function () {
  jumpout.classList.toggle("hidden");
});

//箭頭燈箱+旋轉特效
var arrow1 = document.getElementById("arrow-1");
var club1 = document.getElementById("club-1");
var arrow2 = document.getElementById("arrow-2");
var club2 = document.getElementById("club-2");
var arrow3 = document.getElementById("arrow-3");
var club3 = document.getElementById("club-3");
arrow1.addEventListener("click", function () {
  if (club1.style.display == "none") {
    club1.style.display = "block";
    club2.style.display = "none";
    club3.style.display = "none";
    arrow2.style.transform = "rotate(0deg)";
    arrow3.style.transform = "rotate(0deg)";
    arrow1.style.transform = "rotate(180deg)";
  } else {
    club1.style.display = "none";
    club2.style.display = "none";
    club3.style.display = "none";
    arrow1.style.transform = "rotate(0deg)";
    arrow2.style.transform = "rotate(0deg)";
    arrow3.style.transform = "rotate(0deg)";
  }
});
arrow2.addEventListener("click", function () {
  if (club2.style.display == "none") {
    club2.style.display = "block";
    club1.style.display = "none";
    club3.style.display = "none";
    arrow1.style.transform = "rotate(0deg)";
    arrow3.style.transform = "rotate(0deg)";
    arrow2.style.transform = "rotate(180deg)";
  } else {
    club1.style.display = "none";
    club2.style.display = "none";
    club3.style.display = "none";
    arrow1.style.transform = "rotate(0deg)";
    arrow2.style.transform = "rotate(0deg)";
    arrow3.style.transform = "rotate(0deg)";
  }
});
arrow3.addEventListener("click", function () {
  if (club3.style.display == "none") {
    club3.style.display = "block";
    club1.style.display = "none";
    club2.style.display = "none";
    arrow1.style.transform = "rotate(0deg)";
    arrow2.style.transform = "rotate(0deg)";
    arrow3.style.transform = "rotate(180deg)";
  } else {
    club1.style.display = "none";
    club2.style.display = "none";
    club3.style.display = "none";
    arrow1.style.transform = "rotate(0deg)";
    arrow2.style.transform = "rotate(0deg)";
    arrow3.style.transform = "rotate(0deg)";
  }
});

//白_js
var more = document.getElementById("more");
var moremi = document.getElementById("moremi");
var less = document.getElementById("less");
more.addEventListener("click", function () {
  // more.style.display = "none";
  // moremi.style.display = "block";
  more.classList.add("hidden");
  moremi.classList.remove("hidden");
});
less.addEventListener("click", function () {
  // less.style.display = "none";
  // moremi.style.display = "none";
  // more.style.display = "block";
  moremi.classList.add("hidden");
  more.classList.remove("hidden");
});
//專題用燈箱
var more_1 = document.getElementById("more-1");
var jumpout_1 = document.getElementById("jumpout-1");
more_1.addEventListener("click", function () {
  jumpout_1.classList.toggle("hidden");
});
jumpout_1.addEventListener("click", function () {
  jumpout_1.classList.toggle("hidden");
});
var more_2 = document.getElementById("more-2");
var jumpout_2 = document.getElementById("jumpout-2");
more_2.addEventListener("click", function () {
  jumpout_2.classList.toggle("hidden");
});
jumpout_2.addEventListener("click", function () {
  jumpout_2.classList.toggle("hidden");
});
var more_3 = document.getElementById("experience");
var jumpout_3 = document.getElementById("jumpout-3");
more_3.addEventListener("click", function () {
  jumpout_3.classList.toggle("hidden");
});
jumpout_3.addEventListener("click", function () {
  jumpout_3.classList.toggle("hidden");
});

//張_js
var more1 = document.getElementById("more1");
var moremi1 = document.getElementById("moremi1");
var less1 = document.getElementById("less1");
var more2 = document.getElementById("more2");
var moremi2 = document.getElementById("moremi2");
var less2 = document.getElementById("less2");
var more3 = document.getElementById("more3");
var moremi3 = document.getElementById("moremi3");
var less3 = document.getElementById("less3");
var more4 = document.getElementById("more4");
var moremi4 = document.getElementById("moremi4");
var less4 = document.getElementById("less4");
var more5 = document.getElementById("more5");
var moremi5 = document.getElementById("moremi5");
var less5 = document.getElementById("less5");
var more6 = document.getElementById("more6");
var moremi6 = document.getElementById("moremi6");
var less6 = document.getElementById("less6");
var more7 = document.getElementById("more7");
var moremi7 = document.getElementById("moremi7");
var less7 = document.getElementById("less7");
var more8 = document.getElementById("more8");
var moremi8 = document.getElementById("moremi8");
var less8 = document.getElementById("less8");
var more9 = document.getElementById("more9");
var moremi9 = document.getElementById("moremi9");
var less9 = document.getElementById("less9");
var more10 = document.getElementById("more10");
var moremi10 = document.getElementById("moremi10");
var less10 = document.getElementById("less10");

more1.addEventListener("click", function () {
  more1.classList.add("hidden");
  moremi1.classList.remove("hidden");
  less1.classList.remove("hidden");
});
less1.addEventListener("click", function () {
  moremi1.classList.add("hidden");
  less1.classList.add("hidden");
  more1.classList.remove("hidden");
});
more2.addEventListener("click", function () {
  more2.classList.add("hidden");
  moremi2.classList.remove("hidden");
  less2.classList.remove("hidden");
});
less2.addEventListener("click", function () {
  moremi2.classList.add("hidden");
  less2.classList.add("hidden");
  more2.classList.remove("hidden");
});
more3.addEventListener("click", function () {
  more3.classList.add("hidden");
  moremi3.classList.remove("hidden");
  less3.classList.remove("hidden");
});
less3.addEventListener("click", function () {
  moremi3.classList.add("hidden");
  less3.classList.add("hidden");
  more3.classList.remove("hidden");
});
more4.addEventListener("click", function () {
  more4.classList.add("hidden");
  moremi4.classList.remove("hidden");
  less4.classList.remove("hidden");
});
less4.addEventListener("click", function () {
  moremi4.classList.add("hidden");
  less4.classList.add("hidden");
  more4.classList.remove("hidden");
});
more5.addEventListener("click", function () {
  more5.classList.add("hidden");
  moremi5.classList.remove("hidden");
  less5.classList.remove("hidden");
});
less5.addEventListener("click", function () {
  moremi5.classList.add("hidden");
  less5.classList.add("hidden");
  more5.classList.remove("hidden");
});
more6.addEventListener("click", function () {
  more6.classList.add("hidden");
  moremi6.classList.remove("hidden");
  less6.classList.remove("hidden");
});
less6.addEventListener("click", function () {
  moremi6.classList.add("hidden");
  less6.classList.add("hidden");
  more6.classList.remove("hidden");
});
more7.addEventListener("click", function () {
  more7.classList.add("hidden");
  moremi7.classList.remove("hidden");
  less7.classList.remove("hidden");
});
less7.addEventListener("click", function () {
  moremi7.classList.add("hidden");
  less7.classList.add("hidden");
  more7.classList.remove("hidden");
});
more8.addEventListener("click", function () {
  more8.classList.add("hidden");
  moremi8.classList.remove("hidden");
  less8.classList.remove("hidden");
});
less8.addEventListener("click", function () {
  moremi8.classList.add("hidden");
  less8.classList.add("hidden");
  more8.classList.remove("hidden");
});
more9.addEventListener("click", function () {
  more9.classList.add("hidden");
  moremi9.classList.remove("hidden");
  less9.classList.remove("hidden");
});
less9.addEventListener("click", function () {
  moremi9.classList.add("hidden");
  less9.classList.add("hidden");
  more9.classList.remove("hidden");
});
more10.addEventListener("click", function () {
  more10.classList.add("hidden");
  moremi10.classList.remove("hidden");
  less10.classList.remove("hidden");
});
less10.addEventListener("click", function () {
  moremi10.classList.add("hidden");
  less10.classList.add("hidden");
  more10.classList.remove("hidden");
});
