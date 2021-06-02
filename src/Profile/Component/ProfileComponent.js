import React from 'react'
import PropTypes from 'prop-types';
const heading = {
    fontSize: '40px',
    color: 'red'
}
const FullName = (props) => {
    console.log(props)
    return (
        <div style={{backgroundColor:props.color1}}>
            <h1 style={{color:props.color2,fontSize:props.size}}>My name is {props.title}</h1>
            <h2>I am a {props.Profession}</h2>
            <p style={heading}> My Bio :{props.Bio}</p>
            <h3>My age is {props.age} years old</h3>
            {props.handleName(props.title)}
            <img src ={props.children} />
        </div>
    )
}
FullName.defaultProps = {
    age : 28,
    FullName : 'Mona',
    Profession : 'Textile Engineer'
    
}
FullName.propTypes = {
title: PropTypes.string,
Profession: PropTypes.string,
Bio: PropTypes.string,
age: PropTypes.number,
handleName: PropTypes.func
}
export default FullName
