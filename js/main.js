// Active
const activeNavItem = document.querySelectorAll(".nav_item");
activeNavItem.forEach((tab) => {
  tab.addEventListener("click", function () {
    activeNavItem.forEach((tab) => tab.classList.remove("active"));
    this.classList.add("active");
  });
});

// scroll header
const header = document.querySelector("header");
window.addEventListener("scroll", function () {
  header.classList.toggle("sticky", window.scrollY > 0);
});

// fetch data
function getListTeachers() {
  axios({
    url: "https://625569238646add390d66a6b.mockapi.io/api/teachers",
    method: "GET",
  })
    .then(function (result) {
      //   console.log(result.data);
      renderHTML(result.data);
    })
    .catch(function (error) {
      console.log(error);
    });
}

getListTeachers();

// render teacher list
function renderHTML(arr) {
  let content = "";
  for (let i = 0; i < arr.length; i++) {
    var teacher = arr[i];
    content += `
            <div class="col-12 col-md-6 col-lg-3 item wow animate__animated animate__fadeInLeft">
                <div class="card">
                <div class="img_item">
                    <img
                    class="card-img-top"
                    src="./img/${teacher.hinhAnh}"
                    alt="Card image"
                    />
                </div>
                <div class="card-body">
                    <h5>${teacher.ngonNgu}</h5>
                    <h4 class="card-title">${teacher.hoTen}</h4>
                    <p class="card-text">
                        ${teacher.moTa}
                    </p>
                </div>
                </div>
            </div>
        `;
  }
  document.getElementById("teacherList").innerHTML = content;
}
