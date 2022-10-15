import { Meta, StoryObj } from '@storybook/react';
import { within, userEvent, waitFor } from '@storybook/testing-library';
import { expect } from '@storybook/jest';
import { rest } from 'msw';

import { SignIn } from './SignIn';

export default {
   title: 'Pages/SignIn',
   component: SignIn,
   args: {
      children: "Create account",
   },
   parameters: {
      msw: {
         //método post para rota sessions 
         handlers: [
            rest.post('/sessions', (req, res, ctx) => {
               return res(ctx.json({
                  message: 'Login realizado com sucesso!',
               }));
            })
         ]
      }
   }
} as Meta;

// Variação Default
export const Default: StoryObj = {
   //executa os testes dentro dessa função
   play: async ({ canvasElement }) => {
      const canvas = within(canvasElement);
      
      userEvent.type(canvas.getByPlaceholderText("Digite o seu e-mail"), "raphael.capeto@teste.com");
      userEvent.type(canvas.getByPlaceholderText("*******"), "123456");

      userEvent.click(canvas.getByRole("button"));

      await waitFor(() => {
         expect(canvas.getByText("Login realizado!")).toBeInTheDocument();
      });
   }
};
