
import PlanAffaire from "../../model/Utils/PlanAffaires/PlanAffaire.js";

function deserialiserPlanAffaire(jsonPlan) {
    const {
        id,
        entrepreneur_id,
        plan_affaire_nom,
        domaine,
        chemin_acces_pdf_file,
        chemin_acces_word_file,
        chemin_acces_donnees_financiere,
        chemin_acces_donnees_financiere_traite,
        sections
    } = jsonPlan;

    const planAffaire = new PlanAffaire(
        id,
        entrepreneur_id,
        plan_affaire_nom,
        domaine,
        chemin_acces_pdf_file,
        chemin_acces_word_file,
        chemin_acces_donnees_financiere,
        chemin_acces_donnees_financiere_traite
    );

    sections.forEach(sectionData => {
        const { id, titre, sous_sections, tableaux } = sectionData;
        const section = planAffaire.ajouterSection(titre);

        sous_sections.forEach(sousSectionData => {
            const { id, titre_partie, contenus } = sousSectionData;
            section.ajouterSectionContenu(titre_partie, contenus);
        });

        tableaux.forEach(tableauData => {
            const { id, nom_tableau, lignes } = tableauData;
            const tableau = section.ajouterTableau(nom_tableau);

            lignes.forEach(ligneData => {
                const { id, elements } = ligneData;
                const elementsLigne = elements.map(element => ({
                    id: element.id,
                    element: element.element
                }));
                tableau.ajouterLigne(elementsLigne);
            });
        });
    });

    return planAffaire;
}

async function fetchPlanAffaire(id) {
    try {
        const response = await fetch(`/api/plan-affaire/${id}`);
        if (!response.ok) {
            throw new Error(`Erreur HTTP! Statut : ${response.status}`);
        }
        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Erreur lors de la récupération du plan d\'affaire:', error.message);
        throw error;
    }
}




    // Fonction pour récupérer et afficher un plan d'affaire
async function afficherPlanAffaire(id) {
    try {
        const data = await fetchPlanAffaire(id);
        const planAffaire = deserialiserPlanAffaire(data);

        // Utilisez planAffaire comme vous le souhaitez dans votre application
        console.log('Plan d\'affaire récupéré:', planAffaire);
        // Exemple : Afficher les sections
        planAffaire.sections.forEach(section => {
            console.log(section.titre);
            section.tableaux.forEach(tableau => {
                console.log(tableau.nomTableau);
                tableau.lignes.forEach(ligne => {
                    console.log(ligne.elements);
                });
            });
        });

    } catch (error) {
        console.error('Erreur lors de l\'affichage du plan d\'affaire:', error.message);
    }
}

// Exemple d'utilisation avec un ID spécifique
const planAffaireId = 2; // Remplacez par l'ID de votre plan d'affaire spécifique
afficherPlanAffaire(planAffaireId);
