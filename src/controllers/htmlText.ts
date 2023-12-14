export class HtmlText {
    static htmlToPlainText(html: string) {
        // Convertir le HTML en DOM
        const parser = new DOMParser();
        const doc = parser.parseFromString(html, 'text/html');

        // Obtenir le texte brut avec les retours à la ligne
        const plainText = doc.body.innerText;

        return plainText;
    }
}