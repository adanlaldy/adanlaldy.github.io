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
];

links.forEach(link => {
    link.addEventListener('mouseover', () => {
        link.style.transform = 'scale(1.2)';
        link.style.transition = 'transform 0.3s';
    });

    link.addEventListener('mouseout', () => {
        link.style.transform = 'scale(1)';
    });
});

buttons.forEach(button => {
    button.addEventListener('mouseover', () => {
        button.style.transform = 'scale(1.1)';
        button.style.transition = 'transform 0.3s';
    });

    button.addEventListener('mouseout', () => {
        button.style.transform = 'scale(1)';
    });
});
