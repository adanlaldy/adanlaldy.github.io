// Sélectionnez toutes les images des liens
const links = [
    document.getElementById('link1'),
    document.getElementById('link2'),
    document.getElementById('link3'),
    document.getElementById('link4'),
    document.getElementById('link5'),
    document.getElementById('link6')
];

const buttons = [
    document.getElementById('button1'),
    document.getElementById('button2.1'),
    document.getElementById('button2.2')
]

// Ajoutez les événements pour agrandir les images au survol
links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.2)'; // Agrandissement
        link.style.transition = 'transform 0.3s'; // Animation douce
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)'; // Retour à la taille normale
    });
});

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    })
});
