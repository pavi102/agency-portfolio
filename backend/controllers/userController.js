const User = require('../models/user'),
    async = require('async');

exports.login = function (req, res) {
    let search;
    if(req.body.user.includes("@"))
        search = {email: req.body.user};
    else
        search = {username: req.body.user};
    User.findOne(search, function (err, user){
        if (err) {
            console.error(err)
            return res.status(500).send(err);
        }
        user.comparePassword(req.body.password, function (err, isMatch){
            if (err){
                console.error(err)
                return res.status(500).send(err)
            }
            res.status(200).send({message: "user successfully authenticated"});
        });
    })
}

exports.register = function (req, res){
    let user = new User({
        username: req.body.username,
        password: req.body.password,
        email: req.body.email,
    })
    user.save(function (err) {
        if (err){
            console.log(err)
            return res.status(400).send(err);
        }
        res.status(200).send({message: "user successfully created"});
    })
}

// exports.index = function(req, res) {
//
//     async.parallel({
//         book_count: function(callback) {
//             Book.countDocuments({}, callback); // Pass an empty object as match condition to find all documents of this collection
//         },
//     }, function(err, results) {
//         res.render('index', { title: 'Local Library Home', error: err, data: results });
//     });
// };
// // Display list of all Books.
// exports.book_list = function(req, res, next) {
//
//     Book.find({}, 'title author')
//       .populate('author')
//       .exec(function (err, list_books) {
//         if (err) { return next(err); }
//         //Successful, so render
//         res.render('book_list', { title: 'Book List', book_list: list_books });
//       });
//
//   };
// // Display detail page for a specific book.
// exports.book_detail = function(req, res, next) {
//
//     async.parallel({
//         book: function(callback) {
//
//             Book.findById(req.params.id)
//               .populate('author')
//               .populate('genre')
//               .exec(callback);
//         },
//         book_instance: function(callback) {
//
//           BookInstance.find({ 'book': req.params.id })
//           .exec(callback);
//         },
//     }, function(err, results) {
//         if (err) { return next(err); }
//         if (results.book==null) { // No results.
//             let err = new Error('Book not found');
//             err.status = 404;
//             return next(err);
//         }
//         // Successful, so render.
//         res.render('book_detail', { title: results.book.title, book: results.book, book_instances: results.book_instance } );
//     });
//
// };
// // Display book delete form on GET.
// exports.book_delete_get = function(req, res) {
//     async.parallel({
//         book: function(callback) {
//             Book.findById(req.params.id).exec(callback)
//         },
//         bookinstances: function(callback) {
//             BookInstance.find({ 'book': req.params.id }).exec(callback)
//         },
//     }, function(err, results) {
//         if (err) { return next(err); }
//         if (results.book==null) { // No results.
//             res.redirect('/catalog/books');
//         }
//         // Successful, so render.
//         res.render('book_delete', { title: 'Delete Book', book: results.book, bookinstances: results.bookinstances } );
//     });
// };
// // Handle book delete on POST.
// exports.book_delete_post = function(req, res) {
//     async.parallel({
//         book: function(callback) {
//             Book.findById(req.body.bookid).exec(callback)
//         },
//         bookinstances: function(callback) {
//             BookInstance.find({ 'book': req.body.bookid }).exec(callback)
//         },
//     }, function(err, results) {
//         if (err) { return next(err); }
//         // Success
//         if (results.bookinstances.length > 0) {
//             // Book has bookinstances. Render in same way as for GET route.
//             res.render('book_delete', { title: 'Delete Book', book: results.book, bookinstances: results.bookinstances } );
//             return;
//         }
//         else {
//             // Book has no bookinstances. Delete object and redirect to the list of books.
//             Book.findByIdAndRemove(req.body.bookid, function deleteGenre(err) {
//                 if (err) { return next(err); }
//                 // Success - go to book list
//                 res.redirect('/catalog/books')
//             })
//         }
//     });
// };
// // Display book update form on GET.
// exports.book_update_get = function(req, res, next) {
//
//     // Get book, authors and genres for form.
//     async.parallel({
//         book: function(callback) {
//             Book.findById(req.params.id).populate('author').populate('genre').exec(callback);
//         },
//         authors: function(callback) {
//             Author.find(callback);
//         },
//         genres: function(callback) {
//             Genre.find(callback);
//         },
//     }, function(err, results) {
//         if (err) { return next(err); }
//         if (results.book==null) { // No results.
//             var err = new Error('Book not found');
//             err.status = 404;
//             return next(err);
//         }
//         // Success.
//         // Mark our selected genres as checked.
//         for (var all_g_iter = 0; all_g_iter < results.genres.length; all_g_iter++) {
//             for (var book_g_iter = 0; book_g_iter < results.book.genre.length; book_g_iter++) {
//                 if (results.genres[all_g_iter]._id.toString()===results.book.genre[book_g_iter]._id.toString()) {
//                     results.genres[all_g_iter].checked='true';
//                 }
//             }
//         }
//         res.render('book_form', { title: 'Update Book', authors: results.authors, genres: results.genres, book: results.book });
//     });
//
// };
// // Handle book update on POST.
// exports.book_update_post = [
//
//     // Convert the genre to an array
//     (req, res, next) => {
//         if(!(req.body.genre instanceof Array)){
//             if(typeof req.body.genre==='undefined')
//                 req.body.genre=[];
//             else
//                 req.body.genre=new Array(req.body.genre);
//         }
//         next();
//     },
//
//     // Validate and sanitise fields.
//     body('title', 'Title must not be empty.').trim().isLength({ min: 1 }).escape(),
//     body('author', 'Author must not be empty.').trim().isLength({ min: 1 }).escape(),
//     body('summary', 'Summary must not be empty.').trim().isLength({ min: 1 }).escape(),
//     body('isbn', 'ISBN must not be empty').trim().isLength({ min: 1 }).escape(),
//     body('genre.*').escape(),
//
//     // Process request after validation and sanitization.
//     (req, res, next) => {
//
//         // Extract the validation errors from a request.
//         const errors = validationResult(req);
//
//         // Create a Book object with escaped/trimmed data and old id.
//         var book = new Book(
//             { title: req.body.title,
//                 author: req.body.author,
//                 summary: req.body.summary,
//                 isbn: req.body.isbn,
//                 genre: (typeof req.body.genre==='undefined') ? [] : req.body.genre,
//                 _id:req.params.id //This is required, or a new ID will be assigned!
//             });
//
//         if (!errors.isEmpty()) {
//             // There are errors. Render form again with sanitized values/error messages.
//
//             // Get all authors and genres for form.
//             async.parallel({
//                 authors: function(callback) {
//                     Author.find(callback);
//                 },
//                 genres: function(callback) {
//                     Genre.find(callback);
//                 },
//             }, function(err, results) {
//                 if (err) { return next(err); }
//
//                 // Mark our selected genres as checked.
//                 for (let i = 0; i < results.genres.length; i++) {
//                     if (book.genre.indexOf(results.genres[i]._id) > -1) {
//                         results.genres[i].checked='true';
//                     }
//                 }
//                 res.render('book_form', { title: 'Update Book',authors: results.authors, genres: results.genres, book: book, errors: errors.array() });
//             });
//             return;
//         }
//         else {
//             // Data from form is valid. Update the record.
//             Book.findByIdAndUpdate(req.params.id, book, {}, function (err,thebook) {
//                 if (err) { return next(err); }
//                 // Successful - redirect to book detail page.
//                 res.redirect(thebook.url);
//             });
//         }
//     }
// ];