// Import styles outside of lazy loading
import "@measured/puck/dist/index.css";
import { WebRenderer } from "@orgwarec/render-config";

let initialData = {
  content: [
    {
      type: "Heading",
      props: {
        content: "Welcome to Website Builder",
        textAlign: "center",
        color: "#333",
        backgroundColor: "#f0f0f0",
        fontSize: "5.5rem",
      },
    },
    {
      type: "Text",
      props: {
        content:
          "Start building your website by dragging components from the left sidebar.",
      },
    },
  ],
  root: { title: "My Website" },
};

const urlParams = new URLSearchParams(window.location.search);
const nodeId = urlParams.get("nodeId");
if (nodeId) {
  // Todo : fetch website data of specific node id  and remove localstorage data
  const data = localStorage.getItem(nodeId);
  if (data) {
    initialData = JSON.parse(data);
  }
}
export default function WebBuilder() {
  return (
    // Direct data usage
    <WebRenderer initialData={initialData} />

    // Using nodeId to load from localStorage
    // <WebRenderer nodeId="your-node-id" />
  );
}
