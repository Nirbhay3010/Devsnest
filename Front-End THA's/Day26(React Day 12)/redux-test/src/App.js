import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { emailUpdated, nameUpdated } from "./actions/index";
function App() {
  const email = useSelector((state) => state.emailReducer);
  const name = useSelector((state) => state.nameReducer);
  const dispatch = useDispatch();
  return (
    <div className="App">
      E-mail:{""}
      <input
        onChange={(e) => {
          dispatch(emailUpdated(e.target.value));
        }}
      ></input>
      <br />
      Name:{""}
      <input

        onChange={(e) => {
          dispatch(nameUpdated(e.target.value));
        }}
      ></input>
      <p>Email:{email}</p>
      <p>Name:{name}</p>
    </div>
  );
}

export default App