window.addEventListener("DOMContentLoaded", (event) => {
    const hamMenu = document.querySelector('img');

    const offScreenMenu = document.querySelector('.navbar');

    hamMenu.addEventListener('click', () => {
        hamMenu.classList.toggle('active');
        offScreenMenu.classList.toggle('active');
    });

    function checkOrientation() {
        const orientationMessage = document.getElementById('orientation-message');

        if (window.matchMedia("(orientation: portrait)").matches) {
            if (!orientationMessage) {
                const messageDiv = document.createElement('div');
                messageDiv.id = 'orientation-message';
                messageDiv.textContent = 'Di kita lahat pag di landscape, landscape mo pls.';
                messageDiv.style.position = 'fixed';
                messageDiv.style.top = '0';
                messageDiv.style.left = '0';
                messageDiv.style.width = '100%';
                messageDiv.style.height = '100%';
                messageDiv.style.backgroundColor = 'rgba(0, 0, 0, 1)';
                messageDiv.style.color = 'white';
                messageDiv.style.textAlign = 'center';
                messageDiv.style.fontSize = '200px';
                messageDiv.style.padding = '10px';
                messageDiv.style.zIndex = '1000';
                document.body.appendChild(messageDiv);
            } else {
                orientationMessage.style.display = 'block';
            }
        } else {
            if (orientationMessage) {
                orientationMessage.style.display = 'none';
            }
        }
    }

    checkOrientation();

    window.addEventListener('orientationchange', checkOrientation);

    window.addEventListener('resize', checkOrientation);
});
