import Api from "../use-axios";

const index = () => {
  return Api().get("questions");
};

export default {
  index,
};
