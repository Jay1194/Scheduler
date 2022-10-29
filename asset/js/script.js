
//Live Date
var loc = moment.locale("fr");
         var form = moment().format("LL");
         document.getElementById("time").innerHTML = form;
         

//Save Sessions / Local Storage
var sto1 = document.getElementById("sto1");
var sto2 = document.getElementById("sto2");
var sto3 = document.getElementById("sto3");
var sto4 = document.getElementById("sto4");
var sto5 = document.getElementById("sto5");
var sto6 = document.getElementById("sto6");
var sto7 = document.getElementById("sto7");
var sto8 = document.getElementById("sto8");
var sto9 = document.getElementById("sto9");

if (sessionStorage.getItem("autosave")) {
  sto1.value = sessionStorage.getItem("autosave");
  sto2.value = sessionStorage.getItem("autosave");
  sto3.value = sessionStorage.getItem("autosave");
  sto4.value = sessionStorage.getItem("autosave");
  sto5.value = sessionStorage.getItem("autosave");
  sto6.value = sessionStorage.getItem("autosave");
  sto7.value = sessionStorage.getItem("autosave");
  sto8.value = sessionStorage.getItem("autosave");
  sto9.value = sessionStorage.getItem("autosave");
}
sto1.addEventListener("change", () => {
  sessionStorage.setItem("autosave", sto1.value);
});
sto2.addEventListener("change", () => {
    sessionStorage.setItem("autosave", sto2.value);
  });
  sto3.addEventListener("change", () => {
    sessionStorage.setItem("autosave", sto3.value);
  });
  sto4.addEventListener("change", () => {
    sessionStorage.setItem("autosave", sto4.value);
  });
  sto5.addEventListener("change", () => {
    sessionStorage.setItem("autosave", sto5.value);
  });
  sto6.addEventListener("change", () => {
    sessionStorage.setItem("autosave", sto6.value);
  });
  sto7.addEventListener("change", () => {
    sessionStorage.setItem("autosave", sto7.value);
  });
  sto8.addEventListener("change", () => {
    sessionStorage.setItem("autosave", sto8.value);
  });
  sto9.addEventListener("change", () => {
    sessionStorage.setItem("autosave", sto9.value);
  });