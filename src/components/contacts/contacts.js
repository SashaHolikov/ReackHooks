import React from "react";
import "./contacts.css";
import  Contact from "../contact/contact";
import { useState, useEffect } from "react";


function Contacts({ contacts }) {   
    
    let [startContact, setContact] = useState(contacts);
    let [male, setMale] = useState(false);
    let [female, setFemale] = useState(false);
    let [unKnown, setUnKnown] = useState(false);    
    let [searchText, setSearchTxt] = useState(``);

    function handleSearchChange(event){ 
        setSearchTxt(event.target.value);        
    };    
    function Male() {         
            if (!male) {
                const filterMale = contacts.filter((item) => {
                    return (
                        item.gender === 'male'
                    );
                });
                setContact(filterMale);
                setMale(true);
                setFemale(false);
                setUnKnown(false);
                
        } 
            else if (male) {
                setContact(contacts)
                setMale(false)
        }
    }

    function Female() {   
            if (!female) {
                const filterMale = contacts.filter((item) => {
                    return (
                        item.gender === 'female'
                    );
                });
                setContact(filterMale);
                setFemale(true);
                setMale(false);
                setUnKnown(false);
                
        } 
            else if (female) {
                setContact(contacts)
                setFemale(false)
        }
    }

    function UnKnown() {              
            if (!unKnown) {
                const filterMale = contacts.filter((item) => {
                    return (
                        item.gender === undefined
                    );
                });
                setContact(filterMale);
                setUnKnown(true);
                setFemale(false);
                setMale(false);
        } 
            else if (unKnown) {
                setContact(contacts)
                setUnKnown(false)
        }
    }



    useEffect(()=>{
        const filterContacts = contacts.filter((item) => {            
            return (
                item.lastName.toLowerCase().includes(searchText.toLowerCase()) ||
                item.firstName.toLowerCase().includes(searchText.toLowerCase()) ||
                item.phone.includes(searchText)
             );
        });
        setContact(filterContacts);
    }, [searchText]);
    
   

    return (<nav className='nav conteiner'>
        <input className='nav_input' value={searchText} onChange={handleSearchChange} placeholder="Search"></input>
        <div>
            <button className='button male'  onClick={Male}>M</button>
            <button className='button female' onClick={Female}>F</button>
            <button className='button  unknown' onClick={UnKnown} >U/K</button>            
        </div>
        <>
            {startContact.map(item =><Contact key ={item.id} user ={item}/>)}
        </>
      </nav>)
}
// {stateContacts.map(item => <Contact key={item.id} contact={item}/>)}
export default Contacts