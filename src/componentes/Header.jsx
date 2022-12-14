import  propTypes  from "prop-types";

const Header = ({bgColor , color }) => {

//Objeto de estilos:

return(
    <header style={{ backgroundColor: bgColor,
                     color: color }}
                     >Encabezado
                     </header>
    )
}

//valores por defecto para las props suministradas
Header.defaultProps={
    bgColor : 'rgba(0,0,0,0.4)',
    color: 'ff6a95'
}
Header.propType ={
    bgColor : propTypes.string.isRequired,
    color: propTypes.string
    
}


export default Header;