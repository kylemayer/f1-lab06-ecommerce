import gems from '../data/gems.js';
import { renderGem } from './render-gem.js';

const ul = document.getElementById('gems');

for (const gem of gems){
    const el = renderGem(gem);
    console.log(el);
    ul.appendChild(el);
}