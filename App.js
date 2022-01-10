import "react-native-gesture-handler";
import { Provider } from "react-redux";
import Navigation from "./navigation";
import configureStore from "./store/configureStore";

const store = configureStore();

export default function App() {
    return (
        <Provider store={store}>
            <Navigation />
        </Provider>
    );
}
