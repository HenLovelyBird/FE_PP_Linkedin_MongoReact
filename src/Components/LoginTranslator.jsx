import React, {useState} from 'react';
import { Button, Row, Col } from 'reactstrap'
import { useTranslation } from "react-i18next"

function LoginTranslator() {

    const { t, i18n } = useTranslation()  
    const [ langIndex, setLangIndex] = useState(0)
    const langs = ["en", "de", "ru", "it"]

    return (
        <Row>
           <h4>{t("welcome")}</h4> 
           <h5>{t("signinMsg")}</h5>
           <Col>
           <Button color="info" 
                    size="sm" 
                    style={{marginBottom: "2em", color: "black"}}
                    onClick={() => { 
                        setLangIndex(langIndex+1)
                        i18n.changeLanguage(langs[langIndex % langs.length])
                    }}>
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