import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import hljs from 'highlight.js';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  selectedLanguage: string = '';
  question: string = '';

  response: string | null = null;
  isLoading: boolean = false;
  error: string | null = null;

  private apiUrl = 'http://localhost:3000/generate';

  constructor(private http: HttpClient) {}

  generateCode() {
    if (!this.selectedLanguage || !this.question) {
      this.error = 'Por favor, selecciona un lenguaje y escribe tu pregunta.';
      return;
    }

    this.isLoading = true;
    this.response = null;
    this.error = null;

    const body = {
      language: this.selectedLanguage,
      question: this.question
    };

    this.http.post<{ response: string }>(this.apiUrl, body).subscribe({
      next: (res) => {
        const fullResponse = res.response;
        // Regex para encontrar bloques de código Markdown (```lenguaje
        // código
        // ```)
        const codeBlockRegex = /```(?<lang>\w+)?\n(?<code>[\s\S]*?)\n```/;

        const match = fullResponse.match(codeBlockRegex);

        if (match && match.groups) {
          // CORRECCIÓN AQUÍ: Usar notación de corchetes
          const code = match.groups['code'];
          const lang = match.groups['lang'] || ''; // Captura el lenguaje si está especificado.

          // Resalta el código. hljs.highlight detecta el lenguaje si no se especifica.
          const highlightedCode = hljs.highlight(code, {language: lang, ignoreIllegals: true}).value;

          // Reemplazamos el bloque de código original con el resaltado
          // Y el resto del texto lo dejamos como está. Usamos <pre><code> para el código.
          this.response = fullResponse.replace(codeBlockRegex, `<pre><code class="hljs">${highlightedCode}</code></pre>`);
        } else {
          // Si no hay bloque de código, mostramos la respuesta tal cual (sin resaltado)
          this.response = fullResponse;
        }

        this.isLoading = false;
      },
      error: (err) => {
        this.error = 'Ocurrió un error al contactar al servidor. Revisa que el backend esté funcionando.';
        console.error(err);
        this.isLoading = false;
      }
    });
  }
}