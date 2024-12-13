export function initAnimations() {
    document.body.addEventListener('click', (event) => {
        if (event.target.classList.contains('add-to-cart')) {
            const button = event.target;

            for (let i = 0; i < 5; i++) {
                const bubble = document.createElement('div');
                bubble.className = 'bubble';

                const rect = button.getBoundingClientRect();
                const x = Math.random() * rect.width;
                const y = Math.random() * rect.height;
                bubble.style.left = `${x}px`;
                bubble.style.top = `${y}px`;

                button.appendChild(bubble);

                bubble.addEventListener('animationend', () => {
                    bubble.remove();
                });
            }

        }
    });
}
