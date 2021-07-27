export const getHome = (req, res) => {
    if (process.env.NODE_ENV === 'production') {
        res.redirect('/psy/1');
        return;
    }
    res.render('home');
};
