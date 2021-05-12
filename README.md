# gn-api-sdk-typescript

> A nodejs module for integration of your backend with the payment services provided by [Gerencianet](http://gerencianet.com.br).

> Um módulo nodejs para integrar seu backend com os serviços de pagamento da [Gerencianet](http://gerencianet.com.br).

## Instalação

```bash
$ npm install gn-api-sdk-typescript
```

## Uso Básico

Importe o módulo:

```typescript
import Gerencianet from 'gn-api-sdk-typescript';
```

Insira suas credenciais e defina se deseja usar o sandbox ou não.
Você também pode usar o arquivo [examples/config.ts](examples/config.ts) de modelo.
```typescript
module.exports = {
	// PRODUÇÃO = false
	// HOMOLOGAÇÃO = true
	sandbox: false,

	// CREDENCIAIS DE PRODUÇÃO
	clientIdProducao: '',
	clientSecretProducao: '',
	pathCertProducao: '',

	// CREDENCIAIS DE HOMOLOGAÇÃO
	clientIdHomologacao: '',
	clientSecretHomologacao: '',
	pathCertHomologacao: '',

	// VALIDAR MTLS?
	validateMtls: false,
};
```

Instancie o módulo passando as options:

```typescript
const gerencianet = Gerencianet(options);
```

Crie uma cobrança:

```typescript
var body = {
  items: [{
    name: 'Product A',
    value: 1000,
    amount: 2
  }]
}

gerencianet
  .createCharge({}, body)
  .then(console.log)
  .catch(console.log)
  .done();
```

## Exemplos

Para executar os exemplos, clone este repo e instale as dependências:

```bash
$ git clone git@github.com:gerencianet/gn-api-sdk-typescript.git
$ cd gn-api-sdk-typescript/examples
$ npm install
```

Defina suas credenciais em config.ts:

```typescript
module.exports = {
	// PRODUÇÃO = false
	// HOMOLOGAÇÃO = true
	sandbox: false,

	// CREDENCIAIS DE PRODUÇÃO
	clientIdProducao: '',
	clientSecretProducao: '',
	pathCertProducao: '',

	// CREDENCIAIS DE HOMOLOGAÇÃO
	clientIdHomologacao: '',
	clientSecretHomologacao: '',
	pathCertHomologacao: '',

	// VALIDAR MTLS?
	validateMtls: false,
};
```

Em seguida, execute o exemplo que você deseja:

```bash
$ ts-node createCharge.ts
```


## Documentação

A documentação completa com todos os endpoints disponíveis você encontra em: https://dev.gerencianet.com.br/.

## License

[MIT](LICENSE)
