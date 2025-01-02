import { WebRenderer } from "@orgwarec/render-config";
import { useEffect, useState } from "react";

export default function WebBuilder() {
  const [data, setData] = useState();
  useEffect(() => {
    const possibleData = localStorage.getItem("json_data");
    if (possibleData) {
      setData(JSON.parse(possibleData));
    }
  }, []);
  if (!data) {
    return <div>Loading...</div>;
  }
  return <WebRenderer initialData={data} />;
}
