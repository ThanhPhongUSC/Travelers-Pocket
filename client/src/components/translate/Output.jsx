import React, {useState, useEffect} from 'react';
import axios from 'axios';

const Output = ({text, language}) => {
  const [translated, setTranslated] = useState('');
  const [debouncedText, setDebouncedText] = useState(text);
  useEffect(() => {
    const timerId = setTimeout(() => {
      setDebouncedText(text);
    }, 500)
    return () => {
      clearTimeout(timerId);
    };
  }, [text])

  useEffect (() => {
    const getTranslate = async () => {
      const {data} = await axios.post('/translate', {}, {
        params: {
          q: debouncedText,
          target: language.value,
        }
      });
      console.log(debouncedText)
      console.log(language.value);
      console.log(data);
      setTranslated(data.data.translations[0].translatedText)
    }
    getTranslate();
  }, [debouncedText, language]);
  // useEffect (() => {
  //   const getTranslate = async () => {
  //     const {data} = await axios.post('https://translation.googleapis.com/language/translate/v2', {}, {
  //       params: {
  //         q: debouncedText,
  //         target: language.value,
  //         key: 'AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM',
  //       }
  //     });
  //     console.log(debouncedText)
  //     console.log(language.value);
  //     console.log(data);
  //     setTranslated(data.data.translations[0].translatedText)
  //   }
  //   getTranslate();
  // }, [debouncedText, language]);

return (
  <div>
    <h1 className="ui header">{translated}</h1>
  </div>
);
};
export default Output;