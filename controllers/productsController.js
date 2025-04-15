const Product = require('../models/Product');
const STATUS_CODE = require('../constants/statusCode');

const getProductsView = (req, res) => {
    const products = Product.getAll();
    res.render('products', { products });
};

const getAddProductView = (req, res) => {
    res.render('add-product');
};

const addNewProduct = (req, res) => {
    const { name, description } = req.body;
    const newProduct = new Product(name, description);
    Product.add(newProduct);
    res.redirect('/products/new');
};

const getNewProductView = (req, res) => {
    const product = Product.getLast();
    res.render('new-product', { product });
};

const getProductView = (req, res) => {
    const { name } = req.params;
    const product = Product.findByName(name);
    res.render('product', { product });
};

const deleteProduct = (req, res) => {
    const { name } = req.params;
    Product.deleteByName(name);
    res.status(STATUS_CODE.OK).json({ success: true });
};

module.exports = {
    getProductsView,
    getAddProductView,
    addNewProduct,
    getNewProductView,
    getProductView,
    deleteProduct
};
