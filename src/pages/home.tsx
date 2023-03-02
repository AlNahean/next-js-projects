import Home from "@/PageComponents/Home/Home";
import { HomeContextProvider } from "@/PageComponents/Home/HomeContext";

const HomePage = () => {
  return (
    <div>
      <HomeContextProvider>
        <Home />
      </HomeContextProvider>
    </div>
  );
};
export default HomePage;
