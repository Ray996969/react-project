import {useState} from 'react'
import BlogList from './BlogList'

function Home(){

    const [name,setName] = useState('name')

    const handleClick = (param)=>{
        setName(`${param} + newName`)
    }

    const [blogs,setBlog] = useState([
        {title: 'first title',body:'main body',author:"first author",id:'1'},
        {title: 'second title',body:'second body',author:"second author",id:'2'},
        {title: 'third title',body:'third body',author:"third author", id:'3'}


    ])



    return(
        <div className="home">
            <h1>Home Page</h1>
            <p>{name}</p>
            <button onClick={()=>handleClick("hello")}>Click Me</button>
            
                <BlogList blogs = {blogs}/>    {/*props is use to passing data from parent componet to child componet e,g data from HOME to BlogList */}     
                <BlogList blogs = {blogs.filter((blog)=>{
                    return(
                        blog.author ==='first author'

                    )
                })}/>


        </div>
       

    )


}
export default Home

