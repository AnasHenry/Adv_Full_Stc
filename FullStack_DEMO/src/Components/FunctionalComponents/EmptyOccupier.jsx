import "./../../assets/NavBar.css";
import { Link } from "react-router-dom";

const EmptyOccupier = () => {
  return <div className='mt-box'>
    <h3 className="heading"> <Link to={"/effect"}>Hooks</Link>  </h3>
    <h3 className="heading"> <Link to={"/effect2"}>UseEffect2</Link></h3>
    <h3 className="heading"> <Link to={"/imgeffect"}>UseEffect Images</Link></h3>
    <h3 className="heading"> <Link to={"/ref"}>UseRef</Link></h3>
    <h3 className="heading"> <Link to={"/refnum"}>UseRefNumber</Link></h3>
    <h3 className="heading"> <Link to={"/context"}>UseContext</Link></h3>    
    <h3 className="heading"> <Link to={"/memo"}>UseMeme</Link></h3>
  </div>;
};
export default EmptyOccupier;
