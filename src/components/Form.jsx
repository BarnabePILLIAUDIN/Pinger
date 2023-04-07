import React from 'react';
import FormField from './FormField';

const Form = (props) => {
  const { formData, action, method, submitInputValue,onClick } = props
  return (
    <div>
      <form action={action} method={method} >
        {
          formData.map(({ name, label, placeholder, type }, key) => {
            return (
              <FormField key={key} name={name} label={label} placeholder={placeholder} type={type}></FormField>
              )
          })
        }
        <div className="text-center">
          <input type="submit" value={ submitInputValue} className="bg-blue-400 text-white px-4 py-2 ml-64 mt-3" onClick={onClick}/>
        </div>
      </form>
    </div>
  );
};

export default Form;