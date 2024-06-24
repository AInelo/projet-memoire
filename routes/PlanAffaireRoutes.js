import PlanAffaireController from "../controller/PlanAffaireController.js";
import { Router } from 'express';
const router = Router()

// router.get('/plan-affaire/:id', PlanAffaireController.getOnePlanAffaire);
router.route('/plan-affaire/:id').get(PlanAffaireController.getOnePlanAffaire);

export default router;