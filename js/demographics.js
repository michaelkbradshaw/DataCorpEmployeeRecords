var makeTable = function(records)
{
    var rows = d3.select("tbody")
      .selectAll("tr")
      .data(records)
      .enter()
      .append("tr");  
    
    rows.append("td")
    .classed("companyID",true)
    .text(function(record) {return record.id})
    
    rows.append("td")
    .classed("gender",true)
    .text(function(record) {return record.gender})
    
    rows.append("td")
    .classed("education",true)
   
    .text(function(record) {return record.education})
    
    rows.append("td")
    .classed("age",true)
    .text(function(record) {return record.age})
    
    
    
    
    
    
    
}





var recordP = d3.csv("data/DataCorpRecords.csv")

recordP.then(
function(records)
    {
        console.log("records",records);
        makeTable(records);
    },
    function(err)
    {
        console.log("error",err);
    }
)