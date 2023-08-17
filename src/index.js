import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import uuid4 from 'uuid4';
import reportWebVitals from './reportWebVitals';
import Contacts from './components/contacts/contacts';

const contacts = [{
id:uuid4(),  
firstName: "Барней",
lastName: "Стинсовський",
phone: "+380956319521",
gender: "male"
}, {
id:uuid4(),
firstName: "Робін",
lastName: "Щербатська",
phone: "+380931460123",
gender: "female"
  }, {
id:uuid4(),  
firstName: "Анонімний",
lastName: "Анонімус",
phone: "+380666666666"
  }, {
id:uuid4(),  
firstName: "Лілія",
lastName: "Олдровна",
phone: "+380504691254",
gender: "female"
  }, {
id:uuid4(),  
firstName: "Маршен",
lastName: "Еріксонян",
phone: "+380739432123",
gender: "male"
  }, {
id:uuid4(),  
firstName: "Теодор",
lastName: "Мотсбес",
phone: "+380956319521",
gender: "male"
}];

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Contacts contacts={contacts} />   
    
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
