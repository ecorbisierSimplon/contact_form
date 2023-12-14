import { JSDOM } from 'jsdom';

export class HtmlText {
    static htmlToPlainText(html: string): string {
        const dom = new JSDOM(html);
        const plainText = dom.window.document.body.innerText;
        return plainText;
    }
}