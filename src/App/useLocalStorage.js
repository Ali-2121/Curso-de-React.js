import React, { useState, useEffect } from "react";

function useLocalStorage(itemName, initialValue){
  const [item, setItem] = React.useState(initialValue);
  const [loading, setLoading] = React.useState(true);
  const [error, setError] = React.useState(false);

  React.useEffect(()=>{
    setTimeout(()=>{
      try{
        const localStorageItem = localStorage.getItem(itemName);
      
      let parsedItem;
      if(!localStorageItem){
        localStorage.setItem(itemName, JSON.stringify(initialValue));
        parsedItem = initialValue;
      }else{
        parsedItem = JSON.parse(localStorageItem);
        setItem(parsedItem);
      }
      setLoading(false);
      }catch(error){
        setLoading(false);
        setError(error);
      }
    },2000);
  },[])
  //Si no le ponemos ese array vacio en este caso, causara un error algo asi como "to many renders"
  //Se crea hasta que se va a revisar a localStorage y se define que lo que exista ahí va a ser el estado inicial del custom hook
  //const [item, setItem] = React.useState(parsedItem);
  
  const saveItem = (newItem)=>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  }

  return {
    item, 
    saveItem,
    loading,
    error
  };
}

export { useLocalStorage }