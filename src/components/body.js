import Adi_Profile from 'C:/Users/DEV/test-app/src/images/Adi_Profile.jpg';

function body() {
    return (
        <div className = "p-3 flex-center">
            
            <div>
            <p className = "p-2 font-bold italic"> Hi, I'm Adi! 😊
            </p>
                <img class = "m-auto  rounded-lg h-20 w-20 " src = {Adi_Profile} ></img>
                
                <div className = "p-3">
              
                    
                    <p className = "p-2 italic  border" > I'm currently a Sophomore at <a href = "https://www.bu.edu/cs/">Boston University</a> studying Computer Science. I'm actively pursuing an 2023 Summer Software Development Internship.
                        <p className = "font-bold p-4">[Fall 2022] - Relevant Coursework 
                            <li className = "p-2 font-light"><a href = "https://www.cs.bu.edu/courses/cs112/">CS112: Introduction to Computer Science II 💾</a>
                                <li> <a href = "https://www.bu.edu/academics/cas/courses/cas-cs-131/"> CS131: Combinatoric Stuctures 💾</a></li>
                            </li> 
                        </p>
                    </p>
                </div>
            </div>
        </div>
    )
}
export default body;