import { useState } from "react";
import { Loading } from "./components/Loading";
import "./styles/index.css";

function App() {
  const [isLoaded, setIsLoaded] = useState(false);

  return <>{!isLoaded && <Loading onComplete={() => setIsLoaded(true)} />}</>;
}

export default App;
