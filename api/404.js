export default function handler(req, res) {
  const accept = req.headers.accept || '';
  res.status(404);
  res.setHeader('Vary', 'Accept');
  
  if (accept.includes('text/markdown')) {
    res.setHeader('Content-Type', 'text/markdown; charset=utf-8');
    res.send(`# Page Not Found

Sorry, the page you are looking for does not exist on Olívio Digital.

See our [Agent Instructions](/llms.txt) or [Homepage](/) for more information.
`);
  } else {
    res.setHeader('Content-Type', 'text/html; charset=utf-8');
    res.send(`<!DOCTYPE html>
<html lang="pt-BR">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>404 - Página não encontrada | Olívio Digital</title>
    <style>
        body {
            background-color: #07090e;
            color: #fff;
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif;
            display: flex;
            flex-direction: column;
            align-items: center;
            justify-content: center;
            height: 100vh;
            margin: 0;
            text-align: center;
        }
        a {
            color: #fff;
            text-decoration: underline;
            margin-top: 20px;
            padding: 10px 20px;
            background: rgba(255,255,255,0.1);
            border-radius: 8px;
            text-decoration: none;
        }
        a:hover {
            background: rgba(255,255,255,0.2);
        }
    </style>
</head>
<body>
    <h1>404</h1>
    <p>A página que você está procurando não existe.</p>
    <a href="/">Voltar ao início</a>
</body>
</html>`);
  }
}
