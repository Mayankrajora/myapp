import React from 'react'

let arr = [{name : "Mayank" , age : 21},
            {name : "Rajora",age : 30}
        ];

export default function Demo22() {
   
        return(
            arr.map(
                (obj) => {
                    return(
                        <>
                            <p>Your name is {obj.name} and your age is{obj.age}</p>
                        
                        </>
                    );
                }
            )
        );
}
