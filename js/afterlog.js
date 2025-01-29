document.addEventListener("DOMContentLoaded", function () {
    let signupForm = document.getElementById("signform");
    let loginForm = document.getElementById("loginform");
    let navbar = document.getElementById("navbarSupportedContent");
    let signUpLink = document.getElementById("openPopup1");
    let loginLink = document.getElementById("openPopup2");

    // التحقق مما إذا كان المستخدم مسجل الدخول مسبقًا
    let user = JSON.parse(localStorage.getItem("user"));
    if (user) {
        showUserNav(user);
    }

    // تسجيل المستخدم بعد التسجيل
    signupForm?.addEventListener("submit", function (event) {
        event.preventDefault();
        let firstName = document.getElementById("firstname").value;
        let lastName = document.getElementById("lastname").value;
        let fullName = `${firstName} ${lastName}`;

        // تخزين بيانات المستخدم في localStorage
        localStorage.setItem("user", JSON.stringify({ name: fullName }));
        location.reload(); // إعادة تحميل الصفحة لإظهار التغييرات
    });

    // تسجيل الدخول
    loginForm?.addEventListener("submit", function (event) {
        event.preventDefault();
        let email = document.getElementById("logemail").value;

        // تسجيل دخول وهمي
        localStorage.setItem("user", JSON.stringify({ name: email.split("@")[0] }));
        location.reload();
    });

    // عرض اسم المستخدم بعد تسجيل الدخول
    function showUserNav(user) {
        signUpLink?.classList.add("d-none");
        loginLink?.classList.add("d-none");

        let userNav = document.createElement("li");
        userNav.className = "nav-item dropdown";
        userNav.innerHTML = `
            <a class="nav-link dropdown-toggle fs-5" href="#" role="button" data-bs-toggle="dropdown">
                <img src="images/profile-icon.png" alt="Profile" width="30" class="rounded-circle">
                <span class="ms-1">Welcome, ${user.name}</span>
            </a>
            <ul class="dropdown-menu">
                <li><a class="dropdown-item" href="#">Profile</a></li>
                <li><a class="dropdown-item" href="#" id="logout">Logout</a></li>
            </ul>
        `;
        navbar.appendChild(userNav);

        // زر تسجيل الخروج
        document.getElementById("logout").addEventListener("click", function () {
            localStorage.removeItem("user");
            location.reload();
        });
    }
});
