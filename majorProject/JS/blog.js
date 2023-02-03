let submitArr = []
let draftArr = []
refreshMessage();

function refreshMessage() {
    let doneDiv = document.querySelector("#doneDiv");
    
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
  }