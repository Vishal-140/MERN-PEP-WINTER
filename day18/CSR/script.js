const getData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
};

const cardUI = (products) => {
    const root = document.getElementById('root');
    root.innerHTML = ""; 

    products.forEach((elem) => {
        const card = document.createElement("div");
        card.className = "card";
        card.innerHTML = `
            <h4>${elem.title}</h4>
            <img src='${elem.thumbnail}' />
            <p>${elem.description}</p>
            <a href='/view?id=${elem.id}'>More...</a>
        `;
        root.appendChild(card);
    });
};

const displayUI = async () => {
    const products = await getData(); 
    cardUI(products);
};

displayUI();
