
const backendDomin = "http://localhost:8080"

const SummaryAPI = {
    SignUP:{
        url:`${backendDomin}/api/signup`,
        method: "POST",
    },
    LogIn:{
        url:`${backendDomin}/api/login`,
        method:"POST",
    },
    userLogOut:{
        url:`${backendDomin}/api/logout`,
        method:"GET",
    },
    
}


export default SummaryAPI;

