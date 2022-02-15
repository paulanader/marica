import { Base } from "./styles";

export const Main: React.FC = ({ children }) => (  
    <Base>
        <main className="my-2 md-3">
            {children}
        </main> 
    </Base>  
);