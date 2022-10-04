
// This program calculates Mortgage Repayments for fixed rate mortgages

// Creating a class is not necessary in this context, I dit it for best practices
class MortgageCalculator {
    // The constructor is used to instantiate the class attributes required for calculation
    constructor(downPayment, housePrice, interestPA, termLength) {
        // Here the values passed to the constructor are assigned to attributes
        this.downPayment = downPayment;
        this.housePrice = housePrice;
        this.interestPA = interestPA;
        this.termLength = termLength;
    }

    // A method is created to calculate fixed rate mortgages
    fixedRateMortgage() {
        // The principal Loan is calculated. The principal Loan is the amount of money borrowed. Property price - down payment
        // The down payment is entered as a percentage value, therefore an extra calculation is necessary
        const principalLoan = this.housePrice - this.housePrice * (this.downPayment / 100);
        // The monthly interest rate is calculated from the annual interest rate
        const monthlyInterest = this.interestPA / 1200;
        // The duration of the Loan in months is calculated from the given duration in years
        const months = this.termLength * 12;
        // Here the monthly mortgage payment is calculated
        // The original formula M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1] was retrieved from:
        // https://www.businessinsider.com/personal-finance/how-to-calculate-mortgage-payment
        const MonthlyMortgage = principalLoan * monthlyInterest * (Math.pow(1 + monthlyInterest, months)) / (Math.pow(1 + monthlyInterest, months) - 1);

        // The input and output values are presented in the console. They are combined with text to make the output easily readable.
        console.log("Property value: " +this.housePrice)
        // Some outputs like this one show an input variable. We can use the class attribute directly since it has not been changed.
        console.log("Down Payment: " +this.downPayment+"%")
        // This output uses a method variable since it outputs the result of a calculation
        console.log("Principal Loan: "+principalLoan)
        // Outputs class attribute
        console.log("Yearly Interest Rate: "+this.interestPA+"%")
        // Outputs class attribute
        console.log("Loan Duration: "+this.termLength+" Years")
        // This outputs the result of the mortgage calculation, however we round the number down to 2 decimal places for readability.
        console.log("Monthly mortgage payment: "+MonthlyMortgage.toFixed(2))
        // Here we perform a calculation inside the output method to calculate the total amount to be paid, again we round to 2 decimal places
        console.log("Total amount Paid: "+(MonthlyMortgage*months).toFixed(2))
        // This calculation is similar to one above but involves an extra step to calculate the amount of interest paid
        console.log("Total interest Paid: "+((MonthlyMortgage*months)-principalLoan).toFixed(2))
        // The result of the mortgage calculation (Not rounded!) is returned for further use.
        // This is not necessary in this context but this functionality is essential if one would like to use this code in a bigger project.
        return MonthlyMortgage
    }

}
// Here we create a new MortgageCalculator Object from the class we defined above
// The values inside the brackets are the parameters for the calculation
// The object is assigned to the calc variable
calc = new MortgageCalculator(20, 500000, 6, 30);
// The fixedRateMortgage method is invoked. This tells the program to perform the calculation.
// The methods return value is assigned to the monthlyPayment variable which can be used for further
// calculations if this was a bigger project.
monthlyPayment = calc.fixedRateMortgage();
