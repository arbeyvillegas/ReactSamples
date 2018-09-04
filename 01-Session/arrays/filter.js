var words = ['spray', 'limit', 'elite', 'exuberant', 'destruction', 'present'];

const result = words.filter(word => word.length > 6);

console.log(result);



//otro ejemplo EJERCICIO
var arr = [
    { id: 15 },
    { id: -1 },
    { id: 0 },
    { id: 3 },
    { id: 12.2 },
    { },
    { id: null },
    { id: NaN },
    { id: 'undefined' }
  ];
  
  var invalidEntries = 0;
  
  function isNumber(obj) {
    return obj !== undefined && typeof(obj) === 'number' && !isNaN(obj);
  }
  
  function filterByID(item) {
    if (isNumber(item.id) && item.id !== 0) {
      return true;
    } 
    invalidEntries++;
    return false; 
  }
  
  var arrByID = arr.filter(filterByID);
  
  console.log('Filtered Array\n', arrByID); 
 
  
  console.log('Number of Invalid Entries = ', invalidEntries); 
 