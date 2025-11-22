'use client';

import { useState } from 'react';

export default function EBook() {
  const [currentPage, setCurrentPage] = useState(0);

  const pages = [
    // Couverture
    {
      type: 'cover',
      content: (
        <div style={{
          background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'center',
          alignItems: 'center',
          color: 'white',
          padding: '40px',
          textAlign: 'center'
        }}>
          <div style={{
            fontSize: '64px',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)'
          }}>🛒</div>
          <h1 style={{
            fontSize: '48px',
            marginBottom: '20px',
            textShadow: '2px 2px 4px rgba(0,0,0,0.3)',
            fontWeight: 'bold'
          }}>
            GUIDE COMPLET<br/>DU E-COMMERCE
          </h1>
          <p style={{
            fontSize: '24px',
            marginBottom: '40px',
            opacity: 0.9
          }}>
            De la création à la réussite de votre boutique en ligne
          </p>
          <div style={{
            background: 'rgba(255,255,255,0.2)',
            padding: '15px 30px',
            borderRadius: '30px',
            backdropFilter: 'blur(10px)'
          }}>
            <p style={{ fontSize: '18px', margin: 0 }}>Édition 2025</p>
          </div>
        </div>
      )
    },
    // Page 1
    {
      title: 'Table des Matières',
      content: (
        <div>
          <h2>Table des Matières</h2>
          <div style={{ lineHeight: '2' }}>
            <p><strong>Chapitre 1:</strong> Introduction au E-Commerce ..................... 3</p>
            <p><strong>Chapitre 2:</strong> Choisir Votre Niche ............................. 5</p>
            <p><strong>Chapitre 3:</strong> Étude de Marché ................................ 7</p>
            <p><strong>Chapitre 4:</strong> Modèles d'Affaires E-Commerce .................. 9</p>
            <p><strong>Chapitre 5:</strong> Choisir une Plateforme ......................... 11</p>
            <p><strong>Chapitre 6:</strong> Conception de Votre Site ....................... 13</p>
            <p><strong>Chapitre 7:</strong> Gestion des Produits ........................... 15</p>
            <p><strong>Chapitre 8:</strong> Photographie Produit ........................... 17</p>
            <p><strong>Chapitre 9:</strong> Descriptions Produit ........................... 19</p>
            <p><strong>Chapitre 10:</strong> Stratégies de Prix ............................ 21</p>
            <p><strong>Chapitre 11:</strong> Paiements en Ligne ............................ 23</p>
            <p><strong>Chapitre 12:</strong> Logistique et Expédition ...................... 25</p>
            <p><strong>Chapitre 13:</strong> Service Client ................................ 27</p>
            <p><strong>Chapitre 14:</strong> Marketing Digital ............................. 29</p>
            <p><strong>Chapitre 15:</strong> SEO pour E-Commerce ........................... 31</p>
            <p><strong>Chapitre 16:</strong> Réseaux Sociaux ............................... 33</p>
            <p><strong>Chapitre 17:</strong> Email Marketing ............................... 35</p>
            <p><strong>Chapitre 18:</strong> Conclusion et Ressources ...................... 37</p>
          </div>
        </div>
      )
    },
    // Page 2
    {
      title: 'Avant-Propos',
      content: (
        <div>
          <h2>Avant-Propos</h2>
          <p>
            Bienvenue dans le monde passionnant du e-commerce ! Ce guide a été conçu pour vous accompagner
            dans chaque étape de la création et du développement de votre boutique en ligne.
          </p>
          <p>
            Le commerce électronique a révolutionné la façon dont nous achetons et vendons des produits.
            Avec plus de 4,5 milliards d'internautes dans le monde et des ventes en ligne qui dépassent
            les 5 000 milliards de dollars annuellement, les opportunités n'ont jamais été aussi prometteuses.
          </p>
          <p>
            Que vous soyez entrepreneur débutant ou commerçant expérimenté cherchant à digitaliser votre
            activité, ce livre vous fournira les connaissances essentielles pour réussir dans le e-commerce.
          </p>
          <p>
            Nous aborderons tous les aspects cruciaux : de la sélection de votre niche à l'optimisation
            de vos conversions, en passant par la logistique, le marketing digital et la fidélisation client.
          </p>
          <p style={{ fontStyle: 'italic', marginTop: '40px' }}>
            Préparez-vous à transformer votre vision en une boutique en ligne prospère !
          </p>
        </div>
      )
    },
    // Page 3
    {
      title: 'Chapitre 1: Introduction au E-Commerce',
      content: (
        <div>
          <h2>Chapitre 1: Introduction au E-Commerce</h2>
          <h3>Qu'est-ce que le E-Commerce ?</h3>
          <p>
            Le e-commerce, ou commerce électronique, désigne l'achat et la vente de biens ou services
            via Internet. Il englobe toutes les transactions commerciales effectuées en ligne, des
            petites boutiques indépendantes aux géants comme Amazon.
          </p>

          <h3>Les Avantages du E-Commerce</h3>
          <ul>
            <li><strong>Accessibilité 24/7 :</strong> Votre boutique est ouverte en permanence</li>
            <li><strong>Portée mondiale :</strong> Vendez partout dans le monde</li>
            <li><strong>Coûts réduits :</strong> Pas de loyer physique, moins de personnel</li>
            <li><strong>Données précieuses :</strong> Analysez le comportement de vos clients</li>
            <li><strong>Personnalisation :</strong> Offrez une expérience sur mesure</li>
          </ul>

          <h3>Les Défis à Anticiper</h3>
          <p>
            Malgré ses avantages, le e-commerce présente des défis : concurrence intense,
            dépendance à la technologie, gestion de la logistique, et nécessité d'une présence
            digitale forte. Ce guide vous aidera à surmonter ces obstacles.
          </p>
        </div>
      )
    },
    // Page 4
    {
      title: 'Les Types de E-Commerce',
      content: (
        <div>
          <h2>Les Types de E-Commerce</h2>

          <h3>B2C (Business to Consumer)</h3>
          <p>
            Le modèle le plus courant où les entreprises vendent directement aux consommateurs.
            Exemples : boutiques de vêtements en ligne, sites de vente d'électronique.
          </p>

          <h3>B2B (Business to Business)</h3>
          <p>
            Transactions entre entreprises. Les volumes sont généralement plus importants et
            les cycles de vente plus longs. Exemple : fourniture de matières premières.
          </p>

          <h3>C2C (Consumer to Consumer)</h3>
          <p>
            Ventes entre particuliers facilitées par une plateforme. Exemples : eBay,
            Leboncoin, Vinted.
          </p>

          <h3>C2B (Consumer to Business)</h3>
          <p>
            Les particuliers offrent des services aux entreprises. Exemples : freelancing,
            vente de photos sur des banques d'images.
          </p>

          <h3>D2C (Direct to Consumer)</h3>
          <p>
            Les fabricants vendent directement aux consommateurs, éliminant les intermédiaires.
            Ce modèle gagne en popularité car il offre de meilleures marges et un contrôle total
            sur l'expérience client.
          </p>
        </div>
      )
    },
    // Page 5
    {
      title: 'Chapitre 2: Choisir Votre Niche',
      content: (
        <div>
          <h2>Chapitre 2: Choisir Votre Niche</h2>

          <h3>L'Importance de la Niche</h3>
          <p>
            Choisir la bonne niche est crucial pour votre succès. Une niche bien définie vous permet
            de cibler précisément vos clients, de vous démarquer de la concurrence et de devenir
            un expert reconnu dans votre domaine.
          </p>

          <h3>Critères de Sélection</h3>
          <ul>
            <li><strong>Passion et connaissance :</strong> Choisissez un domaine qui vous intéresse</li>
            <li><strong>Demande du marché :</strong> Assurez-vous qu'il existe des acheteurs</li>
            <li><strong>Rentabilité :</strong> Les marges doivent être suffisantes</li>
            <li><strong>Concurrence gérable :</strong> Ni trop faible, ni trop élevée</li>
            <li><strong>Tendances durables :</strong> Évitez les modes passagères</li>
          </ul>

          <h3>Méthodes de Recherche</h3>
          <p>
            Utilisez Google Trends pour identifier les tendances, explorez Amazon pour voir
            les best-sellers, consultez les forums et groupes Facebook pour comprendre les besoins,
            et analysez la concurrence sur Instagram et Pinterest.
          </p>
        </div>
      )
    },
    // Page 6
    {
      title: 'Évaluer Votre Niche',
      content: (
        <div>
          <h2>Évaluer Votre Niche</h2>

          <h3>Questions Essentielles</h3>
          <p>Avant de vous lancer, posez-vous ces questions :</p>
          <ul>
            <li>Qui sont mes clients idéaux ?</li>
            <li>Quels problèmes vais-je résoudre ?</li>
            <li>Quelle est la taille du marché ?</li>
            <li>Puis-je me différencier ?</li>
            <li>Quels sont mes avantages compétitifs ?</li>
          </ul>

          <h3>Le Test de Viabilité</h3>
          <p>
            Créez un MVP (Minimum Viable Product) pour tester votre concept. Lancez une page
            de pré-vente, créez un groupe Facebook, ou démarrez avec une sélection limitée
            de produits pour valider la demande avant d'investir massivement.
          </p>

          <h3>Exemples de Niches Rentables</h3>
          <ul>
            <li>Produits écologiques et durables</li>
            <li>Accessoires pour animaux de compagnie</li>
            <li>Équipement de fitness à domicile</li>
            <li>Produits de beauté naturels</li>
            <li>Gadgets et accessoires technologiques</li>
          </ul>
        </div>
      )
    },
    // Page 7
    {
      title: 'Chapitre 3: Étude de Marché',
      content: (
        <div>
          <h2>Chapitre 3: Étude de Marché</h2>

          <h3>Comprendre Votre Audience</h3>
          <p>
            Une étude de marché approfondie est la fondation de votre succès. Elle vous aide
            à comprendre qui sont vos clients, ce qu'ils veulent, et comment les atteindre.
          </p>

          <h3>Créer des Personas Client</h3>
          <p>Développez des profils détaillés de vos clients idéaux incluant :</p>
          <ul>
            <li>Démographie (âge, sexe, localisation, revenu)</li>
            <li>Psychographie (valeurs, intérêts, style de vie)</li>
            <li>Comportements d'achat</li>
            <li>Points de douleur et motivations</li>
            <li>Canaux de communication préférés</li>
          </ul>

          <h3>Outils d'Analyse</h3>
          <p>
            <strong>Google Analytics :</strong> Analyse du trafic web<br/>
            <strong>SEMrush/Ahrefs :</strong> Recherche de mots-clés<br/>
            <strong>Facebook Audience Insights :</strong> Données démographiques<br/>
            <strong>SurveyMonkey :</strong> Sondages clients<br/>
            <strong>Hotjar :</strong> Comportement utilisateur
          </p>
        </div>
      )
    },
    // Page 8
    {
      title: 'Analyse de la Concurrence',
      content: (
        <div>
          <h2>Analyse de la Concurrence</h2>

          <h3>Identifier Vos Concurrents</h3>
          <p>
            Repérez vos concurrents directs (même produit) et indirects (alternative différente).
            Analysez les leaders du marché et les nouveaux entrants prometteurs.
          </p>

          <h3>Que Analyser ?</h3>
          <ul>
            <li><strong>Offre produit :</strong> Gamme, qualité, prix</li>
            <li><strong>Site web :</strong> Design, UX, fonctionnalités</li>
            <li><strong>Marketing :</strong> Stratégies publicitaires, contenu</li>
            <li><strong>Service client :</strong> Délais de réponse, satisfaction</li>
            <li><strong>Réseaux sociaux :</strong> Engagement, communauté</li>
            <li><strong>Avis clients :</strong> Forces et faiblesses perçues</li>
          </ul>

          <h3>Matrice SWOT</h3>
          <p>
            Créez une analyse SWOT pour votre projet :<br/>
            <strong>Forces :</strong> Vos avantages compétitifs<br/>
            <strong>Faiblesses :</strong> Vos limitations<br/>
            <strong>Opportunités :</strong> Tendances favorables<br/>
            <strong>Menaces :</strong> Risques externes
          </p>
        </div>
      )
    },
    // Page 9
    {
      title: 'Chapitre 4: Modèles d\'Affaires E-Commerce',
      content: (
        <div>
          <h2>Chapitre 4: Modèles d'Affaires E-Commerce</h2>

          <h3>Dropshipping</h3>
          <p>
            <strong>Principe :</strong> Vous vendez des produits sans les stocker. Le fournisseur
            expédie directement au client.<br/>
            <strong>Avantages :</strong> Faible investissement initial, pas de gestion de stock<br/>
            <strong>Inconvénients :</strong> Marges réduites, moins de contrôle qualité
          </p>

          <h3>Vente en Gros / Inventaire</h3>
          <p>
            <strong>Principe :</strong> Achat de stock en gros auprès de fournisseurs.<br/>
            <strong>Avantages :</strong> Meilleures marges, contrôle qualité<br/>
            <strong>Inconvénients :</strong> Investissement initial important, risque de surstockage
          </p>

          <h3>Produits Personnalisés / POD</h3>
          <p>
            <strong>Principe :</strong> Impression à la demande (Print on Demand). Produits
            personnalisés créés à la commande.<br/>
            <strong>Avantages :</strong> Pas de stock, créativité illimitée<br/>
            <strong>Inconvénients :</strong> Marges moyennes, dépendance aux fournisseurs
          </p>
        </div>
      )
    },
    // Page 10
    {
      title: 'Autres Modèles d\'Affaires',
      content: (
        <div>
          <h2>Autres Modèles d'Affaires</h2>

          <h3>Abonnement / Box Mensuelle</h3>
          <p>
            <strong>Principe :</strong> Revenus récurrents avec des envois réguliers.<br/>
            <strong>Exemples :</strong> Box beauté, snacks, livres<br/>
            <strong>Avantages :</strong> Revenus prévisibles, fidélisation<br/>
            <strong>Inconvénients :</strong> Logistique complexe, besoin de renouvellement constant
          </p>

          <h3>Marketplace / Plateforme</h3>
          <p>
            <strong>Principe :</strong> Connecter acheteurs et vendeurs tiers.<br/>
            <strong>Exemples :</strong> Etsy, Amazon Marketplace<br/>
            <strong>Avantages :</strong> Scalabilité, pas de stock<br/>
            <strong>Inconvénients :</strong> Besoin de masse critique, concurrence interne
          </p>

          <h3>Produits Numériques</h3>
          <p>
            <strong>Principe :</strong> Vente de formations, ebooks, logiciels, templates.<br/>
            <strong>Avantages :</strong> Marges de 100%, livraison instantanée, scalable<br/>
            <strong>Inconvénients :</strong> Piratage possible, marché saturé dans certains domaines
          </p>
        </div>
      )
    },
    // Page 11
    {
      title: 'Chapitre 5: Choisir une Plateforme',
      content: (
        <div>
          <h2>Chapitre 5: Choisir une Plateforme</h2>

          <h3>Shopify</h3>
          <p>
            <strong>Idéal pour :</strong> Débutants et boutiques de toutes tailles<br/>
            <strong>Avantages :</strong> Facile à utiliser, hébergement inclus, app store riche<br/>
            <strong>Prix :</strong> À partir de 29$/mois<br/>
            <strong>Limites :</strong> Frais de transaction, personnalisation limitée sans code
          </p>

          <h3>WooCommerce (WordPress)</h3>
          <p>
            <strong>Idéal pour :</strong> Utilisateurs WordPress, besoin de flexibilité<br/>
            <strong>Avantages :</strong> Open source, gratuit, très personnalisable<br/>
            <strong>Prix :</strong> Gratuit (+ hébergement et extensions)<br/>
            <strong>Limites :</strong> Nécessite maintenance technique, courbe d'apprentissage
          </p>

          <h3>PrestaShop</h3>
          <p>
            <strong>Idéal pour :</strong> PME, catalogues importants<br/>
            <strong>Avantages :</strong> Gratuit, multilingue, fonctionnalités avancées<br/>
            <strong>Prix :</strong> Gratuit (+ hébergement)<br/>
            <strong>Limites :</strong> Interface moins intuitive, extensions payantes
          </p>
        </div>
      )
    },
    // Page 12
    {
      title: 'Comparaison des Plateformes',
      content: (
        <div>
          <h2>Comparaison des Plateformes</h2>

          <h3>Autres Solutions Populaires</h3>

          <p><strong>BigCommerce</strong><br/>
          Pour entreprises en croissance, fonctionnalités B2B, SEO optimisé. À partir de 29$/mois.</p>

          <p><strong>Wix eCommerce</strong><br/>
          Éditeur drag & drop intuitif, idéal pour petites boutiques. À partir de 27€/mois.</p>

          <p><strong>Magento (Adobe Commerce)</strong><br/>
          Pour grandes entreprises, ultra personnalisable, nécessite développeurs. Prix sur devis.</p>

          <h3>Critères de Choix</h3>
          <ul>
            <li><strong>Budget :</strong> Initial et mensuel</li>
            <li><strong>Compétences techniques :</strong> Avez-vous besoin de développeur ?</li>
            <li><strong>Scalabilité :</strong> Croissance prévue</li>
            <li><strong>Fonctionnalités :</strong> Vos besoins spécifiques</li>
            <li><strong>Support :</strong> Qualité de l'assistance</li>
            <li><strong>Intégrations :</strong> Compatibilité avec vos outils</li>
          </ul>
        </div>
      )
    },
    // Page 13
    {
      title: 'Chapitre 6: Conception de Votre Site',
      content: (
        <div>
          <h2>Chapitre 6: Conception de Votre Site</h2>

          <h3>Les Principes du Bon Design</h3>
          <p>
            Un design réussi allie esthétique et fonctionnalité. Votre site doit refléter votre
            identité de marque tout en guidant intuitivement le visiteur vers l'achat.
          </p>

          <h3>Éléments Essentiels</h3>
          <ul>
            <li><strong>Navigation claire :</strong> Menu logique, barre de recherche visible</li>
            <li><strong>Design responsive :</strong> Adapté mobile, tablette, desktop</li>
            <li><strong>Vitesse de chargement :</strong> Moins de 3 secondes idéalement</li>
            <li><strong>Images de qualité :</strong> Photos professionnelles, optimisées</li>
            <li><strong>Call-to-Action :</strong> Boutons visibles et incitatifs</li>
            <li><strong>Sécurité visible :</strong> Certificat SSL, badges de confiance</li>
          </ul>

          <h3>Structure de Page d'Accueil</h3>
          <p>
            Hero section accrocheur, proposition de valeur claire, produits vedettes,
            témoignages clients, catégories principales, section "À propos", footer complet.
          </p>
        </div>
      )
    },
    // Page 14
    {
      title: 'UX et Conversion',
      content: (
        <div>
          <h2>UX et Conversion</h2>

          <h3>Optimiser l'Expérience Utilisateur</h3>
          <p>
            L'expérience utilisateur (UX) détermine si vos visiteurs deviennent clients.
            Chaque friction réduit vos conversions.
          </p>

          <h3>Processus d'Achat Simplifié</h3>
          <ul>
            <li>Panier accessible en permanence</li>
            <li>Checkout en une page ou maximum 3 étapes</li>
            <li>Achat invité possible (sans création de compte)</li>
            <li>Multiples options de paiement</li>
            <li>Récapitulatif clair avant validation</li>
            <li>Confirmation immédiate et email</li>
          </ul>

          <h3>Trust Signals (Signaux de Confiance)</h3>
          <p>
            Affichez des avis clients, garanties (satisfait ou remboursé), badges de sécurité,
            certifications, médias qui vous ont cité, nombre de clients satisfaits.
          </p>

          <h3>Tests A/B</h3>
          <p>
            Testez différentes versions de vos pages : couleurs de boutons, textes CTA,
            positions d'éléments, photos produits. Mesurez et optimisez continuellement.
          </p>
        </div>
      )
    },
    // Page 15
    {
      title: 'Chapitre 7: Gestion des Produits',
      content: (
        <div>
          <h2>Chapitre 7: Gestion des Produits</h2>

          <h3>Sourcing de Produits</h3>
          <p>
            Trouver les bons fournisseurs est crucial pour la qualité, les marges et la fiabilité.
          </p>

          <h3>Où Trouver des Fournisseurs ?</h3>
          <ul>
            <li><strong>Alibaba/AliExpress :</strong> Fabricants asiatiques, MOQ variables</li>
            <li><strong>Salons professionnels :</strong> Rencontres directes, échantillons</li>
            <li><strong>Grossistes locaux :</strong> Livraison rapide, support local</li>
            <li><strong>Marketplaces B2B :</strong> Faire, Ankorstore, Shopify Handshake</li>
            <li><strong>Fabrication propre :</strong> Contrôle total, investissement élevé</li>
          </ul>

          <h3>Critères d'Évaluation</h3>
          <ul>
            <li>Qualité des produits (commandez des échantillons)</li>
            <li>Prix et MOQ (Minimum Order Quantity)</li>
            <li>Délais de production et livraison</li>
            <li>Communication et réactivité</li>
            <li>Certifications et conformité</li>
            <li>Réputation et avis d'autres acheteurs</li>
          </ul>
        </div>
      )
    },
    // Page 16
    {
      title: 'Gestion des Stocks',
      content: (
        <div>
          <h2>Gestion des Stocks</h2>

          <h3>Méthodes de Gestion</h3>
          <p>
            <strong>Suivi manuel :</strong> Convient aux très petites boutiques, risque d'erreurs<br/>
            <strong>Tableur Excel/Google :</strong> Solution économique pour démarrer<br/>
            <strong>Logiciel dédié :</strong> Automatisation, alertes de réapprovisionnement
          </p>

          <h3>Indicateurs Clés</h3>
          <ul>
            <li><strong>Rotation des stocks :</strong> Vitesse de vente des produits</li>
            <li><strong>Stock de sécurité :</strong> Quantité minimum pour éviter les ruptures</li>
            <li><strong>Coût de détention :</strong> Stockage, assurance, obsolescence</li>
            <li><strong>Taux de rupture :</strong> Fréquence des produits indisponibles</li>
          </ul>

          <h3>Optimisation</h3>
          <p>
            Utilisez la méthode ABC : classez vos produits par importance (A = 80% du CA,
            B = 15%, C = 5%). Concentrez vos efforts sur les produits A, automatisez le
            réapprovisionnement des B, évaluez la pertinence des C.
          </p>

          <h3>Gestion Multi-Canaux</h3>
          <p>
            Si vous vendez sur plusieurs plateformes, synchronisez vos stocks en temps réel
            pour éviter les surventes et maintenir une expérience client cohérente.
          </p>
        </div>
      )
    },
    // Page 17
    {
      title: 'Chapitre 8: Photographie Produit',
      content: (
        <div>
          <h2>Chapitre 8: Photographie Produit</h2>

          <h3>L'Importance des Photos</h3>
          <p>
            Les photos sont votre vitrine digitale. 67% des consommateurs considèrent que
            la qualité des images est "très importante" dans leur décision d'achat.
          </p>

          <h3>Types de Photos Nécessaires</h3>
          <ul>
            <li><strong>Photo principale :</strong> Fond blanc, produit centré</li>
            <li><strong>Photos multiples angles :</strong> 4-8 images minimum</li>
            <li><strong>Photos détails :</strong> Textures, finitions, étiquettes</li>
            <li><strong>Photos en contexte :</strong> Produit en utilisation</li>
            <li><strong>Photos échelle :</strong> Montrer la taille réelle</li>
            <li><strong>Photos lifestyle :</strong> Ambiance, émotion</li>
          </ul>

          <h3>Équipement de Base</h3>
          <p>
            <strong>Débutant :</strong> Smartphone récent + éclairage naturel + fond blanc<br/>
            <strong>Intermédiaire :</strong> Appareil photo reflex + lightbox + trépieds<br/>
            <strong>Professionnel :</strong> Studio photo + éclairages studio + backdrops
          </p>
        </div>
      )
    },
    // Page 18
    {
      title: 'Techniques de Photographie',
      content: (
        <div>
          <h2>Techniques de Photographie</h2>

          <h3>Conseils Pratiques</h3>
          <ul>
            <li><strong>Lumière naturelle :</strong> Près d'une fenêtre, évitez le soleil direct</li>
            <li><strong>Fond uniforme :</strong> Blanc pour professionnalisme, couleur pour ambiance</li>
            <li><strong>Règle des tiers :</strong> Placez le sujet sur les lignes de grille</li>
            <li><strong>Netteté :</strong> Utilisez un trépied, vitesse d'obturation adéquate</li>
            <li><strong>Format carré :</strong> Idéal pour réseaux sociaux et grilles produits</li>
          </ul>

          <h3>Post-Production</h3>
          <p>
            Retouchez vos photos pour corriger l'exposition, la balance des blancs, et supprimer
            les imperfections. Outils recommandés :
          </p>
          <ul>
            <li><strong>Gratuits :</strong> GIMP, Photopea, Canva</li>
            <li><strong>Payants :</strong> Adobe Photoshop, Lightroom</li>
            <li><strong>Automatiques :</strong> Remove.bg (supprimer fond), Pixlr</li>
          </ul>

          <h3>Optimisation Web</h3>
          <p>
            Compressez vos images sans perte de qualité (TinyPNG, ShortPixel).
            Format WebP recommandé. Visez 100-200 KB par image. Utilisez le lazy loading
            pour charger les images au scroll.
          </p>
        </div>
      )
    },
    // Page 19
    {
      title: 'Chapitre 9: Descriptions Produit',
      content: (
        <div>
          <h2>Chapitre 9: Descriptions Produit</h2>

          <h3>Écrire des Descriptions Vendeuses</h3>
          <p>
            Une bonne description produit ne se contente pas de lister des caractéristiques.
            Elle raconte une histoire et résout des problèmes.
          </p>

          <h3>Structure Idéale</h3>
          <ul>
            <li><strong>Accroche :</strong> Bénéfice principal en une phrase</li>
            <li><strong>Description narrative :</strong> Contexte d'utilisation, émotions</li>
            <li><strong>Caractéristiques clés :</strong> Bullets points lisibles</li>
            <li><strong>Spécifications techniques :</strong> Dimensions, matériaux, poids</li>
            <li><strong>Utilisation :</strong> Comment utiliser le produit</li>
            <li><strong>Call-to-action :</strong> Invitation à l'achat</li>
          </ul>

          <h3>Techniques de Persuasion</h3>
          <p>
            <strong>Bénéfices vs Caractéristiques :</strong> Ne dites pas "batterie 5000mAh",
            dites "2 jours d'autonomie sans recharge"<br/>
            <strong>Storytelling :</strong> Créez un scénario d'utilisation<br/>
            <strong>Mots sensoriels :</strong> Doux, brillant, robuste, léger<br/>
            <strong>Urgence/Rareté :</strong> "Stock limité", "Édition spéciale"
          </p>
        </div>
      )
    },
    // Page 20
    {
      title: 'SEO et Descriptions',
      content: (
        <div>
          <h2>SEO et Descriptions</h2>

          <h3>Optimisation pour les Moteurs de Recherche</h3>
          <p>
            Vos descriptions produit doivent plaire aux humains ET aux moteurs de recherche.
          </p>

          <h3>Bonnes Pratiques SEO</h3>
          <ul>
            <li><strong>Mots-clés naturels :</strong> Intégrez-les sans sur-optimisation</li>
            <li><strong>Titre produit :</strong> Marque + Type + Caractéristique principale</li>
            <li><strong>Meta description :</strong> 150-160 caractères attractifs</li>
            <li><strong>Alt text images :</strong> Décrivez précisément chaque photo</li>
            <li><strong>URL propre :</strong> nom-du-produit-caracteristique</li>
            <li><strong>Contenu unique :</strong> Jamais de copier-coller fournisseur</li>
          </ul>

          <h3>Erreurs à Éviter</h3>
          <ul>
            <li>Descriptions génériques ou copiées</li>
            <li>Jargon technique sans explication</li>
            <li>Absence d'informations essentielles</li>
            <li>Fautes d'orthographe et grammaire</li>
            <li>Promesses exagérées ou mensongères</li>
          </ul>

          <h3>Tests et Amélioration</h3>
          <p>
            Analysez vos taux de conversion par produit. Testez différentes versions de descriptions.
            Enrichissez régulièrement avec les questions clients.
          </p>
        </div>
      )
    },
    // Page 21
    {
      title: 'Chapitre 10: Stratégies de Prix',
      content: (
        <div>
          <h2>Chapitre 10: Stratégies de Prix</h2>

          <h3>Déterminer Votre Prix</h3>
          <p>
            Le prix est l'un des leviers les plus puissants pour votre rentabilité. Un prix
            trop bas érode vos marges, un prix trop élevé limite vos ventes.
          </p>

          <h3>Méthodes de Calcul</h3>
          <p>
            <strong>Coût + Marge :</strong><br/>
            Prix = (Coût d'achat + Frais) × (1 + Marge souhaitée)<br/>
            Simple mais ignore la valeur perçue.
          </p>
          <p>
            <strong>Prix psychologique :</strong><br/>
            Basé sur ce que le client est prêt à payer. Nécessite études de marché et tests.
          </p>
          <p>
            <strong>Prix concurrentiel :</strong><br/>
            Aligné sur la concurrence, avec différenciation sur la valeur ajoutée.
          </p>

          <h3>Psychologie des Prix</h3>
          <ul>
            <li><strong>Prix charmants :</strong> 19,99€ au lieu de 20€</li>
            <li><strong>Ancrage :</strong> Montrer le prix barré à côté du prix réduit</li>
            <li><strong>Prestige :</strong> Prix ronds pour produits haut de gamme (100€)</li>
            <li><strong>Effet de contraste :</strong> Proposer 3 offres (la médiane est la plus vendue)</li>
          </ul>
        </div>
      )
    },
    // Page 22
    {
      title: 'Stratégies Avancées',
      content: (
        <div>
          <h2>Stratégies Avancées</h2>

          <h3>Prix Dynamique</h3>
          <p>
            Ajustez vos prix selon la demande, la saisonnalité, le stock, ou la concurrence.
            Utilisez des outils d'intelligence artificielle pour optimiser automatiquement.
          </p>

          <h3>Bundling (Ventes Groupées)</h3>
          <p>
            Proposez des packs de produits complémentaires à prix réduit. Augmente le panier
            moyen et écoule les stocks moins populaires.
          </p>

          <h3>Freemium et Échantillons</h3>
          <p>
            Offrez une version gratuite ou échantillon pour réduire le risque perçu et
            convertir ensuite en vente premium.
          </p>

          <h3>Promotions et Réductions</h3>
          <ul>
            <li><strong>Flash sales :</strong> Créent urgence et FOMO</li>
            <li><strong>Codes promo :</strong> Récompensent fidélité et incitent à l'achat</li>
            <li><strong>Livraison gratuite :</strong> À partir d'un seuil (augmente panier moyen)</li>
            <li><strong>Soldes saisonnières :</strong> Black Friday, Noël, Soldes</li>
          </ul>

          <h3>Attention aux Marges</h3>
          <p>
            Calculez toujours votre marge nette après TOUS les coûts : produit, shipping,
            packaging, taxes, publicité, frais plateforme, retours.
          </p>
        </div>
      )
    },
    // Page 23
    {
      title: 'Chapitre 11: Paiements en Ligne',
      content: (
        <div>
          <h2>Chapitre 11: Paiements en Ligne</h2>

          <h3>Processeurs de Paiement</h3>
          <p>
            Choisir les bons moyens de paiement est crucial pour maximiser les conversions
            et minimiser l'abandon de panier.
          </p>

          <h3>Solutions Principales</h3>
          <p>
            <strong>Stripe :</strong><br/>
            Le plus populaire. Intégration facile, frais de 1,4% + 0,25€ par transaction.
            Accepte cartes et wallets (Apple Pay, Google Pay).
          </p>
          <p>
            <strong>PayPal :</strong><br/>
            Reconnu et rassurant. Frais 2,9% + 0,35€. Augmente confiance client,
            surtout pour nouveaux e-commerçants.
          </p>
          <p>
            <strong>Square :</strong><br/>
            Idéal si vous avez aussi un point de vente physique. Synchronisation en ligne/magasin.
          </p>

          <h3>Paiement Local</h3>
          <p>
            En France : Bancontact, Lydia<br/>
            En Allemagne : Sofort, Giropay<br/>
            Aux Pays-Bas : iDEAL<br/>
            En Europe : SEPA Direct Debit
          </p>
        </div>
      )
    },
    // Page 24
    {
      title: 'Sécurité et Conformité',
      content: (
        <div>
          <h2>Sécurité et Conformité</h2>

          <h3>Sécuriser les Transactions</h3>
          <ul>
            <li><strong>Certificat SSL :</strong> HTTPS obligatoire, rassure les clients</li>
            <li><strong>PCI-DSS :</strong> Standard de sécurité pour données bancaires</li>
            <li><strong>3D Secure :</strong> Authentification double facteur</li>
            <li><strong>Tokenisation :</strong> Ne stockez jamais les données de carte</li>
            <li><strong>Détection fraude :</strong> Outils de scoring des transactions</li>
          </ul>

          <h3>Gestion des Remboursements</h3>
          <p>
            Définissez une politique claire : délai de rétractation (14 jours minimum en EU),
            conditions de retour, frais de retour, délai de remboursement. Communiquez-la
            clairement sur votre site.
          </p>

          <h3>Conformité RGPD</h3>
          <ul>
            <li>Consentement explicite pour collecter données</li>
            <li>Droit d'accès, rectification, suppression</li>
            <li>Sécurisation des données clients</li>
            <li>Transparence sur l'utilisation des données</li>
            <li>Déclaration CNIL si nécessaire</li>
          </ul>

          <h3>CGV (Conditions Générales de Vente)</h3>
          <p>
            Obligatoires légalement. Incluez : mentions légales, prix, livraison, rétractation,
            garanties, propriété intellectuelle, litiges. Consultez un avocat pour les rédiger.
          </p>
        </div>
      )
    },
    // Page 25
    {
      title: 'Chapitre 12: Logistique et Expédition',
      content: (
        <div>
          <h2>Chapitre 12: Logistique et Expédition</h2>

          <h3>Options de Livraison</h3>
          <p>
            La livraison est un élément clé de la satisfaction client. 55% des acheteurs
            abandonnent leur panier si les frais de port sont trop élevés.
          </p>

          <h3>Modes de Transport</h3>
          <ul>
            <li><strong>Colissimo :</strong> Standard fiable, tracking, points relais</li>
            <li><strong>Chronopost :</strong> Express, garantie de délai</li>
            <li><strong>Mondial Relay :</strong> Économique, réseau de relais dense</li>
            <li><strong>UPS/DHL/FedEx :</strong> International, professionnel</li>
            <li><strong>Transporteurs palettes :</strong> Produits volumineux</li>
          </ul>

          <h3>Stratégies de Frais de Port</h3>
          <p>
            <strong>Gratuit :</strong> Augmente conversions, mais réduisez marges produit<br/>
            <strong>Seuil gratuit :</strong> "Livraison gratuite dès 50€" → augmente panier moyen<br/>
            <strong>Tarif forfaitaire :</strong> Simple, prévisible<br/>
            <strong>Prix réel :</strong> Calculé selon poids/destination<br/>
            <strong>Abonnement :</strong> Type Amazon Prime pour clients fidèles
          </p>
        </div>
      )
    },
    // Page 26
    {
      title: 'Organisation Logistique',
      content: (
        <div>
          <h2>Organisation Logistique</h2>

          <h3>Gestion de l'Entrepôt</h3>
          <p>
            <strong>In-house :</strong> Contrôle total, mais nécessite espace et organisation<br/>
            <strong>3PL (Third-Party Logistics) :</strong> Externalisez stockage et expédition<br/>
            <strong>Dropshipping :</strong> Pas de stock, fournisseur expédie directement
          </p>

          <h3>Processus d'Expédition Efficace</h3>
          <ol style={{ lineHeight: '1.8' }}>
            <li>Réception et vérification de la commande</li>
            <li>Picking (préparation) des produits</li>
            <li>Emballage sécurisé et soigné</li>
            <li>Génération étiquette et tracking</li>
            <li>Envoi notification client avec suivi</li>
            <li>Suivi du colis jusqu'à livraison</li>
          </ol>

          <h3>Packaging</h3>
          <p>
            Le packaging est votre dernière impression. Investissez dans des emballages
            protecteurs et esthétiques. Ajoutez une touche personnelle : carte de remerciement,
            stickers, échantillons. L'unboxing est un moment marketing puissant.
          </p>

          <h3>Retours et SAV</h3>
          <p>
            Facilitez les retours pour rassurer. Fournissez étiquettes prépayées ou instructions
            claires. Traitez rapidement. Les retours bien gérés transforment clients insatisfaits
            en ambassadeurs.
          </p>
        </div>
      )
    },
    // Page 27
    {
      title: 'Chapitre 13: Service Client',
      content: (
        <div>
          <h2>Chapitre 13: Service Client</h2>

          <h3>Excellence du Service Client</h3>
          <p>
            Un excellent service client est votre avantage compétitif ultime. 86% des clients
            sont prêts à payer plus pour une meilleure expérience client.
          </p>

          <h3>Canaux de Support</h3>
          <ul>
            <li><strong>Email :</strong> Standard, traçable, délai réponse &lt; 24h</li>
            <li><strong>Chat en direct :</strong> Instantané, augmente conversions de 40%</li>
            <li><strong>Téléphone :</strong> Pour problèmes complexes, personnel</li>
            <li><strong>Réseaux sociaux :</strong> Rapide, public (attention à l'image)</li>
            <li><strong>FAQ / Base de connaissances :</strong> Réduit tickets de 30%</li>
            <li><strong>Chatbot :</strong> Automatise réponses courantes 24/7</li>
          </ul>

          <h3>Bonnes Pratiques</h3>
          <ul>
            <li><strong>Réactivité :</strong> Répondez sous 2h idéalement</li>
            <li><strong>Empathie :</strong> Comprenez la frustration client</li>
            <li><strong>Solution, pas excuse :</strong> Agissez pour résoudre</li>
            <li><strong>Proactivité :</strong> Anticipez les problèmes</li>
            <li><strong>Personnalisation :</strong> Utilisez le nom, historique</li>
          </ul>
        </div>
      )
    },
    // Page 28
    {
      title: 'Fidélisation Client',
      content: (
        <div>
          <h2>Fidélisation Client</h2>

          <h3>Coût d'Acquisition vs Rétention</h3>
          <p>
            Acquérir un nouveau client coûte 5 à 25 fois plus cher que fidéliser un existant.
            Une augmentation de 5% de la fidélisation augmente les profits de 25 à 95%.
          </p>

          <h3>Programmes de Fidélité</h3>
          <ul>
            <li><strong>Points :</strong> Gagnez des points à chaque achat, échangeables</li>
            <li><strong>Niveaux VIP :</strong> Bronze, Silver, Gold avec avantages croissants</li>
            <li><strong>Cashback :</strong> Pourcentage remboursé sur prochains achats</li>
            <li><strong>Abonnement premium :</strong> Avantages exclusifs moyennant cotisation</li>
          </ul>

          <h3>Surprendre et Ravir</h3>
          <p>
            Surpassez les attentes : expédition plus rapide que promis, échantillons surprises,
            carte d'anniversaire, réductions personnalisées. Ces petites attentions créent
            des ambassadeurs de marque.
          </p>

          <h3>Demander des Avis</h3>
          <p>
            Les avis sont cruciaux (95% consultent avis avant achat). Sollicitez-les par email
            post-achat, offrez petit incentive, facilitez le processus. Répondez à TOUS les avis,
            positifs comme négatifs, avec professionnalisme.
          </p>
        </div>
      )
    },
    // Page 29
    {
      title: 'Chapitre 14: Marketing Digital',
      content: (
        <div>
          <h2>Chapitre 14: Marketing Digital</h2>

          <h3>Stratégie Marketing Globale</h3>
          <p>
            Un bon produit ne suffit pas : il faut le faire connaître. Le marketing digital
            offre des leviers puissants et mesurables pour acquérir et fidéliser des clients.
          </p>

          <h3>Les Piliers du Marketing E-Commerce</h3>
          <ul>
            <li><strong>SEO :</strong> Trafic organique gratuit et durable</li>
            <li><strong>SEA :</strong> Google Ads pour résultats rapides</li>
            <li><strong>Social Media :</strong> Communauté et engagement</li>
            <li><strong>Content Marketing :</strong> Blog, vidéos, guides</li>
            <li><strong>Email Marketing :</strong> ROI le plus élevé (42$ pour 1$ investi)</li>
            <li><strong>Influenceurs :</strong> Crédibilité et reach</li>
            <li><strong>Affiliation :</strong> Partenaires qui promeuvent vos produits</li>
          </ul>

          <h3>Budget Marketing</h3>
          <p>
            Allouez 7-15% de votre CA au marketing (plus au lancement). Testez différents
            canaux, mesurez le ROAS (Return on Ad Spend), doublez sur ce qui fonctionne.
          </p>
        </div>
      )
    },
    // Page 30
    {
      title: 'Publicité Payante',
      content: (
        <div>
          <h2>Publicité Payante</h2>

          <h3>Google Ads</h3>
          <p>
            <strong>Search :</strong> Annonces texte sur recherches Google. Intention d'achat élevée.<br/>
            <strong>Shopping :</strong> Fiches produits avec photo et prix. Taux conversion élevé.<br/>
            <strong>Display :</strong> Bannières sur sites partenaires. Pour notoriété et retargeting.<br/>
            <strong>YouTube :</strong> Vidéos publicitaires, très engageant.
          </p>

          <h3>Facebook & Instagram Ads</h3>
          <p>
            Ciblage ultra-précis (démographie, intérêts, comportements). Formats variés :
            image, carrousel, vidéo, stories, reels. Parfait pour découverte produit et retargeting.
          </p>

          <h3>TikTok Ads</h3>
          <p>
            Audience jeune, format créatif et authentique. Coût par clic plus bas que Facebook.
            Les vidéos organiques peuvent devenir virales.
          </p>

          <h3>Remarketing</h3>
          <p>
            Reciblez les visiteurs qui n'ont pas acheté avec des annonces personnalisées.
            Taux de conversion 10x supérieur. Utilisez Google Remarketing et Facebook Pixel.
          </p>

          <h3>Mesurer le Succès</h3>
          <p>
            Suivez : CPC (coût par clic), CTR (taux de clic), CPA (coût par acquisition),
            ROAS, LTV (lifetime value). Optimisez constamment vos campagnes.
          </p>
        </div>
      )
    },
    // Page 31
    {
      title: 'Chapitre 15: SEO pour E-Commerce',
      content: (
        <div>
          <h2>Chapitre 15: SEO pour E-Commerce</h2>

          <h3>Pourquoi le SEO ?</h3>
          <p>
            43% du trafic e-commerce provient de la recherche organique Google. Le SEO génère
            un trafic gratuit, qualifié et durable. C'est un investissement à long terme rentable.
          </p>

          <h3>SEO On-Page</h3>
          <ul>
            <li><strong>Recherche mots-clés :</strong> Utilisez Google Keyword Planner, Ubersuggest</li>
            <li><strong>Titres optimisés :</strong> H1 avec mot-clé principal</li>
            <li><strong>URLs propres :</strong> Court, descriptif, avec mots-clés</li>
            <li><strong>Meta descriptions :</strong> Incitatives, 150-160 caractères</li>
            <li><strong>Alt text images :</strong> Décrivez chaque image avec mots-clés</li>
            <li><strong>Contenu riche :</strong> Descriptions détaillées, guides d'achat</li>
            <li><strong>Maillage interne :</strong> Liez produits similaires et catégories</li>
          </ul>

          <h3>SEO Technique</h3>
          <ul>
            <li><strong>Vitesse de chargement :</strong> &lt; 3 secondes idéal</li>
            <li><strong>Mobile-first :</strong> Site responsive essentiel</li>
            <li><strong>HTTPS :</strong> Certificat SSL obligatoire</li>
            <li><strong>Sitemap XML :</strong> Soumettre à Google Search Console</li>
            <li><strong>Fichier robots.txt :</strong> Guider les crawlers</li>
            <li><strong>Données structurées :</strong> Schema.org pour rich snippets</li>
          </ul>
        </div>
      )
    },
    // Page 32
    {
      title: 'SEO Off-Page',
      content: (
        <div>
          <h2>SEO Off-Page</h2>

          <h3>Netlinking (Backlinks)</h3>
          <p>
            Les liens externes vers votre site augmentent votre autorité. Qualité &gt; quantité.
            Un lien depuis un site de confiance vaut mieux que 100 liens spammy.
          </p>

          <h3>Stratégies d'Acquisition de Liens</h3>
          <ul>
            <li><strong>Contenu de qualité :</strong> Créez des guides que d'autres voudront citer</li>
            <li><strong>Guest blogging :</strong> Écrivez sur des blogs de votre niche</li>
            <li><strong>Relations presse :</strong> Communiqués, interviews</li>
            <li><strong>Partenariats :</strong> Échanges avec sites complémentaires</li>
            <li><strong>Annuaires qualité :</strong> Listez votre site sur annuaires reconnus</li>
            <li><strong>Réseaux sociaux :</strong> Partagez pour générer buzz et liens</li>
          </ul>

          <h3>SEO Local</h3>
          <p>
            Si vous avez une présence locale, optimisez votre fiche Google Business Profile.
            Collectez avis Google. Utilisez mots-clés locaux. Inscrivez-vous sur Pages Jaunes,
            Yelp, etc.
          </p>

          <h3>Suivi et Analyse</h3>
          <p>
            Utilisez Google Analytics et Search Console pour suivre positions, trafic organique,
            pages performantes. Ajustez votre stratégie selon les données.
          </p>
        </div>
      )
    },
    // Page 33
    {
      title: 'Chapitre 16: Réseaux Sociaux',
      content: (
        <div>
          <h2>Chapitre 16: Réseaux Sociaux</h2>

          <h3>Choisir Vos Plateformes</h3>
          <p>
            Ne soyez pas partout, soyez là où sont vos clients. Mieux vaut exceller sur 2
            plateformes que d'être médiocre sur 6.
          </p>

          <h3>Instagram</h3>
          <p>
            <strong>Idéal pour :</strong> Mode, beauté, déco, lifestyle, food<br/>
            <strong>Formats :</strong> Posts grille, Stories, Reels (priorité algorithme), IGTV<br/>
            <strong>Shopping :</strong> Tagguez produits directement dans posts<br/>
            <strong>Stratégie :</strong> Esthétique cohérente, hashtags pertinents, engagement communauté
          </p>

          <h3>Facebook</h3>
          <p>
            <strong>Idéal pour :</strong> Audience 35+, B2B, communautés locales<br/>
            <strong>Outils :</strong> Boutique Facebook, groupes, événements, Marketplace<br/>
            <strong>Stratégie :</strong> Contenu éducatif et divertissant, publicités ciblées
          </p>

          <h3>TikTok</h3>
          <p>
            <strong>Idéal pour :</strong> Gen Z et Millennials, produits tendance<br/>
            <strong>Format :</strong> Vidéos courtes authentiques et créatives<br/>
            <strong>Stratégie :</strong> Trends, musiques populaires, storytelling, authenticité
          </p>
        </div>
      )
    },
    // Page 34
    {
      title: 'Stratégie de Contenu Social',
      content: (
        <div>
          <h2>Stratégie de Contenu Social</h2>

          <h3>Types de Contenu</h3>
          <ul>
            <li><strong>Produits :</strong> Photos, vidéos, unboxing</li>
            <li><strong>Éducatif :</strong> Tutoriels, conseils, how-to</li>
            <li><strong>UGC :</strong> Contenu créé par utilisateurs (repostez)</li>
            <li><strong>Behind-the-scenes :</strong> Coulisses, équipe, processus</li>
            <li><strong>Divertissant :</strong> Memes, challenges, storytelling</li>
            <li><strong>Social proof :</strong> Témoignages, avis, études de cas</li>
            <li><strong>Promotionnel :</strong> Offres, nouveautés (max 20% du contenu)</li>
          </ul>

          <h3>Fréquence de Publication</h3>
          <p>
            <strong>Instagram :</strong> 1 post/jour + 3-5 stories/jour + 3-5 reels/semaine<br/>
            <strong>Facebook :</strong> 1 post/jour<br/>
            <strong>TikTok :</strong> 1-3 vidéos/jour pour croissance<br/>
            <strong>Pinterest :</strong> 5-10 épingles/jour
          </p>

          <h3>Engagement et Communauté</h3>
          <p>
            Répondez aux commentaires sous 1h. Posez des questions. Lancez sondages et quiz.
            Créez challenges avec hashtag branded. Collaborez avec micro-influenceurs.
            Organisez concours (attention réglementation).
          </p>

          <h3>Outils de Gestion</h3>
          <p>
            Planifiez avec Metricool, Buffer, Later. Créez visuels avec Canva. Analysez
            performances avec insights natifs + Iconosquare.
          </p>
        </div>
      )
    },
    // Page 35
    {
      title: 'Chapitre 17: Email Marketing',
      content: (
        <div>
          <h2>Chapitre 17: Email Marketing</h2>

          <h3>Puissance de l'Email</h3>
          <p>
            L'email marketing génère 42$ de ROI pour chaque dollar investi. C'est le canal
            le plus rentable et vous possédez votre liste (contrairement aux réseaux sociaux).
          </p>

          <h3>Construire Votre Liste</h3>
          <ul>
            <li><strong>Popup d'inscription :</strong> Offrez 10% réduction première commande</li>
            <li><strong>Lead magnet :</strong> Guide gratuit, checklist, ebook en échange d'email</li>
            <li><strong>Concours :</strong> Participation contre inscription</li>
            <li><strong>Checkout :</strong> Opt-in lors de commande</li>
            <li><strong>Footer :</strong> Formulaire sur toutes les pages</li>
          </ul>

          <h3>Emails Automatisés Essentiels</h3>
          <p>
            <strong>Bienvenue :</strong> Série de 3-5 emails pour nouveaux inscrits<br/>
            <strong>Abandon panier :</strong> 3 emails (1h, 24h, 72h après) → récupère 15% ventes perdues<br/>
            <strong>Post-achat :</strong> Confirmation, tracking, demande d'avis<br/>
            <strong>Winback :</strong> Réactivation clients inactifs (90 jours sans achat)<br/>
            <strong>Anniversaire :</strong> Offre spéciale pour fidéliser
          </p>
        </div>
      )
    },
    // Page 36
    {
      title: 'Campagnes Email',
      content: (
        <div>
          <h2>Campagnes Email</h2>

          <h3>Types de Campagnes</h3>
          <ul>
            <li><strong>Newsletter :</strong> Actualités, nouveautés, contenu (hebdo/mensuel)</li>
            <li><strong>Promotionnelles :</strong> Offres spéciales, flash sales</li>
            <li><strong>Éducatives :</strong> Guides d'utilisation, conseils</li>
            <li><strong>Événementielles :</strong> Black Friday, Noël, soldes</li>
            <li><strong>Recommandations :</strong> Produits basés sur historique achat</li>
          </ul>

          <h3>Bonnes Pratiques</h3>
          <ul>
            <li><strong>Objet percutant :</strong> 40 caractères max, créer curiosité/urgence</li>
            <li><strong>Préheader :</strong> Complète l'objet, visible dans aperçu</li>
            <li><strong>Design responsive :</strong> 60% ouvertures sur mobile</li>
            <li><strong>CTA clair :</strong> 1 action principale, bouton visible</li>
            <li><strong>Personnalisation :</strong> Prénom, recommandations personnalisées</li>
            <li><strong>Test A/B :</strong> Objets, CTA, visuels, horaires d'envoi</li>
          </ul>

          <h3>Segmentation</h3>
          <p>
            Ne spammez pas tout le monde avec le même message. Segmentez par : nouveaux vs clients,
            panier moyen, produits achetés, engagement, localisation. Un email pertinent =
            conversions doublées.
          </p>

          <h3>Outils Recommandés</h3>
          <p>
            Mailchimp (gratuit jusqu'à 500 contacts), Klaviyo (spécialisé e-commerce),
            Sendinblue, Omnisend.
          </p>
        </div>
      )
    },
    // Page 37
    {
      title: 'Chapitre 18: Analyse et Optimisation',
      content: (
        <div>
          <h2>Chapitre 18: Analyse et Optimisation</h2>

          <h3>KPIs E-Commerce Essentiels</h3>
          <ul>
            <li><strong>Taux de conversion :</strong> % visiteurs qui achètent (2-3% est correct)</li>
            <li><strong>Panier moyen :</strong> Valeur moyenne des commandes</li>
            <li><strong>CAC :</strong> Coût d'acquisition client</li>
            <li><strong>LTV :</strong> Valeur vie client (doit être 3x le CAC minimum)</li>
            <li><strong>Taux d'abandon panier :</strong> 70% en moyenne, à optimiser</li>
            <li><strong>Taux de retour :</strong> % produits retournés</li>
            <li><strong>NPS :</strong> Net Promoter Score, satisfaction client</li>
          </ul>

          <h3>Google Analytics</h3>
          <p>
            Configurez GA4 pour suivre : sources de trafic, comportement utilisateur,
            entonnoir de conversion, produits les plus vus/achetés, pages de sortie.
          </p>

          <h3>CRO (Conversion Rate Optimization)</h3>
          <p>
            Optimisez chaque étape du parcours client. Testez titres, CTA, couleurs, placement
            éléments, processus checkout. Une amélioration de 0,5% du taux de conversion peut
            doubler vos profits.
          </p>
        </div>
      )
    },
    // Page 38
    {
      title: 'Croissance et Scaling',
      content: (
        <div>
          <h2>Croissance et Scaling</h2>

          <h3>Quand Scaler ?</h3>
          <p>
            Ne scalez pas prématurément. Assurez-vous d'abord d'avoir : produit validé,
            processus rodés, marge saine, trésorerie suffisante, équipe capable.
          </p>

          <h3>Stratégies de Croissance</h3>
          <ul>
            <li><strong>Expansion produit :</strong> Élargir gamme, nouveaux modèles</li>
            <li><strong>Nouveaux marchés :</strong> International, nouveaux segments</li>
            <li><strong>Multi-canal :</strong> Vendre sur Amazon, Etsy, marketplaces</li>
            <li><strong>Point de vente physique :</strong> Pop-up store, boutique</li>
            <li><strong>B2B :</strong> Vendre en gros à d'autres retailers</li>
            <li><strong>Franchise/Licence :</strong> Permettre à d'autres de vendre votre concept</li>
          </ul>

          <h3>Automatisation</h3>
          <p>
            Automatisez tout ce qui est répétitif : emails marketing, réseaux sociaux,
            réapprovisionnement, facturation, reporting. Gagnez du temps pour la stratégie.
          </p>

          <h3>Délégation et Équipe</h3>
          <p>
            Vous ne pouvez pas tout faire seul. Recrutez ou externalisez : VA (assistant virtuel),
            graphiste, copywriter, community manager, développeur. Concentrez-vous sur votre zone
            de génie.
          </p>
        </div>
      )
    },
    // Page 39
    {
      title: 'Conclusion',
      content: (
        <div>
          <h2>Conclusion</h2>

          <h3>Votre Aventure E-Commerce Commence</h3>
          <p>
            Félicitations d'être arrivé jusqu'ici ! Vous avez maintenant toutes les connaissances
            fondamentales pour lancer et développer votre boutique en ligne avec succès.
          </p>

          <h3>Les Clés du Succès</h3>
          <ul>
            <li><strong>Action :</strong> La connaissance sans action ne vaut rien. Lancez-vous !</li>
            <li><strong>Persévérance :</strong> Le succès prend du temps. Restez constant.</li>
            <li><strong>Apprentissage continu :</strong> Le e-commerce évolue rapidement</li>
            <li><strong>Focus client :</strong> Obsédez-vous de leur satisfaction</li>
            <li><strong>Test et itération :</strong> Améliorez continuellement</li>
            <li><strong>Patience :</strong> Les résultats exponentiels prennent 12-24 mois</li>
          </ul>

          <h3>Prochaines Étapes</h3>
          <ol style={{ lineHeight: '1.8' }}>
            <li>Définissez votre niche et validez la demande</li>
            <li>Créez votre business plan et budget</li>
            <li>Choisissez votre plateforme et lancez MVP</li>
            <li>Sourcez vos premiers produits</li>
            <li>Construisez votre audience avant de lancer</li>
            <li>Lancez et collectez feedback</li>
            <li>Itérez, optimisez, scalez</li>
          </ol>
        </div>
      )
    },
    // Page 40
    {
      title: 'Ressources',
      content: (
        <div>
          <h2>Ressources Utiles</h2>

          <h3>Outils E-Commerce</h3>
          <p>
            <strong>Plateformes :</strong> Shopify, WooCommerce, PrestaShop<br/>
            <strong>Analytics :</strong> Google Analytics, Hotjar, Crazy Egg<br/>
            <strong>Email :</strong> Mailchimp, Klaviyo, Sendinblue<br/>
            <strong>SEO :</strong> Ahrefs, SEMrush, Ubersuggest<br/>
            <strong>Design :</strong> Canva, Figma, Adobe Creative Suite<br/>
            <strong>Shipping :</strong> Shipstation, Easyship, Sendcloud<br/>
            <strong>Support :</strong> Zendesk, Intercom, Gorgias
          </p>

          <h3>Communautés</h3>
          <ul>
            <li>Groupes Facebook e-commerce francophones</li>
            <li>Reddit: r/ecommerce, r/shopify</li>
            <li>Forums WooCommerce et PrestaShop</li>
            <li>Meetups locaux d'entrepreneurs</li>
          </ul>

          <h3>Formation Continue</h3>
          <ul>
            <li>Blogs : Shopify Blog, Neil Patel, Moz</li>
            <li>Podcasts : E-Commerce Influencers, My Wife Quit Her Job</li>
            <li>YouTube : Wholesale Ted, Dan Vas, Verum Ecom</li>
            <li>Cours : Udemy, Coursera, LinkedIn Learning</li>
          </ul>

          <h3>Bonne chance dans votre aventure !</h3>
          <p style={{ textAlign: 'center', fontSize: '24px', marginTop: '40px' }}>🚀 💪 🛒</p>
        </div>
      )
    }
  ];

  const nextPage = () => {
    if (currentPage < pages.length - 1) {
      setCurrentPage(currentPage + 1);
    }
  };

  const prevPage = () => {
    if (currentPage > 0) {
      setCurrentPage(currentPage - 1);
    }
  };

  const goToPage = (index) => {
    setCurrentPage(index);
  };

  return (
    <div style={{
      fontFamily: 'Georgia, serif',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      background: '#f5f5f5',
      minHeight: '100vh'
    }}>
      <div style={{
        background: 'white',
        boxShadow: '0 10px 40px rgba(0,0,0,0.1)',
        minHeight: '600px',
        position: 'relative',
        borderRadius: '8px',
        overflow: 'hidden'
      }}>
        {pages[currentPage].type === 'cover' ? (
          pages[currentPage].content
        ) : (
          <div style={{ padding: '60px', minHeight: '600px' }}>
            {pages[currentPage].content}
          </div>
        )}

        <div style={{
          position: 'absolute',
          bottom: '20px',
          left: '50%',
          transform: 'translateX(-50%)',
          display: 'flex',
          gap: '20px',
          alignItems: 'center'
        }}>
          <button
            onClick={prevPage}
            disabled={currentPage === 0}
            style={{
              padding: '10px 20px',
              background: currentPage === 0 ? '#ccc' : '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: currentPage === 0 ? 'not-allowed' : 'pointer',
              fontSize: '16px'
            }}
          >
            ← Précédent
          </button>

          <span style={{ fontSize: '14px', color: '#666' }}>
            Page {currentPage + 1} / {pages.length}
          </span>

          <button
            onClick={nextPage}
            disabled={currentPage === pages.length - 1}
            style={{
              padding: '10px 20px',
              background: currentPage === pages.length - 1 ? '#ccc' : '#667eea',
              color: 'white',
              border: 'none',
              borderRadius: '5px',
              cursor: currentPage === pages.length - 1 ? 'not-allowed' : 'pointer',
              fontSize: '16px'
            }}
          >
            Suivant →
          </button>
        </div>
      </div>

      <div style={{
        marginTop: '30px',
        display: 'flex',
        gap: '5px',
        flexWrap: 'wrap',
        justifyContent: 'center'
      }}>
        {pages.map((_, index) => (
          <button
            key={index}
            onClick={() => goToPage(index)}
            style={{
              width: '30px',
              height: '30px',
              background: currentPage === index ? '#667eea' : '#ddd',
              color: currentPage === index ? 'white' : '#666',
              border: 'none',
              borderRadius: '4px',
              cursor: 'pointer',
              fontSize: '12px'
            }}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </div>
  );
}
