var data = 'Date,Fajr,Sunrise,Zuhur,Asr,Margrib,Isha,\nDate,Fajr,Sunrise,Zuhur,Asr,Margrib,Isha,\nDate,Fajr,Sunrise,Zuhur,Asr,Margrib,Isha,';
         var lines = data.split("\n"),
         output = [],
         i;
         for (i = 0; i < lines.length; i++)
         output.push("<tr><td>"
         + lines[i].slice(0,-1).split(",").join("</td><td>")
         + "</td></tr>");
         output = "<table>" + output.join("") + "</table>";
         var div = document.getElementById('container');
         
         div.innerHTML = output;