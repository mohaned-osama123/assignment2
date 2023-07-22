var bookmarkName = document.getElementById('bookmarkName') 
var bookmarkURL = document.getElementById('bookmarkURL')
var closeIcon = document.getElementById('close');
var lightboxContainer = document.querySelector('.layar');


var productArray = []

if (localStorage.getItem('products') != null) {
    productArray = JSON.parse(localStorage.getItem('products'))
    displayProduct()
}

function Submit() {


    var productObject = {
        name: bookmarkName.value,
        urlItem: bookmarkURL.value,
        
    }

    productArray.push(productObject)
    localStorage.setItem('products', JSON.stringify(productArray))
    displayProduct()
    clearInputs()

}

function displayProduct() {
    var cartona = ``
    for (var i = 1; i < productArray.length; i++) {
        cartona += `
        <tr>
        
        <td>${i}</td>
        <td>${productArray[i].name}</td>
        
        <td><a href="${productArray[i].urlItem}"  class="btn btn-warning btn-sm ">Visit</a></td>
        <td>  <button onclick="deleteItem(${i})" class="btn btn-danger btn-sm">DELETE</button></td>
      </tr>
        `
    }
    document.getElementById('demo').innerHTML = cartona
}

function clearInputs() {
    bookmarkName.value = ""
    bookmarkURL.value = ""
     
 }
 

 function deleteItem(index) {

     productArray.splice(index, 1)
     localStorage.setItem('products', JSON.stringify(productArray))
     displayProduct()

 }
 closeIcon.addEventListener('click', closeSlider)
function closeSlider(){
  lightboxContainer.style.display = "none"
}
bookmarkName.onkeyup = function () {
    var nameRejex = /^[A-Za-z]{2,10}$/;
    if (nameRejex.test(bookmarkName.value))   //(valid)
    {
    // submitBtn.removeAttribute('disabled');
      bookmarkName.classList.add('is-valid');
      bookmarkName.classList.remove('is-invalid');
    //   nameAlert.classList.add('d-none');
    }
    else   //(not valid)
    {
    //  submitBtn.disabled = true;
      bookmarkName.classList.add('is-invalid');
      bookmarkName.classList.remove('is-valid');
    //   nameAlert.classList.remove('d-none');
    }
  }
  bookmarkURL.onkeyup = function () {
    var linkRejex = /^((http|https):\/\/)?([\w]+\.)?[\w]+\.[a-zA-Z]{2,6}[\/\w\.-]*\/?$/
    if (linkRejex.test(bookmarkURL.value))   //(valid)
    {
    // submitBtn.removeAttribute('disabled');
    bookmarkURL.classList.add('is-valid');
    bookmarkURL.classList.remove('is-invalid');
    //   nameAlert.classList.add('d-none');
    }
    else   //(not valid)
    {
    //  submitBtn.disabled = true;
    bookmarkURL.classList.add('is-invalid');
    bookmarkURL.classList.remove('is-valid');
    //   nameAlert.classList.remove('d-none');
    }
  }
closeIcon.addEventListener('click', closeSlider)
function closeSlider(){
  lightboxContainer.style.display = 'none'
}




submitBtn.addEventListener('click', change)
function change(){
    if (bookmarkName.classList.contains('is-valid') && bookmarkURL.classList.contains('is-valid')) {
        Submit();
      } else {
        lightboxContainer.style.display = 'flex';
      }}