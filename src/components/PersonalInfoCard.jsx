import Row from './row';
export default function PersonalInfoCard(info) {
    return (
        <div className="card infoCard">
            <h2 className='cardTitle'>Personal Information</h2>
            <div className='rows'>
                {object.keys(info).map(label =>{
                    <Row label={label} value={info[label]} />
                })}
            </div>
        </div>
    );
}