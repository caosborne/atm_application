//Begin with the document ready function
$(document).ready(function() {


    //Checking account deposit function
      //On click of the depositChecking button
    $('#depositChecking').click(function(event) {
      // console.log(event);
            //Get value from the amountChecking input field
        var depositAmount = $('#amountChecking').val();
        // console.log(depositAmount)
        //Take that value and add it to the existing value in the checkingBalance div
        var checkingBal = $('#checkingBalance').text();
        // console.log(checkingBal);

        // console.log(strValue);
        var totalBalance =  parseInt(depositAmount) + parseInt(checkingBal.replace('$',''));
        $('#checkingBalance').text('$' + totalBalance);
        // console.log(totalBalance);

        });
          $('#withdrawChecking').click(function(event) {
      // console.log(event);
            //Get value from the amountChecking input field
        var withdrawAmount = $('#amountChecking').val();
        // console.log(depositAmount)
        //Take that value and add it to the existing value in the checkingBalance div
        var checkingBal = $('#checkingBalance').text();
        // console.log(checkingBal);

        // console.log(strValue);
        var totalBalance = parseInt(checkingBal.replace('$','')) - parseInt(withdrawAmount);
        // $('#checkingBalance').text('$' + totalBalance);

        if (totalBalance <= withdrawAmount) {
          $('#checkingBalance').text('$' + totalBalance);
        }



console.log(totalBalance);
      });

    //Checking account withdrawl funtion

      //On click of the withdrawChecking button

        //Get value from the amountChecking input field

        // If that value is greater than the value in the account ignore that action
        // In other words if this would put the account into a negative balance do not allow it

        //Else subtract that value from the current amount in the checking account

    //Savings account deposit function

      //On click of the depositSavings button

        //Get value from the amountSavings input field

        //Take that value and add it to the existing value in the savingsBalance div

    //Savings account withdraw funtion

      //On click of the withdrawl button

        //Get value from the amountSavings input field

         //If that value is greater than the value in the account ignore that action
         //In other words if this would put the account into a negative balance do not allow it

         //Else subtract that value from the current amount in the savings account

// Bonus-- get the two accounts to work with each other and allow for overdraft protection

// Double Bonus-- This isnt very DRY.  Using the keyword "this" see if you can make the withdraw and deposit functions work for both accounts
});
