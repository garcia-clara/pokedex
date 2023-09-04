import ReactDOM from "react-dom/client";
import App from "./App.tsx";
import "./index.css";
import ContextPokemonProvider from "./context/pokemon-context.tsx";

ReactDOM.createRoot(document.getElementById("root")!).render(
   <ContextPokemonProvider>
      <App />
   </ContextPokemonProvider>
);
