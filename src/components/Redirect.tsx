import { useNavigate } from "react-router-dom";
import { useEffect } from "react";

const Redirect = () => {
  const navigate = useNavigate();
  useEffect(() => navigate("/rooms"), []);
  return <div></div>;
};

export default Redirect;
