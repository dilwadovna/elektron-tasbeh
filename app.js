// O'zgaruvchini e'lon qilish
let count = 0;

// Sahifa yuklanganda avtomatik Load qilish
window.onload = function() {
    loadCount();
};

// Ekranda ko'rsatish va AVTOMATIK SAQLASH
function updateCount() {
    document.getElementById("count").innerHTML = count;
    // Har safar o'zgarganda localStorage-ga saqlaydi (Auto-save)
    localStorage.setItem("count", count);
}

// Oshirish funksiyasi
function increaseCount() {
    count++;
    updateCount();
}

// Kamaytirish funksiyasi (0 dan pastga tushmaydi)
function decreaseCount() {
    if (count > 0) {
        count--;
        updateCount();
    } else {
    }
}

// Tozalash (Reset)
function resetCount() {
    if (confirm("Rostdan ham nollamoqchimisiz?")) {
        count = 0;
        updateCount();
    }
}

// Qo'lda saqlash (Ixtiyoriy)
function saveCount() {
    localStorage.setItem("count", count);
    alert("Saqlandi: " + count);
}

// Yuklash funksiyasi
function loadCount() {
    let saved = localStorage.getItem("count");
    if (saved !== null) {
        count = Number(saved);
        updateCount();
    }
}