## LAB

### LAB 2

1. Khi click vào button **Change my life**, nội dung **Tôi nghèo** sẽ chuyển thành **Tôi giàu sau khi học lập trình tại mindX**. Button **Change my life** có `id = change-my-life`
2. Khi người dùng di chuyển chuột vào button **Nope**, background button này chuyển sang màu đỏ (mã hex là #ff0000) và color là trắng (mã hex là #ffffff). Button **Nope** có `id = nope`.
3. Khi người dùng di chuyển chuột rời khỏi button **Nope**, background và color về màu sắc ban đầu. Gợi ý, chỉ cần set background với stirng rỗng “”
4. Khi người dùng click vào button **Nope**, alert sẽ hiển thị với nội dung **Bạn có chắc chắn không muốn thay đổi cuộc dời bạn?**, nếu xác nhận, nội dung button sẽ chuyển thành **Tôi rất tiếc**.

```html
<!DOCTYPE html>
<html>
    <head>
        <title>Thay đổi cuộc đời</title>
        <link rel="stylesheet" type="text/css" href="style.css"/>
        <script src = "script.js"></script>
    </head>
    <body>
        <h1>Flight Simulator</h1>
        <p id="status">The shuttle is on the ground</p>
        <button id = "change-my-life">Change my life</button>
        <button id = "nope">Nope</button>
    </body>
</html>
```

```jsx
function init () {
    const nope= document.getElementById("nope");
    const button = document.getElementById("change-my-life");
    const paragraph = document.getElementById("status");

    // Code ở đây
    
}

window.addEventListener("load", init);
// load Event là 
```

## Bài tập về nhà

BT: Tạo form đăng nhập cơ bản với username và password (tự CSS) và validate form
- validate là việc xác nhận thông tin được nhập vào form chính xác, tuân thủ quy tắc đặt ra (không để trống, email phải đúng cú pháp, mật khẩu phải từ 8 ký tự trở lên)
- sử dụng Event submit

Demo: https://obvious-helix-year.glitch.me/

Keyword: Regex - regular expression -> Validation Email