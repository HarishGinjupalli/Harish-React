import React, { useRef } from "react";

let Message6=()=>{

    let pElement1=useRef()   
    

    let myStyle1=()=>{
        pElement1.current.style.color="red";
        pElement1.current.style.backgroundColor="lightblue";
        pElement1.current.style.padding="10px";
    }
    
    return(
        <React.Fragment>
            <div className="container mt-5">
                <div className="row">
                    
                    <p ref={pElement1}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Nam, deserunt quam asperiores porro sunt eligendi ipsam quaerat distinctio saepe aliquam!</p>
                    <p>ipsum dolor sit amet consectetur, adipisicing elit. Quasi, exercitationem libero similique mollitia hic unde qui, sunt corrupti quaerat, veniam quas obcaecati? Repellendus nam facere dolorem ex voluptate tempore quam totam dolores dignissimos, exercitationem adipisci, nulla delectus eum? Odio, exercitationem. Modi laudantium eveniet voluptatum nulla illo eligendi dicta maiores quidem.</p>
                    <p>dolor sit amet, consectetur adipisicing elit. Hic qui, ipsa doloribus commodi repellat error illo laudantium? Ea nostrum doloremque hic impedit nobis odit. Facilis facere modi corrupti quidem velit sequi repudiandae soluta reiciendis inventore reprehenderit? Aut natus ipsam, facilis nesciunt illo obcaecati veniam quam voluptates expedita tempore. Quo ab perferendis pariatur facilis nostrum ea deserunt, vitae est id voluptatem dolorem quos, non, saepe quae provident vel rerum optio sit cum aspernatur expedita neque asperiores possimus error. Optio porro animi et soluta, tenetur impedit doloremque dolore exercitationem aspernatur adipisci dignissimos enim minima facere, temporibus assumenda consequuntur fuga, eaque velit sapiente. Nulla rerum reprehenderit, aut facilis eius officia excepturi quas soluta recusandae error quae accusamus harum fugiat similique tempore accusantium explicabo nostrum dicta perspiciatis aperiam. Eos voluptatem eveniet voluptate pariatur vitae quasi aspernatur atque ex in, facilis possimus fuga repudiandae! Quidem, vel ipsum voluptatem voluptates magni modi obcaecati eaque laboriosam veritatis!</p>
                    
                </div>
                <button class="btn btn-primary" type="submit" onClick={myStyle1}>Apply Style</button>
            </div>
            
        </React.Fragment>
    )
}

export default Message6