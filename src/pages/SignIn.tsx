import { FormEvent, useState } from "react";
import { Envelope, Lock } from "phosphor-react";
import axios from 'axios';

import { Button } from "../components/Button";
import { Checkbox } from "../components/Checkbox";
import { Heading } from "../components/Heading";
import { Logo } from "../components/Logo";
import { Text } from "../components/Text";
import { TextInput } from "../components/TextInput";

import { getClassName } from '../utils/getClassName';
import { delay } from "../utils/delay";

export function SignIn() {  
   const [loading, setLoading] = useState(false);
   const [isUserSignedIn, setIsUserSignedIn] = useState(false);

   async function handleSignIn(event: FormEvent) {
      event.preventDefault();
      setLoading(true);

      try {
        await delay(2000);

        await axios.post('/sessions', { 
          email: 'raphael.capeto@test.com',
          password: '123456',
       });
      } catch(err) {
        console.error("Error Login", err);
      } finally {
        setLoading(false);
      }

    

      setIsUserSignedIn(state => !state);
   };

  const styles = {
    container: {
      screen: 'w-screen h-screen',
      color: 'bg-gray-900 text-gray-100',
      design: 'flex items-center justify-center flex-col'
    },
    header: {
      design: 'flex flex-col items-center'
    },
    form: {
      design: 'flex flex-col items-stretch w-full max-w-[400px] mt-10 gap-4',
    },
    formLabel: {
      design: 'flex flex-col gap-3'
    },
    link: {
      text: 'text-gray-400 underline',
    },
    footer: {
      design: 'flex flex-col gap-4 items-center mt-8'
    },
  };

  const containerClassName = getClassName(styles.container);
  const headerClassName = getClassName(styles.header);
  const linkClassName = getClassName(styles.link);
  const formClassName = getClassName(styles.form);
  const formLabelClassName = getClassName(styles.formLabel);
  const footerClassName = getClassName(styles.footer);

  return (
    <div className={containerClassName}>
      <header className={headerClassName}>
        <Logo />

        <Heading size="lg" customClassName="mt-4">
          Ignite Lab
        </Heading>

        <Text size="lg" customClassName="text-gray-400">
          Faça login e comece a usar!
        </Text>
      </header>

      <form className={formClassName} onSubmit={handleSignIn}>
         { isUserSignedIn && (
            <Text>Login realizado!</Text>
         )}
        <label htmlFor="email" className={formLabelClassName}>
          <Text customClassName="font-semibold">
            Endereço de E-mail
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Envelope />
            </TextInput.Icon>

            <TextInput.Input 
              placeholder="Digite o seu e-mail" 
              id="email" 
              type="email"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="password" className={formLabelClassName}>
          <Text customClassName="font-semibold">
            Sua senha
          </Text>
          <TextInput.Root>
            <TextInput.Icon>
              <Lock />
            </TextInput.Icon>

            <TextInput.Input 
              placeholder="*******" 
              id="password" 
              type="password"
            />
          </TextInput.Root>
        </label>

        <label htmlFor="remember" className="flex items-center gap-2">
          <Checkbox id="remember"/>
          <Text size="sm" customClassName="text-gray-200">
            Lembrar de mim por 30 dias
          </Text>
        </label>

        <Button type="submit" className="mt-4">
          { loading ? 'Carregando...' : 'Entrar na plataforma' }
        </Button>
      </form>

      <footer className={footerClassName}>
        <Text asChild>
          <a href="" className={linkClassName}>Esqueceu sua senha?</a>
        </Text>
        <Text asChild>
          <a href="" className={linkClassName}>Não possui conta? Crie uma agora!</a>
        </Text>
      </footer>
      
    </div>
  );
}