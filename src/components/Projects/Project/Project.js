import './Project.css'
import slika from'../../../assets/images/projects/laravel_blog.png';

const Project = () => {
    return(
        <div className="project">
            <img src={slika} alt="aa" className="project--image"/>
            <div className="project--info">
                <h3>Laravel Blog</h3>
                <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. </p>
             
                <div className="project--info__tech">
                    <ul>
                        <li>Laravel</li>
                        <li>MySql</li>
                    </ul>
                </div>
                <div className="project--info__links">
                    <a href="">Github repo</a>
                    <a href="">Live Demo</a>
                </div>
            </div>
        </div>
    );
}
export default Project;