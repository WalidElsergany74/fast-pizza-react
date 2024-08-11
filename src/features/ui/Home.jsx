import { useSelector } from "react-redux";
import CreateUser from "../user/CreateUser"
import Button from "./Button";
function Home() {
  const userName = useSelector((state) => state.user.username)
  return (
    <div className="my-10 px-4 sm:my-16 text-center">
      <h1 className="text-xl  font-semibold mb-8 text-stone-700 uppercase md:text-3xl">
        The best pizza.
        <br />
        <span className="text-yellow-500">
          Straight out of the oven, straight to you.
        </span>
       
      </h1>

      {userName === "" ? <CreateUser/> : <Button to="/menu" type="primary">Continue Ordering , {userName}</Button>}
    </div>
  );
}

export default Home;
