import axios from "axios"

const LoginAPI = async (email: string, password: string) => {
    await axios
        .post("/api/login", {
            input_id: email,
            input_password: password,
         })
        .then((response) => {
            console.log(response.data);
            alert("Login Success!");
        })
        .catch((error) => {
            if (error.response.data.status === 500) {
            alert(error.response.data.message);
        }
        else {
          alert("Check The network");
        }
      });       
}

export default LoginAPI;