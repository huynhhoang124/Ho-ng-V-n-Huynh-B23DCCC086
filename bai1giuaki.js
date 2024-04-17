function tinhToan(pheptoan) {
    const a = parseFloat(document.getElementById('inputA').value);
    const b = parseFloat(document.getElementById('inputB').value);

    if (isNaN(a) || isNaN(b)) {
        alert("Vui lòng nhập số!");
        return;
    }

    let result;
    switch (pheptoan) {
        case 'SUM':
            result = a + b;
            break;
        case 'SUBTRACT':
            result = a - b;
            break;
        case 'MULTIPLY':
            result = a * b;
            break;
        case 'DIVIDE':
            if (b === 0) {
                alert("Lỗi chia cho 0!");
                return;
            }
            result = a / b;
            break;
    }

    document.getElementById('result').innerHTML = `Kết quả: ${result}`;
}

function reset() {
    document.getElementById('inputA').value = '';
    document.getElementById('inputB').value = '';
    document.getElementById('result').innerHTML = '';
}
