


function sum(arr) {
    return arr.reduce((acc, val) => acc + val, 0);
  }
  
  
  function removeDuplicates(arr) {
    return [...new Set(arr)];
  }
  
  
  function max(arr) {
    return Math.max(...arr);
  }
  
  
  function min(arr) {
    return Math.min(...arr);
  }
  
  
  function shuffle(arr) {
    for (let i = arr.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      [arr[i], arr[j]] = [arr[j], arr[i]];
    }
    return arr;
  }
  
 
  function sortAsc(arr) {
    return arr.slice().sort((a, b) => a - b);
  }
  
 
  function sortDesc(arr) {
    return arr.slice().sort((a, b) => b - a);
  }
  
  
  function flatten(arr) {
    return arr.flat();
  }
  
  
  function chunk(arr, size) {
    return Array.from({ length: Math.ceil(arr.length / size) }, (_, i) =>
      arr.slice(i * size, i * size + size)
    );
  }
  
  
  function countOccurrences(arr) {
    return arr.reduce((acc, val) => {
      acc[val] = (acc[val] || 0) + 1;
      return acc;
    }, {});
  }
  
  module.exports = {
    sum,
    removeDuplicates,
    max,
    min,
    shuffle,
    sortAsc,
    sortDesc,
    flatten,
    chunk,
    countOccurrences
  };
  