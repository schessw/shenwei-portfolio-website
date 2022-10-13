import experience from './data/experience.json'
import certification from './data/certification.json'
import education from './data/education.json'
import profile_picture from './../../assets/profilepicture.jpg'

import aaa from './../../assets/cloud-computing.png'
import bbb from './../../assets/data-engineering.png'
import ccc from './../../assets/data-visualization.png'
import ddd from './../../assets/web-development.png'

function Home() {
    return (
    <>
        <div className='flex justify-end my-2'>
            <a href="#aboutme">
                <button className='px-5 py-2 hover:bg-gray-100 mx-1'>About Me</button>
            </a>
            <a href="#experience">
                <button className='px-5 py-2 hover:bg-gray-100 mx-1'>Work Experience</button>
            </a>
            <a href="#contact">
                <button className='px-5 py-2 hover:bg-gray-100 mx-1'>Contact</button>
            </a>
            <a href="#education">
                <button className='px-5 py-2 hover:bg-gray-100 mx-1'>Education</button>
            </a>
            <a href="#certification">
                <button className='px-5 py-2 hover:bg-gray-100 mx-1'>Certification</button>
            </a>
            <a href="#skill">
                <button className='px-5 py-2 hover:bg-gray-100 mx-1'>Skill</button>
            </a>
            <a href="#contact">
                <button className='px-5 py-2 hover:bg-gray-100 mx-1'>Contact Me</button>
            </a>
            
        </div>

        <div className='grid grid-cols-1' id='aboutme'>
            <div className='p-8 md:p-32' style={{backgroundColor: "#ffffb8"}}>
                <div className="container mx-auto max-w-4xl">
                    <div className="md:float-left md:w-66 lg:w-72 w-48 flex justify-center mx-auto">
                        <img className="rounded-xl justify-center" src={profile_picture} alt="" />
                    </div>
                    <p className='md:text-5xl text-3xl font-bold md:text-right p-2'>Yoong Shen Wei</p>
                    <p className='md:text-2xl text-xl font-light md:text-right p-2'>Full Stack Web Developer</p>
                    <div className="lg:float-right lg:justify-start lg:text-justify lg:p-2 lg:w-3/5 flex justify-center mx-auto">
                        <p className=''>Generalist software engineer with more than 2.5 years of working experience in web development, cloud computing, data engineering and data visualization. As a result-oriented fast learner, I am confident that I would be a great asset to your company. I am open to new opportunities to grow my career as a full stack web developer. I look forward to contributing my skills in helping your company to move towards the journey of digital transformation and cloud adoption.</p>
                    </div>
                </div>
                
            </div>
        </div>

        <div className='py-6' style={{backgroundColor: "#ffe7ba"}} id='experience'>
            <div className='container mx-auto max-w-4xl text-left'>
                <h1 className='text-3xl font-bold pb-4 mx-3.5 text-center md:text-left'>Work Experience</h1>
            </div>
            <div className='grid grid-cols-1 gap-4 py-2 mx-5 lg:m-0 '>
                {experience.map(item => (
                    <div className='py-3 rounded-none rounded-br-2xl shadow-sm flex container mx-auto max-w-4xl' style={{backgroundColor: "rgba(255, 255, 255, 0.3)"}}>
                        <div className="w-1/5 px-8 py-8">
                            <img src={item['image']} alt="" className='w-32 mx-4 my-4'/>
                        </div>
                        <div className="w-4/5 text-left px-4 py-8 mx-4">
                            <p className='text-xl font-bold p-0.5'>{item['company']}</p>
                            <p className='p-0.5'>{item['title']}</p>
                            
                            <div className="p-0.5">
                                <span className='mr-1.5 px-1.5 py-0.5 border rounded-sm border-red-200 bg-pink-100 text-sm font-medium'>{(new Date(item['start_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) } - {item['end_date'] !== null? (new Date(item['end_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) : "Present"}</span>
                                <span className='mr-1.5 px-1.5 py-0.5 border rounded-sm border-red-200 bg-pink-100 text-sm font-medium'>{item['type']}</span>
                                <span className='mr-1.5 px-1.5 py-0.5 border rounded-sm border-red-200 bg-pink-100 text-sm font-medium'>{item['location']}</span>
                            </div>
                            <p className='whitespace-pre-line text-justify p-1 pt-3'>
                                <span className='font-bold'>Job Description: </span><br />
                                {item['description']}
                            </p>
                        </div>
                        
                    </div>
                    
                ))}
            </div>
        </div>

        <div className='py-6' style={{backgroundColor: "#d9f7be"}} id='education'>
            <div className='container mx-auto max-w-4xl text-left'>
                <h1 className='text-3xl font-bold pb-4 mx-3.5 text-center md:text-left'>Education</h1>
            </div>
            <div className='grid grid-cols-1 gap-4 py-2 mx-5 lg:m-0 '>
                {education.map(item => (
                    <div className='py-3 rounded-none rounded-br-2xl shadow-sm flex container mx-auto max-w-4xl' style={{backgroundColor: "rgba(255, 255, 255, 0.3)"}}>
                        <div className="w-1/5 px-8 py-8">
                            <img src={item['image']} alt="" className='w-32 mx-4 my-4'/>
                        </div>
                        <div className="w-4/5 text-left px-4 py-8 mx-4">
                            <p className='text-xl font-bold p-0.5'>{item['name']}</p>
                            <p className='p-0.5'>{item['qualification']}</p>
                            
                            <div className="p-1">
                                <span className='mr-1.5 px-1.5 py-0.5 border rounded-sm border-red-200 bg-pink-100 text-sm font-medium'>{(new Date(item['start_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) } - {item['end_date'] !== null? (new Date(item['end_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) : "Present"}</span>
                                <span className='mr-1.5 px-1.5 py-0.5 border rounded-sm border-red-200 bg-pink-100 text-sm font-medium'>{item['grade']}</span>
                            </div>
                            
                        </div>
                    </div>
                ))}
            </div>
        </div>

        <div className='py-6' style={{backgroundColor: "#87e8de"}} id='certification'>
            <div className='container mx-auto max-w-4xl text-left'>
                <h1 className='text-3xl font-bold pb-4 mx-3.5 text-center md:text-left'>Certification</h1>
            </div>
            <div className='grid lg:grid-cols-3 md:grid-cols-2 sm:grids-cols-1 lg:gap-x-4 gap-x-0 gap-y-4 m-8  container mx-auto max-w-4xl'>
                {certification.filter(item => item['issuer'] === "Amazon Web Services (AWS)").map(item => (
                    <div className='p-3 rounded-xl shadow-lg lg:m-0 mx-5' style={{backgroundColor: "#faad14"}}>
                        <div className="hero container max-w-screen-lg mx-auto flex justify-center">
                            <img src={item['image']} alt="" className='w-32 my-3'/>
                        </div>
                        <p className='sm:text-lg md:text-lg lg:text-xl font-bold'>{item['name']}</p>
                        <p>{item['issuer']}</p>
                        <p>{(new Date(item['issue_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) }</p>
                        <p>{item['expiration_date'] !== null? (new Date(item['expiration_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) : "No Expiration Date"}</p>
                        <p>{item['credential_id']}</p>
                        <p>{item['credential_url']}</p>
                    </div>
                ))}

                {certification.filter(item => item['issuer'] === "Microsoft").map(item => (
                    <div className='p-3 rounded-xl shadow-lg lg:m-0 mx-5' style={{backgroundColor: "#b5f5ec"}}>
                        <div className="hero container max-w-screen-lg mx-auto flex justify-center">
                            <img src={item['image']} alt="" className='w-32 my-3'/>
                        </div>
                        <p className='sm:text-lg md:text-lg lg:text-xl font-bold'>{item['name']}</p>
                        <p>{item['issuer']}</p>
                        <p>{(new Date(item['issue_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) }</p>
                        <p>{item['expiration_date'] !== null? (new Date(item['expiration_date'])).toLocaleDateString('en-us', { year:"numeric", month:"long"}) : "No Expiration Date"}</p>
                        <p>{item['credential_id']}</p>
                        <p>{item['credential_url']}</p>
                    </div>
                ))}
            </div>
        </div>

        <div className='py-6' style={{backgroundColor: "#ffd6e7"}} id='skill'>
            <h1 className='text-3xl font-bold p-2'>Skills</h1>
            
        </div>
    </>)
}

export default Home;