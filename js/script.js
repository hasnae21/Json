// $(document).ready(function(){    
// $.ajax({
//     url : "Produits.json",
//     datatype : 'json',
//     cache : false ,

//     success: function(data,status){
//         for (var x in data) {
//                 var tr = `<tr>
//                     <td>${data[x].Année_de_sortie}</td>
//                     <td>${data[x].désignation}</td>
//                     <td>${data[x].prix}</td>
//                     <td>${data[x].fournisseur}</td>
//                     <td>${data[x].Catégorie}</td>
//                     <td>${data[x].Carburant}</td>
//                     <td>${data[x].Boite_de_vitesses}</td>
//                     <td>${data[x].consomation.ville}</td>
//                     <td>${data[x].consomation.route}</td>
//                     <td>${data[x].consomation.mixte}</td>
//                     <td>
//                         <ul>
//                         <li>${data[x].securite[0]}</li> 
//                         <li>${data[x].securite[1]}</li> 
//                         <li>${data[x].securite[2]}</li> 
//                         <li>${data[x].securite[3]}</li> 
//                         <li>${data[x].securite[4]}</li>
//                         </ul>
//                     </td>
//                 </tr>`
//                 var table = $("#mytbody")
//                 table.append(tr)
//         }
//         console.log(data);
//         console.log(status);
//     },

//     error: function(xhr, textStatus, err){
//        console.log(xhr);
//         console.log(textStatus);
//         console.log(err);
//     }
//     })

// });


// $(document).ready(function(){
//     $("th").each(function(column){
//         $(this).hover(function(){
//             $(this).data("type", $(this).attr("class"));
//         });
//         $(this).click(function(){
//             var type = $(this).data("type");
//             var records = $("table").find("tbody > tr");
//             records.sort(function(a, b){
//                 var value1 = $(a).children("td").eq(column).text();
//                 var value2 = $(b).children("td").eq(column).text();
//                 if(type == "num")
//                 {
//                     value2 *= 1;
//                     value2 *= 1;
//                 }
//                 return (value1<value2) ? -1 : (value1>value2 ? 1 : 0)
//             });
//             $.each(records, function(index, row){
//                 $("tbody").append(row);
//             })    
//         });
//     });
// });


// $(document).ready(function(){
// $("#search").on("keyup",function(){
//     var value = $(this).val();
// $("#mytbody tr").filter(function(){
//     $(this).toggle($(this).text().indexOf(value) > -1);
// });
// });
// });


function tab(a,b){
    return a-b;
}
console.log(tab(21.7 , 9.6));