import logo from "./logo.svg";
import "./App.css";
import apiservice from "./components/service";
import { useEffect, useState } from "react";
function App() {
  const [data, setData] = useState();
  //example for GET
  useEffect(() => {
    apiservice.getApiData("/users").then((res) => {
      setData(res);
    });
  }, []);
  //example for POST
  useEffect(() => {
    //example payload that u need to send to api
    let payload = {
      id: 1,
      name: "yor name",
      comments: "loreipsum",
    };
    apiservice.postApiData("/posts", payload).then((res) => {
      console.log(res);
    });
  }, []);

  return (
    <div className="App">
      {data
        ? data.map((item, index) => {
            return <p key={index}>{item.name}</p>;
          })
        : "something went wrong"}
    </div>
  );
}

export default App;
