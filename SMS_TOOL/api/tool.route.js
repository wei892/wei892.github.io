import express from "express"
import toolCtrl from "./tool.controller.js"

const router = express.Router();

//functions for collecting new year data
router.route("/year/:id").get(toolCtrl.apiGetYear)
router.route("/newYear").post(toolCtrl.apiPostYear)

//functions for collecting new Region data
router.route("/region/:id").get(toolCtrl.apiGetRegion)
router.route("/newRegion").post(toolCtrl.apiPostRegion)

//functions for collecting new Country data
router.route("/country/:id").get(toolCtrl.apiGetCountry)
router.route("/newCountry").post(toolCtrl.apiPostCountry)


router.route("/Location/:id").get(toolCtrl.apiGetLocation)
router.route("/newLocation").post(toolCtrl.apiPostLocation)


// router.route("/:id")
//     .get(toolCtrl.apiGetTool)
//     .put(toolCtrl.apiUpdateTool)
//     .delete(toolCtrl.apiDeleteTool)

export default router;
