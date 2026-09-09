import 'dotenv/config';
import { z } from 'zod';

//Validação das variáveis de ambiente
const envSchema = z.object({
  NODE_ENV: z
    .enum(['development', 'test', 'production'])
    .default('development'),
  PORT: z.coerce.number().default(3333),
});

const _env = envSchema.safeParse(process.env); //safeParse verifica se dentro do objeto process.env existe as variáveis de ambiente que foram definidas no envSchema

if (_env.success === false) {
  console.error('Invalid environment variables', _env.error.format());
  throw new Error('Invalid environment variables.');
}

export const env = _env.data;
