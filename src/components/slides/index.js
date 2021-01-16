import React from "react";
/**
 * 
 * @param {*} prop 
 */
function Slide(prop) {
    console.log(prop);
  const {id, name } = prop.content;
  return <div className="slide">{id}/{name}</div>;
}
/**
 *
 * @param {*} props
 * @type object, array
 * @description - data used to create slideshow
 */
function Slides(props) {
  const data = props.data;
  return (
    <React.Fragment>
        {data.map((content)=>{
            return <Slide content={content}></Slide>;
        })}
    </React.Fragment>
  );
}

export default Slides;
