import { toast } from 'react-hot-toast'

export default function CheckError(email, passWord) {
    if(email){
        CheckEmail(email)
        passWord = toast.error("mật khẩu chưa chính xác")
    }
}

const CheckEmail = async (email) => {
    var regex =
        /^[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?$/;
    if (!regex.test(email)) {
        email = toast.error("email không giống với định dạng");
    }
}

