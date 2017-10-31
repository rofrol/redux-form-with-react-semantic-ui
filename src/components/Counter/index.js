import { connect } from 'react-redux';

import Counter from './Counter';


const mapStateToProps = state => ({
    value: state,
});

const mapDispatchToProps = dispatch => ({
    // getCompanyInfo: (payload: { companyId: number }) => dispatch(getCompanyInfo(payload)),
    // searchCompanyByName: (payload: CompanySearchPayloadType) => dispatch(searchCompanyByName(payload)),
    // setCompany: (payload: string) => dispatch(setCompany(payload)),
    // resetFoundCompanies: () => dispatch(resetFoundCompanies()),
    onIncrement: () => dispatch({ type: 'INCREMENT' }),
    onDecrement: () => dispatch({ type: 'DECREMENT' }),
});

export default connect(mapStateToProps, mapDispatchToProps)(Counter);