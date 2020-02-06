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

                    
                        
export default LoginTranslator;