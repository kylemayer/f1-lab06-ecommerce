
export function renderGem(gems){
    const li = document.createElement('li');
    li.classList.add(gems.category);
    li.title = gems.description;
    
    const h3 = document.createElement('h3');
    h3.textContent = gems.name;
    li.appendChild(h3);

    const img = document.createElement('img');
    img.src = `../assets/${gems.image}`;
    img.alt = `${gems.name} image`;
    li.appendChild(img);

    const p = document.createElement('p');
    p.classList.add('price');
    p.textContent = `$${gems.price.toFixed(2)}`;
    
    const button = document.createElement('button');
    button.textContent = 'Add';
    button.value = gems.id;
    p.appendChild(button);
    
    li.appendChild(p);
    return li;
}
