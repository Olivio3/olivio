export default function handler(req, res) {
  res.setHeader('Vary', 'Accept');
  res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
  
  const markdown = `# Olívio Digital

## Presença Digital Profissional
Sua presença digital pode ser muito melhor. Estruturo a presença digital do seu negócio com sites estratégicos, landing pages de alta conversão e um posicionamento que atrai mais clientes.

### O Que Eu Faço
- Diagnóstico: Entendo seu negócio e identifico o que pode melhorar.
- Estratégia: Definimos prioridades e direcionamento.
- Criação: Desenvolvo as soluções necessárias.
- Entrega: Você recebe uma presença digital mais clara, profissional e funcional.

### Alguns Projetos
Confira o meu portfólio no site oficial (oliviodigital.com.br).

### Sobre Mim
Olá! Me chamo Edvaldo Olívio.
Trabalho com design e desenvolvimento web, criando sites, landing pages e identidades visuais com propósito. Acredito no design que resolve problemas, une estética e resultado, e funciona sem complicação.

### Contato
- WhatsApp: +55 11 96360-5954
- Instagram: [@oiolivio](https://www.instagram.com/oiolivio/)
- LinkedIn: [Edvaldo Olívio](https://www.linkedin.com/in/edvaldoolivio/)

Consulte nosso [guia para agentes de IA](/llms.txt) para mais informações.
`;

  res.status(200).send(markdown);
}
