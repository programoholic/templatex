function sortAndFilter(allOfTheData, sortModel, filterModel) {
    debugger
    return sortData(sortModel, filterData(filterModel, allOfTheData));
  }
  function sortData(sortModel, data) {
    var sortPresent = sortModel && sortModel.length > 0;
    if (!sortPresent) {
      return data;
    }
    var resultOfSort = data.slice();
    resultOfSort.sort(function(a, b) {
      for (var k = 0; k < sortModel.length; k++) {
        var sortColModel = sortModel[k];
        var valueA = a[sortColModel.colId];
        var valueB = b[sortColModel.colId];
        if (valueA == valueB) {
          continue;
        }
        var sortDirection = sortColModel.sort === "asc" ? 1 : -1;
        if (valueA > valueB) {
          return sortDirection;
        } else {
          return sortDirection * -1;
        }
      }
      return 0;
    });
    return resultOfSort;
  }
  function filterData(filterModel, data) {
    var filterPresent = filterModel && Object.keys(filterModel).length > 0;
    if (!filterPresent) {
      return data;
    }
    // let filterCols = Object.keys(filterModel);
    // let type = filterModel[filterCols[0]];

    // let resultOfFilter =  data.filter((row)=>{ return String(row[filterCols[0]])===type.filter}); 
    // return resultOfFilter;
    let resultOfFilter= [];
    for(let i = 0 ;i<data.length;i++){
        let matched = true;
        Object.keys(filterModel).forEach((currentFilter)=>{
            //  let colFilter =filterModel[currentFilter];
             let value =  filterModel[currentFilter]["filter"];
             if(!String(data[i][currentFilter]).toLowerCase().includes(value.toLowerCase())){
                   matched = false;
                   return;
             }
        });
       if(matched){
        resultOfFilter.push(data[i]) 
       }
    }
    return resultOfFilter;
//     var resultOfFilter = [];
//     for (var i = 0; i < data.length; i++) {
//       var item = data[i];
//       if (filterModel.age) {
//         var age = item.age;
//         var allowedAge = parseInt(filterModel.age.filter);
//         if (filterModel.age.type == "equals") {
//           if (age !== allowedAge) {
//             continue;
//           }
//         } else if (filterModel.age.type == "lessThan") {
//           if (age >= allowedAge) {
//             continue;
//           }
//         } else {
//           if (age <= allowedAge) {
//             continue;
//           }
//         }
//       }
//       if (filterModel.year) {
//         if (filterModel.year.values.indexOf(item.year.toString()) < 0) {
//           continue;
//         }
//       }
//       if (filterModel.country) {
//         if (filterModel.country.values.indexOf(item.country) < 0) {
//           continue;
//         }
//     }
//     resultOfFilter.push(item);
//   }
//   return resultOfFilter;
}  

function queryBuilder(filterObject){

}