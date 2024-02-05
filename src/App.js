import { useState } from "react";
import WebRoute from "./routes/WebRoute";

function App() {
  const [userMenuShow, onUserMenuShow] = useState(false);

  const onUserMenuClick = () => {
    onUserMenuShow(!userMenuShow);
  };

  return (
    <div className="App">
      <WebRoute userMenuShow={userMenuShow} onUserMenuClick={onUserMenuClick} />
    </div>
  );
}

export default App;
