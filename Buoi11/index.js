// /**
//  * Lấy dữ liệu nằm trong thẻ có id là "heading1"
//  * B1. Tìm kiếm thẻ có id = "heading1"
//  * - Dùng DOM
//  * + document.getElementByID() - 100%
//  * + document.querySelector() - 0%
//  * B2. Lấy dữ liệu trong thẻ
//  * - Sử dụng hàm innerHTML
//  * - Sử dụng hàm innerText
//  */
// let heading1 = document.getElementById("heading1");
// console.log(heading1.innerHTML);
// console.log(heading1.innerText);

// /**
//  * Làm sao để lấy dữ liệu thẻ h2 có id = "heading1"
//  * - sử dụng document.querySelector()
//  */
// let heading2 = document.querySelector("h2#heading1");
// console.log(heading2.innerHTML);

// /**
//  * Lấy dữ liệu từ input và set giá trị vào #heading1
//  */
// // let value = document.querySelector("#input").value;
// let input = document.querySelector("#input");

// let setvalue = document.querySelector("#setvalue");

// setvalue.onclick =  () => { // function () {

//     // console.log(input.value);
//     heading1.innerHTML = input.value;
// }
// /**
//  * Thay đổi màu #heading1 bằng cách nhập vào #input-color
//  * và nhấn #setvaluecolor
//  */
// let inputColor = document.querySelector("#input-color");
// let btnColor = document.querySelector("#setvaluecolor");

// btnColor.onclick = () => {
//     heading1.style.color = inputColor.value;
// }

/**
 * Tạo một todolist bằng cách sử dụng appendChild
 * appendChild
 * removeChild
 */
// Khởi tạo DOM
let input = document.querySelector("#input");
let btnAdd = document.querySelector("#btn-add");
let toDo = document.querySelector("#todo");

// Tạo phương thức onclick để bắt sự kiện
btnAdd.onclick = () => {
    let value = input.value;
    // Tạo Element với thẻ là li và truyền dữ liệu vào element
    let listItem = document.createElement("li");
    listItem.innerHTML = value;
    // Thêm element mới vào todo.
    toDo.appendChild(listItem);
}