import { createRoot } from "react-dom/client";

//the following code imports my main-view to be accessible to this file as its the first file to load
import { MainView } from "./components/main-view/main-view";

//import statement to indicate that you need to bundle './index.scss'
import "./index.scss"

//Main component will eventually use all the others
const MyFlixApplication = () => {
    return <MainView />;
};


//Finds the root of your app
const container = document.querySelector("#root");
const root = createRoot(container);
root.render(<MyFlixApplication />);