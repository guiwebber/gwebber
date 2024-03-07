import React, { useEffect } from "react";
// importing aos
import AOS from "aos";
import "aos/dist/aos.css";

function AOSEffect({ data_aos, ...props }) {
  useEffect(() => {
    AOS.init();
  }, []);
  return (
    <div
      data-aos={data_aos} //Here you can use any of the AOS animations
    >
      {props.children}
    </div>
  );
}

export default AOSEffect;
