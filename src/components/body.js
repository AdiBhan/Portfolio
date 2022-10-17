import Adi_Profile from 'C:/Users/DEV/test-app/src/images/Adi_Profile.jpg';

function body() {
    return (
        <div className = "p-3 flex-center">
            
            <div>
            <p className = "p-2 font-bold "> Hi, I'm Adi! </p>
                <img class = "m-auto" src = {Adi_Profile}></img>
                <div className >
              
                    
                    <p className = "p-2" > I'm currently a Sophomore at <a href = "https://www.bu.edu/cs/">Boston University</a> studying Computer Science. I'm actively pursuing an 2023 Software Development Internship.
                        <p className = "font-bold p-4">[Fall 2022] - Relevant Coursework 
                            <li className = "p-2 font-light">CS112: Introduction to Computer Science II
                                <li>CS131: Combinatoric Stuctures</li>
                            </li> 
                        </p>
                    </p>

                </div>


            </div>

            <form>

            </form>
        
        </div>
    )
}
export default body;