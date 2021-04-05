import "./scss/index.scss";
import cookiesSrvice from "./cookies.srvice";

let accepted = [];

async function setCookie(name, value, options = {}) {
  var background = document.querySelector(".bg_popup");
  var popup = document.querySelector(".popup");
  var body = document.querySelector("body");
  var list = [];

  const cookieValue = document.cookie
    ? document.cookie
        .split("; ")
        .find((row) => row.startsWith("ACCEPTEDCOOKIES="))
        .split("=")[0]
    : null;

  if (!cookieValue) {
  options = {
    path: "/",
    ...options,
  };

  if (options.expires instanceof Date) {
    options.expires = options.expires.toUTCString();
  }

  let updatedCookie =
    encodeURIComponent(name) + "=" + encodeURIComponent(value);

  document.cookie = updatedCookie;

  const cookiesDetailsRequestsList = [];

  cookiesSrvice.getList().then(
    (val) => {
      var str = "<ul>";

      const els = Object.values(val.data.vendors);

      els.forEach(
        (el) =>
          (str +=
            "<li class='hello'>" +
            el.name +
            '<a class="btn" href="' +
            el.policyUrl +
            '">More info</a>' +
            '<input type="checkbox" class="checkbox">' +
            "<li>")
      );
      str += "<ul>";

      document.querySelector(".popup_vendors").innerHTML = str;
    },

    // document
    //   .getElementById("Button_Accept")
    //   .addEventListener("click", function (e) {
    //     var checks = document.querySelectorAll("input[type=checkbox]:checked");
    //   }),

    background.classList.add("show"),
    popup.classList.add("show"),
    body.classList.add("show")

    
  );
    }}

window.addEventListener("DOMContentLoaded", async () => {
  await setCookie("ACCEPTEDCOOKIES", "John", { "max-age": 86400 });

  const checkbox = document.querySelector(".checkbox");
  checkbox.setAttribute("data-id", "vendorId");

  document.querySelectorAll(".hello").appendChild(checkboxCreated);

  checkbox.addEventListener("change", () => {
    const currentId = checkboxCreated.getAttribute("data-id");

    const found = accepted.find((x) => x === currentId);

    if (found) {
      accepted = accepted.filter((x) => x !== currentId);
    } else {
      accepted.push(currentId);
    }
  });
});
