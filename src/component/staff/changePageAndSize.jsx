import Axios from "axios"
export default async function changePageAndSize(page, pageSize){
    await Axios({
        method: "GET",
        url: `http://localhost:8081/api/user/getUserList?page=${page}&size=${pageSize}`
      })
        .then(function (response) {
            console.log(response)
        })
        .catch(function (error) {
          console.log(error);
        });

}