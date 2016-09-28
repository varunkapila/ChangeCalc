 $( "button" ).click(function() { 
var sales_bill = $('#enterAmount').val();
var cust_Amt = $('#Given').val();
var CalcAmount = cust_Amt - sales_bill;
var DollarAmt = Math.floor (CalcAmount); 
CalcAmount = CalcAmount - DollarAmt; //remaining change in cents

$('#dollars').html(("your change is " + DollarAmt + "Dollars"));

var QuarterAmount = Math.floor (CalcAmount/0.25); 
$('#Quarters').html(("QuarterAmount" + QuarterAmount));
CalcAmount = CalcAmount - (QuarterAmount * 0.25);

var Dimes = Math.floor (CalcAmount/0.10); 
$('#Dimes').html(("Dimes" + Dimes));
CalcAmount = CalcAmount -(Dimes * 0.10); 

var Nickels = Math.floor (CalcAmount/0.05);
$('#Nickels').html(("Nickels " + Nickels));
CalcAmount = CalcAmount - (Nickels * 0.05); 

var Pennies = Math.floor (CalcAmount/0.01);
$('#Pennies').html(("Pennies" + Pennies));
CalcAmount = CalcAmount - (Pennies * 0.01);

});


