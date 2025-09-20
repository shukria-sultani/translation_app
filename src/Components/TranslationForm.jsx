import React, { useState } from 'react';

// flags
import franceFlag from "../assets/images/fr.png";
import spainFlag from "../assets/images/sp.png";
import japanFlag from "../assets/images/jp.png";

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

        <label>Select Language 👇</label>
        <div className='languages'>

          <label className="radio-option" style={{color: "#333333"}}>
            <input
              type="radio"
              value="French"
              name="language" 
              onChange={handleInputChange} 
              checked={formData.language === "French"}
            /> 
            French <img src={franceFlag} alt="France Flag" className="flag-icon" />
          </label>
          

          <label className="radio-option" style={{color: "#333333"}}>
            <input
              type="radio"
              value="Spanish"
              name="language"
              onChange={handleInputChange} 
              checked={formData.language === "Spanish"}
            /> 
            Spanish <img src={spainFlag} alt="Spain Flag" className="flag-icon" />
          </label>
            
 
          <label className="radio-option" style={{color: "#333333"}}>
            <input
              type="radio"
              value="Japanese"
              name="language" 
              onChange={handleInputChange} 
              checked={formData.language === "Japanese"}
            /> 
            Japanese <img src={japanFlag} alt="Japan Flag" className="flag-icon" />
          </label>
        </div>

        <button type="submit">Translate</button>
      </form>
    </div>
  );
}
