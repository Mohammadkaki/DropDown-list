const btn = document.querySelector('.btn');
const form1= document.getElementById('form1');
const dropdown  = document.querySelector('.dropdown');
// const new2 = document.getElementsByClassName('.new2');

function openForm() {
    document.getElementById("myForm").style.display = "block";
  }

  
  function closeForm() {
    document.getElementById("myForm").style.display = "none";
  }

  btn.onclick = (e) =>{
    e.preventDefault();
      // ----Test check
    // console.log('chcek click');

    var datos = new FormData(form1);
    // ----Test check 
    //  console.log(datos);
    //  console.log(datos.get('title'));
    // console.log(datos.get('text1'));
     
    fetch("post.php", {
      method:"POST",
      headers: {
        'Access-Control-Allow-Origin': '*'
     },
      body: datos

    }).then(function (response) {
         return response.data();
    
    }).then(function(data){
      console.log(data);
    })
    
   
  
   
   const row = document.createElement('div');
    row.innerHTML= `

    


    <details class="editwidth">
    <summary>${datos.get(`title`)}</summary>
    <br>
    ${datos.get(`text1`)}
    </details>

    <br>
    <br>

    `
 
    
    dropdown.appendChild(row);
    
     

    
      
  
      


 




  
}

