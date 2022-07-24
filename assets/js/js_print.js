const infoLg = document.querySelector(".info-lg");
const idLogin = Number(window.localStorage.getItem("id"));

// thay đổi tên đăng nhập
infoLg.innerHTML = `<a href="./index.html"><p>${users[idLogin].fullname}</p></a>`;

// Xóa localStorage khi đăng xuất
infoLg.onclick = () => {
  localStorage.removeItem("id");
};
