const logIn = document.querySelector('#log-in');
const containerLogin = document.querySelector('.container-login');
const containerIndex = document.querySelector('.container-index');
const btnElement = document.querySelector('#btn');
const inputUsername = document.querySelector('#username');
const inputPassword = document.querySelector('#password');
const infoLg = document.querySelector('.info-lg');

logIn.onclick = () => {
    containerLogin.classList.add('active-login');
    containerIndex.style.display = 'none';
}

btnElement.onclick = () => {
    users.map(function check(user) {
        if (user.username == inputUsername.value && user.password == inputPassword.value) {
            infoLg.innerHTML = `
                <p>${user.fullname}</p>
            `;
            containerLogin.classList.remove('active-login');
            containerIndex.style.display = 'block';
            alert("Đăng nhập thành công")
        }
    });
}