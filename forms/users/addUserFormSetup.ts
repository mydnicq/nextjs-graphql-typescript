import { Form } from "mobx-react-form";
import validatorjs from "validatorjs";

export default class AddUserForm extends Form {
  mutation;
  /*
      Below we are returning a `plugins` object using the `validatorjs` package
      to enable `DVR` functionalities (Declarative Validation Rules).
    */
  plugins() {
    return { dvr: validatorjs };
  }

  /*
      Return the `fields` as a collection into the `setup()` method
      with a `rules` property for the validation.
    */
  setup() {
    return {
      fields: [
        {
          name: "name",
          label: "Name",
          placeholder: "Insert Name",
          rules: "required|string|between:5,25"
        }
      ]
    };
  }

  /*
      Event Hooks
    */
  hooks() {
    return {
      /*
          Success Validation Hook
        */
      onSuccess(form) {
        this.mutation({ variables: { data: { ...form.values() } } });
      },
      /*
          Error Validation Hook
        */
      onError(form) {
        // get all form errors
        console.log("All form errors", form.errors());
      }
    };
  }
}
