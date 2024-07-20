import Navbar from "components/navigation/Navbar"
import Footer from "components/navigation/Footer"
import { connect } from "react-redux"

const FullWidthLayout = ({children}) => {
    return(
        <>
        <Navbar></Navbar>
        {children}
        <Footer></Footer>
        </>
    )
}

const mapStateToProps = state =>({
})

export default connect(mapStateToProps,{
})(FullWidthLayout)