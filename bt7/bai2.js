// Viết hàm giải thông tin của tam giác vuông
const solveRightTriangle = (a, b) => {
    const hypotenuse = Math.sqrt(a ** 2 + b ** 2); // Tính cạnh huyền
    const height = b; // Đường cao của tam giác vuông
    const angleA = Math.atan(a / b) * (180 / Math.PI); // Góc A (đơn vị độ)
    const angleB = 90 - angleA; // Góc B (đơn vị độ)

    return {
        hypotenuse,
        height,
        angleA,
        angleB,
    };
};

// Sử dụng hàm để giải tam giác vuông với cạnh a = 3 và cạnh b = 4
const a = 3;
const b = 4;
const result = solveRightTriangle(a, b);
console.log(result);