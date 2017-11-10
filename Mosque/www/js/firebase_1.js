
   // Get a reference to the database service
  var database = firebase.database();


    var database = firebase.database();
    database.ref().once('value', function(snapshot){
        if(snapshot.exists()){
            var content = '';
            snapshot.forEach(function(data){
                var val = data.val();
                content +='<tr>';
                content += '<td>' + val.descripcion + '</td>';
                content += '<td>' + val.direccion + '</td>';
                content += '<td>' + val.estado + '</td>';
                content += '<td>' + val.imagen + '</td>';
                content += '<td>' + val.tipo + '</td>';
                content += '<td>' + val.udisplayName + '</td>';
                content += '<td>' + val.uemail + '</td>';
                content += '</tr>';
            });
            $('#results').append(content);
        }
    });
