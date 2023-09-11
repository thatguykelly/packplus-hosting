/***************************************************************************
 * The contents of this file were generated with Amplify Studio.           *
 * Please refrain from making any modifications to this file.              *
 * Any changes to this file will be overwritten when running amplify pull. *
 **************************************************************************/

/* eslint-disable */
import * as React from "react";
import { Button, Flex, Grid, TextField } from "@aws-amplify/ui-react";
import { getOverrideProps } from "@aws-amplify/ui-react/internal";
import { fetchByPath, validateField } from "./utils";
import { API } from "aws-amplify";
import { createNote } from "../graphql/mutations";
export default function NoteCreateForm(props) {
  const {
    clearOnSuccess = true,
    onSuccess,
    onError,
    onSubmit,
    onValidate,
    onChange,
    overrides,
    ...rest
  } = props;
  const initialValues = {
    name: "",
    item: "",
    description: "",
    sizel: "",
    sizew: "",
    sizeh: "",
    count: "",
    weight: "",
    location: "",
    zipcode: "",
  };
  const [name, setName] = React.useState(initialValues.name);
  const [item, setItem] = React.useState(initialValues.item);
  const [description, setDescription] = React.useState(
    initialValues.description
  );
  const [sizel, setSizel] = React.useState(initialValues.sizel);
  const [sizew, setSizew] = React.useState(initialValues.sizew);
  const [sizeh, setSizeh] = React.useState(initialValues.sizeh);
  const [count, setCount] = React.useState(initialValues.count);
  const [weight, setWeight] = React.useState(initialValues.weight);
  const [location, setLocation] = React.useState(initialValues.location);
  const [zipcode, setZipcode] = React.useState(initialValues.zipcode);
  const [errors, setErrors] = React.useState({});
  const resetStateValues = () => {
    setName(initialValues.name);
    setItem(initialValues.item);
    setDescription(initialValues.description);
    setSizel(initialValues.sizel);
    setSizew(initialValues.sizew);
    setSizeh(initialValues.sizeh);
    setCount(initialValues.count);
    setWeight(initialValues.weight);
    setLocation(initialValues.location);
    setZipcode(initialValues.zipcode);
    setErrors({});
  };
  const validations = {
    name: [{ type: "Required" }],
    item: [{ type: "Required" }],
    description: [{ type: "Required" }],
    sizel: [{ type: "Required" }],
    sizew: [{ type: "Required" }],
    sizeh: [{ type: "Required" }],
    count: [{ type: "Required" }],
    weight: [{ type: "Required" }],
    location: [{ type: "Required" }],
    zipcode: [{ type: "Required" }],
  };
  const runValidationTasks = async (
    fieldName,
    currentValue,
    getDisplayValue
  ) => {
    const value =
      currentValue && getDisplayValue
        ? getDisplayValue(currentValue)
        : currentValue;
    let validationResponse = validateField(value, validations[fieldName]);
    const customValidator = fetchByPath(onValidate, fieldName);
    if (customValidator) {
      validationResponse = await customValidator(value, validationResponse);
    }
    setErrors((errors) => ({ ...errors, [fieldName]: validationResponse }));
    return validationResponse;
  };
  return (
    <Grid
      as="form"
      rowGap="15px"
      columnGap="15px"
      padding="20px"
      onSubmit={async (event) => {
        event.preventDefault();
        let modelFields = {
          name,
          item,
          description,
          sizel,
          sizew,
          sizeh,
          count,
          weight,
          location,
          zipcode,
        };
        const validationResponses = await Promise.all(
          Object.keys(validations).reduce((promises, fieldName) => {
            if (Array.isArray(modelFields[fieldName])) {
              promises.push(
                ...modelFields[fieldName].map((item) =>
                  runValidationTasks(fieldName, item)
                )
              );
              return promises;
            }
            promises.push(
              runValidationTasks(fieldName, modelFields[fieldName])
            );
            return promises;
          }, [])
        );
        if (validationResponses.some((r) => r.hasError)) {
          return;
        }
        if (onSubmit) {
          modelFields = onSubmit(modelFields);
        }
        try {
          Object.entries(modelFields).forEach(([key, value]) => {
            if (typeof value === "string" && value === "") {
              modelFields[key] = null;
            }
          });
          await API.graphql({
            query: createNote,
            variables: {
              input: {
                ...modelFields,
              },
            },
          });
          if (onSuccess) {
            onSuccess(modelFields);
          }
          if (clearOnSuccess) {
            resetStateValues();
          }
        } catch (err) {
          if (onError) {
            const messages = err.errors.map((e) => e.message).join("\n");
            onError(modelFields, messages);
          }
        }
      }}
      {...getOverrideProps(overrides, "NoteCreateForm")}
      {...rest}
    >
      <TextField
        label="Name"
        isRequired={true}
        isReadOnly={false}
        value={name}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name: value,
              item,
              description,
              sizel,
              sizew,
              sizeh,
              count,
              weight,
              location,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.name ?? value;
          }
          if (errors.name?.hasError) {
            runValidationTasks("name", value);
          }
          setName(value);
        }}
        onBlur={() => runValidationTasks("name", name)}
        errorMessage={errors.name?.errorMessage}
        hasError={errors.name?.hasError}
        {...getOverrideProps(overrides, "name")}
      ></TextField>
      <TextField
        label="Item"
        isRequired={true}
        isReadOnly={false}
        value={item}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              item: value,
              description,
              sizel,
              sizew,
              sizeh,
              count,
              weight,
              location,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.item ?? value;
          }
          if (errors.item?.hasError) {
            runValidationTasks("item", value);
          }
          setItem(value);
        }}
        onBlur={() => runValidationTasks("item", item)}
        errorMessage={errors.item?.errorMessage}
        hasError={errors.item?.hasError}
        {...getOverrideProps(overrides, "item")}
      ></TextField>
      <TextField
        label="Description"
        isRequired={true}
        isReadOnly={false}
        value={description}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              item,
              description: value,
              sizel,
              sizew,
              sizeh,
              count,
              weight,
              location,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.description ?? value;
          }
          if (errors.description?.hasError) {
            runValidationTasks("description", value);
          }
          setDescription(value);
        }}
        onBlur={() => runValidationTasks("description", description)}
        errorMessage={errors.description?.errorMessage}
        hasError={errors.description?.hasError}
        {...getOverrideProps(overrides, "description")}
      ></TextField>
      <TextField
        label="Sizel"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={sizel}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              item,
              description,
              sizel: value,
              sizew,
              sizeh,
              count,
              weight,
              location,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.sizel ?? value;
          }
          if (errors.sizel?.hasError) {
            runValidationTasks("sizel", value);
          }
          setSizel(value);
        }}
        onBlur={() => runValidationTasks("sizel", sizel)}
        errorMessage={errors.sizel?.errorMessage}
        hasError={errors.sizel?.hasError}
        {...getOverrideProps(overrides, "sizel")}
      ></TextField>
      <TextField
        label="Sizew"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={sizew}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              item,
              description,
              sizel,
              sizew: value,
              sizeh,
              count,
              weight,
              location,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.sizew ?? value;
          }
          if (errors.sizew?.hasError) {
            runValidationTasks("sizew", value);
          }
          setSizew(value);
        }}
        onBlur={() => runValidationTasks("sizew", sizew)}
        errorMessage={errors.sizew?.errorMessage}
        hasError={errors.sizew?.hasError}
        {...getOverrideProps(overrides, "sizew")}
      ></TextField>
      <TextField
        label="Sizeh"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={sizeh}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              item,
              description,
              sizel,
              sizew,
              sizeh: value,
              count,
              weight,
              location,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.sizeh ?? value;
          }
          if (errors.sizeh?.hasError) {
            runValidationTasks("sizeh", value);
          }
          setSizeh(value);
        }}
        onBlur={() => runValidationTasks("sizeh", sizeh)}
        errorMessage={errors.sizeh?.errorMessage}
        hasError={errors.sizeh?.hasError}
        {...getOverrideProps(overrides, "sizeh")}
      ></TextField>
      <TextField
        label="Count"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={count}
        onChange={(e) => {
          let value = isNaN(parseInt(e.target.value))
            ? e.target.value
            : parseInt(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              item,
              description,
              sizel,
              sizew,
              sizeh,
              count: value,
              weight,
              location,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.count ?? value;
          }
          if (errors.count?.hasError) {
            runValidationTasks("count", value);
          }
          setCount(value);
        }}
        onBlur={() => runValidationTasks("count", count)}
        errorMessage={errors.count?.errorMessage}
        hasError={errors.count?.hasError}
        {...getOverrideProps(overrides, "count")}
      ></TextField>
      <TextField
        label="Weight"
        isRequired={true}
        isReadOnly={false}
        type="number"
        step="any"
        value={weight}
        onChange={(e) => {
          let value = isNaN(parseFloat(e.target.value))
            ? e.target.value
            : parseFloat(e.target.value);
          if (onChange) {
            const modelFields = {
              name,
              item,
              description,
              sizel,
              sizew,
              sizeh,
              count,
              weight: value,
              location,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.weight ?? value;
          }
          if (errors.weight?.hasError) {
            runValidationTasks("weight", value);
          }
          setWeight(value);
        }}
        onBlur={() => runValidationTasks("weight", weight)}
        errorMessage={errors.weight?.errorMessage}
        hasError={errors.weight?.hasError}
        {...getOverrideProps(overrides, "weight")}
      ></TextField>
      <TextField
        label="Location"
        isRequired={true}
        isReadOnly={false}
        value={location}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              item,
              description,
              sizel,
              sizew,
              sizeh,
              count,
              weight,
              location: value,
              zipcode,
            };
            const result = onChange(modelFields);
            value = result?.location ?? value;
          }
          if (errors.location?.hasError) {
            runValidationTasks("location", value);
          }
          setLocation(value);
        }}
        onBlur={() => runValidationTasks("location", location)}
        errorMessage={errors.location?.errorMessage}
        hasError={errors.location?.hasError}
        {...getOverrideProps(overrides, "location")}
      ></TextField>
      <TextField
        label="Zipcode"
        isRequired={true}
        isReadOnly={false}
        value={zipcode}
        onChange={(e) => {
          let { value } = e.target;
          if (onChange) {
            const modelFields = {
              name,
              item,
              description,
              sizel,
              sizew,
              sizeh,
              count,
              weight,
              location,
              zipcode: value,
            };
            const result = onChange(modelFields);
            value = result?.zipcode ?? value;
          }
          if (errors.zipcode?.hasError) {
            runValidationTasks("zipcode", value);
          }
          setZipcode(value);
        }}
        onBlur={() => runValidationTasks("zipcode", zipcode)}
        errorMessage={errors.zipcode?.errorMessage}
        hasError={errors.zipcode?.hasError}
        {...getOverrideProps(overrides, "zipcode")}
      ></TextField>
      <Flex
        justifyContent="space-between"
        {...getOverrideProps(overrides, "CTAFlex")}
      >
        <Button
          children="Clear"
          type="reset"
          onClick={(event) => {
            event.preventDefault();
            resetStateValues();
          }}
          {...getOverrideProps(overrides, "ClearButton")}
        ></Button>
        <Flex
          gap="15px"
          {...getOverrideProps(overrides, "RightAlignCTASubFlex")}
        >
          <Button
            children="Submit"
            type="submit"
            variation="primary"
            isDisabled={Object.values(errors).some((e) => e?.hasError)}
            {...getOverrideProps(overrides, "SubmitButton")}
          ></Button>
        </Flex>
      </Flex>
    </Grid>
  );
}
