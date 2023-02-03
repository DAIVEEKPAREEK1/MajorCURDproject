let submitArr = []
let draftArr = []
refreshMessage();

function refreshMessage() {
  let doneDiv = document.querySelector("#doneDiv");
  let pendingDiv = document.querySelector("#pendingDiv");
  document.querySelector("#draft").setAttribute("onclick", "blogDraft()");
  document.querySelector("#draft").value = "DRAFT";
  document.querySelector("#message").value = "";
  if (localStorage.getItem("submitted")) {
    doneDiv.remove();
    let newDoneDiv = document.createElement("div");
    newDoneDiv.setAttribute("id", "doneDiv");
    let allMsgDiv = document.querySelector("#allMsgDiv");
    allMsgDiv.appendChild(newDoneDiv);
    submitArr = JSON.parse(localStorage.getItem("submitted"));

    for (let i = 0; i < submitArr.length; i++) {
      let msgDiv = document.createElement("div");
      msgDiv.style.cssText = "margin:10px; padding:10px; border: 2px solid green"
      let msgPara = document.createElement("p");
      msgPara.innerText = `${submitArr[i].message}`;
      msgDiv.appendChild(msgPara);
      newDoneDiv.appendChild(msgDiv);
    }

  }
  if (localStorage.getItem("drafted")) {
    pendingDiv.remove();
    let newPendingDiv = document.createElement("div");
    newPendingDiv.setAttribute("id", "pendingDiv");
    let allMsgDiv = document.querySelector("#allMsgDiv");
    allMsgDiv.appendChild(newPendingDiv);
    draftArr = JSON.parse(localStorage.getItem("drafted"));

    for (let i = 0; i < draftArr.length; i++) {
      let msgDiv = document.createElement("div");
      msgDiv.style.cssText = "margin:10px; padding:10px; border: 2px solid red";

      let msgPara = document.createElement("p");
      msgPara.innerText = `${draftArr[i].message}`;

      let draftBtn = document.createElement("button");
      draftBtn.innerText = "edit";
      draftBtn.setAttribute("onclick", `editDraft(${i})`);

      let deleteBtn = document.createElement("button");
      deleteBtn.innerText = "delete";
      deleteBtn.setAttribute("onclick", `deleteDraft(${i})`);

      draftBtn.style.cssText = "margin:2px; padding:5px";
      deleteBtn.style.cssText = "margin:2px; padding:5px";

      msgDiv.appendChild(msgPara);
      msgDiv.appendChild(draftBtn);
      msgDiv.appendChild(deleteBtn);
      newPendingDiv.appendChild(msgDiv);
    }
  }
}

function editDraft(i) {
  console.log(draftArr[i]);
  document.querySelector("#message").value = draftArr[i].message;
  document.querySelector("#draft").setAttribute("onclick", `updateDraft(${i})`)
  document.querySelector("#draft").value = "UPDATE DRAFT";
}

function updateDraft(i) {
  if (document.querySelector("#message").value == "") {
    alert("DONT LEAVE THE INPUT FIELD EMPTY");
  }
  else {
    draftArr[i].message = document.querySelector("#message").value;
    localStorage.setItem("drafted", JSON.stringify(draftArr));
    refreshMessage();
  }
}

function deleteDraft(i) {
  draftArr.splice(i, 1);
  localStorage.setItem("drafted", JSON.stringify(draftArr));
  refreshMessage();
}

function blogSubmit(e) {
  if (e.target.message.value == "") {
    alert("DONT LEAVE THE INPUT FIELD EMPTY");
  }
  else {
    e.preventDefault();
    let submitObj = {
      status: "done",
      message: `${e.target.message.value}`
    }
    e.target.message.value = ""
    submitArr.push(submitObj)
    localStorage.setItem("submitted", JSON.stringify(submitArr));
    refreshMessage();
  }
}

function blogDraft() {
  if (document.querySelector("#message").value == "") {
    alert("DONT LEAVE THE INPUT FIELD EMPTY");
  }
  else {
    let draftObj = {
      status: "pending",
      message: `${document.querySelector("#message").value}`
    }
    document.querySelector("#message").value = "";
    draftArr.push(draftObj);
    localStorage.setItem("drafted", JSON.stringify(draftArr));
    refreshMessage();
  }
}

