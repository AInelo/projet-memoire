import PlanAffaireController from "../controller/PlanAffaireController.js";
import { Router } from 'express';
const router = Router()

// router.route('/plan-affaire/:id').get(PlanAffaireController.getOnePlanAffaire);

router.route('/plan-affaire/:id').get((req, res, next) => {
    console.log('Received request for plan-affaire with id:', req.params.id);
    next();
}, PlanAffaireController.getOnePlanAffaire);

export default router;