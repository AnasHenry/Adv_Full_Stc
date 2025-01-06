import React, { useMemo, useState } from "react";
var slowfn = (num) => {
  for (let i = 0; i < 3000000000; i++) {}
  return num * 2;
};
const UseMeme = () => {
  var [num, setNum] = useState(0);
  var [theme, updateTheme] = useState(true);
  var starNight = {
    backgroundColor: theme ? "black" : "white",
    color: theme ? "white" : "black",
  };
  var doublingAnum = useMemo(() => {
    return slowfn(num);
  }, [num]);
  return (
    <div className="mt-box">
      <h1>This is useMemo Example</h1>
      <p>
        It can be used to keep expensive, resource intensive functions from
        needlessly running. When using memo, the place where it is used mustn't
        be a function
      </p>
      <input
        type='number'
        value={num}
        onChange={(event) => setNum(event.target.value)}
      />
      <button onClick={() => updateTheme((theme = !theme))}>
        Toggle Theme
      </button>
      <h2 style={starNight}>{doublingAnum}</h2>
    </div>
  );
};
export default UseMeme;
