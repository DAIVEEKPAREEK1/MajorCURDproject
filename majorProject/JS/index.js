function checkcredential(credent) {
  credent.preventDefault();
  console.log("login-email : ", credent.target.loginName.value);
  console.log("login-password : ", credent.target.loginPassword.value);
  let database = JSON.parse(localStorage.getItem("userdetails"));
  // admin-crediantial
  if (
    credent.target.loginName.value === "daiveekpareek@gmail.com" && credent.target.loginPassword.value === "daiveek123"
  ) {
    window.location.href = "HTML/admin.html";
  } else if (
    database && database.filter((val) => {
      console.log(credent.target.loginName.value);
      return (
        credent.target.loginName.value === val.username && credent.target.loginPassword.value === val.userPassword
      );
    }).length
  ) {
    console.log(credent.target.loginName.value);
    window.location.href = "HTML/blog.html";
  } else {
    alert(" Email-Id or password is Wrong\n OR \n Request is Pending");
  }
}