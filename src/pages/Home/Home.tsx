import React, { useEffect, useState } from 'react'
import { Container } from 'react-bootstrap';
import ListCompanies from '../../components/ListCompanies/ListCompanies'
import { useSelector, useDispatch } from 'react-redux';
import useFetchCat from '../../hooks/useFetchCat';
import useFetchSelect from '../../hooks/useFetchSelect';
import Select from "react-select"
import './styles.css';
import { CompanyItem } from '../../types/typeApp';
import { CompanyFetch } from '../../types/typeApp';
import axios from 'axios'
import Company from '../../components/ListCompanies/Company/Company';
import "./Home.css"
import NavBar from '../../components/NavBar/NavBar';
import { Link } from 'react-router-dom';
const Home = () => {


    const { categories } = useFetchCat();

    const arrayOptions = []


    if (categories.length > 0) {

        for (let i = 0; i < categories.length; i++) {
            const option = {
                value: categories[i]._id,
                label: categories[i].name
            }
            arrayOptions.push(option)
        }
    }
    const [loading, setLoading] = useState<Boolean>(false)
    const [selectedOption, setSelectedOption] = useState<any>(null)

    console.log(selectedOption)
    const [selectCompanies, setSelectCompanies] = useState<CompanyFetch>({
        companies: [],
        isLoading: true,
        isError: false
    })

    useEffect(() => {
        setSelectCompanies({
            ...selectCompanies, isLoading: false
        })
    }, [])

    const buttonSelected = async (select: any) => {
        setSelectCompanies({
            ...selectCompanies,
            isLoading: true,
            isError: false
        });
        const response = await axios(`https://backendtiendavirtual.onrender.com/api/listCompaniesByCategory/${select.value}`);
        if (response.data.listCompanies.length > 0) {
            setSelectCompanies({
                companies: response.data.listCompanies,
                isLoading: false,
                isError: false
            });
        }
    }
    //console.log(selectCompanies.companies[0].nameCompany,"dsfsdf")

    return (
        <>
            <NavBar />

            {/* LISTADO DE EMPRESAS */}
            <h2>LAS MEJORES EMPRESAS A TU DISPOSICION</h2>
            <div>
                <ListCompanies />
            </div>


            {/* SELECCION DE EMPRESA A BUSCAR */}


            <div className="containerSelect">
                <Select defaultValue={selectedOption} options={arrayOptions} onChange={setSelectedOption} />
                <button onClick={() => buttonSelected(selectedOption)}>Buscar</button>

            </div>

            <div className="containerFind">
                {selectCompanies.companies.length > 0 && <h1>{selectedOption.label}</h1>}

            </div>


            <div className="ContainerListComp">

                {selectCompanies.isLoading == false ?

                    selectCompanies.companies.map(comp => (
                        <div className="ContainerCompany">
                            <Link style={{ textDecoration: 'none' }} to={`/detailsCompany/${comp._id}`}>
                                <Company
                                    key={comp._id}
                                    company={comp}
                                />
                            </Link>
                        </div>
                    ))
                    : <h1>cargando...</h1>
                }
            </div>





        </>
    )
}

export default Home;
