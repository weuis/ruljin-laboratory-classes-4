const getProcessLog = () => {
    console.log("App is closing...");
};

const getLogoutView = (req, res) => {
    res.render('logout');
};

const killAplication = (req, res) => {
    getProcessLog();
    process.exit();
};

module.exports = { getLogoutView, killAplication };
/**/