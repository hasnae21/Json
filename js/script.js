
$(document).ready(function(){    
$.ajax({
    url : "Produits.json",
    datatype : 'json',
    cache : false ,

    success: function(data,status){
        for (var x in data) {
                var tr = `<tr>
                    <td>${data[x].Un_ID}</td>
                    <td>${data[x].Une_désignation}</td>
                    <td>${data[x].Un_prix}</td>
                    <td>${data[x].Une_catégorie}</td>
                    <td>${data[x].Une_disponibilité}</td>
                    <td>${data[x].Un_fournisseur.Raison_Sociale} <br>
                        ${data[x].Un_fournisseur.Adresse}
                    </td>
                </tr>`
                var table = $("#mytbody")
                table.append(tr)
        }
        console.log(data);
        console.log(status);
    },

    error: function(xhr, textStatus, err){
       console.log(xhr);
        console.log(textStatus);
        console.log(err);
    }
    })
});

// $('#search').keydown(function(){
//     $.getJSON("Produits.json",function(data){
//         var search = $('#search').val();
//         var regex = new RegExp(search, 'i');
//         var output;
//         $.each(data, function(key, val){
//             if((val.id.search(regex) != -1) || (val.name.search(regex) != -1)){
//                 output += "<tr>";
//                 output += "<td id='"+key+"'>" + val.Un_ID + "</td>";
//                 output += "<td id='"+key+"'>" + val.Une_désignation + "</td>";
//                 output += "<td id='"+key+"'>" + val.Un_prix + "</td>";
//                 output += "<td id='"+key+"'>" + val.Une_catégorie + "</td>";
//                 output += "</tr>";
//             }
//         });
//     $('tbody').html(output)
//     });
// });
















    // $.getJSON("Products.json", function(data){
        //     console.log(data);
        
        //     var content = '';
        //     for (var x in data){
            //         content = data[x].name;  
            //     }
            //     console.log(content);//avoir tous les noms
            // $("td").html("content");
            // // $("div").css("font-family","calibri");
    // });