const button = document.querySelector('button')

button.style.padding = '2rem'

button.addEventListener('click', () => {
    console.log('click');
    function getRandomColor() {
        const letters = '0123456789ABCDEF';
        let color = '#';
        for (let i = 0; i < 6; i++) {
            color += letters[Math.floor(Math.random() * 16)];
        }
        return color;
    }

    let clickCount = 0; 

    
    document.getElementById('createCircle').addEventListener('click', function() {
        clickCount++; 
        
        const circle = document.createElement('div');
        circle.classList.add('circle');
        circle.style.backgroundColor = getRandomColor(); 
        document.getElementById('circlesContainer').appendChild(circle);
    });
})

    
