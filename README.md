F.I.C.C.T.-Algoritmo-SubNetting

> Direccionamiento IP
>> Conversion Decimal a Binario.
>> Conversion Binario a Decimal.

> SubNetting


```bash
F.I.C.C.T.-ALGORITMO-SUBNETTING/
├── src/
│   ├── index.ts           # punto de entrada
│   ├── routes/            # rutas Express
│   ├── controllers/       # lógica del controlador
│   ├── services/          # lógica de negocio
│   ├── models/            # clases/interfaces/datos
│   └── config/            # configuración general
│
├── tests/
│   └── example.test.ts    # tests unitarios con Jest
│
├── dist/                  # generado por tsc
├── node_modules/
├── .gitignore
├── package.json
├── package-lock.json
├── tsconfig.json
├── jest.config.js         # configuración de pruebas
├── .eslintrc.json         # configuración de lint
└── README.md


```

## ✅ 3. Levantar el servidor
Opción 1: Para desarrollo con recarga automática
```bash
npm run dev
```
Usa ts-node + nodemon para ejecutar directamente el .ts sin compilar.

## Opción 2: Para producción (compilado)
```bash
npm run build      # Compila TypeScript a JavaScript
npm start  
```