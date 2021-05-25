import './App.css';
import { useSelector, useDispatch } from "react-redux";
import { getVenueData } from "./actions";
import GetVenueMain from "./components/getVenueMain";


function App() {
  // const venueData = useSelector(getVenueData);
  // console.log("venue data", venueData);
  // const dispatch = useDispatch();
  return (
    <div className="App">
      <GetVenueMain />
      {/* <span onClick={getNearByVenueService}>API</span> */}
      {/* <span onClick={()=> dispatch(getVenueData())}>Click</span> */}
    </div>
  );
}

export default App;
