const form = document.querySelector('form');
    form.addEventListener('submit', calcZakat);
    form.addEventListener('reset', event => {
        document.getElementById('output').classList.remove('displayBlock')
        document.getElementById('output').classList.add('displayNone')
        document.querySelector('.basis').style.backgroundColor = '';
    })
    function calcZakat(event) {
        event.preventDefault();
        if (!form['basis'].value) {
            alert("select calculation standard")
            document.querySelector('.basis').style.backgroundColor = '#eecdcd';
            return;
        }
        let result = 0;
        let goldSilver = calculateParent('gold-silver')
        let totalCash = calculateParent('cash');
        let loanGiven = calculateParent('loan-given');
        let totalAsset = goldSilver + totalCash + loanGiven;
        let totalLiablity = calculateParent('loan-taken');
        let zakatableAmount = totalAsset - totalLiablity

        let calculationBasis = parseInt(form['basis'].value);
        if (zakatableAmount > calculationBasis) {
            result = (totalAsset - totalLiablity) * 0.025
        } else {
            result = "Below Nesab amount"
        }
        publishResult(totalAsset, totalLiablity, result);
    }
    function calculateParent(parentNodeId) {
        let result = 0;
        Array.from(event.target.elements).some(item => {
            if (item.parentNode.parentNode.id == parentNodeId) {
                result += isNaN(parseInt(item.value)) ? 0 : parseInt(item.value);
            }
        })
        return result;
    }

    function changed(event) {
        document.querySelector('.basis').style.backgroundColor = '';
    }

    function publishResult(totalAsset, totalLiablity, result) {
        document.getElementById('totalZakatableAsset').textContent = totalAsset.toLocaleString();
        document.getElementById('totalLiablity').textContent = totalLiablity.toLocaleString();
        document.getElementById('result').textContent = result.toLocaleString();
        document.getElementById('output').classList.remove('displayNone');
        document.getElementById('output').classList.add('displayBlock');
    }
