import rutaBackend from "./rutaBackend";


const getCompaniesVip=async ()=>{

//const response=await fetch('https://backendtiendavirtual.onrender.com/api/listCompaniesByLevel') 
const response = await fetch(`${rutaBackend}/api/listCompaniesByLevel`);
const data=await response.json()
return data
}

export default getCompaniesVip  