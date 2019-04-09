const modulename = 'Produkter'; 
const authorize = require('../../middleware/authorize');

module.exports = (app) => {
    // GET: Henter lister med products 
    app.get ('/admin/product/list', (req, res) => {
        res.render('pages/admin/product/index', {

                modulename: modulename,
                modulemode: 'Oversigt'
        })
    })

    // GET: Henter enkelt product ud fra id
    app.get ('/admin/product/details/:id', (req, res) => {
        res.render('pages/admin/product/details', {

                modulename: modulename,
                modulemode: 'Vis detailjer',
                id: req.params.id
        })
    })

    // POST: Opretter nyt product enkelt product ud fra id
    app.get ('/admin/product/create', (req, res) => {
        res.render('pages/admin/product/create', {

                modulename: modulename,
                modulemode: 'Opret nyt produkt'
        })
    })

     // PUT: Vedligeholder enkelt product ud fra id
     app.get ('/admin/product/update/:id', (req, res) => {
        res.render('pages/admin/product/update', {

                modulename: modulename,
                modulemode: 'Opdater produkt ',
                id: req.params.id
        })
    })

     // PUT: Sletter enkelt product ud fra id
     app.get ('/admin/product/delete/:id', (req, res) => {
        res.render('pages/admin/product/delete', {

                modulename: modulename,
                modulemode: 'Slet produkt',
                id: req.params.id
        })
    })
     // GET: Henter lister med productgroups 
     app.get ('/admin/product/prodgrp', (req, res) => {
        res.render('pages/admin/product/prodgrp', {

                modulename: modulename,
                modulemode: 'Produktgrupper'
        })
    })
}