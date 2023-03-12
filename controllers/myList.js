exports.getMyListMovie = async (req, res, next) => {
    const myListMovie = req.user.myListMovie;
    res.status(200).json({
        success: true,
        data: myListMovie.reverse(),
    });
};

exports.addMyListMovieItem = async (req, res, next) => {
    const user = req.user;
    const { id } = req.body;
    user.myListMovie.addToSet(id);
    await user.save();
    res.status(200).json({
        success: true,
        data: user.myListMovie.reverse(),
    });
};

exports.deleteMyListMovieItem = async (req, res, next) => {
    const user = req.user;
    const { id } = req.body;
    user.myListMovie.pull(id);
    await user.save();
    res.status(200).json({
        success: true,
        data: user.myListMovie.reverse(),
    });
};

exports.checkMovieItem = async (req, res, next) => {
    const myListMovie = req.user.myListMovie;
    const id = req.params.id;
    const result = myListMovie.includes(id);
    res.status(200).json({
        success: true,
        data: result,
    });
};

exports.getMyListSeries = async (req, res, next) => {
    const myListSeries = req.user.myListSeries;
    res.status(200).json({
        success: true,
        data: myListSeries.reverse(),
    });
};

exports.addMyListSeriesItem = async (req, res, next) => {
    const user = req.user;
    const { id } = req.body;
    user.myListSeries.addToSet(id);
    await user.save();
    res.status(200).json({
        success: true,
        data: user.myListSeries.reverse(),
    });
};

exports.deleteMyListSeriesItem = async (req, res, next) => {
    const user = req.user;
    const { id } = req.body;
    user.myListSeries.pull(id);
    await user.save();
    res.status(200).json({
        success: true,
        data: user.myListSeries.reverse(),
    });
};

exports.checkSeriesItem = async (req, res, next) => {
    const myListSeries = req.user.myListSeries;
    const id = req.params.id;
    const result = myListSeries.includes(id);
    res.status(200).json({
        success: true,
        data: result,
    });
};
