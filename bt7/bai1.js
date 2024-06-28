// Viết hàm giải phương trình bậc nhất ax + b = 0
const equation = (a, b) => {
    if (a === 0) {
        if (b === 0) {
            return 'Phương trình vô số nghiệm'; // a và b đều bằng 0
        } else {
            return 'Phương trình vô nghiệm'; // a bằng 0, b khác 0
        }
    } else {
        const x = -b / a; // Tính nghiệm x
        return `Phương trình có nghiệm x = ${x}`;
    }
};

// Sử dụng hàm để giải phương trình 5x + 8 = 0
const a = 5;
const b = 8;
const result = equation(a, b);
console.log(result); // Kết quả: Phương trình có nghiệm x = -1.6