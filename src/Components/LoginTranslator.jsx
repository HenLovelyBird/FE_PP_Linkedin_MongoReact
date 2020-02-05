import React from 'react';
import { Button, Row, Col } from 'reactstrap'
import { useTranslation } from "react-i18next"

function LoginTranslator(hhhh) {

    const { t, i18n } = useTranslation()  

    return (
        <Row>
           <h4>{t("Welcome to LinkedInMockup!")}</h4> 
           <h5>{t("Please Login or Sign Up")}</h5>
           <Col>
           <Button color="info" 
                    size="sm" 
                    style={{marginBottom: "2em", color: "black"}}
                    onClick={() => i18n.language === "en" ? 
                    i18n.changeLanguage("de", "ru", "it") : 
                    i18n.changeLanguage("en")}>
                    Change Languages</Button></Col>
            
           
        </Row>
    );
    
}

                    {/* // onClick={() => i18n.languages === "en", "de", "ru", "it" ? i18n.changeLanguage(i18n.languages) 
                        // : i18n.changeLanguage("en") }> 

                        // onClick={() => i18n.languages("en", "de", "ru", "it")}>
                        // Language Options </Button>
                        
                        // onClick={() => i18n.language("en")}>en</Button>

                        // <Button color="info" 
                        // size="sm" 
                        // style={{marginBottom: "2em", color: "black"}}
                        // onClick={() => i18n.language("de")}>de</Button>
                        // </Col> */}
                        
export default LoginTranslator;