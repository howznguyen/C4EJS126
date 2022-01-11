2. **Bài tập 3: Hoàn thành function lookupProfile để kết quả trả về được những use cases sau**
    - `lookUpProfile("Tong", "lastName")` nên trả về string `Vo`
    - `lookUpProfile("Trong", "likes")` nên trả về array `["Beer", "King Crab"]`
    - `lookUpProfile("Yen", "number")` nên trả về `Không tồn tại thông tin trên` bởi vì Yen không có trong Object contacts
    - `lookUpProfile("Son", "address")` nên trả về `Không có thuộc tính trên`
    
    Gợi ý:
    
    - Sử dụng vòng lặp for để duyệt contacts list.
    - Sử dụng nested if để check firstname và sau đó là check prop.
    - Trả về giá trị “Không tồn tại thông tin trên” bên ngoài vòng lặp.

```jsx
// Setup
const contacts = [
  {
    firstName: "Van",
    lastName: "Nguyen",
    number: "0543236543",
    likes: ["Pizza", "Coding", "Pho"],
  },
  {
    firstName: "Son",
    lastName: "Trinh",
    number: "0994372684",
    likes: ["Cheese", "Donut", "Apple"],
  },
  {
    firstName: "Trong",
    lastName: "Le",
    number: "0487345643",
    likes: ["Beer", "King Crab"],
  },
  {
    firstName: "Tong",
    lastName: "Vo",
    number: "unknown",
    likes: ["Tiger", "Sword", "Wine"],
  },
];

function lookUpProfile(name, prop) {
  // Chỉ code phía dưới này

  // Chỉ code phía trên này
}

lookUpProfile("Van", "likes");
```