const express = require("express");
const router = express.Router();
const {
    getMyListMovie,
    deleteMyListMovieItem,
    addMyListMovieItem,
    getMyListSeries,
    deleteMyListSeriesItem,
    addMyListSeriesItem,
    checkMovieItem,
    checkSeriesItem,
} = require("../controllers/myList");
const { protect } = require("../middleware/auth");

router.route("/getList/movie").get(protect, getMyListMovie);
router.route("/addListItem/movie").put(protect, addMyListMovieItem);
router.route("/deleteListItem/movie").put(protect, deleteMyListMovieItem);
router.route("/checkListItem/movie/:id").get(protect, checkMovieItem);

router.route("/getList/series").get(protect, getMyListSeries);
router.route("/addListItem/series").put(protect, addMyListSeriesItem);
router.route("/deleteListItem/series").put(protect, deleteMyListSeriesItem);
router.route("/checkListItem/series/:id").get(protect, checkSeriesItem);

module.exports = router;
