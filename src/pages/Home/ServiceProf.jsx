import NavBarBoostrap from "../../components/NavBar/NavBarBoostrap";
import IonIcon from "@reacticons/ionicons";
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";
import CompanyServ from "../../components/ListCompanies/Company/CompanyServ";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import rutaBackend from "../../helpers/rutaBackend";
import {
  faTruck,
  faBrush,
  faPlug,
  faToilet,
  faHammer,
} from "@fortawesome/free-solid-svg-icons";
import "./Servicios.css";
import ButtonBarBoostrap from "../../components/ButtonBar/ButtonBarBoostrap";
import ListCompaniesVip from "../../components/ListCompanies/ListCompaniesVip";
import ListProfessionalsVip from "../../components/ListCompanies/ListProfessionalsVip";
import NavBarBoostrapLogin from "../../components/NavBar/NavBarBoostrapLogin";
import { useDispatch, useSelector } from "react-redux";
import { getUserLogin } from "../../reducer/actions";
import { auth } from "../../hooks/configFirebase";

const ServiceProf = () => {
  const [selectedOption, setSelectedOption] = useState(null);
  const [selectCompanies, setSelectCompanies] = useState({
    companies: [],
    isLoading: true,
    isError: false,
  });

  useEffect(() => {
    setSelectCompanies({
      ...selectCompanies,
      isLoading: false,
    });
  }, []);

  const [loginUser, setLoginUser] = useState();
  const dispatch = useDispatch();
  const userFullName = useSelector((state) => state.userDataName);

  useEffect(() => {
    auth.onAuthStateChanged((userCred) => {
      if (userCred) {
        const { email, emailVerified, displayName } = userCred;
        setLoginUser({ email, emailVerified, displayName });
      }
    });
  }, []);

  useEffect(() => {
    if (loginUser && loginUser.emailVerified) {
      dispatch(getUserLogin());
    }
  }, [dispatch, loginUser]);

  const buttonSelected = async (value) => {
    //console.log(value, "categoria elegida en el menu")
    setSelectedOption(value);
    setSelectCompanies({
      ...selectCompanies,
      isLoading: true,
      isError: false,
    });

    //const response = await axios(`https://backendtiendavirtual.onrender.com/api/listCompaniesByCategory/${value}`);
    const response = await axios(
      `${rutaBackend}/api/listServicesByCategory/${value}`
    );
    if (response.data.listServices.length > 0) {
      setSelectCompanies({
        companies: response.data.listServices,
        isLoading: false,
        isError: false,
      });
    }
  };
  return (
    <>
      {userFullName ? (
        <NavBarBoostrapLogin user={userFullName} />
      ) : (
        <NavBarBoostrap />
      )}

      <div className="titGral">
        <h2>SELECCIONE UNA CATEGORIA DE SERVICIO</h2>
      </div>

      <ul className="containerButtons">
        {/* <li>
    <button onClick={() => buttonSelected("6435bc9d6b3be033805c6f07")}>
        <IonIcon name="business-outline"></IonIcon>

    </button>
    <h6 className="titButton">Carpinteria</h6>
</li> */}
        <li>
          <button onClick={() => buttonSelected("6435bcb66b3be033805c6f09")}>
            <IonIcon name="train-outline"></IonIcon>
          </button>
          <h6 className="titButton">Herreria</h6>
        </li>

        <li>
          <button onClick={() => buttonSelected("6435bcc56b3be033805c6f0d")}>
            {/* <FontAwesomeIcon icon={faTruck} style={{color:"#e0e6f0"}} /> */}
            <FontAwesomeIcon icon={faTruck} />
          </button>
          <h6 className="titButton">Fletes</h6>
        </li>

        {/* <li>
    <button onClick={() => buttonSelected("6435bcbe6b3be033805c6f0b")}>
        <IonIcon name="fitness-outline"></IonIcon>
    </button>
    <h6 className="titButton">Durlock</h6>
</li> */}

        <li>
          <button onClick={() => buttonSelected("6435bf606b3be033805c6f13")}>
            <FontAwesomeIcon icon={faToilet} />
          </button>
          <h6 className="titButton">Plomeria</h6>
        </li>

        <li>
          <button onClick={() => buttonSelected("6435bcce6b3be033805c6f0f")}>
            <FontAwesomeIcon icon={faHammer} />
          </button>
          <h6 className="titButton">Albañileria</h6>
        </li>

        <li>
          <button onClick={() => buttonSelected("6435c24c6b3be033805c6f19")}>
            <FontAwesomeIcon icon={faPlug} />
          </button>
          <h6 className="titButton">Electricidad</h6>
        </li>

        <li>
          <button onClick={() => buttonSelected("6435c93b6b3be033805c6f21")}>
            <FontAwesomeIcon icon={faBrush} />
          </button>
          <h6 className="titButton">Pintureria</h6>
        </li>
      </ul>

      <div className="ContainerListComp">
        {selectCompanies.isLoading == false ? (
          selectCompanies.companies.map(
            (company) => (
              console.log(company),
              (
                <div className="ContainerCompany">
                  <CompanyServ key={company._id} company={company} />
                </div>
              )
            )
          )
        ) : (
          <div className="titGral">
            <h1>cargando ....</h1>
          </div>
        )}
      </div>

      <div className="titGral">
        <h2>PROFESIONALES RECOMENDADOS</h2>
      </div>
      <div>
        <ListProfessionalsVip />
      </div>

      <div className="titGral">
        <h2>LAS MEJORES EMPRESAS A TU DISPOSICION</h2>
      </div>
      <div>
        <ListCompaniesVip />
      </div>

      <div className="containerWeb">
        <h4>¿Queres que tu servicio esté en esta página?</h4>
        <Link style={{ textDecoration: "none" }} to={`/login`}>
          <div className="titGral">
            <h3 className="buttonBanner">Clic Aqui</h3>
          </div>
        </Link>
      </div>

      <ButtonBarBoostrap />
    </>
  );
};

export default ServiceProf;
