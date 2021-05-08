var p_Name_Input= document.getElementById("pName");
var p_Price_Input= document.getElementById("pPrice");
var p_Category_Input= document.getElementById("pCat");
var p_Description_Input= document.getElementById("pDes");



var myStore;

if(localStorage.getItem("productInStorage")==null)
{
    myStore=[];
}
else
{
    myStore= JSON.parse(localStorage.getItem("productInStorage"));
    displayProduct() 
}

function addProduct()
{
    var rgxName= /^[a-zA-Z]+/
    var rgxcat_des= /^[a-zA-Z]+$/
    var rgxprice= /^[1-9][0-9]*$/

    if( rgxName.test(p_Name_Input.value)  )

    {
        if(rgxprice.test(p_Price_Input.value))
        {

            if(rgxcat_des.test(p_Category_Input.value))

            {

           
            if(rgxcat_des.test(p_Description_Input.value))
            {

                var oneProduct={
                    PNameValue:p_Name_Input.value,
                    pPriceValue: p_Price_Input.value,
                    pCatValue: p_Category_Input.value,
                    pDesValue: p_Description_Input.value,
                }
                myStore.push(oneProduct);
                localStorage.setItem("productInStorage", JSON.stringify(myStore));
            
            
                /*___________________________*/
            
                clearInputs();
                displayProduct();
            }
            else
            {
                alert("Product Category is not valid")
            }

            }
            else
           {
            alert("Product Category is not valid")
           }
           }
        else
        {
            alert("Product Price is not valid")
        }


    }
    else
    {
        alert("product name is not valid")
    }

     
}

function clearInputs()
{    
    p_Name_Input.value="";
    p_Price_Input.value="";
    p_Category_Input.value="";
    p_Description_Input.value="";
}

function displayProduct()
{
    var result="";

    for(i=0;i<myStore.length; i++)
    {
        result+=`<tr>
        <td>`+i+`</td>
        <td>`+myStore[i].PNameValue+`</td>
        <td>`+myStore[i].pPriceValue+`</td>
        <td>`+myStore[i].pCatValue+`</td>
        <td>`+myStore[i].pDesValue+`</td>   
        <td><button class="btn btn-danger" onclick="deleteproduct(`+i+`)" >Delete</button></td> 
    </tr>`
    }

    document.getElementById("demo").innerHTML=result;
}

function deleteproduct(pindex)
{
    myStore.splice(pindex,1);
    displayProduct();
    localStorage.setItem("productInStorage",JSON.stringify(myStore) );
}

function searchProduct(userword)

{
    var result=""
    for( i=0; i<myStore.length; i++)
    
    {

        if ((myStore[i].PNameValue).toLowerCase().includes(userword.toLowerCase() ))
        {

            result+=`<tr>
        <td>`+i+`</td>
        <td>`+myStore[i].PNameValue+`</td>
        <td>`+myStore[i].pPriceValue+`</td>
        <td>`+myStore[i].pCatValue+`</td>
        <td>`+myStore[i].pDesValue+`</td>   
        <td><button class="btn btn-danger" onclick="deleteproduct(`+i+`)" >Delete</button></td> 
                 </tr>`
                 
        }
         


    }
    document.getElementById("demo").innerHTML=result;

}



