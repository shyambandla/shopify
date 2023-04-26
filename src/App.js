import logo from './logo.svg';
import './App.css';
import EbayItemsWidget from "./ebay-widgets";
function App() {
  return (
  <>
    <EbayItemsWidget
                    // carouselOptions={{
                    //     animation: 'slide',
                    //     autoPlay: true,
                    //     interval: 5000,
                    //     indicators: false,
                    //     navButtonsAlwaysInvisible: false,
                    //     navButtonsAlwaysVisible: false,
                    //     stopAutoPlayOnHover: true
                    // }}
                    defaultView="list"
                    imageSearchEndpoint="http://localhost:3001/search_by_image"
                    searchEndpoint="http://localhost:3001/search"
                    searchKeyword="Sneakers"
                />
  </>
  );
}

export default App;
