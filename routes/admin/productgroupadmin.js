const modulename = 'Produktgrupper'; 

module.exports = (app) => {
    // GET: Henter lister med productgroups 
    app.get ('/admin/productgroup/list', (req, res) => {
        res.render('pages/admin/productgroup/index', {

                modulename: modulename,
                modulemode: 'Oversigt'
        })
    })

    // GET: Henter lister med productgroups for parent_id
    app.get ('/admin/productgroup/list/:id', (req, res) => {
        res.render('pages/admin/productgroup/index', {

                modulename: modulename,
                modulemode: 'Oversigt'
        })
    })


    // GET: Henter enkelt productgroup ud fra id
    app.get ('/admin/productgroup/details/:id', (req, res) => {
        res.render('pages/admin/productgroup/details', {

                modulename: modulename,
                modulemode: 'Vis detailjer',
                id: req.params.id
        })
    })

    // POST: Opretter nyt productgroup ud fra id
    app.get ('/admin/productgroup/create', (req, res) => {
        res.render('pages/admin/productgroup/create', {

                modulename: modulename,
                modulemode: 'Opret ny produktgruppe'
        })
    })

     // PUT: Vedligeholder enkelt productgroup ud fra id
     app.get ('/admin/productgroup/update/:id', (req, res) => {
        res.render('pages/admin/productgroup/update', {

                modulename: modulename,
                modulemode: 'Opdater produktgruppe ',
                id: req.params.id
        })
    })

     // PUT: Sletter enkelt productgroup ud fra id
     app.get ('/admin/productgroup/delete/:id', (req, res) => {
        res.render('pages/admin/productgroup/delete', {

                modulename: modulename,
                modulemode: 'Slet produktgruppe',
                id: req.params.id
        })
    })
}