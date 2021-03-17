import { Formik, Form, useField } from "formik";
import * as Yup from "yup";
import * as S from "./Styles";

import Button from "../UI/Button";

const CustomTextField = ({ label, ...props }: any) => {
  const [field, meta] = useField(props);

  return (
    <S.InputFieldContainer>
      <S.InputLabelContainer>
        <S.Label htmlFor={props.id || props.name}>{label}</S.Label>
        {meta.touched && meta.error ? (
          <S.ErrorMessage>{meta.error}</S.ErrorMessage>
        ) : null}
      </S.InputLabelContainer>
      <S.InputField error={meta.error} {...field} {...props} />
    </S.InputFieldContainer>
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
  id?: string;
}

export default function EditAstronaut({
  variant,
  name = "",
  surname = "",
  birthDate = "",
  superpower = "",
  setEditDialogActive,
  saveItem,
  id = "",
}: Props) {
  return (
    <S.MainContainer>
      <S.DialogContainer>
        <S.DialogHeader>
          {variant === "new" && <span>Add a new Astronaut</span>}
          {variant === "edit" && <span>Edit Astronaut</span>}
        </S.DialogHeader>
        <Formik
          initialValues={{
            name: name || "",
            surname: surname || "",
            birthDate: birthDate || "",
            superpower: superpower || "",
          }}
          validationSchema={EditSchema}
          onSubmit={(values, actions) => {
            if (variant === "new") {
              alert(`creating - ${JSON.stringify(values, null, 2)}`);
              actions.setSubmitting(false);
              saveItem(values);
            }
            if (variant === "edit") {
              alert(`editing - ${JSON.stringify(values, null, 2)}`);
              actions.setSubmitting(false);
              saveItem(id, values);
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
              <S.ButtonsContainer>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setEditDialogActive(false)}
                >
                  Drop it
                </Button>
                <Button type="submit" variant="primary">
                  Save & Close
                </Button>
              </S.ButtonsContainer>
            </Form>
          )}
        </Formik>
      </S.DialogContainer>
    </S.MainContainer>
  );
}
