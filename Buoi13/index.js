let buttonMode = document.querySelector('.mode');
let body = document.querySelector('.body');

// Lấy dữ liệu từ localStorage
let mode = localStorage.getItem("mode");

// So sánh giá trị
if(mode == "dark"){
    // Thêm class dark vào body
    body.classList.add("dark");
    // Thay đổi giá trị của buttonMode
    buttonMode.innerHTML = "Light Mode";
}else{
    // Xóa class dark từ body
    body.classList.remove("dark");
    // Thay đổi giá trị của buttonMode
    buttonMode.innerHTML = "Dark Mode";
}

/// Listening event
buttonMode.addEventListener("click", function(e){

    // Lấy dữ liệu từ localStorage
    let mode = localStorage.getItem("mode");

    // So sánh giá trị
    if(mode == "dark"){
        // Chuyển sang light mode
        e.target.innerHTML = "Dark Mode";
        body.classList.remove("dark");
        // Lưu giá trị vào localStorage
        localStorage.setItem("mode", "light");
    }else{
        // Chuyển sang dark mode
        e.target.innerHTML = "Light Mode";
        body.classList.add("dark");
        // Lưu giá trị vào localStorage
        localStorage.setItem("mode", "dark");
    }
});