import { ToastContainer,toast} from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

function alertToastify(message, type) {
  toast('🦄 Wow so easy!', {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "light"
    });
}

export default alertToastify;
