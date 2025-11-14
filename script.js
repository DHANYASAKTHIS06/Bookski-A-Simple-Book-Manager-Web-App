const openPopup = document.getElementById("openPopup");
const closePopup = document.getElementById("closePopup");
const popup = document.getElementById("popup");
const addBookBtn = document.getElementById("addBook");
const bookList = document.getElementById("bookList");
openPopup.onclick = function(){
    popup.style.display = "flex";
}
closePopup.onclick = function(){
    popup.style.display = "none";
}
function attachDeleteEvents(){
    const deleteBtns = document.querySelectorAll(".delete-btn");
    deleteBtns.forEach(btn=>{
        btn.onclick = function(){
            btn.parentElement.remove();
        };
    });
}
attachDeleteEvents();
addBookBtn.onclick = function(){
    const name = document.getElementById("bookName").value.trim();
    const author = document.getElementById("bookAuthor").value.trim();
    const desc = document.getElementById("bookDesc").value.trim();
    if(name === "" || author === "" || desc === ""){
        alert("Please fill all fields");
        return;
    }
    const box = document.createElement("div");
    box.className = "book-box";
    box.innerHTML = `
        <h3>${name}</h3>
        <p><b>Author:</b> ${author}</p>
        <p>${desc}</p>
        <button class="delete-btn">Delete</button>
    `;
    bookList.appendChild(box);
    attachDeleteEvents();
    document.getElementById("bookName").value = "";
    document.getElementById("bookAuthor").value = "";
    document.getElementById("bookDesc").value = "";
    popup.style.display = "none";
};
