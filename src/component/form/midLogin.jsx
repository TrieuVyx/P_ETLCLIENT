import Axios from "axios"
import CheckError from "./checkError";
export default async function MidLogin(email, passWord) {
  try {
    const data = { email: email, passWord: passWord }
    await Axios({
      method: "POST",
      url: "http://localhost:8081/api/auth/login",
      data: data
    })
      .then(function (response) {
        const Token = response.data.accessToken
        const RefreshToken = response.data.refreshToken
        localStorage.setItem("accessToken", Token)
        localStorage.setItem("refreshToken", RefreshToken)
        window.location = "/"
      })
      .catch(function (error) {
        CheckError(email,passWord);
        console.log("ERR");
      });
  }
  catch (err) {
    console.log("ERR")
  }
}