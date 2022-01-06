# Loop

- for (hành động lặp lại biết trước số lần lặp)
- while / do while (hành động lặp nhưng không biết trước số lần lặp)

## Bài Tập Thực Hành Buổi 8

### Comparison Operators

1. Tạo 2 biến là `a` và `b`, gán **10** cho a và **15** cho b. Kiểm tra xem nếu a lớn hơn b thì console trả về gì?
2. Kiểm tra a có bằng giá trị **“10”** hay không và trả về cửa sổ console kết quả.
3. Kiểm tra lại a có bằng giá trị **“10”** hay không, so sánh cả kiểu dữ liệu.
4. Cho `x` bằng **“5”** và `y` bằng **6**, so sánh giá trị **`x !== y`** và cho ra kết quả

## Bài Tập Về Nhà Buổi 8

### Coersion - Truthy & Falsy

1. Cho đoạn code sau, chạy trên Console của Chrome, em có nhận xét gì về giá trị của b và c? Từ đó rút ra coercion là gì?

```jsx
var a = 10;
var b = Number(a);
var c = a * 1;

a;
b;
c;
```

2.Khi một giá trị không phải boolean cần chuyển sang boolean gì chuyện gì xảy ra? v/d dưới sẽ log ra như nào?

```jsx
var a = 10;
var b = '';

if (a) {
    console.log('a is truthy');
}

if (b) {
    console.log('b is truthy');
}
```

### Logical Operators & Conditional**

1.Kết quả trả về true hay false?

```jsx
let a = "mindX";
let b = '';

if (a || b) {
    console.log("hello")
}
```

2.Kết quả trả về true hay false?

```jsx
let a = "mindX";
let b = '';

if (a && true && !b) {
    console.log("hello")
}
```

3.Tạo a = -1 và b = 1, tạo một câu điều kiện if sử dụng toán tử logic && để kết quả trả về true.

4.Tạo biến number, cho phép người dùng nhập number bằng lệnh prompt(). Viết chương trình kiểm tra xem liệu số người dùng nhập chia cho 3 có phải là số dư hay không. Nếu là số dư thì trả về console kết quả là **number không chia hết cho 3 và dư ...,** nếu chia hết thì trả về kết quả phép tính.

### Tạo máy tính cơ bản với các chức năng: +, -, * và /.

- Sử dụng prompt để nhập phép tính
- Sử dụng prompt để nhập 2 số cần tính.
- Tạo biến result để lưu lại kết quả mỗi phép tính
- Sử dụng 2 cách khác nhau (if...else và switch)
- Giới thiệu về **parseInt** và **parseFloat**
- Code mẫu

```jsx
// máy tính cơ bản

// phép tinh
const operator = prompt('Enter operator ( either +, -, * or / ): ');

// nhập đầu vào 2 số

let result;

// using if...else if... else or switch

// display the result
console.log(`${number1} ${operator} ${number2} = ${result}`);
```

### Viết chương trình tìm số nguyên tố

- Kiến thức về if...else
- Kiến thức về for loop
- Kiến thức về toán tử so sánh
- Code mẫu

```jsx
// chương trình tìm số nguyên tố

// nhập số cần nhập
const number = parseInt(prompt("Enter a positive number: "));
let isPrime = true;

// check if number is equal to 1

// check if number is greater than 1

// check if number is less than 1

```