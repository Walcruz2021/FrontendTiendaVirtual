import NavBar from "../../components/NavBar/NavBarBoostrap"
import "./OurCompany.css"
import desarrollo from "./imagenes/desarrollo.png"
import diseño from "./imagenes/diseño.png"
import software from "./imagenes/softwareEmp.png"
import presupuesto from "./imagenes/presupuesto.png"
import ButtonBar from '../../components/ButtonBar/ButtonBar';


const OurCompany = () => {


    return (

        <div>

            <NavBar />
            <div className="titGlobal">
                <h1>NUESTRA EMPRESA</h1>
            </div>

            <div className="classPortada">
                <p>Necesitas ver la adopcion de la Tecnologia como una herramienta indispensable para seguir siendo competitivo en el mundo actual.
                    Los consumidores buscan opciones de consumo, segun se adapten a sus necesidades, brindandoles comodidad, eficencia y mayor tranquilidad sobre la seguridad personal
                    Necesitas alinearte a esta tendencia, y buscar las alternativas digitales para atender a tus clientes
                    PymesWeb no solo te ofrece esta herramienta, ademas te asesora y tiene como objetivo principal que adoptes la tecnologia para tu negocio de manera que establezcas
                    ventajas competitivas con los cuales podras posicionarte en el mercado</p>


                {/* 
                <h3>RENDIMIENTO</h3>
                <p>
                    Buscamos entender tu visión y necesidades hacerlas nuestras.
                </p>

                <h3>DESARROLLO</h3>
                <p>
                    Trabajamos contigo para diseñar una solución pensada en ti y tus usuarios
                    Desarrollo especializado en soluciones empresariales para cualquier tipo de negocio ya sea web, móvil o desktop y justo lo que necesitas.</p>

                <h3>INTEGRACIONES</h3>
                <p>Integramos API's, soluciones de terceros y propias a los desarrollos ofreciendo una mejor experiencia.</p> */}



                <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">
                    <ol className="carousel-indicators">
                        <li data-target="#carouselExampleIndicators" data-slide-to="0" className="active"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="1"></li>
                        <li data-target="#carouselExampleIndicators" data-slide-to="2"></li>
                    </ol>
                    <div className="carousel-inner">
                        <div className="carousel-item active">
                            <h3>DESARROLLO</h3>
                            <img src={desarrollo}></img>
                            <p>Trabajamos contigo para diseñar una solución pensada en ti y tus usuarios
                            Desarrollo especializado en soluciones empresariales para cualquier tipo de negocio ya sea web, móvil o desktop.</p>
                            <div className="itemsDesings">
                            <li>Facilidad de Uso</li>
                            <li>Tecnologia Innovadora</li>
                            </div>
                            <p>La facilidad de uso de la plataforma elegida es un criterio muy importante que debe ser tomado en cuenta. 
                            Una plataforma que brinde esta posibilidad proporcionara un impacto positivo en la calidad del servicio al cliente</p>
                            <p>Es importante que la tecnología aplicada sea lo suficientemente innovadora como para no convertirse en obsoleta 
                            prematuramente.</p>

                        </div>
                        <div className="carousel-item">
                            <h3>DISEÑOS</h3>
                            <img src={diseño}></img>
                            <p>
                            El diseño no es solo lo que parece y se siente. El diseño es como funciona ("Steve Jobs")
                            </p>
                            <h4>El éxito de un software también depende de:</h4>
                            <div className="itemsDesings">
                            <li>Su facilidad de uso.</li>
                            <li>Una buena interfaz de usuario.</li>
                            <li>Sus funcionalidades.</li>
                            <li>Unos contenidos adecuados</li>
                            </div>
                        </div>
                        <div className="carousel-item">
                            <h3>PRESUPUESTO</h3>
                            <img src={presupuesto}></img>
                            {/* <p>Integramos API's, soluciones de terceros y propias a los desarrollos ofreciendo una mejor experiencia.</p> */}
                            <p>
                                Tenemos el Conocimiento y la Preocupacion por satisfacer las necesidades, espectativas y deseos de nuestros clientes. 
                                Sabemos la importancia de optmizar recursos y de sorprenderte con los buenos resultados, por lo tanto, tenemos en cuenta 
                                diferentes rutas, opciones y enfoques. Estamos atentos y abiertos a escucharte. 
                            </p>
                            <h4>Tipos de Presupuestos</h4>
                            <div className="itemsDesings">
                            <li>Presupuestos Flexibles</li>
                            {/* <p>Abierto a posibles modificaciones,cambios o ampliaciones tanto en el servicio como en el presupuesto</p> */}

<li>Presupuestos Fijos</li>
{/* <p>Cerrado, que no admiten cambios, ampliaciones o modificaciones en el servicio</p> */}

<li>A corto/largo plazo</li>
{/* <p>Sabemos que el tiempo es clave para reducir los costes y mejorar la productividad de tu empresa. Es un aspecto fundamental que las empresas no pueden dejar del lado</p> */}

                            </div>
                            
                        </div>
                    </div>
                    <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                        <span className="carousel-control-prev-icon" aria-hidden="true"></span>
                        <span className="sr-only">Previous</span>
                    </a>
                    <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                        <span className="carousel-control-next-icon" aria-hidden="true"></span>
                        <span className="sr-only">Next</span>
                    </a>
                </div>


            </div>



            <ButtonBar />
        </div>

    )
}

export default OurCompany