const http = require("http");

const getData = async () => {
    const response = await fetch('https://dummyjson.com/products');
    const data = await response.json();
    return data.products;
};

const getCardUI = (products) => {
    let finalHTML = `<div class='card-container'>`;
    products.forEach((elem) => {
        finalHTML += `
        <div class='card'>
            <h2>${elem.title}</h2>
            <img src='${elem.thumbnail}' />
            <p>${elem.description}</p>
            <a href='/${elem.id}'>More...</a>
        </div>
        `;
    });
    finalHTML += `</div>`;
    return finalHTML;
};

const server = http.createServer(async (req, res) => {
    const path = req.url;
    console.log("-->", path);

    res.setHeader("content-type", "text/html");

    if (path == "/") {
        const products = await getData();
        res.end(`
            <html>
                <head>
                    <style>
                        body {
                            background-color: #212121;
                            padding: 1rem;
                            color: white;
                            font-family: Tahoma;
                            display: flex;
                            justify-content: center;
                        }
                        .card-container {
                            display: flex;
                            flex-wrap: wrap;
                            gap: 20px;
                            justify-content: center;
                            max-width: 1200px;
                        }
                        .card {
                            width: 300px;
                            height: auto;
                            background-color: royalblue;
                            color: white;
                            padding: 1rem;
                            border: 2px solid brown;
                            border-radius: 1rem;
                            text-align: center;
                        }
                        .card img {
                            height: 150px;
                            width: 100%;
                            object-fit: cover;
                            border-radius: 5px;
                        }
                        .card p {
                            font-size: 14px;
                        }
                        
                    </style>
                </head>
                <body>
                    ${getCardUI(products)}
                </body>
            </html>`);



    } else if (path == "/about") {
        res.end("<h1 style='color: blue'>About Page</h1>");
    } else {
        res.end("<h1 style='color: green'>Oops... Page Not Found!</h1>");
    }
});

server.listen(4000, () => {
    console.log("------ Server Started at port 4000 ------");
});
