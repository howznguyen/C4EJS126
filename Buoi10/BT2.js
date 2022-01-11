// BT: Tạo một object về thông tin một nghệ sĩ tiêu biểu với các thuộc tính bao gồm:
//  tên, tuổi, giới tính, lĩnh vực, sở thích (nhiều sở thích sử dụng mảng).
// → truy cập các properties trong object vừa tạo
// → Tạo một array mới và thêm object vừa tạo vào array đó.

let idol = {
    ten: "Son Tung MTP",
    tuoi: 30,
    gioitinh: "nam",
    linhvuc: "Am Nhac",
    sothich: [
        "Mua Sam",
        "Nghe Nhac"
    ],
}

console.log(idol.ten);
console.log(idol.tuoi);

let idols = [];
idols.push(idol);

console.log(idols);