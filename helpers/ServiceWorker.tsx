import { registerSW } from "./ServiceWorkerHelper";
import { PureComponent } from "react";

class ServiceWorker extends PureComponent {
    componentDidMount() {
        registerSW();
    }

    render() {
        return null;
    }
}

export default ServiceWorker;
