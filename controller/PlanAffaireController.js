import PlanAffaireModel from "../model/bases/PlanAffaires/PlanAffaireModel.js";

class PlanAffaireController {
    static async createPlanAffaire(req, res) {
        const planAffaire = req.body; 

        const planAffaireModel = new PlanAffaireModel();
        try {
            const planAffaireId = await planAffaireModel.createPlanAffaire(planAffaire);
            console.log(`Plan d'affaire créé avec l'ID: ${planAffaireId}`);
            res.status(201).json({ message: 'Plan d\'affaire créé avec succès', id: planAffaireId });
        } catch (error) {
            console.error('Erreur lors de la création du plan d\'affaire', error);
            res.status(500).json({ message: 'Erreur lors de la création du plan d\'affaire', error: error.message });
        }
    }


 // const { id } = req.params;
        // // try {
        // //     const details = await PlanAffaireModel.getPlanAffaireDetails(id);
        // //     res.status(200).json(details);
        // // } catch (error) {
        // //     res.status(500).json({ message: 'Erreur lors de la récupération des détails du plan d\'affaire', error: error.message });
        // // }

        // try {
        //     const details = await PlanAffaireModel.getPlanAffaireDetails(id);
        //     if (details) {
        //         res.status(200).json(details);
        //     } else {
        //         res.status(404).json({ message: 'Plan d\'affaire non trouvé' });
        //     }
        // } catch (error) {
        //     res.status(500).json({ message: 'Erreur lors de la récupération des détails du plan d\'affaire', error: error.message });
        // }


        static async getOnePlanAffaire(req, res) {
            const planAffaireId = req.params.id;
            console.log("id is :", planAffaireId);
            
            try {
                const planAffaire = await PlanAffaireModel.getPlanAffaireDetails(planAffaireId);
                console.log('Fetched planAffaire:', planAffaire);
    
                if (!planAffaire) {
                    console.log("Plan d'affaire non trouvé");
                    return res.status(404).json({ message: "Plan d'affaire non trouvé" });
                }
    
                console.log("Request successfully worked !");
                console.log(planAffaire);
    
                return res.status(200).json(planAffaire);
            } catch (error) {
                console.error('Erreur lors de la récupération du plan d\'affaire', error);
                return res.status(500).json({ message: 'Erreur interne du serveur' });
            }
        }







    static async getOnePlanAffaire_Current(req, res) {
       

        const planAffaireId = req.params.id;
        console.log("id is :", planAffaireId);
        
        try {
            const planAffaire = await PlanAffaireModel.getPlanAffaireDetails(planAffaireId);

            if (!planAffaire) {
                return res.status(404).json({ message: "Plan d'affaire non trouvé" });
            }

            console.log("Request successfully worked !");
            console.log(planAffaire);

            return res.status(200).json(planAffaire);
        } catch (error) {
            console.error('Erreur lors de la récupération du plan d\'affaire', error);
            return res.status(500).json({ message: 'Erreur interne du serveur' });
        }

    }
}

export default PlanAffaireController;
