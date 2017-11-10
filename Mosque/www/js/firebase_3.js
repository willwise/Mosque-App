
   // Get a reference to the database service
  var database = firebase.database();


    var database = firebase.database();
    database.ref().once('value', function(snapshot){
        if(snapshot.exists()){
            var content = '';
            snapshot.forEach(function(data){
                var val = data.val();
                content +='<tr>';
                content += '<td>' + val.Date + '</td>';
                content += '<td>' + val.Fajr + '</td>';
                content += '<td>' + val.Sunrise + '</td>';
                content += '<td>' + val.Zuhur + '</td>';
                content += '<td>' + val.Asr + '</td>';
                content += '<td>' + val.Margrib + '</td>';
                content += '<td>' + val.Isha + '</td>';
                content += '</tr>';
            });
            $('#monthly').append(content);
        }
    });