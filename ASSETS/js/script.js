function toggleAlerta() {
    document.getElementById('unaAlerta').classList.toggle('d-none');
}

function ocultarAlerta() {
    document.getElementById('unaAlerta').classList.add('d-none');
}

function irArriba() {
    window.scrollTo({ top: 0, behavior: 'smooth' });
}

window.addEventListener('scroll', function () {
    const btn = document.getElementById('btnArriba');
    if (window.scrollY > 300) {
        btn.style.display = 'block';
    } else {
        btn.style.display = 'none';
    }
});
