const router = express.Router();

router.get('/plan-affaire/:id', PlanAffaireController.getPlanAffaireDetails);

export default router;