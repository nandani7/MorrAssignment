// import Title from "../components/Title";
// import {useEffect,useState} from "react"


// export default function Series(){
  
//   const [data, setData] = useState(null);
//   const [isloading, setLoading] = useState(true);
//   const [error, setError] = useState(null);

//   useEffect(()=>{
//       fetch("../../public/assets/data.json", {
//           method: "GET",
//           headers: {
//             "Content-Type": "application/json"
//           },
//           credentials: "same-origin"
//       })
//       .then(response => {
//           if (response.ok) {
//             return response;
//           } else {
//             var error = new Error('Error ' + response.status + ': ' + response.statusText);
//             error.response = response;
//             throw error;
//           }
//         })
//       .then(response => response.json())
//       .then(response => { console.log(response)
//         setData(response)
//       })
//       .finally(()=> setLoading(false))
//       .catch(error =>  { setError(error.message); });
//   })
  
//     return(
//         <div>
//             <Title title="Popular Series"/>
            
//         </div>
//     );
// }