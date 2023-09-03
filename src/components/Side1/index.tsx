import Cashback from "../Cashback";
import Blog from "../Blog";
import Notizen from "../Notizen";

const index = () => {
  return (
    <div className="flex flex-col gap-6 flex-1">
      <Cashback />
      <Blog />
      <Notizen />
    </div>
  );
};

export default index;
