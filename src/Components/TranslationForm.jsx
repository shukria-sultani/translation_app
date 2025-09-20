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
  const [translatedText, setTranslatedText] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData(prevFormData => ({
      ...prevFormData,
      [name]: value
    }));
  };

  const handleTranslate = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);
    setTranslatedText("");

    try {
      const response = await fetch("https://api.openai.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${import.meta.env.OPEN_API_KEY}`
        },
        body: JSON.stringify({
          model: "gpt-4o-mini", 
          temprature:0.7,
          max_tokens: 1000,

          messages: [
            {
              role: "system",
              content: `Translate the following text to ${formData.language}.`
            },
            {
              role: "user",
              content: formData.text
            }
          ]
        })
      });

      if (!response.ok) {
        throw new Error("Failed to fetch translation from OpenAI.");
      }

      const data = await response.json();
      const newTranslation = data.choices[0].message.content.trim();
      setTranslatedText(newTranslation);

    } catch (err) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="form-container">
      <form onSubmit={handleTranslate} className='translation-form'>
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
          <label className="radio-option">
            <input
              type="radio"
              value="French"
              name="language" 
              onChange={handleInputChange} 
              checked={formData.language === "French"}
            /> 
            French <img src={franceFlag} alt="France Flag" className="flag-icon" />
          </label>
          
          <label className="radio-option">
            <input
              type="radio"
              value="Spanish"
              name="language"
              onChange={handleInputChange} 
              checked={formData.language === "Spanish"}
            /> 
            Spanish <img src={spainFlag} alt="Spain Flag" className="flag-icon" />
          </label>
            
          <label className="radio-option">
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

        <button type="submit" disabled={loading}>
          {loading ? "Translating..." : "Translate"}
        </button>
      </form>

      {translatedText && (
        <div className="translation-result">
          <h3>Translated Text:</h3>
          <p>{translatedText}</p>
        </div>
      )}
      {error && <div className="translation-error">{error}</div>}
    </div>
  );
}
