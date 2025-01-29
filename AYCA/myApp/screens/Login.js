import { Content, Header, Wrapper, Title } from '../components/layout';
import Button from '../components/controls/Button';
import FormItem from '../components/controls/FormItem';
import {onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from 'react';
import {auth} from "../firebase-config"; 
import { loginWithEmailPass } from '../services/firebase';

export default function Login({navigation}){
  const [user, setUser]=useState('');
  const [pass, setPass]=useState('');
  useEffect(()=>{
      //Método para suscribirse cuando el usuario inicia sesión
      const suscriber = onAuthStateChanged(auth,(response)=>{
          if(response)
          {
              navigation.navigate("Dashboard");
          }
      });
      return suscriber;
}, [auth])

//Evento para login
const login = async() =>
  {
    if (user && pass)
    {
      await loginWithEmailPass(user,pass);
    }
  };

const onChangeUser = (value) =>
{
  setUser(value);
};
const onChangePass = (value) =>
{
  setPass(value);
}

  return (
    <Wrapper>
      <Header showBack={true} showCart={false} />
      <Content>
        <Title title="Estoy listo para comprar." />
        <FormItem label="Nombre de usuario"></FormItem>
        <FormItem label="Contraseña"></FormItem>
        <Button label="ACCEDER" onPress={login} />
      </Content>
    </Wrapper>
  )
}
