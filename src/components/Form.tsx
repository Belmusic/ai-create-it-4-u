import React from 'react';
import { FormData } from '../types/types';

interface FormDisplayProps {
  formData: FormData | null; // Prop interface specifying formData as FormData or null
}

const FormDisplay: React.FC<FormDisplayProps> = ({ formData }) => {
  if (!formData) {
    return null; // If formData is null, return nothing
  }

  return (
    <div className='form-display'>
      <h2>{formData.title}</h2> {/* Displaying the title from formData */}
      <form>
        {/* Mapping through fields array in formData to render each field */}
        {formData.fields.map((field, index) => (
          <div key={index}>
            <label htmlFor={field.id}>{field.label}</label>{' '}
            {/* Displaying field label */}
            {/* Rendering textarea or input based on field type */}
            {field.type === 'textarea' ? (
              <textarea
                id={field.id}
                required={field.required}
                placeholder={`Enter your ${field.label}`}
              />
            ) : (
              <input
                type={field.type}
                id={field.id}
                required={field.required}
                placeholder={`Enter your ${field.label}`}
              />
            )}
          </div>
        ))}
      </form>
    </div>
  );
};

export default FormDisplay;
