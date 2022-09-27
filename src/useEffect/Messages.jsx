import { useEffect } from "react"

export const Messages = () => {
  useEffect(() => {
    window.addEventListener("mousemove", (event) => {
      console.log(event);
    });

    return () => {
      console.log("Message Unmounted");
    };
  }, []);

  return (
    <>
      <h3>Usuario ya existe</h3>
    </>
  );
}
