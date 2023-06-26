const calculateROI = () => {
  function calculateROI() {
    var employeesRetained = parseInt(document.getElementById("employeesRetained").value);
    var averageSalary = parseFloat(document.getElementById("averageSalary").value);
    var replacementCostMultiplier = parseFloat(document.getElementById("replacementCostMultiplier").value);
    var mentoringSoftwareCosts = parseFloat(document.getElementById("mentoringSoftwareCosts").value);

    var employeeReplacementCost = averageSalary * replacementCostMultiplier;
    var retentionSavings = employeesRetained * employeeReplacementCost;
    var programROI = (retentionSavings / mentoringSoftwareCosts) * 100;

    document.getElementById("result").innerHTML = "Program ROI: " + programROI.toFixed(2) + "%";
};

document.getElementById('calculateButton').addEventListener('click', calculateROI); }
