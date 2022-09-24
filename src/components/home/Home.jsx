import experience from './data/experience.json'
import certification from './data/certification.json'
import education from './data/education.json'

function Home() {
    return (
    <>
        <div>
            <p>Yoong Shen Wei</p>
            <p>Full Stack Web Developer</p>
        </div>

        <div>
            <h1>About Me</h1>
            <p>
            </p>
            <div style={{backgroundColor: "#ffffb8"}}>
                <p>Passionate about innovation and technology. Interested in Software Development, Cloud Computing and Blockchain. Passionate about innovation and technology. Interested in Software Development, Cloud Computing and Blockchain.</p>
            </div>
        </div>

        <div>
            <h1>Work Experience</h1>
            {experience.map(item => (
                <div style={{backgroundColor: "#bae7ff"}}>
                    <p>{item['company']}</p>
                    <p>{(new Date(item['start_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) } - {item['end_date'] !== null? (new Date(item['end_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) : "Present"}</p>
                    <p>{item['type']}</p>
                    <p>{item['title']}</p>
                    <p>{item['location']}</p>
                    <p>{item['description']}</p>
                </div>
            ))}
        </div>

        <div>
            <h1>Education</h1>
            {education.map(item => (
                <div style={{backgroundColor: "#ffffb8"}}>
                    <p>{item['name']}</p>
                    <p>{item['qualification']}</p>
                    <p>{(new Date(item['start_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) } - {item['end_date'] !== null? (new Date(item['end_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) : "Present"}</p>
                    <p>{item['grade']}</p>
                    <p>{item['title']}</p>
                    <p>{item['description']}</p>
                    <p>{item['subjects'][0]['name']}</p>
                </div>
            ))}
        </div>

        <div>
            <h1>Certification</h1>
            {certification.filter(item => item['issuer'] === "Amazon Web Services (AWS)").map(item => (
                <div style={{backgroundColor: "#faad14"}}>
                    <p>{item['name']}</p>
                    <p>{item['issuer']}</p>
                    <p>{(new Date(item['issue_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) }</p>
                    <p>{item['expiration_date'] !== null? (new Date(item['expiration_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) : "No Expiration Date"}</p>
                    <p>{item['credential_id']}</p>
                    <p>{item['credential_url']}</p>
                </div>
            ))}

            {certification.filter(item => item['issuer'] === "Microsoft").map(item => (
                <div style={{backgroundColor: "#b5f5ec"}}>
                    <p>{item['name']}</p>
                    <p>{item['issuer']}</p>
                    <p>{(new Date(item['issue_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) }</p>
                    <p>{item['expiration_date'] !== null? (new Date(item['expiration_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) : "No Expiration Date"}</p>
                    <p>{item['credential_id']}</p>
                    <p>{item['credential_url']}</p>
                </div>
            ))}
        </div>

        <div>
            <h1>Skill</h1>
        </div>
    </>)
}

export default Home;