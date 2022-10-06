
exports.getDate = function (){
  const today = new Date();
  // const currentDay = today.getDay();
  //const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const options = {
    weekday: 'long',
    day: 'numeric',
    month: 'long'
  };
  return day = today.toLocaleDateString("en-US", options);

};

exports.getDay = function (){
  const today = new Date();
  // const currentDay = today.getDay();
  //const day = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
  const options = {
    weekday: 'long'
  };
  return day = today.toLocaleDateString("en-US", options);

};
