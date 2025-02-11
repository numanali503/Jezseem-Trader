const express = require("express");
const router = express.Router();
const cors = require("cors");
const bodyParser = require("body-parser");
const protectAPIsMiddleware = require("../middleware/protectAPI");

router.use(express.json({ limit: "10mb" }));
router.use(express.urlencoded({ limit: "10mb", extended: true }));

// * IMPORTING Controllers & Middlewares 😎 ===================================================
const { register, login } = require("../controller/auth-controller");
const { verifyAdminToken } = require("../middleware/verifyAdmin");
const {
  postInsights,
  getInsights,
  getInsightById,
  updateInsight,
  deleteInsight,
} = require("../controller/insights-controller");
const {
  postTestimonial,
  getTestimonials,
  getTestimonialById,
  updateTestimonial,
  deleteTestimonial,
} = require("../controller/testimonial-controller");
const {
  createPSLink,
  getAllPSLinks,
  getPSLinkById,
  updatePSLink,
  deletePSLink,
} = require("../controller/psLink-controller");

// * CREATING Routes 😎 ====================================================================
router.route("/register").post(register);
router.route("/login").post(login);

router.route("/admin/authorization").post(verifyAdminToken, (req, res) => {
  res.json({ message: "Access granted to protected route - Token Verified" });
});

///////////////////////// INSIGHTS ROUTES //////////////////////////
router.route("/post-insight").post(postInsights);
router.route("/get-insight").get(getInsights);
router.route("/get-insight/:id").get(getInsightById);
router.route("/update-insight/:id").put(updateInsight);
router.route("/delete-insight/:id").delete(deleteInsight);

///////////////////////// TESTIMONIAL ROUTES //////////////////////////
router.route("/post-testimonial").post(postTestimonial);
router.route("/get-testimonial").get(getTestimonials);
router.route("/get-testimonial/:id").get(getTestimonialById);
router.route("/update-testimonial/:id").put(updateTestimonial);
router.route("/delete-testimonial/:id").delete(deleteTestimonial);

///////////////////////// PS LINKS ROUTES //////////////////////////
router.route("/post-pslinks").post(createPSLink);
router.route("/get-all-pslinks").get(getAllPSLinks);
router.route("/get-pslink/:id").get(getPSLinkById);
router.route("/update-pslink/:id").put(updatePSLink);
router.route("/delete-pslink/:id").delete(deletePSLink);

module.exports = router;
