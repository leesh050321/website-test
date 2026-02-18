document.addEventListener('DOMContentLoaded', () => {
    const generate1Btn = document.getElementById('generate1Btn');
    const generate5Btn = document.getElementById('generate5Btn');
    const resultsContainer = document.getElementById('resultsContainer');

    // 요소가 존재하는지 확인 후 이벤트 리스너 등록
    if (generate1Btn) {
        generate1Btn.addEventListener('click', () => renderLottoSets(1));
    }
    if (generate5Btn) {
        generate5Btn.addEventListener('click', () => renderLottoSets(5));
    }

    function getBallColorClass(num) {
        if (num <= 10) return 'ball-yellow';
        if (num <= 20) return 'ball-blue';
        if (num <= 30) return 'ball-red';
        if (num <= 40) return 'ball-gray';
        return 'ball-green';
    }

    function generateSingleSet() {
        const numbers = new Set();
        while (numbers.size < 6) {
            numbers.add(Math.floor(Math.random() * 45) + 1);
        }
        return Array.from(numbers).sort((a, b) => a - b);
    }

    function renderLottoSets(count) {
        if (!resultsContainer) return;
        
        resultsContainer.innerHTML = ''; 

        for (let i = 0; i < count; i++) {
            const numbers = generateSingleSet();
            const setDiv = document.createElement('div');
            setDiv.className = 'lotto-set';
            setDiv.style.animationDelay = `${i * 0.1}s`;

            numbers.forEach(num => {
                const ball = document.createElement('div');
                ball.className = `number ${getBallColorClass(num)}`;
                ball.textContent = num;
                setDiv.appendChild(ball);
            });

            resultsContainer.appendChild(setDiv);
        }
    }

    // 초기 실행
    if (resultsContainer) {
        renderLottoSets(1);
    }
});
