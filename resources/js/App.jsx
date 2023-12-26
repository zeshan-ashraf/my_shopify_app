import { Provider } from "@shopify/app-bridge-react"
import { useState } from "react"
import { AppProvider,  Page} from "@shopify/polaris"
import enTrnaslations from '@shopify/polaris/locales/en.json'
import MissingApiKey from "./components/MissingApiKey"
import ProductCreator from "./components/ProductCreator"



const App = () => {
    
    
    const [appBridgeConfig] = useState( ()=>{
        const host = new URLSearchParams(location.search).get('host') || window.__SHOPIFY_HOST

        window.__SHOPIFY_HOST = host
        return {
            host,
            apiKey:import.meta.env.VITE_SHOPIFY_API_KEY,
            forceRedirect:true 
        }
       
    })

    if(! appBridgeConfig.apiKey){
        return (
            <AppProvider i18n={enTrnaslations}>
                <MissingApiKey />
            </AppProvider>
        )
    }

    

    return (
        <AppProvider i18n={enTrnaslations}>
            <Provider config={ appBridgeConfig }>

                <div>Hello world app bridge react</div>
                <Page>
                    <ProductCreator />
                </Page>
            </Provider>
        </AppProvider>
    )
}
export default App;