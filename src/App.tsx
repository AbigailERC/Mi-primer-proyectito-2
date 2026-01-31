import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState, useEffect } from "react"; 

function App() {
  const [inputText, setInputText] = useState<string>("");

  const [data, setData] = useState<string[]>(() => {
    const savedData = localStorage.getItem("miLista");
    return savedData ? JSON.parse(savedData) : [];
  });

  useEffect(() => {
    localStorage.setItem("miLista", JSON.stringify(data));
  }, [data]); 

  const addTexto = () => {
    if (inputText.trim() !== "") {
      setData([...data, inputText]);
      setInputText("");
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === "Enter") {
      addTexto();
    }
  };

  const delTexto = () => {
    setData((prev) => prev.slice(0, -1));
  };

  return (
    <Card>
      <CardBody title="Hola Tonotos" text="Ingresa el texto" />

      <div style={{ marginBottom: "20px" }}>
        <input
          type="text"
          value={inputText}
          onChange={(e: React.ChangeEvent<HTMLInputElement>) => setInputText(e.target.value)}
          onKeyDown={handleKeyDown}
          placeholder="Escribe aquí..."
        />
      </div>

      <h3>Mi lit</h3>
      <Button onClick={addTexto}>Agregar a la lista</Button>
      <Button onClick={delTexto}>Eliminar último</Button>

      <List data={data} />
    </Card>
  );
}

export default App;