const isEmail = /^(?!.*@.*@)(?=.{1,256}$)(?:(?!\.)[^\s@]+(?:(?<!\\)\.[^\s@]+)*(?<=\S)@(?:(?!-)[A-Za-z0-9-]{1,63}(?<!-)\.?)+\.[A-Z]{2,})$/i;
const isPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[!@#$%^&*])[A-Za-z\d!@#$%^&*]{8,20}$/;    
const isname =  /^[A-ZÀ-ÖØ-Ý][a-zà-öø-ÿ' -]{1,49}$/i;

export const validateInput=(email,password,name)=>{

    
    if(!isEmail.test(email)){
        return "Email is invalid!";
    }
    if(!isPassword.test(password)){
        return "Password must be atleast 8 characters, must include an uppercase, lowercase and special case character!";
    }
    if(name!==null && name!==undefined && !isname.test(isname)){
        return "Not a valid name!" 
    }

}