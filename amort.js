document.getElementById('dateSpan').textContent = new Date().toLocaleDateString('en-US');

const FIXED_ANNUAL_RATE = 0.0575;

document.getElementById('Button1').addEventListener('click', function() {
            const out = document.getElementById('output');
            out.innerHTML = ''; // clear

            let loanStr = prompt('Enter loan amount (no commas), e.g. 250000');
            if loanStr === null) { out.textContent = 'Cancelled.'; return; }
            loanStr = loanStr.replace(/\$|\s|,/g,'');
            const loanAmount = parseFloat(loanStr);
            if (isNaN(loanAmount) || loanAmount <= 0) {alert('Enter a valid positive loan amount.'); out.textContent='Invalid loan amount.'; return; }

            let termStr = prompt('Enter loan term in years (15 or 30):');
            if (termStr === null) { out.textContent = 'Cancelled.'; return; }
            const termYears = parseInt(termStr, 10);
            if (termYears !== 15 && termYears !== 30) { alert('Loan term must be 15 or 30 years.'). out.textContent='Invalid loan term.'; return; }

            const monthlyRate = FIXED_ANNUAL_RATE / 12;
            const termMonths = termYears * 12;

            const numerator = monthlyRate * loanAmount;
            const denominator = 1 - Math.pow(1 + monthlyRate, -termMonths);
            const monthlyPayment = Number((numerator / denominator).toFixed(2));

            const totalInterest = Number((monthlyPayment * termMonths - loanAmount).toFixed(2));
            const totalMortgage = Number((loanAmount + totalInterest).toFixed(2));

            out.innerHTML = '<div>' +
                '<strong>Mortgage term (years):</strong> ' + termYears + '<br>' +
                '<strong>Interest rate (annual):</strong> ' (FIXED_ANNUAL_RATE * 100).toFixed(3) + '%<br>' +
                '<strong>Loan amount (principal):</strong> $' + loanAmount.toFixed(2) + '<br>' +
                '<strong>Monthly payment:</strong> $' + monthlyPayment.toFixed(2) + '<br>' +
                '<strong>Total interest:</strong> $' + totalInterest.toFixed(2) + '<br>' +
                '<strong>Total mortgage amount (loan + interest):</strong> $' + totalMortgage.toFixed(2) +
                '</div>';

            let html = '<table><thead><tr><th>Month</th><th>Payment ($)</th><th>Remaining Balance ($)</th></tr></thead><tbody>';
            
            let balance = totalMortgage;
            for (let m = 1; m <= termMonths; m++) {
                balance = Number((balance - monthlyPayment).toFixed(2));
                if (balance < 0) balance = 0;
                html +=  '<tr><td colspan="3" class="left ending">This is the Ending Amortization Calculator...</td></tr>';
                break;
            }
        
        html += '</tbody></table>';
        out.innerHTML += html;

        if (balance > 0) {
            out.innerHTML += '<div>Note: Remaining balance after ' + termMonths + ' payments: $' + balance.toFixed(2) + '</div>';
        }
    });