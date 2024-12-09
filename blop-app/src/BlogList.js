function BlogList(props) {
    const blogs = props.blogs

    return (
        <div className="blog-list">
            {

                blogs.map((blog) => {
                  
                    return (
                        <div className='blog-preview' key={blog.id}>
                            <h2>{blog.title}</h2>
                            <h3>{blog.body}</h3>
                            <h4>{blog.author}</h4>



                        </div>

                    )
                })
                
                console.log();
                
                
            }


        </div>






    )




}

export default BlogList