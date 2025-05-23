const faqs = [
    {
      question: "Qu'est-ce que l'IPTV et comment ça fonctionne en 2025 ?",
      answer: "L'IPTV (Internet Protocol Television) est une technologie innovante qui permet de regarder la télévision via Internet en streaming. Contrairement aux réseaux traditionnels (câble, satellite), l'IPTV utilise votre connexion Internet pour diffuser du contenu en direct et à la demande, offrant une flexibilité et une qualité d'image supérieure.",
    },
    {
      question: "L'IPTV est-il légal en France en 2025 ?",
      answer: "Oui, l'IPTV est parfaitement légal en France lorsqu'il est utilisé avec des services autorisés. Cependant, l'utilisation de flux non autorisés ou piratés reste illégale et peut entraîner des sanctions. Il est important de choisir un fournisseur IPTV respectant les droits d'auteur et les réglementations en vigueur.",
    },
    {
      question: "Quels sont les meilleurs appareils compatibles IPTV en 2025 ?",
      answer: "En 2025, l'IPTV est compatible avec une large gamme d'appareils : Smart TVs (Samsung, LG, Sony), box Android TV, Amazon Fire TV Stick, smartphones (iOS/Android), tablettes, ordinateurs (Windows/Mac), et consoles de jeux. La compatibilité dépend principalement de la qualité de votre connexion Internet.",
    },
    {
      question: "Comment installer et configurer l'IPTV sur Smart TV en 2025 ?",
      answer: "L'installation de l'IPTV sur Smart TV est simple : téléchargez une application comme Smart IPTV ou IPTV Smarters depuis le store de votre TV, entrez vos identifiants fournis par votre abonnement, et commencez à regarder. La plupart des applications offrent une interface intuitive et des guides d'installation détaillés.",
    },
    {
      question: "Quel est le meilleur lecteur IPTV gratuit en 2025 ?",
      answer: "Les meilleurs lecteurs IPTV gratuits en 2025 sont IPTV Smarters Pro, VLC Media Player, et TiviMate. Ces applications offrent une excellente qualité de streaming, une interface utilisateur intuitive, et des fonctionnalités avancées comme l'enregistrement et les favoris.",
    },
    {
      question: "Comment résoudre les problèmes courants d'IPTV en 2025 ?",
      answer: "Les problèmes d'IPTV peuvent être résolus en vérifiant votre connexion Internet (minimum 25 Mbps recommandé), en mettant à jour votre application, en vérifiant la validité de votre abonnement, et en contactant le support client. La plupart des problèmes sont liés à la connexion ou à la configuration.",
    },
    {
      question: "Quelle vitesse Internet est nécessaire pour l'IPTV en 2025 ?",
      answer: "Pour une expérience IPTV optimale en 2025, une connexion Internet d'au moins 25 Mbps est recommandée. Pour le streaming en 4K, 50 Mbps ou plus sont nécessaires. Une connexion stable et un routeur performant sont essentiels pour éviter les coupures.",
    },
    {
      question: "Comment choisir le meilleur abonnement IPTV en 2025 ?",
      answer: "Pour choisir le meilleur abonnement IPTV, considérez la qualité du service, le nombre de chaînes, la stabilité des serveurs, le support client, et les avis utilisateurs. Privilégiez les fournisseurs offrant une période d'essai et des garanties de remboursement.",
    },
    {
      question: "L'IPTV est-il compatible avec les VPN en 2025 ?",
      answer: "Oui, l'IPTV est compatible avec les VPN en 2025. L'utilisation d'un VPN peut améliorer la sécurité et l'accès au contenu, mais choisissez un VPN rapide et fiable pour éviter les problèmes de streaming. Certains fournisseurs IPTV incluent même un VPN dans leur offre.",
    },
    {
      question: "Comment sécuriser mon abonnement IPTV en 2025 ?",
      answer: "Pour sécuriser votre abonnement IPTV, utilisez des mots de passe forts, activez l'authentification à deux facteurs si disponible, évitez de partager vos identifiants, et privilégiez les paiements sécurisés via des plateformes reconnues. Gardez également vos applications à jour.",
    },
    {
      question: "Quelles sont les tendances IPTV à suivre en 2025 ?",
      answer: "Les tendances IPTV en 2025 incluent le streaming en 8K, l'intégration de l'IA pour les recommandations personnalisées, l'augmentation du contenu en réalité virtuelle, et l'amélioration de la qualité de streaming avec des technologies comme l'AV1. Les applications deviennent également plus sociales et interactives.",
    },
    {
      question: "Comment optimiser la qualité de streaming IPTV en 2025 ?",
      answer: "Pour optimiser la qualité de streaming IPTV, utilisez une connexion Internet filaire si possible, mettez à jour régulièrement votre équipement, choisissez un fournisseur avec des serveurs proches, et configurez correctement votre routeur. L'utilisation d'un DNS personnalisé peut également améliorer les performances.",
    },
  ];
  
  export default function FaqPage() {
    return (
      <div className="bg-[#141414] text-white px-6 md:px-12 py-32 mx-auto">
        <div className="text-left space-y-2 mb-12">
          <span className="bg-red-600 text-sm px-4 py-1 rounded-full">FAQS</span>
          <h1 className="text-4xl py-4 font-bold">Guide Complet IPTV 2025 : Questions Fréquentes</h1>
          <p className="text-gray-400">Découvrez tout ce que vous devez savoir sur l&apos;IPTV en 2025 : installation, compatibilité, sécurité et tendances.</p>
        </div>
  
        <div className="grid md:grid-cols-2 gap-10">
          {faqs.map((item, idx) => (
            <div key={idx} className="bg-[#1e1e1e] p-6 rounded-xl hover:bg-[#2a2a2a] transition">
              <h3 className="font-semibold text-lg text-red-500">{item.question}</h3>
              <p className="mt-2 text-sm text-gray-300">{item.answer}</p>
            </div>
          ))}
        </div>
      </div>
    );
  }