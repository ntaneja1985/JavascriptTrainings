//Map Filter and Reduce
//They are higher order functions

const companies = [
    {name:"Google", category:"Product Based", start:1987, end: 2004 },
    {name:"Amazon", category:"Product Based", start:1982, end: 2008 },
    {name:"Paytm", category:"Product Based", start:1984, end: 2007 },
    {name:"Coforge", category:"Service Based", start:1987, end: 2010 },
    {name:"Mindtree", category:"Service Based", start:1989, end: 2011 }
];

const ages = [33,12,20,16,5,44,61,32,10,15];


//regular for loop
for(let i = 0;i < companies.length;i++){
    //console.log(companies[i])
}
//synchronous callback
//forEach
companies.forEach((company,index) => {
    //console.log(company.name,index)
});

//Polyfills are functions used to add functionality of newer Javascript engine to older Javascript engine in older browsers

//Filter

const ageListNew=  ages.filter(function(age){
    return age > 20;
})
//console.log(ageListNew)


//Using Arrow Function
var agesList = ages.filter(x=>x > 20);
//console.log(agesList)


const companyList = companies.filter(x =>x.category ==='Service Based');
//console.log(companyList)


//map function
const dummy = companies.map((company,index)=>{
    return `${company.name} ${company.category} - ${index}`
})

console.log(dummy);

//sort Function
//show companies sorted by start Date
const sortedCompanies = companies.sort((c1,c2)=>{
   return (c1.start > c2.start) ? 1: -1;
})

console.log(sortedCompanies)

//sort ages in ascending order
const sortedAges = ages.sort((c1,c2)=>{
    return (c1 > c2) ? 1: -1;
 })
 console.log(sortedAges)


 //reduce function

 let total = 0;
 for(let i = 0; i< ages.length; i++){
    total += ages[i]
 }

 console.log(total)

 //Now lets do the above by using reduce

 const sumAge = ages.reduce((total,age)=>{
    return total + age;
 },0)
 console.log(sumAge)
