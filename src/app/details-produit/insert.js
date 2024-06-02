function  BuyProduct()
{
    let xhr=new XMLHttpRequest();
     xhr.onreadystatechange = function() {
        if (xhr.readyState == 4 && xhr.status == 200) {
            alert(xhr.responseText);
            //alert('produit ajouté au panier ');
        }

     }
    let data=document.getElementById('idprod').value;
     xhr.open("POST", "http://localhost/api/insertproduct.php", true);
    xhr.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    xhr.send("message=" +data);
}        