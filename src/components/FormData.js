import React from 'react'
import {Field,reduxForm} from 'redux-form'
import './FormData.css'

const validate = values => {
    const errors = {}
    if (!values.firstName) {
        errors.firstName = 'Please enter Associate Name'
    } else if (values.firstName.length < 5) {
        errors.firstName = 'Minimum 5 characters or less that 30 char'
    }

    if (!values.lastName || !/^[0-9]+$/.test(values.lastName)) {
        errors.lastName = 'Please enter Associate ID'
    } else if (values.lastName.length !== 6) {
        errors.lastName = '6 Characters expexted'
    }

    if (!values.id ) {
        errors.id = "Please enter Project ID";
    } else if (values.id !== 12) {
        errors.id = "Need 12"
    }

    if (!values.comments) {
        errors.comments = "Please enter comment";
    }
    return errors
}

const renderField = ({ input, label, type, meta: { touched, error, warning } }) => (
    <div>
        <label className="control-label">{label}</label>
        <div>
            <input {...input} placeholder={label} type={type} className="form-control" />
            {touched && ((error && <span className="text-danger">{error}</span>) || (warning && <span>{warning}</span>))}
        </div>
    </div>
)
let FormData =(props)=> {
   // const { handleSubmit, pristine, submitting } = props;
  return (
          <form>
              <div className="form-group">
              <Field name="firstName" component={renderField} label="Associate Name" />
              </div>
              <div className="form-group">
                  <Field name="lastName" component={renderField} label="Associate ID" />
              </div>
          <div className="form-group">
              <Field name="id" component={renderField} label="Id" />
          </div>

          <div className="form-group">
              <Field name="location" component="select" label={"location"}>
                  <option></option>
                  <option value="#ff0000">Red</option>
                  <option value="#00ff00">Green</option>
                  <option value="#0000ff">Blue</option>
              </Field>
          </div>
              
          <div className="form-group">
              <Field name="comments" component={renderField} label="Comment"></Field>
          </div>

          <div>
              <Field name="attachment" component="input" type="file" />
          </div>
          
          <div className='form-group'>
              <div className='btn'>
                  <button type="submit" className="btn btn-primary">Submit</button>
                  <button type="submit" className="btn btn-danger">Reset</button>
              </div>
          </div>
          
          </form>
  )
}

FormData = reduxForm({
    form: 'contact',
    validate
})(FormData);
export default FormData