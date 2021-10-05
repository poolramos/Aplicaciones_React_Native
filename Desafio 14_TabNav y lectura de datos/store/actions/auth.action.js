import {URL_AUTH_SIGNUP,URL_AUTH_LOGIN} from "../../constant/database"

export const SIGNUP = 'SIGNUP'
export const SIGNIN = 'SIGNIN'
export const LOGOUT = 'LOGOUT'

export const logout = () =>({
    type:LOGOUT,
    token:null,
    user:null
})

export const login =(email,password)=>{
    return async dispatch =>{
        const response = await fetch(URL_AUTH_LOGIN,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken:true,
            })
        })

        if(!response.ok) console.log('No se pudo acceder')

        const resData = await response.json();
        dispatch({
            type: SIGNIN,
            token:resData.idToken,
            user: resData.localId,
        })
    }
}



export const signup = (email,password) =>{
    return async dispatch =>{
        const response = await fetch(URL_AUTH_SIGNUP,{
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body: JSON.stringify({
                email,
                password,
                returnSecureToken: true,
            }),
        });

        if(!response.ok){
            console.log('Error en la autenticacion')
        }

        const resData = await response.json();
        dispatch({type: SIGNUP,token:resData.idToken,user:resData.localId})
    }
}