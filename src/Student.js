import React from "react";

class Student extends React.Component{
    render(){
        console.log(this.props);
        const {stuname,marks}=this.props;//destructuring
        return(
            <>
            <h1>Hello,{stuname}</h1>
            <p>You have score the marks {marks}</p>
            </>
        )
    }
}
export default Student;

//Props in functional component

// function Student(props){
//     const {stuname,marks}=props;
//     return(
//         <>
//         <h1>Hello,{stuname}</h1>
//         <p>You have secured {marks}</p>
//         <hr/>
//         </>
//     )
// }
// export default Student;