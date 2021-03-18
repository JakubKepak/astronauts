import { useEffect } from "react";
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
  name: Yup.string().max(30, "Max 30 znaků...").required("Povinné"),
  surname: Yup.string().max(60, "Max 60 znaků...").required("Povinné"),
  birthDate: Yup.string().required("Povinné"),
  superpower: Yup.string().max(60, "Max 60 znaků...").required("Povinné"),
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
  const closeOnEscape = (e: any) => {
    if (e.key === "Escape") {
      setEditDialogActive(false);
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", (e) => closeOnEscape(e));

    return () => {
      window.removeEventListener("keydown", (e) => closeOnEscape(e));
    };
  }, []);

  return (
    <S.MainContainer>
      <S.DialogContainer>
        <S.DialogHeader>
          {variant === "new" && <span>Přidej astronauta</span>}
          {variant === "edit" && <span>Uprav astronauta</span>}
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
              actions.setSubmitting(false);
              saveItem(values);
              actions.resetForm();
            }
            if (variant === "edit") {
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
                label="Jméno"
                value={props.values.name}
              />
              <CustomTextField
                id="surname"
                name="surname"
                type="text"
                label="Příjmení"
                value={props.values.surname}
              />
              <CustomTextField
                id="birthDate"
                name="birthDate"
                type="date"
                label="Datum narození"
                value={props.values.birthDate}
              />
              <CustomTextField
                id="superpower"
                name="superpower"
                type="text"
                label="superschopnost"
                value={props.values.superpower}
              />
              <S.ButtonsContainer>
                <Button
                  type="button"
                  variant="secondary"
                  onClick={() => setEditDialogActive(false)}
                >
                  Chci jít pryč.
                </Button>
                <Button type="submit" variant="primary">
                  Ulož to
                </Button>
              </S.ButtonsContainer>
            </Form>
          )}
        </Formik>
      </S.DialogContainer>
    </S.MainContainer>
  );
}
