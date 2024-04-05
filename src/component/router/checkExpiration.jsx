import Axios from "axios";
import { toast } from 'react-hot-toast'
import ReloadRouter from "./routerReloadConfig";
export default async function checkExpiration(refreshToken, tokenAccess) {
    try {
        await Axios({
            method: "GET",
            url: "http://localhost:8081/api/user/getUserList",
            headers: {
                "Authorization": `Bearer ${tokenAccess}`
            }
        }).catch((err) => {
            toast.error("Expired JWT token")
            getRefreshToken(refreshToken)
            console.log("ERR")
        })
    }
    catch (err) {
        console.log("ERR")
    }
}

const getRefreshToken = async (refreshToken) => {

    try {
        
        window.onunload = function() {
            ReloadRouter();
        };
        await Axios({
            method: "POST",
            url: "http://localhost:8081/api/auth/refreshToken",
            data: {
                "refreshToken": `${refreshToken}`
            }
        }).then((response) => {
            console.log(response)
        })
            .catch(function (error) {
                console.log("ERR");
            });
    }
    catch (err) {
        console.log("ERR")
    }
}