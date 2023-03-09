exports.getMyProfile = async (req, res, next) => {
    const name = req.user.username;
    res.status(200).json({
        success: true,
        data: {
            name,
        },
    });
};
