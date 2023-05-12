import React from "react";
import "./suma.css"

const Suma = () => {
  const [suma, setSuma] = React.useState(0)
  return (
    <div className="Card">
      <div className="salida">{suma}</div>
      <button onClick={() => {setSuma(suma+1)}}>Sumar 1</button>
    </div>
  );
}

export default Suma
