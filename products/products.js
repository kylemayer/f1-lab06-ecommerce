
// imported gems.js with all of the gem's key-value pairs.
// also imported my renderGem function from render-gem.js

import gems from '../data/gems.js';
import { renderGem } from './render-gem.js';

// created a const to grab the 'gems' id from the DOM

const ul = document.getElementById('gems');

// for loop, 
for (const gem of gems){
    const el = renderGem(gem);
    console.log(el);
    ul.appendChild(el);
}