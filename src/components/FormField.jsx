import React from 'react';

const FormField = (props) => {
  const { name, label, placeholder, type } = props
  return (
    <div className="flex flex-col max-w-sm mx-auto gap-2 mt-4">
      <label htmlFor={name} className="text-center font-semibold text-xl">{label}</label>
      <input type={type} placeholder={placeholder} id={name} name={name} className="border-2 border-slate-400 text-center font-semibold text-xl placeholder:text-sm"/>
    </div>
  );
};

export default FormField;