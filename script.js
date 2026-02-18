document.addEventListener('DOMContentLoaded', () => {
    const generate1Btn = document.getElementById('generate1Btn');
    const generate5Btn = document.getElementById('generate5Btn');
    const resultsContainer = document.getElementById('resultsContainer');

    generate1Btn.addEventListener('click', () => renderLottoSets(1));
    generate5Btn.addEventListener('click', () => renderLottoSets(5));

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
        resultsContainer.innerHTML = ''; // 기존 결과 초기화

        for (let i = 0; i < count; i++) {
            const numbers = generateSingleSet();
            const setDiv = document.createElement('div');
            setDiv.className = 'lotto-set';
            setDiv.style.animationDelay = `${i * 0.1}s`; // 순차적으로 나타나는 애니메이션 효과

            numbers.forEach(num => {
                const ball = document.createElement('div');
                ball.className = `number ${getBallColorClass(num)}`;
                ball.textContent = num;
                setDiv.appendChild(ball);
            });

            resultsContainer.appendChild(setDiv);
        }
    }

    // 초기 로드 시 1회 추첨 결과 보여주기
    renderLottoSets(1);
});
