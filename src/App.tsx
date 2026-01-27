import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState } from "react";

function App() {

  const [inputText, setInputText] = useState(""); 
  const [data, setData] = useState([]); 
  

  const addTexto = () => {
    if (inputText.trim() !== "") {
      setData([...data, inputText]); 
      setInputText(""); 
    }
  };
  const handleKeyDown = (e) => {
    if (e.key === "Enter") {
      addTexto();
    }
  };

  const delTexto = () => {
    setData(data.slice(0, -1)); 
  };

  return (
  
    <Card>
      <CardBody
        title="Hola Tonotos"
        text="Ingresa el texto"
      />
      
      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={inputText}
          onChange={(e) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe aquí..."
        />
      </div>

      <h3>Tu Lista:</h3>
      <Button onClick={addTexto}>Agregar a la lista</Button>
      <Button onClick={delTexto}>Eliminar último</Button>
      
      
      <List data={data} />
    </Card>
  );
}

export default App;