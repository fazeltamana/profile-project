import Row from './row/';
export default function AccountDetailsCard(details) {
    return(
        <div className="card cardInfo">
            <h2 className="cardTitle">Account Details</h2>
            <div>
                <Row label="Role" value={details.role}></Row>
                <Row label="Status" value={<span className='pill'>{details.status}</span> }></Row>
                <Row label="Verification" value={<span className='verified'>Verified</span>}></Row>
            </div>
        </div>
    )
}