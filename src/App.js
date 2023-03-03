import "./App.css";
import { Chart1 } from "./component/chart1";
import { Chart2 } from "./component/chart2";
import { Chart3 } from "./component/chart3";

function App() {
  return (
    <div className="chart-container">
      <Chart1 />
      <Chart2 />
      <Chart3 />
    </div>
  );
}

export default App;
