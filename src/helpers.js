import * as Yup from "yup";

export const customStyles = {
  overlay: {
    backgroundColor: "gray",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    // backgroundColor: "black",
  },
  quote: {
    height: "200px",
  },
};

export const threeDotsStyles = {
  visible: true,
  height: "80",
  width: "80",
  color: "#4fa94d",
  radius: "9",
  ariaLabel: "three-dots-loading",
  wrapperClass: "",
};

export const validSchema = Yup.object().shape({
  searchValue: Yup.string().min(3, "Too short!").max(20, "Too long!"),
});
