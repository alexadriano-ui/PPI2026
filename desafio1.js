// DESAFIO - 1
// a) Exibir valor total de todos os produtos em estoque
// b) Ordene os produtos por nome (crescente/descrescente)
// c) Ordene os produtos por preço (crescente/descrescente)
// d) Filtre produtos de acordo uma categoria
// Após concluir, faça commit do código para o github

// Modelo do Produto
function Product(name, sto, ram, price, qty, category){
    this.name = name;
    this.sto = sto;
    this.ram = ram;
    this.price = price;
    this.qty = qty;
    this.category = category;
};

const p1 = new Product('iphone', 256, 16,5000, 10, 'celular');
const p2 = new Product('ipad', 512, 16, 8000, 20, 'tablet');
const p3 = new Product('Macbook', 1024, 24, 15000, 30, 'Notebook');
const p4 = new Product('iphone Pro Max', 256, 16, 7000, 15, 'celular');
const p5 = new Product('ipad Pro', 512, 16, 10000, 25, 'tablet');
const p6 = new Product('Macbook Pro', 1024, 24, 25000, 35, 'Notebook'); 
