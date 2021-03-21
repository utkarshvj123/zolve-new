export const requiredData = (array) => {
  array.forEach((object) => {
    if (object.name || object.count) {
      object["label"] = object.name;
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
