import { useEffect } from "react";

const ImportScripts = (resourceUrl) => {
  useEffect(() => {
    const script = document.createElement("script");
    script.src = resourceUrl;
    script.type = "text/javascript";
    script.async = true;
    // document.body.appendChild(script);
  }, [resourceUrl]);
};
export default ImportScripts;
