function resetForm() {
    $("#Full_Name_ID").val('');
    $("#Email_ID").val('');
    $("#Password_ID").val('');
    $("#Re_Password_ID").val('');
    $("#Birthday_ID").val('');
}

function createNewUser() {
    var fullName = $("#Full_Name_ID").val();
    var email = $("#Email_ID").val();
    var password = $("#Password_ID").val();
    var rePassword = $("#Re_Password_ID").val();
    var birthday = $("#Birthday_ID").val();

    if (password != rePassword) {
        alert("Mật khẩu không trùng khớp!")
    }

    var user = {
        FullName: fullName,
        Email: email,
        Password: password,
        Birthday: birthday,
    }

    window.open('LoginPage.html', '_self')

    var json = JSON.stringify(user)
    localStorage.setItem('user', json)
}

function loginSuccess() {
    var v_Email_Login = $("#email").val();
    var v_Password_Login = $("#pwd").val();
    var user = JSON.parse(localStorage.getItem('user'))

    if ((user.Email == v_Email_Login) && (user.Password == v_Password_Login)) {
        alert("Đăng nhập thành công!")
        window.open('Home.html', '_self')
    }
    else {
        alert('Kiểm tra lại thông tin!')
    }
}

function returnPageRegister() {
    window.open('RegisterPage.html', '_sefl')
}