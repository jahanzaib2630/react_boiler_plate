import logo from "./logo.svg";
import "./App.css";
import Main from "./views/Main";
import { commonStyles } from "./Styles/CommonStyles";
function App() {
  return (
    <div style={commonStyles.mainPage}>
      <Main />
    </div>
  );
}

export default App;
