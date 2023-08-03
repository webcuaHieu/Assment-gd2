// check input

var itemName = document.querySelector("#name");
var itemPassword = document.querySelector("#password");
var itemEmail = document.querySelector("#email");
var itemRepassword = document.querySelector("#re-password");
var nameError = document.querySelector("#error-name");
var passwordError = document.querySelector("#error-password");
var emailError = document.querySelector("#error-eamil");
var repasswordError = document.querySelector("#error-re-password");
var form = document.querySelector("form");
var sele = document.querySelector("#tinhtrang");
var seleEror = document.querySelector("#error-select");

function isUndefined(obj) {
    let check = true;
    for (const key in obj) {
        if (obj[key] !== undefined) {
            check = false;
        }
    }
    console.log(check);
    return check;
}

function checkError(element, message) {
    if (element.value.trim() === "") {
        return message;
    }
    // Add additional checks for other input validation cases
    if (element.id === "re-password" && element.value !== itemPassword.value) {
        return "Password không giống nhập lại !";
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var errors = {};
    errors.name = checkError(itemName, "Vui lòng nhập tên !");
    errors.password = checkError(itemPassword, "Vui lòng nhập password !");
    errors.email = checkError(itemEmail, "Vui lòng nhập email !");
    errors.re_password = checkError(itemRepassword, "Vui lòng nhập lại password !");
    nameError.innerHTML = errors.name ? errors.name : "";
    passwordError.innerHTML = errors.password ? errors.password : "";
    emailError.innerHTML = errors.email ? errors.email : "";
    repasswordError.innerHTML = errors.re_password ? errors.re_password : "";
    if (isUndefined(errors)) {
        add();
        form.reset();
    }
});

// rebder out table

var data = [];

function add() {
    var name = document.getElementById("name").value;
    var password = document.getElementById("password").value;
    var email = document.getElementById("email").value;
    var tinhtrang = document.getElementById("tinhtrang").value;
    var item = {
        name,
        password,
        email,
        tinhtrang,
    };

    var inputs = [name, password, email, tinhtrang];

    var isEmpty = false;
    for (const input of inputs) {
        if (input == "") {
            isEmpty = true;
        }
    }

    if (!isEmpty) {
        data.push(item);
        render();
    }
}

function render() {
    const html = data.map(
        (d, i) =>
            `<tr>
        <td>${d.name}</td>
        <td>${d.password}</td>
        <td>${d.email}</td>
        <td>${d.tinhtrang}</td>
        <td><button onclick="deleteItem(${i})">Xóa</button></td>
    </tr>
    `
    );
    const tbody = document.querySelector("#render");
    tbody.innerHTML = html.join("");
}

function deleteItem(index) {
    data.splice(index, 1);
    render();
}

// check select
function checkSelect() {
    var sele = document.querySelector("#tinhtrang");
    var seleEror = document.querySelector("#error-select");

    if (sele.value === "0") {
        seleEror.innerHTML = "Vui lòng chọn tình trạng";
    } else {
        seleEror.innerHTML = "";
    }
}
