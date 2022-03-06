import { useEffect, useState } from "react";

export const ViewportWidth = () => {
  const getWindowWidth = () => {
    return window.innerWidth || 0;
  };
  const [width, setWidth] = useState(getWindowWidth());

  useEffect(() => {
    const handleWindowResize = () => setWidth(getWindowWidth());
    window.addEventListener("resize", handleWindowResize);
    return () => window.removeEventListener("resize", handleWindowResize);
  }, []);
  return { width };
};
