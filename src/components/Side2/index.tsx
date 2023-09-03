import Bookmarks from "../Bookmarks";
import Apps from "../Apps";
import Address from "../Address";
import Search from "../Search";
import Pages from "../Pages";
import App from "../../App";

const index = () => {
  return (
    <div className="flex flex-col gap-6 flex-1">
      <Bookmarks />
      <Apps />
      <Address />
      <Search />
      <Pages />
      <App />
    </div>
  );
};

export default index;
