import { forwardRef, useState } from "react";
import images from "./../../../../assets/img/index";

const Image = ({ src, alt, ...props }, ref) => {
  const [fallback, setFallback] = useState("");

  const handleError = () => {
    setFallback(images.userDefault);
  };

  return (
    <img
      ref={ref}
      alt={alt}
      {...props}
      src={fallback || src}
      onError={handleError}
    />
  );
};

export default forwardRef(Image);
