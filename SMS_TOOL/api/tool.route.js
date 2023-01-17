import express from "express"
import toolCtrl from "./tool.controller.js"

const router = express.Router();

router.route("/year/:id").get(toolCtrl.apiGetTool)
router.route("/new").post(toolCtrl.apiPostTool)
router.route("/:id")
    .get(toolCtrl.apiGetTool)
    .put(toolCtrl.apiUpdateTool)
    .delete(toolCtrl.apiDeleteTool)

export default router;
