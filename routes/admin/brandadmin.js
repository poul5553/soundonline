const authorize = require('../../middleware/authorize');
const modulename = 'Mærker'; 

module.exports = (app) => {
    // GET: Henter lister med brands 
    app.get ('/admin/brand/list', (req, res) => {
        res.render('pages/admin/brand/index', {

                modulename: modulename,
                modulemode: 'Oversigt'
        })
    })

    // GET: Henter enkelt brand ud fra id
    app.get ('/admin/brand/details/:id', (req, res) => {
        res.render('pages/admin/brand/details', {

                modulename: modulename,
                modulemode: 'Vis detailjer',
                id: req.params.id
        })
    })

    // POST: Opretter nyt brand enkelt brand ud fra id
    app.get ('/admin/brand/create', authorize, (req, res) => {
      
        res.render('pages/admin/brand/create', {

                modulename: modulename,
                modulemode: 'Opret nyt brand'
        })
    })

     // PUT: Vedligeholder enkelt brand ud fra id
     app.get ('/admin/brand/update/:id', (req, res) => {
        res.render('pages/admin/brand/update', {

                modulename: modulename,
                modulemode: 'Opdater brand ',
                id: req.params.id
        })
    })

     // PUT: Sletter enkelt brand ud fra id
     app.get ('/admin/brand/delete/:id', (req, res) => {
        res.render('pages/admin/brand/delete', {

                modulename: modulename,
                modulemode: 'Slet brand',
                id: req.params.id
        })
    })

    function authorize(req, res, next) {
        const baererHeader = req.headers['authorization'];
        if(typeof baererHeader != 'undefined') {
            const baerer = baererHeader.split(" ");
            const baererToken = baerer[1];
            req.token = baererToken;
            next();
        } else {
            res.sendStatus(403);
        }
        return module.exports;
    }    

}