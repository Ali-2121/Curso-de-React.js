import React from "react";

function useLocalStorage(itemName, initialValue){
  const localStorageItem = localStorage.getItem(itemName);
  
  let parsedItem;
  
  if(!localStorageItem){
    localStorage.setItem(itemName, JSON.stringify(initialValue));
    parsedItem = initialValue;
  }else{
    parsedItem = JSON.parse(localStorageItem);
  }

  //Se crea hasta que se va a revisar a localStorage y se define que lo que exista ahí va a ser el estado inicial del custom hook
  const [item, setItem] = React.useState(parsedItem);
  
  const saveItem = (newItem)=>{
    localStorage.setItem(itemName, JSON.stringify(newItem))
    setItem(newItem);
  }

  return [item, saveItem];
}

export { useLocalStorage }