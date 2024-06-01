import css from "./SearchBar.module.css";
import { FcSearch } from "react-icons/fc";
import { Formik, Form, Field, ErrorMessage } from "formik";
import { validSchema } from "../../helpers";

export const SearchBar = ({ onSearch }) => {
  const handleSubmit = (initialValues, actions) => {
    actions.resetForm();
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

          <button className={css.searchBtn}>
            <FcSearch className="svgSearchBtn" size="30" />
          </button>
          <div className={css.errorWrap}>
            <ErrorMessage
              className={css.error}
              name="searchValue"
              component="span"
            />
          </div>
        </Form>
      </Formik>
    </header>
  );
};

export default SearchBar;
