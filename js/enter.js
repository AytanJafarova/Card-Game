var GetName=document.querySelector('#nameInput');
var GetButton=document.querySelector('#strtButton');
var nameUser;
function checkNameValue() 
{
    if (GetName.value=="")
    {
      alert('Please, enter your name!')  
      GetButton.setAttribute('href','#')
    }
    else
    {
      GetButton.setAttribute('href','first.html')
        nameUser=GetName.value;
        GetButton.setAttribute('data-toggle', 'modal');
        GetButton.setAttribute('data-target', '#exampleModal');
        localStorage.setItem('nameUser',nameUser);
        GetName.value=="";
    }
}

$('#exampleModal').on('show.bs.modal', function (event) {
  var modal = $(this)
  modal.find('.modal-title').text('Welcome here, ' + nameUser +'!')
})


