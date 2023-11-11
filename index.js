let totalDonation = 0;
const donationGoal = 100000;

document.getElementById('button1').addEventListener('click', function() {
    showPopup("GB");
});

document.getElementById('button2').addEventListener('click', function() {
    showPopup("km");
});

document.getElementById('button3').addEventListener('click', function() {
    showPopup("장수");
});

document.getElementById('submitNumber').addEventListener('click', function() {
    const numberInput = parseInt(document.getElementById('numberInput').value, 10);
    if (!isNaN(numberInput)) {
        totalDonation += numberInput;
        updateDonationDisplay();
    } else {
        alert("유효한 숫자를 입력해주세요.");
    }
    document.getElementById('popup').style.display = 'none';
    document.getElementById('numberInput').value = ''; // 입력창을 비웁니다.
});

function showPopup(unit) {
    document.getElementById('popup').style.display = 'block';
    document.getElementById('unitLabel').innerText = unit;
}

function updateDonationDisplay() {
    document.getElementById('donationCount').innerText = `기부: ${totalDonation}/${donationGoal}`;
    const percentage = (totalDonation / donationGoal * 100).toFixed(2);
    document.getElementById('percentage').innerText = `${percentage}%`;
}
