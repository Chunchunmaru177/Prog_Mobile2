import { Content, Header, Wrapper, Title } from '../components/layout';
import Button from '../components/controls/Button';
import FormItem from '../components/controls/FormItem';
import {onAuthStateChanged} from "firebase/auth";
import { useEffect, useState } from 'react';
import {auth} from "../firebase-config"; 

export default function Login({navigation}){
  const [user, setUser]=useState('');
  const [pass, setPass]=useState('');
  useEffect(()=>{
      //Método para suscribirse cuando el usuario inicia sesión
      const suscriber=onAuthStateChanged(auth,response=>{
          if(response)
          {
              navigation.navigate("Dashboard");
          }
      });
      return suscriber;
}, [auth])
  const goToHome = () => {
      navigation.navigate("Dashboard");
  }

  return (
    <Wrapper>
      <Header showBack={true} showCart={false} />
      <Content>
        <Title title="Estoy listo para comprar." />
        <FormItem label="Nombre de usuario"></FormItem>
        <FormItem label="Contraseña"></FormItem>
        <Button label="ACCEDER" onPress={goToHome} />
      </Content>
    </Wrapper>
  )
}
