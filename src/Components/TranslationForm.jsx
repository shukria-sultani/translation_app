import React, { useState } from 'react';

export default function TranslationForm() {
  const [formData, setFormData] = useState({
    language: "French",
    text: ""
  });
  
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  return (
    <div className="form-container">
      <form action="" className='translation-form'>
        <label htmlFor="text">Text to translate 👇</label>
        <textarea
          id="text"
          name="text"
          spellCheck
          value={formData.text}
          onChange={handleInputChange}>
        </textarea>

        <label>Select Language</label>
        <div className='languages'>
          <input
            type="radio"
            value="French"
            name="language" 
            onChange={handleInputChange} 
            checked={formData.language === "French"}
          /> 
         French 🇫🇷  
          <input
            type="radio"
            value="Spanish"
            name="language"
            onChange={handleInputChange} 
            checked={formData.language === "Spanish"}
          /> 
           Spanish 🇪🇸  
          <input
            type="radio"
            value="Japanese"
            name="language" 
            onChange={handleInputChange} 
            checked={formData.language === "Japanese"}
          /> 
           Japanese 🇯🇵
        </div>

        <button type="submit">Translate</button>
      </form>
    </div>
  );
}