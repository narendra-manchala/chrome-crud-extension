// $(function(){
//Submit sports
$("button").on("click", function(e){
    e.preventDefault();
    //console.log("hkugjg")
    var name = $("#name").val();
    var type = $("#type").val();

    $.ajax({
        method: 'POST',
        url: 'http://localhost:8080/createExtension',
        data:{name:name, type:type}
    })
        .done(function (json, msg) {
            console.log(json)
        })
});
// })
//Get Sports