import { React, useState } from "react";

const FormClient = () => {
  const [client, setClient] = useState("");
  const [table, setTable] = useState(0);

  return (
    <>
      <div className="dataClient">
        <input
          type="text"
          className="name"
          id="client"
          name="name"
          placeholder="Nombre Cliente"
          value={client}
          onChange={(e) => {
            setClient(e.target.value);
          }}
        />
        <input
          type="number"
          className="table"
          id="table"
          name="table"
          placeholder="N° Mesa"
          min="0"
          max="10"
          value={table}
          onChange={(e) => {
            setTable(e.target.value);
          }}
        />
        {/* <button type="submit" id="send"className="btnSend" value="Ingresar Pedido"  autocomplete="off">Ingrese Pedido</button>  */}
      </div>
    </>
  );
};

export default FormClient;
