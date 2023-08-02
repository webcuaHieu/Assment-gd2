// check input

var itemName = document.querySelector("#name");
var itemPassword = document.querySelector("#password");
var itemEmail = document.querySelector("#email")
var itemRepassword = document.querySelector("#re-password");
var nameError = document.querySelector("#error-name")
var passwordError = document.querySelector("#error-password")
var emailError = document.querySelector("#error-eamil")
var repasswordError = document.querySelector("#error-re-password")
var form = document.querySelector("form")
var sele = document.querySelector("#tinhtrang")
    var seleEror = document.querySelector("#error-select")


function isEmpty(obj) {
    for (const key in obj) {
        if (obj.hasOwnProperty(key)) {
            return false
        }
    }
    return true
}

function checkError(element, message) {
    if (element.value.trim() === "") {
        return message
    }
    // Add additional checks for other input validation cases
    if (element.id === "re-password" && element.value !== itemPassword.value) {
        return "Password không giống nhập lại !"
    }
}

form.addEventListener("submit", function (e) {
    e.preventDefault();
    var errors = {};
    errors.name = checkError(itemName, "Vui lòng nhập tên !")
    errors.password = checkError(itemPassword, "Vui lòng nhập password !")
    errors.email = checkError(itemEmail, "Vui lòng nhập email !")
    errors.re_password = checkError(itemRepassword, "Vui lòng nhập lại password !")
    nameError.innerHTML = errors.name ? errors.name : "";
    passwordError.innerHTML = errors.password ? errors.password : ""
    emailError.innerHTML = errors.email ? errors.email : ""
    repasswordError.innerHTML = errors.re_password ? errors.re_password : ""
    if (isEmpty(errors)) {
        add();
        form.reset();
    } else {
        document.querySelector("#render").innerHTML = "";
    }

})


// rebder out table

var data = [];


function add() {
    var itemname = document.getElementById("name").value;
    var itempassword = document.getElementById("password").value;
    var itememail = document.getElementById("email").value;
    var itemtinhtrang = document.getElementById("tinhtrang").value;
    var item = {
        name: itemname,
        password: itempassword,
        email: itememail,
        tinhtrang: itemtinhtrang,
    };

    data.push(item);
    render(data);
}

function render(data) {
    var table = "";
    for (let i = 0; i < data.length; i++) {
        table += `
        <tr>
            <td>${data[i].name}</td>
            <td>${data[i].password}</td>
            <td>${data[i].email}</td>
            <td>${data[i].tinhtrang}</td>
            <td><button onclick="deleteItem(${i})">Xóa</button></td>
        </tr>
        `;
    }
    document.getElementById("render").innerHTML = table;
}

function deleteItem(index) {
    data.splice(index, 1);
    render(data);
}

// check select
function checkSelect() {
    var sele = document.querySelector("#tinhtrang")
    var seleEror = document.querySelector("#error-select")

    if (sele.value === "0") {
        seleEror.innerHTML = "Vui lòng chọn tình trạng";
    } else {
        seleEror.innerHTML = "";
    }
}


