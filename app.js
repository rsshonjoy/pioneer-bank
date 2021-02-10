        // login button even handler
        const loginBtn = document.getElementById("login");
        loginBtn.addEventListener("click", function(){
            const loginArea = document.getElementById("login-area");
            loginArea.style.display="none"

            const transactionArea = document.getElementById("transaction-area");
            transactionArea.style.display="block"
        })

        // deposit button even handler
        const depositBtn = document.getElementById("addDeposit");
        depositBtn.addEventListener("click", function(){
            // const depositAmount = document.getElementById("depositAmount").value;
            // const depositNumber = parseFloat(depositAmount);
            const depositNumber = getInputNumber("depositAmount")

            
            if (depositNumber < 0) {
                alert("Deposit number cannot be negative!");
            }else{
                
            // const currentDeposit = document.getElementById("currentDeposit").innerText;
            // const currentDepositNumber = parseFloat(currentDeposit);
            // const totalDeposit = depositNumber + currentDepositNumber;
            // document.getElementById("currentDeposit").innerText = totalDeposit;
            updateSpanText("currentDeposit", depositNumber);

            // const currentBalance = document.getElementById("currentBalance").innerText;
            // const currentBalanceNumber = parseFloat(currentBalance);
            // const totalBalance = depositNumber + currentBalanceNumber;
            // document.getElementById("currentBalance").innerText = totalBalance;
            updateSpanText("currentBalance", depositNumber);

            document.getElementById("depositAmount").value = "";
            }
        })


        // withdraw button even handler
        const withdrawBtn = document.getElementById("addWithdraw");
        withdrawBtn.addEventListener("click", function(){
            // const withdrawAmount = document.getElementById("withdrawAmount").value;
            // const withdrawNumber = parseFloat(withdrawAmount);
            const withdrawNumber = getInputNumber("withdrawAmount");

            if (withdrawNumber < 0) {
                alert("Withdraw number cannot be negative!");
            }else{
                updateSpanText("currentWithdraw", withdrawNumber);
                updateSpanText("currentBalance", -1 * withdrawNumber);
    
                document.getElementById("withdrawAmount").value = "";
            }
        })


        function getInputNumber(id){
            const amount = document.getElementById(id).value;
            const amountNumber = parseFloat(amount);
            return amountNumber;
        }

        function updateSpanText (id, depositNumber){
            const current = document.getElementById(id).innerText;
            const currentNumber = parseFloat(current);
            const totalAmount = depositNumber + currentNumber;
            document.getElementById(id).innerText = totalAmount;
        }