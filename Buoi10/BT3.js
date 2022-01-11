// Setup
const contacts = [{
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
    for (let i = 0; i < contacts.length; i++) {
        const contact = contacts[i];

        // So sánh contact firstName có giống với name hay không?
        if (contact.firstName == name) {
            // Xem thuộc tính prop có nằm trong contact hay không ?
            // Kiểm tra sự tồn tại của prop trong contact
            // undefined : chưa định nghĩa - không tồn tại
            if (contact[prop] != undefined) {
                return contact[prop];
            } else {
                return "Không có thuộc tính trên";
            }
        }

    }
    // Trả về không tồn tại sau khi chạy xong vòng for
    // --> Không có dữ liệu nào trùng với name
    return "Không tồn tại thông tin trên";
}


/// Cách 2
// function lookUpProfile(name, prop) {
//     for (let x = 0; x < contacts.length; x++) {
//       if (contacts[x].firstName === name) {
//         if (contacts[x].hasOwnProperty(prop)) {
//           return contacts[x][prop];
//         } else {
//           return "Không có thuộc tính trên ";
//         }
//       }
//     }
//     return "Không tồn tại thông tin trên";
// }

/// Cách 3
// function lookUpProfile(name, prop) {
//     for (let i = 0; i < contacts.length; i++) {
//       if (contacts[i].firstName === name) {
//         if (prop in contacts[i]) {
//           return contacts[i][prop];
//         } else {
//           return "Không có thuộc tính trên ";
//         }
//       }
//     }
//     return "Không tồn tại thông tin trên";
// }


lookUpProfile("Van", "likes");


console.log(lookUpProfile("Tong", "lastName"));
console.log(lookUpProfile("Trong", "likes"));
console.log(lookUpProfile("Yen", "number"));
console.log(lookUpProfile("Son", "address"));