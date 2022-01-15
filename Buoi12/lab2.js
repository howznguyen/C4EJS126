function init () {
    const nope= document.getElementById("nope");
    const button = document.getElementById("change-my-life");
    const paragraph = document.getElementById("status");

    // Code ở đây

    /*
    Khi click vào button **Change my life**, nội dung **Tôi nghèo** sẽ chuyển thành 
    **Tôi giàu sau khi học lập trình tại mindX**. 
    Button **Change my life** có `id = change-my-life`
    */

    button.addEventListener("click", (e) => {
        paragraph.innerHTML = "Tôi giàu sau khi học lập trình tại mindX";
    });

    /*
    Khi người dùng di chuyển chuột vào button Nope, background button này chuyển sang 
    màu đỏ (mã hex là #ff0000) và color là trắng (mã hex là #ffffff). 
    Button Nope có id = nope.
    */
    nope.addEventListener("mouseover",(e) => {
        e.target.style.color = "#FFF";
        e.target.style.backgroundColor = "#ff0000";
    })

    /*
    Khi người dùng di chuyển chuột rời khỏi button Nope, background và color về màu sắc ban đầu.
    Gợi ý, chỉ cần set background với stirng rỗng “”
    */
    nope.addEventListener("mouseleave",(e) => {
        e.target.style.color = "";
        e.target.style.backgroundColor = "";
    })

    /*
    Khi người dùng click vào button Nope, alert sẽ hiển thị với nội dung Bạn có chắc chắn không muốn thay đổi cuộc dời bạn?, 
    nếu xác nhận, nội dung button sẽ chuyển thành Tôi rất tiếc.
    */

    nope.addEventListener("click",(e) => {
        let result = confirm("Bạn có chắc chắn không muốn thay đổi cuộc dời bạn?");
        if(result){
            e.target.innerHTML = "Tôi rất tiếc";
        }
    })

}

window.addEventListener("load", init);
// load Event là 