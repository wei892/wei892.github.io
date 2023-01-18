import express from "express"
//import toolCtrl from "./tool.controller.js"

const router = express.Router();
router.route("/").get((req, res) => res.send("hello World"));

//functions for collecting new year data
//router.route("/year/:id").get(toolCtrl.apiGetYear)
// router.route("/newYear").post(toolController.apiPostYear)
// router.route("/newYear").post(toolController.apiPostYear)

// //functions for collecting new Region data
// router.route("/region/:id").get(toolController.apiGetRegion)
// router.route("/newRegion").post(toolController.apiPostRegion)

// //functions for collecting new Country data
// router.route("/country/:id").get(toolController.apiGetCountry)
// router.route("/newCountry").post(toolController.apiPostCountry)


// router.route("/Location/:id").get(toolController.apiGetLocation)
// router.route("/newLocation").post(toolController.apiPostLocation)


// router.route("/:id")
//     .get(toolController.apiGetTool)
//     .put(toolController.apiUpdateTool)
//     .delete(toolController.apiDeleteTool)

export default router;
