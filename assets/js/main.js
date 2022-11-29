// Radio click redirect to page Report List 
const btn = document.querySelector('#generate');
const radioButtons = document.querySelectorAll('input[name="reportList"]');
btn.addEventListener("click", () => {
    let selectedReoprt;
    for (const radioButton of radioButtons) {
        if (radioButton.checked) {
            selectedReoprt = radioButton.id;
            break;
        }
    }
    switch (selectedReoprt) {
        case 'QuotationLowestPrice':
            window.location.assign("file:///C:/Users/Kaizen%20IT/Desktop/Transport%20&%20Equipment%20maintenance%20Organization(TEMO)/InnerPages/ComperativeStatementQuotationPriceBase.html");
            break;
        case 'ComperativeStatementQuotationPriceBase':
            window.location.assign("file:///C:/Users/Kaizen%20IT/Desktop/Transport%20&%20Equipment%20maintenance%20Organization(TEMO)/InnerPages/ComperativeStatementQuotationPriceBase.html");
            break;
        case 'WorkOrderLetter':
            window.location.assign("file:///C:/Users/Kaizen%20IT/Desktop/Transport%20&%20Equipment%20maintenance%20Organization(TEMO)/InnerPages/WorkOrderLetter.html");
            break;
        case 'VehicleRegWiseAsRespectWorkorder':
            window.location.assign("file:///C:/Users/Kaizen%20IT/Desktop/Transport%20&%20Equipment%20maintenance%20Organization(TEMO)/InnerPages/VehicleRegWiseAsRespectWorkorder.html");
            break;
        case 'SparePartsWiseAsRespectWorkorder':
            window.location.assign("file:///C:/Users/Kaizen%20IT/Desktop/Transport%20&%20Equipment%20maintenance%20Organization(TEMO)/InnerPages/SparePartsWiseAsRespectWorkorder.html");
            break;
        case 'Supplier':
            window.location.assign("file:///C:/Users/Kaizen%20IT/Desktop/Transport%20&%20Equipment%20maintenance%20Organization(TEMO)/InnerPages/Supplier.html");
            break;
        case 'IssueVoucherForm':
            window.location.assign("file:///C:/Users/Kaizen%20IT/Desktop/Transport%20&%20Equipment%20maintenance%20Organization(TEMO)/InnerPages/IssueVoucherForm.html");
            break;
        case 'Repair':
            window.location.assign("file:///C:/Users/Kaizen%20IT/Desktop/Transport%20&%20Equipment%20maintenance%20Organization(TEMO)/InnerPages/Repair.html");
            break;
        case 'DemandForm':
            window.location.assign("file:///C:/Users/Kaizen%20IT/Desktop/Transport%20&%20Equipment%20maintenance%20Organization(TEMO)/InnerPages/DemandForm.html");
            break;
        case 'WorkorderTotal':
            window.location.assign("file:///C:/Users/Kaizen%20IT/Desktop/Transport%20&%20Equipment%20maintenance%20Organization(TEMO)/InnerPages/WorkorderTotal.html");
            break;
        case 'PartyWorkorderTotal':
            window.location.assign("file:///C:/Users/Kaizen%20IT/Desktop/Transport%20&%20Equipment%20maintenance%20Organization(TEMO)/InnerPages/PartyWorkorderTotal.html");
            break;
        case 'DeadStock':
            window.location.assign("file:///C:/Users/Kaizen%20IT/Desktop/Transport%20&%20Equipment%20maintenance%20Organization(TEMO)/InnerPages/DeadStock.html");
            break;
        case 'RepairVehicleList':
            window.location.assign("file:///C:/Users/Kaizen%20IT/Desktop/Transport%20&%20Equipment%20maintenance%20Organization(TEMO)/InnerPages/RepairVehicleList.html");
            break;
        default:
            output.innerHTML = selectedReoprt ? `You selected ${selectedReoprt}` : `You haven't selected any report`;

    }


});
