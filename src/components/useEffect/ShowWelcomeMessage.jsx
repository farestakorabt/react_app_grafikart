import { useEffect, useState } from 'react';

function PageAvecMessage() {
  const [message, setMessage] = useState(''); // État initial du message

  useEffect(() => {
    setMessage('Welcome'); // Affiche immédiatement le message

    const timer = setTimeout(() => {
      setMessage(''); // Efface le message après 3 secondes (3000 millisecondes)
    }, 1500); // Définir la durée en millisecondes (dans cet exemple, 3 secondes)

    return () => clearTimeout(timer); // Nettoyer le timer lorsque le composant est démonté
  }, []); // Le tableau de dépendances est vide, donc ce code s'exécutera uniquement après le montage initial du composant.

  return (
    <div>
      {message && <h2>{message}</h2>}
      {/* Le reste du contenu de votre page */}
    </div>
  );
}

export default PageAvecMessage;
