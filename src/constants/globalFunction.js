export const requiredData = (array) => {
  array.forEach((object) => {
    if (object.name || object.count) {
      object["label"] = capitalizeFirstLetter(object.name);
      object["value"] = object.count;
    }
  });
  return {
    type: "column2d",
    width: 800,
    height: 400,
    dataFormat: "json",
    dataSource: {
      chart: {
        caption: "Stack Exchange",
        // subCaption: "",
        xAxisName: "Language",
        yAxisName: "Counts",
        numberSuffix: "K",
        theme: "fusion",
      },
      data: array,
    },
  };
};

function capitalizeFirstLetter(string) {
  var b = string.split("-");
  let newString;
  if (b === -1) {
    newString = string;
  } else {
    let c = b.join(" ");
    newString = c;
  }
  return newString.charAt(0).toUpperCase() + newString.slice(1);
}
