function sortingData(string) {
  var data = Array.from(string);
  var sortData = data.sort();
  var joinData = sortData.join("");
  return joinData;
}

export default sortingData;
