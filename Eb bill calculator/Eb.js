let unit =Number(100)//give unit how much you want calculate
let bill 
// let bill_1
// let bill_2

if (unit<=50){
    bill=(unit*0.75)
 console.log(bill)
}
if (unit >=51 && unit<=150){
    bill_1 =Number(unit-50)
    // bill_2 =(bill_1)
    org_bill=((bill_1 * 1)+37.5)
 console.log(org_bill)
}
if (unit >=151 && unit<=250){
    bill_2 =Number(unit-150)
    // 50 unit as per 0.75 && 100 unit as per 1 so total=150 -unit =we get 3 rule
    org_bill=((bill_2 *1.35)+137.5)
 console.log(org_bill)
}
if (unit >=251){
    bill_3 =Number(unit-250)
    org_bill=((bill_3 *1.50)+272.5)
 console.log(org_bill)
}