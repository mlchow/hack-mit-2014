function loadTables (tableName){
			var JuntoBox = Parse.Object.extend(tableName);
			var query = new Parse.Query(JuntoBox);
			query.find( {
			  success: function(juntoBoxEntry) {
				// The object was retrieved successfully.
				//$("#main-container").empty();
				var stuff = "";
				var objectIds = "";
				var name = ""; //juntoBoxEntry[0].get("className");
				var myAttributes; 



                for (i=0;i<juntoBoxEntry.length;i++) {
					//$("#main-container").html(gameScore[i].get("foo"));
					stuff += (i+1) + ". " + juntoBoxEntry[i].get("Name")+"<br>";
					objectIds += (i+1) + ". " + juntoBoxEntry[i].id+"<br>";
					
					for (var key in juntoBoxEntry[i]) {
						//console.log("Key: " + key);
						//console.log("Value: " + juntoBoxEntry[i][key]);
						if(key == "className"){
							name = juntoBoxEntry[i][key];
						}else if (key == "attributes"){
							myAttributes = juntoBoxEntry[i][key];
						}
					}
				  }

                  // commands logout functions
                 $("#logout").click(function() {
                    Parse.User.logOut();
                    var currentUser = Parse.User.current();
                    window.location.replace("../index.html");
                }); 
				  
				  
				  
	//SET TABLE HEADER
				  var attributesString = "";
				  for (var key in myAttributes) {
					//console.log("HH: Key: " + key);
					//console.log("HH: Value: " + myAttributes[key]);
					attributesString += "<th> " + key + " </th>  ";
				  }
				  $("#tableHeader").html(attributesString);
				  $("#tableFooter").html(attributesString);
				  
				  $("#pageTitle").html(name);
				  
				  
				  	
				  var temp = "";
				    //$("#main-container").html(stuff);
				for (i=0;i<juntoBoxEntry.length;i++) {
					
					
					//get next row
					//for (var key in juntoBoxEntry[i]) {
						temp += "<tr>";
						//get all columns
						for (var key in myAttributes) {	
							temp += "<td><div contenteditable>"+ juntoBoxEntry[i].get(key) + "</div></td>";
						}
						temp += "</tr>";
					//}
				}	
				
				$("#tableBody").html(temp);
						
			
				
				  
				  
				  
				
				  //$("#main-container").html(objectIds);
			  },
			  error: function(object, error) {
				// The object was not retrieved successfully.
				// error is a Parse.Error with an error code and message.
				alert("error");
			  }
			});
};
			