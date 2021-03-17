import { useFormik, Formik, Form, Field, FieldArray, useField } from "formik";
import * as Yup from "yup";
import * as S from "./Styles";

const CustomTextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <div>
      <label htmlFor={props.id || props.name}>{label}</label>
      <input error={meta.error} {...field} {...props} />
      {meta.touched && meta.error ? <div>{meta.error}</div> : null}
    </div>
  );
};

const EditSchema = Yup.object().shape({
  name: Yup.string().required("Required"),
  surname: Yup.string().required("Required"),
  birthDate: Yup.string().required("Required"),
  superpower: Yup.string().required("Required"),
});

interface Props {
  variant: "new" | "edit";
  name?: string;
  surname?: string;
  birthDate?: string;
  superpower?: string;
  setEditDialogActive: any;
  saveItem: any;
}

export default function EditAstronaut({
  variant,
  name = "",
  surname = "",
  birthDate = "",
  superpower = "",
  setEditDialogActive,
  saveItem,
}: Props) {
  return (
    <S.MainContainer>
      <S.DialogContainer>
        <Formik
          initialValues={{
            name: "",
            surname: "",
            birthDate: "",
            superpower: "",
          }}
          validationSchema={EditSchema}
          onSubmit={(values, actions) => {
            if (variant === "new") {
              setTimeout(() => {
                alert(`creating - ${JSON.stringify(values, null, 2)}`);
                actions.setSubmitting(false);
                saveItem(values);
              }, 1000);
            }
            if (variant === "edit") {
              setTimeout(() => {
                alert(`editing - ${JSON.stringify(values, null, 2)}`);
                actions.setSubmitting(false);
              }, 1000);
            }
          }}
        >
          {(props) => (
            <Form>
              <CustomTextField
                id="name"
                name="name"
                type="text"
                label="Name"
                value={props.values.name}
              />
              <CustomTextField
                id="surname"
                name="surname"
                type="text"
                label="Surname"
                value={props.values.surname}
              />
              <CustomTextField
                id="birthDate"
                name="birthDate"
                type="text"
                label="birthDate"
                value={props.values.birthDate}
              />
              <CustomTextField
                id="superpower"
                name="superpower"
                type="text"
                label="superpower"
                value={props.values.superpower}
              />
              <button type="submit">Add item</button>
              <button type="button" onClick={() => setEditDialogActive(false)}>
                Close
              </button>
            </Form>
          )}
        </Formik>
      </S.DialogContainer>
    </S.MainContainer>
  );
}
