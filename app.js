// O'zgaruvchilarni e'lon qilish
let count = 0;

// Elementlarni tanlab olish
const counterDisplay = document.getElementById('counter');
const statusMsg = document.getElementById('status-msg');
const addBtn = document.getElementById('add-btn');
const minusBtn = document.getElementById('minus-btn');
const resetBtn = document.getElementById('reset-btn');

// Ekranni yangilash funksiyasi
function updateDisplay() {
    counterDisplay.textContent = count;
}

// 1. Qo'shish funksiyasi
addBtn.addEventListener('click', () => {
    count++;
    updateDisplay();
});

// 2. Kamaytirish funksiyasi
minusBtn.addEventListener('click', () => {
    if (count > 0) {
        count--;
        updateDisplay();
    } else {
        statusMsg.textContent = "Hisob 0 dan kamaymaydi!";
        // Xabarni 2 sekunddan keyin o'chirish
        setTimeout(() => { 
            statusMsg.textContent = ""; 
        }, 2000);
    }
});

// 3. Reset (Nolga tushirish) funksiyasi
resetBtn.addEventListener('click', () => {
    const check = confirm("Hisobni o'chirib tashlamoqchimisiz?");
    if (check) {
        count = 0;
        updateDisplay();
        statusMsg.textContent = "Tozalandi";
        setTimeout(() => { statusMsg.textContent = ""; }, 1500);
    }
});