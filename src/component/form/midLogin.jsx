import axios from "axios"
export default async function MidLogin (email,password){
    try{
        const data= {email:email,password:password}
        await (await axios.post("http://localhost:8081/login", data)).then((response) => {
            console.log(response)
            localStorage.setItem("token_id", response.data?.token)
            
        })
        // window.location.href ='/'
    }
    catch(err){

    }
}