import ReactDOM from "react-dom/client";
import InteractiveRatingComponent from "./src/InteractiveRatingComponent";

const main$ = document.querySelector("main");
if (main$ == null) {
  throw new Error(
    "document has no <main> element. Please make one so that react can be initialized there"
  );
}
const root = ReactDOM.createRoot(main$);
root.render(<InteractiveRatingComponent />);
