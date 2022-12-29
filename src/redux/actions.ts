import actionName from "./actionTypes"

export const changePersonalInfo = (yourInfo:{name:string,email:string,phone:string})=>{
    return {
        type: actionName.UPDATE_YOUR_INFO,
        payload: yourInfo
    }
}