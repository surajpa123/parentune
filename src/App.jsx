import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import axios from "axios";
import Card from "./components/Card";

function App() {
  const [data, setData] = useState();

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get(
          "https://qa7.parentune.com/api/subscription/subscribe/v2/plans"
        );

        setData(response.data.data);
      } catch (error) {
        console.log(error.message);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="flex gap-2">
      {data?.map((ele, index) => {
        return (
          <div key={index}>
            <Card data={ele} />
          </div>
        );
      })}

      <Card data={data} />
    </div>
  );
}

export default App;
