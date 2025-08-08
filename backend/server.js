require('dotenv').config();
const express = require('express');
const cors = require('cors');
const { GoogleGenerativeAI } = require('@google/generative-ai');

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

const genAI = new GoogleGenerativeAI(process.env.GEMINI_API_KEY);
const model = genAI.getGenerativeModel({ model: 'gemini-1.5-flash' });

app.post('/generate', async (req, res) => {
  try {
    const { question, language } = req.body;

    if (!question || !language) {
      return res.status(400).send({ error: 'Se requiere una pregunta y un lenguaje.' });
    }

    // Este es el "prompt". Es la instrucción que le damos a la IA.
    const prompt = `
      Actúa como un programador experto en ${language}.
      Tu tarea es responder a la siguiente pregunta o petición de código.
      La respuesta debe ser clara, concisa y seguir las mejores prácticas de ${language}.
      Si la petición es de código, **siempre incluye el código en un bloque de código Markdown (ej: 
    ${language}

).
      Añade una breve explicación antes o después del bloque de código.
      Si no es una petición de código, responde directamente.

      Petición: "${question}"
    `;

    const result = await model.generateContent(prompt);
    const response = await result.response;
    const text = response.text();

    res.send({ response: text });

  } catch (error) {
    console.error('Error al contactar con la API de Google Gemini:', error);
    res.status(500).send({ error: 'Error al procesar la solicitud.' });
  }
});

app.listen(port, () => {
  console.log(`Servidor escuchando en http://localhost:${port}`);
});