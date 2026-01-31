import Card, { CardBody } from "./components/Card";
import List from "./components/List";
import Button from "./components/Button";
import { useState, useEffect } from "react"; // 1. Importamos useEffect

function App() {
  const [inputText, setInputText] = useState("");

  // 2. Modificamos el estado inicial de 'data'
  // En lugar de useState([]), pasamos una función que busca en el localStorage
  const [data, setData] = useState(() => {
    const savedData = localStorage.getItem("miLista");
    // Si hay datos, los convertimos de texto a array (JSON.parse)
    // Si no hay nada, devolvemos un array vacío []
    return savedData ? JSON.parse(savedData) : [];
  });

  // 3. Agregamos este useEffect
  // Esto se ejecuta AUTOMÁTICAMENTE cada vez que la variable 'data' cambia.
  // Sirve tanto para addTexto como para delTexto.
  useEffect(() => {
    localStorage.setItem("miLista", JSON.stringify(data));
  }, [data]); // [data] es la dependencia que vigila los cambios

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
      <CardBody title="Hola Tonotos" text="Ingresa el texto" />

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