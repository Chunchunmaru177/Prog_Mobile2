//Importar servicio de Firebase para autenticación
import {signInWithEmailAndPassword} from 'firebase/auth';
import { Alert } from 'react-native';
import {auth} from '../firebase-config';

/*Función de Iniciar Sesión */

{String} email
{String} password

export const loginWithEmailPass=async(email,password)=>
{
    try{
        await signInWithEmailAndPass(auth,email,password); 
    } catch (error) {
        Alert.alert("Error", error.message);
    }
};
/*Función para cerrar la sesión actual */

export const logoutAuth=async()=>
    {
        try{
            await auth.signOut(); 
        } catch (error) {
            Alert.alert("Error", error.message);
        }
    };