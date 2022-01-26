let myJson ='Products.json';
console,log(myJson);
let myJS = JSON.parse(myJson);
// myJs.name;


$(function(){       
$.ajax({
    url : 'Products.json',
    datatype : 'json',
    cache : false ,
    success: function(data,status){
        $.each(data, function(index){
        $('#div').append('<div>'+ data[index].name +'</div>');
        })
        console.log(data);
        console.log(status);
    },
    error: function(xhr, textStatus, err){
       console.log(xhr);
        console.log(textStatus);
        console.log(err);
    }
    });
}); 






























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