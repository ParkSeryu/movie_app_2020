import React, {useState, useEffect} from 'react';

function Detail(props){

  useEffect( () => {
    const { location, history } = props
    if(location.state === undefined){
      history.push('/');
    }
  });
  console.log(props.location);

  if(props.location.state !== undefined){
    const location = props.location.state.title
  return (
    <>
    {console.log("location" + location)}
    <span>{location}</span>    
    </>
  );
  }else{
    return null;
  }
}
export default Detail;
