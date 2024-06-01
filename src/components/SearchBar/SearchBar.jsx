import css from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validSchema } from "../../helpers";
import toast, { Toaster } from "react-hot-toast";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (initialValues, actions) => {
    actions.resetForm();
    !initialValues.searchValue && toast("Need to add search word!");
    onSearch(initialValues.searchValue);
  };

  const initialValues = { searchValue: "" };
  return (
    <header>
      <Formik
        initialValues={initialValues}
        validationSchema={validSchema}
        onSubmit={handleSubmit}
      >
        <Form className={css.searchForm}>
          <Field
            name="searchValue"
            type="text"
            autoComplete="off"
            autoFocus
            placeholder="Search images and photos"
          />

          <button className={css.searchBtn} type="submit">
            <FcSearch className="svgSearchBtn" size="30" />
          </button>
          <div className={css.errorWrap}>
            <ErrorMessage
              className={css.error}
              name="searchValue"
              component="span"
            />
            <Toaster
              toastOptions={{
                className: "",
                style: {
                  border: "1px solid #713200",
                  padding: "16px",
                  color: "red",
                },
              }}
              containerStyle={{
                top: 110,
              }}
            />
          </div>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
