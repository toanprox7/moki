import { connect } from 'react-redux'
import ItemCategory from '../components/common/ItemCategory'
const mapStateToProps = (state) => {
    return {
        listCategory: state.listCategory
    }
}
export default connect(mapStateToProps,null)(ItemCategory);