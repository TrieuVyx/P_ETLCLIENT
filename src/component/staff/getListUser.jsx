import Axios from "axios"

export default async function getListUser() {
    try {
        const tokenAccess = localStorage.getItem("accessToken")
        
        const data = await Axios({
            method: "GET",
            url: "http://localhost:8081/api/user/getUserList",
            headers: {
                "Authorization": `Bearer ${tokenAccess}`
            }
        }).catch(err=>{
            window.location = '/login'
            console.log("ERR")
        })
        const dataPromise = await data
        return dataPromise
    }
    catch (err) {
        console.log("ERR")
    }
}

         
         
// .then(function (response) {
//     console.log(response.data)
//     // return response.data
// })
// .catch(function (error) {
//     console.log(error);
// });
