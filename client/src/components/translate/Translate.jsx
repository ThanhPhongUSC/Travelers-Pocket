import React, {useState} from 'react';
import Dropdown from './Dropdown.jsx'
import options from './Options.jsx'
import Output from './Output.jsx'
// AIzaSyCHUCmpR7cT_yDFHC98CZJy2LTms-IwDlM
// const options = [
//   {
//     label: 'Afrikaans',
//     value: 'af'
//   },
//   {
//     label: 'Arabic',
//     value: 'ar'
//   },
//   {
//     label: 'Hindi',
//     value: 'hi'
//   }
// ];

const Translate = () => {
  const [language, setLanguage] = useState(options[0]);
  const [text, setText] = useState('');
  return (
    <div>
      <div className="ui form">
        <div className="field">
          <label>Enter Text</label>
          <input value={text} onChange={(e) => setText(e.target.value)}/>
        </div>
      </div>
      <Dropdown
        selected={language}
        onSelectedChange={setLanguage}
        options={options}
      />
      <hr/>
      <h3 className="ui header">Output</h3>
      <Output text={text} language={language}/>
      <hr/>
      <img height="300" width="600" src='https://adigaskell.org/wp-content/uploads/2018/09/machine-translation.jpg'/>
    </div>
  );
};

export default Translate;
