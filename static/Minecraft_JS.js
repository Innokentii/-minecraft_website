"use strick"

// Функция входа в пользователя
let user_open_id = document.getElementById('user_open_id');
document.addEventListener("DOMContentLoaded", _ => {
    if (user_open_id.innerText == '1') {
        let open_bottom = document.getElementById('open_bottom'); // Блок для входа в регистрацию на сайте
        let open_user = document.getElementById('open_user'); // Блок иконки и имени пользователя
        open_bottom.style.display = 'none';
        open_user.style.display = 'flex';
    };
})

// Функции переключения кнопок "Профиль" и "Безопасность"
function profile_open() {
    let profile_id = document.getElementById('profile_id');
    let safety_id = document.getElementById('safety_id');
    let block_open_2_id = document.getElementById('block_open_2_id');
    let block_open_3_id = document.getElementById('block_open_3_id');
    profile_id.style.color = '#000';
    profile_id.style.background = '#FFF';
    safety_id.style.color = '#FFF';
    safety_id.style.background = '#3A6BF2';
    block_open_2_id.style.display = 'none';
    block_open_3_id.style.display = 'flex';
}

function safety_open() {
    let profile_id = document.getElementById('profile_id');
    let safety_id = document.getElementById('safety_id');
    safety_id.style.color = '#000';
    safety_id.style.background = '#FFF';
    profile_id.style.color = '#FFF';
    profile_id.style.background = '#3A6BF2';
    block_open_2_id.style.display = 'flex';
    block_open_3_id.style.display = 'none';
}
