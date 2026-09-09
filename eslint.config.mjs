import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';

export default [
  // Aplica as configurações em arquivos JavaScript e TypeScript
  {
    files: ['**/*.{js,mjs,cjs,ts}'],
  },

  // Configuração base do ESLint para JavaScript
  pluginJs.configs.recommended,

  // Configurações recomendadas para TypeScript
  ...tseslint.configs.recommended,

  // Suas regras personalizadas (Estilo e Node.js)
  {
    languageOptions: {
      ecmaVersion: 2024,
      sourceType: 'module',
    },
    rules: {
      // Aspas simples
      quotes: ['error', 'single', { avoidEscape: true }],

      // Ponto e vírgula obrigatório no final
      semi: ['error', 'always'],

      // Indentação com 2 espaços (ou tabs, veja nota abaixo)
      indent: ['error', 2, { SwitchCase: 1 }],

      // Desativa aviso de variáveis não usadas quando começam com "_"
      '@typescript-eslint/no-unused-vars': [
        'warn',
        { argsIgnorePattern: '^_' },
      ],

      // Permite o uso de 'require' caso use CommonJS em algum ponto
      '@typescript-eslint/no-require-imports': 'off',
    },
  },
];
