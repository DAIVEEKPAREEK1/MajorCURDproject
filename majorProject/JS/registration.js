let formObj = {};
let formArr = [];
function validateForm(e) {
  e.preventDefault();
  for (let i = 0; i < e.target.elements.length - 1; i++) {

    formObj = {
      ...formObj,
      [e.target.elements[i].id]: e.target.elements[i].value
    }
    e.target.elements[i].value = "";
  }
  formArr.push(formObj);
  localStorage.setItem(`userdetails`, JSON.stringify(formArr));
  console.log(formArr)
}
